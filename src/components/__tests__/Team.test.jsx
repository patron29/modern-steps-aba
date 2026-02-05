import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/helpers';
import Team from '../Team';

describe('Team', () => {
  it('renders the section with id "team"', () => {
    renderWithRouter(<Team />);
    expect(document.getElementById('team')).toBeInTheDocument();
  });

  it('renders both team members', () => {
    renderWithRouter(<Team />);
    expect(screen.getByText('Jasmeet Kooner MA, BCBA, LBA')).toBeInTheDocument();
    expect(screen.getByText('Mohmeet Choudhary, MPH, MBA')).toBeInTheDocument();
  });

  it('renders consistent title and bio for Mohmeet', () => {
    renderWithRouter(<Team />);
    expect(screen.getByText('Co-Founder and President')).toBeInTheDocument();
    expect(screen.getByText(/serves as the president/i)).toBeInTheDocument();
    // Should NOT say "co-president" in bio while title says "President"
    expect(screen.queryByText(/co-president/i)).not.toBeInTheDocument();
  });

  it('renders team member images with alt text', () => {
    renderWithRouter(<Team />);
    expect(screen.getByAltText('Jasmeet Kooner MA, BCBA, LBA')).toBeInTheDocument();
    expect(screen.getByAltText('Mohmeet Choudhary, MPH, MBA')).toBeInTheDocument();
  });

  it('renders social links with proper attributes', () => {
    renderWithRouter(<Team />);
    const fbLink = screen.getByLabelText('Mohmeet Choudhary, MPH, MBA Facebook');
    expect(fbLink).toHaveAttribute('target', '_blank');
    expect(fbLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has lazy loading on team photos', () => {
    renderWithRouter(<Team />);
    const img = screen.getByAltText('Jasmeet Kooner MA, BCBA, LBA');
    expect(img).toHaveAttribute('loading', 'lazy');
  });
});
