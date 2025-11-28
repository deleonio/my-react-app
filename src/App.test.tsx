import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
        it('should render the heading', () => {
                render(<App />);

                expect(screen.getByRole('heading', { name: /vite \+ react/i })).toBeInTheDocument();
        });
});
