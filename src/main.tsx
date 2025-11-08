import { register } from '@public-ui/components';
import '@public-ui/components/assets/codicons/codicon.css';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { DEFAULT } from '@public-ui/themes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// KoliBri registrieren und Theme laden
void register(DEFAULT, defineCustomElements)
	.then(() => {
		createRoot(document.getElementById('root')!).render(
			<StrictMode>
				<App />
			</StrictMode>,
		);
	})
	.catch((error) => {
		console.error('Fehler beim Registrieren von KoliBri:', error);
	});
