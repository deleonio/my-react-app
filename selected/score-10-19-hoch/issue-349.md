**Titel:** Feedback für die Seite /aufbau/
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/349
**Typ:** issue
**Status:** Offen
**Erstellt:** 24. November 2025 um 11:46
**Aktualisiert:** 28. November 2025 um 22:16
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

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/349 -->

Sie schreiben: "In der Schicht 'Oberfläche und Zugang' fehlt der Teilbereich 'Barrierefreiheit'" – das ist der zentrale Punkt. Barrierefreiheit muss als eigenständiger Standard verankert sein, nicht als Nachgedanke. KoliBri liefert genau diesen fehlenden Baustein: 50+ barrierefreie UI-Komponenten (WCAG 2.1, BITV 2.0).

Ihr Vergleich mit der Schweiz ist präzise: "Doppel-Arbeiten und fehlende Interoperabilität" sowie "kein oder wenig Once Only-Prinzip". KoliBri adressiert das direkt – Web Components als W3C-Standard seit 2018 funktionieren in Angular, React, Vue oder ohne Framework. Eine Library für alle, keine parallelen Entwicklungen, 3.000+ wöchentliche npm-Downloads zeigen den Bedarf.

Ihre Warnung "Diese Fehler sollte Deutschland nicht machen" trifft es: 10 Mio. Menschen mit Behinderung brauchen deutschlandweit einheitliche, barrierefreie Lösungen. Wie sollte Barrierefreiheit in der Schichtarchitektur aus Ihrer Sicht konkret verankert werden?

---

> Mehr Infos:
>
> - **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**
> - [Repository - Public UI - KoliBri](https://github.com/public-ui/kolibri)

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
