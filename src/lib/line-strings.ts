/**
 * Represents an object that contains the
 * actual strings used to render the tree
 */
export interface LineStringSet {
  /** The string to render immediately before non-last children */
  CHILD: string;

  /** The string to render immediately before the last child */
  LAST_CHILD: string;

  /** The string to render for parent directories */
  DIRECTORY: string;

  /** The string to render for empty space */
  EMPTY: string;
}

export const EMPTY_KEY = 'EMPTY';

/** Contains all strings for tree rendering */
export const LINE_STRINGS: { [charset: string]: LineStringSet } = {
  ascii: {
    CHILD: '|- ',
    LAST_CHILD: '`- ',
    DIRECTORY: '|  ',
    [EMPTY_KEY]: '   ',
  },
  'utf-8': {
    CHILD: '├─ ',
    LAST_CHILD: '└─ ',
    DIRECTORY: '│  ',
    [EMPTY_KEY]: '   ',
  },
  fancy: {
    CHILD: '├─ ',
    LAST_CHILD: '╰─ ',
    DIRECTORY: '│  ',
    [EMPTY_KEY]: '   ',
  },
};
