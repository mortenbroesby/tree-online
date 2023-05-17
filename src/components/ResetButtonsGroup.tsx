import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../store';
import { Button, Group } from '@mantine/core';
import { clearSource, resetSource } from '../store/source/actions';
import styled from 'styled-components';

const ResetButtonsGroup: React.FC<{
  source: string;
  clearSource: () => void;
  resetSource: () => void;
}> = props => {
  const onClearSource = useCallback(() => {
    props.clearSource();
  }, [props]);

  const onResetSource = useCallback(() => {
    props.resetSource();
  }, [props]);

  return (
    <MenuContainer>
      <Button
        color="blue"
        variant="light"
        onClick={() => onResetSource()}
        compact
      >
        Use example
      </Button>

      <Button
        color="blue"
        variant="light"
        onClick={() => onClearSource()}
        compact
      >
        Clear text
      </Button>
    </MenuContainer>
  );
};

const MenuContainer = styled(Group)``;

const mapStateToProps = (state: AppState) => ({
  source: state.source.source,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      clearSource,
      resetSource,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ResetButtonsGroup);
