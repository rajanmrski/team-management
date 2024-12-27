import React, { ReactNode } from 'react';

import { ActionIcon, Group, Paper, PaperProps, Text } from '@mantine/core';
import { IconDotsVertical } from '@tabler/icons-react';
import { DataTable } from 'mantine-datatable';

import { ErrorAlert, Surface } from '@/components';

type LanguageTableProps = {
  data?: {
    id: string;
    language: string;
    users: number;
    users_percentage: number;
  }[];
  error: ReactNode;
  loading: boolean;
} & PaperProps;

const LanguageTable = ({
  data,
  error,
  loading,
  ...others
}: LanguageTableProps) => {
  return (
    <Surface component={Paper} {...others}>
      <Group justify="space-between" mb="sm">
        <Text size="lg" fw={600}>
          Languages
        </Text>
        <ActionIcon variant="subtle">
          <IconDotsVertical size={16} />
        </ActionIcon>
      </Group>
      {error ? (
        <ErrorAlert
          title="Error loading languages"
          message={error.toString()}
        />
      ) : (
        <DataTable
          verticalSpacing="sm"
          highlightOnHover
          columns={[
            { accessor: 'language' },
            { accessor: 'users' },
            { accessor: 'users_percentage', title: 'Users %' },
          ]}
          records={data}
          fetching={loading}
        />
      )}
    </Surface>
  );
};

export default LanguageTable;
