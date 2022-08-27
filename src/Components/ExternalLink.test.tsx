import React from 'react';
import { render, screen } from '@testing-library/react';
import ExternalLink from './ExternalLink';

test('renders the anchor element with the right href value and external attributes', () => {
  render(<ExternalLink href="www.example.com">link</ExternalLink>);
  const anchor = screen.getByRole('link');
  expect(anchor).toHaveAttribute('href', 'www.example.com');
  expect(anchor).toHaveAttribute('target', '_blank');
  expect(anchor).toHaveAttribute('rel', 'noreferrer');
});
