import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './third-party/JSONCrush.ts';
import './index.scss';

import App from './components/App.tsx';
import withClearCache from './components/ClearCache.tsx';
import { configureStore } from './store/index.ts';

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
);
