import {
  Burger,
  Button,
  Checkbox,
  Text,
  Group,
  Stack,
  Modal,
  Select,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import styled from 'styled-components';

import { MOBILE_FOLD } from '../constants';
import { useUpdateOptions } from '../store/use-update-options';

import ShareButtonsGroup from './ShareButtonsGroup';

const HiddenMenu: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const { options, updateFormat, updateTrailingSlash, updateRootDot } =
    useUpdateOptions();

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
              <Text weight="bold" size="lg" underline>
                Options
              </Text>
              <Stack spacing="sm" align="stretch">
                <Checkbox
                  checked={options.trailingSlash}
                  onChange={(event) =>
                    updateTrailingSlash(event.target.checked)
                  }
                  label="Use trailing folder /"
                />

                <Checkbox
                  checked={options.rootDot}
                  onChange={(event) => updateRootDot(event.target.checked)}
                  label="Prefix root with dot"
                />

                <Select
                  label="Tree visuals"
                  data={[
                    { value: 'utf-8', label: 'square' },
                    { value: 'fancy', label: 'fancy' },
                    { value: 'ascii', label: 'ascii' },
                  ]}
                  value={options.charset}
                  onChange={(event) => updateFormat(event!)}
                  placeholder="Select format"
                />
              </Stack>
            </CheckboxGroup>

            <ButtonGroup spacing="xs">
              <FullWidthLink
                href="https://github.com/mortenbroesby/tree-online#what-is-this"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="blue" variant="gradient">
                  Read more here 📄
                </Button>
              </FullWidthLink>

              <Button color="blue" variant="solid" onClick={close}>
                Close
              </Button>
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
  padding: 16px 16px;
  background-color: white;
  border-radius: 16px;
`;

const ContentGroup = ({ children, ...parameters }) => {
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
