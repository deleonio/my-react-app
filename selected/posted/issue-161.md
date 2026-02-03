**Titel:** Feedback für die Seite /landkarte
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/161
**Typ:** issue
**Status:** Offen
**Erstellt:** 19. Oktober 2025 um 11:05
**Aktualisiert:** 19. Oktober 2025 um 11:05
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 0
**Likes:** 3
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

**Feedback:** <br>Wenn ich mir die "Landkarte" so anschaue, verstehe ich nicht wirklich was dieser Deutschland-Stack werden soll. Es sieht mehr nach eine Dokumentation des Grauens der deutschen Digitalisierung aus.

Ich verstehe, dass der Techstack sehr umfangreich sein muss, um sehr unterschiedliche Software abzudecken, aber so kann einfach jeder kleine Dienstleister der mal wieder eine Ausschreibung gewinnt, seinen Lieblingsstack nutzen, aber einheitlich wird dadurch gar nichts.

- drei unterschiedliche relationelle Datenbanken (MariaDB, MySQL und Postgres)
- nicht ein sondern, mit Angular und React, zwei sehr unterschiedliche Web-Frameworks (für die es dann auch wieder zwei UI Libraries geben muss)
- x Programmiersprachen ohne einzuschränken, welche davon wofür genutzt werden soll (das Backend mit Go, Typescript, Pyhton, Java (warum eigentlich nicht Kotlin) oder vielleicht doch PhP?)
- Warum sich auf eine CI Platform festlegen wenn die einen GitHub Actions und die anderen Jenkins oder CirlceCI nutzen können, damit bloß nichts kompatibel ist.

und genau so geht es bei allen anderen Fragen weiter. Kubernetes oder doch lieber Docker Swarm? NGINX oder Traefik? Ein Techstack soll, nach meinem Verständnis, Entscheidungen abnehmen und damit für Einheitlichkeit sorgen, um darauf basierend Standards zu schaffen.

Die aktuelle Auflistung klingt allerdings mehr danach, dass man alle existierenden Projekte als stack-konform benennen möchte und sich bloß keine Teams umstellen müssen.

---

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/161 -->

Ihr Titel "Dokumentation des Grauens", wenn Sie schreiben: "Wenn ich mir die 'Landkarte' so anschaue, verstehe ich nicht wirklich was dieser Deutschland-Stack werden soll. Es sieht mehr nach eine Dokumentation des Grauens der deutschen Digitalisierung aus."

Diese Formulierung – "Dokumentation des Grauens" – bringt das Problem auf den Punkt: Zu viele parallele Technologien ohne klare Vereinheitlichung.

### Die Kritik an parallelen Frameworks trifft genau ins Schwarze

Sie schreiben weiter: "So kann einfach jeder kleine Dienstleister der mal wieder eine Ausschreibung gewinnt, seinen Lieblingsstack nutzen, aber einheitlich wird dadurch gar nichts."

Ich sehe das genauso. Und genau hier kommt **KoliBri** ins Spiel – die Web Components Bibliothek, die wir entwickelt haben. KoliBri stellt eine verbindliche, barrierefreie UI-Schicht bereit, egal ob ein Projekt Angular, React oder ein anderes Framework nutzt. Web Components sind technologie-neutral, das bedeutet: Die Auswahl im Backend bleibt frei, während das Frontend standardisiert wird. Behörden können KoliBri als verpflichtenden Teil des Stacks definieren und erhalten damit echte Vergleichbarkeit – genau das, was Sie fordern.

### Zwei UI-Libraries für zwei Frameworks? Nicht mit KoliBri.

Sie nennen ein weiteres konkretes Problem: "nicht ein sondern, mit Angular und React, zwei sehr unterschiedliche Web-Frameworks (für die es dann auch wieder zwei UI Libraries geben muss)".

Genau hier setzt KoliBri an: EINE Bibliothek, die sowohl in Angular als auch in React (und sogar ohne Framework) läuft. Alle Komponenten sind bereits barrierefrei geprüft. Statt zwei separater Libraries mit zwei Accessibility-Kanälen existiert ein gemeinsamer Code-Bestand. Das bedeutet: Updates – etwa neue BITV-Anforderungen – werden einmal umgesetzt und erreichen sofort alle Frameworks. Keine Doppelentwicklungen, keine Mehrfachprüfungen.

### Einheitlichkeit durch klare Standards

Ihr Kernanliegen formulieren Sie so: "Ein Techstack soll, nach meinem Verständnis, Entscheidungen abnehmen und damit für Einheitlichkeit sorgen, um darauf basierend Standards zu schaffen."

Ich stimme Ihnen vollkommen zu. KoliBri liefert genau das: klare Design Tokens, API-Verträge und UX-Standards. Damit ist die Entscheidung "wie sieht ein Formular aus" bereits getroffen. Projekten bleibt die Freiheit in der Logikschicht, aber die UI verhält sich überall identisch. Das reduziert Beschaffungskomplexität und erleichtert Qualitätssicherung erheblich.

### Mein Vorschlag: KoliBri in den Deutschland-Stack aufnehmen

Um Ihre Vision der Vereinheitlichung systematisch umzusetzen, habe ich einen Antrag gestellt: **[Aufnahme von KoliBri – die barrierefreie Komponentenbibliothek des Bundes in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**.

Ihre Unterstützung – durch ein Votum, Feedback oder einen Kommentar – würde bedeuten, dass wir gemeinsam die "Dokumentation des Grauens" in eine standardisierte, einheitliche Lösung überführen können. Lassen Sie uns zusammen barrierefreie Web-Entwicklung zum verbindlichen Standard machen.

---

> _Wer mehr über Public UI KoliBri erfahren möchte: [GitHub Repository](https://github.com/public-ui/kolibri)_

---

**Tags:** kolibri
