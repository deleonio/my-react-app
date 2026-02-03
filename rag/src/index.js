#!/usr/bin/env node

import path from 'path';
import { OllamaLanceRAG } from './rag.js';

/**
 * Hauptskript zum Indexieren der issues und reports Ordner
 */
async function main() {
	console.log('═══════════════════════════════════════════════════════════');
	console.log('  📚 Markdown RAG System - Indexierung');
	console.log('═══════════════════════════════════════════════════════════\n');

	// RAG-System initialisieren
	const rag = new OllamaLanceRAG({
		dbPath: './lancedb',
		model: 'mxbai-embed-large',
		tableName: 'kolibri_docs',
		chunkSize: 1000,
		chunkOverlap: 100,
	});

	// Ollama-Verfügbarkeit prüfen
	const ollamaOk = await rag.checkOllama();
	if (!ollamaOk) {
		console.log('\n❌ Bitte starte Ollama und lade das Embedding-Modell:');
		console.log('   1. ollama serve');
		console.log('   2. ollama pull mxbai-embed-large\n');
		process.exit(1);
	}

	// LanceDB initialisieren
	await rag.initialize();

	// Verzeichnisse zum Indexieren (relativ zum parent-Ordner)
	const parentDir = path.resolve('..');
	const directories = [path.join(parentDir, 'issues'), path.join(parentDir, 'reports')];

	console.log('\n📂 Zu indexierende Verzeichnisse:');
	directories.forEach((dir) => console.log(`   - ${dir}`));

	// Indexierung durchführen
	const chunkCount = await rag.indexDirectories(directories);

	if (chunkCount > 0) {
		// Statistiken anzeigen
		const stats = await rag.getStats();

		console.log('═══════════════════════════════════════════════════════════');
		console.log('  📊 Statistiken');
		console.log('═══════════════════════════════════════════════════════════');
		console.log(`  Gesamte Chunks:        ${stats.totalChunks}`);
		console.log(`  Anzahl Dateien:        ${stats.totalFiles}`);
		console.log(`  Durchschn. Chunk-Länge: ${stats.avgChunkLength} Zeichen`);
		console.log('\n  Pro Verzeichnis:');
		Object.entries(stats.directories).forEach(([dir, count]) => {
			console.log(`    - ${dir}: ${count} chunks`);
		});
		console.log('═══════════════════════════════════════════════════════════\n');
	}
}

main().catch((error) => {
	console.error('\n❌ Fehler:', error.message);
	process.exit(1);
});
