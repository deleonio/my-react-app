**Titel:** Feedback für die Seite /
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/325
**Typ:** issue
**Status:** Offen
**Erstellt:** 21. November 2025 um 09:59
**Aktualisiert:** 21. November 2025 um 16:39
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

## Beschreibung

**Feedback:** <br>Enclaive Stellungnahme zum Deutschland-Stack

Das Fundament für Deutschlands digitale Souveränität
Stellungnahme von enclaive zur technologischen Ergänzung des Deutschland-Stack

Der Deutschland-Stack ist ein wichtiger Schritt, um eine nationale, souveräne Technologieplattform für Bund, Länder und Kommunen auf Basis offener Standards und vertrauenswürdiger Technologien zu schaffen. Wir unterstützen diese Initiative daher uneingeschränkt.
Aus Sicht von enclaive besteht allerdings insbesondere im Bereich der Sicherheitstechnologien noch Konkretisierungsbedarf. Die bisherige Fokussierung auf interoperable Architekturbausteine für Cloud- und Softwarelösungen sowie Sicherheitsstandards ist sinnvoll, doch die technische Basis für echte Datensouveränität bleibt bislang offen. Gerade in Bezug auf die Datenverarbeitung sehen wir eine große Sicherheitslücke.

Für eine sichere Digitalisierung in Deutschland und die Vertraulichkeit hochsensibler Daten von Bürgern und Behörden plädieren wir daher dafür, Confidential Computing als grundlegende Querschnittstechnologie in den Deutschland-Stack zu integrieren.

Confidential Computing: Ein Überblick
Confidential Computing löst ein seit langer Zeit bestehendes Problem der IT-Sicherheit: Während Daten im Ruhezustand (at rest) und bei der Übertragung (in transit) bereits zuverlässig verschlüsselt werden können, bleiben sie während der Verarbeitung (in use) bislang ungeschützt. Hier haben externe Angreifer, privilegierte Insider oder auch der Cloud-Provider nach wie vor Zugriff. 

Confidential Computing verschlüsselt Daten dagegen in allen drei Dimensionen durch isolierte Ausführungsumgebungen direkt auf der CPU. In diesen hardware-basierten „Enklaven“ lassen sich Daten vertraulich verarbeiten und nicht-autorisierter Zugriff – selbst durch Administratoren oder Cloud-Provider – effektiv verhindern. Die zentralen Sicherheitsmechanismen bestehen in der geschützten Verwaltung der Schlüssel sowie der Attestation, die über kryptografische Zertifikate nachweist, dass die Enklaven nicht manipuliert wurden. Der zusätzliche Rechenaufwand liegt im niedrigen einstelligen Bereich, ist also vernachlässigbar.

Auch das BSI empfiehlt Confidential Computing im neuen C5-Katalog von 2025 ausdrücklich als Sicherheitsmaßnahme für hochsensible Cloud-Workloads. Zudem kommt die Technologie bereits in Pilotprojekten der öffentlichen Hand zum Einsatz – unter anderem bei der elektronischen Patientenakte oder im Innovationswettbewerb Register-as-a-Service von GovTech Deutschland. Als Open-Source-Technologie ist Confidential Computing geeignet, sich in verschiedenste Infrastrukturen und Plattformen – auch den Deutschland-Stack – zu integrieren.

Umsetzung in der Praxis
Auf Basis von Confidential Computing lassen sich verschiedene praxisnahe Sicherheitslösungen umsetzen. Wir möchten dies hier kurz anhand einiger unserer eigenen Lösungen demonstrieren:
Confidential Virtual Machines (wie enclaive Buckypaper) und Confidential Kubernetes (wie enclaive Dyneemes) sind die Grundlage für den Schutz sensibler Datenbanken, Anwendungen und Container-Workloads in der Cloud. Post-Quanten-Verschlüsselung stellt dabei langfristige Sicherheit gegen heutige „store now, decrypt later“-Attacken und künftige Angriffsvektoren sicher. Die Einrichtung und Verwaltung der Enklaven über verschiedene Cloud-Provider hinweg ist über eine zentrale Plattform (wie die enclaive Multi Cloud Platform) möglich und verhindert effektiv Anbieterabhängigkeiten.
Ein unabhängiges, virtuelles Schlüsselmanagement (wie enclaive Vault) stellt sicher, dass öffentliche Einrichtungen die Kontrolle über ihre Schlüssel (Hold Your Own Key) und damit über ihre Daten behalten. Über virtuelle Hardware-Security-Module (wie das enclaive vHSM) werden Schlüssel ausschließlich innerhalb geschützter Enklaven generiert, verwaltet und verwendet. Selbst wenn die Infrastruktur kompromittiert ist, bleiben die Daten innerhalb der Enklave vertraulich.
Technologisch ebenfalls basierend auf einem vHSM, setzen Workload Identity and Access Management und Remote Attestation (enclaive Nitride) das Zero-Trust-Prinzip konsequent um: Nur autorisierte Identitäten und Workloads dürfen auf die Enklaven, deren Hardware-Integrität zuvor validiert wurde, zugreifen.
Neben der Cloud ist KI der zweite große Innovationstreiber und Confidential AI das nächste Einsatzfeld für Confidential Computing im Deutschland-Stack. Proprietäre Modelle lassen sich hier vollständig geschützt in Enklaven ausführen. Confidential AI beinhaltet zudem die Absicherung gegen externe Modelle, indem GenAI-Firewalls (wie enclaive Garnet) sensible Informationen noch innerhalb der Enklave filtern und pseudonymisieren.
Die Auflistung zeigt: Confidential Computing kann in nahezu allen Schichten moderner IT-Infrastrukturen eingesetzt werden – von der Hardware über Virtualisierung und Containerisierung bis hin zu Datenverarbeitung, KI und Cloud-Management. Die Technologie ist keine Zukunftsvision mehr, sondern ein technologisch ausgereifter und praxiserprobter Sicherheitsansatz, wie wir mit dem Verweis auf unser eigenes Portfolio verdeutlicht haben.

Nutzen für Deutschland-Stack, Verwaltung und Wirtschaft
Die Integration von Confidential Computing in den Deutschland-Stack hat verschiedene Vorteile für öffentliche Einrichtungen und Unternehmen:
Digitale Souveränität: Schutz sensibler Daten gegenüber Cloud-Providern, Administratorzugriffen und Drittstaaten. Unabhängiges Schlüsselmanagement als entscheidender Faktor.
Zero Trust & KI-Sicherheit: Unterstützung moderner Security-Architekturen und vertrauenswürdige Nutzung von Künstlicher Intelligenz.
Datenschutz & Compliance: Vollständige Erfüllung der Vorgaben von NIS-2, DORA, DSGVO, BSI oder gematik – auch bei Nutzung internationaler Cloud-Infrastrukturen.
Interoperabilität: Basierend auf Open Source, Unterstützung offener Standards und einfache Integration in jede Cloud-Infrastruktur.
Vorteile der Cloud nutzen: Einfache Lift-and-Shift-Migrationen dank passgenau konfigurierter Enklaven und sicheres Data-Sharing dank gezielter Schlüsselverteilung.

Fazit und Empfehlung
Der Deutschland-Stack hat das Potenzial, zum Katalysator für Deutschlands digitale Souveränität zu werden. Dafür brauchen wir Infrastruktur und Technologie Made in Germany. Gerade bei Cloud-Services und KI haben wir allerdings noch Aufholbedarf und werden in den nächsten Jahren zum Teil auf außereuropäische, besonders US-amerikanische Technologie angewiesen sein. Doch durch entsprechende Sicherheits-Features wie Confidential Computing – entwickelt und betrieben unter deutscher und europäischer Rechtsordnung – können wir unsere sensiblen Daten dennoch effektiv schützen und die Digitalisierung sicher und souverän vorantreiben.

Im Bereich Confidential Computing und Verschlüsselung gehören dabei mehrere deutsche Anbieter bereits zu den internationalen Innovationsführern, deren Lösungen wie oben erwähnt bereits in Großprojekten der öffentlichen Verwaltung und des Gesundheitswesens zum Einsatz kommt. Der Bund fördert diese nationalen Anbieter, diese nationale Technologie zudem bereits mit hohen Forschungsgeldern. Confidential Computing nicht in den Deutschland-Stack aufzunehmen, wäre hier ein Widerspruch in sich, eine Aufnahme dagegen nur folgerichtig.
Als junges deutsches Unternehmen haben wir zudem mit Freude den Verlauf und die Ergebnisse des deutsch-französischen Digital-Gipfels am 18. November 2025 wahrgenommen. Hier bekräftigten Bundeskanzler Merz und Bundesdigitalminister Wildberger, künftig vor allem auf europäische Lösungen setzen zu wollen, und dabei auch kleine Unternehmen und Startups zu fördern. Diesen Worten müssen nun Taten folgen, um unserer Startup- und Gründer-Szene Aufwind zu verleihen und Zukunftssicherheit zu signalisieren.
Kurzum: Confidential Computing läutet eine Zeitenwende in der IT-Sicherheit ein, bei der deutsche Unternehmen dank hoher kryptografischer Kompetenz eine Führungsrolle einnehmen. Ein günstiger Umstand, denn im Deutschland-Stack sollte in Deutschland entwickelte Sicherheitstechnologie verbaut sein. Dies fördert unsere digitale Souveränität, stärkt den Wirtschaftsstandort und ist darüber hinaus ein positives Signal an die heimische Tech-Industrie.
