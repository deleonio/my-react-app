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

## Beschreibung

**Feedback:** <br>Wenn ich mir die "Landkarte" so anschaue, verstehe ich nicht wirklich was dieser Deutschland-Stack werden soll. Es sieht mehr nach eine Dokumentation des Grauens der deutschen Digitalisierung aus.

Ich verstehe, dass der Techstack sehr umfangreich sein muss, um sehr unterschiedliche Software abzudecken, aber so kann einfach jeder kleine Dienstleister der mal wieder eine Ausschreibung gewinnt, seinen Lieblingsstack nutzen, aber einheitlich wird dadurch gar nichts. 

- drei unterschiedliche relationelle Datenbanken (MariaDB, MySQL und Postgres)
- nicht ein sondern, mit Angular und React, zwei sehr unterschiedliche Web-Frameworks (für die es dann auch wieder zwei UI Libraries geben muss)
- x Programmiersprachen ohne einzuschränken, welche davon wofür genutzt werden soll (das Backend mit Go, Typescript, Pyhton, Java (warum eigentlich nicht Kotlin) oder vielleicht doch PhP?)
- Warum sich auf eine CI Platform festlegen wenn die einen GitHub Actions und die anderen Jenkins oder CirlceCI nutzen können, damit bloß nichts kompatibel ist.

und genau so geht es bei allen anderen Fragen weiter. Kubernetes oder doch lieber Docker Swarm? NGINX oder Traefik? Ein Techstack soll, nach meinem Verständnis, Entscheidungen abnehmen und damit für Einheitlichkeit sorgen, um darauf basierend Standards zu schaffen.

Die aktuelle Auflistung klingt allerdings mehr danach, dass man alle existierenden Projekte als stack-konform benennen möchte und sich bloß keine Teams umstellen müssen.
