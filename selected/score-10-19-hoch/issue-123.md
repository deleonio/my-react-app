**Titel:** Feedback für die Seite /
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/123
**Typ:** issue
**Status:** Offen
**Erstellt:** 14. Oktober 2025 um 22:59
**Aktualisiert:** 14. Oktober 2025 um 22:59
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

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/123 -->

Sie fordern "Vorgabe XHTML/CSS/JavaScript, fertig (wirklich freie Standards)" und kritisieren die Abhängigkeit von Google (Angular, Flutter) und Meta (React). Genau das ist der richtige Ansatz – und genau hier setzt KoliBri an.

Web Components sind dieser freie Standard: W3C-spezifiziert, seit 2018 in allen Browsern nativ, kein Konzern dahinter. KoliBri baut auf diesem Standard auf – 50+ barrierefreie Komponenten, die mit Angular, React oder ganz ohne Framework laufen. Die Wahl bleibt frei, aber die Barrierefreiheit für 10 Millionen Menschen mit Behinderung in Deutschland ist garantiert.

**KoliBri für echte Web-Standards:**

- **W3C-konform**: Web Components seit 2018 in allen Browsern nativ
- **Keine Konzern-Bindung**: Kein Google, kein Meta, keine Vendor-Abhängigkeit
- **50+ Komponenten**: WCAG 2.1 konform, 3.000+ wöchentliche Downloads
- **Framework-frei nutzbar**: Vanilla JS, oder mit Angular/React/Vue wenn gewünscht

Ihre Kritik an SOAP und XML-Lock-in ist übrigens auch berechtigt – ähnliche Probleme sehen wir bei UI-Frameworks.

---

> Mehr Infos:
>
> - **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**
> - [Repository - Public UI - KoliBri](https://github.com/public-ui/kolibri)

## Beschreibung

**Feedback:** <br>Wenn ich oben auf der Landkarte anfange dann sehe ich schon bei Zugang Dinge die dort nicht notwendig sind.
Vorgabe XHTML/CSS/JavaScript, fertig (wirklich freie Standards, https://www.w3.org).

Proprietäre wenn auch Open Source Frameworks können ja letztlich bei der Implementierung eines Angebots verwendet werden, sollten aber Beispielcharakter haben und keine Vorgabe sein. Letztlich gehören Angular und Flutter => google, während React aus dem Hause Facebook kommt und NextJS nur Aufsatz für das Vorgenannte ist. Soviel zur Nichtbindung.(Wurde bereits in anderem Feedback geschrieben, aber ich dachte es kann nicht genug Hinweise geben solche Abhängigkeiten zu vermeiden).

Weiter zum nächsten Block "Daten"/"Integration". Hier muss definitiv besser getrennt werden.

Zum einen Datenaustausch:
Warum so Technologien wie SOAP (Protokoll) aus dem letzten Jahrtausend? Damit ist ein Lock-in auf XML vorgegeben. Wenn ein Integrations Lockin, dann am ehesten OpenAPI oder REST API (eher Architekturansatz), da gehen dann json, XML und weitere für den Datenaustausch.

Im schlimmsten Fall können Daten immer noch durch kommerzielle Produkte wie von Lobster (immerhin deutsche Produkte) transformiert und an den Abnahmepunkten gereicht werden. Ich meine klar es ginge auch wieder DTAUS mit Disketten (wenigstens validierbar) oder mal wieder extra Kommas in .csv suchen, welcher IT-ler möchte das nicht?

Es braucht ein Format! Dieses sollte sich durch gute und Standardisierung & Validierung abheben, nicht alles aus der Mottenkiste was mal Standard war. Datentransformation sollte sich schnell als Mikroservice auch auf dem .de-Stack dazwischen-schalten lassen.

Eine sinnvolle Vorgabe für Schnittstellen im Datenaustausch kann hier Contract Testing sein, z.B. durch https://docs.pact.io/ (z.B. auch von github Actions unterstützt, wenn es bei github bleibt).

Wenn es bei einigen Vorgaben bleiben soll, warum sehe ich auf der Technologielandkarte unter Integration dann nicht z.B. auch Apache Kafka? https://kafka.apache.org/

Zum nächsten Punkt unter Daten, nennen wir den mal "Persistenz":
Datenbanksysteme vorgeben? Auch hier reichen Empfehlungen. Relationale SQL DBs, NoSQL, Time-Series, Graph oder Vector Datenbanken haben jeweils valide Anwendungsfälle. Das geht nicht auf ein System vorzugeben.

Und auch hier wieder ein Hinweis: MySQL mag Open Source sein, aber es gehört O.R.A.C.L.E., auch genannt Oracle. Was wenn die Open Source Tür hier wegen mangelndem Reichtum geschlossen wird?

Am unabhängigsten ist hier wohl PostgreSQL.

Es muss jedes der Technologiesysteme auf der Landkarte geprüft werden vor einer endgültigen Festlegung eines .de-Stacks, sonst endet es am Ende wieder in der proprietären Abhängigkeit. Und diese Desaster hatten wir doch schon genug in .de, oder nicht?

Wenn versucht wird wieder alles zu bedienen wird am Ende wieder Chaos herrschen und nichts zuverlässig funktionieren. Das Scheitern ist quasi vorprogrammiert (pun intended).

Umso weniger Standards der Stack vorgibt, umso größer ist am Ende der Pool der Fachkräfte die sich auf einen gemeinsamen Wissenspool konzentrieren können und damit dann auch eine gemeinsame "Sprache" haben.
