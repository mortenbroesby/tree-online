import { UPDATE_FANCY, UPDATE_TRAILING_SLASH, UPDATE_ROOT_DOT } from './types';

export function updateFancy(newValue: boolean) {
  return {
    type: UPDATE_FANCY,
    newValue,
  };
}

export function updateTrailingSlash(newValue: boolean) {
  return {
    type: UPDATE_TRAILING_SLASH,
    newValue,
  };
}

export function updateRootDot(newValue: boolean) {
  return {
    type: UPDATE_ROOT_DOT,
    newValue,
  };
}
