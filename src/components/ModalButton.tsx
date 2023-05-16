import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import { Text } from '@mantine/core';
import { Code } from '@mantine/core';

const codeForPreviousDemo = `Use a hash/pund sign (#) to add a comment after a folder.

Example:
lib # Example

Becomes:
├─ lib/ # Example`;

export default function ModalButton() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        size="auto"
      >
        <Code block>{codeForPreviousDemo}</Code>
      </Modal>

      <Group position="center">
        <Button variant="subtle" onClick={open}>
          Tips and tricks
        </Button>
      </Group>
    </>
  );
}
