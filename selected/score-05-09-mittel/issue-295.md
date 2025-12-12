**Titel:** "Digitale Souveränität" als zentrales Bewertungskriterium für Komponenten schärfen
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/295
**Typ:** issue
**Status:** Offen
**Erstellt:** 13. November 2025 um 17:24
**Aktualisiert:** 13. November 2025 um 17:24
**Autor:** Stefan Luchs (@OC000107101604)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 0
**Likes:** 4
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

#### Bezug

Dieser Vorschlag ergänzt den Vorschlag aus dem Ticket https://gitlab.opencode.de/dstack/d-stack-home/-/issues/293 (Einführung eines Tech Radars) sowie https://gitlab.opencode.de/dstack/d-stack-home/-/issues/294 (Aufnahme von Tooling in den Deutschland Stack) um einen konkreten Vorschlag für ein elementares Bewertungskriterium.

#### Problemstellung

Der Deutschland-Stack hat den Anspruch, eine "nationale souveräne Technologie-Plattform" zu sein. Dieses Ziel ist von fundamentaler Bedeutung, um die langfristige Handlungsfähigkeit, Sicherheit und Unabhängigkeit der digitalen Infrastruktur des Staates zu gewährleisten.

Aktuell wird "Souveränität" als eines von mehreren Zielen genannt. Um sicherzustellen, dass dieses Prinzip nicht nur eine Absichtserklärung bleibt, sondern zur handlungsleitenden Vorgabe wird, muss es in den Bewertungskriterien für Technologien, Tools und Standards konkretisiert und hoch gewichtet werden. Ohne eine solche Schärfung besteht die Gefahr, dass aus pragmatischen Gründen Komponenten ausgewählt werden, die neue Abhängigkeiten schaffen und das Kernziel der Souveränität untergraben.

#### Vorschlag: "Digitale Souveränität" operationalisieren

Wir schlagen vor, das Kriterium "Digitale Souveränität" zu operationalisieren und als einen der wichtigsten Faktoren im Auswahl- und Bewertungsprozess zu verankern. Dies sollte in drei Dimensionen erfolgen:

1. **Daten-Souveränität:**
   * **Anforderung:** Die Hoheit über Speicherung, Verarbeitung und den Fluss von Daten muss jederzeit gewährleistet sein. Der physische Speicherort und die juristische Kontrolle müssen transparent und im Einklang mit nationalen/europäischen Interessen stehen.
   * **Bewertung:** Komponenten müssen nachweislich eine vollständige Kontrolle über Datenpfade ermöglichen.
2. **Technologie-Souveränität (Kein Lock-in):**
   * **Anforderung:** Technologien, Tools und Standards sollten idealerweise auf Open-Source-Software basieren, um Abhängigkeiten von einzelnen Herstellern oder geopolitischen Einflüssen zu minimieren.
   * **Bewertung:** Bei der Bewertung ist **Open Source klar zu priorisieren**. Proprietäre Lösungen dürfen nur dann in Betracht gezogen werden, wenn keine adäquaten Open-Source-Alternativen existieren und eine klare Exit-Strategie (Vermeidung von Lock-in) nachgewiesen werden kann.
3. **Schnittstellen-Souveränität (Interoperabilität):**
   * **Anforderung:** Alle Komponenten müssen über offene, anerkannte und gut dokumentierte Standards für Schnittstellen (APIs) verfügen.
   * **Bewertung:** Die Existenz und Qualität dieser offenen Schnittstellen ist eine Grundvoraussetzung. Sie sichert die Austauschbarkeit von Komponenten und damit die langfristige Flexibilität und Souveränität des Gesamt-Stacks.

#### Verbindung zum Reifegrad-Indikator (Tech Radar)

Dieses geschärfte Souveränitätskriterium muss eine direkte Auswirkung auf den vorgeschlagenen Reifegrad-Indikator (siehe Issue https://gitlab.opencode.de/dstack/d-stack-home/-/issues/293) haben:

* Eine Technologie kann nur dann als **"Empfohlen"** eingestuft werden, wenn sie in allen drei Dimensionen der Souveränität eine hohe Bewertung erzielt.
* Komponenten mit signifikanten Souveränitäts-Defiziten (z.B. starker Vendor-Lock-in, unklare Datenhoheit) können maximal als **"Toleriert"** (für Legacy-Systeme) oder direkt als **"In Ablösung"** klassifiziert werden.

#### Governance-Prozess (Das "Wie"):

Um Subjektivität zu minimieren und föderale Akzeptanz zu sichern, schlagen wir einen transparenten und partizipativen Prozess vor, der an den bestehenden **"Beteiligungsprozess"** anknüpft:

* **Bewertungsgremium:** Ein Gremium aus Experten von Bund, Ländern, Kommunen und der Zivilgesellschaft bewertet Technologien anhand der definierten Kriterien.
* **Transparente Pflege:** Die Pflege des Radars erfolgt offen nach dem Prinzip **"Content as Code"**, ähnlich dem Webangebot. Begründungen für jede Einstufung werden öffentlich im GitLab des D-Stacks dokumentiert und diskutiert.\
  Beispiel: https://techradar.aoe.com
* **Feedback-Kanal:** Länder und Kommunen können eigene, bewährte Lösungen für eine Aufnahme in den Radar vorschlagen. Dies fördert die Wiederverwendung und föderale Zusammenarbeit statt zentraler Vorgaben

#### Mehrwert für den Deutschland-Stack

* **Verbindliche Umsetzung des Kernversprechens:** Macht das Ziel der "Souveränität" von einer reinen Absicht zu einer messbaren und verbindlichen Anforderung.
* **Risikominimierung:** Verhindert strategische Abhängigkeiten von einzelnen Anbietern und sichert die langfristige Kontrolle über die eigene digitale Infrastruktur.
* **Nachhaltigkeit und Vertrauen:** Schafft eine transparente und nachvollziehbare Grundlage für Technologieentscheidungen, die das Vertrauen in die Nachhaltigkeit und Sicherheit des Stacks stärkt.
* **Förderung eines souveränen Ökosystems:** Setzt einen klaren Anreiz für den Markt, offene und souveräne Lösungen für den öffentlichen Sektor anzubieten.
