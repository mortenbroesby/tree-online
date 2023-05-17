import { AppState, SourceState } from '../index';
import {
  getSavedStateFromLocalStorage,
  saveStateToLocalStorage,
} from './local-storage';
import {
  getSourceStateFromQueryParam,
  saveStateToQueryParam,
} from './query-param';

/**
 * Retrieves the most recent saved state
 * from localStorage or the query param
 * If unsuccessful (or no saved state found), returns undefined
 */
export function getSavedState(): {
  queryParamState: SourceState | undefined;
  localStorageState: AppState | undefined;
} {
  const queryParamState = getSourceStateFromQueryParam();
  const localStorageState = getSavedStateFromLocalStorage();

  // State in the query param takes precedence over localStorage
  return {
    queryParamState,
    localStorageState,
  };
}

/**
 * Saves the provided state to localStorage or the query param
 * @param state The state to save
 */
export const saveState = (state: AppState): void => {
  saveStateToQueryParam(state.source);
  saveStateToLocalStorage(state);
};
