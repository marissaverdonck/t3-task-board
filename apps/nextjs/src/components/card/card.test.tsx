import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Card } from './card';

describe('Test card component', () => {
  const setState = () => {
    false;
  };
  test('The card component shows task data on the page', () => {
    render(
      <Card
        item={{
          id: '',
          title: 'Task title',
          description: 'Task description',
          status: 'to_do',
        }}
        setModalOpen={() => setState()}
        setModalItemData={() => setState()}
      />
    );
    expect(screen.getByText(/Task title/i)).toBeDefined();
    expect(screen.getByText(/Task description/i)).toBeDefined();
  });
});
