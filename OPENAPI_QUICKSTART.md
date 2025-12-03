# 🚀 OpenAPI Integration Quickstart

Schnellstart-Anleitung für die OS-unabhängige OpenAPI-Integration in dein React-Projekt.

## 📋 Voraussetzungen

- Node.js 18 oder höher
- Zugriff auf Nexus Repository (optional: mit Authentifizierung)
- OpenAPI-Spezifikationen im Nexus veröffentlicht (via Jenkins Shared Library)

## ⚡ Schnellstart

### 1. Konfiguration einrichten

```bash
# Unix/macOS/Linux
cp .openapi.config.example.json .openapi.config.json

# Windows (PowerShell)
Copy-Item .openapi.config.example.json .openapi.config.json
```

Bearbeite `.openapi.config.json` und passe die Werte an:

```json
{
  "nexusUrl": "https://dein-nexus.example.com",
  "repository": "raw-hosted",
  "outputDir": "src/api/specs",
  "apis": [
    {
      "name": "user-management-api",
      "version": "1.0.0",
      "filename": "user-api.yml"
    }
  ]
}
```

### 2. OpenAPI-Specs herunterladen

```bash
npm run download:openapi
```

### 3. (Optional) Mit Authentifizierung

```bash
# Unix/macOS/Linux
export NEXUS_USERNAME="dein-username"
export NEXUS_PASSWORD="dein-password"
npm run download:openapi

# Windows (PowerShell)
$env:NEXUS_USERNAME="dein-username"
$env:NEXUS_PASSWORD="dein-password"
npm run download:openapi
```

### 4. Build mit automatischem Download

```bash
npm run build
```

Die Specs werden automatisch vor dem Build heruntergeladen (via `prebuild` Hook).

## 📁 Dateien

| Datei | Beschreibung | Git |
|-------|--------------|-----|
| `scripts/download-openapi.js` | Download-Script | ✅ Committen |
| `.openapi.config.example.json` | Beispiel-Konfiguration | ✅ Committen |
| `.openapi.config.json` | Deine Konfiguration | ❌ Nicht committen |
| `src/api/specs/*.yml` | Heruntergeladene Specs | ❌ Nicht committen |

## 🔗 Zusammenhang mit Shared Library

1. **Jenkins Shared Library** (`shared-library/`) veröffentlicht OpenAPI-Specs nach Nexus
2. **Download-Script** (`scripts/download-openapi.js`) lädt sie in dein React-Projekt
3. **Build-Process** nutzt die Specs zur Code-Generierung oder Validierung

### Workflow-Übersicht

```
┌─────────────────────┐
│   Git Repository    │
│   (openapi.yml)     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Jenkins Pipeline   │
│  (Shared Library)   │
│  - Validate         │
│  - Upload to Nexus  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Nexus Repository   │
│  raw-hosted/        │
│  api-name/version/  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  React Project      │
│  npm run            │
│  download:openapi   │
└─────────────────────┘
```

## 📚 Vollständige Dokumentation

Für detaillierte Informationen siehe:

- **[OPENAPI_DOWNLOAD.md](docs/OPENAPI_DOWNLOAD.md)** - Vollständige Anleitung mit CI/CD, Troubleshooting, etc.
- **[shared-library/README.md](shared-library/README.md)** - Jenkins Shared Library Dokumentation

## 🛠️ NPM Scripts

| Script | Beschreibung |
|--------|--------------|
| `npm run download:openapi` | Lädt OpenAPI-Specs aus Nexus |
| `npm run build` | Build mit automatischem Download (via `prebuild`) |
| `npm run dev` | Development-Server (ohne Auto-Download) |

## ❓ Troubleshooting

### Fehler: "Konfigurationsdatei nicht gefunden"

```bash
cp .openapi.config.example.json .openapi.config.json
```

### Fehler: "HTTP 401 Unauthorized"

Setze Credentials als Umgebungsvariablen (siehe oben).

### Fehler: "HTTP 404 Not Found"

Prüfe:
1. Nexus-URL korrekt?
2. API-Name und Version richtig geschrieben?
3. API in Nexus veröffentlicht?

Teste URL manuell:
```
https://nexus.example.com/repository/raw-hosted/api-name/1.0.0/api-name-1.0.0.yml
```

## 🎯 Best Practices

✅ **DO**
- Verwende spezifische Versionen (`1.0.0`)
- Nutze Umgebungsvariablen für Credentials
- Committe `.openapi.config.example.json`

❌ **DON'T**
- Committe niemals `.openapi.config.json` (enthält sensible URLs)
- Committe niemals heruntergeladene Specs (`src/api/specs/*.yml`)
- Hardcode niemals Credentials

## 💡 Nächste Schritte

1. **Code-Generierung**: Generiere TypeScript-Typen aus OpenAPI
   ```bash
   npm install --save-dev @openapitools/openapi-generator-cli
   ```

2. **Validierung**: Validiere API-Responses gegen die Spec

3. **Mock-Server**: Nutze die Spec für lokales Mocking

4. **CI/CD**: Integriere in deine Build-Pipeline (siehe [OPENAPI_DOWNLOAD.md](docs/OPENAPI_DOWNLOAD.md))
