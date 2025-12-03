#!/usr/bin/env groovy

/**
 * OpenAPI Nexus Upload
 *
 * Lädt die validierte OpenAPI-Datei in ein Nexus Raw Repository hoch.
 * Unterstützt automatisches Retry bei Netzwerkfehlern.
 *
 * @param config Map mit folgenden Parametern:
 *   - file: Pfad zur lokalen Datei (default: 'openapi.yml')
 *   - apiName: Name der API (pflicht)
 *   - apiVersion: Version der API (pflicht)
 *   - nexusUrl: Nexus URL (pflicht)
 *   - repository: Nexus Repository Name (default: 'raw-hosted')
 *   - credentialsId: Jenkins Credentials ID (default: 'nexus-credentials')
 *
 * @return String mit der vollständigen Artefakt-URL
 */
def call(Map config = [:]) {
    def file = config.file ?: 'openapi.yml'
    def apiName = config.apiName
    def apiVersion = config.apiVersion
    def nexusUrl = config.nexusUrl
    def repository = config.repository ?: 'raw-hosted'
    def credentialsId = config.credentialsId ?: 'nexus-credentials'

    // Validierung
    if (!apiName) {
        error "apiName ist erforderlich für openapiUploadNexus"
    }
    if (!apiVersion) {
        error "apiVersion ist erforderlich für openapiUploadNexus"
    }
    if (!nexusUrl) {
        error "nexusUrl ist erforderlich für openapiUploadNexus"
    }

    // Artefakt-Pfad mit aussagekräftigem Dateinamen
    def filename = "${apiName}-${apiVersion}.yml"
    def artifactPath = "${apiName}/${apiVersion}/${filename}"
    def uploadUrl = "${nexusUrl}/repository/${repository}/${artifactPath}"

    echo "Starte Upload nach Nexus: ${uploadUrl}"

    withCredentials([usernamePassword(
        credentialsId: credentialsId,
        usernameVariable: 'NEXUS_USER',
        passwordVariable: 'NEXUS_PASS'
    )]) {
        def httpStatus = sh(
            script: """
                curl --silent --fail --show-error \\
                     --retry 3 --retry-delay 5 \\
                     -u "\${NEXUS_USER}:\${NEXUS_PASS}" \\
                     --upload-file '${file}' \\
                     '${uploadUrl}' \\
                     -w '%{http_code}' \\
                     -o /dev/null
            """,
            returnStdout: true
        ).trim()

        if (httpStatus.toInteger() >= 400) {
            error "Nexus-Upload fehlgeschlagen (HTTP ${httpStatus})"
        }

        echo "✓ Upload erfolgreich: ${uploadUrl}"
    }

    return uploadUrl
}
