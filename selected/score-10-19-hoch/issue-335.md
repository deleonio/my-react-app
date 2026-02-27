**Titel:** Domäne Entwicklung, Fehlende Frameworks und Programmiersprachen (IT-Referat München)
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/335
**Typ:** issue
**Status:** Offen
**Erstellt:** 21. November 2025 um 14:19
**Aktualisiert:** 28. November 2025 um 14:14
**Autor:** René Zarwel (@OC000110465473)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 3
**Likes:** 7
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/335 -->

Die Frage des IT-Referats München ist berechtigt: "Vue" fehlt bei "JavaScript/Typescript", während Angular und React drin sind. Ihre Auflistung zeigt die Lücken: "Spring", "Apache Camel", "Laravel" – die Liste wirkt unvollständig und "unter welchen Gesichtspunkten Programmiersprachen ausgewählt wurden" bleibt unklar.

KoliBri löst genau dieses Problem auf der UI-Ebene: Statt Angular, React, Vue einzeln aufzulisten, bieten wir Web Components (W3C-Standard seit 2018), die mit allen funktionieren. 50+ Komponenten, WCAG 2.1 konform – ob Spring-Backend, Laravel-Projekt oder Vue-Frontend, alle nutzen dieselbe barrierefreie UI-Basis.

Ihr Use-Case-Fokus "Python für KI-Entwicklung, Java für Backend mit Business-Logik" macht Sinn. KoliBri ergänzt das: Die UI-Schicht bleibt unabhängig vom Backend, 3.000+ wöchentliche npm-Downloads, 10 Mio. Menschen mit Behinderung in Deutschland profitieren. Welche Frameworks fehlen aus Ihrer Sicht am meisten im Stack?

---

> Mehr Infos:
>
> - **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**
> - [Repository - Public UI - KoliBri](https://github.com/public-ui/kolibri)

## Beschreibung

Es ist nicht überall klar, unter welchen Gesichtspunkten hier Programmiersprachen ausgewählt wurden und welche Use-Cases diese in Abgrenzung zu den anderen Sprachen primär adressieren. Zum Beispiel wäre ein Fokus denkbar mit Python eher für KI-Entwicklung und Java im Kontext Web-Applikationen für Backend mit Business-Logik/Datenhaltung. Zudem fehlen zu den diversen genannten Programmiersprachen zugehörige Frameworks, die in dem Umfeld etabliert sind:

- **Java** -\> Spring (https://spring.io/)
- **Java** -\> Apache Camel (https://camel.apache.org/)
- **JavaScript/Typescript** -\> Vue (https://vuejs.org/)
- **Python** -\> Langchain/Langgraph (https://www.langchain.com/langgraph)
- **PHP** -\> Laravel (laravel.com, MIT-Lizenz) oder Symfony (symfony.com, MIT-Lizenz)
