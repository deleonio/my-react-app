#!/usr/bin/env groovy

/**
 * OpenAPI Publish Pipeline
 *
 * Haupteinstiegspunkt für die OpenAPI-Publishing-Pipeline.
 * Koordiniert Checkout, Validierung und Upload nach Nexus.
 *
 * @param config Map mit folgenden optionalen Parametern:
 *   - apiName: Name der API in kebab-case (pflicht)
 *   - gitRepoUrl: Git Repository URL (pflicht)
 *   - gitBranch: Git Branch (default: 'main')
 *   - gitCredentialsId: Jenkins Credentials ID für Git (default: 'git-credentials')
 *   - nexusUrl: Nexus URL (default: 'https://nexus.example.com')
 *   - nexusRepository: Nexus Repository Name (default: 'raw-hosted')
 *   - nexusCredentialsId: Jenkins Credentials ID für Nexus (default: 'nexus-credentials')
 *   - nodeImage: Docker Image für Node.js (default: 'node:20-alpine')
 *   - openapiFile: Pfad zur OpenAPI-Datei (default: 'openapi.yml')
 *   - strict: Strict-Mode für Validierung (default: false)
 *
 * @return Map mit apiName, apiVersion und artifactUrl
 */
def call(Map config = [:]) {
    // Parameter aus config oder Pipeline-Parametern
    def apiName = config.apiName ?: params.API_NAME
    def gitRepoUrl = config.gitRepoUrl ?: params.GIT_REPO_URL
    def gitBranch = config.gitBranch ?: params.GIT_BRANCH ?: 'main'
    def gitCredentialsId = config.gitCredentialsId ?: params.GIT_CREDENTIALS_ID ?: 'git-credentials'
    def nexusUrl = config.nexusUrl ?: params.NEXUS_URL ?: 'https://nexus.example.com'
    def nexusRepository = config.nexusRepository ?: params.NEXUS_REPOSITORY ?: 'raw-hosted'
    def nexusCredentialsId = config.nexusCredentialsId ?: params.NEXUS_CREDENTIALS_ID ?: 'nexus-credentials'
    def nodeImage = config.nodeImage ?: params.NODE_IMAGE ?: 'node:20-alpine'
    def openapiFile = config.openapiFile ?: params.OPENAPI_FILE ?: 'openapi.yml'
    def strict = config.strict ?: params.STRICT ?: false

    // Validierung
    validateParameters(apiName, gitRepoUrl)

    def apiVersion = ''
    def artifactUrl = ''

    node {
        try {
            stage('OpenAPI auschecken') {
                retry(3) {
                    openapiCheckout(
                        repoUrl: gitRepoUrl,
                        branch: gitBranch,
                        credentialsId: gitCredentialsId,
                        filePath: openapiFile
                    )
                }
            }

            stage('Version auslesen') {
                apiVersion = extractVersion(openapiFile)
                echo "API: ${apiName}, Version: ${apiVersion}"
            }

            stage('YAML validieren') {
                openapiValidate(
                    file: openapiFile,
                    nodeImage: nodeImage,
                    strict: strict
                )
            }

            stage('Nach Nexus hochladen') {
                retry(3) {
                    artifactUrl = openapiUploadNexus(
                        file: openapiFile,
                        apiName: apiName,
                        apiVersion: apiVersion,
                        nexusUrl: nexusUrl,
                        repository: nexusRepository,
                        credentialsId: nexusCredentialsId
                    )
                }
            }

            stage('Zusammenfassung') {
                printSummary(apiName, apiVersion, artifactUrl)
            }

        } finally {
            // Cleanup / Logging auch bei Fehlern
            echo "Pipeline beendet. API=${apiName}, Version=${apiVersion ?: 'unbekannt'}, Artifact=${artifactUrl ?: 'kein Upload'}"
        }
    }

    return [
        apiName: apiName,
        apiVersion: apiVersion,
        artifactUrl: artifactUrl
    ]
}

/**
 * Validiert die Pflichtparameter
 */
private void validateParameters(String apiName, String gitRepoUrl) {
    if (!apiName?.trim()) {
        error "apiName darf nicht leer sein"
    }

    if (!apiName.matches('^[a-z0-9]+(-[a-z0-9]+)*$')) {
        error "apiName muss in Kebab-Case sein (z.B. my-api-name). Erhalten: '${apiName}'"
    }

    if (!gitRepoUrl?.trim()) {
        error "gitRepoUrl darf nicht leer sein"
    }
}

/**
 * Extrahiert die Version aus der OpenAPI-Datei mittels readYaml
 */
private String extractVersion(String openapiFile) {
    def data = readYaml file: openapiFile

    def version = data?.info?.version
    if (!version) {
        error "Konnte keine Version aus info.version in ${openapiFile} extrahieren"
    }

    return version.toString()
}

/**
 * Gibt eine formatierte Zusammenfassung aus
 */
private void printSummary(String apiName, String apiVersion, String artifactUrl) {
    echo """
    ╔═══════════════════════════════════════════════════════╗
    ║           Pipeline erfolgreich abgeschlossen          ║
    ╠═══════════════════════════════════════════════════════╣
    ║  API-Name:   ${apiName}
    ║  Version:    ${apiVersion}
    ╠═══════════════════════════════════════════════════════╣
    ║  Artefakt:
    ║  ${artifactUrl}
    ╚═══════════════════════════════════════════════════════╝
    """.stripIndent()
}
