import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/helpers';
import WhyChooseUs from '../WhyChooseUs';

describe('WhyChooseUs', () => {
  it('renders the section with id "why-choose-us"', () => {
    renderWithRouter(<WhyChooseUs />);
    expect(document.getElementById('why-choose-us')).toBeInTheDocument();
  });

  it('renders the section heading with "Modern Steps"', () => {
    renderWithRouter(<WhyChooseUs />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.textContent).toContain('Modern Steps');
    expect(heading.textContent).toContain('Difference');
  });

  it('renders all six features', () => {
    renderWithRouter(<WhyChooseUs />);
    expect(screen.getByText('Experienced BCBAs')).toBeInTheDocument();
    expect(screen.getByText('Personalized Plans')).toBeInTheDocument();
    expect(screen.getByText('Flexible Scheduling')).toBeInTheDocument();
    expect(screen.getByText('In-Home Convenience')).toBeInTheDocument();
    expect(screen.getByText('Family Involvement')).toBeInTheDocument();
    expect(screen.getByText('Data-Driven Results')).toBeInTheDocument();
  });

  it('does not offer clinic-based as a service option', () => {
    renderWithRouter(<WhyChooseUs />);
    expect(screen.queryByText(/clinic-based/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Multiple Settings/i)).not.toBeInTheDocument();
  });

  it('renders the Book a Consultation CTA', () => {
    renderWithRouter(<WhyChooseUs />);
    const cta = screen.getByText('Book a Consultation');
    expect(cta.closest('a')).toHaveAttribute('href', 'https://calendly.com/mchoudhary-modernstepsaba/interview');
    expect(cta.closest('a')).toHaveAttribute('target', '_blank');
  });
});
