import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/helpers';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders the footer', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the logo', () => {
    renderWithRouter(<Footer />);
    const logo = screen.getByAltText('Modern Steps ABA');
    expect(logo).toBeInTheDocument();
  });

  it('renders quick links', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('FAQ')).toBeInTheDocument();
  });

    it('renders correct service names', () => {
      renderWithRouter(<Footer />);
      expect(screen.getByText('In-Home ABA Therapy')).toBeInTheDocument();
      expect(screen.getByText('Early Intervention ABA')).toBeInTheDocument();
      expect(screen.getByText('Functional Behavior Assessment')).toBeInTheDocument();
      expect(screen.getByText('Natural Environment Teaching')).toBeInTheDocument();
      expect(screen.getByText('Caregiver Training & Support')).toBeInTheDocument();
    });
  
  it('renders contact information', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('(571) 866-0640')).toBeInTheDocument();
    expect(screen.getByText('mchoudhary@modernstepsaba.com')).toBeInTheDocument();
  });

  it('renders social links with target _blank', () => {
    renderWithRouter(<Footer />);
    const fbLink = screen.getByLabelText('Facebook');
    const igLink = screen.getByLabelText('Instagram');
    expect(fbLink).toHaveAttribute('target', '_blank');
    expect(igLink).toHaveAttribute('target', '_blank');
  });

  it('renders Privacy Policy and Terms of Service links', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });

  it('renders copyright with current year', () => {
    renderWithRouter(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument();
  });
});
