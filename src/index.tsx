import './polyfills.ts';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './store';
import { MantineProvider } from '@mantine/core';

import './third-party/JSONCrush';

import './index.scss';

import App from './components/App';

import withClearCache from './components/ClearCache.tsx';

const ClearCacheApp = withClearCache(App);

function AppWithCache() {
  return <ClearCacheApp />;
}

const store = configureStore();

render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Provider store={store}>
      <AppWithCache />
    </Provider>
  </MantineProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
