#!/usr/bin/env python3
"""
Sortiert alle Tickets nach Synergie-Score in entsprechende Unterordner
"""

import os
import shutil
import re
import sys
from pathlib import Path

# Score-Kategorien
SCORES = {
    'barrierefreiheit': (10, ['barrierefreiheit', 'accessibility', 'wcag', 'aria', 'screen reader', 'a11y', 'bitv']),
    'web_components': (10, ['web component', 'custom element', 'shadow dom', 'webcomponent']),
    'ui_standardisierung': (9, ['ui.*standardisierung', 'ui.*komponente', 'ui.*baustein', 'design system', 'component library']),
    'framework_diskussion': (8, ['react', 'angular', 'vue', 'svelte', 'framework.*wahl', 'framework.*unabhängig', 'framework.*agnostisch']),
    'frontend_ux': (7, ['frontend', 'user interface', 'user experience', '\\bux\\b', 'sustainable ux']),
    'web_tech': (5, ['\\bhtml\\b', '\\bcss\\b', 'javascript', 'typescript', 'w3c']),
    'interoperabilität': (4, ['interoperabilität', 'schnittstelle', '\\bapi\\b', 'modular']),
    'software_arch': (2, ['software.*entwicklung', 'architektur', 'governance'])
}

def analyze_ticket(filepath):
    """Analysiert ein Ticket und gibt Score zurück"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read().lower()

        # Entferne KoliBri-Kommentar vor der Bewertung
        kolibri_comment_marker = '<!-- kolibri kommentar'
        if kolibri_comment_marker in content:
            content = content.split(kolibri_comment_marker, 1)[0]

        score = 0
        for category, (points, patterns) in SCORES.items():
            for pattern in patterns:
                if re.search(pattern, content, re.IGNORECASE):
                    score += points
                    break

        return score
    except Exception as e:
        print(f"Fehler bei {filepath.name}: {e}")
        return 0

def get_score_folder(score):
    """Bestimmt Zielordner basierend auf Score"""
    if score >= 40:
        return 'score-40-49-perfekt'
    elif score >= 20:
        return 'score-20-39-sehr-hoch'
    elif score >= 10:
        return 'score-10-19-hoch'
    elif score >= 5:
        return 'score-05-09-mittel'
    elif score >= 1:
        return 'score-01-04-gering'
    else:
        return 'score-00-keine'

def main():
    """Hauptlogik: sortiert ausschließlich Tickets direkt unter selected/.

    Unterstützte Optionen:
      --base <pfad>   Basisverzeichnis (Default: selected/ im Repo)
      --dry-run       Zeigt nur geplante Aktionen, ohne Dateien zu verschieben
    """
    # Argumente auswerten
    args = sys.argv[1:]
    base_dir = Path('/Users/moppitz/Workspace/kolibri/my-react-app/selected')
    dry_run = False
    if '--base' in args:
        try:
            idx = args.index('--base')
            base_dir = Path(args[idx + 1]).expanduser().resolve()
        except Exception:
            print('⚠️  Ungültiger --base Parameter, verwende Default.')
    if '--dry-run' in args:
        dry_run = True

    if not base_dir.exists():
        print(f"❌ Basisverzeichnis existiert nicht: {base_dir}")
        sys.exit(1)

    # Nur Dateien direkt im Basisverzeichnis (keine bereits einsortierten Unterordner)
    root_issue_files = [p for p in base_dir.glob('issue-*.md') if p.parent == base_dir]

    if not root_issue_files:
        print("ℹ️  Keine issue-*.md Dateien im Stamm von selected/ gefunden (evtl. bereits sortiert).")
        return

    moved_count: dict[str, int] = {}
    total = 0

    print("Sortiere Tickets nach Synergie-Score..." + (" (Dry-Run)" if dry_run else ""))
    print()

    for ticket_file in sorted(root_issue_files, key=lambda x: int(x.stem.split('-')[1])):
        score = analyze_ticket(ticket_file)
        folder = get_score_folder(score)
        target_dir = base_dir / folder
        target_path = target_dir / ticket_file.name

        # Zielordner sicherstellen
        if not target_dir.exists() and not dry_run:
            target_dir.mkdir(parents=True, exist_ok=True)

        # Verschieben (oder anzeigen im Dry-Run)
        if dry_run:
            action = 'Würde verschieben'
        else:
            shutil.move(str(ticket_file), str(target_path))
            action = '✓ Verschoben'

        moved_count[folder] = moved_count.get(folder, 0) + 1
        total += 1
        print(f"{action:13} {ticket_file.name:20} Score {score:3} → {folder}")

    print()
    print("=" * 80)
    print("SORTIERUNG ABGESCHLOSSEN" + (" (Dry-Run)" if dry_run else ""))
    print("=" * 80)
    print()
    print(f"Gesamt {'geplante ' if dry_run else ''}verschobene Tickets: {total}")
    print()

    for folder in ['score-40-49-perfekt', 'score-20-39-sehr-hoch', 'score-10-19-hoch',
                   'score-05-09-mittel', 'score-01-04-gering', 'score-00-keine']:
        count = moved_count.get(folder, 0)
        print(f"  {folder:30} {count:3} Tickets")

    print()
    print("Empfohlene Bearbeitungsreihenfolge:")
    print("  1. score-40-49-perfekt/     (höchste Priorität)")
    print("  2. score-20-39-sehr-hoch/")
    print("  3. score-10-19-hoch/")
    print("  4. score-05-09-mittel/")
    print("  5. score-01-04-gering/")
    print("  6. score-00-keine/          (nicht relevant)")
    print()

if __name__ == '__main__':
    main()
