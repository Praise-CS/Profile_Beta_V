import { render, screen } from '@testing-library/react';
import Home from '../Home';
// Home Page Tests
test('renders Home page main title', () => 
  {
    render(<Home />);
     expect(screen.getByText(/Welcome to My Portfolio/i)).toBeInTheDocument();
});
// Test for subtitle presence
   test('renders Home page subtitle', () => 
    {
  render(<Home />);
  expect(screen.getByText(/Hi there, my name is Praise Babalola/i)).toBeInTheDocument();
});
