import {
  UPDATE_FANCY,
  UPDATE_TRAILING_SLASH,
  UPDATE_ROOT_DOT,
  UPDATE_USE_ICON,
} from './types';

export function updateFancy(newValue: boolean) {
  return {
    type: UPDATE_FANCY,
    newValue,
  };
}

export function updateUseIcon(newValue: boolean) {
  return {
    type: UPDATE_USE_ICON,
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
