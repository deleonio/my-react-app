**Titel:** Feedback zu Zielbild, Struktur und Datenmanagement des Deutschland-Stack
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/397
**Typ:** issue
**Status:** Offen
**Erstellt:** 27. November 2025 um 17:02
**Aktualisiert:** 27. November 2025 um 17:05
**Autor:** Julian Bayer (@OC000039225501)
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

# Zielbild Deutschland-Stack

> Der Deutschland-Stack ist die nationale souveräne Technologie-Plattform für die Digitalvorhaben in Deutschland.

Die Außenkommunikation des Bundesministeriums für Digitales und Staatsmodernisierung stellt dar, dass der Deutschland-Stack ein zentrales, strategisches Projekt der Verwaltungsdigitalisierung in Deutschland ist. Das frühe Einholen von Feedback der breiten Öffentlichkeit ist zu begrüßen. Leider ist die Zielbeschreibung des Deutschland-Stacks derzeit eher vage gehalten und weist eine hohe Dichte an Schlagwörtern auf, die zwar allgemein bekannt, aber dennoch offen für Interpretation sind. Alleine schon die Begrifflichkeit "national souverän" bietet einen hohen Interpretationsspielraum zwischen dem konsequenten Einsatz von Open Source Technologien auf der einen Seite und der Nutzung US-Amerikanischer Clouddienste mit vertraglicher Absicherung der Datensouveränität auf der anderen Seite

Die Gleichsetzung von Stack und Plattform im oben zitierten Satz bietet Potential zur Verwirrung. Ein "Stack" wird üblicherweise als technologischer Unterbau einer IT-Lösung verstanden (was im Rahmen des Deutschland-Stacks wohl eher der Tech-Stack wäre). Eine Plattform ist üblicherweise schon eine konkrete IT-Lösung. Im folgenden Fließtext folgt die Aufforderung "Gestalten Sie mit uns den neuen Standard". Die Website des Deutschland-Stack verwendet derzeit also die Begriffe "Stack", "Plattform" und "Standard" als wären sie ein und dasselbe. Das verwässert das Verständnis des konkreten Vorhabens des Deutschland-Stacks.

Was ist also das Zielbild des Deutschland-Stacks? 
* Die Definition eines Tech-Stacks?
* Die Definition einer oder mehrerer konkreter IT-Lösungen auf Basis dieses Tech-Stacks? Womöglich auch die technische Umsetzung dieser Lösungen?
* Oder die Definition eines Standards wie IT-Lösungen für die Verwaltungsdigitalisierung aussehen sollen?

Es bedarf einer klaren Zielsetzung, die konkret beschreibt, was der Deutschland-Stack ist bzw. werden soll. Dies erlaubt auch zielgerichteteres Feedback für eventuelle künftige Konsultationsprozesse.

Das Zielbild sollte zudem den erhofften Nutzen des Deutschland-Stacks beschreiben und so die entsprechenden Leitplanken für seine Entwicklung setzen.
# Struktur des Deutschland-Stack

Die Unterseite "Struktur" beschreibt, dass der Deutschland-Stack in Schichten und Gruppen strukturiert sei und beschreibt die Schichten des Stack. Der Begriff der Gruppen wird nach dem Einleitenden Absatz nicht mehr aufgegriffen und bleibt undefiniert. Der Begriff einer "Schicht" in einem Tech-Stack hat eine allgemein verbreitete Interpretation: Die Schichten eines Stacks bilden aufeinander aufbauende Bestandteile des Stacks, wobei eine Schicht oft von den darunter liegenden Schichten abhängt, jedoch nie von der darüber liegenden Schicht. Der Begriff der Gruppe ist in diesem Kontext jedoch nicht allgemein definiert und so bleibt völlig offen, was eine "Gruppe" im Kontext des Deutschland-Stack ist.

Wie im Abschnitt zum Zielbild bereits beschrieben ist auch unklar, wie der Tech-Stack in den Deutschland-Stack eingebettet ist. Die Seite "Struktur Stack" beschreibt lediglich die Schichten des Tech-Stack. Es ist somit nicht ersichtlich, welche Schichten und Gruppen der Deutschland-Stack außerhalb des Tech-Stack umfasst. Die Seite erwähnt lediglich, dass der Tech-Stack der technologische Teil des Deutschland-Stack sei.

Es bedarf einer konkreteren Abgrenzung der Begriffe "Deutschland-Stack", "Tech-Stack" , "Technologieplattform" und "Standard".
# Tech-Stack Landkarte

Die Nachnutzung eines existierenden Tools für die Landkarte ist begrüßenswert und setzt ein gutes Beispiel für die Nachnutzung offener Software im Sinne des Deutschland-Stacks. Allerdings bedarf es auch hier einer besseren Zielsetzung. Was kartiert die Landkarte? Bildet sie den IST-Zustand der Verwaltungsdigitalisierung ab? Oder soll sie einen SOLL-Zustand definieren, also gewissermaßen die gewünschten Technologien und Standards die zukünftig genutzt werden sollen?

Gemäß der Beschreibung sollte die Landkarte die "Technologien und Standards" des Tech-Stacks anzeigen. Tatsächlich finden sich in der Landkarte aber auch Softwareprodukte wieder (z.B. PostgreSQL, CKAN, piveau) - also konkrete Implementierung von Technologien und Standards wie SQL oder DCAT. Diese Softwareprodukte sind außerdem nicht einheitlich eingeordnet. So ist PostgreSQL z.B. als Standard einsortiert, während MySQL als Technologie einsortiert wurde. Da beide Produkte ein Relational Database Management System (RDBMS) darstellen ist nicht nachvollziehbar, wieso sie unterschiedlich kategorisiert wurden. Inwiefern das Aufführen konkreter Software-Produkte in diesem frühen Stadium der Entwicklung des Deutschland-Stack schon sinnvoll ist, möchte ich hinterfragen. Hier besteht die Gefahr, sich auf bestimmte Lösungen "einzuschießen", während die zugrundeliegenden Standards und Technologien noch Bestandteil einer ergebnisoffenen Konsultation sind. Falls die Entscheidung getroffen wird, die Softwareprodukte in der Landkarte zu behalten, sollten diese zumindest in eine eigene Kategorie "Produkt" einsortiert werden.
# Standards und Technologien zum Datenmanagement

Ich befürworte ausdrücklich die Nutzung von RDF und DCAT als Formate zur Beschreibung von (Meta-) Daten. Die Nutzung solcher Wissensgraphen erhöht die semantische Interoperabilität. Ich rege ergänzend die Aufnahme von SPARQL und SHACL als Standard und Triple Stores als Technologie an, um den sogenannten "Semantic Web Stack", der sowohl von der Wirtschaft als auch im Bereich von Open Government Data erfolgreich verwendet wird, zu vervollständigen. Diese Technologien und Standards sind auf die Verarbeitung von RDF explizit zugeschnitten und ermöglichen so die effektive Nutzung von Wissensgraphen. Gemeinsam mit den bereits enthaltenen dokumentenbasierten und relationalen Ansätzen zur Speicherung und Verarbeitung von Daten entsteht so eine breite technologische Basis auf welche die darüber liegenden Schichten bedarfsorientiert aufbauen können.
# Governance und Architektur zum Datenmanagement

Ein bloßes Auflisten von möglichen nutzbaren Technologien, Standards und Produkten halten wir im Bereich des Datenmanagement und Datenaustausch für nicht zielführend. Viel mehr bedarf es klarer Leitplanken für die Auswahl der richtigen Technologie basierend auf Anwendungsfällen. Eine relationale Datenbank ist z.B. in vielen Fällen zum Speichern eines Registers geeignet. Für einen semantisch interoperablen Austausch kann diese aber z.B. durch Metadaten in Form eines Wissensgraphen ergänzt werden. Der Deutschland-Stack hat hier die Möglichkeit durch klare Guidance dazu beizutragen, dass Digitalisierungsprojekte nicht vom Tech-Stack des Dienstleisters gesteuert werden. Klare Leitlinien, welche Standards und Technologien für welchen Anwendungsfall vorgesehen sind, vereinfachen die Konzeption des Datenmanagements.

Wo mehrere ähnliche oder konkurrierende Produkte im Tech-Stack aufgeführt sind, könnte den Nutzern eine Guidance mitgegeben werden, welches Produkt für welchen Anwendungsfall geeignet ist. So sind derzeit sowohl CKAN als auch piveau im Tech-Stack gelistet. Obwohl beide Produkte den gleichen Zweck haben und de facto derzeit in Konkurrenz zueinander stehen, gibt es oft gute Gründe in einem Projekt auf die eine oder die andere Lösung zu setzen, da sie unterschiedliche Stärken und Schwächen haben. Selbstverständlich könnte diese Entscheidung auch dem Umsetzenden überlassen werden. In unserer Erfahrung wird aber oft schon vor Beginn eines Vergabeverfahrens eine Entscheidung für ein Produkt gefällt. Diese Entscheidung würde von einer solchen Guidance profitieren.

Ein klares Bekenntnis zur Nutzung von Linked Data und systemübergreifenden persistenten Identifiern im Rahmen des Deutschland-Stacks erachten wir als wünschenswert. Viele aktuelle Probleme der Verwaltungsdigitalisierung könnten dadurch beseitigt werden. Aktuelles Beispiel sind eine Vielzahl von Straßenumbenennungen in Deutschland. Da der Straßenname derzeit überall zugleich Identifier der Straße ist, statt nur ihr "Anzeigename" führt die Umbenennung von Straßen zu riesigen Verwaltungs- und Umstellungsaufwänden. Ein eindeutiger Identifier, welcher systemübergreifend verwendet werden kann kann solche Probleme vermeiden. Die Straße wird dann maschinell nur mit dem Identifier gespeichert und der Straßenname ist lediglich Anzeigename. Ein Positivbeispiel in dieser Hinsicht ist z.B. die Schweiz, wo jede Straße im amtlichen Straßenverzeichnis einen Identifier hat (z.B. https://geo.ld.admin.ch/location/street/10062399). Die entsprechenden Dienste zum Mapping von Identifier und Straßenname sollten idealerweise als zentrale Open Data Infrastruktur bereit gestellt werden. Für gewisse Bereiche der Verwaltungsdigitalisierung werden solche Systeme für die semantische Interoperabilität voraussichtlich auch unumgänglich sein.
