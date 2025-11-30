**Titel:** Feedback für die Seite /kriterien
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/143
**Typ:** issue
**Status:** Offen
**Erstellt:** 17. Oktober 2025 um 08:57
**Aktualisiert:** 17. Oktober 2025 um 08:57
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 0
**Likes:** 2
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

**Feedback:** <br>Hallo,
es ist irgendwie unklar, welche Technologien auf "die Landkarte" sollten oder nicht.

Wenn es darum geht, möglicherweise sinnvolle Technologien zu bewerten, dann fehlen ganz viele, wie Vue.js, Svelte, https://github.com/WICG/webcomponents auf der Browserseite. Sqlite als DB. Email und LibrePGP auf der Transportseite.

Und viele mehr.

Viele Grüße

---

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/143 -->

Sie benennen eine wichtige Lücke: "Es fehlen nach meiner Meinung auch ein paar Technologien wie Vue.js, Svelte, [Web Components](https://github.com/WICG/webcomponents) auf der Browserseite." Ich freue mich, Ihnen zeigen zu können, dass **KoliBri** genau diese Lücke schließt.

### Web Components – der von Ihnen explizit geforderte Standard

Sie nennen konkret den WICG/webcomponents-Standard. KoliBri basiert auf genau diesem Standard, den Sie fordern. Durch diese Wahl ist unsere Bibliothek framework-agnostisch und deckt automatisch Vue.js, Svelte, React, Angular und alle anderen Frameworks ab. Das bedeutet für den Deutschland-Stack: Ein nachvollziehbares Auswahlkriterium – jeder Framework-Stack kann dieselben Komponenten verwenden, ohne dass separate UI-Bibliotheken entwickelt werden müssen.

### Praktische Implementierung, nicht nur Theorie

Ich kann aus produktivem Einsatz berichten: KoliBri-Komponenten lassen sich ohne Wrapper direkt in Vue und Svelte nutzen. Sie erhalten also nicht nur einen theoretischen Vorschlag, sondern eine praktische, bereits produktiv eingesetzte Implementierung. Durch standardisierte Properties und Events bleiben die APIs auch bei künftigen Technologien kompatibel – genau die Zukunftssicherheit, die der Deutschland-Stack braucht.

### Mein Vorschlag: KoliBri in den Deutschland-Stack aufnehmen

Um die von Ihnen identifizierte Web Components-Lücke zu schließen, habe ich einen Antrag gestellt: **[Aufnahme von KoliBri – die barrierefreie Komponentenbibliothek des Bundes in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**.

Ähnliche Technologie-Lücken werden auch in [Issue #395](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/395) thematisiert, wo Web Components ebenfalls explizit als fehlend identifiziert werden. Ihre Unterstützung würde bedeuten, dass moderne Frontend-Technologien wie Vue.js und Svelte vollwertig im Stack vertreten sind.

---

> _Wer mehr über Public UI KoliBri erfahren möchte: [GitHub Repository](https://github.com/public-ui/kolibri)_

---

**Tags:** kolibri
