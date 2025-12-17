# KoliBri Formular Beispiel

Dieses Projekt demonstriert die Integration von **KoliBri Web Components** in eine React-Anwendung mit einem barrierefreien Kontaktformular.

## 🎯 Was wurde implementiert?

### 1. KoliBri Installation

- `@public-ui/components` (v3.0.7)
- `@public-ui/react-v19` (v3.0.7)
- `@public-ui/theme-default` (v3.0.7)

### 2. Komponenten

#### KoliBriForm.tsx

Eine vollständig funktionsfähige Kontaktformular-Komponente mit:

- **KoliBri Input-Komponenten**:
  - `KolInputText` für Name und E-Mail
  - Barrierefreie Labels und Platzhalter
  - Built-in Validierung mit `_required` Property

- **KoliBri Button-Komponenten**:
  - Submit-Button zum Absenden
  - Reset-Button (mit `_variant="secondary"`)

- **State Management**:
  - Formularformular-Tracking mit React Hooks
  - Live-Anzeige der eingegebenen Daten
  - Erfolgsmeldung nach dem Absenden

- **Textarea**:
  - Für Nachrichten (native HTML textarea, kann auch durch KoliBri ersetzt werden)
  - Mit Styling und Focus-Effekten

#### KoliBriForm.css

Moderne Styling mit:

- Gradient-Hintergrund
- Responsive Design
- Animation für Erfolgsmeldungen
- Accessibly optimierte Abstände und Farben

### 3. App.tsx Updates

- KoliBri-Registrierung: `register([], DEFAULT)`
- Theme-Import: `@public-ui/theme-default`
- Header und Footer für bessere UX
- Vollständige App-Integration

### 4. App.css Umgestaltung

- Header mit Farbverlauf
- Flexible Layout-Struktur
- Mobile-responsive Design
- Footer mit Copyright

## 🚀 Verwendete KoliBri-Komponenten

Aus der KoliBri-Dokumentation (mit `#mcp_kolibri-mcp_fetch`):

**KolForm** - Wrapper für Formulare

```jsx
<KolForm onSubmit={handleSubmit}>{/* Formularinhalte */}</KolForm>
```

**KolInputText** - Text/Email Input

```jsx
<KolInputText id="email" _label="E-Mail" _type="email" _required={true} value={formData.email} onChange={handleChange} />
```

**KolButton** - Buttons mit Varianten

```jsx
<KolButton _label="Absenden" _type="submit" />
<KolButton _label="Zurücksetzen" _variant="secondary" />
```

## 📁 Projektstruktur

```bash
src/
├── App.tsx                  # Hauptkomponente mit KoliBri Setup
├── App.css                  # Globale App-Styling
├── components/
│   ├── KoliBriForm.tsx      # Formularkomponente
│   └── KoliBriForm.css      # Formular-Styling
├── index.css                # Globale CSS
└── main.tsx                 # React Entry Point
```

## 🔧 Installation & Entwicklung

```bash
# Abhängigkeiten installieren
pnpm install

# Entwicklungsserver starten
npm run dev
# oder
pnpm dev

# App öffnet sich auf http://localhost:5173/
```

## ✨ Features

✅ **Barrierefreiheit**: KoliBri ist vollständig WCAG 2.1 konform  
✅ **TypeScript**: Vollständige Type-Safety  
✅ **React 19**: Mit den neuesten React-Features  
✅ **Responsive**: Funktioniert auf Desktop, Tablet und Mobile  
✅ **State Management**: React Hooks für Formularhandling  
✅ **Validierung**: Eingebaute KoliBri-Validierung

## 📚 Weitere Ressourcen

- [KoliBri Dokumentation](https://public-ui.github.io/de/)
- [KoliBri Komponenten Samples](https://public-ui.github.io/de/docs/components/)
- [Web Accessibility (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

## 🎨 Customization

Sie können das Formular einfach anpassen:

1. **Weitere Felder hinzufügen**: Neue `KolInputText` oder andere KoliBri-Komponenten hinzufügen
2. **Farben ändern**: `KoliBriForm.css` anpassen
3. **Validierung erweitern**: FormData State und Validierungslogik anpassen
4. **API Integration**: `handleSubmit` mit Backend-API verbinden

## 📝 Lizenz

Dieses Projekt verwendet KoliBri, das unter der EUPL lizenziert ist.
