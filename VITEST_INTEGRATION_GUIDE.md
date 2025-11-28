# Vitest in React + KoliBri v3 integrieren

Eine vollständige Anleitung zur Einrichtung von Vitest als Test-Framework für ein React-Projekt mit KoliBri v3 Web Components.

## 📋 Voraussetzungen

- Node.js 18+ installiert
- Ein bestehendes React-Projekt (z.B. mit Vite erstellt)
- pnpm als Package Manager (optional, aber empfohlen)

## 🚀 Schritt 1: Dependencies installieren

### 1.1 Test-Framework installieren

```bash
pnpm add -D vitest jsdom
```

Oder mit npm:

```bash
npm install --save-dev vitest jsdom
```

### 1.2 Testing Library installieren

```bash
pnpm add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### 1.3 KoliBri installieren (falls noch nicht vorhanden)

```bash
pnpm add @public-ui/components @public-ui/react-v19 @public-ui/theme-default
```

## ⚙️ Schritt 2: Konfiguration

### 2.1 vitest.config.ts erstellen

Erstelle eine neue Datei `vitest.config.ts` im Root-Verzeichnis des Projekts:

```typescript
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{ts,tsx}'],
		setupFiles: './src/setupTests.ts',
		exclude: ['tests/**'],
	},
});
```

**Wichtige Optionen:**

- `environment: 'jsdom'` - Simuliert einen Browser für Tests
- `include` - Pattern für Test-Dateien
- `setupFiles` - Datei für globale Test-Setup
- `exclude` - Dateien, die ignoriert werden sollen

### 2.2 setupTests.ts erstellen

Erstelle `src/setupTests.ts`:

```typescript
import '@testing-library/jest-dom/vitest';
```

Dies stellt Testing Library Matcher zur Verfügung (z.B. `toBeInTheDocument()`).

### 2.3 package.json aktualisieren

Füge Test-Scripts zu `package.json` hinzu:

```json
{
	"scripts": {
		"dev": "vite",
		"build": "tsc -b && vite build",
		"preview": "vite preview",
		"test": "vitest",
		"test:ui": "vitest --ui",
		"test:coverage": "vitest --coverage"
	}
}
```

## 🧪 Schritt 3: Erstes Test-File schreiben

### 3.1 App.test.tsx erstellen

Erstelle `src/App.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
	it('should render the main heading', () => {
		render(<App />);

		expect(screen.getByRole('heading', { name: /willkommen/i })).toBeInTheDocument();
	});

	it('should render the footer', () => {
		render(<App />);

		expect(screen.getByRole('contentinfo')).toBeInTheDocument();
	});
});
```

### 3.2 App.tsx KoliBri-kompatibel machen

```typescript
import '@public-ui/components';
import '@public-ui/theme-default';
import { useEffect } from 'react';
import './App.css';

function App() {
	useEffect(() => {
		// KoliBri wird automatisch durch die Importe initialisiert
		console.log('KoliBri initialized');
	}, []);

	return (
		<>
			<header>
				<h1>Willkommen zu KoliBri</h1>
			</header>
			<main>
				{/* Dein Inhalt hier */}
			</main>
			<footer>
				<p>© 2025 My App</p>
			</footer>
		</>
	);
}

export default App;
```

## 🧩 Schritt 4: KoliBri Komponenten testen

### 4.1 Beispiel: Form-Komponente testen

Datei: `src/components/KoliBriForm.test.tsx`

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { KoliBriForm } from './KoliBriForm';

describe('KoliBriForm', () => {
	it('should render form inputs', () => {
		render(<KoliBriForm />);

		// KoliBri Komponenten haben Web Component Tags
		expect(screen.getByDisplayValue('', { selector: 'kol-input-text' })).toBeInTheDocument();
	});

	it('should submit form with data', async () => {
		const user = userEvent.setup();
		render(<KoliBriForm />);

		// Finde die Submit-Button
		const submitButton = screen.getByRole('button', { name: /absenden/i });
		expect(submitButton).toBeInTheDocument();

		// Klick auf Submit
		await user.click(submitButton);
	});

	it('should display success message after submission', async () => {
		const user = userEvent.setup();
		render(<KoliBriForm />);

		const submitButton = screen.getByRole('button', { name: /absenden/i });
		await user.click(submitButton);

		// Warte auf Success-Nachricht
		expect(await screen.findByText(/erfolgreich/i)).toBeInTheDocument();
	});
});
```

### 4.2 KoliBri Input mit State testen

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { KoliBriForm } from './KoliBriForm';

describe('KoliBriForm Input Handling', () => {
	it('should handle input changes', async () => {
		const user = userEvent.setup();
		render(<KoliBriForm />);

		// Finde das Name-Input-Feld
		const nameInput = screen.getByDisplayValue('', { selector: '#name' });

		// Tippe in das Input-Feld
		await user.type(nameInput, 'John Doe');

		// Verifiziere den Wert
		expect((nameInput as HTMLInputElement).value).toBe('John Doe');
	});

	it('should display entered data', async () => {
		const user = userEvent.setup();
		render(<KoliBriForm />);

		const inputs = screen.getAllByDisplayValue('', { selector: 'kol-input-text' });
		const nameInput = inputs[0];

		await user.type(nameInput, 'Jane Smith');

		// Verifiziere dass die Daten irgendwo angezeigt werden
		expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
	});
});
```

## 🛠️ Schritt 5: Häufige Probleme und Lösungen

### Problem 1: "Cannot find module '@public-ui/components'"

**Lösung:** Stelle sicher, dass die Importe in `App.tsx` vorhanden sind:

```typescript
import '@public-ui/components';
import '@public-ui/theme-default';
```

### Problem 2: "event.target is undefined"

**KoliBri Event Handler richtig typisieren:**

```typescript
// ❌ Falsch
const handleChange = (e: React.ChangeEvent) => {
	console.log(e.target.value);
};

// ✅ Richtig
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleChange = (e: any) => {
	const value = e.target?.value || '';
	setFormData((prev) => ({ ...prev, name: value }));
};
```

### Problem 3: "KoliBri Komponenten werden nicht gefunden"

**Lösung:** Importiere KoliBri vor den Komponenten:

```typescript
// App.tsx - am Anfang
import '@public-ui/components';
import '@public-ui/theme-default';

function App() {
	// ...
}
```

### Problem 4: "Test findet keine KoliBri Elemente"

**Lösung:** Nutze Web Component Selektoren:

```typescript
// ❌ Falsch - funktioniert nicht mit Web Components
screen.getByRole('textbox');

// ✅ Richtig - nutze querySelectorAll oder testid
screen.getByTestId('name-input');

// Oder in der Komponente:
<kol-input-text data-testid="name-input" />
```

## 📊 Schritt 6: Coverage-Reports

### 6.1 Coverage installieren

```bash
pnpm add -D @vitest/coverage-v8
```

### 6.2 vitest.config.ts aktualisieren

```typescript
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{ts,tsx}'],
		setupFiles: './src/setupTests.ts',
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			exclude: ['node_modules/', 'src/setupTests.ts'],
		},
	},
});
```

### 6.3 Coverage-Report generieren

```bash
npm run test:coverage
```

## 🎯 Best Practices

### 1. Test-Struktur

```typescript
describe('KoliBriForm', () => {
	// Arrange - Vorbereitung
	// Act - Aktion ausführen
	// Assert - Ergebnis überprüfen

	it('should do something', () => {
		// Arrange
		const { getByRole } = render(<KoliBriForm />);

		// Act
		fireEvent.click(getByRole('button'));

		// Assert
		expect(getByRole('heading')).toBeInTheDocument();
	});
});
```

### 2. Aussagekräftige Test-Namen

```typescript
// ❌ Schlecht
it('works', () => {});

// ✅ Gut
it('should submit the form with valid data and display success message', () => {});
```

### 3. Test-Isolation

```typescript
beforeEach(() => {
	// Setup vor jedem Test
	vi.clearAllMocks();
});

afterEach(() => {
	// Cleanup nach jedem Test
});
```

### 4. Mocking von KoliBri Events

```typescript
import { vi } from 'vitest';

it('should handle KoliBri custom events', () => {
	const handleChange = vi.fn();
	const { container } = render(
		<KoliBriForm onChange={handleChange} />
	);

	const input = container.querySelector('kol-input-text');
	input?.dispatchEvent(new Event('change'));

	expect(handleChange).toHaveBeenCalled();
});
```

## 📦 Komplette Dateistruktur

```
my-react-app/
├── src/
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── main.tsx
│   ├── setupTests.ts
│   ├── components/
│   │   ├── KoliBriForm.tsx
│   │   └── KoliBriForm.test.tsx
│   ├── App.css
│   └── index.css
├── vitest.config.ts
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 🚀 Schnellstart-Zusammenfassung

```bash
# 1. Dependencies installieren
pnpm add -D vitest jsdom @testing-library/react @testing-library/jest-dom

# 2. Konfiguration erstellen
# - vitest.config.ts
# - src/setupTests.ts

# 3. Scripts zu package.json hinzufügen
# - "test": "vitest"

# 4. Tests schreiben
# - src/App.test.tsx
# - src/components/**/*.test.tsx

# 5. Tests ausführen
pnpm test

# 6. Watch-Modus
pnpm test -- --watch

# 7. UI starten
pnpm test:ui
```

## 📚 Nützliche Ressourcen

- [Vitest Dokumentation](https://vitest.dev/)
- [Testing Library Docs](https://testing-library.com/)
- [React Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [KoliBri Dokumentation](https://public-ui.github.io/de/)
- [KoliBri React Integration](https://public-ui.github.io/de/docs/get-started/react/)

## ✅ Validierungschecklist

Vor dem Abschluss sicherstellen:

- [ ] Vitest ist installiert und konfiguriert
- [ ] `vitest.config.ts` ist vorhanden
- [ ] `setupTests.ts` ist eingerichtet
- [ ] Mindestens ein Test-File existiert und läuft
- [ ] Coverage-Reports generierbar
- [ ] KoliBri Komponenten werden in Tests erkannt
- [ ] Event Handler funktionieren
- [ ] Tests passen im CI/CD-Pipeline

---

**Viel Erfolg beim Testen! 🎉**
