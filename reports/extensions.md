Das ist eine großartige Frage! Eine VS Code Extension könnte KoliBri massiv pushen. Lass mich skizzieren, was möglich wäre:

## KoliBri VS Code Extension – Feature-Konzept

### 1. **IntelliSense & Autocomplete**

```tsx
// Tippe: <kol-
// Extension zeigt sofort:

┌─────────────────────────────────────────────────────────┐
│ ⚡ KoliBri Components                                   │
├─────────────────────────────────────────────────────────┤
│ 🔘 kol-button          Accessible button component      │
│ 🔗 kol-link            Accessible link component        │
│ 📝 kol-input-text      Accessible text input            │
│ ☑️  kol-checkbox        Accessible checkbox              │
│ 📋 kol-select          Accessible select/dropdown       │
│ 🔔 kol-alert           Accessible alert/notification    │
│ ...                                                     │
└─────────────────────────────────────────────────────────┘
```

```tsx
// Nach Auswahl von kol-button:
<kol-button
  _label="|"     // ◄── Cursor hier, Pflichtfeld hervorgehoben
                 // Tooltip: "Required. The visible button text."

// Tippe: _vari
// Extension zeigt:

┌─────────────────────────────────────────────────────────┐
│ _variant                                                │
├─────────────────────────────────────────────────────────┤
│ "primary"   │ Main action button (default)             │
│ "secondary" │ Secondary action                         │
│ "danger"    │ Destructive action (delete, remove)      │
│ "ghost"     │ Minimal visual weight                    │
└─────────────────────────────────────────────────────────┘
```

---

### 2. **Inline-Dokumentation mit Accessibility-Hints**

```tsx
<kol-button _label="Speichern" _variant="primary">
//          ▲
//          │ Hover zeigt:
// ┌────────────────────────────────────────────────────────┐
// │ 📖 _label (required)                                   │
// │                                                        │
// │ The accessible name of the button. This text is:       │
// │ • Visible to all users                                 │
// │ • Announced by screen readers                          │
// │ • Used for voice control ("Click Speichern")           │
// │                                                        │
// │ ♿ WCAG: Ensures 1.1.1 Non-text Content                │
// │                                                        │
// │ 📚 Docs  |  🎨 Designer  |  📋 Copy import            │
// └────────────────────────────────────────────────────────┘
```

---

### 3. **Accessibility Linting in Echtzeit**

```tsx
// ❌ Problem: Icon-Button ohne Label
<kol-button _icon="fa-trash">
// ~~~~~~~~~~~~~~~~~~~~~~~~~~
// ⚠️ KoliBri A11y Warning
//
// Icon-only button without _label or _aria-label.
// Screen reader users won't know what this button does.
//
// Quick fixes:
// ├─ Add _label="Delete" _hide-label
// └─ Add _aria-label="Delete item"

// ✅ Nach Fix:
<kol-button _icon="fa-trash" _label="Löschen" _hide-label>
// ✓ Accessible: Label is announced but visually hidden
```

```tsx
// ❌ Kontrastwarnung (wenn Theme bekannt)
<kol-alert _type="info" _label="Hinweis">
// ⚠️ Potential contrast issue with current theme (ITZBund)
//
// Info alerts use #0066CC on #E8F4FD
// Contrast ratio: 4.2:1 (AA requires 4.5:1 for small text)
//
// Consider using _type="warning" or adjust theme
```

---

### 4. **Snippets mit Best Practices**

```tsx
// Tippe: kol-form-field + Tab
// Generiert:

<kol-input-text
  _label="$1"
  _id="$2"
  _required={$3:false}
  _error="$4"
  _hint="$5"
  _on={{ onChange: (e, value) => $6 }}
>
</kol-input-text>

// Mit Kommentaren:
// Tippe: kol-form-field-explained + Tab

{/*
  KoliBri Input Pattern
  ─────────────────────
  ✓ _label: Always visible, announces to screen readers
  ✓ _id: Links label to input (automatic in KoliBri)
  ✓ _error: Shows inline, announced on focus
  ✓ _hint: Additional help text
*/}
<kol-input-text
  _label="E-Mail-Adresse"
  _id="email"
  _type="email"
  _required
  _error={errors.email}
  _hint="Wir verwenden Ihre E-Mail nur für die Anmeldung"
  _on={{ onChange: handleEmailChange }}
/>
```

---

### 5. **Component Preview (Side Panel)**

```
┌─────────────────────────────────────────────────────────────────┐
│ 📝 editor.tsx                    │ 👁️ KoliBri Preview          │
├──────────────────────────────────┼──────────────────────────────┤
│                                  │                              │
│ <kol-button                      │  ┌──────────────────────┐   │
│   _label="Absenden"              │  │     Absenden         │   │
│   _variant="primary"             │  └──────────────────────┘   │
│   _icon="fa-paper-plane"         │                              │
│ />                               │  Theme: [ITZBund ▼]          │
│                                  │                              │
│                                  │  ───────────────────────     │
│                                  │  ♿ A11y Check: ✓ Passed     │
│                                  │                              │
│                                  │  • Focus visible: ✓          │
│                                  │  • Contrast: ✓ 7.2:1         │
│                                  │  • Touch target: ✓ 44x44px   │
│                                  │  • Screen reader: ✓          │
│                                  │                              │
└──────────────────────────────────┴──────────────────────────────┘
```

---

### 6. **Theme Switcher & Token Explorer**

```
┌─────────────────────────────────────────────────────────────────┐
│ 🎨 KoliBri Theme Explorer                               [×]    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Active Theme: ITZBund                                           │
│                                                                 │
│ ┌─────────┬─────────┬─────────┬─────────┬─────────┐            │
│ │ Default │ ITZBund │   BMF   │  EU EC  │ Custom  │            │
│ └─────────┴─────────┴─────────┴─────────┴─────────┘            │
│                                                                 │
│ Preview:                                                        │
│ ┌─────────────────────────────────────────────────────────┐    │
│ │  [Primary Button]  [Secondary]  [Ghost]  [Danger]       │    │
│ │                                                         │    │
│ │  ┌─ Alert ──────────────────────────────────────────┐  │    │
│ │  │ ℹ️ Dies ist eine Info-Meldung                     │  │    │
│ │  └──────────────────────────────────────────────────┘  │    │
│ │                                                         │    │
│ │  Email: [________________________] (Required)           │    │
│ └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│ Design Tokens:                                                  │
│ ├─ --kol-color-primary: #004B76                                │
│ ├─ --kol-color-primary-hover: #003557                          │
│ ├─ --kol-border-radius: 4px                                    │
│ └─ --kol-font-family: BundesSans, Arial, sans-serif            │
│                                                                 │
│ [📋 Copy Theme Config]  [🎨 Open Designer]  [📚 Docs]          │
└─────────────────────────────────────────────────────────────────┘
```

---

### 7. **Migration Assistant**

```
┌─────────────────────────────────────────────────────────────────┐
│ 🔄 KoliBri Migration Assistant                          [×]    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Detected: KoliBri v2.2.0 → v3.0.0 available                    │
│                                                                 │
│ Breaking Changes in your code:                                  │
│                                                                 │
│ ⚠️ 3 files affected                                             │
│                                                                 │
│ ┌─ LoginForm.tsx ───────────────────────────────────────────┐  │
│ │ Line 24: _icon-only renamed to _hide-label                │  │
│ │                                                           │  │
│ │ - <kol-button _icon="fa-x" _icon-only>                    │  │
│ │ + <kol-button _icon="fa-x" _hide-label _label="Close">    │  │
│ │                                                           │  │
│ │ [Fix automatically] [Show diff] [Ignore]                  │  │
│ └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│ ┌─ Header.tsx ──────────────────────────────────────────────┐  │
│ │ Line 8: _ariaLabel replaced with _aria-label              │  │
│ │ [Fix automatically] [Show diff] [Ignore]                  │  │
│ └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│ [🔧 Fix All Automatically]  [📋 Export Report]                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### 8. **WCAG Quick Reference Panel**

```
┌─────────────────────────────────────────────────────────────────┐
│ ♿ WCAG 2.1 Quick Reference                              [×]    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Current component: <kol-input-text>                             │
│                                                                 │
│ Relevant Success Criteria:                                      │
│                                                                 │
│ ✅ 1.3.1 Info and Relationships (A)                            │
│    └─ KoliBri: Automatic label association via _id              │
│                                                                 │
│ ✅ 1.3.5 Identify Input Purpose (AA)                           │
│    └─ Use _autocomplete="email" for email fields                │
│                                                                 │
│ ✅ 3.3.1 Error Identification (A)                              │
│    └─ KoliBri: _error prop announces to screen readers          │
│                                                                 │
│ ✅ 3.3.2 Labels or Instructions (A)                            │
│    └─ KoliBri: _label is required, _hint for extra help         │
│                                                                 │
│ ⚠️ 3.3.3 Error Suggestion (AA)                                  │
│    └─ Provide specific fix instructions in _error text          │
│                                                                 │
│ [📚 Full WCAG Docs]  [🔗 BITV 2.0 Mapping]                      │
└─────────────────────────────────────────────────────────────────┘
```

---

### 9. **Code Actions & Refactoring**

```tsx
// Rechtsklick auf HTML button:
<button onClick={submit} class="btn-primary">
  Speichern
</button>

// Kontextmenü:
┌─────────────────────────────────────────────────┐
│ 🔄 Convert to KoliBri                           │
│ ├─ Convert to <kol-button>                      │
│ └─ Convert entire file to KoliBri components   │
├─────────────────────────────────────────────────┤
│ ♿ Accessibility                                 │
│ ├─ Run axe-core on this component              │
│ └─ Check WCAG compliance                        │
└─────────────────────────────────────────────────┘

// Nach "Convert to <kol-button>":
<kol-button
  _label="Speichern"
  _variant="primary"
  _on={{ onClick: submit }}
/>
```

---

### 10. **Command Palette Integration**

```
Ctrl+Shift+P → "KoliBri"

┌─────────────────────────────────────────────────────────────────┐
│ > KoliBri                                                       │
├─────────────────────────────────────────────────────────────────┤
│ 🎨 KoliBri: Switch Theme                                        │
│ 📖 KoliBri: Open Component Documentation                        │
│ 🔍 KoliBri: Search Components                                   │
│ ♿ KoliBri: Run Accessibility Audit                              │
│ 🔄 KoliBri: Check for Updates                                   │
│ 🔧 KoliBri: Run Migration Assistant                             │
│ 📊 KoliBri: Show Bundle Size Impact                             │
│ 🎯 KoliBri: Insert Component Snippet                            │
│ 🌐 KoliBri: Open Designer (Browser)                             │
│ 📋 KoliBri: Copy Component Import                               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Technische Umsetzung

### Extension Package Structure

```
kolibri-vscode/
├── src/
│   ├── extension.ts           # Haupteinstieg
│   ├── providers/
│   │   ├── completionProvider.ts    # Autocomplete
│   │   ├── hoverProvider.ts         # Inline-Docs
│   │   ├── diagnosticsProvider.ts   # A11y Linting
│   │   └── codeActionProvider.ts    # Quick Fixes
│   ├── panels/
│   │   ├── previewPanel.ts          # Live Preview
│   │   ├── themeExplorer.ts         # Theme Switcher
│   │   └── migrationPanel.ts        # Migration Assistant
│   ├── data/
│   │   ├── components.json          # Component Metadata
│   │   ├── wcag-mapping.json        # WCAG Referenz
│   │   └── snippets.json            # Code Snippets
│   └── utils/
│       ├── a11yChecker.ts           # axe-core Integration
│       └── themeLoader.ts           # Theme Parsing
├── schemas/
│   └── kolibri.schema.json    # JSON Schema für Props
├── snippets/
│   └── kolibri.code-snippets
├── package.json
└── README.md
```

### Datenquelle: KoliBri Schema

```typescript
// Die Extension könnte direkt von @public-ui/schema lesen:
import { KOL_BUTTON } from '@public-ui/schema';

// Oder eine generierte JSON nutzen:
{
  "kol-button": {
    "description": "Accessible button component",
    "props": {
      "_label": {
        "type": "string",
        "required": true,
        "description": "The accessible name of the button",
        "wcag": ["1.1.1", "4.1.2"]
      },
      "_variant": {
        "type": "'primary' | 'secondary' | 'danger' | 'ghost'",
        "default": "'primary'",
        "description": "Visual style variant"
      }
    },
    "a11y": {
      "role": "button",
      "focusable": true,
      "keyboardInteraction": ["Enter", "Space"]
    }
  }
}
```

---

## Impact-Potential

| Feature             | Entwickler-Nutzen | Accessibility-Nutzen |
| ------------------- | ----------------- | -------------------- |
| Autocomplete        | ⭐⭐⭐⭐⭐        | ⭐⭐⭐               |
| A11y Linting        | ⭐⭐⭐⭐          | ⭐⭐⭐⭐⭐           |
| Live Preview        | ⭐⭐⭐⭐          | ⭐⭐⭐               |
| WCAG Reference      | ⭐⭐⭐            | ⭐⭐⭐⭐⭐           |
| Migration Assistant | ⭐⭐⭐⭐⭐        | ⭐⭐                 |
| Convert to KoliBri  | ⭐⭐⭐⭐⭐        | ⭐⭐⭐⭐⭐           |

---

## Vergleich mit existierenden Extensions

| Extension                         | Downloads | Features                              |
| --------------------------------- | --------- | ------------------------------------- |
| ES7 React Snippets                | 12M+      | Nur Snippets                          |
| Tailwind IntelliSense             | 9M+       | Autocomplete, Preview                 |
| MUI Snippets                      | 300K+     | Nur Snippets                          |
| **KoliBri Extension (Potenzial)** | ?         | Snippets + A11y + Preview + Migration |

**Der Unterschied:** Keine andere Extension bietet **integriertes Accessibility-Linting** mit konkreten WCAG-Referenzen.

---

Soll ich einen konkreten Teil davon als funktionierenden Prototyp skizzieren? Zum Beispiel die `completionProvider.ts` oder das JSON-Schema für die Komponenten?
