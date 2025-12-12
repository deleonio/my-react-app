#!/usr/bin/env python3
"""
Filtert Issues nach Relevanz für KoliBri/Web Components und kopiert sie nach selected/
"""

import os
import re
import shutil
from pathlib import Path
from typing import List, Dict, Tuple

# Pfade
ISSUES_DIR = Path("/Users/moppitz/Workspace/kolibri/my-react-app/issues")
SELECTED_DIR = Path("/Users/moppitz/Workspace/kolibri/my-react-app/selected")
REGEX_FILE = SELECTED_DIR / ".regex.txt"

# Regex-Patterns aus .regex.txt
PATTERNS = {
    "a11y": r"barrierefreih|accessibility|a11y|screenreader|aria|wcag|barrierefrei|bitv|bfit|zugänglichkeit",
    "kolibri": r"kolibri|public-ui|itzbund|webcomponent|web component|web.component|angular|react|vue|svelte|stencil",
    "ui": r"ux|ui|designsystem|design system|design.system|desybri|kern|desy|benutzeroberfläche|oberfläche|frontend",
    "standards": r"w3c|html|css|javascript|typescript|standard|interoperabilität|interoperability|framework",
}

def read_issue_file(filepath: Path) -> str:
    """Liest den Inhalt einer Issue-Datei."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read().lower()
    except Exception as e:
        print(f"❌ Fehler beim Lesen von {filepath}: {e}")
        return ""

def calculate_relevance(content: str) -> Tuple[int, Dict[str, int]]:
    """
    Berechnet die Relevanz eines Issues basierend auf Pattern-Matches.

    Returns:
        Tuple[int, Dict[str, int]]: (Gesamt-Score, Matches pro Kategorie)
    """
    matches = {}
    total_score = 0

    for category, pattern in PATTERNS.items():
        # Finde alle Matches für dieses Pattern
        found = len(re.findall(pattern, content, re.IGNORECASE))
        matches[category] = found

        # Gewichtung: a11y und kolibri höher gewichten
        weight = 2 if category in ["a11y", "kolibri"] else 1
        total_score += found * weight

    return total_score, matches

def filter_issues(min_score: int = 3) -> List[Tuple[Path, int, Dict[str, int]]]:
    """
    Filtert Issues nach Relevanz.

    Args:
        min_score: Minimaler Relevanz-Score (Standard: 3)

    Returns:
        Liste von (Dateipfad, Score, Matches) für relevante Issues
    """
    relevant_issues = []

    issue_files = sorted(ISSUES_DIR.glob("issue-*.md"))
    print(f"📂 Analysiere {len(issue_files)} Issues...\n")

    for issue_file in issue_files:
        content = read_issue_file(issue_file)
        if not content:
            continue

        score, matches = calculate_relevance(content)

        if score >= min_score:
            relevant_issues.append((issue_file, score, matches))

    # Sortiere nach Score (höchster zuerst)
    relevant_issues.sort(key=lambda x: x[1], reverse=True)

    return relevant_issues

def copy_to_selected(relevant_issues: List[Tuple[Path, int, Dict[str, int]]]):
    """Kopiert relevante Issues nach selected/."""

    if not relevant_issues:
        print("⚠️  Keine relevanten Issues gefunden.")
        return

    print(f"\n✅ {len(relevant_issues)} relevante Issues gefunden:\n")
    print("=" * 80)

    for issue_file, score, matches in relevant_issues:
        # Issue-Nummer extrahieren
        issue_num = issue_file.stem.replace("issue-", "")

        # Zieldatei
        dest_file = SELECTED_DIR / issue_file.name

        # Kopieren
        try:
            shutil.copy2(issue_file, dest_file)

            # Match-Details formatieren
            match_details = ", ".join([f"{cat}={count}" for cat, count in matches.items() if count > 0])

            print(f"📋 issue-{issue_num:<4} | Score: {score:3} | {match_details}")

        except Exception as e:
            print(f"❌ Fehler beim Kopieren von {issue_file.name}: {e}")

    print("=" * 80)
    print(f"\n✨ {len(relevant_issues)} Issues erfolgreich nach selected/ kopiert!")

def main():
    """Hauptfunktion."""
    print("🔍 KoliBri Issue Filter\n")

    # Prüfe Verzeichnisse
    if not ISSUES_DIR.exists():
        print(f"❌ Issues-Verzeichnis nicht gefunden: {ISSUES_DIR}")
        return

    if not SELECTED_DIR.exists():
        print(f"❌ Selected-Verzeichnis nicht gefunden: {SELECTED_DIR}")
        return

    # Filtere Issues
    relevant_issues = filter_issues(min_score=3)

    # Kopiere nach selected/
    copy_to_selected(relevant_issues)

    # Statistiken
    if relevant_issues:
        print(f"\n📊 Statistiken:")
        print(f"   • Höchster Score: {relevant_issues[0][1]}")
        print(f"   • Niedrigster Score: {relevant_issues[-1][1]}")
        print(f"   • Durchschnitt: {sum(s for _, s, _ in relevant_issues) / len(relevant_issues):.1f}")

if __name__ == "__main__":
    main()
