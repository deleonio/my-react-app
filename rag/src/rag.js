import * as lancedb from '@lancedb/lancedb';
import fs from 'fs';
import path from 'path';

/**
 * RAG System mit LanceDB und Ollama Embeddings
 */
export class OllamaLanceRAG {
	constructor(options = {}) {
		this.dbPath = options.dbPath || './lancedb';
		this.model = options.model || 'mxbai-embed-large';
		this.ollamaUrl = options.ollamaUrl || 'http://localhost:11434';
		this.tableName = options.tableName || 'documents';
		this.chunkSize = options.chunkSize || 1000;
		this.chunkOverlap = options.chunkOverlap || 100;

		this.db = null;
		this.table = null;
	}

	/**
	 * Initialisiert die LanceDB-Verbindung
	 */
	async initialize() {
		this.db = await lancedb.connect(this.dbPath);
		console.log(`✅ LanceDB verbunden: ${this.dbPath}`);

		// Prüfen ob Tabelle existiert
		const tables = await this.db.tableNames();
		if (tables.includes(this.tableName)) {
			this.table = await this.db.openTable(this.tableName);
			console.log(`📂 Existierende Tabelle geladen: ${this.tableName}`);
		}

		return this;
	}

	/**
	 * Prüft ob Ollama läuft und das Modell verfügbar ist
	 */
	async checkOllama() {
		try {
			const response = await fetch(`${this.ollamaUrl}/api/tags`);
			if (!response.ok) {
				throw new Error('Ollama nicht erreichbar');
			}

			const data = await response.json();
			const models = data.models || [];
			const hasModel = models.some((m) => m.name.startsWith(this.model));

			if (!hasModel) {
				console.log(`⚠️  Modell "${this.model}" nicht gefunden.`);
				console.log(`   Verfügbare Modelle: ${models.map((m) => m.name).join(', ')}`);
				console.log(`   Führe aus: ollama pull ${this.model}`);
				return false;
			}

			console.log(`✅ Ollama läuft, Modell "${this.model}" verfügbar`);
			return true;
		} catch (error) {
			console.error('❌ Ollama nicht erreichbar:', error.message);
			console.log('   Stelle sicher, dass Ollama läuft: ollama serve');
			return false;
		}
	}

	/**
	 * Erstellt Embedding für einen Text via Ollama
	 */
	async createEmbedding(text) {
		const response = await fetch(`${this.ollamaUrl}/api/embeddings`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				model: this.model,
				prompt: text,
			}),
		});

		if (!response.ok) {
			throw new Error(`Ollama Embedding fehlgeschlagen: ${response.statusText}`);
		}

		const data = await response.json();
		return data.embedding;
	}

	/**
	 * Findet rekursiv alle Markdown-Dateien in einem Verzeichnis
	 */
	findMarkdownFiles(dir, fileList = []) {
		if (!fs.existsSync(dir)) {
			console.warn(`⚠️  Verzeichnis nicht gefunden: ${dir}`);
			return fileList;
		}

		const files = fs.readdirSync(dir);

		files.forEach((file) => {
			const filePath = path.join(dir, file);
			const stat = fs.statSync(filePath);

			if (stat.isDirectory()) {
				this.findMarkdownFiles(filePath, fileList);
			} else if (path.extname(file).toLowerCase() === '.md') {
				fileList.push(filePath);
			}
		});

		return fileList;
	}

	/**
	 * Teilt Text in Chunks mit Overlap
	 */
	chunkText(text, maxLength = this.chunkSize, overlap = this.chunkOverlap) {
		const chunks = [];
		const paragraphs = text.split(/\n\n+/);
		let currentChunk = '';

		for (const paragraph of paragraphs) {
			const trimmedParagraph = paragraph.trim();
			if (!trimmedParagraph) continue;

			if ((currentChunk + trimmedParagraph).length > maxLength && currentChunk) {
				chunks.push(currentChunk.trim());

				// Overlap: letzte Wörter für Kontext behalten
				const words = currentChunk.trim().split(/\s+/);
				const overlapWordCount = Math.floor(overlap / 6);
				const overlapWords = words.slice(-overlapWordCount);
				currentChunk = overlapWords.join(' ') + '\n\n' + trimmedParagraph;
			} else {
				currentChunk += (currentChunk ? '\n\n' : '') + trimmedParagraph;
			}
		}

		if (currentChunk.trim()) {
			chunks.push(currentChunk.trim());
		}

		return chunks.filter((c) => c.length > 0);
	}

	/**
	 * Extrahiert Metadaten aus Markdown-Frontmatter
	 */
	extractFrontmatter(content) {
		const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

		if (!frontmatterMatch) {
			return { content, metadata: {} };
		}

		const frontmatterText = frontmatterMatch[1];
		const cleanContent = content.replace(frontmatterMatch[0], '').trim();

		const metadata = {};
		frontmatterText.split('\n').forEach((line) => {
			const [key, ...valueParts] = line.split(':');
			if (key && valueParts.length > 0) {
				metadata[key.trim()] = valueParts.join(':').trim();
			}
		});

		return { content: cleanContent, metadata };
	}

	/**
	 * Indexiert Verzeichnisse mit Markdown-Dateien
	 */
	async indexDirectories(directories, options = {}) {
		const { overwrite = true, batchSize = 10 } = options;
		const data = [];

		console.log('\n🚀 Starte Indexierung...\n');

		for (const dir of directories) {
			const absoluteDir = path.resolve(dir);
			console.log(`📁 Verzeichnis: ${absoluteDir}`);

			const files = this.findMarkdownFiles(absoluteDir);
			console.log(`   ${files.length} Markdown-Dateien gefunden\n`);

			for (const filePath of files) {
				const fileName = path.basename(filePath);
				const relativeDir = path.basename(path.dirname(filePath));

				process.stdout.write(`   📄 ${fileName}...`);

				try {
					const rawContent = fs.readFileSync(filePath, 'utf-8');
					const { content, metadata } = this.extractFrontmatter(rawContent);
					const chunks = this.chunkText(content);

					for (let i = 0; i < chunks.length; i++) {
						const embedding = await this.createEmbedding(chunks[i]);

						data.push({
							id: `${fileName}-chunk-${i}`,
							text: chunks[i],
							vector: embedding,
							file: filePath,
							fileName: fileName,
							directory: relativeDir,
							chunkIndex: i,
							totalChunks: chunks.length,
							...metadata,
						});
					}

					console.log(` ✓ (${chunks.length} chunks)`);
				} catch (error) {
					console.log(` ✗ Fehler: ${error.message}`);
				}
			}
		}

		if (data.length === 0) {
			console.log('\n⚠️  Keine Dokumente zum Indexieren gefunden.');
			return 0;
		}

		// Tabelle erstellen oder überschreiben
		console.log(`\n💾 Speichere ${data.length} Chunks in LanceDB...`);

		this.table = await this.db.createTable(this.tableName, data, {
			mode: overwrite ? 'overwrite' : 'create',
		});

		console.log(`\n✅ Indexierung abgeschlossen: ${data.length} Chunks\n`);

		return data.length;
	}

	/**
	 * Sucht ähnliche Dokumente
	 */
	async search(query, topK = 5) {
		if (!this.table) {
			try {
				this.table = await this.db.openTable(this.tableName);
			} catch (error) {
				console.error('❌ Keine Tabelle gefunden. Führe zuerst die Indexierung aus.');
				return [];
			}
		}

		const queryEmbedding = await this.createEmbedding(query);

		const results = await this.table.search(queryEmbedding).limit(topK).toArray();

		return results.map((r) => ({
			text: r.text,
			file: r.file,
			fileName: r.fileName,
			directory: r.directory,
			chunkIndex: r.chunkIndex,
			totalChunks: r.totalChunks,
			distance: r._distance,
			// L2-Distanz in Ähnlichkeit umwandeln (je kleiner, desto ähnlicher)
			similarity: 1 / (1 + r._distance),
		}));
	}

	/**
	 * Gibt Statistiken über die Wissensbasis zurück
	 */
	async getStats() {
		if (!this.table) {
			try {
				this.table = await this.db.openTable(this.tableName);
			} catch (error) {
				return { error: 'Keine Tabelle gefunden' };
			}
		}

		// Query all data using LanceDB's query API
		const allData = await this.table.query().toArray();

		const stats = {
			totalChunks: allData.length,
			directories: {},
			files: new Set(),
			avgChunkLength: 0,
		};

		let totalLength = 0;

		allData.forEach((doc) => {
			stats.directories[doc.directory] = (stats.directories[doc.directory] || 0) + 1;
			stats.files.add(doc.file);
			totalLength += doc.text.length;
		});

		stats.totalFiles = stats.files.size;
		stats.avgChunkLength = Math.round(totalLength / allData.length);
		delete stats.files;

		return stats;
	}

	/**
	 * Löscht die Tabelle
	 */
	async dropTable() {
		if (this.db) {
			await this.db.dropTable(this.tableName);
			this.table = null;
			console.log(`🗑️  Tabelle "${this.tableName}" gelöscht`);
		}
	}
}

export default OllamaLanceRAG;
