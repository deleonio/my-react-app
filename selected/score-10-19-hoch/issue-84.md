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

Sie fragen: "Gibt es einen Grund, mysql und mariadb parallel zu unterstützen? Welche use-cases deckt mysql ab, die mariadb nicht abdeckt?" – eine berechtigte Frage zur Redundanz. Das zeigt ein allgemeines Problem: Der Stack definiert Technologien statt Schnittstellen. Das bindet Projekte an Implementierungen statt an Standards.

Bei UI-Komponenten haben wir das mit KoliBri anders gelöst: Web Components als W3C-Standard seit 2018 funktionieren unabhängig davon, welches Backend dahintersteht. Ob MySQL, MariaDB, PostgreSQL oder MongoDB – die 50+ UI-Komponenten bleiben dieselben. Die Frage "welche Datenbank?" wird irrelevant für die Oberfläche.

Ihre Frage könnte man auch auf UI-Frameworks übertragen – warum Angular UND React parallel? Web Components lösen das eleganter: Ein W3C-Standard, 97%+ Browser-Support, keine Framework-Abhängigkeit. 3.000+ wöchentliche npm-Downloads, 10 Mio. Menschen mit Behinderung in Deutschland profitieren von eingebauter Barrierefreiheit. Sollte der Stack generell Standards statt Produkte definieren?

---

> Mehr Infos:
>
> - **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**
> - [Repository - Public UI - KoliBri](https://github.com/public-ui/kolibri)

## Beschreibung

**Feedback:** <br>Gibt es einen Grund, mysql und mariadb parallel zu unterstuetzen ? Welche use-cases deckt mysql ab, die mariadb nicht abdeckt ?
