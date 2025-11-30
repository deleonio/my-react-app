#!/usr/bin/env python3
"""
KoliBri Synergie-Score Analyse
Bewertet alle Tickets nach Relevanz für KoliBri als barrierefreie Web Component Library
"""

import os
import re
from pathlib import Path

# Score-Kategorien
SCORES = {
    # Perfekte Synergie (10 Punkte)
    'barrierefreiheit': (10, ['barrierefreiheit', 'accessibility', 'wcag', 'aria', 'screen reader', 'a11y', 'bitv']),
    'web_components': (10, ['web component', 'custom element', 'shadow dom', 'webcomponent']),
    'ui_standardisierung': (9, ['ui.*standardisierung', 'ui.*komponente', 'ui.*baustein', 'design system', 'component library']),

    # Hohe Synergie (7-9 Punkte)
    'framework_diskussion': (8, ['react', 'angular', 'vue', 'svelte', 'framework.*wahl', 'framework.*unabhängig', 'framework.*agnostisch']),
    'frontend_ux': (7, ['frontend', 'user interface', 'user experience', '\\bux\\b', 'sustainable ux']),

    # Mittlere Synergie (4-6 Punkte)
    'web_tech': (5, ['\\bhtml\\b', '\\bcss\\b', 'javascript', 'typescript', 'w3c']),
    'interoperabilität': (4, ['interoperabilität', 'schnittstelle', '\\bapi\\b', 'modular']),

    # Geringe Synergie (1-3 Punkte)
    'software_arch': (2, ['software.*entwicklung', 'architektur', 'governance'])
}

def analyze_ticket(filepath):
    """Analysiert ein Ticket und gibt Score + Keywords zurück"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read().lower()

        score = 0
        found_keywords = []

        for category, (points, patterns) in SCORES.items():
            for pattern in patterns:
                if re.search(pattern, content, re.IGNORECASE):
                    score += points
                    found_keywords.append(category.upper())
                    break  # Nur einmal pro Kategorie zählen

        return score, found_keywords
    except Exception as e:
        return 0, [f'ERROR: {str(e)}']

def main():
    selected_dir = Path('/Users/moppitz/Workspace/kolibri/my-react-app/selected')

    # Analysiere alle Tickets
    results = []
    for ticket_file in sorted(selected_dir.glob('issue-*.md'), key=lambda x: int(x.stem.split('-')[1])):
        score, keywords = analyze_ticket(ticket_file)
        results.append((ticket_file.name, score, keywords))

    # Sortiere nach Score
    results.sort(key=lambda x: x[1], reverse=True)

    # Ausgabe
    print("=" * 80)
    print("KOLIBRI SYNERGIE-SCORE ANALYSE")
    print("=" * 80)
    print()

    print("=== TOP 30 TICKETS (höchster Score) ===")
    print()
    for i, (filename, score, keywords) in enumerate(results[:30], 1):
        kw_str = ' '.join(f'[{k}]' for k in keywords) if keywords else '[KEINE]'
        print(f"{i:2}. {filename:20} Score: {score:3} {kw_str}")

    print()
    print("=" * 80)
    print("=== STATISTIK ===")
    print()

    total = len(results)
    high_score = len([r for r in results if r[1] >= 20])
    medium_score = len([r for r in results if 10 <= r[1] < 20])
    low_score = len([r for r in results if 5 <= r[1] < 10])
    minimal_score = len([r for r in results if 1 <= r[1] < 5])
    no_score = len([r for r in results if r[1] == 0])

    print(f"Gesamt analysierte Tickets: {total}")
    print(f"Tickets mit Score >= 20 (perfekte Synergie):  {high_score:3} ({high_score/total*100:5.1f}%)")
    print(f"Tickets mit Score 10-19 (hohe Synergie):      {medium_score:3} ({medium_score/total*100:5.1f}%)")
    print(f"Tickets mit Score 5-9 (mittlere Synergie):    {low_score:3} ({low_score/total*100:5.1f}%)")
    print(f"Tickets mit Score 1-4 (geringe Synergie):     {minimal_score:3} ({minimal_score/total*100:5.1f}%)")
    print(f"Tickets mit Score 0 (keine Synergie):         {no_score:3} ({no_score/total*100:5.1f}%)")

    print()
    print(f"Durchschnittlicher Score: {sum(r[1] for r in results) / total:.1f}")
    print()

    # Kategorie-Analyse
    print("=== KATEGORIEN-HÄUFIGKEIT ===")
    print()
    category_count = {}
    for _, _, keywords in results:
        for kw in keywords:
            category_count[kw] = category_count.get(kw, 0) + 1

    for cat, count in sorted(category_count.items(), key=lambda x: x[1], reverse=True):
        print(f"{cat:25} {count:3} Tickets")

    print()
    print("=" * 80)

if __name__ == '__main__':
    main()
