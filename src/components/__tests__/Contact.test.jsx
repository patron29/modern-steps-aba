import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/helpers';
import Contact from '../Contact';
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, HOURS_SHORT } from '../../config/site.js';
describe('Contact', () => {
  it('renders the section with id "contact"', () => {
    renderWithRouter(<Contact />);
    expect(document.getElementById('contact')).toBeInTheDocument();
  });

  it('renders the section heading', () => {
    renderWithRouter(<Contact />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.textContent).toContain('Free Consultation');
  });

  it('renders phone number with correct tel link', () => {
    renderWithRouter(<Contact />);
    const phoneLink = screen.getByText(PHONE_DISPLAY);
    expect(phoneLink.closest('a')).toHaveAttribute('href', PHONE_HREF);
  });

  it('renders email with correct mailto link', () => {
    renderWithRouter(<Contact />);
    const emailLinks = screen.getAllByText(EMAIL);
    const linkedEmail = emailLinks.find(el => el.closest('a[href^="mailto:"]'));
    expect(linkedEmail).toBeTruthy();
  });

  it('renders business hours', () => {
    renderWithRouter(<Contact />);
    expect(screen.getByText(HOURS_SHORT)).toBeInTheDocument();
  });

  it('renders Calendly booking link', () => {
    renderWithRouter(<Contact />);
    const bookLink = screen.getByText('Book a Consultation');
    expect(bookLink.closest('a')).toHaveAttribute('target', '_blank');
  });

  it('has aria-hidden on decorative icons', () => {
    renderWithRouter(<Contact />);
    const hiddenIcons = document.querySelectorAll('[aria-hidden="true"]');
    expect(hiddenIcons.length).toBeGreaterThan(0);
  });
});
