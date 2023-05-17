import React from 'react';
import { connect } from 'react-redux';
import { DeploymentStatus } from './DeploymentStatus';
import Input from './Input';
import Menu from './Menu';
import Tree from './Tree';
import ButtonGroup from './ButtonGroup';
import { Group, Title } from '@mantine/core';
import styled from 'styled-components';

import TreeLogo from './tree-logo.png';

const App = () => {
  return (
    <AppContainer>
      <Container>
        <SubContainer>
          <Logo src={TreeLogo} alt="Tree Online" />
          <Title size="h3">Tree Online</Title>
          <ButtonGroup />
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

      <Footer>
        <Deployment>
          <DeploymentStatus />
        </Deployment>

        <Link href="https://github.com/mortenbroesby/tree-online">
          View the source on Github
        </Link>
      </Footer>

      <Menu />
    </AppContainer>
  );
};

export const MOBILE_FOLD = 900;

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

const SubContainer = styled(Group)`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 4px;

  @media (min-width: ${MOBILE_FOLD}px) {
    flex-direction: row;
  }
`;

const Footer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin-top: 8px;
  flex-direction: column;

  @media (min-width: ${MOBILE_FOLD}px) {
    flex-direction: row;
    text-align: center;
  }
`;

const Deployment = styled.p`
  margin-bottom: 2px;
  padding-right: 0;
  margin-right: unset;
  color: #95a5a6 !important;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${MOBILE_FOLD}px) {
    margin-right: auto;
  }
`;

const Logo = styled.img`
  height: 32px;
  width: 32px;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2px;

  @media (min-width: ${MOBILE_FOLD}px) {
    margin-top: 0;
  }
`;

const FlexContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${MOBILE_FOLD}px) {
    flex-direction: row;
  }
`;

const InputDiv = styled.div`
  flex: 1;
  display: flex;

  @media (min-width: ${MOBILE_FOLD}px) {
    max-width: 50%;
  }
`;

const TreeDiv = styled.div`
  flex: 1;
  display: flex;
  padding-left: 0;

  @media (min-width: ${MOBILE_FOLD}px) {
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
