**Titel:** Feedback für die Seite /landkarte/
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/249
**Typ:** issue
**Status:** Offen
**Erstellt:** 6. November 2025 um 14:49
**Aktualisiert:** 11. November 2025 um 10:40
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 7
**Likes:** 2
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/249 -->

Ihre Analyse der "inkonsistenten Granularität" trifft ins Schwarze: Der Stack vermischt Basistechnologien, Frameworks und Meta-Frameworks. Ihre Empfehlung "Option B – Fokus auf Standards und Protokolle statt konkreter Produkte" ist genau der richtige Ansatz.

KoliBri ist ein Beispiel für Option B auf UI-Ebene: Statt Angular, React, Vue einzeln aufzulisten, bieten wir Web Components als W3C-Standard. Egal welches Framework – die 50+ Komponenten funktionieren überall. Das ist "Compliance-Kriterien definieren" statt "Technologie-Empfehlungsliste".

**KoliBri für standardbasierte Abstraktion:**

- **Standard statt Produkt**: Web Components (W3C seit 2018), nicht Framework-Liste
- **Konsistente Abstraktion**: 50+ Komponenten für alle UI-Frameworks
- **Transparente Kriterien**: WCAG 2.1, BITV 2.0 als messbare Compliance
- **Keine Abstraktions-Vermischung**: Eine Schicht, ein Standard, klare Grenzen

Ihre Option B würde auch das NuxtJS-Problem (fehlt, obwohl NextJS gelistet) lösen – Standards statt Produkte.

---

> Mehr Infos:
>
> - **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**
> - [Repository - Public UI - KoliBri](https://github.com/public-ui/kolibri)

## Beschreibung

**Feedback:** <br>Inkonsistenz zwischen Anspruch und Abstraktionsgrad

Sachstand:
Der Tech-Stack listet konkrete Technologieprodukte auf (Angular, React, Java, Python, PostgreSQL, etc.) und ordnet diese in Schichten und Gruppen ein. Dabei zeigt sich eine inkonsistente Granularität:

- 18 Programmiersprachen/Frameworks in "Entwicklung > UI-Entwicklung"
- .NET fehlt trotz weiter Verbreitung in der deutschen Verwaltung
- Teilweise werden Einzelprodukte aufgeführt (MongoDB), teilweise Standards (PostgreSQL), teilweise ganze Kategorien (Browser Engines)

Der Tech-Stack vermischt ergo drei verschiedene Abstraktionsebenen:

1. Basistechnologien: JavaScript, Python, Java
2. Bibliotheken/Frameworks: React, Angular, Vue.js
3. Meta-Frameworks: NextJS (basiert auf React), NuxtJS (fehlt, basiert auf Vue.js)

Empfehlung:
Den Tech-Stack konsequent entweder technologiespezifisch oder abstrahiert aufbauen:

Option A

- Systematische Vollständigkeit anstreben (inkl. .NET, ASP.NET Core etc.)
- Transparente Auswahlkriterien - Warum ist Technologie X enthalten, Y aber nicht?
- Regelmäßige Aktualisierung mit klarem Governance-Prozess

Option B

- Fokus auf Standards und Protokolle (OpenAPI, REST, OAuth) statt konkreter Produkte
- Kategorien statt Einzeltechnologien ("SQL-Datenbanken" statt Auflistung von 5 spezifischen)
- Compliance-Kriterien definieren, die Technologien erfüllen müssen

Begründung:
Die aktuelle Mischform erweckt den Eindruck einer unvollständigen Technologie-Empfehlungsliste, ohne die Vollständigkeitsansprüche einer solchen Liste zu erfüllen. Dies führt zu Verwirrung über den eigentlichen Zweck des Stacks.
