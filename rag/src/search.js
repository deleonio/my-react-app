#!/usr/bin/env node

import { OllamaLanceRAG } from './rag.js';

/**
 * Kommandozeilen-Suche in der Wissensbasis
 */
async function main() {
	const query = process.argv.slice(2).join(' ');

	if (!query) {
		console.log('═══════════════════════════════════════════════════════════');
		console.log('  🔍 Markdown RAG System - Suche');
		console.log('═══════════════════════════════════════════════════════════\n');
		console.log('  Verwendung: npm run search "<Suchbegriff>"\n');
		console.log('  Beispiele:');
		console.log('    npm run search "Button Komponente Problem"');
		console.log('    npm run search "Accessibility Fehler"');
		console.log('    npm run search "Performance Verbesserung"\n');
		process.exit(0);
	}

	const rag = new OllamaLanceRAG({
		dbPath: './lancedb',
		model: 'mxbai-embed-large',
		tableName: 'kolibri_docs',
	});

	// Ollama prüfen
	const ollamaOk = await rag.checkOllama();
	if (!ollamaOk) {
		process.exit(1);
	}

	await rag.initialize();

	console.log('\n═══════════════════════════════════════════════════════════');
	console.log(`  🔍 Suche: "${query}"`);
	console.log('═══════════════════════════════════════════════════════════\n');

	const results = await rag.search(query, 5);

	if (results.length === 0) {
		console.log('  Keine Ergebnisse gefunden.');
		console.log('  Führe zuerst "npm run index" aus, um die Wissensbasis zu erstellen.\n');
		return;
	}

	results.forEach((result, index) => {
		const similarity = (result.similarity * 100).toFixed(1);

		console.log(`  ${index + 1}. 🎯 Relevanz: ${similarity}%`);
		console.log(`     📂 ${result.directory}/${result.fileName}`);
		console.log(`     📑 Chunk ${result.chunkIndex + 1}/${result.totalChunks}`);
		console.log('');

		// Text formatiert anzeigen (max 300 Zeichen)
		const displayText = result.text.length > 300 ? result.text.substring(0, 300) + '...' : result.text;

		console.log('     ┌─────────────────────────────────────────────────────');
		displayText
			.split('\n')
			.slice(0, 8)
			.forEach((line) => {
				console.log(`     │ ${line}`);
			});
		console.log('     └─────────────────────────────────────────────────────\n');
	});
}

main().catch((error) => {
	console.error('\n❌ Fehler:', error.message);
	process.exit(1);
});
