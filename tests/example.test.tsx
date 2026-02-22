import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renders the chess trainer heading', () => {
    render(<Home />);
    const heading = screen.getByText(/Chess Trainer/i);
    expect(heading).toBeInTheDocument();
  });
});
