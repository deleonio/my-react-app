# Tickets sortiert nach KoliBri-Synergie-Score

**Analysedatum:** 29. November 2025  
**Gesamt: 132 Tickets**

## Ordnerstruktur

Die Tickets sind nach ihrem Synergie-Score mit KoliBri sortiert:

```
selected/
├── score-40-49-perfekt/      →   3 Tickets (höchste Priorität) ✅ 100% DONE
├── score-20-39-sehr-hoch/    →   5 Tickets (sehr hohe Priorität) 📝 80% DONE
├── score-10-19-hoch/         →  33 Tickets (hohe Priorität) 📝 ~30% DONE
├── score-05-09-mittel/       →  36 Tickets (mittlere Priorität)
├── score-01-04-gering/       →  25 Tickets (niedrige Priorität)
└── score-00-keine/           →  30 Tickets (nicht relevant)
```

## Quick Start

**Empfohlene Bearbeitungsreihenfolge:**

1. **score-40-49-perfekt/** ← START HIER
2. **score-20-39-sehr-hoch/**
3. **score-10-19-hoch/**
4. score-05-09-mittel/ (optional)
5. score-01-04-gering/ (überspringen)
6. score-00-keine/ (überspringen)

## Score-Bedeutung

### 🏆 Score 40-49: PERFEKTE SYNERGIE

**3 Tickets** - Barrierefreiheit + Web Components + UI-Standardisierung

- issue-84: MySQL/MariaDB Konsolidierung → Framework-Konsolidierung ✅
- issue-200: KoliBri-Antrag (Hauptantrag) ✅
- issue-142: DIN SPEC 91357 UI-Capability ✅

**Status: 3/3 bearbeitet (100%)**

---

### ⭐ Score 20-39: SEHR HOHE SYNERGIE

**5 Tickets** - Barrierefreiheit, UI-Standards, Framework-Diskussion

- issue-180: 1% Personalkosten Investitionseffizienz ✅
- issue-161: Frontend-Standards fehlen ✅
- issue-228: Standardschnittstellen ✅
- issue-365: "Standardisierte UX-Bausteine" ✅
- issue-398: Framework-Wahl React/Angular/Vue 📝 TODO

**Status: 4/5 bearbeitet (80%)**

---

### ✅ Score 10-19: HOHE SYNERGIE

**33 Tickets** - Framework-Diskussion, Frontend-Tech, Interoperabilität

Viele bereits kommentiert, etwa 15-20 noch offen.

**Top-Prioritäten in dieser Kategorie:**

- issue-143: Web Components erwähnt
- issue-249: Framework-Inkonsistenz
- issue-334/335: Fehlende Frameworks (Vue, Laravel)
- issue-436: Sustainable UX + Green Coding

**Status: ~30% bearbeitet**

---

### ⚡ Score 5-9: MITTLERE SYNERGIE

**36 Tickets** - Web-Tech (HTML/CSS/JS), allgemeine Architektur

**Empfehlung:** Selektiv kommentieren, nur wenn klarer Bezug

---

### ⚠️ Score 1-4: GERINGE SYNERGIE

**25 Tickets** - Governance, allgemeine Software-Entwicklung

**Empfehlung:** Überspringen

---

### ❌ Score 0: KEINE SYNERGIE

**30 Tickets** - SSH, Backend, Testing-Tools, Infrastruktur

**Empfehlung:** NICHT kommentieren (kein UI/Frontend-Bezug)

---

## Statistik

| Score-Bereich         | Anzahl | Anteil | Status      |
| --------------------- | ------ | ------ | ----------- |
| **40-49 (Perfekt)**   | 3      | 2.3%   | ✅ 100%     |
| **20-39 (Sehr hoch)** | 5      | 3.8%   | 📝 80%      |
| **10-19 (Hoch)**      | 33     | 25.0%  | 📝 ~30%     |
| **5-9 (Mittel)**      | 36     | 27.3%  | ⏸️ Optional |
| **1-4 (Gering)**      | 25     | 18.9%  | ⏭️ Skip     |
| **0 (Keine)**         | 30     | 22.7%  | ⏭️ Skip     |

**Gesamt bearbeitungswürdige Tickets (Score ≥ 10):** 41 Tickets (31.1%)  
**Bereits bearbeitet:** ~15 Tickets (36.6%)  
**Noch offen:** ~26 Tickets

---

## Bewertungskriterien

**Perfekte Synergie (10 Punkte):**

- Barrierefreiheit (WCAG, ARIA, accessibility)
- Web Components (Shadow DOM, Custom Elements)
- UI-Standardisierung (Design System, UI-Bausteine)

**Hohe Synergie (7-9 Punkte):**

- Framework-Diskussion (React, Angular, Vue)
- Frontend/UX (User Interface, User Experience)

**Mittlere Synergie (4-6 Punkte):**

- Web-Technologien (HTML, CSS, JavaScript)
- Interoperabilität (APIs, Schnittstellen)

**Geringe Synergie (1-3 Punkte):**

- Software-Architektur (allgemein)
- Governance (ohne UI-Bezug)

---

## Nächste Schritte

### Sofort (Top-Priorität)

1. ✅ score-40-49-perfekt/ → **Alle 3 Tickets bearbeitet**
2. 📝 score-20-39-sehr-hoch/ → **1 Ticket noch offen (issue-398)**

### Kurzfristig (Hohe Priorität)

3. 📝 score-10-19-hoch/ → **~20 Tickets noch offen**

**Fokus auf:**

- Web Components-Erwähnung (issue-143)
- Framework-Diskussionen (issue-249, 334, 335, 436)
- Barrierefreiheits-Themen

### Mittelfristig (Optional)

4. ⏸️ score-05-09-mittel/ → Selektiv, nur bei starkem Bezug

### Überspringen

5. ⏭️ score-01-04-gering/ → Zu geringer Bezug
6. ⏭️ score-00-keine/ → Keine Relevanz für KoliBri

---

## Tools

- **Analyse-Script:** `/Users/moppitz/Workspace/kolibri/my-react-app/analyze_synergy.py`
- **Sortier-Script:** `/Users/moppitz/Workspace/kolibri/my-react-app/sort_tickets_by_score.py`
- **Detailanalyse:** `/Users/moppitz/Workspace/kolibri/my-react-app/SYNERGY_ANALYSIS.md`

**Score neu berechnen:**

```bash
cd /Users/moppitz/Workspace/kolibri/my-react-app
python3 analyze_synergy.py
```

**Tickets neu sortieren:**

```bash
cd /Users/moppitz/Workspace/kolibri/my-react-app
python3 sort_tickets_by_score.py
```

---

**Erstellt:** 29. November 2025  
**Methodik:** Keyword-basierte Kategorisierung + manuelle Validation
