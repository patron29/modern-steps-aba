import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/helpers';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders the main heading', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByText(/Taking Modern Steps/i)).toBeInTheDocument();
  });

  it('renders the subtitle with "In-Home Services"', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByText('In-Home Services')).toBeInTheDocument();
  });

  it('does not mention clinic-based services', () => {
    renderWithRouter(<Hero />);
    expect(screen.queryByText(/clinic-based/i)).not.toBeInTheDocument();
  });

  it('renders CTA links', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByText('Get a Free Consultation')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('has correct href on consultation link', () => {
    renderWithRouter(<Hero />);
    const consultLink = screen.getByText('Get a Free Consultation').closest('a');
    expect(consultLink).toHaveAttribute('href', '#contact');
  });

  it('renders trust indicators', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByText('Board Certified Analysts')).toBeInTheDocument();
    expect(screen.getByText('Insurance Accepted')).toBeInTheDocument();
    expect(screen.getByText('All Ages Welcome')).toBeInTheDocument();
  });
});
