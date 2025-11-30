**Titel:** Feedback für die Seite /beteiligung
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/177
**Typ:** issue
**Status:** Offen
**Erstellt:** 21. Oktober 2025 um 09:29
**Aktualisiert:** 21. Oktober 2025 um 09:29
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 1
**Likes:** 3
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

**Feedback:** <br>Feedback zur Landkarte:
Zu dem Betrieb fehlt m.E. die Kategorie Observability & Analysis. Die Services, die in dem D-Stack laufen müssen hierbei überwacht und protokolliert werden. Daher würde ich sowas sehen wollen wie:
- cState zum Anzeigen des Service Status, Störungen, Wartungen, etc.
- Grafana, Prometheus, InfluxDB, Elasticsearch/Opensearch (ELK)
- Monitoring wie Zabbix, CheckMK, LibreNMS

Ebenfalls vermisse ich eine Kategorie Storage:
Ich denke hierbei an verteilte Dateisysteme wie GlusterFS oder Ceph, welche hier zum Einsatz kommen sollten.

Für die Kategorie Inbetriebnahme wären m. E. andere Git-Systeme noch eine Möglichkeit, ich denke hierbei an Gitea/Forgejo. 
Weiterhin sollte der Stack durch Tools wie Ansible, Chef, Puppet bzw. Terrafform/OpenTofu automatisierbar sein.

Zur Intergration: Ich vermisse hier HAProxy

Zur Kategorie Daten: Redis Key-Value Store

Zur Kategorie Sicherheit: KeyCloak (Oath, OIDC)
