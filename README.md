
# Kolibri MCP Form Generator – React

This project demonstrates how to generate a complex form using Kolibri MCP and AI, and integrate it into a modern React app.

## Goal

- Use a prompt to let MCP/AI generate a complex form
- Use and customize the generated form with Kolibri components in React

## Schritt-für-Schritt: Formular mit MCP von 0 aufbauen

Die folgenden Schritte bauen klar aufeinander auf. Jede Phase enthält den exakten Prompt und die erwartete Änderung im Code.

### Schritt 1: Grundgerüst erzeugen

Prompt:

```text
#sym:kolibri-mcp schreibe ein komplexes formular mit kolibri komponenten
```

Ergebnis:

- React-Komponente mit `KolForm`, Feldern (Name, E-Mail, Passwort, Alter, Geschlecht, Interessen, Nachricht) und Buttons.
- Container mit `KolCard` und Überschrift via `KolHeading`.

### Schritt 2: Kolibri registrieren (Theme + Komponenten)

Prompt:

```text
#sym:kolibri-mcp registriere die komponenten und das default theme
```

Ergebnis (in `src/main.tsx`):

- `register(DEFAULT, defineCustomElements)` vor dem Rendern aufrufen.
- Imports aus `@public-ui/components`, `@public-ui/theme-default` und `@public-ui/components/dist/loader` ergänzen.

### Schritt 3: Komponente einbinden

Prompt:

```text
#sym:kolibri-mcp binde die formular-komponente in die app ein
```

Ergebnis (in `src/App.tsx`):

- Formular-Komponente importieren und im JSX rendern.

### Schritt 4: Felder und Labels anpassen (optional)

Prompt:

```text
#sym:kolibri-mcp passe felder, labels und validierung an
```

Ergebnis:

- Feldreihenfolge, Labels und Pflichtfelder nach Bedarf anpassen.

### Schritt 5: React Hook Form integrieren

Prompt:

```text
#sym:kolibri-mcp erweitere das beispiel um react hook form. dafür hat kolibri auch einen adapter
```

Ergebnis:

- Installation und Einsatz von `react-hook-form`.
- Steuerung der Kolibri-Felder über `Controller` und Validierungsregeln.

### Schritt 6: Englische Texte verwenden (optional)

Prompt:

```text
#sym:kolibri-mcp übersetze alle labels und hinweise ins englische
```

Ergebnis:

- Sämtliche sichtbare Texte und Hinweistexte auf Englisch.

## Example prompt

```text
#sym:kolibri-mcp write a complex form with kolibri components
```

## Beispiel-Prompt

```text
#sym:kolibri-mcp write a complex form with kolibri components
```

## Further links

- [Kolibri MCP Component Docs](https://public-ui-kolibri-mcp.vercel.app/mcp/)
- [Kolibri React Wrapper](https://www.npmjs.com/package/@public-ui/react-v19)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)

---

Enjoy generating and customizing complex forms with Kolibri MCP and React! 🎉
