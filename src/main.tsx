import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './third-party/JSONCrush.ts';
import './index.scss';

import App from './components/App.tsx';
import withClearCache from './components/ClearCache.tsx';

const ClearCacheApp = withClearCache(App);

function AppWithCache() {
  return <ClearCacheApp />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <AppWithCache />
    </MantineProvider>
  </React.StrictMode>,
);
