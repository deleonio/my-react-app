# 🚀 Schnellstart: KoliBri Formular

## Was ist KoliBri?

KoliBri ist eine moderne Bibliothek von **barrierefreien Web Components**, die auf Stencil basiert. Sie bietet vorgefertigte, zugängliche UI-Komponenten, die in jeden Web-Framework integriert werden können.

## Was wurde hier implementiert?

Ein **responsives Kontaktformular** mit KoliBri-Komponenten in einer React 19-App, einschließlich:

- ✅ Barrierefreie Input-Felder (`KolInputText`)
- ✅ Styled Buttons (`KolButton`)
- ✅ State Management mit React Hooks
- ✅ Responsive Design
- ✅ Erfolgsmeldungen

## 🏃 Projekt starten

```bash
# Im my-react-app Verzeichnis:

# 1. Dev-Server starten
npm run dev

# 2. Im Browser öffnen: http://localhost:5173/
```

## 📂 Wichtige Dateien

| Datei                            | Beschreibung                    |
| -------------------------------- | ------------------------------- |
| `src/components/KoliBriForm.tsx` | Formular-Komponente mit KoliBri |
| `src/components/KoliBriForm.css` | Formular-Styling                |
| `src/App.tsx`                    | KoliBri Setup & Theme           |
| `package.json`                   | Abhängigkeiten (KoliBri v3.0.7) |

## 💡 Wie funktioniert es?

### 1. KoliBri registrieren (in App.tsx)

```jsx
import { register } from '@public-ui/components';
import { DEFAULT } from '@public-ui/theme-default';

// KoliBri mit Standard-Theme initialisieren
register([], DEFAULT);
```

### 2. Komponenten verwenden (in KoliBriForm.tsx)

```jsx
import { KolForm, KolInputText, KolButton } from '@public-ui/react-v19';

<KolForm onSubmit={handleSubmit}>
	<KolInputText id="name" _label="Name" _required={true} />
	<KolButton _label="Absenden" _type="submit" />
</KolForm>;
```

## 🎨 Die verwendeten KoliBri-Komponenten

### KolForm

Wrapper für Formulare, handhabt Submission und Validierung.

**Props:**

- `onSubmit` - Callback bei Form-Submission

### KolInputText

Text/Email Input mit Labeling und Validierung.

**Wichtige Props:**

- `_label` - Label-Text
- `_type` - Input-Typ ("text", "email", "number", etc.)
- `_required` - Erforderlich?
- `_placeholder` - Platzhalter-Text

### KolButton

Button mit verschiedenen Stilen und Typen.

**Wichtige Props:**

- `_label` - Button-Text
- `_type` - Button-Typ ("button", "submit", "reset")
- `_variant` - Styling-Variante ("primary", "secondary", etc.)

## 📝 Beispiel: Weiteres Feld hinzufügen

Möchten Sie ein neues Feld hinzufügen? Editieren Sie `src/components/KoliBriForm.tsx`:

```jsx
// 1. State erweitern
const [formData, setFormData] =
	useState <
	FormData >
	{
		name: '',
		email: '',
		phone: '', // Neu
		message: '',
	};

// 2. Input im Formular hinzufügen
<KolInputText id="phone" _label="Telefon" _type="tel" value={formData.phone} onChange={handleChange} _placeholder="+49 123 456789" />;
```

## 🔗 Nützliche Links

- 📚 [KoliBri Dokumentation](https://public-ui.github.io/de/)
- 🧩 [KoliBri Komponenten](https://public-ui.github.io/de/docs/components/)
- ♿ [Accessibility Standards (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- ⚛️ [React 19 Docs](https://react.dev)

## 🛠️ Weitere Commands

```bash
# Code formatieren
npm run format

# Linting
npm run lint

# Tests ausführen
npm run test

# Production Build
npm run build
```

## ❓ FAQ

**F: Kann ich KoliBri in anderen Frameworks nutzen?**
A: Ja! KoliBri unterstützt React, Angular, Vue, SolidJS und mehr.

**F: Sind KoliBri Komponenten barrierefreundlich?**
A: Ja, KoliBri ist WCAG 2.1 konform und wurde speziell für Barrierefreiheit entwickelt.

**F: Kann ich das Styling anpassen?**
A: Absolut! Bearbeiten Sie einfach `KoliBriForm.css` oder nutzen Sie CSS Custom Properties.

---

Happy Coding! 🎉
