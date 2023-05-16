export interface OptionsState {
  fancy: boolean;
  useFolderIcon: boolean;
  trailingSlash: boolean;
  rootDot: boolean;
}

export const UPDATE_FANCY = 'UPDATE_FANCY';
export const UPDATE_USE_FOLDER_ICON = 'UPDATE_USE_FOLDER_ICON';
export const UPDATE_TRAILING_SLASH = 'UPDATE_TRAILING_SLASH';
export const UPDATE_ROOT_DOT = 'UPDATE_ROOT_DOT';

interface UpdateFancyAction {
  type: typeof UPDATE_FANCY;
  newValue: boolean;
}

interface UpdateUseFolderIconAction {
  type: typeof UPDATE_USE_FOLDER_ICON;
  newValue: boolean;
}

interface UpdateTrailingSlashAction {
  type: typeof UPDATE_TRAILING_SLASH;
  newValue: boolean;
}

interface UpdateRootDotAction {
  type: typeof UPDATE_ROOT_DOT;
  newValue: boolean;
}

export type OptionActionTypes =
  | UpdateFancyAction
  | UpdateUseFolderIconAction
  | UpdateTrailingSlashAction
  | UpdateRootDotAction;
