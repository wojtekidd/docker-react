import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('look for hello string', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('look for there string', () => {
  render(<App />);
  const linkElement = screen.getByText(/there/i);
  expect(linkElement).toBeInTheDocument();
});