import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../store';
import { Button } from '@mantine/core';
import { clearSource, resetSource } from '../store/source/actions';

const ButtonGroup: React.FC<{
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
    <>
      <Button color="orange" onClick={() => onClearSource()}>
        Clear
      </Button>

      <Button color="blue" onClick={() => onResetSource()}>
        Reset
      </Button>
    </>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup);
