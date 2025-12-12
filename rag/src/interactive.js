#!/usr/bin/env node

import readline from 'readline';
import { OllamaLanceRAG } from './rag.js';

/**
 * Interaktive Suche in der Wissensbasis
 */
async function main() {
	console.log('═══════════════════════════════════════════════════════════');
	console.log('  🔍 Markdown RAG System - Interaktive Suche');
	console.log('═══════════════════════════════════════════════════════════\n');

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

	// Statistiken anzeigen
	const stats = await rag.getStats();
	if (stats.error) {
		console.log('  ⚠️  Keine Wissensbasis gefunden.');
		console.log('  Führe zuerst "npm run index" aus.\n');
		process.exit(1);
	}

	console.log(`  📊 Wissensbasis: ${stats.totalChunks} Chunks aus ${stats.totalFiles} Dateien`);
	console.log('  Tippe "exit" oder "quit" zum Beenden.\n');
	console.log('───────────────────────────────────────────────────────────\n');

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	const askQuestion = () => {
		rl.question('🔍 Suche: ', async (query) => {
			if (!query || query.toLowerCase() === 'exit' || query.toLowerCase() === 'quit') {
				console.log('\n👋 Auf Wiedersehen!\n');
				rl.close();
				process.exit(0);
			}

			if (query.toLowerCase() === 'stats') {
				const currentStats = await rag.getStats();
				console.log('\n📊 Aktuelle Statistiken:');
				console.log(`   Chunks: ${currentStats.totalChunks}`);
				console.log(`   Dateien: ${currentStats.totalFiles}`);
				Object.entries(currentStats.directories).forEach(([dir, count]) => {
					console.log(`   - ${dir}: ${count}`);
				});
				console.log('');
				askQuestion();
				return;
			}

			if (query.toLowerCase() === 'help') {
				console.log('\n📚 Verfügbare Befehle:');
				console.log('   stats  - Zeigt Statistiken der Wissensbasis');
				console.log('   help   - Zeigt diese Hilfe');
				console.log('   exit   - Beendet das Programm');
				console.log('   <text> - Sucht nach relevantem Inhalt\n');
				askQuestion();
				return;
			}

			console.log('');

			try {
				const results = await rag.search(query, 3);

				if (results.length === 0) {
					console.log('  Keine Ergebnisse gefunden.\n');
				} else {
					results.forEach((result, index) => {
						const similarity = (result.similarity * 100).toFixed(1);

						console.log(`  ${index + 1}. 🎯 ${similarity}% - ${result.directory}/${result.fileName}`);

						// Kurze Vorschau
						const preview = result.text.replace(/\n+/g, ' ').substring(0, 150);
						console.log(`     ${preview}...\n`);
					});
				}
			} catch (error) {
				console.log(`  ❌ Fehler: ${error.message}\n`);
			}

			console.log('───────────────────────────────────────────────────────────\n');
			askQuestion();
		});
	};

	askQuestion();
}

main().catch((error) => {
	console.error('\n❌ Fehler:', error.message);
	process.exit(1);
});
