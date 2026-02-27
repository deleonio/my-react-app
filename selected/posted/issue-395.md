**Titel:** Feedback für die Seite /aufbau/
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/395
**Typ:** issue
**Status:** Offen
**Erstellt:** 27. November 2025 um 16:00
**Aktualisiert:** 27. November 2025 um 16:00
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

**Feedback:** <br>Als IT-Dienstleister für die Öffentliche Verwaltung sehen wir im Tech-Stack noch Lücken, die für eine gelingende Umsetzung von Digitallösungen berücksichtigt werden sollten. Wir listen diese hier unkommentiert nach Schubladen sortiert auf:

Betrieb/Entwicklung: C#/.NET, Spring Fraework / Boot 3, Liquibase, jOOQ, npm, Playwright, Web Components

Betrieb / Sicherheit: SSH, SBOM, Keycloak

Betrieb / Transport: Websockets

NEUE KATEGORIE: Betrieb/OS LINUX als Betriebsplattform erscheint uns unabdingbar für den D-Stack

Plattformen/KI: Sprachmodell mit API-Endpoint erforderlich

Plattformen/Integration: Apache Tomcat, Message Queue (JMS), Active MQ, JMS, EventSourcing, Kafka
Plattformen/Low Code: BPMN als Standard, Formularlösungen mit der LIP - FMS des Bundes

---

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/395 -->

Sie identifizieren eine konkrete technologische Lücke im Tech-Stack. Eine davon möchte ich besonders hervorheben, da ich dafür eine konkrete Lösung anbieten kann.

### Web Components – die explizit identifizierte Lücke

Sie nennen in der Rubrik "Betrieb/Entwicklung" wörtlich: **"Web Components"** als fehlende Technologie.

Genau hier kann ich helfen: **KoliBri** ist die barrierefreie Web Components Bibliothek, die wir entwickelt haben und die bereits produktiv im Einsatz ist. Wir schließen damit exakt diese von Ihnen identifizierte Lücke im Deutschland-Stack.

### Nahtlose Integration mit den genannten Technologien

Sie listen weitere Technologien auf: "Spring Framework / Boot 3, npm, Playwright". KoliBri integriert sich nahtlos in dieses Ökosystem:

- **npm**: KoliBri ist via npm installierbar (@public-ui/\*) – genau wie Sie es für den Stack vorschlagen
- **Spring Boot**: KoliBri ist backend-agnostisch und funktioniert hervorragend mit Spring-basierten APIs
- **Playwright**: Unsere Komponenten sind vollständig testbar mit Playwright – automatisierte Tests inklusive

### Formularlösungen und Low-Code

Sie fordern "Formularlösungen mit der LIP - FMS des Bundes" im Low-Code-Bereich. KoliBri bietet barrierefreie Formular-Komponenten (Input, Select, Checkbox, Radio usw.), die sich mit LIP-FMS kombinieren lassen. Diese wiederverwendbaren Bausteine beschleunigen die Entwicklung erheblich.

### Barrierefreiheit als integriertes Querschnittsthema

Während Ihre Liste technische Lücken präzise benennt, fehlt explizit "Barrierefreiheit" als Kategorie. KoliBri integriert Barrierefreiheit in alle genannten Bereiche – WCAG 2.1 AAA-konform und BITV 2.0-konform. Nicht als separate Technologie, sondern als integriertes Merkmal jeder Komponente.

### Mein Vorschlag: KoliBri in den Deutschland-Stack aufnehmen

Um die von Ihnen identifizierte Lücke systematisch zu schließen, habe ich einen Antrag gestellt: **[Aufnahme von KoliBri – die barrierefreie Komponentenbibliothek des Bundes in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**.

---

> _Wer mehr über Public UI KoliBri erfahren möchte: [GitHub Repository](https://github.com/public-ui/kolibri)_

---

**Tags:** kolibri
