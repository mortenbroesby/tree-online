import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { DeploymentStatus } from './DeploymentStatus';
import Input from './Input';
import Menu from './Menu';
import Tree from './Tree';
import ModalButton from './ModalButton';
import { Title } from '@mantine/core';
import styled from 'styled-components';

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

      <FlexContainer>
        <InputDiv>
          <FullWidthHeightInput />
        </InputDiv>
        <TreeDiv>
          <FullWidthHeightTree />
        </TreeDiv>
      </FlexContainer>

      <div className="flex-grow-0 flex-shrink-0 d-flex align-items-center align-items-sm-start mt-2 flex-column flex-md-row">
        <p className="text-muted text-center text-sm-left mb-2 pr-0 pr-sm-4 mr-auto">
          <DeploymentStatus />
        </p>

        <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start mb-2 mt-md-0">
          <a href="https://github.com/mortenbroesby/tree-online">
            View the source on Github
          </a>
        </div>
      </div>

      <Menu />
    </div>
  );
};

const FlexContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const InputDiv = styled.div`
  flex: 1;
  display: flex;

  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;

const TreeDiv = styled.div`
  flex: 1;
  display: flex;
  padding-left: 0;

  @media (min-width: 1000px) {
    padding-left: 12px;
    max-width: 50%;
  }
`;

const FullWidthHeightInput = styled(Input)`
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;

const FullWidthHeightTree = styled(Tree)`
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;

export default connect()(App);
