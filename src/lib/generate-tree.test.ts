import { generateTree } from './generate-tree';
import { mockInput } from './mock-input';
import { parseInput } from './parse-input';

describe('generateTree', () => {
  it('returns an UTF-8 representation of the provided FileStructure object', () => {
    const actual = generateTree(parseInput(mockInput));
    expect(actual).toMatchInlineSnapshot(`
      "my-app
      ├─ src
      │  ├─ index.html
      │  ├─ main.ts
      │  └─ main.scss
      ├─ build
      │  ├─ index.html
      │  ├─ main.js
      │  └─ main.css
      ├─ .prettierrc.json
      └─ README.md
      empty dir"
    `);
  });

  it('returns an ASCII representation of the provided FileStructure object', () => {
    const actual = generateTree(parseInput(mockInput), { charset: 'ascii' });
    expect(actual).toMatchInlineSnapshot(`
      "my-app
      |- src
      |  |- index.html
      |  |- main.ts
      |  \`- main.scss
      |- build
      |  |- index.html
      |  |- main.js
      |  \`- main.css
      |- .prettierrc.json
      \`- README.md
      empty dir"
    `);
  });

  it('does not render lines for parent directories that have already printed all of their children', () => {
    const input = `

grandparent
  parent
    child
  parent
    child
      grandchild

    `;

    const actual = generateTree(parseInput(input));
    expect(actual).toMatchInlineSnapshot(`
      "grandparent
      ├─ parent
      │  └─ child
      └─ parent
         └─ child
            └─ grandchild"
    `);
  });

  it('appends a trailing slash to directories if trailingDirSlash === true', () => {
    const input = `

grandparent
  parent/
    child
  parent//
    child
      grandchild

    `;

    const actual = generateTree(parseInput(input), {
      trailingDirSlash: true,
      charset: 'ascii',
    });

    expect(actual).toMatchInlineSnapshot(`
      "grandparent/
      |- parent/
      |  \`- child
      \`- parent//
         \`- child/
            \`- grandchild"
    `);
  });

  it('does not render the root dot if rootDot === false', () => {
    const input = `

grandparent
  parent
    child
  parent
    child
      grandchild

    `;

    const actual = generateTree(parseInput(input), {
      rootDot: false,
      charset: 'utf-8',
    });

    expect(actual).toMatchInlineSnapshot(`
      "grandparent
      ├─ parent
      │  └─ child
      └─ parent
         └─ child
            └─ grandchild"
    `);
  });
});
