#!/usr/bin/env groovy

/**
 * OpenAPI Sparse Checkout
 *
 * Checkt nur die benötigte OpenAPI-Datei aus dem Repository aus
 * mittels Git Sparse Checkout für optimale Performance.
 *
 * @param config Map mit folgenden Parametern:
 *   - repoUrl: Git Repository URL (pflicht)
 *   - branch: Git Branch (default: 'main')
 *   - credentialsId: Jenkins Credentials ID (default: 'git-credentials')
 *   - filePath: Pfad zur Datei im Repo (default: 'openapi.yml')
 */
def call(Map config = [:]) {
    def repoUrl = config.repoUrl
    def branch = config.branch ?: 'main'
    def credentialsId = config.credentialsId ?: 'git-credentials'
    def filePath = config.filePath ?: 'openapi.yml'

    if (!repoUrl) {
        error "repoUrl ist erforderlich für openapiCheckout"
    }

    echo "Starte Sparse Checkout: ${filePath} aus ${repoUrl} (Branch: ${branch})"

    // Workspace bereinigen vor Checkout
    deleteDir()

    checkout([
        $class: 'GitSCM',
        branches: [[name: "*/${branch}"]],
        extensions: [
            [$class: 'SparseCheckoutPaths', sparseCheckoutPaths: [
                [$class: 'SparseCheckoutPath', path: filePath]
            ]],
            [$class: 'CloneOption', depth: 1, shallow: true, noTags: true],
            [$class: 'CleanBeforeCheckout']
        ],
        userRemoteConfigs: [[
            url: repoUrl,
            credentialsId: credentialsId
        ]]
    ])

    if (!fileExists(filePath)) {
        error "${filePath} wurde im Repository nicht gefunden"
    }

    echo "✓ Datei ${filePath} erfolgreich ausgecheckt"
}
