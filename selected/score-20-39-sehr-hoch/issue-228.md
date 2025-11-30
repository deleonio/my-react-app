**Titel:** Feedback für die Seite /gesamtbild/
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/228
**Typ:** issue
**Status:** Offen
**Erstellt:** 28. Oktober 2025 um 09:45
**Aktualisiert:** 3. November 2025 um 16:36
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Allgemein, Daten, Erweiterung, To be Done, Unterstützung notwendig
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 1
**Likes:** 0
**Dislikes:** 1
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

**Feedback:** <br>Wir entwickeln Online-Dienste für die Verwaltung und folgenden Themen wären regulatorische absolut brisant:

1. Sozialdatenschutz:Der Sozialdatenschutz schreibt vor, dass Sozialdaten vom zuständigen Träger nur zur Erfüllung seiner Aufgaben erhoben werden dürfen. Das macht One-Stop-Shops wie die Sozialplattform mit einem zentralen Bürgerkonto in dem diese Daten für weitere Anträge hinterlegt sind faktisch unmöglich. Eine Wiederverwendung für andere Leistungen von angegebenen Daten ist ausgeschlossen. Das steht im rechtlichen Widerspruch zum Grundsatz der Zugänglichkeit der Sozialverwaltung, § 17 Abs. 1 SGB I. Es gibt bereits normierte Kollaborationspflichten bei der Antragstellung, etwa in § 16 Abs. 2 SGB I, da Antragsteller nicht an mangelhafter Kenntnis der Zuständigkeit festgehalten werden soll. Der Sozialdatenschutz in seiner aktuellen Form führt zu Silo-Diensten. Denkbar wäre eine Regelung, dass die Erhebung und Speicherung auch auch zur Erfüllung der Aufgaben anderer Leistungsträger generell erlaubt ist, soweit kein "mehr" an Daten als für den jeweiligen Prozess nötig, erhoben wird. Die Verarbeitung von Sozialdaten wäre dann auch zulässig, wenn sie durch eine öffentliche Stelle zur Erfüllung einer Aufgabe nach dem Sozialgesetzbuch erfolgt, für die die betroffene Person einen Antrag gestellt oder die im unmittelbaren sachlichen Zusammenhang mit einer beantragten oder bezogenen Sozialleistung steht.

2. Schriftformerfordernisse abschaffen: Die Schriftformerfordernisse für die Anträge nach BEEG und BKGG für Elterngeld, Kindergeld und Kinderzuschlag sollten abgeschafft werden. Das entspricht dem Grundsatz der Formfreiheit im Verwaltungsverfahren für Sozialleistungen. Es gibt keinen ersichtlichen Grund, warum es hier ein solches Schriftformerfordernisse gibt.

3. Schnittstellen: Wichtig wäre eine Verpflichtung zu Standartschnittstellen oder eigene Strukturen Open Source zur Verfügung zu stellen. Sonst wird keine wirkliche Souveränität möglich sein, da aktuelle Standards selten eingehalten werden.

---

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/228 -->

Sie beschreiben drei fundamentale Probleme bei der Digitalisierung von Sozialdiensten: Sozialdatenschutz, Schriftformerfordernisse und fehlende Standardschnittstellen. Das sind keine technischen Details, sondern strukturelle Barrieren.

### Der Sozialdatenschutz als Digitalisierungsbremse

Ihr erster Punkt trifft den Kern: "Der Sozialdatenschutz in seiner aktuellen Form führt zu Silo-Diensten." § 67 SGB X schreibt vor, dass Sozialdaten nur zur Erfüllung der Aufgaben des _zuständigen_ Trägers erhoben werden dürfen. Das macht datenübergreifende One-Stop-Shops rechtlich unmöglich.

Ihr Lösungsvorschlag – Erhebung auch zur Erfüllung der Aufgaben _anderer_ Leistungsträger – wäre ein Paradigmenwechsel. Der Widerspruch ist real: § 17 SGB I fordert Zugänglichkeit, aber der Datenschutz macht diese schwer umsetzbar.

### Schriftformerfordernisse: Analoges Recht für digitale Prozesse

Ihr zweiter Punkt: "Die Schriftformerfordernisse für die Anträge nach BEEG und BKGG ... sollten abgeschafft werden." Warum gibt es Schriftformerfordernisse für Elterngeld und Kindergeld? Historisch diente das der Beweissicherung. Aber mit qualifizierten elektronischen Signaturen ist diese Begründung schwach. Solange diese bestehen, sind Medienbrüche oder aufwendige eID-Lösungen nötig. Beides ist ineffizient.

### Standardschnittstellen als Voraussetzung

Ihr dritter Punkt: "Wichtig wäre eine Verpflichtung zu Standardschnittstellen oder eigene Strukturen Open Source. Sonst wird keine Souveränität möglich."

Ich stimme zu. Proprietäre Systeme schaffen Abhängigkeit. Open Source und offene Standards ermöglichen Kontrolle. Das gilt für Backend und UI-Komponenten.

### Ein Ansatz aus dem UI-Bereich

Gerade bei der Frage nach Standardschnittstellen und Open Source gibt es im UI-Bereich bereits praktische Ansätze. Ich habe dazu einen Antrag gestellt: **[Aufnahme von KoliBri – die barrierefreie Komponentenbibliothek des Bundes in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)** – eine Open-Source Komponentenbibliothek mit standardisierten Schnittstellen, die Ihre Forderung nach offenen Strukturen im UI-Bereich umsetzt.

Ihre drei Punkte zeigen, dass Digitalisierung im Sozialbereich nicht nur eine technische Frage ist, sondern auch rechtliche und strukturelle Reformen braucht. Falls Sie an einem Austausch zu standardisierten UI-Lösungen interessiert sind, stehe ich gerne zur Verfügung.

---

> _Weitere Informationen: [KoliBri auf GitHub](https://github.com/public-ui/kolibri)_

---

**Tags:** a11y
