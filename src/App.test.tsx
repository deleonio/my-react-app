import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
	it('should render the heading', () => {
		render(<App />);

		expect(screen.getByRole('heading', { name: /Willkommen zu KoliBri/i })).toBeInTheDocument();
	});

	it('should render the form title', () => {
		render(<App />);

		const headings = screen.getAllByRole('heading', { name: /KoliBri Kontaktformular/i });
		expect(headings.length).toBeGreaterThan(0);
		expect(headings[0]).toBeInTheDocument();
	});
});
