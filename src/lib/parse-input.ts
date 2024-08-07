import last from 'lodash.last';

interface FileStructure {
  name: string;
  children: FileStructure[];
  indentCount: number;
  parent: FileStructure | null;
}

/**
 * Matches the whitespace in front of a file name.
 * Also will match a markdown bullet point if included.
 * For example, testing against "  - hello" will return
 * a positive match with the first capturing group
 * with "  - " and a second with "  "
 */
const leadingWhitespaceAndBulletRegex = /^((\s*)(?:-\s)?)/;

/** Matches lines that only contain whitespace */
const onlyWhitespaceRegex = /^\s*$/;

/** Used to split a block of text into individual lines */
const newlineSplitterRegex = /[^\r\n]+/g;

/**
 * Translates a block of user-created text into
 * a nested FileStructure structure
 * @param input The plain-text input from the user
 */
export const parseInput = (input: string = ''): FileStructure => {
  if (typeof input !== 'string') {
    throw new TypeError(
      `Expected input to be a string, but got ${typeof input}`,
    );
  }

  const structures = splitInput(input);

  const root: FileStructure = {
    name: '.',
    children: [],
    indentCount: -1,
    parent: null,
  };

  const path = [root];

  for (const structure of structures) {
    while (last(path)!.indentCount >= structure.indentCount) {
      path.pop();
    }

    const parent = last(path) as FileStructure;
    parent.children.push(structure);
    structure.parent = parent;

    path.push(structure);
  }

  return root;
};

/**
 * Splits a block of user-created text into
 * individual, un-nested FileStructure objects.
 * Used internally as part of `parseInput`.
 * @param input The plain-text input from the user
 */
export const splitInput = (input: string = ''): FileStructure[] => {
  if (typeof input !== 'string') {
    throw new TypeError(
      `Expected input to be a string, but got ${typeof input}`,
    );
  }

  let lines: string[] = input.match(newlineSplitterRegex) || [];

  // filter out empty lines
  lines = lines.filter((line) => !onlyWhitespaceRegex.test(line)) as string[];

  return lines.map((line) => {
    const matchResult: any = leadingWhitespaceAndBulletRegex.exec(line);

    if (!matchResult) {
      throw new Error(
        `Unable to execute leadingWhitespaceAndBulletRegex against string: "${line}"`,
      );
    }

    const name = line.replace(matchResult[1], '');
    const indentCount = matchResult[2].length;

    return {
      name,
      children: [],
      indentCount,
      parent: null,
    };
  });
};
