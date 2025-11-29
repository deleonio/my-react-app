**Titel:** Feedback /Tech Stack
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/248
**Typ:** issue
**Status:** Offen
**Erstellt:** 6. November 2025 um 12:59
**Aktualisiert:** 28. November 2025 um 10:06
**Autor:** Dirk Ott (@OC000106001399)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 0
**Likes:** 2
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

Wir sehen u.a. folgende Bedarfe aus GitLab Sicht:

\*\***Lücke: Source Code Management (SCM)**\
\*\*Empfehlung: Ergänzung eines Code Repositories (Quellcodeverwaltung). Dem Stack fehlt ein Versionskontrollsystem - Ergänzung um Source Code Management Tools. \
Begründung: Dies ist notwendig, um eine "Single Source of Truth" zu etablieren, die als Datengrundlage für die aufgelisteten CI/CD-Tools (wie GitLab/Flux/Spinnaker/Jenkins) dient.

**Lücke: Application Security (AppSec)**\
Empfehlung: Integration von Application Security Testing (AST) welche in der bestehende Kategorie 'Sicherheit' fehlt.\
Begründung: Der Stack sollte eine vollständige **DevSecOps-Suite** (SAST, DAST, Dependency Scanning, Container Scanning, Secret Detection, IaC Scanning) beinhalten, die direkt in den Entwicklungs-Workflow integriert ist. Dies ermöglicht Shift Left Security, mit deren Hilfe so mehr Sicherheit und Einhaltung von Regulatorik eingehalten werden kann.

**Lücke: Project & Portfolio Management (PM)**\
Empfehlung: Es ist zwar nicht direkt notwendig für die pure Software Entwicklung jedoch ist es schwer denkbar ohne Project Management Software agile Software zu entwickeln: Ergänzung einer Planungsplattform (Projekt & Portfolio). Dem Stack fehlen Tools für Issue Tracking, agile Planung oder Roadmapping.\
Begründung: Dies ermöglicht eine durchgängige Rückverfolgbarkeit von Anforderungen – wahrscheinlich eine wesentliche Anforderung für die Auditierbarkeit.  Dies hilft dazu auch bei der Auditierbarkeit, weshalb es höchstwahrscheinlich für Nutzer auch hilfreich wäre etwas im Deutschland Stack einzusehen.\
**\
Lücke: Compliance & Governance**\
Empfehlung: Aufbau eines Audit Trail (Compliance & Governance). Es fehlen Compliance-Frameworks, Richtlinienmanagement, Funktionstrennung und Audit Trails.\
Begründung: Dies stellt Funktionen wie Audit Events, Compliance-Dashboards & Frameworks sowie Merge-Request-Freigaben/Sign-offs bereit, die den Anforderungen an eine Nachweisführung entsprechen.

**Lücke: Software Supply Chain Security (SSCS)**\
Empfehlung: Es scheint als ob hier keine Technologie genannt wird, welche SCSS adressiert. Häufig ist dies eine regulatorische Anforderung und entsteht typischerweise im Entwicklungsprozess, weshalb es hier auch für Nutzer sinnvoll wäre: Schaffung einer Software-Lieferkette. Es fehlen SBOM-Formate und Herkunftsnachweise/Attestierungen.\
Begründung: Dies ermöglicht die Erstellung von SBOMs und unterstützt die Erfüllung regulatorischer Erwartungen.

Die Frage hinsichtl. OnPremise sowie AirGapped Nutzung/Zugriffe sollte mit eingezogen werden.
