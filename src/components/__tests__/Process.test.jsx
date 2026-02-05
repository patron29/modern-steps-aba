import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/helpers';
import Process from '../Process';

describe('Process', () => {
  it('renders the section with id "process"', () => {
    renderWithRouter(<Process />);
    expect(document.getElementById('process')).toBeInTheDocument();
  });

  it('renders the section heading', () => {
    renderWithRouter(<Process />);
    expect(screen.getByText(/Getting Started is/i)).toBeInTheDocument();
  });

  it('renders all four steps', () => {
    renderWithRouter(<Process />);
    expect(screen.getByText('Free Consultation')).toBeInTheDocument();
    expect(screen.getByText('Comprehensive Assessment')).toBeInTheDocument();
    expect(screen.getByText('Personalized Treatment Plan')).toBeInTheDocument();
    expect(screen.getByText('Begin Therapy')).toBeInTheDocument();
  });

  it('renders step numbers', () => {
    renderWithRouter(<Process />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
  });

  it('renders Calendly CTA link', () => {
    renderWithRouter(<Process />);
    const cta = screen.getByText('Book a Consultation');
    expect(cta.closest('a')).toHaveAttribute('target', '_blank');
    expect(cta.closest('a')).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
