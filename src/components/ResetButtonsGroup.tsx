import { Button, Group } from '@mantine/core';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSourceActions } from '../store/use-source-actions';

const ResetButtonsGroup: React.FC = () => {
  const { clearSource, resetSource } = useSourceActions();

  const onClearSource = useCallback(() => {
    clearSource();
  }, [clearSource]);

  const onResetSource = useCallback(() => {
    resetSource();
  }, [resetSource]);

  return (
    <MenuContainer>
      <Button color="blue" variant="light" onClick={onResetSource} compact>
        Use example
      </Button>

      <Button color="blue" variant="light" onClick={onClearSource} compact>
        Clear text
      </Button>
    </MenuContainer>
  );
};

const MenuContainer = styled(Group)``;

export default ResetButtonsGroup;
