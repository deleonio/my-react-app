#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import readline from 'node:readline';

const ISSUES_DIR = 'issues';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
	console.error('Fehler: OPENAI_API_KEY Umgebungsvariable nicht gesetzt.');
	console.error('Setze sie mit: export OPENAI_API_KEY=dein_api_key');
	process.exit(1);
}

// Alle Issues laden
async function loadIssues() {
	const files = await fs.readdir(ISSUES_DIR);
	const issues = [];

	for (const file of files) {
		if (file.endsWith('.md')) {
			const content = await fs.readFile(path.join(ISSUES_DIR, file), 'utf8');
			issues.push({
				filename: file,
				content,
			});
		}
	}

	console.log(`${issues.length} Issues geladen.`);
	return issues;
}

// Embeddings für Text generieren
async function getEmbedding(text) {
	const response = await fetch('https://api.openai.com/v1/embeddings', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${OPENAI_API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: 'text-embedding-3-small',
			input: text.slice(0, 8000), // Limit für API
		}),
	});

	const data = await response.json();
	return data.data[0].embedding;
}

// Kosinus-Ähnlichkeit berechnen
function cosineSimilarity(a, b) {
	let dotProduct = 0;
	let normA = 0;
	let normB = 0;
	for (let i = 0; i < a.length; i++) {
		dotProduct += a[i] * b[i];
		normA += a[i] * a[i];
		normB += b[i] * b[i];
	}
	return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Relevante Issues finden
function findRelevantIssues(queryEmbedding, issueEmbeddings, topK = 5) {
	const similarities = issueEmbeddings.map((item, index) => ({
		index,
		filename: item.filename,
		similarity: cosineSimilarity(queryEmbedding, item.embedding),
	}));

	return similarities.sort((a, b) => b.similarity - a.similarity).slice(0, topK);
}

// Antwort mit GPT generieren
async function generateAnswer(query, relevantIssues, issues) {
	const context = relevantIssues
		.map((r) => {
			const issue = issues[r.index];
			return `--- ${issue.filename} (Relevanz: ${(r.similarity * 100).toFixed(1)}%) ---\n${issue.content}`;
		})
		.join('\n\n');

	const response = await fetch('https://api.openai.com/v1/chat/completions', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${OPENAI_API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: 'gpt-4o-mini',
			messages: [
				{
					role: 'system',
					content: `Du bist ein Assistent, der Fragen zu GitLab Work Items beantwortet.
Antworte auf Deutsch basierend auf dem bereitgestellten Kontext.
Nenne die relevanten Issue-Nummern in deiner Antwort.
Wenn du keine Antwort findest, sage das ehrlich.`,
				},
				{
					role: 'user',
					content: `Kontext (relevante Issues):\n\n${context}\n\n---\n\nFrage: ${query}`,
				},
			],
			temperature: 0.3,
			max_tokens: 1000,
		}),
	});

	const data = await response.json();
	return data.choices[0].message.content;
}

// Cache für Embeddings
const CACHE_FILE = 'issues-embeddings.json';

async function loadOrCreateEmbeddings(issues) {
	// Versuche Cache zu laden
	try {
		const cache = JSON.parse(await fs.readFile(CACHE_FILE, 'utf8'));
		if (cache.length === issues.length) {
			console.log('Embeddings aus Cache geladen.');
			return cache;
		}
	} catch {
		// Cache existiert nicht
	}

	// Neue Embeddings erstellen
	console.log('Erstelle Embeddings für alle Issues...');
	const embeddings = [];

	for (let i = 0; i < issues.length; i++) {
		const issue = issues[i];
		process.stdout.write(`\rEmbedding ${i + 1}/${issues.length}...`);
		const embedding = await getEmbedding(issue.content);
		embeddings.push({
			filename: issue.filename,
			embedding,
		});
		// Rate limiting
		await new Promise((resolve) => setTimeout(resolve, 100));
	}
	console.log('\nEmbeddings erstellt.');

	// Cache speichern
	await fs.writeFile(CACHE_FILE, JSON.stringify(embeddings), 'utf8');
	console.log('Embeddings gecacht.');

	return embeddings;
}

// Interaktive CLI
async function main() {
	const issues = await loadIssues();
	const embeddings = await loadOrCreateEmbeddings(issues);

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	console.log('\n🔍 RAG-System für Issues gestartet.');
	console.log('Stelle Fragen zu den Issues. Beende mit "exit" oder Ctrl+C.\n');

	const askQuestion = () => {
		rl.question('Frage: ', async (query) => {
			if (query.toLowerCase() === 'exit') {
				console.log('Auf Wiedersehen!');
				rl.close();
				return;
			}

			if (!query.trim()) {
				askQuestion();
				return;
			}

			try {
				console.log('\nSuche relevante Issues...');
				const queryEmbedding = await getEmbedding(query);
				const relevant = findRelevantIssues(queryEmbedding, embeddings, 5);

				console.log('Gefunden:', relevant.map((r) => `${r.filename} (${(r.similarity * 100).toFixed(1)}%)`).join(', '));

				console.log('\nGeneriere Antwort...\n');
				const answer = await generateAnswer(query, relevant, issues);
				console.log('📝 Antwort:\n');
				console.log(answer);
				console.log('\n' + '─'.repeat(60) + '\n');
			} catch (error) {
				console.error('Fehler:', error.message);
			}

			askQuestion();
		});
	};

	askQuestion();
}

main().catch(console.error);
