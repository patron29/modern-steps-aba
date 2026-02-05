import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../test/helpers';
import Testimonials from '../Testimonials';

describe('Testimonials', () => {
  it('renders the section with id "testimonials"', () => {
    renderWithRouter(<Testimonials />);
    expect(document.getElementById('testimonials')).toBeInTheDocument();
  });

  it('renders the section heading', () => {
    renderWithRouter(<Testimonials />);
    expect(screen.getByText(/What/)).toBeInTheDocument();
    expect(screen.getByText('Families')).toBeInTheDocument();
  });

  it('renders the first testimonial by default', () => {
    renderWithRouter(<Testimonials />);
    expect(screen.getByText(/Heather and charlie/i)).toBeInTheDocument();
    expect(screen.getByText('Samantha Lee')).toBeInTheDocument();
  });

  it('renders star ratings with accessibility', () => {
    renderWithRouter(<Testimonials />);
    const starsContainer = screen.getByRole('img', { name: /5 out of 5 stars/ });
    expect(starsContainer).toBeInTheDocument();
  });

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Testimonials />);
    const nextBtn = screen.getByLabelText('Next testimonial');
    await user.click(nextBtn);
    expect(screen.getByText('Jaspreet')).toBeInTheDocument();
  });

  it('navigates to previous testimonial (wraps around)', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Testimonials />);
    const prevBtn = screen.getByLabelText('Previous testimonial');
    await user.click(prevBtn);
    expect(screen.getByText('Muzhda Sharifi')).toBeInTheDocument();
  });

  it('renders navigation dots for each testimonial', () => {
    renderWithRouter(<Testimonials />);
    const dots = screen.getAllByLabelText(/Go to testimonial/);
    expect(dots).toHaveLength(4);
  });

  it('renders the disclaimer', () => {
    renderWithRouter(<Testimonials />);
    expect(screen.getByText(/Reviews are voluntary/)).toBeInTheDocument();
  });
});
