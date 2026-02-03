#!/usr/bin/env node

import { OllamaLanceRAG } from './rag.js';

/**
 * Zeigt Statistiken der Wissensbasis
 */
async function main() {
	console.log('═══════════════════════════════════════════════════════════');
	console.log('  📊 Markdown RAG System - Statistiken');
	console.log('═══════════════════════════════════════════════════════════\n');

	const rag = new OllamaLanceRAG({
		dbPath: './lancedb',
		model: 'mxbai-embed-large',
		tableName: 'kolibri_docs',
	});

	await rag.initialize();

	const stats = await rag.getStats();

	if (stats.error) {
		console.log('  ⚠️  Keine Wissensbasis gefunden.');
		console.log('  Führe zuerst "npm run index" aus, um die Wissensbasis zu erstellen.\n');
		process.exit(1);
	}

	console.log(`  📦 Gesamte Chunks:         ${stats.totalChunks}`);
	console.log(`  📄 Anzahl Dateien:         ${stats.totalFiles}`);
	console.log(`  📏 Durchschn. Chunk-Länge: ${stats.avgChunkLength} Zeichen`);
	console.log('');
	console.log('  📂 Chunks pro Verzeichnis:');

	Object.entries(stats.directories)
		.sort((a, b) => b[1] - a[1])
		.forEach(([dir, count]) => {
			const bar = '█'.repeat(Math.ceil(count / 5));
			console.log(`     ${dir.padEnd(20)} ${count.toString().padStart(4)} ${bar}`);
		});

	console.log('\n═══════════════════════════════════════════════════════════\n');
}

main().catch((error) => {
	console.error('\n❌ Fehler:', error.message);
	process.exit(1);
});
