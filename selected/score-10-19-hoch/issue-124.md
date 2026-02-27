**Titel:** Feedback für die Seite /beteiligung
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/124
**Typ:** issue
**Status:** Offen
**Erstellt:** 15. Oktober 2025 um 10:15
**Aktualisiert:** 15. Oktober 2025 um 10:15
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
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

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/124 -->

Sie schreiben: "Nicht die Auswahl der richtigen Programmiersprache oder des Frameworks ist interessant, sondern die richtige Zuordnung." Das ist exakt die Philosophie hinter KoliBri – wir liefern UI-Komponenten als Web Components, egal ob Sie "Phoenix/Elixir", Java oder Python nutzen.

Ihr Punkt "bitte nicht Java oder .NET" bei Priorität 3 und 4 zeigt Ihre Präferenz für Paradigmen-Freiheit. KoliBri ist agnostisch: Die 50+ Komponenten funktionieren mit jedem Backend, das HTML ausliefert – W3C Web Components Standard seit 2018. Die Paradigmen-Wahl (prozedural, funktional, OO) bleibt bei Ihnen, die UI-Schicht ist davon entkoppelt.

Ihre "Fehlertoleranz"-Priorität passt zu KoliBri: Shadow DOM isoliert Komponenten, keine CSS-Konflikte, WCAG 2.1 konform für 10 Mio. Menschen mit Behinderung in Deutschland, 3.000+ wöchentliche npm-Downloads. Ihre "Do fun things with big, loud worker-bees"-Architektur klingt spannend – wie setzen Sie das in Ihren Projekten konkret um?

---

> Mehr Infos:
>
> - **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**
> - [Repository - Public UI - KoliBri](https://github.com/public-ui/kolibri)

## Beschreibung

**Feedback:** <br>Priorität 1: Requirement- und Change-Request-Management (schon mal sehr positives Feedback, da es diese Seite hier gibt). Aber das hat wirklich Prioriät 1.

Priorität 2: Die Wahl des richtigen Paradigmas (Prozedural, Funktional, Objekt-orientiert). Nicht die Auswahl der "richtigen" Programmiersprache oder des Frameworks ist interessant, sondern die richtige Zuordnung bestimmter Funktionalitäten zu den verschiedenen Paradigmen. Bei richtiger Auswahl sind Prioriät 3 und 4 sogut wie abgegolten.

Priorität 3: Fehlertoleranz. Seit Ende der 60er gibt es fehlertolerante Software. Ein schönes Beispiel ist die erste Mondlandung. Ein moderneres Beispiel wäre das Phonix/Elixir Framework (und viele weitere!)

Priorität 4: Sicherheit. Hat eigentlich bei richtigem Einsatz keine Priorität da dies bei richtigem Einsatz des Frameworks (bitte nicht Java oder .NET) bereits (zumindest aus technischer Sicht) abgegolten ist (und sein muss!). Es gibt natürlich andere semi-technische Sicherheitsaspekte wie Social Engineering bspw. die sehr wohl berücksichtigt werden müssen.

Alles in allem empfehle ich eine grundlegende Architektur getreu des Acronyms: "Do fun things with big, loud worker-bees":
(D)ata, (F)unctional Core, (T)esting, (B)oundaries, (L)ifecycle, (W)orkers
sowie die Open-Telecommunication-Platform (OTP) in Phoenix/Erlang bereits integriert. Das hat nichts mit Telekom zu tun!

Meiner Meinung nach sollte es bei Berücksichtigung obiger Prioritäten nicht mehr als 20 Software-Architekte benötigen. Der Funktionale Kern (manche nennen es Business-Logik) ist natürlich riesig für ein ganzes Land und erfordert sowohl einige Software-Entwickler, als auch Interdisziplinäres, lupenreines Requirement-Management.
