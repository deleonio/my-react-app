# OpenAPI Download - OS-unabhängige Integration

Diese Anleitung zeigt, wie du OpenAPI-Spezifikationen aus Nexus in dein React-Projekt herunterladen kannst - vollständig OS-unabhängig (Windows, macOS, Linux).

## Inhaltsverzeichnis

1. [Schnellstart](#schnellstart)
2. [Konfiguration](#konfiguration)
3. [Verwendung](#verwendung)
4. [Authentifizierung](#authentifizierung)
5. [Integration in CI/CD](#integration-in-cicd)
6. [Erweiterte Nutzung](#erweiterte-nutzung)
7. [Troubleshooting](#troubleshooting)

## Schnellstart

### 1. Konfiguration erstellen

Kopiere `.openapi.config.example.json` zu `.openapi.config.json` und passe die Werte an:

```bash
# Unix/macOS/Linux
cp .openapi.config.example.json .openapi.config.json

# Windows (PowerShell)
Copy-Item .openapi.config.example.json .openapi.config.json

# Windows (CMD)
copy .openapi.config.example.json .openapi.config.json
```

### 2. OpenAPI-Specs herunterladen

```bash
npm run download:openapi
```

Die Dateien werden nach `src/api/specs/` heruntergeladen.

### 3. Automatischer Download beim Build

Beim Build werden die Specs automatisch heruntergeladen (via `prebuild` hook):

```bash
npm run build
```

## Konfiguration

Die Datei `.openapi.config.json` steuert, welche APIs heruntergeladen werden:

```json
{
  "nexusUrl": "https://nexus.example.com",
  "repository": "raw-hosted",
  "outputDir": "src/api/specs",
  "apis": [
    {
      "name": "user-management-api",
      "version": "1.0.0",
      "filename": "user-api.yml"
    },
    {
      "name": "product-catalog-api",
      "version": "2.3.1",
      "filename": "product-api.yml"
    }
  ]
}
```

### Konfigurationsoptionen

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `nexusUrl` | String | Basis-URL deines Nexus-Servers |
| `repository` | String | Name des Nexus Raw Repository |
| `outputDir` | String | Zielverzeichnis relativ zum Projektroot |
| `apis` | Array | Liste der herunterzuladenden APIs |
| `apis[].name` | String | API-Name (muss mit Jenkins Pipeline übereinstimmen) |
| `apis[].version` | String | API-Version |
| `apis[].filename` | String | Lokaler Dateiname (optional, default: `{name}.yml`) |

### URL-Format

Die OpenAPI-Dateien werden von folgender URL geladen:

```
{nexusUrl}/repository/{repository}/{name}/{version}/{name}-{version}.yml
```

Beispiel:
```
https://nexus.example.com/repository/raw-hosted/user-management-api/1.0.0/user-management-api-1.0.0.yml
```

## Verwendung

### Manueller Download

```bash
# NPM
npm run download:openapi

# PNPM
pnpm download:openapi

# Yarn
yarn download:openapi
```

### Direkter Aufruf

```bash
node scripts/download-openapi.js
```

### Automatischer Download

Der Download erfolgt automatisch vor jedem Build durch den `prebuild` Hook in `package.json`:

```json
{
  "scripts": {
    "prebuild": "npm run download:openapi",
    "build": "tsc -b && vite build"
  }
}
```

## Authentifizierung

### Mit Umgebungsvariablen

Setze die Credentials als Umgebungsvariablen:

```bash
# Unix/macOS/Linux
export NEXUS_USERNAME="dein-username"
export NEXUS_PASSWORD="dein-password"
npm run download:openapi

# Windows (PowerShell)
$env:NEXUS_USERNAME="dein-username"
$env:NEXUS_PASSWORD="dein-password"
npm run download:openapi

# Windows (CMD)
set NEXUS_USERNAME=dein-username
set NEXUS_PASSWORD=dein-password
npm run download:openapi
```

### Mit .env-Datei (optional)

Wenn du ein Tool wie `dotenv` verwendest:

1. Installiere `dotenv`:
   ```bash
   npm install --save-dev dotenv
   ```

2. Erstelle `.env`:
   ```env
   NEXUS_USERNAME=dein-username
   NEXUS_PASSWORD=dein-password
   ```

3. Erweitere das Script (erste Zeile in `download-openapi.js`):
   ```javascript
   import 'dotenv/config';
   ```

### Ohne Authentifizierung

Wenn dein Nexus öffentlich zugänglich ist, funktioniert das Script ohne Credentials.

## Integration in CI/CD

### GitHub Actions

```yaml
name: Build

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Download OpenAPI Specs
        env:
          NEXUS_USERNAME: ${{ secrets.NEXUS_USERNAME }}
          NEXUS_PASSWORD: ${{ secrets.NEXUS_PASSWORD }}
        run: npm run download:openapi

      - name: Build
        run: npm run build
```

### GitLab CI

```yaml
build:
  image: node:20
  script:
    - npm ci
    - npm run download:openapi
    - npm run build
  variables:
    NEXUS_USERNAME: $NEXUS_USERNAME
    NEXUS_PASSWORD: $NEXUS_PASSWORD
```

### Jenkins

```groovy
pipeline {
    agent any

    environment {
        NEXUS_CREDS = credentials('nexus-credentials')
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Download OpenAPI') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'nexus-credentials',
                    usernameVariable: 'NEXUS_USERNAME',
                    passwordVariable: 'NEXUS_PASSWORD'
                )]) {
                    sh 'npm run download:openapi'
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
```

## Erweiterte Nutzung

### Verschiedene Umgebungen

Erstelle umgebungsspezifische Konfigurationen:

```bash
.openapi.config.dev.json
.openapi.config.staging.json
.openapi.config.prod.json
```

Passe das Script an (in `download-openapi.js`):

```javascript
const ENV = process.env.NODE_ENV || 'development';
const CONFIG_FILE = path.join(
    process.cwd(),
    `.openapi.config.${ENV}.json`
);
```

Verwendung:

```bash
NODE_ENV=production npm run download:openapi
```

### Versionierung mit Package-Managern

Wenn du spezifische Versionen tracken willst:

```json
{
  "apis": [
    {
      "name": "user-management-api",
      "version": "latest",
      "filename": "user-api.yml"
    }
  ]
}
```

Erweitere das Script um `latest`-Unterstützung (Nexus REST API).

### Code-Generierung aus OpenAPI

Nach dem Download kannst du automatisch TypeScript-Typen generieren:

```bash
npm install --save-dev @openapitools/openapi-generator-cli
```

In `package.json`:

```json
{
  "scripts": {
    "download:openapi": "node scripts/download-openapi.js",
    "generate:api": "openapi-generator-cli generate -i src/api/specs/user-api.yml -g typescript-fetch -o src/api/generated",
    "prebuild": "npm run download:openapi && npm run generate:api"
  }
}
```

## Troubleshooting

### Fehler: "Konfigurationsdatei nicht gefunden"

**Problem:** `.openapi.config.json` existiert nicht.

**Lösung:**
```bash
cp .openapi.config.example.json .openapi.config.json
```

### Fehler: "HTTP 401 Unauthorized"

**Problem:** Authentifizierung fehlgeschlagen.

**Lösung:**
1. Prüfe Umgebungsvariablen:
   ```bash
   # Unix/macOS/Linux
   echo $NEXUS_USERNAME
   echo $NEXUS_PASSWORD

   # Windows (PowerShell)
   echo $env:NEXUS_USERNAME
   echo $env:NEXUS_PASSWORD
   ```

2. Credentials in Jenkins/CI prüfen

### Fehler: "HTTP 404 Not Found"

**Problem:** API-Datei existiert nicht in Nexus.

**Lösung:**
1. Prüfe URL manuell im Browser:
   ```
   {nexusUrl}/repository/{repository}/{name}/{version}/{name}-{version}.yml
   ```

2. Prüfe Schreibweise von `name` und `version`

3. Prüfe ob die API in Nexus veröffentlicht wurde (Jenkins Pipeline)

### Fehler: "ENOTFOUND" oder "ECONNREFUSED"

**Problem:** Netzwerkfehler oder falscher Nexus-URL.

**Lösung:**
1. Prüfe Nexus-URL:
   ```bash
   curl https://nexus.example.com
   ```

2. Prüfe Proxy-Einstellungen:
   ```bash
   npm config get proxy
   npm config get https-proxy
   ```

3. Prüfe Firewall-Regeln

### Spec-Dateien werden nicht gefunden im Build

**Problem:** TypeScript/Build kann die heruntergeladenen Dateien nicht finden.

**Lösung:**
1. Prüfe `outputDir` in `.openapi.config.json`

2. Stelle sicher, dass das Verzeichnis im `src`-Ordner liegt

3. Füge zu `tsconfig.json` hinzu:
   ```json
   {
     "compilerOptions": {
       "resolveJsonModule": true
     },
     "include": ["src/**/*", "src/api/specs/*.yml"]
   }
   ```

### Script funktioniert nicht unter Windows

**Problem:** Pfad-Separatoren oder Encoding-Probleme.

**Lösung:** Das Script verwendet `path.join()`, was automatisch OS-spezifische Pfade erstellt. Wenn Probleme auftreten:

1. Prüfe, dass Node.js korrekt installiert ist:
   ```bash
   node --version
   ```

2. Verwende PowerShell statt CMD

3. Prüfe Encoding der Konfigurationsdatei (sollte UTF-8 sein)

## Best Practices

### 1. Versionierung

- ✅ Verwende spezifische Versionen (`1.0.0`)
- ❌ Vermeide vage Versionen (`latest`, `*`)

### 2. Credentials

- ✅ Nutze Umgebungsvariablen oder CI-Secrets
- ❌ Hardcode niemals Credentials in Dateien

### 3. Caching

- ✅ Überlege, ob du Specs in CI/CD cachen willst
- ✅ Nutze den `prebuild` Hook für automatischen Download

### 4. Git

- ✅ Committe `.openapi.config.example.json`
- ❌ Committe niemals `.openapi.config.json` (enthält evtl. sensible URLs)
- ❌ Committe niemals heruntergeladene Specs

## Support

Bei Fragen oder Problemen:

1. Prüfe dieses Dokument
2. Prüfe die Nexus-URL im Browser
3. Kontaktiere das DevOps-Team
