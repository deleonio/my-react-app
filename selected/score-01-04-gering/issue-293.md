**Titel:** Einführung eines Reifegrad-Indikators (Tech Radar) für Technologien & Standards
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/293
**Typ:** issue
**Status:** Offen
**Erstellt:** 13. November 2025 um 17:20
**Aktualisiert:** 28. November 2025 um 20:36
**Autor:** Stefan Luchs (@OC000107101604)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 1
**Likes:** 2
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

#### Problemstellung

Der Deutschland-Stack hat das Ziel, als souveräne Technologie-Plattform klare Leitplanken für Digitalvorhaben zu setzen. Die aktuelle Landkarte des Tech-Stacks und die initialen Festlegungen bieten eine erste Orientierung.

Für Architekten und Entwicklungsteams in Bund, Ländern und Kommunen fehlt jedoch eine klare, auf einen Blick erfassbare Einstufung, welchen Verbindlichkeits- und Reifegrad eine gelistete Technologie, ein Standard oder ein Tool hat.

Diese Unklarheit kann zu folgenden Herausforderungen führen:

* **Unsicherheit bei Technologieentscheidungen:** Es ist nicht immer ersichtlich, ob eine Technologie eine strategische Neuerung darstellt, eine bewährte Standardlösung ist oder nur für Übergangsphasen toleriert wird.
* **Verzögerungen in der Projektplanung:** Teams müssen zusätzlichen Aufwand betreiben, um die strategische Einordnung einer Technologie zu recherchieren und zu bewerten.
* **Risiko von Fehlinvestitionen:** Ohne klare Empfehlungen könnten Projekte auf Technologien setzen, die strategisch bereits in der Ablösung begriffen sind.

#### Vorschlag: Einführung eines Reifegrad-Indikators

Wir schlagen die Einführung eines klar definierten Reifegrad-Indikators vor, der sich an bewährten Modellen wie dem "Tech Radar" (z.B. von ThoughtWorks https://www.thoughtworks.com/radar) orientiert. Technische Basis könnte hier z.B. das Open Source Tech Radar von Zalando sein https://github.com/zalando/tech-radar.

Jede Technologie, jedes Tool und jeder Standard im Deutschland-Stack sollte einer der folgenden Kategorien zugeordnet werden:

* **Empfohlen (Adopt):** Technologien, die als strategisch, bewährt und sicher gelten. Sie sind die klare Empfehlung für alle Neuentwicklungen im entsprechenden Anwendungsbereich.
* **Zur Prüfung (Trial):** Vielversprechende neue Technologien, die für den Einsatz in Pilotprojekten empfohlen werden, um Erfahrungen zu sammeln. Ihr Einsatz sollte bewusst und begleitet erfolgen.
* **Toleriert (Assess/Hold):** Technologien, die zwar noch im Einsatz sind (z.B. in Legacy-Systemen), aber für Neuprojekte nicht mehr aktiv empfohlen werden. Oftmals existieren bereits modernere, empfohlene Alternativen. Ihr Einsatz sollte sorgfältig geprüft und begründet werden.
* **In Ablösung (Deprecate):** Technologien, die aktiv aus dem Stack entfernt werden sollen. Sie dürfen in Neuprojekten nicht mehr verwendet werden. Für bestehende Systeme, die diese Technologie nutzen, sollte ein klarer Migrationspfad zu einer "Empfohlen"-Alternative aufgezeigt werden.

#### **Basis der Bewertung**

Diese Einstufung muss zwingend auf den bereits erwähnten, wohldefinierten **Bewertungskriterien des Tech-Stacks** basieren. Diese Kriterien (z.B. Offenheit, Skalierbarkeit, Interoperabilität, Digitale Souveränität) sollten transparent und nachvollziehbar für die Kategorisierung herangezogen werden.

#### **Mehrwert für den Deutschland-Stack**

* **Erhöhte Transparenz und Entscheidungssicherheit:** Alle Beteiligten erhalten eine sofort verständliche und verlässliche Orientierungshilfe.
* **Beschleunigung von Projekten:** Die schnelle Erkennbarkeit von strategischen Vorgaben reduziert den Analyseaufwand und ermöglicht eine zügigere und sicherere Technologieauswahl.
* **Aktive Steuerung der Modernisierung:** Durch die Kategorien "In Ablösung" und "Empfohlen" wird ein klarer Anreiz und Weg zur Modernisierung der IT-Landschaft in der öffentlichen Verwaltung geschaffen.
* **Stärkung der Interoperabilität:** Die konsequente Empfehlung von offenen Standards und interoperablen Technologien wird durch den Indikator operationalisierbar.
