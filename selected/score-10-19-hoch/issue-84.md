**Titel:** Feedback für die Seite /aufbau
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/84
**Typ:** issue
**Status:** Offen
**Erstellt:** 12. Oktober 2025 um 15:10
**Aktualisiert:** 28. November 2025 um 17:57
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 2
**Likes:** 1
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/84 -->

Eine berechtigte Frage zur Redundanz – warum MySQL und MariaDB parallel? Ihre Kritik zeigt ein allgemeines Problem: Der Stack definiert Technologien statt Schnittstellen. Das bindet Projekte an Implementierungen statt an Standards.

Bei UI-Komponenten haben wir das mit KoliBri anders gelöst: Web Components als W3C-Standard funktionieren unabhängig davon, welches Backend dahintersteht. Ob MySQL, MariaDB, PostgreSQL oder MongoDB – die 50+ UI-Komponenten bleiben dieselben. Die Frage "welche Datenbank?" wird irrelevant für die Oberfläche.

**KoliBri für technologie-agnostische Architektur:**

- **Standard statt Produkt**: Web Components (W3C seit 2018), keine Vendor-Bindung
- **Backend-unabhängig**: UI funktioniert mit jeder DB, jedem Backend-Framework
- **Zukunftssicher**: DB-Wechsel? API-Änderung? Die Komponenten bleiben stabil
- **50+ Komponenten**: Einmal entwickelt, überall einsetzbar

Ihre Frage könnte man auch auf UI-Frameworks übertragen – warum Angular UND React? Web Components lösen das eleganter.

---

> Mehr Infos:
>
> - **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**
> - [Repository - Public UI - KoliBri](https://github.com/public-ui/kolibri)

## Beschreibung

**Feedback:** <br>Gibt es einen Grund, mysql und mariadb parallel zu unterstuetzen ? Welche use-cases deckt mysql ab, die mariadb nicht abdeckt ?
