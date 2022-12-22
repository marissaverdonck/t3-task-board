import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Modal } from './modal';

describe('Test modal component', () => {
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
  test('When adding a new item, the modal component contains a button with text Add', () => {
    render(
      <Modal
        setModalOpen={() => {
          setModalOpen();
        }}
        createItem={undefined}
        editItem={undefined}
        setModalItemData={() => setModalItemData()}
      />
    );
    expect(screen.getByRole('button', { name: /Add/i }));
  });
  test('When editing a item, the modal component contains a button with text Save', () => {
    render(
      <Modal
        setModalOpen={() => {
          setModalOpen();
        }}
        createItem={undefined}
        editItem={undefined}
        modalItemData={{ title: '', description: '', status: '', id: '000' }}
        setModalItemData={() => setModalItemData()}
      />
    );
    expect(screen.getByRole('button', { name: /Save/i }));
  });
});
