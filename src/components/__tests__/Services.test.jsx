import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/helpers';
import Services from '../Services';

describe('Services', () => {
  it('renders the section with id "services"', () => {
    renderWithRouter(<Services />);
    expect(document.getElementById('services')).toBeInTheDocument();
  });

  it('renders the section heading', () => {
    renderWithRouter(<Services />);
    expect(screen.getByText('Our Services - Right at Home')).toBeInTheDocument();
  });

  it('renders all three services', () => {
    renderWithRouter(<Services />);
    expect(screen.getByText('Natural Environment Teaching (NET)')).toBeInTheDocument();
    expect(screen.getByText('Functional Behavior Assessment (FBA)')).toBeInTheDocument();
    expect(screen.getByText('Caregiver Support')).toBeInTheDocument();
  });

  it('uses "Teaching" in NET service title', () => {
    renderWithRouter(<Services />);
    const netTitle = screen.getByText('Natural Environment Teaching (NET)');
    expect(netTitle).toBeInTheDocument();
  });

  it('renders service images with lazy loading', () => {
    renderWithRouter(<Services />);
    const images = screen.getAllByRole('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  it('renders caregiver support features list', () => {
    renderWithRouter(<Services />);
    expect(screen.getByText('Indirect/ Direct Instruction')).toBeInTheDocument();
    expect(screen.getByText('Hands on coaching/modeling')).toBeInTheDocument();
  });
});
