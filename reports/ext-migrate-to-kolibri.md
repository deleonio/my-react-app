Klare Antwort: **"Convert to KoliBri"** – der automatische Accessibility-Migrator.

## Warum gerade dieses Feature?

### Der Markt-Kontext

```
┌─────────────────────────────────────────────────────────────┐
│                    BFSG Deadline: Juni 2025                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Millionen Websites    →    Müssen barrierefrei werden    │
│                                                             │
│   Entwickler denken:                                        │
│   "Scheiße, wie mache ich meine <button> accessible?"       │
│                                                             │
│   KoliBri Extension:                                        │
│   "Rechtsklick → Convert to KoliBri → Fertig."             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Vergleich der Features nach Impact

| Feature                | Einzigartigkeit        | Problem gelöst | Virales Potenzial | Aufwand |
| ---------------------- | ---------------------- | -------------- | ----------------- | ------- |
| Autocomplete           | ❌ Gibt's überall      | Komfort        | Niedrig           | Niedrig |
| Snippets               | ❌ Gibt's überall      | Komfort        | Niedrig           | Niedrig |
| A11y Linting           | ⚠️ axe-core existiert  | Fehler finden  | Mittel            | Mittel  |
| Live Preview           | ⚠️ Storybook existiert | Visualisierung | Niedrig           | Hoch    |
| **Convert to KoliBri** | ✅ **Einzigartig**     | **Compliance** | **Sehr hoch**     | Mittel  |
| WCAG Reference         | ⚠️ Docs existieren     | Wissen         | Niedrig           | Niedrig |

---

## Das "Convert to KoliBri" Plugin im Detail

### Was es macht

```tsx
// VORHER: Irgendein HTML/React Code
<div className="form-group">
  <label>Email</label>
  <input
    type="email"
    className="form-control"
    placeholder="Enter email"
    onChange={handleChange}
  />
  <span className="error">{error}</span>
</div>

<button className="btn btn-primary" onClick={handleSubmit}>
  <i className="fa fa-send"></i>
  Absenden
</button>

// ─────────────────────────────────────────────────────
// 🔄 Rechtsklick → "Convert to KoliBri"
// ─────────────────────────────────────────────────────

// NACHHER: Barrierefrei, BITV-konform
<KolInputText
  _label="Email"
  _type="email"
  _hint="Enter email"
  _error={error}
  _on={{ onChange: handleChange }}
/>

<KolButton
  _label="Absenden"
  _icon="fa-send"
  _variant="primary"
  _on={{ onClick: handleSubmit }}
/>
```

### Die User Story

```
Entwickler bei einer Bank:
─────────────────────────
1. Chef sagt: "BFSG kommt, alles muss barrierefrei sein bis Juni"
2. Entwickler googelt: "react accessibility library"
3. Findet KoliBri Extension
4. Installiert sie
5. Öffnet bestehendes Projekt (50.000 Zeilen Code)
6. Cmd+Shift+P → "KoliBri: Scan Project for Convertible Components"

┌─────────────────────────────────────────────────────────────┐
│ 🔍 KoliBri Scan Results                                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Found 847 components that can be converted:                 │
│                                                             │
│ ├─ <button>           234 instances  →  <kol-button>       │
│ ├─ <input>            189 instances  →  <kol-input-*>      │
│ ├─ <select>            67 instances  →  <kol-select>       │
│ ├─ <a>                312 instances  →  <kol-link>         │
│ ├─ <table>             23 instances  →  <kol-table>        │
│ └─ Custom components   22 instances  →  Manual review      │
│                                                             │
│ Estimated time saved: ~340 hours                            │
│ Estimated compliance: 94% WCAG 2.1 AA after conversion      │
│                                                             │
│ [🔄 Convert All]  [📋 Export Report]  [⚙️ Configure]        │
│                                                             │
└─────────────────────────────────────────────────────────────┘

7. Klickt "Convert All"
8. Extension erstellt PR mit allen Änderungen
9. Review, merge, fertig
10. Erzählt allen Kollegen davon
```

---

## Warum das viral gehen könnte

### 1. **Pain Point ist real und dringend**

```
Google Trends für "WCAG compliance" / "website accessibility":

                                                    ╱╲
                                              ╱╲  ╱  ╲
                                          ╱╲  ╱  ╲╱    ╲
                                    ╱╲  ╱  ╲╱          ╲
─────────────────────────────────╱──╲╱                   ╲
2020        2021        2022        2023        2024   2025
                                                    ▲
                                              BFSG Deadline
```

### 2. **"Vorher/Nachher" Content ist teilbar**

```
Tweet/LinkedIn Post:

"Ich habe gerade 500 Components in 10 Minuten
barrierefrei gemacht.

Vorher: 23 WCAG-Fehler pro Seite
Nachher: 0

Wie? @KoliBri_UI VS Code Extension.

Rechtsklick → Convert → Fertig.

🧵 Thread wie es funktioniert:"

[Screenshot vorher/nachher]

→ 50K Impressions
→ 2000 Extension Downloads
→ Repeat
```

### 3. **Messbarer ROI**

```
┌─────────────────────────────────────────────────────────────┐
│ 📊 KoliBri Conversion Report                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Project: online-banking-frontend                            │
│ Converted: 847 components                                   │
│ Time: 12 minutes (+ 2h manual review)                       │
│                                                             │
│ WCAG Compliance:                                            │
│ ├─ Before:  34% (187 errors, 89 warnings)                  │
│ └─ After:   97% (3 errors, 12 warnings)                    │
│                                                             │
│ Estimated manual effort saved: 340 hours                    │
│ At €85/hour: €28,900 saved                                  │
│                                                             │
│ [📤 Share Report]  [🎉 Tweet This]                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Technische Machbarkeit

### Pattern Matching Engine

```typescript
// Einfache Patterns die erkannt werden können:

const conversionPatterns = [
	{
		// Standard HTML Button
		match: /<button([^>]*)>([^<]*)<\/button>/,
		analyze: (attrs, content) => ({
			component: 'kol-button',
			props: {
				_label: content.trim(),
				_variant: extractVariant(attrs.class),
				_disabled: attrs.disabled !== undefined,
				_on: extractEventHandlers(attrs),
			},
		}),
	},
	{
		// Input mit Label (verschiedene Patterns)
		match: /<label[^>]*>([^<]*)<\/label>\s*<input([^>]*)>/,
		analyze: (label, inputAttrs) => ({
			component: `kol-input-${inputAttrs.type || 'text'}`,
			props: {
				_label: label.trim(),
				_type: inputAttrs.type,
				_placeholder: inputAttrs.placeholder,
				_required: inputAttrs.required !== undefined,
			},
		}),
	},
	{
		// MUI Button → KoliBri
		match: /<Button([^>]*)>([^<]*)<\/Button>/,
		analyze: (attrs, content) => ({
			component: 'KolButton',
			props: {
				_label: content.trim(),
				_variant: mapMuiVariant(attrs.variant),
				_on: extractEventHandlers(attrs),
			},
		}),
	},
	// ... weitere Patterns
];
```

### Komplexere Fälle mit AST-Parsing

```typescript
// Für React/JSX: Babel AST Parser
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';

function analyzeComponent(code: string) {
	const ast = parser.parse(code, {
		sourceType: 'module',
		plugins: ['jsx', 'typescript'],
	});

	const conversions: Conversion[] = [];

	traverse(ast, {
		JSXElement(path) {
			const tagName = path.node.openingElement.name;

			if (tagName === 'button' || tagName === 'Button') {
				conversions.push({
					type: 'button',
					location: path.node.loc,
					original: path.toString(),
					suggestion: convertToKolButton(path.node),
					confidence: calculateConfidence(path.node),
				});
			}
		},
	});

	return conversions;
}
```

### Confidence Scoring

```typescript
interface ConversionSuggestion {
  original: string;
  converted: string;
  confidence: 'high' | 'medium' | 'low';
  warnings: string[];
  manualReviewNeeded: boolean;
}

// High Confidence: Automatisch konvertieren
// ─────────────────────────────────────────
<button onClick={fn}>Text</button>
→ <KolButton _label="Text" _on={{ onClick: fn }} />
→ Confidence: HIGH (100% sicher)

// Medium Confidence: Konvertieren mit Warnung
// ───────────────────────────────────────────
<button onClick={fn} className="custom-style">
  <Icon /> Text
</button>
→ <KolButton _label="Text" _icon="?" _on={{ onClick: fn }} />
→ Confidence: MEDIUM (Icon muss manuell gemappt werden)

// Low Confidence: Nur Vorschlag, manuell prüfen
// ─────────────────────────────────────────────
<button onClick={fn}>
  <div className="complex-content">
    <span>Text</span>
    <Badge count={5} />
  </div>
</button>
→ Confidence: LOW (Komplexer Inhalt, manuell prüfen)
```

---

## Competitive Moat (Wettbewerbsvorteil)

```
Warum kann das niemand kopieren?
────────────────────────────────

1. KoliBri ist die EINZIGE Lib mit:
  ✓ Garantierter BITV 2.0 Compliance
  ✓ Web Components (framework-agnostic)
  ✓ Behörden-Backing (ITZBund)

2. Eine "Convert to MUI" Extension wäre sinnlos:
  ✗ MUI ist nicht automatisch accessible
  ✗ Entwickler müssten trotzdem ARIA manuell hinzufügen

3. Die Conversion-Patterns sind KoliBri-spezifisch:
  ✓ Jede Komponente hat definierte A11y-Garantien
  ✓ Die Extension kann versprechen: "Nach Conversion = Compliant"
```

---

## Go-to-Market Strategie

### Phase 1: MVP (4-6 Wochen)

```
Scope:
├─ Convert: <button> → <kol-button>
├─ Convert: <input> → <kol-input-*>
├─ Convert: <a> → <kol-link>
└─ Convert: <select> → <kol-select>

Das sind ~80% aller Accessibility-Probleme.
```

### Phase 2: Framework-spezifisch (2-3 Monate)

```
Scope:
├─ MUI Button → KoliBri
├─ Ant Design Button → KoliBri
├─ Chakra Button → KoliBri
└─ Bootstrap Komponenten → KoliBri
```

### Phase 3: Full Project Migration (6 Monate)

```
Scope:
├─ Ganzes Projekt scannen
├─ Migration Plan erstellen
├─ Automatische PRs generieren
└─ Compliance Report generieren
```

---

## Zusammenfassung

| Kriterium             | Convert to KoliBri     | Andere Features          |
| --------------------- | ---------------------- | ------------------------ |
| Löst echtes Problem   | ✅ BFSG Deadline       | ⚠️ Nice-to-have          |
| Einzigartig           | ✅ Niemand sonst       | ❌ Existiert schon       |
| Messbar               | ✅ "X Stunden gespart" | ❌ Schwer zu messen      |
| Teilbar               | ✅ Vorher/Nachher      | ❌ Langweilig            |
| Einstiegshürde senken | ✅ Massiv              | ⚠️ Nur für neue Projekte |
| Enterprise-Appeal     | ✅ ROI nachweisbar     | ❌ Schwer zu verkaufen   |

**Das "Convert to KoliBri" Plugin ist kein Feature – es ist ein Produkt.**

Soll ich einen funktionierenden Prototyp für den Conversion-Algorithmus bauen?
