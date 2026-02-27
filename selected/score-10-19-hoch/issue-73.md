**Titel:** Barrierefreiheit: Grafik-Link enthält kein ARIA-Label
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/73
**Typ:** issue
**Status:** Offen
**Erstellt:** 11. Oktober 2025 um 09:48
**Aktualisiert:** 11. Oktober 2025 um 09:51
**Autor:** Marcus Morba (@OC000071703689)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 1
**Likes:** 1
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/73 -->

Guter Catch! Ein fehlendes ARIA-Label beim "logo-Link im Header" ist ein klassisches Barrierefreiheits-Problem – Screen-Reader-Nutzer wissen nicht, wohin der Link führt. Solche Fehler passieren leicht, wenn Komponenten ohne eingebaute A11y-Prüfung entwickelt werden.

Bei KoliBri funktioniert das anders: Unsere Link-Komponente (`kol-link`) erzwingt barrierefreie Nutzung. Ein Link ohne zugänglichen Text wird erkannt und verhindert – WCAG 2.1 ist im Code verankert, nicht in nachträglichen Audits. Das Ergebnis: 50+ Komponenten, alle BITV 2.0 geprüft, 3.000+ wöchentliche npm-Downloads.

Solche Fehler im HTML-Code (wie Ihr `<a href="..." class="hidden">` ohne aria-label) wären mit KoliBri nicht möglich – 10 Mio. Menschen mit Behinderung in Deutschland profitieren von eingebauter Barrierefreiheit. Falls Sie weitere A11y-Issues auf der D-Stack-Seite finden, könnte KoliBri als Referenz für korrekte Implementierung dienen?

---

> Mehr Infos:
>
> - **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**
> - [Repository - Public UI - KoliBri](https://github.com/public-ui/kolibri)

## Beschreibung

Der "logo"-Link im Header, rechts neben dem Suchfeld enthält kein ARIA-Label.

`<a href="https://gitlab.opencode.de/dstack/d-stack-home" class="hidden md:inline-block"><div class="w-8 h-content"><svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" version="1.1" class="hidden dark:block" viewBox="0 0 117.7 89.3"><path fill="#ffffff" d="M47.5,35.4h-23.1l-7,13.5c-1.6,3.2-4.8,5-8.2,5h84l7-13.5c1.7-3.3,5.1-5.1,8.5-4.9-.1,0-.2,0-.3,0h-60.9Z"></path><path fill="#ffffff" d="..."></path></svg></div></a>`
