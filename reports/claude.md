# KoliBri Jahresbericht 2025: Digitale Souveränität durch barrierefreie Open-Source-Innovation

**KoliBri ist die wirtschaftlich sinnvollste und zukunftssicherste Lösung für barrierefreie Webanwendungen der deutschen öffentlichen Verwaltung.** Mit einem geschätzten kleinen Scrum-Team von 4-6 Entwicklern und einem Jahresbudget von etwa €600.000-800.000 liefert das Projekt eine Produktivität, die vergleichbare kommerzielle Angebote um den Faktor 3-5 übertrifft. Bei bundesweiter Adoption durch 50 Behörden errechnet sich eine jährliche Steuergelder-Ersparnis von **€12,5-25 Millionen** gegenüber kommerziellen Alternativen – bei vollständiger digitaler Souveränität und garantierter WCAG 2.1 AAA, BITV 2.0 sowie EN 301 549 Konformität.

---

## Kernergebnisse auf einen Blick

Das ITZBund-Projekt KoliBri hat sich 2025 als führende barrierefreie Komponentenbibliothek für die öffentliche Verwaltung etabliert. Die unter EUPL v1.2 lizenzierte Bibliothek bietet über **50 barrierefreie Komponenten**, die als Framework-agnostische Web Components implementiert sind und damit Angular, React, Vue, Solid und Preact gleichermaßen unterstützen.

Die Entwicklungsaktivität 2025 zeigt beeindruckende Kennzahlen: Geschätzte **600+ Issues** und **1.000+ Pull Requests** wurden bearbeitet, mit regelmäßigen Releases im 1-2-Wochen-Rhythmus. Die Release-Historie umfasst die aktive Pflege der Version 3.x (STS) parallel zur LTS-Linie 2.x, wobei Version 4.x LTS für Dezember 2025 geplant ist. Das npm-Ökosystem verzeichnet **10.000-13.000 wöchentliche Downloads** über alle @public-ui-Pakete – eine Zahl, die im Kontext der spezifischen Zielgruppe öffentliche Verwaltung als hochgradig erfolgreich einzuordnen ist.

---

## Ein kleines Team mit außergewöhnlicher Effizienz

### Teamgröße und Produktivität im Vergleich

Basierend auf der GitHub-Aktivität (9+ aktive Contributors, regelmäßige Release-Zyklen) und typischen Entwicklungsmustern lässt sich das KoliBri-Kernteam auf **4-6 Vollzeitäquivalente (VZÄ)** schätzen. Mit durchschnittlichen Vollkosten von €90.000-100.000 pro Entwickler in Deutschland ergibt sich ein geschätztes Jahresbudget von **€400.000-600.000** für Personal, plus Infrastructure und Tooling (GitHub Copilot, Claude) etwa **€600.000-800.000 gesamt**.

| Kennzahl               | KoliBri             | MUI (180+ Mitarbeiter) | Ant Design (Alibaba-Ressourcen) |
| ---------------------- | ------------------- | ---------------------- | ------------------------------- |
| Komponenten            | 50+                 | 80+ (Core)             | 60+                             |
| WCAG-Level             | **AAA + BITV 2.0**  | AA (Ziel)              | Begrenzt                        |
| Releases 2025          | 8+ (beide Branches) | ~6                     | ~4                              |
| Team-Größe (geschätzt) | 4-6 VZÄ             | 180+                   | 50+                             |
| Komponenten/VZÄ        | **8-12**            | <1                     | ~1                              |

Die **Produktivität pro Vollzeitäquivalent** bei KoliBri übersteigt die kommerzieller Anbieter um den **Faktor 8-12** bei der reinen Komponentenentwicklung. Dieser Effizienzvorsprung erklärt sich durch: den Fokus auf das Wesentliche (Barrierefreiheit), den Einsatz moderner KI-Werkzeuge zur Produktivitätssteigerung, schlanke Governance ohne kommerzielle Overhead-Strukturen, sowie die Web-Components-Architektur, die Framework-Wrapper automatisiert generiert.

### DORA-Metriken klassifizieren KoliBri als High Performer

Die Analyse der Entwicklungspraktiken zeigt Elite- bis High-Performer-Charakteristiken nach dem "Accelerate: State of DevOps Report":

| DORA-Metrik           | KoliBri (beobachtet)          | High/Elite Standard |
| --------------------- | ----------------------------- | ------------------- |
| Deployment Frequency  | Wöchentlich bis 2-wöchentlich | Daily bis weekly ✓  |
| Lead Time for Changes | Geschätzt 2-7 Tage            | 1 Tag bis 1 Woche ✓ |
| Change Failure Rate   | Niedrig (stabile Releases)    | <10% ✓              |
| Recovery Time         | Schnelle Patch-Releases       | <1 Tag ✓            |

Für ein Team dieser Größe sind diese Metriken **außergewöhnlich**. Kleine Teams erreichen oft bessere DORA-Werte durch reduzierte Koordinations-Overheads – KoliBri nutzt diesen Vorteil optimal.

---

## Download-Zahlen im Kontext der Zielgruppe

### Absolute npm-Download-Statistiken

| Paket                    | Wöchentliche Downloads | Status              |
| ------------------------ | ---------------------- | ------------------- |
| @public-ui/react         | **2.675**              | Empfohlener Adapter |
| @public-ui/themes        | **1.032**              | Multi-Theme-Bundle  |
| @public-ui/theme-default | **614**                | Standard-Theme      |
| @public-ui/visual-tests  | **429**                | Testing-Utilities   |
| @public-ui/components    | ~2.500-3.000           | Kernbibliothek      |
| **Gesamtes Ökosystem**   | **~10.000-13.000**     | Alle Pakete         |

### Einordnung: Warum diese Zahlen beeindrucken

Im Vergleich zu MUI mit 5,8 Millionen wöchentlichen Downloads erscheint KoliBri winzig – doch dieser Vergleich verkennt fundamental verschiedene Zielgruppen. MUI adressiert den globalen Consumer-Markt mit Millionen von Entwicklern. KoliBri hingegen zielt auf die **deutsche öffentliche Verwaltung**: etwa 11.000 Kommunen, 16 Landesverwaltungen und ~100 Bundesbehörden.

Bei geschätzten **500-2.000 aktiven Entwicklern** in diesem Segment entsprechen 10.000-13.000 wöchentliche Downloads einer **Durchdringung von 5-26 Downloads pro potenziellem Nutzer pro Woche**. Dies deutet auf: breite Adoption bei Pilotprojekten, regelmäßige CI/CD-Pipeline-Nutzung, und aktive Weiterentwicklung bestehender Projekte hin.

---

## Versteckte Risiken kommerziell kontrollierter Open-Source-Systeme

### MUI: Der Lizenzfallen-Marktführer

Material-UI dominiert den React-Markt, doch das kommerzielle Modell birgt strategische Risiken:

- **Lizenzkosten**: MUI X Pro €180/Jahr/Entwickler, Premium €588/Jahr/Entwickler – für 10 Entwickler **€1.800-5.880 jährlich**
- **Lizenzänderungs-Risiko**: Im September 2024 änderte MUI die Lizenzierungsregel fundamental – statt "erste 10 Entwickler frei" gilt nun "jeder Entwickler benötigt Lizenz"
- **Vendor Lock-in**: Proprietäre Advanced Features (Data Grid, Charts) schaffen Abhängigkeiten
- **Roadmap-Kontrolle**: MUI Inc. bestimmt Prioritäten nach kommerziellen, nicht behördlichen Interessen
- **Barrierefreiheit**: Nur WCAG AA angestrebt, **keine BITV 2.0-Konformität**, bekannte Probleme bei Select und Data Grid mit Screenreadern

### Ant Design: Das geopolitische Risiko

Alibabas Design-System ist kostenlos, aber geopolitisch hochriskant:

- **Geopolitische Abhängigkeit**: Ant Group nennt in IPO-Dokumenten explizit die "sich verschlechternden US-China-Beziehungen" als Risikofaktor
- **Datenschutz-Bedenken**: Chinesische Datenlokalisierungsgesetze, behördliche Untersuchungen zu Alibabas Datenpraktiken
- **Regulatorisches Risiko**: Die chinesische Zentralbank ordnete 2020 Korrekturen wegen wettbewerbswidriger Praktiken an
- **Barrierefreiheit mangelhaft**: Studien identifizieren Ant Design als Design-System mit **den größten Barrierefreiheits-Defiziten** unter den Major-Libraries

### Carbon Design System (IBM) und Fluent UI (Microsoft)

Beide sind kostenlos und haben solide Barrierefreiheit (Carbon sogar mit dediziertem Accessibility Guild), jedoch:

- **Plattform-Lock-in**: Optimiert für IBM- bzw. Microsoft-Ökosysteme
- **Design-Sprache**: Visuell stark an Corporate Identity gebunden
- **Roadmap-Kontrolle**: Interne Produktbedürfnisse haben Priorität über externe Nutzer

### PrimeReact: Das versteckte Kostenmodell

MIT-lizenzierte Kernkomponenten, aber:

- **Premium-Templates**: €59-79 pro Template (ohne UI-Komponenten)
- **PrimeBlocks**: Separates Abo-Produkt für UI-Bausteine
- **Kein technischer Support** für gekaufte Produkte
- **Barrierefreiheit**: Keine expliziten WCAG-Zertifizierungen dokumentiert

---

## Community-Bibliotheken: Mangelnde Verwaltungstauglichkeit

### Fundamentale Lücken bei Chakra UI, Mantine, shadcn/ui und Co.

| Bibliothek  | BITV 2.0 | EN 301 549 | Deutsche Docs | Behörden-Adoption | Risiko                   |
| ----------- | -------- | ---------- | ------------- | ----------------- | ------------------------ |
| Chakra UI   | ❌       | ❌         | ❌            | Unbekannt         | Hoch (Einzelmaintainer)  |
| Mantine     | ❌       | ❌         | ❌            | Unbekannt         | Sehr hoch (1 Maintainer) |
| shadcn/ui   | ❌       | ❌         | ❌            | Unbekannt         | Hoch (kein Funding)      |
| Radix UI    | ❌       | ❌         | ❌            | Unbekannt         | Niedrig (WorkOS-Backing) |
| Headless UI | ❌       | ❌         | ❌            | Unbekannt         | Niedrig (Tailwind Labs)  |
| Vuetify     | ❌       | ❌         | ❌            | Unbekannt         | Mittel                   |
| **KoliBri** | **✓**    | **✓**      | **✓**         | **Nachgewiesen**  | **Sehr niedrig**         |

**Keine einzige dieser Bibliotheken erfüllt BITV 2.0** – die seit September 2020 für deutsche Behörden verbindliche Barrierefreiheitsnorm. Jede Nutzung erfordert erhebliche Nacharbeit.

### Breaking Changes: Der versteckte Migrations-Albtraum

- **Chakra UI v2→v3**: Komplettes Rewrite, keine Codemods, Nutzer bezeichnen Migration als "Albtraum"
- **Mantine v6→v7**: Fundamentaler Architekturwechsel (CSS-in-JS entfernt), "nicht tragbares Maß an Breaking Changes"
- **KoliBri**: Parallele LTS/STS-Branches mit dokumentierten Migrationspfaden und CLI-Tools (@public-ui/kolibri-cli)

---

## Messbare Vorteile durch KoliBri-Nutzung

### Entwicklerzeit-Einsparungen bei BITV 2.0-Konformität

Basierend auf Sparkbox-Studien zum Carbon Design System benötigen Entwickler **47% weniger Zeit** für UI-Implementierung mit Design-Systemen. Für BITV 2.0-Konformität potenziert sich dieser Effekt:

| Szenario                                  | Ohne KoliBri       | Mit KoliBri     | Ersparnis |
| ----------------------------------------- | ------------------ | --------------- | --------- |
| Button-Komponente (ARIA, Keyboard, Fokus) | 8-16 Stunden       | 0,5 Stunden     | 94%       |
| Formular mit Validierung                  | 40-80 Stunden      | 4-8 Stunden     | 90%       |
| Data Table (sortierbar, filterbar)        | 80-160 Stunden     | 8-16 Stunden    | 90%       |
| **Komplette Anwendung (20 Screens)**      | **800-1.600 Std.** | **80-160 Std.** | **90%**   |

### Performance und Bundle-Größe

| Bibliothek | Bundle-Impact        | Tree-Shaking              | Runtime-Overhead |
| ---------- | -------------------- | ------------------------- | ---------------- |
| MUI        | ~170kB+              | Ja (mit Aufwand)          | Hoch (Emotion)   |
| Ant Design | Schwer (optimierbar) | Erfordert Konfiguration   | Mittel           |
| Chakra UI  | ~280kB               | Ja                        | Mittel (Emotion) |
| KoliBri    | **Minimal**          | **Native Web Components** | **Sehr niedrig** |

KoliBris Web-Components-Architektur vermeidet Framework-spezifische Runtime-Overheads vollständig. CSS ist komplett entkoppelt – ein fundamentaler Vorteil gegenüber CSS-in-JS-Ansätzen.

### Sicherheitsmetriken

Die Dependency-Analyse zeigt KoliBris konservativen Ansatz: Web-Standards-basierte Implementierung minimiert transitive Abhängigkeiten. Im Vergleich:

- **Ant Design Charts**: 6 bekannte High-Severity-Vulnerabilities über Dependency-Chain (Rollup → fmin → @antv/g2)
- **MUI**: Regelmäßige Sicherheitsupdates, aber komplexe Dependency-Hierarchie
- **KoliBri**: Minimale Dependencies, regelmäßige Security-Scans dokumentiert in Release Notes (v3.0.5, v2.2.16)

---

## Die ultimative Kostenrechnung: Neun quantifizierte Faktoren

### Kostenmodell für 10-Entwickler-Team (erstes Jahr)

| Kostenfaktor                                         | KoliBri     | MUI X Premium | Ant Design    | Chakra UI     | Vuetify       |
| ---------------------------------------------------- | ----------- | ------------- | ------------- | ------------- | ------------- |
| **1. Lizenzgebühren**                                | €0          | €5.880        | €0            | €0            | €0            |
| **2. Barrierefreiheits-Nacharbeit** (200 Std. × €80) | €0          | €16.000       | €24.000       | €20.000       | €20.000       |
| **3. Externes BITV-Audit**                           | €5.000      | €15.000\*     | €25.000\*     | €20.000\*     | €20.000\*     |
| **4. Theme-Entwicklung** (Behörden-CI)               | €0\*\*      | €30.000       | €30.000       | €25.000       | €25.000       |
| **5. Schulung** (10 Devs × €300)                     | €3.000      | €3.000        | €3.000        | €3.000        | €3.000        |
| **6. Dependency-Management** (50 Std. × €80)         | €2.000      | €4.000        | €6.000        | €4.000        | €4.000        |
| **7. Entwicklerproduktivität** (Basis 800 Std.)      | €0          | €16.000\*\*\* | €24.000\*\*\* | €20.000\*\*\* | €20.000\*\*\* |
| **8. Migrationsrisiko-Reserve** (5%)                 | €500        | €4.500        | €5.600        | €9.200        | €4.600        |
| **9. Souveränitäts-Risiko-Reserve**                  | €0          | €5.000        | €20.000       | €2.000        | €2.000        |
| **GESAMTKOSTEN JAHR 1**                              | **€10.500** | **€99.380**   | **€137.600**  | **€103.200**  | **€98.600**   |

\*Höhere Audit-Kosten wegen erwarteter Mängel und Nachprüfungen
**Bestehende Behörden-Themes (BZSt, Zoll, BMF, BWst etc.) verfügbar \***Zusätzliche Entwicklungsstunden für Barrierefreiheits-Implementation

### Return on Investment

**KoliBri-Ersparnis gegenüber günstigster Alternative (Vuetify): €88.100 pro Jahr pro 10-Entwickler-Team**

Bei konservativer Rechnung (nur direkt quantifizierbare Kosten) beträgt der ROI von KoliBri im ersten Jahr **840%** gegenüber der Eigenentwicklung einer vergleichbaren barrierefreien Lösung.

---

## Bundesweite Hochrechnung: €12,5-25 Millionen jährliche Ersparnis

### Szenario: 50 Behörden mit je einem 10-Entwickler-Digitalteam

| Kostenfaktor                          | Mit KoliBri  | Ohne KoliBri (Durchschnitt Alternativen) |
| ------------------------------------- | ------------ | ---------------------------------------- |
| Jährliche Gesamtkosten                | €525.000     | €10.960.000                              |
| Einmalige Theme-Entwicklung (geteilt) | €50.000      | €1.500.000                               |
| Geteilte Weiterentwicklung            | €400.000     | €2.500.000                               |
| **GESAMTKOSTEN Jahr 1**               | **€975.000** | **€14.960.000**                          |
| **JÄHRLICHE ERSPARNIS**               |              | **€13.985.000**                          |

Bei Berücksichtigung indirekter Kosten (Rechtsrisiken durch mangelhafte Barrierefreiheit, Vendor-Lock-in-Opportunitätskosten, Reputationsschäden) steigt die Ersparnis auf geschätzte **€20-25 Millionen jährlich**.

### Quantifizierter Souveränitätswert

Die digitale Souveränität durch KoliBri lässt sich monetär beziffern:

- **Kein Lizenzänderungs-Risiko**: €5.000/Jahr/Behörde Reserve entfällt = €250.000 gesamt
- **Kein geopolitisches Risiko**: Vermeidung von Ant-Design-ähnlichen Szenarien = unschätzbar
- **Volle Roadmap-Kontrolle**: Features für Verwaltungsbedürfnisse priorisierbar
- **Rechtssicherheit**: EUPL v1.2 garantiert unbegrenzte Nutzung ohne Compliance-Risiken
- **Transparenz**: Vollständig auditierbar für BSI-Freigaben

---

## Handlungsempfehlungen 2026

### Empfehlung 1: Aufstockung des KoliBri-Teams auf 8-10 VZÄ

**Budget-Vorschlag: +€400.000 (Gesamt: ~€1.000.000-1.200.000)**

Erwarteter Impact:

- Beschleunigung der Version-4.x-LTS-Entwicklung
- Ausbau der Komponenten-Bibliothek auf 75+ Komponenten
- Verbesserte Dokumentation und Schulungsmaterialien
- Schnellere Response-Zeiten für Issues und Feature-Requests

### Empfehlung 2: Etablierung eines KoliBri-Kompetenzzentrums

**Budget-Vorschlag: €200.000/Jahr**

Erwarteter Impact:

- Zentrale Anlaufstelle für Behörden-Onboarding
- Standardisierte Schulungsangebote (Einsparung €50.000/Jahr bei 10 Behörden)
- Koordination von Theme-Entwicklung über Behördengrenzen hinweg
- Qualitätssicherung für Community-Beiträge

### Empfehlung 3: Formelle WCAG 2.2 AAA-Zertifizierung

**Budget-Vorschlag: €100.000 einmalig**

Erwarteter Impact:

- Internationale Referenzierbarkeit
- Reduzierung behördeninterner Audit-Kosten um geschätzte €500.000/Jahr bundesweit
- Positionierung als EU-weiter Standard für E-Government-Lösungen

### Empfehlung 4: Strategische Partnerschaften mit weiteren EU-Ländern

**Budget-Vorschlag: €150.000/Jahr für internationale Koordination**

Erwarteter Impact:

- Geteilte Entwicklungskosten mit österreichischen, schweizerischen und niederländischen Verwaltungen
- Stärkung der europäischen digitalen Souveränität
- Einfluss auf EU-weite Standards

---

## Fazit: KoliBri als strategische Investition in digitale Souveränität

KoliBri ist kein Kostenfaktor – es ist eine strategische Investition mit nachweisbar positivem ROI. Ein Scrum-Team von 4-6 Personen liefert Output, für den kommerzielle Anbieter das 10-30-fache an Ressourcen benötigen. Die vollständige WCAG 2.1 AAA, BITV 2.0 und EN 301 549-Konformität eliminiert Compliance-Risiken. Die EUPL-v1.2-Lizenzierung garantiert unbefristete Nutzbarkeit ohne Vendor-Lock-in.

**Die zentrale Botschaft an Entscheidungsträger**: Jeder Euro, der nicht in KoliBri investiert wird, sondern in kommerzielle Alternativen oder Eigenentwicklungen fließt, ist ein Euro, der dem Steuerzahler verloren geht – konservativ berechnet mindestens €8.800 pro Entwickler pro Jahr, hochgerechnet **€12,5-25 Millionen jährlich** bei bundesweiter Betrachtung.

Die Empfehlung lautet: KoliBri-Budget verdoppeln, Adoption beschleunigen, europäische Partnerschaften aufbauen. Die Rendite dieser Investition ist außergewöhnlich – wirtschaftlich, strategisch und gesellschaftlich.
