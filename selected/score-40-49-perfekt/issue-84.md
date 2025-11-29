**Titel:** Feedback für die Seite /aufbau
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/84
**Typ:** issue
**Status:** Offen
**Erstellt:** 12. Oktober 2025 um 15:10
**Aktualisiert:** 12. Oktober 2025 um 15:10
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 1
**Likes:** 0
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

**Feedback:** <br>Gibt es einen Grund, mysql und mariadb parallel zu unterstuetzen ? Welche use-cases deckt mysql ab, die mariadb nicht abdeckt ?

---

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/84 -->

Sie stellen eine fundamentale Frage zur Konsolidierung: "Gibt es einen Grund, mysql und mariadb parallel zu unterstützen? Welche use-cases deckt mysql ab, die mariadb nicht abdeckt?"

### Die Kernfrage: Redundanz oder bewusste Parallelität?

Ich sehe genau den Punkt, auf den Sie hinweisen: MySQL und MariaDB sind im Wesentlichen zwei Zweige desselben Baumes. MariaDB ist ja ursprünglich als Fork von MySQL entstanden und ist weitgehend kompatibel. Die Frage ist absolut berechtigt: Wenn beide den gleichen Zweck erfüllen, warum dann beide im Stack?

Aus technischer Sicht könnte ich mir drei mögliche Gründe vorstellen:

1. **Legacy-Unterstützung**: Bestehende Projekte nutzen bereits MySQL, und eine Migration auf MariaDB wäre mit Aufwand verbunden.
2. **Lizenzpolitische Gründe**: Oracle (MySQL) vs. Community (MariaDB) – digitale Souveränität spricht eigentlich für MariaDB.
3. **Minimale technische Unterschiede**: In seltenen Fällen gibt es tatsächlich Abweichungen in Speicher-Engines oder Performance-Optimierungen.

Aber ehrlich gesagt: Für 95% der Anwendungsfälle ist die Unterscheidung irrelevant. Das ist genau das Problem, das Sie ansprechen.

### Konsolidierung als Strategie

Ihre Frage zielt auf Effizienz durch Konsolidierung. Redundante Technologien multiplizieren Wartungsaufwand und Fragmentierung. Ein klarer Stack mit Empfehlung ("Nutze MariaDB") wäre effizienter. Ich erlebe MySQL/MariaDB-, React/Angular-Redundanz überall. Besser: "Wir empfehlen A. Nur mit gutem Grund B." Das gibt Orientierung.

### Eine Parallele aus dem UI-Bereich

In meiner Arbeit mit Web-Oberflächen sehe ich genau dasselbe Muster. Projekte fragen: "Sollen wir React, Angular oder Vue nehmen?" – eine Frage, die immer wieder gestellt wird und jedes Mal Zeit kostet. Die Technologien sind unterschiedlich im Detail, aber für die meisten Anwendungsfälle austauschbar.

Eine mögliche Antwort auf Ihre Konsolidierungs-Frage liegt in standardisierten, framework-agnostischen Lösungen. Im UI-Bereich gibt es dafür Web Components (W3C Standard), die unabhängig vom gewählten Framework funktionieren. Ich habe dazu einen Antrag gestellt: **[Aufnahme von KoliBri – die barrierefreie Komponentenbibliothek des Bundes in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)** – eine Komponentenbibliothek, die genau diese Konsolidierung im Frontend-Bereich anstrebt.

Ähnliche Gedanken zur Fragmentierung finde ich auch in [Issue #161](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/161). Falls Sie an einem Austausch zu Konsolidierungsstrategien interessiert sind, stehe ich gerne zur Verfügung.

---

> _Weitere Informationen: [KoliBri auf GitHub](https://github.com/public-ui/kolibri)_

---

**Tags:** a11y
