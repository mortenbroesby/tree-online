# [tree-online](https://mortenbroesby.github.io/tree-online)

## Disclaimer

All original credits goes to Nathan Friend. [tree.nathanfriend.io](https://gitlab.com/nfriend/tree-online)

<img alt="The tree.nathanfriend.io logo" src="public/tree-logo.png" width="200"/>

## What is this?

[tree-online](https://mortenbroesby.github.io/tree-online) is an online [tree](http://mama.indstate.edu/users/ice/tree/)-like utility for generating ASCII folder structure diagrams.

It takes input like this:

```
my-project
  src
    index.html
    my-project.scss
  build
    index.html
    my-project.css
```

... and transforms it into an ASCII tree diagram like this:

```
.
└── my-project/
    ├── src/
    │   ├── index.html
    │   └── my-project.scss
    └── build/
        ├── index.html
        └── my-project.css
```

### Why would I want this?

It's common to explain or discuss a file system structure on text-based sites like [StackOverflow](https://stackoverflow.com/) or [GitHub](https://github.com/). But generating a nice-looking diagram like the one above is painful by hand.

## About the project

[tree-online](https://mortenbroesby.github.io/tree-online) is written in [TypeScript](https://www.typescriptlang.org/) and [React](https://reactjs.org/).

Some other technologies this project uses:

- The [Flatly](https://bootswatch.com/flatly/) and [Darkly](https://bootswatch.com/darkly/) themes from [Bootswatch](https://bootswatch.com/)
  - The project's theme will automatically adjust based on your OS's theme using [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) - give it a try!
- [JSONCrush](https://github.com/KilledByAPixel/JSONCrush) for efficiently saving the application's state in the URL
- [Bootstrap](https://getbootstrap.com/). In particular, its [responsive flex utilities](https://getbootstrap.com/docs/4.4/utilities/flex/)
- [Moment.js](https://momentjs.com/) and a few functions from [Lodash](https://lodash.com/)
- [Jest](https://jestjs.io/) and [Prettier](https://prettier.io/) for code quality
- [Renovate Bot](https://renovate.whitesourcesoftware.com/) for automatically keeping dependencies up-to-date

### `tree` implementation

If you're curious about this project's implementation of `tree`, check out [src/lib/](src/lib/), and more specifically, [src/lib/generate-tree.ts](src/lib/generate-tree.ts).

## Developing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so it contains all the scripts you know and love:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

