import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/helpers';
import About from '../About';

describe('About', () => {
  it('renders the section with id "about"', () => {
    renderWithRouter(<About />);
    expect(document.getElementById('about')).toBeInTheDocument();
  });

  it('renders the heading', () => {
    renderWithRouter(<About />);
    expect(screen.getByText(/Grow and Thrive/i)).toBeInTheDocument();
  });

  it('renders all four core values', () => {
    renderWithRouter(<About />);
    expect(screen.getByText('Compassionate Care')).toBeInTheDocument();
    expect(screen.getByText('Family-Centered')).toBeInTheDocument();
    expect(screen.getByText('Evidence-Based')).toBeInTheDocument();
    expect(screen.getByText('Individualized')).toBeInTheDocument();
  });

  it('renders all about images with alt text', () => {
    renderWithRouter(<About />);
    expect(screen.getByAltText('Child playing and learning')).toBeInTheDocument();
    expect(screen.getByAltText('Parent and child learning together')).toBeInTheDocument();
    expect(screen.getByAltText('Child drawing and creating art')).toBeInTheDocument();
  });

  it('uses local image paths (not external URLs)', () => {
    renderWithRouter(<About />);
    const images = screen.getAllByRole('img');
    images.forEach((img) => {
      const src = img.getAttribute('src');
      if (src) {
        expect(src).toMatch(/^\/images\//);
      }
    });
  });

  it('has lazy loading on images', () => {
    renderWithRouter(<About />);
    const img = screen.getByAltText('Child playing and learning');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('has aria-hidden on decorative icons', () => {
    renderWithRouter(<About />);
    const icons = document.querySelectorAll('[aria-hidden="true"]');
    expect(icons.length).toBeGreaterThan(0);
  });
});
