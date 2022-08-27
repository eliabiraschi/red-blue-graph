import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

test('renders the header element with the title', () => {
	const title = 'Test title';
  render(<Layout title={title}><div></div></Layout>);
  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();
});
