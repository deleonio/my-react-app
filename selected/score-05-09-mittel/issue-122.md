**Titel:** Feedback für die Seite /gesamtbild
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/122
**Typ:** issue
**Status:** Offen
**Erstellt:** 14. Oktober 2025 um 21:30
**Aktualisiert:** 28. November 2025 um 18:23
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 2
**Likes:** 0
**Dislikes:** 1
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

**Feedback:** <br>Gute Initiative, den „Flickenteppich“  endlich durch eine kohärente Architektur zu ersetzen. Mein zentrales Feedback zum Integrations-Layer: Ein reiner API-Gateway-Ansatz (z.B. mit Kong) ist zu kurz gedacht und wird mittelfristig zu neuer technischer Schuld führen.   

Warum?
Das Kernproblem ist nicht das Management von API-Endpunkten, sondern die Orchestrierung und Transformation von Daten aus heterogenen Legacy-Systemen. Ein Gateway sichert nur den Traffic ab; die komplexe Integrationslogik dahinter müsste in unzähligen, schwer wartbaren Microservices oder Functions selbst entwickelt werden. Das skaliert organisatorisch nicht und schafft den nächsten „Flickenteppich“.   

Empfehlung: Skalierbarer iPaaS-Ansatz
Architektur-Blaupause: Der API-led Connectivity Ansatz (System-, Prozess-, Experience-APIs) ist quasi die Blaupause für die geforderte föderale Schichtenarchitektur. Er ermöglicht lose Kopplung und fördert Wiederverwendung (#EfA) by design.   

Mehr als ein Gateway: Lösungen wie z.B. MuleSoft bieten nicht nur einen Gateway, sondern auch die standardisierten Low-Code-Werkzeuge (Anypoint Studio, DataWeave) für die komplexe Orchestrierung und Transformation dahinter. Das reduziert den TCO massiv, weil teure Eigenentwicklungen entfallen.   

Open-Source-Kern: Ähnlich wie z.B. Kong basiert auch MuleSoft auf einem Open-Source-Kern, der Mule Runtime Engine (https://github.com/mulesoft/mule). Für ein Projekt dieser Größenordnung sind jedoch die kommerziellen Enterprise-Komponenten der Anypoint Platform für zentrales Management, Governance und Sicherheit entscheidend. Man bekommt die Transparenz von Open Source plus die für den öffentlichen Sektor nötige Enterprise-Stabilität.   

Souveränität & Governance: Die iPaaS Plattform sollte für hybride Deployments konzipiert sein, was volle Kontrolle über den Betriebsstandort (z.B. in der DVCI) und damit digitale Souveränität gewährleistet. Ein Universal API Management könnte dem Föderalen IT-Architekturboard eine zentrale Steuerung des gesamten, heterogenen Ökosystems ermöglichen.   

Fazit:
Wir sollten die Chance nutzen, das Integrationsproblem an der Wurzel zu packen, anstatt nur Symptome mit einem Gateway zu verwalten. Ein strategischer iPaaS-Ansatz ist für die Komplexität des Deutschland Stacks die nachhaltigere und wirtschaftlichere Lösung.
