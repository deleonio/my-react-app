**Titel:** Bundesverband Green Software: Feedback zu Kriterium "Nachhaltigkeit"
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/433
**Typ:** issue
**Status:** Offen
**Erstellt:** 28. November 2025 um 21:36
**Aktualisiert:** 29. November 2025 um 00:11
**Autor:** Anita Schüttler (@OC000112249890)
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

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/433 -->

Ihr Feedback trifft einen Nerv: "Soziale Nachhaltigkeit" wird in der Softwareentwicklung oft vergessen. Als wir KoliBri gestartet haben, stand genau diese Frage im Raum – wie bauen wir Komponenten, die niemanden ausschließen?

Die Antwort war: Barrierefreiheit von Anfang an einbauen, nicht nachträglich draufschrauben. Heute umfasst KoliBri über 50 WCAG 2.1 konforme Komponenten – jeder Button, jedes Formular, jede Tabelle. Für Menschen mit Sehbehinderungen, motorischen Einschränkungen oder kognitiven Beeinträchtigungen ist das der Unterschied zwischen "kann ich nutzen" und "bin ich ausgeschlossen". In Deutschland betrifft das rund 10 Millionen Menschen mit anerkannter Schwerbehinderung – bei einer alternden Gesellschaft steigt diese Zahl weiter.

Zu Ihren ökologischen Kriterien: "Software muss modular aufgebaut sein" – KoliBri nutzt Web Components (W3C-Standard). Projekte laden nur die Komponenten, die sie brauchen. Ein typisches Formular mit 5 Komponenten lädt nur diese 5, nicht das gesamte Framework. Kein Overhead, keine unnötigen Abhängigkeiten. Ihr Punkt "Software muss auf mindestens 5-10 Jahre alter Hardware laufen" passt ebenfalls: Web Components sind seit 2018 in allen Browsern nativ unterstützt – ein stabiler Standard, keine kurzlebige Framework-Mode. Das reduziert technische Schulden und verlängert die Lebensdauer von Anwendungen.

**KoliBri erfüllt Ihre Nachhaltigkeitskriterien:**

- **Soziale Nachhaltigkeit**: 50+ WCAG 2.1 konforme Komponenten, 10 Mio. Menschen mit Behinderung in DE profitieren
- **Modular**: Tree-Shaking – nur genutzte Komponenten werden geladen
- **Langlebig**: Web Components (W3C-Standard seit 2018), keine Framework-Abhängigkeit
- **Cloud-unabhängig**: Reine Frontend-Library, läuft komplett lokal
- **Open Source**: Energieverbrauch messbar, Code transparent (EUPL-1.2 Lizenz)

Wäre es denkbar, dass wir den Energieverbrauch von KoliBri messen könnten? Das wäre für uns wertvolles Feedback – und könnte als Referenz für andere UI-Libraries dienen.

---

> Mehr Infos:
>
> - **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**
> - [Repository - Public UI - KoliBri](https://github.com/public-ui/kolibri)

## Beschreibung

Das Kriterium in seiner jetzigen Form fokussiert ausschließlich auf ökonomische Nachhaltigkeit; ökologische und soziale Nachhaltigkeit fehlen komplett! Wir halten die jetzigen Unterpunkte zur Bewertung der Nachhaltigkeit einer Software daher für ungeeignet.

**Geeignete Kriterien für ökologische Nachhaltigkeit:**

- Fokus auf Effizienz und Transparenz
- Energieverbrauch der Software muss messbar sein (Open Source!)
- bei Closed Source sollte der Hersteller den Energieverbrauch der typischen Nutzung nach standardisierten und vergleichbaren Kriterien veröffentlichen
- Software muss auf mindestens 5-10 Jahre alter Hardware laufen
- nicht zu häufige Updates, partielle Updates (die nicht jedes Mal wieder die komplette Software runterladen)
- Software muss modular aufgebaut sein, nicht benötigte Features (z.B. KI) müssen abschaltbar sein

Zur Messung von Energieverbrauch und Hardware-Inanspruchnahme gibt es eine Vielzahl von Tools. Als Bundesverband Green Software haben wir dafür eine Tools-Landschaft erstellt, zu finden unter https://landscape.bundesverband-green-software.de/. Passende Mess-Tools für den jeweiligen Anwendungsbereich sollten in der Techstack-Landscape ergänzt werden. Wir unterstützen gern bei der Zuordnung.

Sofern eine Software über ein Öko-Label verfügt (z.B. Blauer Engel für Software), sollte dies in der Landscape dargestellt werden.

**Geeignete Kriterien für soziale Nachhaltigkeit:**

- Barrierefreiheit
- Cloud-Unabhängigkeit
- Software muss auch lokal nutzbar sein
