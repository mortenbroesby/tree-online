import { DEFAULT_SOURCE } from './reducers';
import { CLEAR_SOURE, RESET_SOURCE, UPDATE_SOURCE } from './types';

export function updateSource(newSource: string) {
  return {
    type: UPDATE_SOURCE,
    source: newSource,
  };
}

export function clearSource() {
  return {
    type: CLEAR_SOURE,
    source: '',
  };
}

export function resetSource() {
  return {
    type: RESET_SOURCE,
    source: DEFAULT_SOURCE,
  };
}
