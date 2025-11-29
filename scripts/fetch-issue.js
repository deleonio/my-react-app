#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const ISSUE_SEGMENT = 'work_items';
const ISSUE_URL = 'https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/1';
const OUTPUT_DIR = 'issues';

function extractIssueInfo(issueUrl) {
	const parsedUrl = new URL(issueUrl);
	const pathSegments = parsedUrl.pathname.split('/').filter(Boolean);
	const separatorIndex = pathSegments.indexOf('-');
	const projectPathParts = pathSegments.slice(0, separatorIndex);
	const resourceSegments = pathSegments.slice(separatorIndex + 1);
	const issuesIndex = resourceSegments.indexOf(ISSUE_SEGMENT);
	const iid = resourceSegments[issuesIndex + 1];
	const projectPath = projectPathParts.join('/');

	return {
		apiBase: `${parsedUrl.protocol}//${parsedUrl.host}/api/v4`,
		projectPath,
		iid,
		webUrl: issueUrl,
	};
}

function buildApiUrl({ apiBase, projectPath }, iid) {
	const encodedProjectPath = encodeURIComponent(projectPath);
	return `${apiBase}/projects/${encodedProjectPath}/issues/${iid}`;
}

async function fetchIssue(apiUrl, token) {
	const response = await fetch(apiUrl, {
		headers: token ? { 'PRIVATE-TOKEN': token } : undefined,
	});

	if (response.status === 404) {
		return null;
	}

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`Failed to fetch issue (${response.status} ${response.statusText}): ${errorText.trim()}`);
	}

	return response.json();
}

function formatDate(isoString) {
	if (!isoString) return 'N/A';
	return new Date(isoString).toLocaleDateString('de-DE', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});
}

function formatDateShort(isoString) {
	if (!isoString) return 'N/A';
	return new Date(isoString).toLocaleDateString('de-DE');
}

function buildMarkdown(issue, webUrl) {
	const title = issue.title || 'Ohne Titel';
	const description = issue.description?.trim() || null;
	const author = issue.author?.name || 'Unbekannt';
	const authorUsername = issue.author?.username || 'unbekannt';
	const createdAt = formatDate(issue.created_at);
	const updatedAt = formatDate(issue.updated_at);
	const closedAt = issue.closed_at ? formatDate(issue.closed_at) : null;
	const closedBy = issue.closed_by?.name || null;
	const state = issue.state === 'opened' ? 'Offen' : issue.state === 'closed' ? 'Geschlossen' : issue.state;
	const labels = issue.labels?.length > 0 ? issue.labels.join(', ') : 'Keine';
	const assignees = issue.assignees?.length > 0 ? issue.assignees.map((a) => a.name).join(', ') : 'Keine';
	const milestone = issue.milestone?.title || 'Keiner';
	const dueDate = issue.due_date ? formatDateShort(issue.due_date) : 'Kein';
	const weight = issue.weight ?? 'Keine';
	const confidential = issue.confidential ? 'Ja' : 'Nein';
	const discussionLocked = issue.discussion_locked ? 'Ja' : 'Nein';
	const timeEstimate = issue.time_stats?.time_estimate ? `${Math.round(issue.time_stats.time_estimate / 3600)}h` : 'Keine';
	const timeSpent = issue.time_stats?.total_time_spent ? `${Math.round(issue.time_stats.total_time_spent / 3600)}h` : 'Keine';
	const commentCount = issue.user_notes_count ?? 0;
	const upvotes = issue.upvotes ?? 0;
	const downvotes = issue.downvotes ?? 0;
	const mergeRequestsCount = issue.merge_requests_count ?? 0;
	const taskStatus = issue.task_completion_status ? `${issue.task_completion_status.completed_count}/${issue.task_completion_status.count}` : 'Keine';
	const issueType = issue.issue_type || issue.type || 'Issue';
	const severity = issue.severity !== 'UNKNOWN' ? issue.severity : 'Keine';
	const blockingIssuesCount = issue.blocking_issues_count ?? 0;

	const lines = [
		`**Titel:** ${title}`,
		`**Quelle:** ${webUrl}`,
		`**Typ:** ${issueType}`,
		`**Status:** ${state}`,
		`**Erstellt:** ${createdAt}`,
		`**Aktualisiert:** ${updatedAt}`,
		`**Autor:** ${author} (@${authorUsername})`,
		`**Zugewiesen:** ${assignees}`,
		`**Labels:** ${labels}`,
		`**Meilenstein:** ${milestone}`,
		`**Fälligkeitsdatum:** ${dueDate}`,
		`**Gewichtung:** ${weight}`,
		`**Zeitschätzung:** ${timeEstimate}`,
		`**Zeitaufwand:** ${timeSpent}`,
		`**Kommentare:** ${commentCount}`,
		`**Likes:** ${upvotes}`,
		`**Dislikes:** ${downvotes}`,
		`**Merge Requests:** ${mergeRequestsCount}`,
		`**Aufgaben:** ${taskStatus}`,
		`**Blockiert:** ${blockingIssuesCount} Issues`,
		`**Vertraulich:** ${confidential}`,
		`**Diskussion gesperrt:** ${discussionLocked}`,
		`**Schweregrad:** ${severity}`,
	];

	if (closedAt) {
		lines.push(`**Geschlossen:** ${closedAt}${closedBy ? ` von ${closedBy}` : ''}`);
	}

	lines.push('', '## Beschreibung', '', description || '*(leer)*');

	return `${lines.join('\n')}\n`;
}

async function writeFile(outputPath, content) {
	const resolvedPath = path.resolve(process.cwd(), outputPath);
	await fs.mkdir(path.dirname(resolvedPath), { recursive: true });
	await fs.writeFile(resolvedPath, content, 'utf8');
	return resolvedPath;
}

async function main() {
	const issueInfo = extractIssueInfo(ISSUE_URL);
	const token = process.env.GITLAB_TOKEN;
	const issueWebBase = ISSUE_URL.split('/').slice(0, -1).join('/');

	const startIid = process.argv[2] ? Number.parseInt(process.argv[2], 10) : 1;
	if (!Number.isInteger(startIid) || startIid < 1) {
		console.error('Start ID muss eine positive Ganzzahl sein.');
		process.exit(1);
	}

	let currentIid = startIid;

	while (true) {
		const apiUrl = buildApiUrl(issueInfo, currentIid);
		const issue = await fetchIssue(apiUrl, token);

		if (!issue) {
			console.log(`No work item found for IID ${currentIid}. Stopping.`);
			break;
		}

		const markdown = buildMarkdown(issue, `${issueWebBase}/${currentIid}`);
		const targetPath = path.join(OUTPUT_DIR, `issue-${currentIid}.md`);
		const savedPath = await writeFile(targetPath, markdown);

		console.log(`Work item #${currentIid} saved to ${savedPath}`);
		currentIid += 1;
	}
}

main().catch((error) => {
	console.error(error instanceof Error ? error.message : String(error));
	process.exit(1);
});
