import defaultsDeep from 'lodash.defaultsdeep';
import flattenDeep from 'lodash.flattendeep';
import last from 'lodash.last';

import { FileStructure } from './FileStructure';
import { LINE_STRINGS } from './line-strings';

export type Charset = 'ascii' | 'utf-8' | 'fancy';

/**
 * Represents all rendering options available
 * when calling `generateTree`
 */
interface GenerateTreeOptions {
  /**
   * Which set of characters to use when
   * rendering directory lines
   */
  charset: Charset;

  /**
   * Whether or not to append trailing slashes
   * to directories. Items that already include a
   * trailing slash will not have another appended.
   */
  trailingDirSlash?: boolean;

  /**
   * Whether or not to render a dot as the root of the tree
   */
  rootDot?: boolean;

  /**
   * Whether or not to use a folder icon
   */
  useIcon?: boolean;
}

/** The default options if no options are provided */
const defaultOptions: GenerateTreeOptions = {
  charset: 'utf-8',
  trailingDirSlash: false,
  rootDot: false,
  useIcon: false,
};

/**
 * Generates an ASCII tree diagram, given a FileStructure
 * @param structure The FileStructure object to convert into ASCII
 * @param options The rendering options
 */
export const generateTree = (
  structure: FileStructure,
  options?: GenerateTreeOptions,
): string => {
  const treeOptions = defaultsDeep({}, options, defaultOptions);

  const asciiLine = getAsciiLine(structure, treeOptions);

  interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> {
    // Recursive array type
  }

  const asciiChildren = structure.children.map((child) => {
    return generateTree(child, options);
  }) as RecursiveArray<string>;

  const arrayToFlatten = [asciiLine, asciiChildren];
  const flattenedTree = flattenDeep(arrayToFlatten);

  // Remove null entries. Should only occur for the very first node
  // when `options.rootDot === false`
  const cleanedTree = flattenedTree
    .filter((line: any) => line != null)
    .join('\n');

  return cleanedTree;
};

/**
 * Returns a line of ASCII that represents
 * a single FileStructure object
 * @param structure The file to render
 * @param options The rendering options
 */
const getAsciiLine = (
  structure: FileStructure,
  options: GenerateTreeOptions,
): string | null => {
  const lines: any = LINE_STRINGS[options.charset];

  // Special case for the root element
  if (!structure.parent) {
    return options.rootDot ? structure.name : null;
  }

  const chunks = [
    isLastChild(structure) ? lines.LAST_CHILD : lines.CHILD,
    getName(structure, options),
  ];

  let current = structure.parent;

  while (current && current.parent) {
    chunks.unshift(isLastChild(current) ? lines.EMPTY : lines.DIRECTORY);
    current = current.parent;
  }

  // Join all the chunks together to create the final line.
  // If we're not rendering the root `.`, chop off the first 4 characters.
  return chunks.join('').substring(options.rootDot ? 0 : lines.CHILD.length);
};

/**
 * Returns the name of a file or folder according to the
 * rules specified by the rendering rules
 * @param structure The file or folder to get the name of
 * @param options The rendering options
 */
const getName = (
  structure: FileStructure,
  options: GenerateTreeOptions,
): string => {
  let nameChunks = [structure.name];

  const trailingSlashEnabled = options.trailingDirSlash ?? false;
  const itemHasChildren = structure.children.length > 0;
  const itemNeedsASlash = !/\/\s*$/.test(structure.name);
  const shouldAddTralingSlash =
    trailingSlashEnabled && itemHasChildren && itemNeedsASlash;

  const useIcon = options?.useIcon ?? false;

  // Optionally append a trailing slash
  nameChunks = nameChunks.map((chunk) => {
    const withMarkdownLinks = convertHTMLLinkToMarkdown(chunk);

    const withCommentsAdjusted = adjustComments({
      value: withMarkdownLinks,
      addSlash: shouldAddTralingSlash,
      useIcon,
    });

    return withCommentsAdjusted;
  });

  return nameChunks.join('');
};

/**
 * A utility function do determine if a file or folder
 * is the last child of its parent
 * @param structure The file or folder to test
 */
const isLastChild = (structure: FileStructure): boolean => {
  return Boolean(
    structure.parent && last(structure.parent.children) === structure,
  );
};

function convertHTMLLinkToMarkdown(input: string): string {
  const urlRegex = /(^|\s)(https?:\/\/[^\s]+)/g;
  return input.replace(urlRegex, '$1[Link]($2)');
}

function adjustComments({
  value,
  addSlash = false,
  useIcon = false,
}: {
  value: string;
  addSlash: boolean;
  useIcon: boolean;
}): string {
  // Find the index of ' # ' in the string
  const commentIndex = value.indexOf(' # ');

  const slashOrFolder = useIcon ? ' 📂' : '/';

  // If ' # ' is not found, return the original string,
  // potentially adding a slash at the end depending on addSlash
  if (commentIndex === -1) {
    return addSlash ? `${value}${slashOrFolder}` : value;
  }

  // If ' # ' is found, return a string where ' # ' is potentially
  // preceded by a slash depending on addSlash
  const beforeHash = value.substring(0, commentIndex);
  const afterHash = value.substring(commentIndex);

  return addSlash
    ? `${beforeHash}${slashOrFolder}${afterHash}`
    : `${beforeHash}${afterHash}`;
}

export const reverseTree = (
  rawTreeOrText: string,
  charset: keyof typeof LINE_STRINGS = 'utf-8',
): string => {
  // Step 0: If the input is not a formatted tree, return it as is
  if (!textIsFormattedTree(rawTreeOrText, charset)) {
    return rawTreeOrText;
  }

  // Step 1: Parse the raw tree string into a tree structure
  const tree = parseRawTree(rawTreeOrText, charset);

  // Step 2: Convert the tree structure back to indented text format
  return treeToIndentedText(tree);
};

const textIsFormattedTree = (
  rawTreeOrText: string,
  charset: keyof typeof LINE_STRINGS,
) => {
  // Step 0: If the input is not a formatted tree, return it as is
  const treeLines = rawTreeOrText.split('\n');
  const lineStrings = LINE_STRINGS[charset];

  return treeLines.some((line) =>
    [lineStrings.CHILD, lineStrings.LAST_CHILD, lineStrings.DIRECTORY].some(
      (prefix) => line.includes(prefix),
    ),
  );
};

// Function to parse the raw tree string
const parseRawTree = (rawTree: string, charset: keyof typeof LINE_STRINGS) => {
  const lines = rawTree.split('\n');

  const root: FileStructure = {
    name: '.',
    children: [],
    indentCount: -1,
    parent: null,
  };

  const stack: FileStructure[] = [root];
  const { DIRECTORY, EMPTY, CHILD, LAST_CHILD } = LINE_STRINGS[charset];

  const lineRegex = new RegExp(
    `^(?:${escapeRegExp(DIRECTORY)}|${escapeRegExp(EMPTY)})*(?:${escapeRegExp(CHILD)}|${escapeRegExp(LAST_CHILD)})`,
  );

  lines.forEach((line) => {
    const indentMatch = line.match(lineRegex);
    const indentCount = indentMatch ? indentMatch[0].length / CHILD.length : 0;
    const name = line.replace(lineRegex, '').trim();

    const newNode: FileStructure = {
      name,
      children: [],
      indentCount,
      parent: null,
    };

    while (
      stack.length &&
      stack[stack.length - 1]!.indentCount >= indentCount
    ) {
      stack.pop();
    }

    const parent = stack[stack.length - 1];
    if (parent) {
      parent.children.push(newNode);
      newNode.parent = parent;
      stack.push(newNode);
    }
  });

  return root;
};

// Function to convert the tree structure back to indented text
const treeToIndentedText = (tree: FileStructure): string => {
  const lines: string[] = [];
  const traverse = (node: FileStructure, depth: number) => {
    if (node.name !== '.' || depth > 0) {
      lines.push(' '.repeat(node.indentCount * 2) + node.name);
    }
    node.children.forEach((child) => traverse(child, depth + 1));
  };

  tree.children.forEach((child) => traverse(child, 0));
  return lines.join('\n');
};

// Utility function to escape special characters in a string for use in a regular expression
const escapeRegExp = (string: string): string => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
