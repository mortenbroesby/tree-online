import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, Text, Stack } from '@mantine/core';
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
        <Stack align="center">
          <Text weight="bold">Tips and tricks</Text>

          <Code block>{codeForPreviousDemo}</Code>

          <a
            href="https://github.com/mortenbroesby/tree-online#what-is-this"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="subtle">Read more here</Button>
          </a>
        </Stack>
      </Modal>

      <Group position="center">
        <Button variant="subtle" onClick={open}>
          Want to know more?
        </Button>
      </Group>
    </>
  );
}
