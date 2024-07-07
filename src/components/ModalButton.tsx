import { Modal, Button, Text, Stack, Code } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

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
          <Code
            block
          >{`Use a hash/pund sign (#) to add a comment after a folder.

Example:
lib # Example

Becomes:
└─ lib/ # Example`}</Code>
        </Stack>
      </Modal>

      <Button color="blue" variant="light" onClick={open}>
        Tips and tricks
      </Button>
    </>
  );
}
