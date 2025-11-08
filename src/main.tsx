import { register } from '@public-ui/components';
import '@public-ui/components/assets/codicons/codicon.css';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { DEFAULT } from '@public-ui/theme-default';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Register KoliBri components and theme
register(DEFAULT, defineCustomElements)
	.then(() => {
		createRoot(document.getElementById('root')!).render(
			<StrictMode>
				<App />
			</StrictMode>,
		);
	})
	.catch(console.error);
