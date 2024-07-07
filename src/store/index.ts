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
  source: string;
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

function getSavedStateFromLocalStorage(): AppState | undefined {
  const rawSavedState = localStorage.getItem(LS_KEY);
  return processSavedState(rawSavedState);
}

function getSourceStateFromQueryParam(): AppState | undefined {
  const rawSavedState = getParameterByName(QUERY_KEY);
  return processSavedState(decompressJson(rawSavedState));
}

function processSavedState(rawSavedState: string | null): AppState | undefined {
  if (!rawSavedState) return undefined;

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
    return undefined;
  }
}

export function saveStateToLocalStorage(state: AppState): void {
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

  if (typeof payload.source !== 'string') {
    throw new Error('Source is not a string');
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
  const jsonString = JSON.stringify(json);
  return compressToEncodedURIComponent(jsonString);
}

function decompressJson(compressed: string): string {
  const decompressedString =
    decompressFromEncodedURIComponent(compressed) ?? '';
  return JSON.parse(decompressedString);
}

export function crushJson(json: Record<string, unknown>): string {
  const jsonString = JSON.stringify(json);
  return JSONCrush(jsonString);
}

export function unCrushJson(compressed: string): unknown {
  const decompressedString = JSONUncrush(compressed) ?? '';
  return JSON.parse(decompressedString);
}

const getInitialSourceState = (): AppState['source'] => {
  const parameterSourceState = getSourceStateFromQueryParam();
  const localStorageSourceState = getSavedStateFromLocalStorage();

  const initialSource =
    localStorageSourceState?.source ??
    parameterSourceState?.source ??
    DEFAULT_SOURCE;

  return initialSource;
};

const getInitialOptionsState = (): AppState['options'] => {
  const parameterOptionsState = getSourceStateFromQueryParam()?.options;
  const localStorageOptionsState = getSavedStateFromLocalStorage()?.options;

  return (
    parameterOptionsState ??
    localStorageOptionsState ?? {
      charset: 'utf-8',
      trailingSlash: true,
      rootDot: false,
      useIcon: false,
    }
  );
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
