import { getSavedState } from '../persistence/saved-state';
import { SourceActionTypes, SourceState, UPDATE_SOURCE } from './types';

const source = `
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

const defaultState: SourceState = {
  source,
};

const getInitialState = () => {
  const parameterSourceState = getSavedState().queryParamState;
  const localStorageSourceState = getSavedState().localStorageState?.source;

  return parameterSourceState ?? localStorageSourceState ?? defaultState;
};

const initialState = getInitialState();

export function sourceReducer(
  state = initialState,
  action: SourceActionTypes,
): SourceState {
  switch (action.type) {
    case UPDATE_SOURCE:
      return {
        ...state,
        source: action.source,
      };
    default:
      return state;
  }
}
