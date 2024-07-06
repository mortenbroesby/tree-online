import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text, Stack } from '@mantine/core';
import { Code } from '@mantine/core';

const codeForPreviousDemo = `Use a hash/pund sign (#) to add a comment after a folder.

Example:
lib # Example

Becomes:
├─ lib/ # Example`;

export default function TipsAndTricksModalButton() {
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
        <Stack align="center">
          <Text>Tips and tricks</Text>
          <Code block>{codeForPreviousDemo}</Code>
        </Stack>
      </Modal>

      <Button color="blue" variant="light" onClick={open}>
        Tips and tricks
      </Button>
    </>
  );
}
