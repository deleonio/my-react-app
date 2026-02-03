**Titel:** Feedback für die Seite /aufbau/
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/349
**Typ:** issue
**Status:** Offen
**Erstellt:** 24. November 2025 um 11:46
**Aktualisiert:** 24. November 2025 um 11:46
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

**Feedback:** <br>Nachvollziehbare Schichten:

Die Schichten sind nachvollziehbar. Wir sehen jedoch eine Vermischung von organisatorischen und technischen Aspekten. Eine klarere Trennung zwischen diesen Aspekten wäre wünschenswert.

Fehlende Basisdienste:

In der Schicht 'Basisdienste' fehlen Dienste zur Pflege, Zuordnung und Ermittlung behördlicher Zuständigkeit und behördlicher Instanzen/Identitäten. Diese sind elementare Voraussetzungen für digitale Verwaltungsverfahren in der Schicht 'Anwendungen und Dienstleistungen'. Das Grobkonzept IAM für Behörden in der Architekturdokumentation NOOTS kann als ausbaufähige Vorlage dienen.

Nicht nachvollziehbare Teilbereiche:

'Zustimmung (consent)' wird als eigenständiger Teilbereich genannt, was wir nicht unmittelbar nachvollziehen können und in der NOOTS-Konzeption als nicht praxistauglich verworfen wurde. 'Identität' und 'Zertifikat' werden als getrennte Teilbereiche genannt. Sie sollten jedoch gemeinsam betrachtet werden im Sinne von 'Zertifikat = digitaler Nachweis der Identität'. 'Siegel' und 'Signatur' werden als getrennte Teilbereiche genannt, sollten allerdings im Sinne ihrer Definition in der eIDAS-VO möglichst gemeinsam betrachtet werden als Mittel zur Sicherung von Integrität, Herkunft und Gültigkeit einer Information und nur dort unterschieden werden, wo es auf die Art des Akteurs ankommt: natürliche Person signiert, juristische Person siegelt.
Statt einer 'Inbox' sollte der Begriff 'Postfach' verwendet werden, wie er in BundID, MUK, FINK verwendet wird. 'Brieftasche (wallet)' wird zwar genannt, es bleibt allerdings unklar, ob damit die EUDI-Wallet (mit-)gemeint ist und/oder andere entsprechende Ansätze.

Fehlende Konzepte in 'Anwendungen und Dienstleistungen':

In der Schicht 'Anwendungen und Dienstleistungen' werden 'Fachanwendung' und 'Fachdatenraum' genannt, was die bisherige Denkweise begünstigt, die teils zu Silostrukturen, Abhängigkeiten und mangelnder Interoperabilität führt. Stattdessen sollte auf Schnittstellen und interoperable (Fach-)Datenformate digitaler Verfahren der Leistungs- und der Eingriffsverwaltung abgestellt werden.

Fehlender Teilbereich Barrierefreiheit:

In der Schicht 'Oberfläche und Zugang' fehlt der Teilbereich 'Barrierefreiheit'.

Nutzung von GovStack-Komponenten:

Der mögliche Nutzen des Einsatzes von Komponenten aus dem 'GovStack' wurde erkennbar nicht weiter beachtet. GovStack und D-Stack verfolgen nicht die gleichen Ziele, aber eine technische oder konzeptionelle Integration wäre denkbar, etwa durch die Übernahme von GovStack-Bausteinen in Pilotprojekten oder durch die Harmonisierung von Standards.

Vergleich mit Schweizer Modell:

Das jetzige Modell erinnert an das in der Schweiz gelebte, das grundsätzlich gut ist, da dort ebenfalls nach einem föderalen System gearbeitet wird. Allerdings erlebte die Schweiz damit Doppel-Arbeiten und fehlende Interoperabilität. Mangelnde zentrale Standards, wie bei Baugesuchen, sind kein Vorbild, da diese nicht einheitlich funktionieren. Die Folge: langsames Skalieren, Innovationen werden gehemmt, kein oder wenig Once Only-Prinzip. Zudem uneinheitliche Nutzererfahrungen und sehr hohe Kosten. Diese Fehler sollte Deutschland nicht machen, und man sollte dem Widerstand der Länder und Kommunen entsprechend begegnen, um deutschlandweit einheitliche Lösungen zu fördern.

Fehlender Input zu Strategie, Architektur und Governance:

Es fehlt Input zu 'Strategie, Architektur und Governance'. Dazu gibt es auf der Tech-Stack Landkarte nichts, wobei man auch Tools angeben könnte. Es ist unklar, wo tiefergehende Informationen zu diesen Themen zu finden sind.

Autor: ]init[ AG für digitale Kommunikation

---

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/349 -->

Sie benennen mehrere kritische Lücken im Deutschland-Stack – eine davon möchte ich besonders hervorheben, da ich dafür eine konkrete Lösung anbieten kann.

### Der fehlende Teilbereich Barrierefreiheit

Sie schreiben: "In der Schicht 'Oberfläche und Zugang' fehlt der Teilbereich 'Barrierefreiheit'."

Genau diese Lücke schließt **KoliBri**, die Web Components Bibliothek, die wir entwickelt haben. KoliBri liefert eine komplette Suite WCAG-2.1-AAA-konformer Komponenten – also den höchsten internationalen Standard für digitale Barrierefreiheit. Die Komponenten lassen sich als eigener Layer in der Architektur modellieren und dokumentieren, damit entsteht die von Ihnen geforderte Sichtbarkeit. Behörden erhalten direkt nutzbare Bausteine statt nur abstrakter Anforderungen.

### Silostrukturen vermeiden durch Trennung der UI-Schicht

Sie kritisieren zu Recht: "'Fachanwendung' und 'Fachdatenraum' werden genannt, was ... teils zu Silostrukturen, Abhängigkeiten und mangelnder Interoperabilität führt."

KoliBri kapselt die Präsentationsschicht und trennt sie konsequent von der Fachlogik. Web Components sind unabhängig von Backend und Datenspeicher – sie können in jedem Fachverfahren identisch genutzt werden. Dadurch wird der Fokus weg von monolithischen Applikationen hin zu gemeinsamen UI-Schnittstellen gelenkt, genau wie Sie es fordern. Die fachliche Logik bleibt in den jeweiligen Systemen, aber die Nutzeroberfläche wird vereinheitlicht.

### Das Schweizer Modell als Warnung

Besonders eindrücklich finde ich Ihre Warnung vor dem Schweizer Modell: "uneinheitliche Nutzererfahrungen und sehr hohe Kosten ... Die Folge: langsames Skalieren, Innovationen werden gehemmt, kein oder wenig Once-Only-Prinzip."

Genau hier zahlt sich ein bundesweit einheitliches Design-System aus. KoliBri spart Schulungen, reduziert Fehlbedienungen und vermeidet Doppelarbeit – die Pflege erfolgt zentral, die Verteilung über npm und Browser. So entsteht das "Once-Only"-Erlebnis auf der Nutzeroberfläche, das Sie im Schweizer Modell vermissen. Wir entwickeln einmal, alle profitieren.

### Mein Vorschlag: KoliBri in den Deutschland-Stack aufnehmen

Um diese Lücke systematisch zu schließen, habe ich einen Antrag gestellt: **[Aufnahme von KoliBri – die barrierefreie Komponentenbibliothek des Bundes in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**.

Dieses Anliegen teilen auch andere Tickets wie [Issue #379](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/379) (Konsolidierung statt Wildwuchs) und [Issue #72](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/72) (Barrierefreiheit von Anfang an), was die Dringlichkeit einer standardisierten Lösung unterstreicht.

---

> _Wer mehr über Public UI KoliBri erfahren möchte: [GitHub Repository](https://github.com/public-ui/kolibri)_

---

**Tags:** a11y
