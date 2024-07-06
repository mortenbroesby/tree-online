import {
  Burger,
  Button,
  Checkbox,
  Text,
  Group,
  Stack,
  Modal,
  Divider,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import { MOBILE_FOLD } from '../constants';
import { useUpdateOptions } from '../store/use-update-options';

import TipsAndTricksModalButton from './ModalButton';
import ShareButtonsGroup from './ShareButtonsGroup';

const HiddenMenu: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const {
    options,
    updateFancy,
    updateUseIcon,
    updateTrailingSlash,
    updateRootDot,
  } = useUpdateOptions();

  const onFancyChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateFancy(event.target.checked);
    },
    [updateFancy],
  );

  const onIconChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateUseIcon(event.target.checked);
    },
    [updateUseIcon],
  );

  const onTrailingSlashChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateTrailingSlash(event.target.checked);
    },
    [updateTrailingSlash],
  );

  const onRootDotChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateRootDot(event.target.checked);
    },
    [updateRootDot],
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
                  checked={options.fancy}
                  onChange={onFancyChanged}
                  label="Use fancy format"
                />
                <Checkbox
                  checked={options.rootDot}
                  onChange={onRootDotChanged}
                  label="Prefix root with dot"
                />
                <Checkbox
                  checked={options.trailingSlash}
                  onChange={onTrailingSlashChanged}
                  label="Use trailing slash"
                />
                {options.trailingSlash && (
                  <Checkbox
                    checked={options.useIcon}
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

const ContentGroup = ({ children, ...parameters }) => {
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

export default HiddenMenu;
