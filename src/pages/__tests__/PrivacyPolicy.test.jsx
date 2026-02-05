import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/helpers';
import PrivacyPolicy from '../PrivacyPolicy';

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
    const emailLinks = screen.getAllByText('mchoudhary@modernstepsaba.com');
    const contactEmail = emailLinks.find(el => el.closest('a'));
    expect(contactEmail.closest('a')).toHaveAttribute('href', 'mailto:mchoudhary@modernstepsaba.com');
  });

  it('renders clickable phone number in contact section', () => {
    renderWithRouter(<PrivacyPolicy />);
    const phone = screen.getByText('(571) 866-0640');
    expect(phone.closest('a')).toHaveAttribute('href', 'tel:5718660640');
  });

  it('scrolls to top on mount', () => {
    renderWithRouter(<PrivacyPolicy />);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
