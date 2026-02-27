**Titel:** Feedback für die Seite /landkarte/
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/231
**Typ:** issue
**Status:** Offen
**Erstellt:** 30. Oktober 2025 um 13:30
**Aktualisiert:** 6. November 2025 um 10:33
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Erweiterung, Nachfrage, To be Done, Unterstützung notwendig, Änderungsvorschlag
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 5
**Likes:** 0
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/231 -->

Ihre Frage ist berechtigt: "Was bedeutet es für meine Firma, wenn ich VueJS verwende und nicht Angular oder React?" Das Risiko konkreter Framework-Vorgaben sehen Sie richtig: Google kann Angular jederzeit komplett überarbeiten, dann sind alle Anwendungen betroffen.

Die Lösung liegt in Ihrer eigenen Empfehlung: "Schnittstellen festlegen, nicht Frameworks diktieren." KoliBri macht genau das auf UI-Ebene: Web Components als W3C-Standard, die mit VueJS, React, Angular oder ohne Framework funktionieren. Wenn Sie VueJS nutzen, können Sie KoliBri-Komponenten integrieren – kein Ausschluss, kein Umbauen.

**Warum KoliBri für Framework-Freiheit?**

- **Kein Framework-Lock-in** – Web Components funktionieren mit Vue, React, Angular
- **Standard statt Vorgabe** – W3C-konform, nicht von Google/Meta abhängig
- **Zukunftssicher** – Wenn ein Framework sich ändert, bleiben die Komponenten

---

> Mehr Infos:
>
> - **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**
> - [Repository - Public UI - KoliBri](https://github.com/public-ui/kolibri)

## Beschreibung

**Feedback:** <br>Hallo Deutschland - Stack - Team,
ich bin mir aktuell unklar, was der Sinn dieser Technik Landkarte in Bezug auf den Deutschland - Stack sein soll. Hier wird Software, Programmierframeworks, Schnittstellenstandards etc. aufgeführt. Was ist das Ziel das für Sie durch Vorgabe dieser Technologien erreicht werden soll?

Was bedeutet es für meine Firma, wenn ich auf dem Deutschland-Stack Marktplatz Software veröffentlichen will und z. B. VueJS verwende und nicht Angular oder React. Werde ich dann aus dem Marktplatz ausgeschlossen bzw. nicht aufgenommen?

Meine Einschätzung: Ich glaube nicht, dass Sie sich einen Gefallen tun konkrete Implementierungstechniken vorzugeben.

1. Risikomanagement: Sie geben z. B. Angular vor: Wenn Google jetzt beschließt das Framework aufgrund eines neuen Trends komplett zu überarbeiten, sind erst mal sehr viele Anwendungen des Stacks betroffen die alle "umentwickelt" werden müssen.
2. Sie wissen nicht was die Zukunft bringt. Hier jetzt auf dieser Ebene einzuschränken zieht nach sich, dass Sie ggf. Möglichkeiten durch andere Technologien "auf der Strecke" bleiben.

Meine Vorschläge:

- Legen Sie die Schnittstellen fest mit denen gearbeitet werden soll / kann. Gerade zu den zentralen Diensten die der Stack anbieten will. Die haben deutlich länger Bestand. Die Auswahl des Frameworks, der Datenbank etc. sollte abhängig von der Aufgabe sein und nicht "diktiert" werden.
- Wenn Sie planen, dass alles was im Marktplatz des Deutschland Stacks veröffentlicht wird, in der Deutschen Verwaltungscloud laufen soll, so schaffen Sie hierzu Kompatibilität und verweisen die auf die entsprechenden Standards bzw. geben Sie diese an. Hier aber bitte auf das für den Betrieb notwendige beschränken.
- Wenn Sie Ansprüche an Datenhaltung, Softwarequalität etc. haben, so könnten sie auch Qualitätsziele für diese Bereiche definieren. Die haben üblicherweise ebenfalls länger Bestand.

Viele Grüße und ich bin gespannt was aus dem Deutschland Stack noch erwachsen wird.

Michael Fröhler

RIWA GmbH
