import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../test/helpers';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders the logo image', () => {
    renderWithRouter(<Navbar />);
    const logo = screen.getByAltText('Modern Steps ABA');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/logo.png');
  });

  it('renders navigation links', () => {
    renderWithRouter(<Navbar />);
    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks.length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Team').length).toBeGreaterThan(0);
    expect(screen.getAllByText('FAQ').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });

  it('renders the Book a Consultation CTA button', () => {
    renderWithRouter(<Navbar />);
    const ctaButtons = screen.getAllByText('Book a Consultation');
    expect(ctaButtons.length).toBeGreaterThan(0);
  });

  it('renders mobile menu toggle button', () => {
    renderWithRouter(<Navbar />);
    const menuButton = screen.getByLabelText('Toggle menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Navbar />);
    const menuButton = screen.getByLabelText('Toggle menu');
    await user.click(menuButton);
    expect(menuButton).toBeInTheDocument();
  });
});
