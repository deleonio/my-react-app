**Titel:** Semantische Technologien
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/460
**Typ:** issue
**Status:** Offen
**Erstellt:** 30. November 2025 um 00:07
**Aktualisiert:** 30. November 2025 um 00:10
**Autor:** Benjamin Degenhart (@benjaminaaron)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 0
**Likes:** 1
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

Ich möchte die Beiträge von Julian Bayer (#397) und Benjamin Ditel (#373) unterstützen und ein Plädoyer dafür halten, semantische Technologien in den Deutschland-Stack zu integrieren. 

Als anschauliches Beispiel möchte ich eine Open-Source-Webanwendung anführen, die wir im Civic-Tech-Kontext entwickelt haben und die vollumfänglich auf semantische Technologien setzt. Die Anwendung (“FörderFunke”) informiert Bürger:innen über staatliche Leistungen, auf die sie Anspruch haben. Dabei liegt deren Profil als **RDF** Graph (W3C Standard seit 1999) ausschließlich im “Local Storage” des Browsers (Privacy by Design). Bei Besuch der Webapp werden zunächst alle Anforderungsprofile in-Memory geladen, um dann die Anwendung offline betreiben zu können (Client-Side Processing ohne Cloud Infrastruktur). Anforderungsprofile sind Law as Code Artefakte, die wir als Linked Open Data publizieren. Sie enthalten die maschinenlesbaren Voraussetzungsregeln für Leistungsbezug in Form von **SHACL** Shapes (W3C Standard seit 2015); bspw. muss ein Kind unter 25 Jahre alt sein für den Kinderzuschlag. Vor dem Matching-Vorgang der durch eine Serie von SHACL Validierungen die Berechtigungen der Nutzer:in klärt, nutzen wir **SPARQL** (W3C Standard seit 2008) um Profile automatisch mit ableitbarem Wissen anzureichern, wie bspw. der Rentenbeginn basierend auf ihrem Geburtsdatum.

Wann immer möglich, versuchen wir Applikationslogik in Form von semantischen Operationen (SHACL oder SPARQL) auszuführen, statt sie in einer Programmiersprache zu implementieren. Dadurch könnten wir das “Execution Environment” schnell wechseln und sind nicht an eine bestimmte Programmiersprache gebunden. Oft geht es bei Interoperabilitätsfragen darum, Daten und Schnittstellen zu standardisieren. Unser Bestreben ist es, darüber hinaus auch die Operationen auf den Daten so weit wie möglich auf der Ebene von Standards zu beschreiben: Programmiersprachen-agnostisch. Mit Blick auf das Thema digitale Souveränität sehen wir hier das Potential, Abhängigkeiten von Softwareherstellern zu reduzieren.

Die Verbindungen zwischen Nutzer:innen-Profilen und Regeln sind standardisierte Datenfelder. Dabei ist unser Ziel, uns an internationalen (z.B. das Friend of a Friend Vokabular), EU-weiten (z.B. Core Person Vocabulary der SEMIC) und deutschen Standards (z.B. XÖV, FIM) zu orientieren.

Wichtig: es ist uns egal, ob Nutzer:innen die Wahrheit sagen. Angaben werden nicht verifiziert. Das ist nicht nötig, weil wir keine Anträge einreichen, sondern nur Orientierung in Informationsräumen bieten wollen gemäß dem Prinzip “gefunden werden statt suchen zu müssen”. Wir ermuntern Nutzer:innen sogar dazu, Szenarien durchzuspielen (z.B. was wäre denn, wenn ich in diese Stadt umziehe, was stehen mir dort für Möglichkeiten offen) oder Profile von anderen Personen anzugeben (z.B. für die Oma oder auch Berater:innen, die die Ansprüche ihrer Klient:innen im Gespräch überprüfen).

---

Über diese bestehende Applikation hinaus möchte ich nun ein Konzept beschreiben, das weitere Themen berührt, die ich für den Deutschland-Stack relevant halte. Statt den Local Storage als Speicherort zu verwenden, wäre ein Solid-Pod (siehe #373) um ein Vielfaches nützlicher. Ein sicherer Ort für Nutzer:innen-Daten unter deren alleinigen Kontrolle. Apps können granular Zugriff erfragen. Solid trennt den App- vom Daten-Markt. Wenn App A die Nutzer:in bereits nach Unverträglichkeiten gefragt hat, kann App B diesen Datenpunkt direkt nutzen - ohne dass es irgendeine Verbindung zwischen den Apps gibt außer der Pod. In diesem Szenario ist ein _geteiltes Vokabular_ Voraussetzung, damit beide Apps Unverträglichkeiten auf die gleiche Weise definieren.

Während es mit der Registermodernisierung und der EUDI Wallet aktuell zwei große Entwicklungen gibt, bei denen es um verifizierte Daten und Dokumente geht, möchte ich gezielt dafür werben, unverifizierte Daten ebenfalls zu unterstützen. Ich vermute, dass der Markt dafür riesig ist. FörderFunke ist ein Beispiel für eine Anwendung basierend auf unverifizierten Daten, ebenso könnte man sich eine Anwendung der Stadtbibliothek vorstellen, die meine Ausleihhistorie und Vorlieben aus dem Solid Pod erhält für bessere Empfehlungen - oder das Serviceportal einer Stadt, das meine Lebenslage aus meinen Pod-Profildaten erkennt und mir passende Services vorschlägt. Immer dann, wenn es um eine Personalisierung von Informationsangeboten geht, sind unverifizierte Daten völlig ausreichend. Entscheidend dabei ist ein dynamisch wachsendes geteiltes Vokabular über das ganze Anwendungsökosystem hinweg. Ein solches Setup könnte man als Personalization-as-a-Service verstehen und lässt sich hervorragend zusammen mit der Wallet denken.

Eine weitere Komponente des Konzeptes sind _standardisierte Verarbeitungslogiken_: die Arbeitsschritte und Regeln nämlich, die auf den persönlichen Daten vorgenommen oder angewandt werden. Lägen diese in einer standardisierten Form, statt in Programmcode, vor, ist es möglich, zusätzlich auch den Regel- vom App-Markt zu trennen. Apps könnten dann ihre Verarbeitungslogik in den geschützten Bereich der Nutzer:in geben: Dort wird sie auf den Profildaten ausgeführt und die Ergebnisse ausgegeben. Optional fließen die Ergebnisse an die App zurück zur Darstellung. Ein vollständiger Schutz der persönlichen Daten kann so garantiert werden - es ist nicht mehr nötig, sie über fremde Server zu schicken: statt meine Daten anderswohin zu schicken, kommt die Verarbeitungslogik zu mir, die ich in meinem geschützten Raum auf meinen Daten ausführen kann. Neben weiteren Regelsprachen eignen sich SPARQL und SHACL (insbesondere die aktuell in Arbeit befindliche nächste W3C Version mit vielen Neuerungen) als standardisierte Verarbeitungslogiken.

---

Abschließend möchte ich noch ein paar weitere Vorteile von semantischen Technologien anbringen - ähnliches habe ich auch in den [Konsultationsprozess](https://gitlab.opencode.de/it-planungsrat/pg-sio/konsultationsprozess/-/issues?state=all) der Arbeitsgruppe semantische Interoperabilität des IT-Planungsrates eingebracht vor einem Jahr.
- Es geht immer um Graphen. Diese wiederum bestehen ausnahmslos und vollständig aus Triples: Subjekt, Prädikat, Objekt. Auf diese strukturelle Einfachheit ist immer Verlass, egal wie kompliziert und vielschichtig Dinge werden.
- Wissensgraphen sind immer selbstbeschreibend: Datenpunkte liegen nicht in Tabellen herum, die man ohne Doku nicht versteht - es reicht ein Blick nach “links und rechts” im Graph, um zu verstehen, worum es geht.
- Dadurch laden Graphen auch zum Entdecken ein. Sie lassen sich außerdem immer visualisieren, auch mit Stift und Papier, wenn nötig.
- Werkzeuge aus dem mathematischen Feld der Graphentheorie lassen sich unmittelbar anwenden, bspw. um Potentiale für Entbürokratisierung auf struktureller Ebene zu identifizieren.
- Bestehende Vokabulare nachzunutzen kann eine Starthilfe für Projekte sein.
- Zudem ist auf der tiefsten Ebene des Datenformats bereits der Antrieb zur Kollaboration eingebaut: Jeder Identifier in einem Wissensgraph muss aus einem Vokabular stammen, das man entweder nachnutzt oder erfindet. Im Falle des letzteren können wiederum andere das neu entstandene Vokabular nachnutzen.
- Stellt man Wissensgraphen in Form von Linked Open Data offen zur Verfügung, ist man sofort Teil eines globalen dezentralen Wissensnetzes. Es gibt Tools, die Queries über verteilte RDF-Datenquellen ermöglichen: Es muss also gar nicht alles in einem Triple-Store liegen. Es ist möglich, im Internet verteilte RDF-Files direkt in Queries einzubeziehen.
- Semantische Modellierung ist evolutionsoffen: eine Tomate kann sowohl Obst als auch Gemüse sein, statt sich auf eine Datenbank-Tabelle festlegen zu müssen. Und wenn sie später noch etwas anderes sein soll, können neue Triples einfach an bestehende Knoten angehängt werden. So können in Produktionssystemen neue Schemata eingeführt werden, während alte bestehen bleiben. Möglicherweise auch ein Ausweg aus Begriffs-Harmonisierung-Engpässen.
