import { getSavedState } from '../persistence/saved-state';
import {
  OptionActionTypes,
  OptionsState,
  UPDATE_FANCY,
  UPDATE_USE_ICON,
  UPDATE_ROOT_DOT,
  UPDATE_TRAILING_SLASH,
} from './types';

const defaultState: OptionsState = {
  fancy: true,
  trailingSlash: true,
  rootDot: true,
  useIcon: false,
};

const getInitialState = () => {
  const localStorageSourceState = getSavedState().localStorageState?.options;
  return localStorageSourceState ?? defaultState;
};

const initialState = getInitialState();

export function optionsReducer(
  state = initialState,
  action: OptionActionTypes,
): OptionsState {
  switch (action.type) {
    case UPDATE_FANCY:
      return {
        ...state,
        fancy: action.newValue,
      };
    case UPDATE_USE_ICON:
      return {
        ...state,
        useIcon: action.newValue,
      };
    case UPDATE_TRAILING_SLASH:
      return {
        ...state,
        trailingSlash: action.newValue,
      };
    case UPDATE_ROOT_DOT:
      return {
        ...state,
        rootDot: action.newValue,
      };
    default:
      return state;
  }
}
