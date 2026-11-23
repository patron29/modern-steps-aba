import { describe, it, expect } from 'vitest';
import { renderWithRouter } from '../../test/helpers';
import Home from '../Home';

describe('Home', () => {
  it('sets the document title', () => {
    renderWithRouter(<Home />);
    expect(document.title).toBe('Modern Steps ABA | In-Home ABA Therapy Services in Virginia');
  });

  it('renders all sections', () => {
    renderWithRouter(<Home />);
    expect(document.getElementById('about')).toBeInTheDocument();
    expect(document.getElementById('services')).toBeInTheDocument();
    expect(document.getElementById('process')).toBeInTheDocument();
    expect(document.getElementById('team')).toBeInTheDocument();
    expect(document.getElementById('testimonials')).toBeInTheDocument();
    expect(document.getElementById('faq')).toBeInTheDocument();
    expect(document.getElementById('contact')).toBeInTheDocument();
  });
});
