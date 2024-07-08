import { atom } from 'jotai';
import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from 'lz-string';

import { Charset, generateTree } from '../lib/generate-tree';
import { parseInput } from '../lib/parse-input';
import { getParameterByName } from '../third-party/get-parameter-by-name';
import { JSONCrush, JSONUncrush } from '../third-party/JSONCrush';

export const CURRENT_SAVED_STATE_SCHEMA_VERSION = '5';

export const LS_KEY = 'SAVED_STATE';

export const QUERY_KEY = 's';

export interface AppState {
  source?: string;
  version?: string;
  options: {
    charset: Charset;
    trailingSlash: boolean;
    rootDot: boolean;
    useIcon: boolean;
  };
}

export const DEFAULT_OPTIONS: AppState['options'] = {
  charset: 'utf-8',
  trailingSlash: true,
  rootDot: false,
  useIcon: false,
};

export const DEFAULT_SOURCE = `
Edit me to generate
  a
    nice
      tree
        diagram!
        :)
  Use indentation
    to indicate
      file
      and
      folder
      nesting.
    - You can even
      - use
        - markdown
        - bullets!

`.trim();

function getSavedStateFromQueryParam(): AppState | undefined {
  try {
    const rawSavedState = getParameterByName(QUERY_KEY);
    const decompressedState = decompressJson(rawSavedState);
    const processedSavedState = processSavedState(decompressedState, 'query');
    return processedSavedState;
  } catch (error) {
    console.error('Error getting saved state from query param', error);
    return undefined;
  }
}

function getSavedStateFromLocalStorage(): AppState | undefined {
  try {
    const rawSavedState = localStorage.getItem(LS_KEY);
    const processedSavedState = processSavedState(rawSavedState, 'local');
    return processedSavedState;
  } catch (error) {
    console.error('Error getting saved state from local storage', error);
    return undefined;
  }
}

function processSavedState(
  rawSavedState: string | null,
  storageType: 'query' | 'local',
): AppState | undefined {
  if (!rawSavedState) {
    return undefined;
  }

  try {
    const savedState = JSON.parse(rawSavedState) as AppState;

    validatePayload(savedState);

    const { optionsAreValid } = validateOptions(savedState);
    if (!optionsAreValid) {
      return {
        source: savedState.source,
        options: DEFAULT_OPTIONS,
      };
    }

    return savedState;
  } catch (error) {
    console.error(`Error processing saved state from ${storageType}`, error);
    return undefined;
  }
}

export function saveOptionsToLocalStorage(
  state: Omit<AppState, 'source'>,
): void {
  localStorage.setItem(
    LS_KEY,
    JSON.stringify({
      ...state,
      version: CURRENT_SAVED_STATE_SCHEMA_VERSION,
    }),
  );
}

export function saveStateToQueryParam(state: AppState): void {
  const baseUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  const crushedState = compressJson({
    ...state,
    version: CURRENT_SAVED_STATE_SCHEMA_VERSION,
  });
  const queryString = `${QUERY_KEY}=${crushedState}`;
  window.history.replaceState(state, '', `${baseUrl}?${queryString}`);
}

function validatePayload(payload: any) {
  if (typeof payload !== 'object') {
    throw new Error('Payload is not an object');
  }
}

function validateOptions(payload: any) {
  const options = payload.options;
  const validCharsets: Charset[] = ['ascii', 'utf-8', 'fancy'];

  const optionsAreValid =
    typeof options === 'object' &&
    typeof options?.charset === 'string' &&
    validCharsets.includes(options?.charset) &&
    typeof options?.trailingSlash === 'boolean' &&
    typeof options?.rootDot === 'boolean' &&
    typeof options?.useIcon === 'boolean';

  return { optionsAreValid };
}

function compressJson(json: Record<string, unknown>): string {
  try {
    const jsonString = JSON.stringify(json);
    return compressToEncodedURIComponent(jsonString);
  } catch (error) {
    console.error('Error compressing JSON', error);
    return '';
  }
}

function decompressJson(compressed: string): string {
  try {
    if (!compressed) return '';
    const decompressedString =
      decompressFromEncodedURIComponent(compressed) ?? '';
    return decompressedString as string;
  } catch (error) {
    console.error('Error decompressing JSON', error);
    return '';
  }
}

export function crushJson(json: Record<string, unknown>): string {
  try {
    const jsonString = JSON.stringify(json);
    return JSONCrush(jsonString) as string;
  } catch (error) {
    console.error('Error crushing JSON', error);
    return '';
  }
}

export function unCrushJson(compressed: string): string {
  try {
    if (!compressed) return '';
    const decompressedString = JSONUncrush(compressed) ?? '';
    return JSON.parse(decompressedString) as string;
  } catch (error) {
    console.error('Error uncrushing JSON', error);
    return '';
  }
}

const getInitialSourceState = (): AppState['source'] => {
  const parameterSourceState = getSavedStateFromQueryParam();
  const localStorageSourceState = getSavedStateFromLocalStorage();

  if (parameterSourceState?.source) {
    console.log('Using source from query param');
    return parameterSourceState.source;
  }

  if (localStorageSourceState?.source) {
    console.log('Using source from local storage');
    return localStorageSourceState.source;
  }

  console.log('Using default fallback source');
  return DEFAULT_SOURCE;
};

const getInitialOptionsState = (): AppState['options'] => {
  const localStorageOptionsState = getSavedStateFromLocalStorage()?.options;
  if (localStorageOptionsState) {
    console.log('Using options from local storage');
    return localStorageOptionsState;
  }

  const parameterOptionsState = getSavedStateFromQueryParam()?.options;
  if (parameterOptionsState) {
    console.log('Using options from query param');
    return parameterOptionsState;
  }

  console.log('Using default fallback options');
  return DEFAULT_OPTIONS;
};

export const sourceAtom = atom(getInitialSourceState());

export const optionsAtom = atom(getInitialOptionsState());

export const getTreeAtom = atom((get) => {
  const source = get(sourceAtom);
  const options = get(optionsAtom);

  const parsedInput = parseInput(source);

  const generatedTree = generateTree(parsedInput, {
    charset: options.charset,
    trailingDirSlash: options.trailingSlash,
    rootDot: options.rootDot,
    useIcon: options.useIcon,
  });

  return generatedTree;
});
