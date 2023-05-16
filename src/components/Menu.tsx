/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState, getTree } from '../store';
import {
  Button,
  Checkbox,
  Text,
  Group,
  Stack,
  Flex,
  Accordion,
} from '@mantine/core';
import styled from 'styled-components';
import {
  updateFancy,
  updateUseIcon,
  updateTrailingSlash,
  updateRootDot,
} from '../store/options/actions';

const COPY = 'Copy';
const SHARE = 'Share';
const URL_COPIED = 'URL copied!';
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

  const onCopy = useCallback(() => {
    setCopyButtonText(URL_COPIED);
    setTimeout(() => setCopyButtonText(COPY), BUTTON_TEXT_TIMEOUT);
  }, []);

  const onShare = useCallback(() => {
    setShareButtonText(URL_COPIED);
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
    <BottomRightElement>
      <MenuContainer>
        <Flex direction="column" align="flex-end">
          <Group spacing="sm" role="group" aria-label="Copy and share buttons">
            <CopyToClipboard text={props.tree} onCopy={onCopy}>
              <Button>{copyButtonText}</Button>
            </CopyToClipboard>

            <CopyToClipboard text={window.location.href} onCopy={onShare}>
              <Button variant="light">{shareButtonText}</Button>
            </CopyToClipboard>
          </Group>

          <OptionsContainer>
            <Stack spacing="sm" align="center">
              <Text weight="bold" underline>
                Options
              </Text>
              <Stack spacing="sm" align="stretch">
                <Checkbox
                  checked={props.fancy}
                  onChange={onFancyChanged}
                  label="Fancy format"
                />
                <Checkbox
                  checked={props.rootDot}
                  onChange={onRootDotChanged}
                  label="Root has dot"
                />
                <Checkbox
                  checked={props.trailingSlash}
                  onChange={onTrailingSlashChanged}
                  label="Trailing slash"
                />
                {props.trailingSlash && (
                  <Checkbox
                    checked={props.useIcon}
                    onChange={onIconChanged}
                    label="Use icons"
                  />
                )}
              </Stack>
            </Stack>
          </OptionsContainer>
        </Flex>
      </MenuContainer>
    </BottomRightElement>
  );
};

const MenuContainer = styled.div`
  padding: 16px;
  background-color: white;
  min-width: 200px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const OptionsContainer = styled.div`
  padding: 16px;
`;

const BottomRightElement = styled.div`
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
