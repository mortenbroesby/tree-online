import React from 'react';
import { connect } from 'react-redux';
import { DeploymentStatus } from './DeploymentStatus';
import Input from './Input';
import HiddenMenu from './HiddenMenu';
import Tree from './Tree';
import ResetButtonsGroup from './ResetButtonsGroup';
import { Group, Title } from '@mantine/core';
import styled from 'styled-components';

import TreeLogo from './tree-logo.png';
import { MOBILE_FOLD } from '../constants';

const App = () => {
  return (
    <AppContainer>
      <Container spacing="xs">
        <TitleContainer>
          <Logo src={TreeLogo} alt="Tree Online" />
          <MainTitle>Tree Online</MainTitle>
        </TitleContainer>
        <ResetButtonsGroup />
        <HiddenMenu />
      </Container>

      <GridContainer>
        <InputDiv>
          <FullWidthHeightInput />
        </InputDiv>
        <TreeDiv>
          <FullWidthHeightTree />
        </TreeDiv>
      </GridContainer>

      <Footer>
        <Deployment>
          <DeploymentStatus />
        </Deployment>

        <Link href="https://github.com/mortenbroesby/tree-online">
          View the source on Github
        </Link>
      </Footer>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  padding: 10px;
  padding-bottom: 80px;
  overflow: hidden;

  @media (min-width: ${MOBILE_FOLD}px) {
    padding-bottom: 10px;
  }
`;

const Container = styled(Group)`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 4px;

  @media (max-width: ${MOBILE_FOLD}px) {
    margin-bottom: 12px;
  }
`;

const TitleContainer = styled(Group)`
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: ${MOBILE_FOLD}px) {
    flex: 1 100%;
  }
`;

const MainTitle = styled(Title)`
  font-size: 18px;
  word-wrap: nowrap;
  margin-right: 6px;
`;

const Footer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin-top: 8px;
  flex-direction: column;
  padding: 10px;
  text-align: center;

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
  height: 26px;
  width: 26px;
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

const GridContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  height: 100%;
  min-height: 100vh;

  @media (min-width: ${MOBILE_FOLD}px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'left right';
    min-height: 800px;
  }
`;

const InputDiv = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  min-height: 100%;
  overflow: hidden;

  @media (min-width: ${MOBILE_FOLD}px) {
    height: 100%;
    min-height: 100%;
  }
`;

const TreeDiv = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  min-height: 100%;
  overflow: hidden;

  @media (min-width: ${MOBILE_FOLD}px) {
    height: 100%;
    min-height: 100%;
  }
`;

const FullWidthHeightInput = styled(Input)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FullWidthHeightTree = styled(Tree)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default connect()(App);
