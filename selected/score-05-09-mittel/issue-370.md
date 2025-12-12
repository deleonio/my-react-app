**Titel:** Feedback für die Seite /beteiligung/
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/370
**Typ:** issue
**Status:** Offen
**Erstellt:** 26. November 2025 um 09:22
**Aktualisiert:** 26. November 2025 um 09:22
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 0
**Likes:** 0
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

**Feedback:** <br>V. Welche Mechanismen sind praktisch realisierbar, um eine Entkopplung von Fachlogik, Fachdaten, Basisdiensten und Infrastruktur zu ermöglichen?

1. Architektur
a) Basisdienste als eigenständige Schicht („Government as a Platform“): Wichtige Grundfunktionen (Basisdienste) – etwa Identität/Authentifizierung, Bezahlfunktionen, Signatur, Benachrichtigung – sollten zentral bereitgestellt und von Fachanwendungen nachgenutzt statt individuell implementiert werden
b) Schichten- und Domain-Architektur
c) Integrationsschicht für Interoperabilität, um Datenflüsse zwischen Systemen zu entkoppeln
d) Cloud-native DevOps-Praktiken (Containerisierung (Docker/Kubernetes), Infrastructure as Code, CI/CD, SecDevOps, multi-Cloud, Marketplace) zur Loslösung von konkreter Infrastruktur, Dev/Test/Prod Möglichkeiten / Sandboxes


2. Richtlinien/Governance-Modelle 
a) klare Trennung als auch Aufteilung von Verantwortlichkeiten zwischen Integrationsschicht und Fachlogik, Vermittlungsschicht kann Regel-konform, unterstützt durch semantische Prüfungen, agieren ohne Kenntnis der Fachlogik-Ebene/-Daten

3. API-Management
a) Einsatz von API-Gateways und standardisierten Schnittstellen zur Entkopplung und Modularisierung. 
b) Nutzung offener, dokumentierter, standardisierter Schnittstellen
c) modularer Aufbau und Technologie-agnostische Schnittstellen
e) Governance und Versionierung zur Sicherstellung der Entkopplung
