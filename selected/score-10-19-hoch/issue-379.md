**Titel:** Strukturelle Verbesserungsvorschläge zur Weiterentwicklung des Deutschland-Stacks: Interoperabilität, Governance, Konsolidierung & Legacy-Integration
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/379
**Typ:** issue
**Status:** Offen
**Erstellt:** 26. November 2025 um 11:34
**Aktualisiert:** 26. November 2025 um 11:34
**Autor:** Yves Junker (@OC000107525958)
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

**1. D-Stack: Erst die Einsatzszenarien definieren, dann die nötigen Technologien auswählen**

Die aktuelle D-Stack-Landkarte listet zwar eine Vielzahl an Technologien, allerdings fehlt eine klare Leitfrage: _Wofür soll der D-Stack konkret eingesetzt werden?_ Ohne eine nachvollziehbare Ableitung aus konkreten Verwaltungsanwendungsfällen besteht die Gefahr, dass der D-Stack, sich in technologischer Vielfalt verliert. Eine nachhaltige Stack-Governance sollte daher mit realen Digitalisierungsbedarfen beginnen und erst im zweiten Schritt die dazu passenden Technologien bestimmen. Die Reihenfolge lautet: _Problem → Lösung → Technologie_.

**2. Konsolidierte Architekturen als Grundlage**

Viele der aktuell aufgeführten Komponenten des D-Stacks stehen in Konkurrenz zueinander oder adressieren auf technischer Ebene sehr ähnliche Problemstellungen. Diese Vielfalt ist als Abbild der technologischen Realität im öffentlichen Sektor verständlich, aber es braucht auf Dauer jedoch klare Konsolidierungspfade, die an konkreten Referenzarchitekturen, Einsatzszenarien und Betriebsmodellen ausgerichtet sind. Ein Wildwuchs an Plattformkomponenten ist für föderale Strukturen weder wirtschaftlich noch skalierbar. Ein Verbesserungsvorschlag ist, Assoziationen zwischen Technologien sichtbar zu machen.

Wer zum Beispiel „Spring Boot“ nutzt, bewegt sich automatisch im Java-Ökosystem – eine implizite Entscheidung, die etwa mit PHP oder .NET inkompatibel ist. Solche technologischen Ökosysteme und ihre wechselseitigen Abhängigkeiten sollten explizit gemacht werden, um die Relevanz einzelner Technologien und Lösungen besser einschätzen zu können. Das wäre für Entwicklungsteams, Architekten und Beschaffer eine enorme Hilfe bei der Auswahl und Bewertung von Komponenten, insbesondere, wenn modulare Integration und Interoperabilität angestrebt werden. Zudem kann eine breite Aufstellung im D-Stack die Komplexität bei der Auswahl von Technologien erheblich erhöhen und zu einem Innovationshemmnis werden.

Wir empfehlen, Entscheidungsbäume oder Szenarienleitfäden zu erstellen, um aus der Vielzahl möglicher Tools und Sprachen die geeignete Auswahl zu treffen. Dies ist insbesondere für kleinere Akteure mit begrenzter Technologiekompetenz hilfreich. Die derzeitige Struktur des D-Stacks beinhaltet eine Vielzahl ähnlicher Technologien für identische Problemstellungen (z. B. mehrere Workflow-Engines oder Identity-Lösungen). Hier ist der Verbesserungsvorschlag, eine klare Referenzarchitektur zu schaffen, um Doppelentwicklungen zu vermeiden, die wiederum Ressourcen binden und Fragmentierung fördern würden. Eine weitere mögliche Lösung ist, kuratierte Empfehlungen bereitzustellen, die aufzeigen, welche Lösung in welchem Szenario geeignet ist.

**3. Standards und Schnittstellen**

Der D-Stack listet bereits zahlreiche Produkte und Anbieter. Strategisch sinnvoll ist es jedoch, die Interoperabilität zwischen den Schichten stärker in den Fokus zu rücken. Governance sollte Architekturen, Standards und Schnittstellen priorisieren und nicht spezifische Technologien. Um Plattformvielfalt zu ermöglichen, müssen gemeinsame Protokolle, APIs und eindeutige Schnittstellendefinitionen erarbeitet werden. Werden APIs, Datenformate und Kommunikationswege interoperabel, dokumentiert und zugänglich gestaltet, können der GovTech-Mittelstand, -Start-ups und CivicTech-Initiativen auf Basis des D-Stacks tragfähige, innovative Lösungen entwickeln, z. B. in Form ergänzender Basisdienste, adaptierbarer Fachverfahren oder komplett neuer Anwendungen. Die heutige Praxis zeigt, dass viele technische Hürden nicht in der Komplexität der Aufgaben, sondern in geschlossenen Systemarchitekturen, fehlender Interoperabilität oder proprietären Formaten liegen. Daher muss der D-Stack ein explizites „API first“-Paradigma verfolgen.

In der aktuellen Landkarte des D-Stacks fehlen einige in der öffentlichen Verwaltung etablierte und produktiv genutzte Standards, wie z. B. OSCI und XTA 2. Dies ist eine große Lücke, da genau diese Protokolle derzeit die Grundlage für viele sichere Datenübertragungen bilden. Um den D-Stack zu einem realistischen und anschlussfähigen Abbild der Verwaltungs-IT zu machen, müssen diese etablierten Technologien zumindest berücksichtigt oder als Übergangstechnologien ausgewiesen werden. Andernfalls drohen in der praktischen Umsetzung Kompatibilitätsprobleme.

**4. „Zero Trust“**

Das zentrale Konzept „Zero Trust“ fehlt im aktuellen D-Stack. Gerade im föderalen Umfeld mit unterschiedlichen Plattformbetreibern, Zuständigkeiten und Dienstleistern ist ein vertrauensbasiertes Sicherheitsmodell nicht mehr zeitgemäß. Zero Trust ist nicht nur ein technisches Prinzip, sondern auch eine notwendige Grundlage für eine sichere Governance von Plattformarchitekturen (siehe NOOTS), insbesondere im Kontext von Mandantenfähigkeit, Identity-Föderation und Schnittstellenbetrieb. Die Aufnahme dieses Paradigmas in den D-Stack ist daher dringend erforderlich.

**5.** **Balance zwischen Standardisierung und Innovationsfähigkeit**

Eine der größten Herausforderungen bei der Etablierung einer Open-Source-Referenzarchitektur im öffentlichen Sektor besteht darin, die Balance zwischen Standardisierung und Innovationsfähigkeit zu wahren. Standardisierung sorgt zwar für Interoperabilität, darf aber nicht zur Innovationsbremse werden. Die Referenzarchitektur des D-Stacks muss deshalb modular und versionierbar aufgebaut sein. Das bedeutet, dass es unterschiedliche Versionen der Architektur und ihrer Komponenten gegen kann, was ermöglicht, diese parallel zu definieren, zu betreiben und kontrolliert weiterzuentwickeln, ohne dass jede Änderung sofort das gesamte System betrifft oder bestehende Implementierungen bricht. So können technologische Neuerungen wie z. B. neue Datenformate, Protokolle oder Middleware-Komponenten schrittweise eingebunden werden, ohne dass bestehende Dienste gefährdet werden. Eine transparente Roadmap, gepaart mit einem offenen Erweiterungsprozess (z. B. RFC-Verfahren für neue Module), würde die Akzeptanz und Nutzbarkeit der Architektur deutlich erhöhen. Auch die Integration von Frameworks wie Apache Camel, den Spring-Stack, OpenAPI oder modernen Low-Code-Ansätzen muss ermöglicht werden, um unterschiedliche Kompetenzniveaus in den Behörden zu berücksichtigen. Neben offenen Schnittstellen und Datenformaten muss auch die technologische Basis selbst auf offenen Implementierungen beruhen.

**6. Veränderungsbedarfe zur Gestaltung eines gemeinsamen Ökosystems**

Die Erfahrungen aus OZG und Registermodernisierung zeigen, wie wichtig eindeutige Zuständigkeiten und Koordinierungsstellen sind. Der D-Stack sollte deshalb von Beginn an Ende-zu-Ende-Governance-Strukturen vorsehen, in denen Betrieb, Pflege, Weiterentwicklung, Evaluierung und Qualitätssicherung als geschlossener, durchgängiger Prozess organisatorisch verankert sind. Erforderlich ist auch ein föderal abgestimmtes Gremium zur Architektursteuerung, das verbindlich über technische Änderungen, Lifecycle-Fragen und Sicherheitsmaßnahmen entscheiden kann. Dieses Gremium sollte nicht nur koordinieren, sondern auch klare Direktiven formulieren, damit der D-Stack auch in der Fläche Wirkung entfalten kann.

Es müssen Organisations- und Governance-Modelle für die Standardisierung bereitgestellt werden, die die folgenden Fragen beantworten:\
– Wer (Behörde, Privatunternehmen, etc.) darf Standards vorschlagen?\
– Wer entscheidet über verpflichtende Änderungen?\
– Welche Übergangsfristen gelten?

Gleichzeitig muss der D-Stack eine Balance zwischen Regulierung und Innovation sicherstellen. Zu viel Regulierung bremst Innovation und zu wenig führt zu Wildwuchs. Der D-Stack muss daher verbindliche Mindeststandards setzen, gleichzeitig aber Raum für technologische Weiterentwicklung, Experimente und modulare Erweiterungen lassen. Darüber hinaus kann ein Zertifizierungs- oder Gütesiegel-System für Komponenten und Dienste im D-Stack geschaffen werden, um Vertrauen, Qualitätssicherung und Skalierbarkeit im digitalen Ökosystem der öffentlichen Verwaltung zu fördern. Ein modulares Zertifizierungssystem könnte z. B. nach Kategorien wie Interoperabilität, Barrierefreiheit, Sicherheit (NIS2-Konformität), eIDAS-Kompatibilität oder Einhaltung von Datenschutzvorgaben aufgebaut sein.

**7. Der Umgang mit Legacy-Systemen und Interoperabilität**

Ohne begleitende Open-Source-Werkzeuge bleiben offene Standards oft theoretisch. Deshalb muss der Deutschland-Stack neben der Standardisierung auch offene Referenzimplementierungen, Validierungs-Tools und Transformationstools fördern, z. B. Format-Mapper, SDKs oder Konnektoren. Dadurch wird Interoperabilität in der Praxis tatsächlich erreichbar, insbesondere für kleinere Kommunen und deren IT-Partner. In diesem Zusammenhang muss auch der Umgang mit Legacy-Systemen bedacht werden. In vielen Kommunen und Landesbehörden sind zentrale Register und Fachverfahren historisch gewachsen, proprietär aufgebaut und tief in bestehende IT-Infrastrukturen eingebettet. Der D-Stack darf daher nicht ausschließlich auf „Greenfield“-Ansätze setzen, sondern muss darüber hinaus durch standardisierte Migrationspfade, Integrationsadapter und Transformationsschnittstellen Brücken bauen. Besonders im Kontext der Registermodernisierung braucht es realistische Wege, um Altverfahren in Richtung NOOTS- und IDA-Verfahren zu überführen, ohne komplette Systemwechsel zu erzwingen. Der D-Stack muss diese Realität aktiv adressieren, um nicht an der föderalen Praxis vorbeientwickelt zu werden.

**Fazit:**

Der D-Stack braucht eine klare Orientierung an konkreten Verwaltungsanwendungsfällen, bevor Technologien ausgewählt oder empfohlen werden. Die derzeitige Breite und Heterogenität des Tech-Stacks führt zu Komplexität, Redundanzen und Doppelentwicklungen, weshalb konsolidierte Referenzarchitekturen und klare Entscheidungshilfen erforderlich sind. Priorisiert werden sollten offene Standards, interoperable Schnittstellen und ein API-first-Ansatz, statt einzelner Produkte und auch etablierte Verwaltungsstandards wie OSCI und XTA2 müssen berücksichtigt werden. Gleichzeitig muss der D-Stack modular, versionierbar und innovationsoffen gestaltet sein, damit neue Technologien kontrolliert integriert werden können. Ein tragfähiger D-Stack erfordert nicht nur technische Exzellenz, sondern auch eine Governance, die föderalen Realitäten berücksichtigt und Partizipation sicherstellt. Schließlich muss der D-Stack praktikable Wege für Legacy-Integration und Migrationspfade bieten, da die heterogene Register- und Fachverfahrenslandschaft ohne Transformationswerkzeuge nicht anschlussfähig ist.
