import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/helpers';
import TermsOfService from '../TermsOfService';
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, EMAIL_HREF } from '../../config/site.js';

describe('TermsOfService', () => {
  it('sets the document title', () => {
    renderWithRouter(<TermsOfService />);
    expect(document.title).toBe('Terms of Service | Modern Steps ABA');
  });

  it('renders the page heading', () => {
    renderWithRouter(<TermsOfService />);
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });

  it('renders all major sections', () => {
    renderWithRouter(<TermsOfService />);
    expect(screen.getByText('Agreement to Terms')).toBeInTheDocument();
    expect(screen.getByText('Description of Services')).toBeInTheDocument();
    expect(screen.getByText('Client Responsibilities')).toBeInTheDocument();
    expect(screen.getByText('Confidentiality')).toBeInTheDocument();
    expect(screen.getByText('Governing Law')).toBeInTheDocument();
  });

  it('renders correct service descriptions (NET, not Training)', () => {
    renderWithRouter(<TermsOfService />);
    expect(screen.getByText(/Natural Environment Teaching/)).toBeInTheDocument();
  });

  it('renders Back to Home link', () => {
    renderWithRouter(<TermsOfService />);
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });

  it('renders clickable email link in contact section', () => {
    renderWithRouter(<TermsOfService />);
    const emailLinks = screen.getAllByText(EMAIL);
    const contactEmail = emailLinks.find(el => el.closest('a'));
    expect(contactEmail.closest('a')).toHaveAttribute('href', EMAIL_HREF);
  });

  it('renders clickable phone number in contact section', () => {
    renderWithRouter(<TermsOfService />);
    const phone = screen.getByText(PHONE_DISPLAY);
    expect(phone.closest('a')).toHaveAttribute('href', PHONE_HREF);
  });

  it('scrolls to top on mount', () => {
    renderWithRouter(<TermsOfService />);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
