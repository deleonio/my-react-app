#!/usr/bin/env groovy

/**
 * OpenAPI Validation
 *
 * Validiert YAML-Syntax und OpenAPI-Spezifikation mittels Node.js.
 * Nutzt package.json und validate.js aus den Library Resources.
 *
 * @param config Map mit folgenden Parametern:
 *   - file: Pfad zur OpenAPI-Datei (default: 'openapi.yml')
 *   - nodeImage: Docker Image für Node.js (default: 'node:20-alpine')
 *   - strict: Strict-Mode aktivieren (default: false)
 */
def call(Map config = [:]) {
    def file = config.file ?: 'openapi.yml'
    def nodeImage = config.nodeImage ?: 'node:20-alpine'
    def strict = config.strict ?: false

    echo "Starte Validierung von ${file} (Strict-Mode: ${strict})"

    docker.image(nodeImage).inside {
        // Ressourcen aus der Shared Library ins Workspace schreiben
        writeFile file: 'package.json', text: libraryResource('de/mycompany/openapi/package.json')
        writeFile file: 'validate.js', text: libraryResource('de/mycompany/openapi/validate.js')

        // Dependencies installieren (npm ci bevorzugt, fallback zu npm install)
        sh '''
            echo "Installiere Abhängigkeiten..."
            npm ci --silent --no-progress 2>/dev/null || npm install --silent --no-progress 2>/dev/null
        '''

        // Validierung ausführen
        def strictFlag = strict ? '--strict' : ''
        def exitCode = sh(
            script: "node validate.js '${file}' ${strictFlag}",
            returnStatus: true
        )

        if (exitCode == 1) {
            error "Validierung fehlgeschlagen: YAML-Syntax oder OpenAPI-Strukturfehler"
        } else if (exitCode == 2) {
            error "Strict-Mode Validierung fehlgeschlagen: Deprecated Operationen oder fehlende Metadaten"
        } else if (exitCode != 0) {
            error "Validierung fehlgeschlagen mit Exit-Code ${exitCode}"
        }
    }

    echo "✓ Validierung für ${file} erfolgreich"
}
