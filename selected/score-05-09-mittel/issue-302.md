**Titel:** Feedback zum Tech-Stack
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/302
**Typ:** issue
**Status:** Offen
**Erstellt:** 19. November 2025 um 06:20
**Aktualisiert:** 28. November 2025 um 20:48
**Autor:** Bjoern Kirchhof (@OC000105951719)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 2
**Likes:** 2
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

**Plattform:**

## Integration ergänzen mit CILIUM

Im Rahmen des Beteiligungsprozesses zum Deutschland Stack des BMDS schlagen wir vor, das Open-Source-Projekt Cilium als integraler Baustein im Tech-Stack zu positionieren. Cilium basiert auf der eBPF-Technologie, die eine programmierbare und leistungsstarke Netzwerk- sowie Sicherheitsinfrastruktur direkt im Linux-Kernel ermöglicht. Dadurch sind feingranulare, anwendungsorientierte Sicherheitssteuerungen möglich, die über klassische IP-basierte Ansätze hinausgehen, sowie eine nahtlose Integration in Kubernetes-Umgebungen.

Mit Cilium lassen sich moderne Cloud-native Umgebungen effizient vernetzen, absichern und überwachen. Dies ist besonders für die Skalierbarkeit und Performance von Microservices-Architekturen relevant. Zu den fortschrittlichen Funktionen von Cilium zählen Multicluster- und Multicloud-Unterstützung, transparente Verschlüsselung sowie die Integration von Service-Mesh-Lösungen, was eine flexible und zukunftssichere Infrastruktur gewährleistet.

Durch die Einbindung von Cilium wird eine sichere, skalierbare und beobachtbare Container-Netzwerkarchitektur im Deutschland Stack ermöglicht, die die Anforderungen an moderne, cloud-native Plattformen im öffentlichen Sektor optimal erfüllt.

## KI ergänzen um AGNTCY

Im Rahmen des Beteiligungsprozesses zum Deutschland Stack des BMDS schlagen wir vor, das Open-Source-Projekt AGNTCY als wesentlicher Baustein im Tech-Stack für Künstliche Intelligenz (KI) zu positionieren. AGNTCY bildet die Grundlage für das „Internet of Agents“ und stellt eine offene, kollaborative Plattform dar, die es ermöglicht, agentenbasierte Workflows und Multi-Agenten-Software zu entwickeln, zu betreiben und zu verwalten.

 Die Architektur von AGNTCY umfasst mehrere Schichten: eine semantische Schicht zur Datenanpassung und Workflow-Steuerung, eine syntaktische Schicht mit standardisierten Protokollen für Agentenkommunikation sowie eine Messaging-Schicht, die sichere, latenzarme und skalierbare Interaktionen zwischen Agenten ermöglicht. Diese Infrastruktur unterstützt die sichere Identitätsverwaltung, feingranulare Zugriffskontrollen und umfassende Observability- und Evaluationsmechanismen für Multi-Agenten-Systeme.

Für den Deutschland Stack bedeutet dies, dass AGNTCY als integraler Bestandteil eine flexible, sichere und skalierbare Plattform für die Orchestrierung und Zusammenarbeit von KI-Agenten bereitstellt. Dies fördert die Interoperabilität verschiedener Agenten und Frameworks, unterstützt komplexe, autonome KI-Workflows und ermöglicht eine effiziente Integration in bestehende und zukünftige KI-Ökosysteme im öffentlichen Sektor.

Betrieb:

## Entwicklung ergänzen mit OpenTelemetry

Im Rahmen des Beteiligungsprozesses zum Deutschland Stack des BMDS schlagen wir vor, das Open-Source-Projekt OpenTelemetry als zentraler Baustein im Tech-Stack für den sicheren Betrieb zu positionieren. OpenTelemetry stellt eine umfassende Sammlung von Tools, APIs und SDKs dar, die es ermöglichen, Telemetriedaten wie Metriken, Logs und Traces zu instrumentieren, zu generieren, zu sammeln und zu exportieren. Dies unterstützt die Analyse der Software-Performance und des Verhaltens über verschiedene Umgebungen hinweg und fördert eine ganzheitliche Full-Stack-Observability. Die Architektur von OpenTelemetry umfasst unter anderem den OpenTelemetry Collector, der als Protokollübersetzer fungiert und eine flexible Integration in diverse Backend-Systeme ermöglicht. Die breite Unterstützung durch eine große Community und die Vermeidung von Vendor-Lock-in sind weitere wesentliche Vorteile, die OpenTelemetry zu einem strategisch wichtigen Bestandteil im Entwicklungs-Stack machen.

Entwicklung ergänzen mit Project CodeGuard

Im Rahmen des Beteiligungsprozesses zum Deutschland Stack des BMDS schlagen wir vor, das Open-Source-Projekt CodeGuard als essenzieller Baustein im Tech-Stack für Entwicklung zu positionieren. CodeGuard ist ein von Cisco initiiertes, modellunabhängiges Sicherheitsframework, das darauf abzielt, „Secure-by-Default“-Praktiken direkt in die Workflows von KI-gestützten Code-Generierungstools zu integrieren.

Das Framework stellt umfassende Sicherheitsregeln und -standards bereit, nach denen KI-Assistenten automatisch sicheren Code generieren und bestehende Codebasen auf Schwachstellen überprüfen können. Dabei werden unter anderem Risiken wie hartkodierte Geheimnisse, unzureichende Eingabevalidierung und veraltete Verschlüsselungsmethoden adressiert – basierend auf etablierten Industriestandards wie OWASP und CWE.

Durch die Integration von CodeGuard in den Entwicklungsprozess des Deutschland Stacks können potenzielle Sicherheitslücken frühzeitig erkannt und vermieden werden. Dies verbessert die Qualität und Sicherheit des generierten Codes und erhöht die Widerstandsfähigkeit der eingesetzten Anwendungen. Die Offenheit des Projekts sowie die Möglichkeit zur Mitwirkung der Community gewährleisten zudem eine kontinuierliche Weiterentwicklung und schnelle Anpassung an neue Bedrohungslagen.

## Sicherheit ergänzen mit eBPF , TETRAGON, SNORT, ClamAV, MAC-Sec

Im Rahmen des Beteiligungsprozesses zum Deutschland Stack des Bundesministeriums für Digitales und Staatsmodernisierung (BMDS) schlagen wir vor, die Open-Source-Projekte TETRAGON, eBPF, SNORT und ClamAV als essenzielle Bausteine im Tech-Stack für die Security zu positionieren. Sie tragen maßgeblich zur Stärkung der digitalen Souveränität, Interoperabilität und Vertrauenswürdigkeit der zukünftigen Technologieplattform für die deutsche Verwaltung bei.

1\. eBPF (extended Berkeley Packet Filter) als Basistechnologie: eBPF ist eine revolutionäre Technologie im Linux-Kernel, die es ermöglicht, sandboxed Programme sicher und effizient direkt im Kernel-Space auszuführen, ohne den Kernel-Quellcode modifizieren oder Kernel-Module laden zu müssen. Es bietet eine privilegierte Möglichkeit zur Implementierung von Observability-, Security- und Netzwerkfunktionen. eBPF ist entscheidend für die Echtzeit-Bedrohungserkennung und Compliance, indem es Programme an Kernel-Hooks (z.B. Systemaufrufe, Tracepoints, Kprobes) bindet. Es ermöglicht die Durchsetzung dynamischer, feingranularer Sicherheitsrichtlinien direkt im Kernel, was über passive Protokollierung hinausgeht und beispielsweise die Blockierung unautorisierter Prozesse oder des Datenverkehrs in Echtzeit erlaubt. Diese Fähigkeit ist von hoher Relevanz für Audits und die Einhaltung von Standards wie ISO 27001, PCI DSS oder NIST 800-53. 

2\. TETRAGON für Cloud-native Laufzeitsicherheit: TETRAGON ist ein Open-Source-, Kubernetes-natives Tool zur Sicherheits-Observability und Laufzeitdurchsetzung, das auf eBPF basiert und vom Cilium-Projekt entwickelt wird. Es ermöglicht Sicherheitsteams, System- und Netzwerkaktivitäten in Echtzeit zu überwachen, bösartiges Verhalten zu erkennen und Richtlinien dynamisch durchzusetzen, ohne den Anwendungscode ändern zu müssen. TETRAGON bietet tiefe Einblicke in Prozessaktivitäten, Container-Lebenszyklusereignisse, Dateizugriffe und Netzwerkkommunikation. Seine Anwendungsfälle umfassen die Erkennung unerwarteter Prozessausführungen, die Durchsetzung von Laufzeitrichtlinien (z.B. Blockieren unautorisierter Binärdateien), die Verfolgung von Systemaufrufen und die Korrelation von Ereignissen mit Kubernetes-Metadaten. Die Integration von TETRAGON unterstützt die Einhaltung von Compliance-Standards wie SOC 2, HIPAA, GDPR und PCI DSS.

3\. SNORT als Intrusion Detection/Prevention System (IDS/IPS): SNORT ist ein führendes Open-Source Intrusion Prevention System (IPS) und ein leistungsstarkes Intrusion Detection System (IDS). Es ermöglicht die Echtzeit-Analyse des Netzwerkverkehrs und die Protokollierung von Datenpaketen. Mittels einer regelbasierten Sprache, die Anomalie-, Protokoll- und Signaturinspektionsmethoden kombiniert, erkennt SNORT eine Vielzahl von Bedrohungen, darunter Würmer, Angriffsversuche auf Schwachstellen, Port-Scans und andere verdächtige Aktivitäten wie DoS/DDoS-Angriffe. SNORT kann auch inline eingesetzt werden, um bösartige Pakete zu blockieren. Seine breite Akzeptanz und die Unterstützung durch eine große Community, einschließlich der Bereitstellung von Regelsätzen durch Cisco Talos, unterstreichen seine Reife und Effektivität.

4\. ClamAV für Malware-Erkennung: ClamAV ist ein Open-Source-Antivirus-Toolkit, das speziell für das Scannen von E-Mails an Mail-Gateways konzipiert wurde, aber auch für Web-Scanning und Endpoint-Sicherheit eingesetzt wird. Es bietet eine flexible und skalierbare Architektur mit einem Multi-Thread-Daemon, einem Kommandozeilen-Scanner und automatischen Datenbank-Updates. ClamAV ist in der Lage, Millionen von Viren, Würmern, Trojanern und anderer Malware, einschließlich Microsoft Office Makroviren und mobiler Malware, zu erkennen. Es unterstützt das Scannen innerhalb von Archiven und komprimierten Dateien und bietet Echtzeitschutz auf Linux-Systemen mit On-Access-Scanning und -Prävention. Die Verwendung von ClamAV durch Regierungsbehörden (z.B. die Erwähnung einer DoD-Zulassung) bestätigt seine Eignung für den Einsatz im öffentlichen Sektor.

5\. MACsec (Media Access Control Security) ist ein IEEE 802.1AE-Standard zur Sicherung von Ethernet-Verbindungen und bietet folgende Vorteile: 

* **Umfassende Sicherheit auf Schicht 2:** Gewährleistet Vertraulichkeit, Datenintegrität und Authentifizierung für den gesamten Ethernet-Verkehr, inklusive ARP, DHCP und VLAN-Header.
* **Schutz vor vielfältigen Angriffen:** Schützt effektiv vor Abhören, Man-in-the-Middle, Datenmanipulation, Replay-Angriffen und Spoofing.
* **Hohe Leistung und geringe Latenz:** Ermöglicht den Betrieb mit voller Verbindungsgeschwindigkeit durch Hardware-Implementierung, was die CPU entlastet.
* **Skalierbarkeit und Transparenz:** Skalierbar für verschiedene Netzwerkgrößen und transparent für Anwendungen höherer Schichten.
* **Flexible Bereitstellung und sichere Schlüsselverwaltung:** Sichert Punkt-zu-Punkt-Verbindungen und nutzt MKA für den sicheren Schlüsselaustausch.
* **Kompatibilität:** Kann mit anderen Sicherheitsprotokollen kombiniert werden.

Zusammenfassende Positionierung: Die Integration von eBPF als grundlegende Technologie, TETRAGON für die Laufzeitsicherheit in Cloud-nativen Umgebungen, SNORT zur Netzwerk-Intrusion Detection und -Prevention sowie ClamAV zur Malware-Erkennung und MAC-Sec zur Media Access Kontrolle schafft eine robuste, vielschichtige und offene Sicherheitsarchitektur für den Deutschland Stack. Diese Kombination ermöglicht eine umfassende Überwachung, Erkennung und Abwehr von Cyberbedrohungen auf verschiedenen Ebenen des Tech-Stacks, von der Kernel-Ebene bis zur Anwendungsebene, und unterstützt somit die Realisierung einer sicheren und souveränen digitalen Verwaltungsinfrastruktur.

## Inbetriebnahme ergänzen mit OpenSSF

Im Rahmen des Beteiligungsprozesses zum Deutschland Stack des Bundesministeriums für Digitales und Staatsmodernisierung (BMDS) schlagen wir vor, das Open-Source-Projekt OpenSSF (Open Source Security Foundation) als strategischer Baustein für die sichere Inbetriebnahme zu integrieren. 

OpenSSF, eine Initiative unter dem Dach der Linux Foundation, zielt auf die nachhaltige Verbesserung der Sicherheit von Open-Source-Software (OSS) ab. Angesichts der zentralen Rolle von OSS in IT-Infrastrukturen ist deren Sicherheit für den Deutschland Stack essenziell.

**OpenSSF trägt dazu bei durch:**

* **Scorecards:** Automatisierte Sicherheitsbewertungen von Open-Source-Projekten.
* **SLSA:** Sicherstellung der Herkunft und Integrität von Software-Lieferketten.
* **Alpha-Omega:** Identifikation und Behebung kritischer Schwachstellen.
* **SBOM:** Förderung von Transparenz über Softwarekomponenten.
* **Best Practices & Schulungen:** Vermittlung von Sicherheitswissen und Standards.

Durch die Umsetzung der OpenSSF-Standards und -Tools werden Softwaresicherheit und Betriebsstabilität des Deutschland Stacks verbessert und die digitale Souveränität gestärkt.

Infrastruktur:

## Transport ergänzen um HTTPS

Im Rahmen des Beteiligungsprozesses zum Deutschland Stack des Bundesministeriums für Digitales und Staatsmodernisierung (BMDS) schlagen wir vor, den Standard HTTPS (Hypertext Transfer Protocol Secure) als fundamentalen Baustein für den Transport aufzunehmen. Wesentliche Maßnahmen sind die Verwendung aktueller TLS-Versionen (z.B. TLS 1.3), die Vermeidung unsicherer Vorgängerversionen sowie die Implementierung von HTTP Strict Transport Security (HSTS), um ausschließlich sichere Verbindungen zu erzwingen. SSL/TLS-Zertifikate, ausgestellt von vertrauenswürdigen Zertifizierungsstellen, gewährleisten zusätzlich die Echtheit der Kommunikationspartner.

Die konsequente Umsetzung von HTTPS ist entscheidend für eine sichere, interoperable und souveräne digitale Verwaltung. Sie schafft eine vertrauenswürdige Kommunikationsbasis und schützt sensible Daten vor unbefugtem Zugriff und Manipulation, wobei zu beachten ist, dass HTTPS primär die Verbindung sichert und nicht vor allen Cyberrisiken schützt.

## Verteilung ergänzen mit SRv6

Im Rahmen des Beteiligungsprozesses zum Deutschland Stack des Bundesministeriums für Digitales und Staatsmodernisierung (BMDS) schlagen wir vor, SRv6 (Segment Routing über IPv6) als strategischer Baustein für die sichere Verteilung zu integrieren. 

SRv6 (Segment Routing over IPv6) bietet eine Vielzahl von Vorteilen, welche die Netzwerkinfrastruktur erheblich verbessern und für zukünftige Anforderungen rüsten:

SRv6 reduziert die Komplexität der Kontrollebene, da es die Notwendigkeit für mehrere Legacy-Protokolle wie LDP (Label Distribution Protocol), RSVP-TE (Resource Reservation Protocol - Traffic Engineering) und BGP-LU (BGP Label Unicast) eliminiert. Dies führt zu einer einfacheren Verwaltung und schnelleren Bereitstellung von Netzwerkdiensten.

Durch die effiziente Nutzung des IPv6-Adressraums ermöglicht SRv6 die Kodierung komplexer Pfade und Funktionen, was eine beispiellose Skalierbarkeit bietet. Es unterstützt auch die Zusammenfassung von Locators, was die Skalierbarkeit in großen Netzwerken verbessert. SRv6 bettet Routing-Anweisungen direkt in die IPv6-Paket-Header (Segment Routing Header - SRH) ein. Dies ermöglicht eine hochflexible Netzwerkprogrammierung, detailliertes Traffic Engineering, Service Chaining und die Anpassung von Diensten an spezifische Anforderungen. SRv6 arbeitet nativ auf einem IPv6-Datenpfad und nutzt dessen umfassenden Adressraum sowie erweiterte Funktionen voll aus. Es bietet fortschrittliche Funktionen für die Pfadauswahl, Lastverteilung (durch die Nutzung von Flow Labels) und Ressourcenoptimierung, was eine effizientere Nutzung der Netzwerkkapazitäten ermöglicht. SRv6 ermöglicht eine verbesserte Integration mit Cloud-Diensten und unterstützt die Entkopplung von Anwendungen und Trägernetzwerken, was die Agilität in Cloud-Umgebungen erhöht.

Die Technologie ist darauf ausgelegt, die anspruchsvollen Anforderungen von 5G-, IoT- und Cloud-Diensten an Skalierbarkeit, Wartbarkeit, Determinismus und Stabilität zu erfüllen. SRv6 kann schrittweise in bestehende Netzwerke integriert werden, da es mit herkömmlichen IPv6-Geräten kompatibel ist und Pakete auch durch nicht-SRv6-fähige Transit-Router transportiert werden können. Durch die Konsolidierung von Funktionen in einem einzigen Protokoll wird die Anzahl der im Netzwerk benötigten Protokolle erheblich reduziert.

Durch die Nutzung von SRv6 wird der Automatisierungsgrad des Deutschland Stack erhöht, Komplexität reduziert und bietet darüber hinaus die Möglichkeit einer inkrementellen Einführung in den jeweiligen Projektphasen.
