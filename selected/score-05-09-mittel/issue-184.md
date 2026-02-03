**Titel:** Ganzheitliche Standardisierung im Deutschland-Stack – Technologie, Architekturen und Prozesse für zukunftsfähige Fachverfahren
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/184
**Typ:** issue
**Status:** Offen
**Erstellt:** 21. Oktober 2025 um 17:16
**Aktualisiert:** 28. November 2025 um 22:08
**Autor:** Jörg Friebe (@OC000102504967)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 1
**Likes:** 7
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

**Ganzheitliche Standardisierung im Deutschland-Stack – Technologie, Architekturen und Prozesse für zukunftsfähige Fachverfahren**

Wir – die niedersächsischen kommunalen IT-Dienstleister GovConnect, HannIT, ITEBO, KDG, KDO – begrüßen die Initiative zum Deutschland-Stack und halten sie für eine gute Idee. Gleichwohl weckt sie Erinnerungen an andere Entwicklungen aus der Vergangenheit (etwa DVC, Gaia-X, Delos, ZenDIS, Phoenix, GovTech-Campus), eine Einbettung/Berücksichtigung derer Ergebnisse wäre wünschenswert.

Wir sind jedoch der Meinung, es sei essenziell, darauf hinzuweisen, dass der Erfolg einer modernen Fachverfahrensentwicklung nicht ausschließlich von der Auswahl und Standardisierung technologischer Komponenten (Technologie-Stack im engeren Sinne) abhängt. Vielmehr wird deutlich, dass neben der Festlegung gemeinsamer technischer Standards auch die Entwicklung und Etablierung konsistenter Architekturen sowie klarer Prozessleitlinien eine entscheidende Rolle spielen (unserer Meinung nach Technologie-Stack im weiteren Sinne).

Nur wenn es gelingt, diesen Dreiklang aus Technologie, Architektur und Prozessen zu realisieren, kann die Entwicklung und Integration von Fachverfahren nachhaltig, zukunftsorientiert und effizient gestaltet werden. Einheitliche Architekturen und transparente, wiederholbare Prozesse schaffen dabei die notwendige Grundlage, um Innovationen zu ermöglichen, Schnittstellenprobleme zu vermeiden und die Interoperabilität zwischen verschiedenen Lösungskomponenten sicherzustellen.

Zudem erleichtert eine gemeinsame Referenzarchitektur die Zusammenarbeit unterschiedlichster Akteure und trägt maßgeblich dazu bei, Komplexität beherrschbar zu machen. Erst durch das Ineinandergreifen dieser Aspekte entsteht im Rahmen des Deutschland-Stack ein leistungsfähiges, resilient aufgebautes Ökosystem, das langfristig die erfolgreiche Digitalisierung behördlicher Fachverfahren ermöglicht.

Wir beschäftigen uns in unserer Initiative Komm2IT ebenfalls seit einiger Zeit mit derartigen Fragestellungen. Im Zusammenhang mit dem Deutschland-Stack sehen wir zusätzlich folgende Aspekte:

* Inwieweit beziehen die Arbeiten am Deutschland-Stack die etablierten Fachverfahren, ihre Hersteller und die ihnen zugrundeliegenden Anforderungen, Architekturen und Prozesse ein? Sollen kommunale Fachanwendungen Teil des Deutschland-Stack sein?
* Berücksichtigt der Deutschland-Stack parallele Initiativen wie etwa zur Registermodernisierung, Trennung von Register und Verfahrenslogik und damit Notwendigkeit offener Schnittstellen?
* Berücksichtigt der Deutschland-Stack auch Europa-weite Initiativen wie den EuroStack?
* Soll die Initiative auch auf kommunale Belange ausgerichtet sein oder zielt sie primär auf Themen auf Bundes- bzw. Landesebene ab?
* Soll der Deutschland-Stack eine zentral oder dezentral betreibbare Infrastruktur werden? Wird/werden Dienstleister gesucht, wie wir es im Rahmen unserer Initiative Komm2IT wären?
* Wären wir dann später eher Abnehmer einer solchen vom Bund bereitgestellten Plattform?
* Wann soll eine entsprechende Lösung bereitgestellt werden? Gibt es eine Roadmap dazu?
* Wer wäre bezugsberechtigt?

Insbesondere, wenn der Deutschland-Stack auch den Charakter eines Marktplatzes für Lösungen und Lösungsbausteine annimmt, sehen wir weitere Fragestellungen:

* Wie sichern wir deutschlandweit Standardisierung, Schnittstellen und Interoperabilität einerseits und Wahlfreiheit bzw. Wettbewerb andererseits und vermeiden gleichzeitig Doppelentwicklungen?
* Welche Rolle spielen dabei Gremien wie der IT-Planungsrat?
* Wie wird das Vergaberecht berücksichtigt?
* Soll es zur Governance ein Portfoliomanagement für die Bausteine des Deutschland-Stacks und die darauf basierenden Lösungen geben? Gibt es eine Roadmap dazu? Wer kann dann zukünftig Angebote listen/bereitstellen?

Im Sinne der eingangs genannten Ziele sehen wir die im Folgenden aufgeführten Anforderungen.

**1. Anforderungen öffentlicher IT-Dienstleister an den Stack zur Entwicklung neuer Angebote und Geschäftsmodelle**

Wir benötigen für die Entwicklung zukunftsfähiger Angebote und Geschäftsmodelle vor allem einen Stack, der Offenheit, Standardisierung und Investitionssicherheit gewährleistet. Die wichtigsten Anforderungen lassen sich wie folgt zusammenfassen:

1. **Standardisierung & Schnittstellen:**
   * Verlässliche, standardisierte Schnittstellen (z. B. XÖV-Nachrichtenformate gem. XTA, OZG-Standards und OSCI) erleichtern die Entwicklung und Integration neuer Angebote und sichern die Interoperabilität zwischen verschiedenen Komponenten und Behörden, damit Integration von und Interoperabilität mit bestehenden Lösungen.
   * Einflussmöglichkeiten auf die Gestaltung / Roadmap muss für die IT-DL gegeben sein
2. **Moderne Kommunikationsprotokolle:**
   * Die Nutzung etablierter Protokolle wie REST sowie Messaging-Architekturen wie RabbitMQ ermöglichen lose gekoppelte, skalierbare und resiliente Systeme.
3. **Deployment- und Architektur-Muster:**
   * Vorgabe und Nutzung bewährter Architektur- und Deploymentmuster (z. B. Kubernetes-Helm-Charts für Deployments) schaffen Planbarkeit und Wiederverwendbarkeit.
4. **Wartbarkeit und Dokumentation:**
   * Verbindliche UML-basierte Dokumentationen und Schnittstellenbeschreibungen (z. B. Swagger/OpenAPI-basierte) erleichtern den Einstieg in neue Geschäftsmodelle und forcieren nachhaltige Wartbarkeit.
   * Keine Abhängigkeit von proprietären Lösungen.
5. **Open Source & Plattformunabhängigkeit:**
   * Einsatz von Linux, Open-Source-Formaten und offenen Standards ermöglichen flexible Entwicklung und Betrieb neuer digitaler Angebote.
6. **Verfügbarkeit & Skalierbarkeit:**
   * SLA-basierte Betriebsmodelle, Redundanzkonzepte
   * Schaffung von Finanzierungs- und Betriebsmodellen für Shared Services
7. **Observability & Security by Design**
   * Integrierte Mechanismen zur Nachvollziehbarkeit, Compliance und Cyber-Resilienz

**Vorteil:** Dies führt insgesamt zu mehr Innovationskraft, reduziert Abhängigkeiten und fördert die Entwicklung eigener Angebote auf Basis des Stacks.

---

**2. Innovationen, um die digitale Transformation umzusetzen**

Um die digitale Transformation in der Verwaltung erfolgreich zu gestalten, sollte der Stack folgende Innovationen enthalten:

1. **Zero-Trust-Sicherheitsmodell:**
   * Weg von klassischen Perimeter-Firewalls hin zu Identitäts- und zugriffsbasierter Sicherheit (z. B. Authentifizierung über OpenID Connect mit Lösungen wie Keycloak und Integration von BundID).
2. **Automatisierung & Continuous Integration:**
   * CI/CD-Pipelines sorgen für schnelle, sichere und reproduzierbare Bereitstellung von Software.
3. **Web-First-Ansatz:**
   * Konzentration auf browserbasierte Nutzeroberflächen erhöht Zugänglichkeit und Plattformunabhängigkeit.
   * Modulare, Cloud-native Architekturen, damit neue Dienste iterativ, agil und skalierbar entwickelt werden können.
4. **SBOMs (Software Bill of Materials):**
   * Transparenz über eingesetzte Softwarekomponenten stärkt IT-Sicherheit und Compliance.
5. **Testabdeckung & Mocking:**
   * Hohe Testabdeckung und gekapselte Testumgebungen (Mocks, Containerisierung) verbessern Qualität und Wartbarkeit.
   * Zugriff auf Test- und Sandbox-Umgebungen, um Prototypen zu entwickeln.
6. **Identitäten und Wallets**
   * Einheitliche Authentifizierungs- und Autorisierungsmechanismen (z. B. BundID, ELSTER-Login, ID-Wallets)
   * Sichere Identitätsverwaltung über föderierte Systeme
7. **KI-gestützte Assistenzsysteme**
   * Unterstützung für Verwaltungsprozesse, Bürgerkommunikation (Chatbots) und Entscheidungsunterstützung.

**Vorteil:** Diese Innovationen steigern Geschwindigkeit, Sicherheit und Zuverlässigkeit bei der Entwicklung digitaler Verwaltungsangebote.

---

**3. Anforderungen des Marktes für verlässliche und souveräne Nutzung**

Für eine souveräne, sichere und verlässliche Nutzung von Lösungen im Stack bestehen folgende Markanforderungen:

1. **Interoperabilität und Portabilität:**
   * Keine Abhängigkeit von proprietären Produkten oder einzelnen Anbietern (Oracle vermeiden), stattdessen offene Formate und Standards.
2. **Monitoring, Logging und Backup:**
   * Verbindliche Standardisierung und Automatisierung dieser Prozesse für einheitliches Betriebsmanagement.
3. **Kooperation mit deutschen Cloud-Providern:**
   * Fokus auf DSGVO-konforme, deutsche Lösungen (z. B. StackIT, IONOS, KDO) zur Sicherstellung von Datenschutz und Datenhoheit.
4. **Open-Source-Office-Formate und plattformunabhängige Betriebsumgebungen:**
   * Schutz vor Herstellerbindung und langfristige Verfügbarkeit.
5. **Datensouveränität und Compliance**
   * Daten müssen in Deutschland bzw. der EU verbleiben
   * Stack muss DSGVO, eIDAS, IT-SiG 3.0 und OZG-konforme Prozesse unterstützen.

**Vorteil:** Dies schafft Vertrauen, Rechtssicherheit und reduziert Abhängigkeiten von ausländischen oder proprietären Plattformen.

---

**4. Mechanismen für Dienstleister zur Integration und Verteilung**

Um Lösungen effizient zu integrieren und flächendeckend zu verteilen, werden folgende Mechanismen benötigt:

1. **Bereitstellung eindeutiger APIs und Schnittstellen:**
   * Swagger- oder OpenAPI-basierte-Dokumentation für alle APIs.
2. **Container-orientiertes Deployment:**
   * Kubernetes-Helm-Charts ermöglichen einfache Bereitstellung und Skalierung.
   * Unterstützung und Nutzung von Infrastructure as Code
3. **Standardisierte sowie automatisierte Installation und Wartung:**
   * Leitlinien und Templates für Integrationsprozesse.
   * Automatisierte Rollout- & Updateprozesse: CI/CD-Pipelines für sichere Verteilung
4. **Test- und Abnahmeumgebungen mit Mocking oder simulierten Umgebungen:**
   * Reduktion von Integrationsaufwänden und Minimierung von Fehlerquellen.

**Vorteil:** Ermöglicht eine schnelle und reibungslose Einführung neuer Services bei unterschiedlichsten Trägern/Mandanten.

---

**5. Realisierbare Mechanismen zur Entkopplung von Fachlogik, Fachdaten, Basisdiensten und Infrastruktur**

Entkopplung ist zentral, um Innovation, Flexibilität und Austauschbarkeit zu fördern:

1. **Microservices mit klaren Schnittstellen:**
   * Zustandslose und lose gekoppelte Services erhöhen die Unabhängigkeit.
   * Service-orientierte Architekturen (SOA): Trennung von Business-Logik und Datenhaltung
   * Event-getriebene Kommunikation zur losen Kopplung
2. **Trennung von Registerdaten und Fachverfahrensdaten:**
   * Ermöglicht Registermodernisierung und sichert Datenschutz.
3. **Standardisierte Infrastruktur-Komponenten:**
   * z. B. vereinheitlichte Monitoring- und Logging-Systeme entkoppeln Anwendungs- von Infrastrukturverantwortung, Infrastructure as Code
4. **UML-Dokumentation und deklarative Deployment-Beschreibungen:**
   * Architektur bleibt nachvollziehbar und formalisierbar.

**Vorteil:** Fördert Austauschbarkeit und vereinfachte Wartung, ermöglicht modulare Entwicklung.

---

**6. Best Practices und Veränderungsbedarfe für ein erfolgreiches Ökosystem des Stacks**

Best Practices und erfolgsentscheidende Faktoren (Patterns), um ein gemeinsames Ökosystem zu gestalten:

1. **Architektur- und Deploymentmuster festlegen:**
   * Beispiel: Lose Kopplung, Zustandslosigkeit, Zero Trust, kein Monolith.
   * Methoden: Etablierung von Referenzarchitekturen und Blueprints
2. **Offene Standards als Leitlinie:**
   * Beispiel: SBOM, OpenID Connect, Open Source und Office-Dateiformate.
   * Ziel: Interoperabilität
3. **Dokumentationspflicht für alle Komponenten:**
   * UML- und Schnittstellen-Dokumentation sowie Testabdeckung.
4. **Automatisierte Infrastruktur und Prozesse:**
   * CI/CD, Monitoring, Logging, Backup inklusive.
5. **Vertrauensvolle, rechtssichere Cloud-Infrastruktur:**
   * Kooperation mit zertifizierten deutschen Hyperscalern.
6. **Portabilität und Wartbarkeit:**
   * Möglichst geringe Bindung an einzelne Anbieter.
7. **Was muss sich ändern?**
   * Weg von projektbasierten Einzellösungen hin zu plattformbasierten, nachhaltigen Diensten
   * Anpassung der Vergaberegeln
   * Kultureller Wandel: Weg von Taylorismus hin zu Agilität,
   * Zusammenarbeit und Innovationsbereitschaft fördern.

**Vorteil:** Nur durch verbindliche Best Practices und klar definierte Standards entsteht ein nachhaltiges, koordiniertes und dynamisches digitales Ökosystem im Sinne des Deutschland-Stacks.

 

**Fazit**

Wir begrüßen die Initiative zum Deutschland-Stack und bringen uns gern mit Fragen zur Schärfung der Ausrichtung, mit Anforderungen aus der Praxis (sowohl bzgl. Fachlichkeit als auch zur Entwicklung von Software und deren zuverlässigem Betrieb) und als Lösungslieferant auch zum Betrieb der Plattform ein.

Bitte sprechen Sie uns an!
