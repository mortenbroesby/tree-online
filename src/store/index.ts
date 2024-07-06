import { atom } from 'jotai';
import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from 'lz-string';

import { generateTree } from '../lib/generate-tree';
import { parseInput } from '../lib/parse-input';
import { getParameterByName } from '../third-party/get-parameter-by-name';
import { JSONCrush, JSONUncrush } from '../third-party/JSONCrush';

export const CURRENT_SAVED_STATE_SCHEMA_VERSION = '4';
export const LS_KEY = 'SAVED_STATE';
export const QUERY_KEY = 's';

export interface AppState {
  source: string;
  version?: string;
  options: {
    fancy: boolean;
    trailingSlash: boolean;
    rootDot: boolean;
    useIcon: boolean;
  };
}

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
  if (!rawSavedState) return undefined;

  try {
    const savedState = JSON.parse(rawSavedState) as AppState;
    if (savedState.version !== CURRENT_SAVED_STATE_SCHEMA_VERSION) {
      return undefined;
    }
    delete savedState.version;
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

function getSourceStateFromQueryParam(): AppState | undefined {
  const rawSavedState = getParameterByName(QUERY_KEY);
  if (!rawSavedState) return undefined;

  try {
    const decompressedState = decompressJson(rawSavedState);
    const savedState = decompressedState as AppState;
    if (savedState.version !== CURRENT_SAVED_STATE_SCHEMA_VERSION) {
      return undefined;
    }
    delete savedState.version;
    return savedState;
  } catch (error) {
    return undefined;
  }
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

function compressJson(json: Record<string, unknown>): string {
  const jsonString = JSON.stringify(json);
  return compressToEncodedURIComponent(jsonString);
}

function decompressJson(compressed: string): unknown {
  const decompressedString = decompressFromEncodedURIComponent(compressed);
  return JSON.parse(decompressedString ?? '');
}

export function crushJson(json: Record<string, unknown>): string {
  const jsonString = JSON.stringify(json);
  return JSONCrush(jsonString);
}

export function unCrushJson(compressed: string): unknown {
  const decompressedString = JSONUncrush(compressed);
  return JSON.parse(decompressedString ?? '');
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
      fancy: true,
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
    charset: options.fancy ? 'fancy' : 'ascii',
    trailingDirSlash: options.trailingSlash,
    rootDot: options.rootDot,
    useIcon: options.useIcon,
  });

  return generatedTree;
});
