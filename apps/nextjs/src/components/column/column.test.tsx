import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Column } from './column';

describe('Test column component', () => {
  const setModalOpen = () => {
    false;
  };
  const setModalItemData = () => {
    return {
      title: '',
      description: '',
      status: '',
      id: '',
    };
  };
  test('The column component shows items from the right status', () => {
    render(
      <Column
        name={'To do'}
        status={'to_do'}
        items={[
          {
            id: '',
            title: 'To do task',
            description: 'To do description',
            status: 'to_do',
          },
        ]}
        setModalOpen={() => {
          setModalOpen();
        }}
        setModalItemData={() => setModalItemData()}
      />
    );
    expect(screen.getByText(/To do task/i)).toBeDefined();
  });
  test('The column component does not show items from an other status', () => {
    render(
      <Column
        name={'To do'}
        status={'to_do'}
        items={[
          {
            id: '',
            title: 'In progress task',
            description: 'In progress description',
            status: 'in_progress',
          },
        ]}
        setModalOpen={() => {
          setModalOpen();
        }}
        setModalItemData={() => setModalItemData()}
      />
    );
    expect(screen.queryByText(/In progress task/i)).toBeNull();
  });
});
