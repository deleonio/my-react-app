**Titel:** Performantes und erweiterbares Framework für Online-Dienste www.fred4.de (Framework for eGovernment Deployment)
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/392
**Typ:** issue
**Status:** Offen
**Erstellt:** 27. November 2025 um 11:30
**Aktualisiert:** 27. November 2025 um 16:32
**Autor:** Markus Keller (@OC000011312314)
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

**Vier erfolgreiche Einer-für-Alle-Dienste** wurden gemeinsam mit den Ländern Bayern, Brandenburg, Hessen und Nordrhein-Westfalen auf FRED umgesetzt. FRED, der auf Open Source-Komponenten basierenden E-Government-Plattform der AKDB, stellt zentrale Online-Dienste der deutschen Verwaltung zur Verfügung. 

Der **Aufenthalt Digital** (Brandenburg) weist im bundesweiten Einsatz ( **15 Länder, 330 Behörden** online, 120 auf dem Weg) über **300.000 Nutzungen mit nun 60.000 Feedbacks** mit Ø 4,7 von fünf möglichen Sternen auf. Der Dienst ist mittels des XÖV-Standards „XAusländer“ mit allen gängigen Fachverfahren verbunden und wird monatlich über 22.000 mal genutzt. 

Die **Einbürgerung Online** (Nordrhein-Westfalen) weist **über 35.000 Nutzungen und 13.000 Feedbacks** mit Ø 4,5 Sternen auf. Die Feedback-Quote liegt auf einem stetig hohen Niveau von mehr als 40%, in einzelnen Monaten über 50%. Der Dienst ist Ende-zu-Ende über den XÖV-Standard „XEinbürgerung“ angebunden.

**eWaffe (Bayern) verzeichnet über 24.000 Nutzungen in 13 Ländern** , davon in mehreren Ländern flächendeckend. Der Dienst läuft bereits in über 164 Waffenbehörden, eng verzahnt mit dem Fachverfahren über den XÖV-Standard XeWaffe. In weiteren 90 Behörden wird er gerade ausgerollt. **4.600 Feedbacks** mit Ø 4,5 Sternen zeigen, dass auch in einem komplexen Rechtsgebiet ein Online-Dienst sehr positive Wahrnehmung erzeugen kann.

Der EfA-Dienst „**Fahrtenschreiber**“ hat über **17.000 Online-Anträge** verarbeitet und **3.700 Feedbacks** mit der Bewertung von Ø 4,1 Sterne erhalten. Die Zielgruppen sind Lkw-Fahrer/innen (für Fahrerkarten) mit besonderen Herausforderungen an die Nutzerfreundlichkeit und Unternehmen (für Unternehmens-/Werkstattkarten). Die Nachnutzungsallianz besteht aus neun Bundesländern sowie DEKRA (BW, BY, SN, ST), TÜV Süd (BW, BY, SN) und TÜV Hessen. Die Governance des EfA-Dienstes besteht nicht nur aus Behörden, sondern bindet in einem Public-Private-Partnership auch privatwirtschaftliche Akteure (TÜV, DEKRA) ein... Der EfA-Dienst „Fahrtenschreiber“ hat ein **breites technologisches Umfeld (Technologie-Stack) integriert, bestehend aus BundID, Elster-Organisationskonto, diverse Paymentplattformen, eine Biometriekomponente der Bundesdruckerei sowie mehrere Routing-Optionen (OSCI, XTA2, Fit-Connect).** Über den selbst entwickelten XÖV-Standard „XFahrtenschreiber“ ist der Online-Dienst an die Fachver-fahren der Behörden/Organisationen digital angebunden.

Neben den bisher knapp **400.000 erfolgreichen Nutzungen der vier EfA-Dienste** auf FRED mit knapp **80.000 EfA-Feedbacks** der Bürger dient FRED auch als erfolgreiche Plattform für eine große Zahl von Online-Diensten dar AKDB. **Insgesamt hat FRED über 11 Mio. Online-Dienstanwendungen erfolgreich absolviert. 615.000 Feedbacks** bilden die Grundlage zur steten Verbesserung der Dienste entlang der Bedürfnisse der Bürger.
FRED hat in der Spitze **pro Monat ca. 2 Mio. Online-Anträge** abgewickelt und erhält **derzeit ca. 1.000 Feedbacks pro Tag** . Für den Rollout der Dienste gibt eine bewährte und zeitgemäße Unterstützung, die jederzeit auch Aussagen zum Umsetzungsstand ermöglicht.
FRED ist in RUST programmiert, weist eine **cloudnative Architektur** auf, die mittels Kubernetes ausgerollt und aktualisiert wird. Das Entwicklungsframework zu FRED erlaubt durch die Modulbausteine für unterschiedliche Fachdienste die schnelle Umsetzung von zusätzlichen Online-Diensten. **Auch vorhandene fachliche Prozesse können so auf einer zeitgemäßen und gut skalierenden Plattform schnell leistungsfähig in die Breite gebracht werden.**

Als Infrastruktur für Online-Dienste ist FRED bundesweit erprobt und erfolgreich. Es ist möglich, FRED mit der AKDB gemeinsam als Open Source zur allgemeinen Nutzung bereitzustellen. Zu den derzeit ca. 120 Online-Diensten könnten mit parallelem Einstellen von Diensten hohe Online-Nutzungs-Erfolgszahlen bundesweit erreicht werden. Die sichtbaren Erfolge von Online-Diensten in Bayern beruhen maßgeblich auf dem dort vorrangig erfolgenden Einsatz von FRED.
> **Dieser Erfolg kann bundesweit zügig nachvollzogen werden, wenn FRED als Infrastruktur genutzt wird. Während FRED im Jahr 2023 1,8 Mio. mal genutzt wurde, waren es 2024 schon 3,8 Mio. erfolgreiche Anträge. Bis Ende Oktober 2025 hat FRED bereits 5,5 Mio. mal Bürger unterstützt, davon 3 Mio. mal in Bayern.** 

Das zeigt das Erweiterungspotential für Deutschland: Allein die vorliegenden Dienste bundesweit einzusetzen, würde fast 20 Mio. Nutzungen pro Jahr zusätzlich erbringen. Weitere zusätzliche Dienste können diese Werte vervielfachen. Arbeitsteilig bei Erstellung, Betrieb und Service.
