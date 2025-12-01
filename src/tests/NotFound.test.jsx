
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound' // default import, correct
import { test, expect } from 'vitest'
import '@testing-library/jest-dom'
// Not Found Page Tests
  test('renders 404 message', () => 
    {
    render(
        <BrowserRouter>

            <NotFound />
        </BrowserRouter>
    )   ;

       expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
});                                                                                                                                             
// Test for Back to Home link href

test('Back to Home link has correct href', () =>
     {
    render(
        <BrowserRouter>
            <NotFound />
        </BrowserRouter>
    );  
    const backLink = screen.getByText('Back to Home');
    expect(backLink.getAttribute('href')).toBe('/');
}
);