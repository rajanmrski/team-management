import {
  Flex,
  Stack,
  Text,
  UnstyledButton,
  UnstyledButtonProps,
} from '@mantine/core';
import { IconPointFilled } from '@tabler/icons-react';

import { IFile } from '@/app/apps/file-manager/types';

import classes from './FileButton.module.css';
import { resolveFileIcon } from '../../utils';

type FileButtonProps = UnstyledButtonProps & {
  file: IFile;
};

export function FileButton({ file, ...others }: FileButtonProps) {
  const Icon = resolveFileIcon(file.type);

  return (
    <UnstyledButton className={classes.wrapper} {...others}>
      <Icon size={18} />
      <Stack gap={2}>
        <Text fz="sm" fw={700}>
          {file.name}
        </Text>
        <Flex gap={4} align="center">
          <Text fz="xs" tt="uppercase">
            {file.size}
          </Text>
          <IconPointFilled color="gray" size={10} />
          <Text fz="xs" tt="lowercase">
            {file.type}
          </Text>
        </Flex>
      </Stack>
    </UnstyledButton>
  );
}
