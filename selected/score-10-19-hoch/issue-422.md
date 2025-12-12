**Titel:** Feedback für die Seite /landkarte/
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/422
**Typ:** issue
**Status:** Offen
**Erstellt:** 28. November 2025 um 15:06
**Aktualisiert:** 28. November 2025 um 15:06
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

## Beschreibung

**Feedback:** <br>Wir schlagen die Aufnahme von **Teamscale** ([www.teamscale.com](http://www.teamscale.com), entwickelt von der CQSE GmbH, München) in den Deutschland-Stack vor. Teamscale ist eine Analyseplattform, die Softwarequalität, Testabdeckung und technische Schulden in Echtzeit sichtbar macht und damit einen wertvollen Beitrag zur Qualität der deutschen Verwaltungs-IT leisten kann.

Die Aufnahme unterstützt die Ziele der Digitalen Souveränität und Effizienz. 
Die CQSE GmbH ist ein Spin-off der TU München. Sie ist inhabergeführt und hat keinerlei Abhängigkeiten von ausländischen Eigentümerstrukturen. Dies stärkt die Unabhängigkeit der deutschen Verwaltungs-IT und entspricht der “Made in EU first”-Policy des Deutschland-Stacks.

## Technischer Mehrwert und Risikominimierung

* Alleinstellungsmerkmal Test-Gap-Analyse: Teamscale erkennt in Echtzeit, welche Code-Änderungen *nicht* getestet wurden. Dies erlaubt eine präzise Steuerung von Testaufwänden ("Testen, was geändert wurde") und verhindert, dass Fehler in kritischen Fachverfahren produktiv gehen.  
*Architekturanalyse: Bei der Modernisierung von Altsystemen macht Teamscale die Architektur und Abhängigkeiten transparent und überwacht, dass die neue Lösung sauber implementiert wird.  
* Vermeidung technischer Schulden: Durch kontinuierliche statische Codeanalyse  (Klon-Erkennung, Komplexität, Architektur-Verletzungen) wird die Wartbarkeit der Software über Jahrzehnte gesichert.  
* Sofortiges Feedback für manuelle und KI-Entwicklung: Der inkrementelle Analyseansatz ermöglicht sekundenschnelles Rückmeldung möglicher Qualitäts- oder Sicherheitsprobleme (“Findings”) direkt in der Entwicklungsumgebung, in Pull Requests oder in der CI/CD-Pipeline. So können Entwicklungsteams sehr früh reagieren. Dieses schnelle Feedback kann auch in KI-agentenbasierten Entwicklungsmodellen verwendet werden, um Qualitätsprobleme gar nicht erst entstehen zu lassen.  
* Sicherheit: Durch Integration etablierter Security-Linter deckt Teamscale mögliche Sicherheitsrisiken frühzeitig auf und ermöglicht so einen “secure by design”-Ansatz. Eine Integration mit gängigen Werkzeugen zur Identifikation von Schwachstellen in verwendeten Software-Bibliotheken ermöglicht einen konsolidierten Blick auf das Thema Security.

## Datenschutz und Architektur

* Technologie-Unabhängigkeit: Analyse von 35+ Programmiersprachen (u.a. Java, C#, C/C++, ABAP, Python, Go, PHP, JavaScript, TypeScript) in einer einheitlichen Oberfläche.
* Integration: Nahtlose Anbindung an die im Deutschland-Stack enthaltenen Technologien (z.B. GitLab, Jenkins, GitHub Actions) sowie viele weitere Tools und Plattformen.  
* Datenhoheit: Der Betrieb kann vollständig *On-Premises* bzw. in den souveränen Clouds der öffentlichen Verwaltung erfolgen. Quellcode und Analysedaten verlassen niemals den Hoheitsbereich des Auftraggebers.  
* Offene Schnittstellen: Via REST-API integriert sich Teamscale nahtlos in die offene Architektur des Deutschland-Stacks. Sämtliche Analyseergebnisse (Metriken, Test-Gaps, Findings) stehen vollständig maschinenlesbar über eine REST-API zur Verfügung. Damit können Quality-Gates in CI/CD-Pipelines automatisiert oder zentrale Dashboards des Deutschland-Stacks gespeist werden, etwa für übergeordnete Governance-Dashboards des Bundes. 

## Referenzen

* Industrie: Erfolgreich im breiten Einsatz bei führenden DAX-Konzernen (u.a. Munich Re, BMW, Siemens) sowie Unternehmen im Bereich kritischer Infrastruktur (u.a. EnBW, Stadtwerke München) zur Absicherung geschäftskritischer Systeme.  
* Öffentliche Verwaltung: Teamscale wird von Behörden auf Landes- und Bundesebene genutzt, um die Qualität von Zuliefersoftware zu prüfen und interne Entwicklungen zu steuern.

## Fazit

Die Aufnahme von Teamscale in den Deutschland-Stack wäre ein Bekenntnis zu professionellem Qualitätsmanagement "Made in Germany". Es befähigt Behörden, die "Black Box" Software zu durchleuchten, Lieferanten besser zu steuern und die langfristige Wartbarkeit der deutschen Verwaltungssoftware sicherzustellen.

Die CQSE GmbH steht zudem gerne für die Teilnahme an den begleitenden Workshops zur Verfügung.
