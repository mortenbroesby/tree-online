import { Button, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useCallback, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import styled from 'styled-components';
import { useAtom } from 'jotai';

import { MOBILE_FOLD } from '../constants';
import { getTreeAtom } from '../store';

const COPY = 'Copy output';
const SHARE = 'Share URL';

const BUTTON_TEXT_TIMEOUT = 1200;

const ShareButtonsGroup = () => {
  const [tree] = useAtom(getTreeAtom);
  const [copyButtonText, setCopyButtonText] = useState(COPY);
  const [shareButtonText, setShareButtonText] = useState(SHARE);

  const onCopy = useCallback(() => {
    setCopyButtonText('Output was copied!');
    setTimeout(() => setCopyButtonText(COPY), BUTTON_TEXT_TIMEOUT);
  }, []);

  const onShare = useCallback(() => {
    setShareButtonText('URL was copied!');
    setTimeout(() => setShareButtonText(SHARE), BUTTON_TEXT_TIMEOUT);
  }, []);

  return (
    <ButtonContainer>
      <CopyToClipboard text={tree} onCopy={onCopy}>
        <Button variant="gradient" gradient={{ from: 'red', to: 'orange' }}>
          {copyButtonText}
        </Button>
      </CopyToClipboard>

      <CopyToClipboard text={window.location.href} onCopy={onShare}>
        <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
          {shareButtonText}
        </Button>
      </CopyToClipboard>
    </ButtonContainer>
  );
};

const ButtonContainer = ({ children, ...parameters }) => {
  const isLargeScreen = useMediaQuery(`(min-width: ${MOBILE_FOLD}px`);

  if (isLargeScreen) {
    return (
      <Group align="center" spacing="xl" {...parameters}>
        {children}
      </Group>
    );
  }

  return (
    <MenuContainer align="center" spacing="xl" {...parameters}>
      {children}
    </MenuContainer>
  );
};

const MenuContainer = styled(Group)`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 20px;
`;

export default ShareButtonsGroup;
