import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/helpers';
import MobileContactButton from '../MobileContactButton';

describe('MobileContactButton', () => {
  it('renders the contact button', () => {
    renderWithRouter(<MobileContactButton />);
    const button = screen.getByLabelText('Contact us');
    expect(button).toBeInTheDocument();
  });

  it('links to /#contact', () => {
    renderWithRouter(<MobileContactButton />);
    const button = screen.getByLabelText('Contact us');
    expect(button).toHaveAttribute('href', '/#contact');
  });
});
