# OpenAPI Jenkins Shared Library

Eine optimierte Jenkins Shared Library für die Validierung und Veröffentlichung von OpenAPI-Spezifikationen in Nexus.

## Features

- **Sparse Git Checkout** - Lädt nur die benötigte OpenAPI-Datei für optimale Performance
- **Node.js-basierte Validierung** - YAML-Syntax und OpenAPI-Struktur-Prüfung
- **Strict-Mode** - Optionale erweiterte Validierung (deprecated Operations, Metadaten)
- **Nexus Upload** - Versionierter Upload in Raw Repositories
- **Retry-Logik** - Automatische Wiederholungsversuche bei Netzwerkfehlern
- **Reproduzierbare Builds** - Gepinnte Dependencies in `package.json`

## Verzeichnisstruktur

```
shared-library/
├── vars/
│   ├── openapiPublish.groovy       # Haupt-Pipeline
│   ├── openapiCheckout.groovy      # Git Sparse Checkout
│   ├── openapiValidate.groovy      # YAML/OpenAPI Validierung
│   └── openapiUploadNexus.groovy   # Nexus Upload
└── resources/
    └── de/
        └── mycompany/
            └── openapi/
                ├── package.json    # Node.js Dependencies
                └── validate.js     # Validierungsskript
```

## Installation

### 1. Shared Library in Jenkins einrichten

Gehe zu **Manage Jenkins → System → Global Pipeline Libraries** und füge hinzu:

| Feld | Wert |
|------|------|
| **Name** | `openapi-shared-library` |
| **Default version** | `main` |
| **Retrieval method** | Modern SCM → Git |
| **Project Repository** | URL deines Library-Repos |

### 2. Credentials in Jenkins anlegen

Erstelle folgende Credentials in Jenkins:

- `git-credentials` - Username/Password oder SSH für Git
- `nexus-credentials` - Username/Password für Nexus

## Verwendung

### Variante 1: Komplette Pipeline mit Parametern

```groovy
@Library('openapi-shared-library') _

openapiPublish(
    apiName: 'user-management-api',
    gitRepoUrl: 'https://github.com/myorg/my-api.git',
    gitBranch: 'main',
    nexusUrl: 'https://nexus.example.com',
    nodeImage: 'node:20-alpine',
    strict: true
)
```

### Variante 2: Mit Jenkins Pipeline-Parametern

```groovy
@Library('openapi-shared-library') _

properties([
    parameters([
        string(name: 'API_NAME', description: 'API-Name in Kebab-Case'),
        string(name: 'GIT_REPO_URL', description: 'Git Repository URL'),
        string(name: 'GIT_BRANCH', defaultValue: 'main', description: 'Git Branch'),
        string(name: 'NEXUS_URL', defaultValue: 'https://nexus.example.com'),
        booleanParam(name: 'STRICT', defaultValue: false, description: 'Strict-Mode aktivieren')
    ])
])

openapiPublish()
```

### Variante 3: Einzelne Steps verwenden

```groovy
@Library('openapi-shared-library') _

node {
    stage('Checkout') {
        openapiCheckout(
            repoUrl: 'https://github.com/myorg/my-api.git',
            branch: 'main',
            filePath: 'openapi.yml'
        )
    }

    stage('Validate') {
        openapiValidate(
            file: 'openapi.yml',
            nodeImage: 'node:20-alpine',
            strict: true
        )
    }

    stage('Upload') {
        openapiUploadNexus(
            file: 'openapi.yml',
            apiName: 'my-api',
            apiVersion: '1.0.0',
            nexusUrl: 'https://nexus.example.com',
            repository: 'raw-hosted'
        )
    }
}
```

## Parameter-Referenz

### openapiPublish

| Parameter | Typ | Default | Beschreibung |
|-----------|-----|---------|--------------|
| `apiName` | String | (pflicht) | API-Name in kebab-case (z.B. `user-management-api`) |
| `gitRepoUrl` | String | (pflicht) | Git Repository URL |
| `gitBranch` | String | `'main'` | Git Branch |
| `gitCredentialsId` | String | `'git-credentials'` | Jenkins Credentials ID für Git |
| `nexusUrl` | String | `'https://nexus.example.com'` | Nexus Server URL |
| `nexusRepository` | String | `'raw-hosted'` | Nexus Repository Name |
| `nexusCredentialsId` | String | `'nexus-credentials'` | Jenkins Credentials ID für Nexus |
| `nodeImage` | String | `'node:20-alpine'` | Docker Image für Node.js |
| `openapiFile` | String | `'openapi.yml'` | Pfad zur OpenAPI-Datei im Repo |
| `strict` | Boolean | `false` | Strict-Mode für erweiterte Validierung |

**Rückgabewert:** Map mit `apiName`, `apiVersion`, `artifactUrl`

### openapiCheckout

| Parameter | Typ | Default | Beschreibung |
|-----------|-----|---------|--------------|
| `repoUrl` | String | (pflicht) | Git Repository URL |
| `branch` | String | `'main'` | Git Branch |
| `credentialsId` | String | `'git-credentials'` | Jenkins Credentials ID |
| `filePath` | String | `'openapi.yml'` | Pfad zur Datei im Repository |

### openapiValidate

| Parameter | Typ | Default | Beschreibung |
|-----------|-----|---------|--------------|
| `file` | String | `'openapi.yml'` | Pfad zur lokalen OpenAPI-Datei |
| `nodeImage` | String | `'node:20-alpine'` | Docker Image für Node.js |
| `strict` | Boolean | `false` | Strict-Mode aktivieren |

**Strict-Mode prüft:**
- Keine deprecated Operations
- `servers`-Definition vorhanden
- Contact-Email in `info.contact` definiert
- API-Beschreibung in `info.description` vorhanden

### openapiUploadNexus

| Parameter | Typ | Default | Beschreibung |
|-----------|-----|---------|--------------|
| `file` | String | `'openapi.yml'` | Pfad zur lokalen Datei |
| `apiName` | String | (pflicht) | API-Name |
| `apiVersion` | String | (pflicht) | API-Version |
| `nexusUrl` | String | (pflicht) | Nexus Server URL |
| `repository` | String | `'raw-hosted'` | Nexus Repository Name |
| `credentialsId` | String | `'nexus-credentials'` | Jenkins Credentials ID |

**Rückgabewert:** String mit der Artefakt-URL

## Optimierungen

Diese Library implementiert folgende Optimierungen:

### 1. Reproduzierbare Builds
- Gepinnte Versionen in `package.json` (keine `^` oder `~`)
- Verwendung von `npm ci` wenn möglich

### 2. Performance
- Git Sparse Checkout (lädt nur benötigte Datei)
- Shallow Clone (Tiefe 1, keine Tags)
- Docker-Container-Wiederverwendung

### 3. Robustheit
- Retry-Logik für Git und Nexus (3 Versuche)
- curl mit `--retry` für Nexus-Upload
- Explizite Fehlerbehandlung mit sprechenden Fehlermeldungen

### 4. Validierung
- YAML-Syntax-Prüfung
- OpenAPI-Struktur-Validierung
- Optionaler Strict-Mode für Best Practices

## Weitere Optimierungsmöglichkeiten

### Eigenes Docker-Image für schnellere Builds

Erstelle ein eigenes Image mit vorinstallierten Dependencies:

```dockerfile
FROM node:20-alpine
WORKDIR /workspace
COPY package.json package-lock.json ./
RUN npm ci --production
COPY validate.js ./
```

Dann in `openapiValidate.groovy`:

```groovy
def nodeImage = config.nodeImage ?: 'mycompany/openapi-validator:latest'
```

### Integration mit Spectral für erweiterte Linting

Ergänze in `package.json`:

```json
"dependencies": {
  "js-yaml": "4.1.0",
  "@apidevtools/swagger-parser": "10.1.0",
  "@stoplight/spectral-cli": "6.11.0"
}
```

## Troubleshooting

### "Konnte keine Version aus info.version extrahieren"

Stelle sicher, dass deine OpenAPI-Datei eine gültige Version enthält:

```yaml
openapi: 3.0.0
info:
  title: My API
  version: 1.0.0  # Diese Zeile ist erforderlich
```

### "Nexus-Upload fehlgeschlagen (HTTP 401)"

Überprüfe die Nexus-Credentials:
- Korrekte Credentials ID in Jenkins
- Benutzer hat Upload-Rechte für das Repository

### "YAML-Syntax-Fehler"

Validiere deine YAML-Datei lokal:

```bash
npm install js-yaml
node -e "console.log(require('js-yaml').load(require('fs').readFileSync('openapi.yml', 'utf8')))"
```

## Lizenz

Intern verwendete Library - keine externe Lizenz.

## Kontakt

Bei Fragen wende dich an das DevOps-Team.
