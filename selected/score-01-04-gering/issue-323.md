**Titel:** Domäne Data Analytics & Engineering, fehlend? (IT-Referat, München)
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/323
**Typ:** issue
**Status:** Offen
**Erstellt:** 20. November 2025 um 19:31
**Aktualisiert:** 20. November 2025 um 19:31
**Autor:** Fabian Reinold (@freinold)
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

Im Tech-Stack des D-Stack werden als zu betrachtendes Thema u.a. auch die Bereiche

- Datenanalyse
- Datenkatalog

genannt.

Im Bereich Daten des Tech-Stack wird auf die empfohlenen Bebauung dieses Bereiches nur sehr unzureichend eingegangen. Es würde Sinn machen das Tooling für diesen wichtigen Bereich auch zu benennen. Eventuell macht es sogar Sinn diesem großen Bereich eine eigene Subdomäne im Bereich Daten zuzuordnen.

Folgende Bereiche könnten Teil eines klassischen Analytics-Stack sein und in solch einer Subdomäne näher betrachtet werden:

![Unbenannt.png](/uploads/9849caa84b31bc332ddf0fc3541a1168/Unbenannt.png)

<table>
<tr>
<th>Bereich</th>
<th>Erklärung</th>
<th>Kommentar</th>
<th>Deutschland-Stack</th>
<th>Beispiel LHM</th>
</tr>
<tr>
<td>Upstream Source</td>
<td>Primärquelle der Daten die dem Analytics Stack zugeführt werden soll.</td>
<td>In den meisten Fällen handelt es sich um Daten die in einer klassischen relationalen Datenbank liegen. Oft sind Quellen aber auch SAAS-Angebote die über Schnittstellen angebunden werden oder strukturierte Files. Datenbanken und Strukturierte Files sind Technologien die im Bereich Daten des D-Stacks umfassend behandelt werden. SAAS-Dienste sind individuell und sollten nicht Teil eines Tech-Radars sein.</td>
<td>

:white_check_mark: Gut
</td>
<td>PostgreSQL, CSV</td>
</tr>
<tr>
<td>Analytics Database</td>
<td>Ort an dem die Daten zum Zwecke der Analyse (so wie vor und nachgelagerten Prozessen) bereitgehalten werden.</td>
<td>

In meisten Unternehmen wird als Analytics Database ebenfalls eine klassische relationale Datenbanl verwendet. Es gibt allerdings auch spezialisierte Analytics Datenbanken.

Mit Cassandra ist eine spaltenbasierte NoSQL-Datenbank genannt. Es ist allerdings unklar ob diese Technologie als Analytics-DB für große Datenmengen vorgeschlagen/vorgesehen ist. Für den Bereich der GeoDaten konnten wir Technologie finden. (z.B. PostGis eine Erweiterung von PostgreSQL für Geodaten)
</td>
<td>

:warning: Basis
</td>
<td>PostgreSQL</td>
</tr>
<tr>
<td>Ingestion Tool</td>
<td>Tooling um Daten aus einer Upstream Source in eine Analytics database zu überführen.</td>
<td>

Im Tech-Radar konnten wir keine expliziten Hinweise auf die Bebauung für ein ETL-Tool finden. **Node-Red** könnte für die Integration und Automatisierung von Datenflüssen genutzt werden, wird aber im Kontext hierfür nicht als zielbebauung für ETL benannt und ist in erster Linie auch kein klassisches ETL-Tool.

Viele Unternehmen bauen sich ihre Ingestion mittels SQL selbst. SQL wird aber auch nicht explizit benannt nur unmittelbar über die auf SQL basierenden relationalen Datenbanken.
</td>
<td>

:x: Fehlt
</td>
<td>Pentaho Data Integration, Apache Hop, Airbyte, Apache Airflow</td>
</tr>
<tr>
<td>Data Modeling</td>
<td>Tooling um Daten in einer Analytics Database zu transformieren.</td>
<td>

Im Tech-Radar konnten wir keine spezifischen Tools für Data Modeling finden, wie zum Beispiel **dbt (data build tool)**. Es werden verschiedene Datenbanken, Integrations- und API-Technologien erwähnt, jedoch keine spezialisierten Tools für das Datenmodellieren.
</td>
<td>

:x: Fehlt
</td>
<td>dbt (data build tool)</td>
</tr>
<tr>
<td>Reverse ETL</td>
<td>Tooling um aufbereitete Daten aus der Analytics Database zurück in Fachanwendungen zu bringen.</td>
<td>

Im Tech-Radar konnten wir kein spezifisches Reverse ETL Tool finden.

Es ist unklar, ob solch ein Tooling benötigt wird oder einfach die Ingestion Tools dafür verwendet werden sollen.

Es gibt spezialisierte Tools wie z.B. **Hightouch** die unter anderem auch explizit Reverse ETL bewerben. Es bleibt unklar ob hierfür ein explizites Tooling vorgesehen sein soll.
</td>
<td>

:x: Fehlt
</td>
<td>kein explizites Tooling bei der LHM vorhanden</td>
</tr>
<tr>
<td>BI Tools (+ Analyse Tools)</td>
<td>Tooling um Daten aus der Analytivs Database zu Analysieren und zu Visualisieren und diese Analysen verfügbat zu machen.</td>
<td>

Der Fokus des Tech-Radar liegt auf verschiedenen Datenformaten, Integrationsprotokollen und einigen Technologien, die mit Datenmanagement und -integration in Verbindung stehen.

Typische Analytics/BI-Tools wie Tableau, Power BI, Metabase oder ähnliche Analysewerkzeuge sind nicht aufgeführt und stellen für uns die größte Lücke im Bereich Data Analytics dar.
</td>
<td>

:x: Fehlt
</td>
<td>

Metabase,

Shiny
</td>
</tr>
<tr>
<td>Data Catalog</td>
<td>Tooling um die Fülle an Daten/Metadaten in der Analytics Database und deren Abhängigkeiten zu visualisieren und durchsuchbar zu machen.</td>
<td>

Es wird **Comprehensive Knowledge Archive Network (CKAN)** ein Werkzeug für Open Data Portale zur Katalogisierung, Veröffentlichung, Suche und Bereitstellung von Daten genannt.

Ob sich das auch für einen internen unternehmensweiten Data Catalog eignet wissen wir aber nicht.

Es ist "**Data Catalog Vocabulary (DCAT)**" aufgeführt, das ist aber mehr ein Standard für die Beschreibung von Datenkatalogen, also eine spec. aber kein explizites Tooling um diesen Bereich zu unterstützen bzw. zu bebauen.
</td>
<td>

:warning: Basis
</td>
<td>nicht wirklich bebaut. Ein abgespeckter Datenkatalog über die mittels dbt (siehe Data Modeling) verwalteten Daten ist möglich.</td>
</tr>
<tr>
<td>Orcestrierung</td>
<td>Tooling um die zeitlichen Abhngigkeiten zwischen den einzelnen Komponenten zu steuern.</td>
<td>

Im Tech-Radar sind keine spezifischen Tools zur Orchestrierung von Data Analytics Stacks aufgelistet, wie man sie typischerweise in Data Engineering oder Data Science verwendet. Es wird CI/CD genannt, was man durchaus auch zur Orcestrierung der verschiedenen Tools verwenden kann. Explizite Tools wie z.B. **Apache Airflow** fehlen aber.
</td>
<td>

:warning: Basis
</td>
<td>keine explizite bebauung aber GitLab CI/CD, Jenkins werden genutzt.</td>
</tr>
</table>

Grundsätzlich lässt sich sagen, das im Tech-Radar viele Technologien genannt werden, es aber unklar bleibt ob die Technologien für Data Analytics und Engineering vorgesehen sind oder für andere UseCases in den Tech-Radar gewandert sind.

**Auch der **[**Data Hub Berlin**](https://portal.data-hub.berlin/)** enthält einen bereits in der Verprobung befindlichen, gut abgestimmten Daten-Stack, an dem man sich orientieren kann**

Es würde durchaus Sinn machen die Bebauung in einer so wichtige Domäne wie Data Analytics expliziter zu benennen.
