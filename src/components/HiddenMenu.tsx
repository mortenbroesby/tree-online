/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState, getTree } from '../store';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
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
import TipsAndTricksModalButton from './ModalButton';
import ShareButtonsGroup from './ShareButtonsGroup';
import { MOBILE_FOLD } from '../constants';

const HiddenMenu: React.FC<{
  tree: string;
  fancy: boolean;
  useIcon: boolean;
  trailingSlash: boolean;
  rootDot: boolean;
  updateFancy: (newValue: boolean) => void;
  updateUseIcon: (newValue: boolean) => void;
  updateTrailingSlash: (newValue: boolean) => void;
  updateRootDot: (newValue: boolean) => void;
}> = (props) => {
  const [opened, { open, close }] = useDisclosure(false);

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
          <ContentGroup>
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
              <TipsAndTricksModalButton />

              <FullWidthLink
                href="https://github.com/mortenbroesby/tree-online#what-is-this"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="blue" variant="outline">
                  Read more here
                </Button>
              </FullWidthLink>
            </ButtonGroup>
          </ContentGroup>
        </MenuContainer>
      </Modal>

      <BurgerContainer>
        <ShareButtonsGroup />

        <Burger
          opened={opened}
          onClick={open}
          aria-label={opened ? 'Close navigation' : 'Open navigation'}
        />
      </BurgerContainer>
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
  padding: 48px 16px;
  background-color: white;
  min-width: 200px;
  border-radius: 8px;
`;

const ContentGroup: FC = ({ children, ...parameters }) => {
  const isLargeScreen = useMediaQuery(`(min-width: ${MOBILE_FOLD}px`);

  if (isLargeScreen) {
    return (
      <Group align="center" spacing="xl" {...parameters}>
        {children}
      </Group>
    );
  }

  return (
    <Stack align="center" spacing="xl" {...parameters}>
      {children}
    </Stack>
  );
};

const CheckboxGroup = styled(Stack)`
  max-width: 220px;
  min-width: 220px;
`;

const ButtonGroup = styled(Stack)`
  max-width: 220px;
  min-width: 220px;
`;

const BurgerContainer = styled(Group)`
  padding: 12px;
  margin-left: auto;

  @media (max-width: ${MOBILE_FOLD}px) {
    position: absolute;
    top: 0;
    right: 0;
    padding-top: 26px;
    padding-right: 28px;
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(HiddenMenu);
