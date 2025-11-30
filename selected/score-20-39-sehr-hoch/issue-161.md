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

Sie schreiben: "Jeder Dienstleister nutzt seinen Lieblingsstack, einheitlich wird dadurch gar nichts" – das trifft ins Schwarze. Ihre "Dokumentation des Grauens" mit "zwei sehr unterschiedlichen Web-Frameworks" für die es "dann auch wieder zwei UI Libraries geben muss" beschreibt genau das Problem, das KoliBri löst: Eine UI-Bibliothek für alle Frameworks.

Ihr Punkt "Ein Techstack soll Entscheidungen abnehmen" ist entscheidend: KoliBri basiert auf dem W3C Web Components Standard und funktioniert mit React, Angular, Vue oder ganz ohne Framework. Die Frage "wie sieht ein Formular aus" ist beantwortet – 50+ barrierefreie Komponenten, WCAG 2.1 konform, BITV 2.0 geprüft. Backend-Freiheit bleibt, aber die Oberfläche verhält sich überall identisch.

Die aktuelle Realität – "alle existierenden Projekte als stack-konform benennen" – muss sich ändern. KoliBri liefert zentrale Updates für alle Projekte gleichzeitig, keine Doppelentwicklung, 3.000+ wöchentliche npm-Downloads zeigen den Bedarf. 10 Mio. Menschen mit Behinderung in Deutschland brauchen konsistente, barrierefreie Oberflächen. Wie sähe ein vereinheitlichter UI-Layer für Ihren Stack aus?

---

> Mehr Infos:
>
> - **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**
> - [Repository - Public UI - KoliBri](https://github.com/public-ui/kolibri)

## Beschreibung

**Feedback:** <br>Wenn ich mir die "Landkarte" so anschaue, verstehe ich nicht wirklich was dieser Deutschland-Stack werden soll. Es sieht mehr nach eine Dokumentation des Grauens der deutschen Digitalisierung aus.

Ich verstehe, dass der Techstack sehr umfangreich sein muss, um sehr unterschiedliche Software abzudecken, aber so kann einfach jeder kleine Dienstleister der mal wieder eine Ausschreibung gewinnt, seinen Lieblingsstack nutzen, aber einheitlich wird dadurch gar nichts.

- drei unterschiedliche relationelle Datenbanken (MariaDB, MySQL und Postgres)
- nicht ein sondern, mit Angular und React, zwei sehr unterschiedliche Web-Frameworks (für die es dann auch wieder zwei UI Libraries geben muss)
- x Programmiersprachen ohne einzuschränken, welche davon wofür genutzt werden soll (das Backend mit Go, Typescript, Pyhton, Java (warum eigentlich nicht Kotlin) oder vielleicht doch PhP?)
- Warum sich auf eine CI Platform festlegen wenn die einen GitHub Actions und die anderen Jenkins oder CirlceCI nutzen können, damit bloß nichts kompatibel ist.

und genau so geht es bei allen anderen Fragen weiter. Kubernetes oder doch lieber Docker Swarm? NGINX oder Traefik? Ein Techstack soll, nach meinem Verständnis, Entscheidungen abnehmen und damit für Einheitlichkeit sorgen, um darauf basierend Standards zu schaffen.

Die aktuelle Auflistung klingt allerdings mehr danach, dass man alle existierenden Projekte als stack-konform benennen möchte und sich bloß keine Teams umstellen müssen.
