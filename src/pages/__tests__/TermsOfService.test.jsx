import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/helpers';
import TermsOfService from '../TermsOfService';

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
    const emailLinks = screen.getAllByText('mchoudhary@modernstepsaba.com');
    const contactEmail = emailLinks.find(el => el.closest('a'));
    expect(contactEmail.closest('a')).toHaveAttribute('href', 'mailto:mchoudhary@modernstepsaba.com');
  });

  it('renders clickable phone number in contact section', () => {
    renderWithRouter(<TermsOfService />);
    const phone = screen.getByText('(571) 866-0640');
    expect(phone.closest('a')).toHaveAttribute('href', 'tel:5718660640');
  });

  it('scrolls to top on mount', () => {
    renderWithRouter(<TermsOfService />);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
