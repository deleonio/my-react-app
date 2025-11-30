**Titel:** Feedback für die Seite /landkarte
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/161
**Typ:** issue
**Status:** Offen
**Erstellt:** 19. Oktober 2025 um 11:05
**Aktualisiert:** 28. November 2025 um 22:17
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 1
**Likes:** 5
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/161 -->

Ihre "Dokumentation des Grauens" trifft ins Schwarze: "Jeder Dienstleister nutzt seinen Lieblingsstack, einheitlich wird dadurch gar nichts." Genau das ist das Problem – und genau hier kann KoliBri ein Standardanker sein. Statt zwei UI-Libraries für Angular und React gibt es eine: Web Components, die in beiden Frameworks (und ohne Framework) laufen. Barrierefreiheit ist eingebaut, Updates für neue BITV-Anforderungen erreichen alle Projekte gleichzeitig.

Sie fordern zu Recht: "Ein Techstack soll Entscheidungen abnehmen." KoliBri liefert das auf UI-Ebene: Design Tokens, API-Verträge, UX-Standards – die Frage "wie sieht ein Formular aus" ist beantwortet. Backend-Freiheit bleibt, aber die Oberfläche verhält sich überall identisch.

**Warum KoliBri?**

- **Eine Library für alle Frameworks** – React, Angular, Vue oder Vanilla JS nutzen dieselben Komponenten
- **Barrierefreiheit garantiert** – WCAG 2.1 AAA & BITV 2.0 sind eingebaut, nicht nachgerüstet
- **Zentrale Updates** – Änderungen erreichen alle Projekte gleichzeitig, keine Doppelentwicklung

Um diese Vereinheitlichung systematisch umzusetzen, habe ich einen Antrag gestellt: **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**.

---

> _Mehr Infos: [Public UI - KoliBri](https://github.com/public-ui/kolibri)_

## Beschreibung

**Feedback:** <br>Wenn ich mir die "Landkarte" so anschaue, verstehe ich nicht wirklich was dieser Deutschland-Stack werden soll. Es sieht mehr nach eine Dokumentation des Grauens der deutschen Digitalisierung aus.

Ich verstehe, dass der Techstack sehr umfangreich sein muss, um sehr unterschiedliche Software abzudecken, aber so kann einfach jeder kleine Dienstleister der mal wieder eine Ausschreibung gewinnt, seinen Lieblingsstack nutzen, aber einheitlich wird dadurch gar nichts.

- drei unterschiedliche relationelle Datenbanken (MariaDB, MySQL und Postgres)
- nicht ein sondern, mit Angular und React, zwei sehr unterschiedliche Web-Frameworks (für die es dann auch wieder zwei UI Libraries geben muss)
- x Programmiersprachen ohne einzuschränken, welche davon wofür genutzt werden soll (das Backend mit Go, Typescript, Pyhton, Java (warum eigentlich nicht Kotlin) oder vielleicht doch PhP?)
- Warum sich auf eine CI Platform festlegen wenn die einen GitHub Actions und die anderen Jenkins oder CirlceCI nutzen können, damit bloß nichts kompatibel ist.

und genau so geht es bei allen anderen Fragen weiter. Kubernetes oder doch lieber Docker Swarm? NGINX oder Traefik? Ein Techstack soll, nach meinem Verständnis, Entscheidungen abnehmen und damit für Einheitlichkeit sorgen, um darauf basierend Standards zu schaffen.

Die aktuelle Auflistung klingt allerdings mehr danach, dass man alle existierenden Projekte als stack-konform benennen möchte und sich bloß keine Teams umstellen müssen.
