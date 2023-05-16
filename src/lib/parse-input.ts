import last from 'lodash.last';
import { FileStructure } from './FileStructure';

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
export const parseInput = (input: string): FileStructure => {
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
export const splitInput = (input: string): FileStructure[] => {
  let lines = input.match(newlineSplitterRegex) || [];

  // filter out empty lines
  lines = lines.filter(line => !onlyWhitespaceRegex.test(line));

  return lines.map(line => {
    const matchResult = leadingWhitespaceAndBulletRegex.exec(line);

    if (!matchResult) {
      throw new Error(
        `Unable to execute leadingWhitespaceAndBulletRegex against string: "${line}"`,
      );
    }

    const targetName = line.replace(matchResult[1], '');
    const nameWithLink = convertHTMLLinkToMarkdown(targetName);
    const indentCount = matchResult[2].length;

    return {
      name: nameWithLink,
      children: [],
      indentCount,
      parent: null,
    };
  });
};

function convertHTMLLinkToMarkdown(s: string): string {
  const urlRegex = /(^|\s)(https?:\/\/[^\s]+)/g;
  return s.replace(urlRegex, '$1[Link]($2)');
}
