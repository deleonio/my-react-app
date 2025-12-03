**Titel:** Daten: Open Data Contract Standard und Data Contract CLI
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/358
**Typ:** issue
**Status:** Offen
**Erstellt:** 25. November 2025 um 08:35
**Aktualisiert:** 27. November 2025 um 18:07
**Autor:** Simon Harrer (@OC000110935065)
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

## Beschreibung

Im Bereich Daten hat sich der Open Data Contract Standard (offener Standard bei der Linux Foundation) in Kombination mit dem Data Contract CLI (open-source Python-Tool mit MIT Lizenz) etabliert. Dadurch lassen sich Daten als Schnittstelle beschreiben (Open Data Contract Standard) ähnlich wie man eine REST-API mit OpenAPI beschreibt, und die Einhaltung der Garantien lässt sich automatisch mit dem Data Contract CLI Werkzeug überprüfen. In modernen Datenstacks sollte beides nicht fehlen.

Der Open Data Contract Standard (ODCS) wurde ursprünglich von PayPal entwickelt, dann unter Open Source gestellt, und anschließend der Linux Foundation übergeben im Rahmen des bitol Projekts (https://bitol.io/). Das Technical Steering Committee hat dann die PayPal-Spezifika entfernt, um den Standard für alle Firmen nutzbar zu machen, und entwickelt ODCS sehr aktiv weiter.

Kleiner Disclaimer: Ich bin Teil des Technical Steering Committees von bitol bei der Linux Foundation, und damit aktiver Contributor des Open Data Contract Standards, als auch Co-Maintainer des Data Contract CLI.

Aber das sehe nicht nur ich so, sondern auch Thoughtworks: https://www.thoughtworks.com/en-de/radar/tools/summary/data-contract-cli als auch https://www.thoughtworks.com/radar/tools/data-mesh-manager erwähnen beide sowohl den Open Data Contract Standard als auch das Data Contract CLI. 

"We've found \[Data Contract CLI\] especially useful in the data mesh space to operationalize contract governance between data products via CI/CD integration. This approach reduces manual errors and ensures data quality, integrity and compatibility in data exchanges across services." (Zitat aus https://www.thoughtworks.com/en-de/radar/tools/summary/data-contract-cli)

Git Repositories:

* https://github.com/bitol-io/open-data-contract-standard (ca. 600 GitHub Stars) Apache 2.0 Lizenz
* https://github.com/datacontract/datacontract-cli (ca. 700 GitHub Stars, über 100 Contributors) MIT Lizenz

Webseiten:

* https://bitol-io.github.io/open-data-contract-standard/latest/
* https://cli.datacontract.com/
* https://bitol.io/
