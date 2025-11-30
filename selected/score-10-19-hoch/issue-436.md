**Titel:** Bundesverband Green Software: Feedback zu "Entwicklung, Sicherheit und Betrieb"
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/436
**Typ:** issue
**Status:** Offen
**Erstellt:** 28. November 2025 um 23:05
**Aktualisiert:** 28. November 2025 um 23:08
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

In Entwicklung und Betrieb der Software sind Effizienz und Transparenz wichtige Kriterien, die dafür sorgen, dass mit Ressourcen wie Strom und Wasser verantwortungsvoll umgegangen wird und die Hardware bestmöglich ausgenutzt wird.

Entwicklung von Software:

- es werden Ökodesign-Richtlinien für Software beachtet, um sicherzustellen, dass Umweltauswirkungen der Software von Anfang an mitgedacht werden
- dazu gehören z.B. Sustainable UX, Green Coding und modulare Architektur

Inbetriebnahme von Software:

- Updates bringen relevante Änderungen und kommen als Delta, nicht als vollständiger Download der Software
- durch Updates entstehen keine signifikanten und unerklärlichen Steigerungen des Energieverbrauchs

Im Betrieb ist es sehr wichtig, nur so viele Ressourcen zu belegen, wie die Software wirklich benötigt:

- dynamische Nutzung von Ressourcen (scale up, scale down, scale to zero), sowohl bezogen auf die Software selbst, als auch auf die Plattform, auf der sie läuft
- Open Source Tools wie KEDA und Karpenter unterstützen das automatisierte Hoch- und Runterskalieren von Ressourcen

Transparenz macht Effizienz überprüfbar und vergleichbar:

- Software und die Plattform, auf der sie läuft, muss ihre Energie- und Hardwarenutzung publizieren
- mindestens der Energieverbrauch muss messbar sein (Open Source / veröffentlichte Zahlen dazu)
- der Blaue Engel für Software unterstützt diese Kriterien und sollte, sofern vorhanden, auf der Techstack-Landscape aufgeführt werden

Für die Messung von Energieverbrauch und Hardware-Inanspruchnahme gibt es eine Vielzahl von Tools, die in verschiedenen Phasen des Software-Lebenszyklus zum Einsatz kommen können. Als Bundesverband Green Software haben wir dafür eine Tools-Landschaft erstellt, zu finden unter https://landscape.bundesverband-green-software.de/. Passende Mess-Tools für den jeweiligen Anwendungsbereich sollten in der Techstack-Landscape ergänzt werden. Wir unterstützen gern bei der Zuordnung.

---

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/436 -->

Sie beschreiben wichtige Kriterien für nachhaltige Software-Entwicklung: Sustainable UX, Green Coding und modulare Architektur. Besonders der Punkt "modulare Architektur" ist relevant für die Frontend-Entwicklung.

Im UI-Bereich bedeutet Nachhaltigkeit: Langlebige Standards statt kurzlebige Framework-Trends. Web Components (W3C Standard) sind hier die nachhaltigste Wahl – sie funktionieren seit 2011 und werden auch 2035 noch funktionieren. Kein Framework-Rewrite alle 3-5 Jahre.

### Sustainable UX durch Standards

Modulare Architektur mit Web Components bedeutet: Komponenten werden einmal entwickelt und überall wiederverwendet – React, Angular, Vue, Legacy-Systeme. Keine Doppelentwicklungen, keine Wegwerf-Code bei Framework-Wechseln. Das spart Ressourcen.

KoliBri nutzt genau diesen Ansatz: Barrierefreie Web Components mit minimalem Footprint (~5KB pro Button), keine Framework-Runtime, Browser-native Ausführung. Ressourceneffizient by design.

Ich habe dazu einen Antrag gestellt: **[Aufnahme von KoliBri – die barrierefreie Komponentenbibliothek des Bundes in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)** – ein Beispiel für nachhaltige, modulare Frontend-Architektur.

Falls Sie an einem Austausch zu Sustainable UX interessiert sind, stehe ich gerne zur Verfügung.

---

> _Weitere Informationen: [KoliBri auf GitHub](https://github.com/public-ui/kolibri)_
