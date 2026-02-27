**Titel:** Bundesverband Green Software: Feedback zu Kriterium "Nachhaltigkeit"
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/433
**Typ:** issue
**Status:** Offen
**Erstellt:** 28. November 2025 um 21:36
**Aktualisiert:** 28. November 2025 um 21:55
**Autor:** Anita Schüttler (@OC000112249890)
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

Das Kriterium in seiner jetzigen Form fokussiert ausschließlich auf ökonomische Nachhaltigkeit; ökologische und soziale Nachhaltigkeit fehlen komplett! Wir halten die jetzigen Unterpunkte zur Bewertung der Nachhaltigkeit einer Software daher für ungeeignet.

**Geeignete Kriterien für ökologische Nachhaltigkeit:**

* Fokus auf Effizienz und Transparenz
* Energieverbrauch der Software muss messbar sein (Open Source!)
* bei Closed Source sollte der Hersteller den Energieverbrauch der typischen Nutzung nach standardisierten und vergleichbaren Kriterien veröffentlichen
* Software muss auf mindestens 5-10 Jahre alter Hardware laufen
* nicht zu häufige Updates, partielle Updates (die nicht jedes Mal wieder die komplette Software runterladen)
* Software muss modular aufgebaut sein, nicht benötigte Features (z.B. KI) müssen abschaltbar sein

Zur Messung von Energieverbrauch und Hardware-Inanspruchnahme gibt es eine Vielzahl von Tools. Als Bundesverband Green Software haben wir dafür eine Tools-Landschaft erstellt, zu finden unter https://landscape.bundesverband-green-software.de/. Passende Mess-Tools für den jeweiligen Anwendungsbereich sollten in der Techstack-Landscape ergänzt werden. Wir unterstützen gern bei der Zuordnung.

Sofern eine Software über ein Öko-Label verfügt (z.B. Blauer Engel für Software), sollte dies in der Landscape dargestellt werden.

**Geeignete Kriterien für soziale Nachhaltigkeit:**

* Barrierefreiheit
* Cloud-Unabhängigkeit
* Software muss auch lokal nutzbar sein

---

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/433 -->

Sie fordern messbare Nachhaltigkeitskriterien – besonders Ihre Punkte zu sozialer Nachhaltigkeit sprechen mich an. **KoliBri** erfüllt bereits heute zentrale Ihrer Forderungen.

### Barrierefreiheit als Kernanforderung

Sie listen Barrierefreiheit als erstes Kriterium für soziale Nachhaltigkeit. Ich sehe das genauso – digitale Teilhabe ist ein Grundrecht. KoliBri ist WCAG 2.1 AAA-konform, erfüllt also den höchsten internationalen Barrierefreiheitsstandard. Barrierefreiheit ist bei uns nicht optional, sondern Kernbestandteil jeder Komponente. Das bedeutet: Behörden, die KoliBri einsetzen, erfüllen automatisch BITV 2.0 und EU-Richtlinien zur digitalen Barrierefreiheit.

### Effizienz und geringe Ressourcennutzung

Ihre ökologischen Kriterien wie "Software muss auf mindestens 5-10 Jahre alter Hardware laufen" und "modular aufgebaut" treffen auf KoliBri zu. Web Components sind Browser-nativ und benötigen keine zusätzlichen Runtime-Frameworks wie React oder Angular. Das reduziert JavaScript-Overhead erheblich. Modularer Aufbau bedeutet: Nur die benötigten Komponenten werden geladen, nicht die gesamte Bibliothek. Das spart Bandbreite und Energie.

### Cloud-Unabhängigkeit und lokale Nutzbarkeit

Sie fordern: "Software muss auch lokal nutzbar sein." KoliBri funktioniert vollständig lokal – keine Cloud-Abhängigkeit, keine externen API-Calls zur Laufzeit. Die Komponenten laufen im Browser des Nutzers. Einmal heruntergeladen, funktioniert KoliBri auch offline. Das erfüllt Ihre Forderung nach Cloud-Unabhängigkeit vollständig.

### Open Source ermöglicht Transparenz und Messbarkeit

Sie fordern: "Energieverbrauch der Software muss messbar sein (Open Source!)." KoliBri ist vollständig Open Source – jede Zeile Code ist einsehbar, prüfbar und messbar. Ihre Tools-Landschaft unter landscape.bundesverband-green-software.de könnte KoliBri analysieren. Wir würden uns über eine Bewertung nach Ihren Nachhaltigkeitskriterien freuen.

### Langfristige Stabilität statt häufiger Updates

Ihre Forderung nach "nicht zu häufigen Updates, partiellen Updates" erfüllen wir durch semantisches Versionieren und Abwärtskompatibilität. Web Components sind langlebig, weil sie auf W3C-Standards basieren. Updates erfolgen kontrolliert, Breaking Changes werden vermieden. Die Komponenten sind auf Langlebigkeit ausgelegt – nachhaltiger als kurzlebige Framework-Trends.

### Mein Vorschlag: KoliBri in den Deutschland-Stack aufnehmen

Um diese Nachhaltigkeitskriterien systematisch im Stack zu verankern, habe ich einen Antrag gestellt: **[Aufnahme von KoliBri – die barrierefreie Komponentenbibliothek des Bundes in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**.

Falls Sie KoliBri nach Ihren Green-Software-Kriterien bewerten möchten, stehe ich gerne für einen Austausch zur Verfügung.

---

> _Wer mehr über Public UI KoliBri erfahren möchte: [GitHub Repository](https://github.com/public-ui/kolibri)_

---

**Tags:** nachhaltigkeit, barrierefreiheit
