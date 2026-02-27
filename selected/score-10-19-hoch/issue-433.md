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

Sie schreiben: "Ökologische und soziale Nachhaltigkeit fehlen komplett" – das trifft einen Nerv. Unter Ihren sozialen Kriterien nennen Sie explizit "Barrierefreiheit". Genau dort setzt KoliBri an: 50+ WCAG 2.1 konforme Komponenten, bei denen Barrierefreiheit von Anfang an eingebaut ist, nicht nachträglich draufgeschraubt. 10 Mio. Menschen mit Behinderung in Deutschland profitieren direkt.

Ihre ökologischen Kriterien treffen KoliBri präzise: "Software muss modular aufgebaut sein" – KoliBri nutzt Web Components, Projekte laden nur die Komponenten, die sie brauchen. "Software muss auf mindestens 5-10 Jahre alter Hardware laufen" – Web Components sind seit 2018 W3C-Standard mit 97%+ Browser-Support, kein Framework-Overhead. "Energieverbrauch muss messbar sein" – KoliBri ist Open Source unter EUPL-Lizenz, Code transparent.

Ihr Punkt "Cloud-Unabhängigkeit" und "lokal nutzbar" passt ebenfalls: KoliBri ist eine reine Frontend-Library, läuft komplett lokal, 3.000+ wöchentliche npm-Downloads. Wäre es denkbar, dass wir den Energieverbrauch von KoliBri gemeinsam messen? Eure Tools-Landschaft könnte als Referenz für UI-Libraries dienen.

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
