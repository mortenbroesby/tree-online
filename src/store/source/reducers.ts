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

const savedState = getSavedState();

const initialState = savedState ? savedState : defaultState;

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
