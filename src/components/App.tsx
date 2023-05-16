import React from 'react';
import { connect } from 'react-redux';
import { DeploymentStatus } from './DeploymentStatus';
import Input from './Input';
import Menu from './Menu';
import Tree from './Tree';
import { Title } from '@mantine/core';
import styled from 'styled-components';

const App = () => {
  return (
    <AppContainer>
      <Container>
        <SubContainer>
          <Title size="h3">tree-online</Title>
        </SubContainer>
      </Container>

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
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  overflow: hidden;
`;

const Container = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;

const SubContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 4px;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

const FlexContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const InputDiv = styled.div`
  flex: 1;
  display: flex;

  @media (min-width: 900px) {
    max-width: 50%;
  }
`;

const TreeDiv = styled.div`
  flex: 1;
  display: flex;
  padding-left: 0;

  @media (min-width: 900px) {
    padding-left: 12px;
    max-width: 50%;
  }
`;

const FullWidthHeightInput = styled(Input)`
  flex-grow: 1;
`;

const FullWidthHeightTree = styled(Tree)`
  flex-grow: 1;
`;

export default connect()(App);
