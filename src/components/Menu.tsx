/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState, getTree } from '../store';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';
import {
  Button,
  Checkbox,
  Text,
  Group,
  Stack,
  Modal,
  Divider,
} from '@mantine/core';
import styled from 'styled-components';
import {
  updateFancy,
  updateUseIcon,
  updateTrailingSlash,
  updateRootDot,
} from '../store/options/actions';
import ModalButton from './ModalButton';

const COPY = 'Copy to clipboard';
const SHARE = 'Share URL';

const BUTTON_TEXT_TIMEOUT = 1200;

const Menu: React.FC<{
  tree: string;
  fancy: boolean;
  useIcon: boolean;
  trailingSlash: boolean;
  rootDot: boolean;
  updateFancy: (newValue: boolean) => void;
  updateUseIcon: (newValue: boolean) => void;
  updateTrailingSlash: (newValue: boolean) => void;
  updateRootDot: (newValue: boolean) => void;
}> = props => {
  const [copyButtonText, setCopyButtonText] = useState(COPY);
  const [shareButtonText, setShareButtonText] = useState(SHARE);

  const [opened, { open, close }] = useDisclosure(false);

  const onCopy = useCallback(() => {
    setCopyButtonText('Tree was copied!');
    setTimeout(() => setCopyButtonText(COPY), BUTTON_TEXT_TIMEOUT);
  }, []);

  const onShare = useCallback(() => {
    setShareButtonText('URL was copied!');
    setTimeout(() => setShareButtonText(SHARE), BUTTON_TEXT_TIMEOUT);
  }, []);

  const onFancyChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      props.updateFancy(event.target.checked);
    },
    [props.updateFancy],
  );

  const onIconChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      props.updateUseIcon(event.target.checked);
    },
    [props.updateUseIcon],
  );

  const onTrailingSlashChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      props.updateTrailingSlash(event.target.checked);
    },
    [props.updateTrailingSlash],
  );

  const onRootDotChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      props.updateRootDot(event.target.checked);
    },
    [props.updateRootDot],
  );

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        size="auto"
      >
        <MenuContainer>
          <Group align="center" spacing="xl">
            <CheckboxGroup spacing="sm" align="center">
              <Text weight="bold" underline>
                Formatting
              </Text>
              <Stack spacing="sm" align="stretch">
                <Checkbox
                  checked={props.fancy}
                  onChange={onFancyChanged}
                  label="Use fancy format"
                />
                <Checkbox
                  checked={props.rootDot}
                  onChange={onRootDotChanged}
                  label="Prefix root with dot"
                />
                <Checkbox
                  checked={props.trailingSlash}
                  onChange={onTrailingSlashChanged}
                  label="Use trailing slash"
                />
                {props.trailingSlash && (
                  <Checkbox
                    checked={props.useIcon}
                    onChange={onIconChanged}
                    label="Use folder icons"
                  />
                )}
              </Stack>
            </CheckboxGroup>

            <Divider orientation="vertical" variant="dashed" />

            <ButtonGroup>
              <Stack
                spacing="sm"
                role="group"
                aria-label="Copy and share buttons"
              >
                <CopyToClipboard text={props.tree} onCopy={onCopy}>
                  <Button>{copyButtonText}</Button>
                </CopyToClipboard>

                <CopyToClipboard text={window.location.href} onCopy={onShare}>
                  <Button variant="light">{shareButtonText}</Button>
                </CopyToClipboard>
              </Stack>

              <Divider orientation="horizontal" variant="dashed" />

              <ModalButton />

              <FullWidthLink
                href="https://github.com/mortenbroesby/tree-online#what-is-this"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="orange">Read more here</Button>
              </FullWidthLink>
            </ButtonGroup>
          </Group>
        </MenuContainer>
      </Modal>

      <TopRightElement>
        <BurgerContainer>
          <Burger
            opened={opened}
            onClick={open}
            aria-label={opened ? 'Close navigation' : 'Open navigation'}
          />
        </BurgerContainer>
      </TopRightElement>
    </>
  );
};

const FullWidthLink = styled.a`
  width: 100%;

  & > * {
    width: 100%;
  }
`;

const MenuContainer = styled.div`
  padding: 16px;
  background-color: white;
  min-width: 200px;
  border-radius: 8px;
`;

const CheckboxGroup = styled(Stack)`
  max-width: 220px;
  min-width: 220px;
`;

const ButtonGroup = styled(Stack)`
  max-width: 220px;
  min-width: 220px;
`;

const BurgerContainer = styled.div`
  padding: 12px;
`;

const TopRightElement = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const mapStateToProps = (state: AppState) => ({
  tree: getTree(state),
  fancy: state.options.fancy,
  useIcon: state.options.useIcon,
  trailingSlash: state.options.trailingSlash,
  rootDot: state.options.rootDot,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      updateFancy,
      updateUseIcon,
      updateTrailingSlash,
      updateRootDot,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
