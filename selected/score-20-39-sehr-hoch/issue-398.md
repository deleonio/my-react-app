**Titel:** Feedback für die Seite /beteiligung/
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/398
**Typ:** issue
**Status:** Offen
**Erstellt:** 27. November 2025 um 17:10
**Aktualisiert:** 27. November 2025 um 17:10
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

**Feedback:** <br>Die DKSR GmbH betreibt mit CIVORA eine vollständig offene, modular aufgebaute urbane Datenplattform, die in zahlreichen Städten und Regionen in Deutschland und Europa produktiv eingesetzt wird. Wir begrüßen die Initiative des Deutschland-Stacks ausdrücklich und unterstützen das Ziel, eine offene, föderale und interoperable digitale Infrastruktur für die öffentliche Verwaltung zu schaffen.
Unsere Rückmeldungen basieren auf praktischen Erfahrungen aus über 70 Smart-City- und Verwaltungsdigitalisierungsprojekten in Deutschland sowie der aktiven Entwicklung und dem Betrieb einer umfassenden Open-Source-Plattform für Datenmanagement, Integration, Analyse und urbane Anwendungen.

CIVORA erfüllt viele der Zielsetzungen des Deutschland-Stacks bereits heute — insbesondere Offenheit, konsequente Nutzung europäischer Standards (DCAT-AP, OGC-APIs), Interoperabilität, Modularität und Souveränität. Auf Basis der Analyse des veröffentlichten Tech-Stacks und der Tech-Stack-Landkarte möchten wir folgende Empfehlungen einbringen.

Zentrale Empfehlungen zur Erweiterung des Tech-Stacks

1. Aufnahme eines offenen Metadatenkatalogs (piveau)
   Begründung:
   Ein zentraler Baustein jeder digitalen Verwaltung ist ein standardkonformer Metadatenkatalog. CIVORA setzt hier auf piveau (Hub, Consus, Metrics), das vollständig Open Source ist, DCAT-AP nativ unterstützt und bereits in mehreren deutschen und europäischen Verwaltungen produktiv eingesetzt wird.
   Vorschlag:
   Ergänzung der Technologiegruppe Plattform > Daten > Datenkatalog um piveau als offene Referenzimplementierung.
   Empfehlung der DCAT-AP-Kompatibilität als Mindeststandard.

2. Aufnahme einer standardkonformen IoT-/Echtzeitdaten-Schicht (Open Urban Pulse)
   Begründung:
   Energie, Mobilität, Umwelt und Gebäudebetrieb erzeugen stetig wachsende Sensordaten. Eine IoT-/Echtzeitdatenplattform ist daher essenziell. Mit Open Urban Pulse (OUP) verfügt CIVORA über eine DIN-SPEC 91357-konforme Open-Source-Komponente, die hunderte Konnektoren zu kommunalen Sensoren, Drittplattformen und städtischer Infrastruktur umfasst.
   Vorschlag:
   Erweiterung der Kategorien Datenaufnahme, Datenintegration und Integration > Orchestrierung/Gateway um OUP bzw. vergleichbare offene IoT-Datenplattformen.
   Aufnahme eines Connector-Frameworks als empfohlener Baustein (relevant für föderal skalierbare Dateninfrastrukturen).

3. BI-, Dashboard- und Reporting-Komponente (Apache Superset)
   Begründung:
   Transparente, visualisierbare Daten sind Grundvoraussetzung für moderne Verwaltung. CIVORA nutzt Apache Superset mit Erweiterungen für Keycloak-Integration, Rollenmanagement und Link-Sharing, um Dashboards und Berichte für Verwaltungs-, Politik- und Bürgerportale bereitstellen zu können.
   Vorschlag:
   Ergänzung der Kategorien Anwendungen & Dienste > Analyse & Visualisierung bzw. Cockpit um Superset als offene Referenzlösung.
   Empfehlung eines offenen Dashboard-Frameworks mit SSO-Unterstützung.

4. Workflow- & Analytics-Orchestrierung (Apache Airflow)
   Begründung:
   Automatisierte Datenpipelines, ETL-Prozesse und analytische Workflows sind für eine Verwaltung unverzichtbar. CIVORA setzt hierfür auf Apache Airflow.
   Vorschlag:
   Ergänzung der Kategorie Low-Code / Workflow-Automatisierung um Airflow.
   Empfehlung, Workflow-Automatisierung in den Deutschland-Stack explizit als Standardfunktion vorzusehen.

5. Identitäts- und Zugriffsmanagement (Keycloak + DCAT-AP-Ressourcenmodell)
   Begründung:
   Keycloak ist de-facto-Standard im Open-Source-IAM-Bereich und auch im öffentlichen Sektor weit verbreitet. CIVORA ergänzt Keycloak um ein feingranulares Berechtigungssystem, das Datenzugriff anhand DCAT-AP-Metadaten steuert — ein zentraler Baustein für föderierte Datenräume.
   Vorschlag:
   Explizite Aufnahme von Keycloak als Referenzlösung in der Kategorie Basisdienste > Identität.
   Empfehlung eines Metadaten-basierten Berechtigungsmodells (DCAT-AP-konform) als Best Practice für verwaltungsübergreifende Datenräume.

6. Unterstützung eventgetriebener Mikroservice-Architekturen (Vert.x)
   Begründung:
   Der Betrieb moderner Verwaltungs- und IoT-Systeme erfordert nicht nur Datenintegration, sondern auch skalierbare, reaktive Verarbeitung. CIVORA nutzt Vert.x für Event-Messaging und Microservice-Kommunikation.
   Vorschlag:
   Ergänzung des Bereichs Integration / Orchestrierung um reaktive Microservice-Frameworks (z.B. Vert.x).
   Empfehlung eines interoperablen Event-Busses für föderale Systeme.

7. Geodaten und OGC-Standards
   Begründung:
   Ein Drittel aller kommunalen Daten ist geobasiert. CIVORA nutzt PostGIS, OGC-konforme APIs, rasterbasierte Analysewerkzeuge und weitere offene Standards.
   Vorschlag:
   Stärkere Betonung von OGC API Features, Tiles, Processes in der Tech-Stack-Landkarte.
   Erwähnung offener Geodatenkomponenten (PostGIS, GeoServer o.Ä).

8. Offenes, modulares Master-Frontend
   Begründung:
   CIVORA stellt ein vollständiges Open-Source-Frontend auf Basis von VueJS bereit, das als zentraler Einstiegspunkt für Daten, Anwendungen und administrative Funktionen dient.
   Vorschlag:
   Ergänzung des Bereichs Oberfläche & Zugang um modulare, komponentenbasierte Open-Source-Frontends.
   Empfehlung interoperabler Frontend-Module, die mit unterschiedlichen Plattformdiensten kombinierbar sind.

---

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/398 -->

Sie beschreiben eine umfassende Datenplattform-Architektur mit CIVORA und schlagen wichtige Erweiterungen für den Deutschland-Stack vor. Besonders Ihr Punkt 8 – "Offenes, modulares Master-Frontend" – greift ein zentrales Thema auf: Wie schaffen wir interoperable, komponentenbasierte Frontend-Lösungen?

### Die Frontend-Herausforderung

Sie erwähnen VueJS als Basis für Ihr Frontend. Das ist eine valide Wahl – aber es führt zu einer bekannten Problematik: Was passiert, wenn andere Projekte React, Angular oder Svelte einsetzen? Entsteht ein Flickenteppich inkompatibler Frontend-Lösungen, oder gibt es eine Ebene darunter, die Framework-unabhängig funktioniert?

Genau hier setzen Web Components an. Der W3C-Standard definiert Custom Elements, Shadow DOM und HTML Templates – Browser-native Funktionen, die in JEDEM Framework funktionieren. Keine Runtime-Abhängigkeit, keine Framework-Migration bei Technologiewechseln.

### Modulare Architektur + Barrierefreiheit

Ihr Feedback betont "modulare Architektur" und "interoperable Frontend-Module". Web Components sind modular by design: Jede Komponente ist ein eigenständiger Custom Element mit gekapseltem Styling (Shadow DOM) und kann in beliebige Frameworks integriert werden – React, Angular, Vue, oder reines HTML.

Die Herausforderung: Barrierefreiheit. WCAG-konforme UI-Komponenten zu entwickeln ist komplex. Genau deshalb haben wir KoliBri entwickelt: Eine Open-Source Komponentenbibliothek mit WCAG 2.1 AAA-konformen Web Components, die in allen Frameworks funktionieren.

### Ein Beispiel aus der Praxis

Stellen Sie sich vor: Die CIVORA-Plattform nutzt Vue, ein anderes Projekt Angular, ein drittes React. Mit KoliBri Web Components verwenden alle drei dieselben barrierefreien UI-Bausteine – Button, Input, Table, Navigation – ohne Code-Duplikation oder Inkompatibilitäten.

Ich habe dazu einen Antrag gestellt: **[Aufnahme von KoliBri – die barrierefreie Komponentenbibliothek des Bundes in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)** – eine Lösung, die Ihre Forderung nach "modularen, komponentenbasierten Open-Source-Frontends" mit Framework-Unabhängigkeit und Barrierefreiheit verbindet.

Falls Sie an einem Austausch zu standardisierten Frontend-Bausteinen interessiert sind, stehe ich gerne zur Verfügung.

---

> _Weitere Informationen: [KoliBri auf GitHub](https://github.com/public-ui/kolibri)_
