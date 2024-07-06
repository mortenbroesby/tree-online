import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from 'lz-string';

import { SourceState } from '..';
import { getParameterByName } from '../../third-party/get-parameter-by-name';
import { JSONCrush, JSONUncrush } from '../../third-party/JSONCrush';

import { SourceStatePlusVersion } from './AppStatePlusVersion';
import { CURRENT_SAVED_STATE_SCHEMA_VERSION, QUERY_KEY } from './constants';

/**
 * Retrieves the most recent saved state from the query param.
 * If unsuccessful, returns `undefined`.
 */
export function getSourceStateFromQueryParam():
  | SourceStatePlusVersion
  | undefined {
  const rawSavedState = getParameterByName(QUERY_KEY);
  if (!rawSavedState) {
    return undefined;
  }

  try {
    const decompressedState = decompressJson(rawSavedState);
    const savedState = decompressedState as SourceStatePlusVersion;

    if (savedState.version !== CURRENT_SAVED_STATE_SCHEMA_VERSION) {
      return undefined;
    }

    delete savedState.version;

    return savedState;
  } catch (e) {
    return undefined;
  }
}

/**
 * Updates the query param with the provided state
 * @param state The state to save
 */
export const saveStateToQueryParam = (state: SourceState): void => {
  const baseUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

  const crushedState = compressJson({
    ...state,
    version: CURRENT_SAVED_STATE_SCHEMA_VERSION,
  });

  const queryString = `${QUERY_KEY}=${crushedState}`;

  window.history.replaceState(state, '', `${baseUrl}?${queryString}`);
};

export function compressJson(json: Record<string, unknown>): string {
  const jsonString = JSON.stringify(json);
  return compressToEncodedURIComponent(jsonString);
}

export function decompressJson(compressed: string): unknown {
  const decompressedString = decompressFromEncodedURIComponent(compressed);
  return JSON.parse(decompressedString ?? '');
}

export function crushJson(json: Record<string, unknown>): string {
  const jsonString = JSON.stringify(json);
  return JSONCrush(jsonString);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function unCrushJson(compressed: string): any {
  const decompressedString = JSONUncrush(compressed);

  return JSON.parse(decompressedString ?? '');
}
