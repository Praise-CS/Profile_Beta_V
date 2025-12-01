import { render, screen } from '@testing-library/react';
import About from '../pages/About';
// About Page Tests
describe('About Page', () => {
  test('renders About page title', () => 
    {
    render(<About />);
    
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  });
    // Test to check if at least one skill is rendered
  test('renders at least one skill', () => 
    {

    render(<About />);
    expect(screen.getByText(/HTML/i)).toBeInTheDocument();
  
  });
});
