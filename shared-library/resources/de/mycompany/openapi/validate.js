const fs = require('fs');
const yaml = require('js-yaml');
const SwaggerParser = require('@apidevtools/swagger-parser');

const filePath = process.argv[2] || 'openapi.yml';
const strict = process.argv.includes('--strict');

async function validate() {
    console.log('=== YAML-Validierung ===');

    // 1. Prüfen ob Datei existiert
    if (!fs.existsSync(filePath)) {
        console.error('FEHLER: Datei nicht gefunden:', filePath);
        process.exit(1);
    }

    // 2. YAML-Syntax validieren
    let content;
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        content = yaml.load(fileContent);
        console.log('✓ YAML-Syntax ist valide');
    } catch (e) {
        console.error('✗ YAML-Syntax-Fehler:', e.message);
        process.exit(1);
    }

    // 3. OpenAPI-Struktur validieren
    console.log('\n=== OpenAPI-Validierung ===');
    try {
        const api = await SwaggerParser.validate(filePath);
        console.log('✓ OpenAPI-Spezifikation ist valide');
        console.log('  - Title:', api.info.title);
        console.log('  - Version:', api.info.version);
        console.log('  - OpenAPI-Version:', api.openapi || api.swagger);

        // 4. Strict-Mode Validierungen
        if (strict) {
            console.log('\n=== Strict-Mode Prüfungen ===');

            // Prüfe auf deprecated Operationen
            let hasDeprecated = false;
            if (api.paths) {
                for (const [path, pathItem] of Object.entries(api.paths)) {
                    for (const [method, operation] of Object.entries(pathItem)) {
                        if (typeof operation === 'object' && operation.deprecated) {
                            console.warn(`⚠ Deprecated Operation gefunden: ${method.toUpperCase()} ${path}`);
                            hasDeprecated = true;
                        }
                    }
                }
            }

            // Prüfe auf servers-Definition
            if (!api.servers || api.servers.length === 0) {
                console.warn('⚠ Keine servers-Definition gefunden');
            }

            // Prüfe auf Contact-Info
            if (!api.info.contact || !api.info.contact.email) {
                console.warn('⚠ Keine Contact-Email in info.contact definiert');
            }

            // Prüfe auf Description
            if (!api.info.description) {
                console.warn('⚠ Keine API-Beschreibung (info.description) vorhanden');
            }

            if (hasDeprecated) {
                console.log('\n✗ Strict-Mode: Deprecated Operationen sind nicht erlaubt');
                process.exit(2);
            }

            console.log('✓ Strict-Mode Prüfungen bestanden');
        }

    } catch (e) {
        console.error('✗ OpenAPI-Validierungsfehler:', e.message);
        process.exit(1);
    }

    console.log('\n=== Validierung erfolgreich abgeschlossen ===');
}

validate().catch(err => {
    console.error('Unerwarteter Fehler:', err);
    process.exit(1);
});
