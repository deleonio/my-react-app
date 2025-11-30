**Titel:** Feedback für die Seite /landkarte/
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/260
**Typ:** issue
**Status:** Offen
**Erstellt:** 10. November 2025 um 18:21
**Aktualisiert:** 28. November 2025 um 20:11
**Autor:** André Rebentisch (@oc000047277822)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 1
**Likes:** 2
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

​Die vorgelegte Zusammenstellung verwendeter low-layer Technologien für den Deutschland-Stack wirkt generisch und willkürlich. Der aktuelle Stack setzt zu niedrig an. Es ist **nicht klar, was man hier unternehmen möchte mit den kartierten Diensten.** 

Eine Möglichkeit ist die Bündelung horizontaler Unterstützung für die kartierten Technologien, die bei jeder Nutzung durch Behörden und Verwaltungen auftauchen. Wie gemeinsame Security Reviews des Codes, standardisierte Muster-Verträge, AVV-Definition, Dokumentation, Evaluation von Marktalternativen, Standard-Ausschreibungen empfohlene Konfigurationen.  

Generische Bausteine für Bürgerdienste gehören in den Tech-Stack: Zahlungskomponente, Terminbuchungskomponente, Datenumwandlungskomponente, eID, Captchalösung usw. 

Im Falle des GSB 11, ein Beispiel höherer Ebene, hat man bekanntlich eine bestehende Technologie (Typo3 CMS) speziell für die Bundesverwaltung gepackt. Das ist durchaus sinnvoll, denn alle Verwaltungen haben spezielle, aber oftmals gleichförmige Anforderungen, etwa im Hinblick auf AVV, Migrationspfade von älteren Systemen, Barrierefreiheit u.ä. 
Bei MySQL und MariaDB fällt die Dopplung verwandter Technologien auf, das sind ja zwei Zweige des gleichen Baumes. Wichtig ist bei diesen die vorausschauende Konfiguration für ISO 91379 als Norm für die Formatierung von Namensbestandteilen. Häufig unterstützen DBMS in der Werkskonfiguration zum Beispiel keine polnischen Zeichen, da standardmäßig keine echten Unicode-Typen vergeben werden. Diese Zeichen sind vielfch Teil von Namen. Im Gegensatz zu Umlauten wird dieser Punkt oftmals übersehen.
Wenn wir im Rahmen eines Web-Portal-Projektes für eine Behörde eine Captcha-Lösung oder ein Cookie-Banner einbinden, ist dies nur eine Nebenaufgabe in der Gesamtheit. In einem Stack würde man solche Komponenten für sich genommen kuratieren (entwickeln, pflegen und perfektionieren). So gibt es meines Wissens einen in der Praxis ungelösten Widerspruch zwischen Barrierefreiheit-Anforderungen und Captcha-Funktionalität. Das Problem muss also “für sich” gelöst werden. Für den Einsatz einer Analytics-Lösung für Websites im behördlichen Kontext, z.B. Matomo. braucht es eine dedizierte Entwicklung von beispielhaften  Konfigurationen und Begleitdokumenten. Ein Stack bedeutet dann Kostenersparnis und Standardisierung zur Verschlankung von IT-Dienstleistungen für die Verwaltung.
