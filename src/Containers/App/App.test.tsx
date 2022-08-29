import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the description element', () => {
  render(<App />);
  const descriptionElement = screen.getByText(/Enter a graph by providing some paths/i);
  expect(descriptionElement).toBeInTheDocument();
});

test('the result should appear', () => {
  render(<App />);
  const textArea = screen.getByRole('textbox');
  const button = screen.getByRole('button');

  fireEvent.change(textArea, { target: { value: 'a-b-c' } });
  fireEvent.click(button);

  const resultElement = screen.getByText(/is red-blue colorable!/i);
  expect(resultElement).toBeInTheDocument();
});

test('the fail-result should appear when providing a non bigraph', () => {
  render(<App />);
  const textArea = screen.getByRole('textbox');
  const button = screen.getByRole('button');

  fireEvent.change(textArea, { target: { value: 'a-b-c-a' } });
  fireEvent.click(button);

  const resultElement = screen.getByText(/is NOT red-blue colorable: not bipartite/i);
  expect(resultElement).toBeInTheDocument();
});

test('the fail-result should appear when providing a not connected graph', () => {
  render(<App />);
  const textArea = screen.getByRole('textbox');
  const button = screen.getByRole('button');

  fireEvent.change(textArea, { target: { value: 'a-b-c, d' } });
  fireEvent.click(button);

  const resultElement = screen.getByText(/is NOT red-blue colorable: not connected/i);
  expect(resultElement).toBeInTheDocument();
});

test('it should dispaly an error if the graph entered is empty', () => {
  render(<App />);
  const button = screen.getByRole('button');

  fireEvent.click(button);

  const resultElement = screen.getByText(/invalid graph provided: empty/i);
  expect(resultElement).toBeInTheDocument();
});

test('it should dispaly an error if the graph entered has an empty node', () => {
  render(<App />);
  const textArea = screen.getByRole('textbox');
  const button = screen.getByRole('button');

  fireEvent.change(textArea, { target: { value: 'a-b-' } });
  fireEvent.click(button);

  const resultElement = screen.getByText(/invalid node: cannot be an empty string./i);
  expect(resultElement).toBeInTheDocument();
});

test('it should dispaly an error if the graph entered has less than 2 nodes', () => {
  render(<App />);
  const textArea = screen.getByRole('textbox');
  const button = screen.getByRole('button');

  fireEvent.change(textArea, { target: { value: 'a' } });
  fireEvent.click(button);

  const resultElement = screen.getByText(/invalid graph provided: less than 2 nodes./i);
  expect(resultElement).toBeInTheDocument();
});
