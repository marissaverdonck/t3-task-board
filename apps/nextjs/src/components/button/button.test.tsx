import { describe, expect, test } from 'vitest';

import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './button';

describe('Test button component', () => {
  test('The button component shows the children property', async () => {
    render(<Button variant="primary">Button Text</Button>);
    expect(screen.getByText(/Button Text/i)).toBeDefined();
  });
  test('The button component fires the onClick function', async () => {
    let number = 0;
    render(
      <Button
        variant="primary"
        onClick={() => {
          number++;
        }}
      >
        Click button
      </Button>
    );
    const title = screen.getByText(/Click button/i);
    fireEvent.click(title);
    expect(number).toBe(1);
  });
});
