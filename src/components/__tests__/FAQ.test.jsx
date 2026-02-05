import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../test/helpers';
import FAQ from '../FAQ';

describe('FAQ', () => {
  it('renders the section with id "faq"', () => {
    renderWithRouter(<FAQ />);
    expect(document.getElementById('faq')).toBeInTheDocument();
  });

  it('renders the section heading', () => {
    renderWithRouter(<FAQ />);
    expect(screen.getByText(/Frequently Asked/)).toBeInTheDocument();
  });

  it('renders all FAQ questions', () => {
    renderWithRouter(<FAQ />);
    expect(screen.getByText('What is ABA therapy?')).toBeInTheDocument();
    expect(screen.getByText('Who can benefit from ABA therapy?')).toBeInTheDocument();
    expect(screen.getByText('How long does ABA therapy take?')).toBeInTheDocument();
    expect(screen.getByText('Do you accept insurance?')).toBeInTheDocument();
    expect(screen.getByText('What are the benefits of in-home ABA therapy?')).toBeInTheDocument();
    expect(screen.getByText('How do I get started?')).toBeInTheDocument();
  });

  it('first FAQ is open by default', () => {
    renderWithRouter(<FAQ />);
    const firstButton = screen.getByText('What is ABA therapy?').closest('button');
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('toggles FAQ items on click', async () => {
    const user = userEvent.setup();
    renderWithRouter(<FAQ />);

    const secondQuestion = screen.getByText('Who can benefit from ABA therapy?').closest('button');
    expect(secondQuestion).toHaveAttribute('aria-expanded', 'false');

    await user.click(secondQuestion);
    expect(secondQuestion).toHaveAttribute('aria-expanded', 'true');
  });

  it('has aria-controls on toggle buttons', () => {
    renderWithRouter(<FAQ />);
    const buttons = screen.getAllByRole('button', { expanded: true });
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute('aria-controls');
    });
  });

  it('does not mention clinic-based therapy in FAQ', () => {
    renderWithRouter(<FAQ />);
    expect(screen.queryByText(/clinic-based/i)).not.toBeInTheDocument();
  });
});
