import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renders the home page', () => {
    render(<Home />);
    // Add your assertions here
    expect(document.body).toBeInTheDocument();
  });
});
