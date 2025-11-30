**Titel:** Feedback (allgemein und konkrete Vorschläge um den Stack zu erweitern)
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/108
**Typ:** issue
**Status:** Offen
**Erstellt:** 13. Oktober 2025 um 13:55
**Aktualisiert:** 13. Oktober 2025 um 13:55
**Autor:** Vincent Pabst (@OC000093978098)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 0
**Likes:** 3
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/108 -->

Sie treffen einen wunden Punkt: "offene und plattformunabhängige Systeme priorisieren" statt Vendor-Lock-in. Ihre Kritik an der kommunalen Realität – fehlendes Fachpersonal, unbrauchbare SDKs, Docker-Container-Chaos – kenne ich aus vielen Gesprächen.

Genau hier setzt KoliBri an: Barrierefreie UI-Komponenten, die ohne DevOps-Team sofort nutzbar sind. Kein Docker-Container nötig, keine komplexe Einrichtung – `npm install @public-ui/components` und los. In 15 Minuten steht die erste barrierefreie Oberfläche. 50+ Komponenten, 3.000+ wöchentliche Downloads, EUPL-lizenziert.

**KoliBri für die kommunale Realität:**

- **Einfach nutzbar**: npm-Installation, 15 Minuten bis zur ersten UI
- **Kein DevOps-Team nötig**: Web Components im Browser, keine Container-Komplexität
- **Plattformunabhängig**: W3C-Standard seit 2018, kein Vendor-Lock-in
- **Zentral gewartet**: ITZBund-Entwicklung, Updates für alle Projekte gleichzeitig

Welche SDKs haben Sie als "unbrauchbar" erlebt? Vielleicht können wir aus den Fehlern lernen.

---

> Mehr Infos:
>
> - **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**
> - [Repository - Public UI - KoliBri](https://github.com/public-ui/kolibri)

## Beschreibung

Vielen Dank für die Möglichkeit Feedback zum Entwurf des Deutschland-Stacks zu geben. Grundsätzlich ist die Initiative zur Schaffung einheitlicher Technologiestandards für die öffentliche Verwaltung sehr zu begrüßen. Der vorliegende Entwurf wirft jedoch aus praktischer Sicht einige kritische Fragen auf, die ich im Folgenden detailliert ausführen möchte.

1. Fehlende Basistechnologien und eine unklare Ausrichtung

Es werden zwar Technologien und teils sogar Produkte (wie z.B. n8n - was aktuell auch in der Kritik steht) genannt, aber um ein vollständig nutzbares System zu schaffen, fehlen noch einige entscheidende Komponenten. Der Stack wirkt in seiner jetzigen Form eher wie eine Sammlung von Werkzeugen und weniger wie ein kohärentes Ökosystem. Es fehlt an grundlegenden und weitverbreiteten Web-Frameworks, die das Rückgrat unzähliger erfolgreicher Digitalprojekte bilden. Konkret fehlen etablierte und robuste Systeme wie z.B. Symfony oder Laravel aus der PHP-Welt oder auch ein Express.js für Node.js-Umgebungen. Diese Frameworks sind die Arbeitspferde der modernen Webentwicklung und bieten die notwendige Struktur, Sicherheit und Skalierbarkeit für die meisten Anwendungsfälle in der Verwaltung.

Im Idealfall verständigt man sich doch auch darauf, offene und plattformunabhängige Systeme wie z.B. PHP + Symfony + Bootstrap zu priorisieren, anstatt plattform- und herstellergebundene Systeme wie z.B. .NET / .NET MAUI zu empfehlen. Eine solche Entscheidung für offene Standards würde die digitale Souveränität Deutschlands stärken, vermeidet einen gefährlichen Vendor-Lock-in und sichert den Zugang zu einem riesigen Pool an Entwicklerinnen und Entwicklern.

2. Sicherheitsrisiken durch übermäßige Komplexität

Durch die Vielzahl der Tools, die im Deutschland-Stack enthalten sind, wird es ein Graus, sich vor Sicherheitslücken zu schützen. Jedes zusätzliche Werkzeug, jede weitere Bibliothek und jede Schnittstelle vergrößert die Angriffsfläche eines Systems. Einzelne Anbindungen, z.B. in einem Workflow-Builder wie n8n an ein System mit REST-API, bergen erhebliche Risiken: Wie wird sichergestellt, dass Credentials nicht verloren gehen, wenn sie beispielsweise als unverschlüsselte Bearer-Token im Header eines Requests mitgesendet werden?

Hier stellt sich eine grundsätzliche architektonische Frage: Macht es Sinn, so viele Tools einzusetzen und damit auch "zu empfehlen", wenn ein "Modern-Monolith"-Ansatz für die meisten Aufgaben von Kommunen vollkommen ausreichend ist? Nicht jede Verwaltungsanwendung benötigt eine komplexe Microservice-Architektur. Ein gut strukturierter Monolith ist oft einfacher zu entwickeln, zu warten und abzusichern. Der Stack sollte hier eine klare Orientierung bieten, anstatt Komplexität als Standard zu suggerieren.

3. Das fehlende "API-First"-Prinzip als Leitgedanke auch für Anwendungen die nicht mit D-Stack geschaffen wurden

Was bringt es den Kommunen, wenn IT.NRW beispielsweise die Insolvenzbekanntmachungen von Jakarta Faces auf eine moderne Architektur (z.B. PostgreSQL + PHP/Symfony + Angular) umstellt, wenn den Kommunen dann nicht auch ein Weg geboten wird, die Daten automatisiert via API abzurufen? Ohne eine konsequente API-Strategie bleiben Fachdaten in ihren Silos gefangen, und die Digitalisierung führt lediglich zu neuen, schöneren Weboberflächen, ohne die zugrundeliegenden Prozesse zu optimieren.

4. Ignoranz gegenüber der kommunalen Realität

Ein zentraler Kritikpunkt ist, dass der Stack von IT-Kapazitäten und -Infrastrukturen auszugehen scheint, die in der Realität der meisten Kommunen nicht existieren.

Fehlendes Fachpersonal: Wird überhaupt daran gedacht, dass in vielen Verwaltungen gar kein ITler da ist, der mal eben einen Docker-Container auf der Linux-VM im Proxmox-Ceph-Cluster aufsetzt und dort dann eine App deployt? Die Anforderung, moderne DevOps-Praktiken zu beherrschen, überfordert die personellen Ressourcen insbesondere kleiner und mittlerer Kommunen bei Weitem. Der Stack muss Lösungen und Bereitstellungsmodelle anbieten, die auch ohne dedizierte DevOps-Teams betrieben werden können. Ansonsten sollte auch mal an der im Vergleich zur Wirtschaft geringen Bezahlung von ITlern mit Können (die den öD in der Regel schnell verlassen) gearbeitet werden statt immer nur Kommunen teuer extern einkaufen zu lassen.

Unbrauchbare SDKs: Was geschieht, wenn ein vom Bund oder Land beauftragtes Unternehmen ein SDK zur Nutzung seiner Software zur Verfügung stellt und erwartet, dass in den nutzenden Kommunen auch jemand da ist, der dieses SDK konkret anwenden kann? Ein Software Development Kit ist nutzlos, wenn die Kompetenzen zur Implementierung fehlen. Stattdessen sollten fertige, einfach zu integrierende Lösungen im Fokus stehen.

5. Verbindlichkeit und Umgang mit Bestandssystemen

Die schönste Sammlung von Standards ist wirkungslos, wenn ihre Anwendung nicht verbindlich ist.

Wie verpflichtet man Unternehmen, die für die öffentliche Verwaltung liefern, dazu, den Deutschland-Stack zu nutzen und IMMER offene Schnittstellen zu den in den Anwendungen genutzten Daten zu bieten? Dies muss eine zwingende Anforderung in allen öffentlichen Ausschreibungen und Verträgen werden. Die Bereitstellung einer dokumentierten, vollumfänglichen API für alle Fachdaten und -funktionen darf keine Option sein, sondern muss eine Kernleistung werden.

Was macht man mit Bestandsanwendungen, bei denen man nicht an die Daten herankommt? Hier braucht es eine klare Migrationsstrategie. Hersteller müssen verpflichtet werden, für ihre Legacy-Systeme Schnittstellen nachzurüsten. Wo dies nicht möglich ist, muss der Austausch dieser Systeme strategisch geplant und gefördert werden.

6. Unklare Zielgruppe und die Illusion der „Do-it-yourself“-Digitalisierung

Ein fundamentaler Aspekt, der im Entwurf völlig unbeleuchtet bleibt, ist die Frage nach der eigentlichen Zielgruppe des Stacks. Wer genau soll das alles anwenden? Sollen die wenigen IT-Mitarbeiter in einer 400-Mitarbeiter-Stadtverwaltung, die heute bereits mit der Aufrechterhaltung des täglichen Betriebs überlastet sind, nun dazu übergehen, für ihr spezifisches städtisches Problem „mal eben schnell“ mit dem Stack eine kleine Software oder eine Automatisierung zu bauen?

Die Vision scheint zu sein, dass Kommunen demnächst „2000+ Free n8n Workflows for Every Use Case You Can Imagine“ statt aus GitHub von OpenCode herunterladen und damit ihre Probleme lösen. Dieser Ansatz verkennt jedoch die Realität und die Komplexität von Verwaltungsprozessen fundamental. Er fördert eine gefährliche „Plug-and-Play“-Mentalität, bei der unkoordinierte, schlecht gewartete und potenziell unsichere Insellösungen entstehen. Nennt sich das dann eine sinnvolle und nachhaltige Digitalisierung? Statt auf professionell entwickelte, skalierbare und sichere Fachanwendungen zu setzen, würde man so einen Flickenteppich aus Einzel-Automatisierungen schaffen, dessen Wartung und Sicherheit niemand mehr überblicken kann. Der Stack muss klar definieren, ob er sich an professionelle IT-Dienstleister und Softwarehersteller richtet oder ob er tatsächlich die Illusion nährt, jede Verwaltung könne zum Softwareentwickler werden.

Zusammenfassend lässt sich sagen, dass der Deutschland-Stack in seiner jetzigen Form wichtige praktische Hürden und grundlegende Architekturprinzipien vernachlässigt. Für einen echten Erfolg muss er pragmatischer, sicherer und stärker an der Realität der kommunalen Verwaltung ausgerichtet werden.

--

Zur Einordnung meines Feedbacks: Meine Perspektive speist sich nicht aus der Theorie, sondern aus jahrelanger, praktischer Erfahrung in der kommunalen IT. Ich habe Einblicke in eine Stadtverwaltung (Praktika und jetzige Anstellung), einen Landkreis (Ausbildung und zwei Jahre Berufserfahrung) sowie durch regen Austausch in viele weitere Kommunal-, Landes- und sogar Bundesverwaltungen erhalten. Die folgenden Punkte sind daher eine direkte Widerspiegelung der Herausforderungen, die sich vor Ort stellen.

Als Unternehmer habe ich parallel die Möglichkeit, Geschäftsprozesse von Anfang bis Ende (End-to-End) zu digitalisieren. Ein typischer Prozess umfasst weit mehr als nur Daten vom Bürger rein -> Daten ablegen -> Bescheid raus -> Zahlung bearbeiten. Dennoch lässt er sich mit einem Minimum an Werkzeugen hocheffizient abbilden: Ein externer Online-Shop liefert Bestelldaten per API. Ein zentrales PHP-basiertes ERP-System verarbeitet diese, stößt via API den Versand bei DHL an und meldet die Sendungsnummer an den Shop zurück. Das einzige "Datensilo" ist am Ende DATEV, in das zwecks GoBD-Konformität alle Belege ebenfalls per API übertragen werden. Warum kann ein Verwaltungsprozess nicht ebenso geradlinig und effizient sein?

Die Blaupause ist vorhanden: Ein Antrag geht per EfA-Standard als JSON ein, wird im "ERP-System der Verwaltung" verarbeitet, statt einer Ware wird eine Prüfung durchgeführt, der Bescheid wird erstellt, im zentralen DMS revisionssicher abgelegt und digital versendet. Fertig.

Doch genau an dieser Schnittstelle zwischen Möglichkeit und Realität scheitert die Digitalisierung heute. Wenn ich als Dienstleister versuche, einer Kommune einen echten Mehrwert zu bieten und Prozesse zu automatisieren, treffe ich auf eine Wand aus Unverständnis und Widerstand von anderen Behörden. Die Reaktionen reichen von einem blanken "Was ist eine API?" bis hin zur absurden Aussage: "Warum brauchen Sie eine API, um bei uns Daten abzurufen? Es gibt doch die Webseite, da muss man sich nicht einmal anmelden!". Wenn Schnittstellen dann doch existieren, werden sie hinter horrenden Preismodellen versteckt ("Unsere API bekommen Sie nur für 20k im Monat"), weil den Anbietern auch klar ist, dass sie dadurch ihr Vendor-Lock-In verlieren.

Das zeigt das Kernproblem: Der beste Deutschland-Stack ist nutzlos, wenn die grundlegende digitale Denkweise fehlt. Bevor wir über einzelne Technologien wie n8n oder Docker-Cluster sprechen, müssen wir eine Kultur des offenen Datenaustauschs und der Prozessautomatisierung schaffen und verbindlich einfordern. Andernfalls bleibt der Stack ein theoretisches Konstrukt für Experten, das an der alltäglichen Realität der Verwaltung zerschellt.

Danke!
