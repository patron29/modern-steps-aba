import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });

  it('renders the navbar logo', () => {
    render(<App />);
    const logos = screen.getAllByAltText('Modern Steps ABA');
    expect(logos.length).toBeGreaterThanOrEqual(1);
  });

  it('renders the footer', () => {
    render(<App />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
