export interface SourceState {
  source: string;
}

export const UPDATE_SOURCE = 'UPDATE_SOURCE';
export const CLEAR_SOURE = 'CLEAR_SOURE';
export const RESET_SOURCE = 'RESET_SOURCE';

interface UpdateSourceAction {
  type: typeof UPDATE_SOURCE;
  source: string;
}

interface ClearSourceAction {
  type: typeof CLEAR_SOURE;
  source: string;
}

interface ResetSourceAction {
  type: typeof RESET_SOURCE;
  source: string;
}

export type SourceActionTypes =
  | UpdateSourceAction
  | ClearSourceAction
  | ResetSourceAction;
