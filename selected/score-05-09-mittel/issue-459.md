**Titel:** ekom21: Feedback zum Deutschland-Stack
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/459
**Typ:** issue
**Status:** Offen
**Erstellt:** 29. November 2025 um 22:27
**Aktualisiert:** 29. November 2025 um 22:27
**Autor:** Martin Kuban (@OC000112327660)
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

Als zentraler und öffentlicher IT-Dienstleister in Hessen und Teil der landesweiten hessischen IT-Infrastruktur sehen wir den D-Stack als ein offenes und interoperables Ökosystem für den öffentlichen Sektor in Deutschland. Wir regen an, dass die Erfahrungen der Länder und Kommunen mit ihren ausgeprägten und etablierten zentralen IT-Strukturen bei der Konzeption des D-Stacks einbezogen werden und die Gesamtlösung künftig zentral und verbindlich koordiniert wird. Dabei sollen im Mittelpunkt der Aktivitäten die für ein offenes Ökosystem notwendigen Standards, Integrationen und Kernkomponenten sowie die damit einhergehenden organisatorischen, rechtlichen, finanziellen und technischen Maßnahmen stehen.

Für die Realisierung braucht es nach unserer Auffassung eine Mindset-Veränderung:

* Es gilt die öffentliche IT bundesweit zu denken und konsequent über die Ländergrenzen hinweg zu standardisieren. Dabei ist es wichtig aus den Standardisierungs- und Zentralisierungserfahrungen der Bundesländer zu lernen und gleichzeitig in Zukunft die föderalen Initiativen zu koordinieren und diese an Interoperabilität auszurichten.
* Für zukünftige Softwareentwicklungsprojekte von neuen Verfahren sollte ein standardisiertes, transparentes, zentrales Tool zur Nachverfolgung von Aufgaben, Anforderungen und Issues existieren– vergleichbar mit modernen Plattformen wie GitLab/GitHub. Dadurch wird eine klare Sichtbarkeit des Projektfortschritts sowie eine effiziente Zusammenarbeit aller Beteiligten sichergestellt. 

Es benötigt eine Gesamtarchitektur (Landkarte) als BigPicture:

* Die in Hessen bereits etablierte, zentrale Lösungslandkarte (Modell Hessen) dokumentiert sämtliche zentralen und wiederverwendbaren Strukturen, Prozesse, Schnittstellen und Kommunikationswege, die sich für die Umsetzung von Digital‑ und Verwaltungsinnovation als Basis anbieten. Sie bildet damit ein bewährtes Referenzframework, das sich hervorragend dazu eignet, die Grundlage für eine erste Version der deutschlandweiten „Deutschland‑Stack“‑Lösungslandkarte zu werden.
* Um eine ausreichend objektive Ausgangsbasis zu schaffen, sollten Lösungslandkarten von mehreren Bundesländern „übereinandergelegt“ und Lösungen mit hohem Wiederverwendungspotenzial identifizieren werden.

Lösungsansatz für weitere Vorgehensweise:

* Die vorhandenen, in regionalen Strukturen bewährten Kompetenzen (als zentrale Funktionalität/Verantwortung) sollten im Deutschland-Stack aufgenommen und auf Reife bzw. Zukunftsfähigkeit überprüft werden. Sofern diese im aktuellen Stand nicht ausreichen bzw. zukunftsfähig sind, sollten diese auslaufen und künftig ersetzt werden. Mit Hilfe von Modernisierungsprojekten kann die Weiterentwicklung bzw. Modernisierung sichergestellt werden. Hierdurch ist man auch in einer Übergangszeit handlungsfähig und kann dennoch die Verankerung im D-Stack umsetzen.

 

Erste Sammlung von Komponenten/Lösungen, die aus unserer Sicht im Deutschland-Stacks zu adressieren sind:

* Transport- und Datenstandards:
  * XÖV-Standards
  * FitConnect
  * NOOTS System
  * Sicherer und verschlüsselter Transport von beliebigen Daten zwischen Behörden (Beispiel: besondere Behördenpostfach beBPo)
  * Sichere Netzinfrastruktur und/oder sichere Verbindungswege\
    (Herausforderungen aktuell: Netz des Bundes hat begrenzte Bandbreiten und nicht alle sind darüber zu erreichen)
  * Fachübergreifender, strukturierter Verzeichnisdienst mit Zuständigkeitsfinder\
    (z.B. für Vollstreckungsbehörden, beBPo-Postfächer in strukturierter Suchform, nachweisliefernde Standesämter etc.) und notwendigen Kommunikationsinformationen (z.B. Zertifikate für Signatur und Verschlüsselung)
* Basis-Vertrauensdienste / sichere Identifikation:
  * IDP/IAM (Identity Provider / Identity & Access Management)
  * Signatur- und Siegeldienst
  * Sichere Bürger- und Unternehmens-Identifizierung
* standardisierte Schnittstelle für Massendruck
* Lösungen / Fachverfahren als Alternative aus der öffentlichen Hand:
  * LowCode/NoCode Antragsplattform am Beispiel Civento aus Hessen
  * Datenplattform-, OpenData- und SmartCity-Lösungen am Beispiel cosma21
  * eAkte-Lösung am Beispiel der landesweiten kommunalen Lösung 
  * Durch zentrale Anwendungsplattform verbundene und gestützte Fachverfahrensregister am Beispiel der VOIS-Plattform
* Betriebsstandards:
  * Standards für Betrieb, insbesondere in Bezug auf neue Services bzw. Neuentwicklungen (angelehnt an DVC-Reifegrade) mit dem Ziel der Cloud-Readiness, unabhängig vom Betriebsszenario (private-, hybrid- oder public-cloud) . Potenzielle Technologien: Container, kubernetes, via terraform steuerbare Systemkonfiguration
  * Standards für Automationen im Betrieb für ein übergreifendes Arbeiten über alle Bundesländer hinweg. Bereiche (mit technischen Beispielen):\
    Installation und Configmanagement ("Infrastructure as Code), CI/CD Pipeline, TLS Zertifikate (acme)

Die Geschwindigkeit, mit der Verwaltungsleistungen modernisiert werden, hängt maßgeblich von klar definierten und eindeutig beschriebenen Komponenten (Verantwortlichkeiten) im Deutschland‑Stack sowie von deren konsequenter, flächendeckender Bereitstellung und Umsetzung in bestehenden und zukünftigen IT‑Lösungen ab. Daher appellieren wir an eine konsequente und zentral koordinierte Integration des Deutschland-Stacks in bestehende Infrastrukturen. Dabei ist auch die nachhaltige Finanzierung der Aktivitäten aller notwendigen Akteure zu berücksichtigen.

**Chancen und Risiken einer konsequenten bzw. nicht‑konsequenten Umsetzung des Deutschland‑Stacks am Beispiel der Zentralisierung von iKFZ**

* **Aktuelle Situation:**\
  Die heutige dezentrale iKFZ‑Lösung bedient (nach Schätzungen) bis zu zehn Schnittstellen zu Registern und Drittanbieterdiensten, die am Zulassungsprozess beteiligt sind. Dabei handelt es sich überwiegend um proprietäre bzw. individuelle Schnittstellen und Kommunikationswege.
* **Deutschland‑Stack als Chance:**\
  Eine konsequente und planmäßige Implementierung von NOOTS (und Deutschland‑Stacks) bei allen betroffenen Stellen führt mit standardisierten Kommunikationsschnittstellen und Datenformaten zu einer erheblichen Vereinfachung der Integration und Kommunikation. Dadurch wird die Realisierung der neuen zentralen Lösung deutlich vereinfacht und beschleunigt.
* **Deutschland‑Stack als Gefahr:**\
  Fehlen die Standards oder werden sie nicht frühzeitig umgesetzt, müssen bestehende, proprietäre Lösungen weiterhin eingebunden und gepflegt werden. In diesem Zusammenhang ist auch die zukünftige zentrale iKFZ-Lösung zu nennen, bei der durch fehlende Standards die Umsetzung behindert wird. Dies reduziert das Potenzial zur Vereinfachung und Beschleunigung erheblich. Zudem entsteht ein unnötiger Mehraufwand, weil die Standards des Deutschland‑Stacks nachträglich (erneut) implementiert werden müssen.

Die Deutsche Verwaltung-Cloud (DVC), als ein zentrales Ökosystem. ist bereits heute als ein standardisierter Rahmen für moderne, zentrale und wiederverwendbare IT-Services für die öffentliche Verwaltung etabliert. Die erreichten Ergebnisse sind eine Bestätigung, dass die Zusammenarbeit der IT-Dienstleister über die föderalen Strukturen hinaus gut funktionieren kann. Wir haben bewiesen, dass die wichtigen Handlungsprinzipien für Zentralisierung- und Konsolidierungsinitiativen uns nicht fremd sind. Daher möchten wir empfehlen, dass sowohl DVC, als auch die DVC-Akteure im Deutschland-Stack Berücksichtigung finden.

Wir bedanken uns für die Möglichkeit einer Beteiligung an der Ausgestaltung des Deutschland-Stacks und bieten gerne unsere Unterstützung und Mitwirkung an.

Team des IT-Dienstleisters ekom21 und Vertreter der kommunalen Verwaltung aus Hessen
