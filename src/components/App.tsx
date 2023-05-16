import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { DeploymentStatus } from './DeploymentStatus';
import Input from './Input';
import Menu from './Menu';
import Tree from './Tree';
import ModalButton from './ModalButton';
import { Title } from '@mantine/core';

const App = () => {
  const [networkStatus, setNetworkStatus] = useState(
    window.navigator.onLine ? 'online' : 'offline',
  );

  useEffect(() => {
    const updateOnlineStatus = () =>
      setNetworkStatus(window.navigator.onLine ? 'online' : 'offline');

    window.addEventListener('offline', updateOnlineStatus);
    window.addEventListener('online', updateOnlineStatus);

    return () => {
      window.removeEventListener('offline', updateOnlineStatus);
      window.removeEventListener('online', updateOnlineStatus);
    };
  }, []);

  return (
    <div
      className={`app px-3 pt-2 d-flex w-100 min-vh-100 position-absolute flex-column ${networkStatus}`}
    >
      <div className="flex-grow-0 flex-shrink-0 d-flex align-items-center mb-2">
        <div className="flex-even d-flex align-items-center flex-column flex-sm-row">
          <Title size="h4" className="mr-4 mb-0">
            tree-online
          </Title>
          <ModalButton />
        </div>
      </div>
      <div className="flex-grow-1 d-flex flex-column flex-lg-row">
        <div className="flex-even d-flex mr-0 mr-lg-2">
          <Input className="flex-grow-1" />
        </div>
        <div className="flex-even">
          <Tree className="flex-grow-1" />
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 d-flex align-items-center align-items-sm-start mt-2 flex-column flex-md-row">
        <p className="text-muted text-center text-sm-left mb-2 pr-0 pr-sm-4 mr-auto">
          <DeploymentStatus />
        </p>

        <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start mb-2 mt-md-0">
          <a
            className="pr-0 pr-sm-4 view-source-on-github-link no-wrap hide-offline"
            href="https://github.com/mortenbroesby/tree-online"
          >
            View the source on Github
          </a>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default connect()(App);
