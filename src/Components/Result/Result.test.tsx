import React from 'react';
import { render, screen } from '@testing-library/react';
import Result from './Result';

test('renders the element with the success class', () => {
  render(<Result value={[true, true]} />);
  const resultElement = screen.getByText(/The graph entered/i);
  expect(resultElement).toHaveClass('success');
});

test('renders the element with the fail class', () => {
  render(<Result value={[false, null]} />);
  const resultElement = screen.getByText(/The graph entered/i);
  expect(resultElement).toHaveClass('fail');
});

test('renders the element with the fail class', () => {
  render(<Result value={[true, false]} />);
  const resultElement = screen.getByText(/The graph entered/i);
  expect(resultElement).toHaveClass('fail');
});
