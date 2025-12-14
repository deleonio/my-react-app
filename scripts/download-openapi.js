#!/usr/bin/env node

/**
 * OpenAPI Downloader
 *
 * OS-unabhängiges Script zum Herunterladen von OpenAPI-Spezifikationen aus Nexus.
 * Unterstützt Authentifizierung und mehrere API-Quellen.
 *
 * Verwendung:
 *   node scripts/download-openapi.js
 *   npm run download:openapi
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfiguration laden
const CONFIG_FILE = path.join(process.cwd(), '.openapi.config.json');
const DEFAULT_OUTPUT_DIR = path.join(process.cwd(), 'src', 'api', 'specs');

/**
 * Lädt die Konfiguration aus .openapi.config.json
 */
function loadConfig() {
    if (!fs.existsSync(CONFIG_FILE)) {
        console.error(`❌ Konfigurationsdatei nicht gefunden: ${CONFIG_FILE}`);
        console.log('Erstelle eine .openapi.config.json mit folgendem Inhalt:');
        console.log(JSON.stringify({
            nexusUrl: "https://nexus.example.com",
            repository: "raw-hosted",
            outputDir: "src/api/specs",
            apis: [
                {
                    name: "user-management-api",
                    version: "1.0.0",
                    filename: "user-api.yml"
                }
            ]
        }, null, 2));
        process.exit(1);
    }

    return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
}

/**
 * Erstellt das Ausgabeverzeichnis, falls es nicht existiert
 */
function ensureOutputDir(outputDir) {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log(`📁 Verzeichnis erstellt: ${outputDir}`);
    }
}

/**
 * Lädt Credentials aus Umgebungsvariablen
 */
function getCredentials() {
    const username = process.env.NEXUS_USERNAME;
    const password = process.env.NEXUS_PASSWORD;

    if (username && password) {
        return Buffer.from(`${username}:${password}`).toString('base64');
    }

    return null;
}

/**
 * Lädt eine Datei von einer URL herunter
 */
function downloadFile(url, outputPath, authHeader) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const options = {
            headers: {}
        };

        if (authHeader) {
            options.headers['Authorization'] = `Basic ${authHeader}`;
        }

        console.log(`📥 Lade herunter: ${url}`);

        const request = protocol.get(url, options, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                // Redirect folgen
                const redirectUrl = response.headers.location;
                console.log(`↪️  Redirect zu: ${redirectUrl}`);
                return downloadFile(redirectUrl, outputPath, authHeader)
                    .then(resolve)
                    .catch(reject);
            }

            if (response.statusCode !== 200) {
                reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
                return;
            }

            const fileStream = fs.createWriteStream(outputPath);
            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`✅ Gespeichert: ${outputPath}`);
                resolve();
            });

            fileStream.on('error', (err) => {
                fs.unlinkSync(outputPath);
                reject(err);
            });
        });

        request.on('error', reject);
        request.end();
    });
}

/**
 * Hauptfunktion
 */
async function main() {
    console.log('🚀 OpenAPI Downloader\n');

    // Konfiguration laden
    const config = loadConfig();
    const outputDir = path.join(process.cwd(), config.outputDir || DEFAULT_OUTPUT_DIR);
    const credentials = getCredentials();

    // Ausgabeverzeichnis erstellen
    ensureOutputDir(outputDir);

    // Credentials-Info
    if (credentials) {
        console.log('🔐 Authentifizierung: aktiviert (via NEXUS_USERNAME/NEXUS_PASSWORD)\n');
    } else {
        console.log('⚠️  Authentifizierung: keine Credentials gefunden\n');
    }

    // Alle APIs herunterladen
    const results = {
        success: [],
        failed: []
    };

    for (const api of config.apis) {
        const url = `${config.nexusUrl}/repository/${config.repository}/${api.name}/${api.version}/${api.name}-${api.version}.yml`;
        const outputPath = path.join(outputDir, api.filename || `${api.name}.yml`);

        try {
            await downloadFile(url, outputPath, credentials);
            results.success.push(api.name);
        } catch (error) {
            console.error(`❌ Fehler bei ${api.name}: ${error.message}`);
            results.failed.push({ name: api.name, error: error.message });
        }

        console.log(''); // Leerzeile zwischen Downloads
    }

    // Zusammenfassung
    console.log('═══════════════════════════════════════');
    console.log(`✅ Erfolgreich: ${results.success.length}`);
    console.log(`❌ Fehlgeschlagen: ${results.failed.length}`);
    console.log('═══════════════════════════════════════');

    if (results.failed.length > 0) {
        console.log('\n❌ Fehlgeschlagene Downloads:');
        results.failed.forEach(f => {
            console.log(`   - ${f.name}: ${f.error}`);
        });
        process.exit(1);
    }

    console.log('\n🎉 Alle OpenAPI-Spezifikationen erfolgreich heruntergeladen!');
}

// Script ausführen
main().catch(error => {
    console.error('❌ Unerwarteter Fehler:', error);
    process.exit(1);
});
