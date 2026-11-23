import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/helpers';
import PrivacyPolicy from '../PrivacyPolicy';
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, EMAIL_HREF } from '../../config/site.js';

describe('PrivacyPolicy', () => {
  it('sets the document title', () => {
    renderWithRouter(<PrivacyPolicy />);
    expect(document.title).toBe('Privacy Policy | Modern Steps ABA');
  });

  it('renders the page heading', () => {
    renderWithRouter(<PrivacyPolicy />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('renders all major sections', () => {
    renderWithRouter(<PrivacyPolicy />);
    expect(screen.getByText('Introduction')).toBeInTheDocument();
    expect(screen.getByText('Information We Collect')).toBeInTheDocument();
    expect(screen.getByText('HIPAA Compliance')).toBeInTheDocument();
    expect(screen.getByText('Data Security')).toBeInTheDocument();
  });

  it('renders Back to Home link', () => {
    renderWithRouter(<PrivacyPolicy />);
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });

  it('renders clickable email link in contact section', () => {
    renderWithRouter(<PrivacyPolicy />);
    const emailLinks = screen.getAllByText(EMAIL);
    const contactEmail = emailLinks.find(el => el.closest('a'));
    expect(contactEmail.closest('a')).toHaveAttribute('href', EMAIL_HREF);
  });

  it('renders clickable phone number in contact section', () => {
    renderWithRouter(<PrivacyPolicy />);
    const phone = screen.getByText(PHONE_DISPLAY);
    expect(phone.closest('a')).toHaveAttribute('href', PHONE_HREF);
  });

  it('scrolls to top on mount', () => {
    renderWithRouter(<PrivacyPolicy />);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
