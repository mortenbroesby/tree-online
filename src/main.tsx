import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { configureStore } from './store/index.ts';
import { MantineProvider } from '@mantine/core';

import './third-party/JSONCrush.js';
import './index.scss';

import App from './components/App.tsx';

import withClearCache from './components/ClearCache.tsx';

const ClearCacheApp = withClearCache(App);

function AppWithCache() {
  return <ClearCacheApp />;
}

const store = configureStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <Provider store={store}>
        <AppWithCache />
      </Provider>
    </MantineProvider>
  </React.StrictMode>,
)