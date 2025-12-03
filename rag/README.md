# 📚 Markdown RAG System

Ein lokales RAG (Retrieval-Augmented Generation) System für Markdown-Dateien, das **Ollama** für Embeddings und **LanceDB** als Vector Database verwendet.

## 🚀 Features

- ✅ **Komplett lokal** - keine Cloud-APIs, keine Kosten
- ✅ **Ollama Embeddings** - nutzt `mxbai-embed-large` Modell
- ✅ **LanceDB** - schnelle, persistente Vector Database
- ✅ **Markdown-Parser** - verarbeitet `.md` Dateien rekursiv
- ✅ **Frontmatter-Extraktion** - YAML-Metadaten werden berücksichtigt
- ✅ **Smart Chunking** - intelligente Textaufteilung mit Overlap

## 📋 Voraussetzungen

1. **Node.js 18+**
2. **Ollama** installiert und gestartet
3. **Embedding-Modell** heruntergeladen

### Ollama Setup

```bash
# Ollama installieren (macOS)
brew install ollama

# Ollama starten
ollama serve

# Embedding-Modell herunterladen
ollama pull mxbai-embed-large
```

## 🔧 Installation

```bash
cd rag
npm install
```

## 📖 Verwendung

### 1. Wissensbasis erstellen (Indexierung)

Indexiert alle Markdown-Dateien aus den `issues/` und `reports/` Ordnern:

```bash
npm run index
```

**Ausgabe:**

```text
📁 Verzeichnis: /path/to/issues
   42 Markdown-Dateien gefunden

   📄 issue-1.md... ✓ (3 chunks)
   📄 issue-2.md... ✓ (2 chunks)
   ...

✅ Indexierung abgeschlossen: 156 Chunks
```

### 2. Suche durchführen

```bash
npm run search "Button Komponente Problem"
npm run search "Accessibility ARIA"
npm run search "Performance Optimierung"
```

**Ausgabe:**

```text
🔍 Suche: "Button Komponente Problem"

  1. 🎯 Relevanz: 87.3%
     📂 issues/issue-42.md
     📑 Chunk 1/3

     ┌─────────────────────────────────────────────────────
     │ ## Button-Komponente zeigt Fehler
     │
     │ Die Button-Komponente wirft einen Fehler...
     └─────────────────────────────────────────────────────
```

### 3. Interaktive Suche

Startet eine interaktive Shell für mehrere Suchanfragen:

```bash
npm run interactive
```

**Befehle in der interaktiven Shell:**

- `<text>` - Sucht nach relevantem Inhalt
- `stats` - Zeigt Statistiken
- `help` - Zeigt Hilfe
- `exit` - Beendet das Programm

### 4. Statistiken anzeigen

```bash
npm run stats
```

## 🏗️ Projektstruktur

```text
rag/
├── package.json        # Projekt-Konfiguration
├── README.md           # Diese Dokumentation
├── lancedb/            # Vector Database (wird erstellt)
└── src/
    ├── rag.js          # Haupt-RAG-Klasse
    ├── index.js        # Indexierungs-Script
    ├── search.js       # Such-Script
    ├── interactive.js  # Interaktive Shell
    └── stats.js        # Statistik-Script
```

## ⚙️ Konfiguration

Die RAG-Klasse kann mit verschiedenen Optionen konfiguriert werden:

```javascript
const rag = new OllamaLanceRAG({
	dbPath: './lancedb', // Pfad zur LanceDB
	model: 'mxbai-embed-large', // Ollama Embedding-Modell
	tableName: 'kolibri_docs', // Name der Tabelle
	chunkSize: 1000, // Max. Chunk-Größe in Zeichen
	chunkOverlap: 100, // Overlap zwischen Chunks
	ollamaUrl: 'http://localhost:11434', // Ollama API URL
});
```

### Alternative Embedding-Modelle

```bash
# Andere verfügbare Modelle
ollama pull mxbai-embed-large      # Größer, präziser
ollama pull snowflake-arctic-embed # Gut für mehrsprachig
ollama pull all-minilm             # Kleiner, schneller
```

## 🔍 Programmatische Verwendung

```javascript
import { OllamaLanceRAG } from './src/rag.js';

async function example() {
	const rag = new OllamaLanceRAG();

	// Initialisieren
	await rag.initialize();

	// Verzeichnisse indexieren
	await rag.indexDirectories(['./issues', './reports']);

	// Suchen
	const results = await rag.search('Button Problem', 5);

	results.forEach((result) => {
		console.log(`${result.similarity * 100}% - ${result.fileName}`);
		console.log(result.text);
	});

	// Statistiken
	const stats = await rag.getStats();
	console.log(stats);
}
```

## 🐛 Fehlerbehebung

### Ollama nicht erreichbar

```bash
# Prüfen ob Ollama läuft
curl http://localhost:11434/api/tags

# Ollama starten
ollama serve
```

### Modell nicht gefunden

```bash
# Verfügbare Modelle anzeigen
ollama list

# Modell herunterladen
ollama pull mxbai-embed-large
```

### Keine Ergebnisse bei der Suche

- Führe zuerst `npm run index` aus
- Prüfe ob Markdown-Dateien in `issues/` oder `reports/` existieren
- Nutze `npm run stats` um die Wissensbasis zu überprüfen

## 📊 Wie funktioniert es?

1. **Einlesen**: Markdown-Dateien werden rekursiv gelesen
2. **Chunking**: Text wird in überlappende Abschnitte geteilt
3. **Embedding**: Ollama erstellt Vektoren für jeden Chunk
4. **Speichern**: Vektoren werden in LanceDB persistiert
5. **Suche**: Query wird vektorisiert und ähnliche Chunks gefunden
6. **Ranking**: Ergebnisse nach Cosinus-Ähnlichkeit sortiert

## 📝 Lizenz

MIT
