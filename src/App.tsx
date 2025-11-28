import '@public-ui/components';
import '@public-ui/theme-default';
import { useEffect } from 'react';
import './App.css';
import { KoliBriForm } from './components/KoliBriForm';

function App() {
	useEffect(() => {
		// KoliBri wird automatisch durch die Importe initialisiert
		console.log('KoliBri initialized');
	}, []);

	return (
		<>
			<header className="app-header">
				<h1>🎨 Willkommen zu KoliBri</h1>
				<p>Ein barrierefreies Web Component Formular</p>
			</header>
			<main>
				<KoliBriForm />
			</main>
			<footer className="app-footer">
				<p>Gebaut mit KoliBri - Accessible Web Components</p>
			</footer>
		</>
	);
}

export default App;
