**Titel:** Tech-Inventur, Konsolidierung, Transparenter Aufnahmeprozess, Kriterien+Reifegrad, Vergabe (Cloudogu GmbH)
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/428
**Typ:** issue
**Status:** Offen
**Erstellt:** 28. November 2025 um 16:07
**Aktualisiert:** 28. November 2025 um 16:31
**Autor:** Johannes Schnatterer (@OC000081386678)
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

Die Tatsache, dass die erste Konkretisierung des D-Stack direkt als Open Source in diesem Repository stattfindet, ist richtungsweisend. Genauso die Idee OpenCode als Instrument zur transparenten Sammlung und Diskussion des Feedbacks zu nutzen. Gerne weiter so.

Anbei Feedback aus Sicht der Cloudogu GmbH, eines mittelständischen Unternehmens in der Digitalindustrie, das seine Produkte als Open Source Software anbietet und seit fast 10 Jahren auch im öffentlichen Dienst tätig ist.

## Tech-Inventur

Da es sich aktuell um einen initialen Entwurf handelt, gibt es auf allen Schichten des Stacks noch Bedarf, Technologien zu ergänzen. Entsprechend sind dem [bisherigen Feedback](https://gitlab.opencode.de/dstack/d-stack-home/-/issues) viele Forderungen oder Wünsche nach weiteren Technologien zu entnehmen. Genauso wünschenswert wie die Beteiligung der Öffentlichkeit ist eine Inventur möglichst vieler Behörden mit Fokus auf bereits etablierte, souveräne Technologien. Neben den proprietären außereuropäischen Angeboten MS Teams, ChatGpt, AWS, Azure DevOps, Jira/Confluence, etc finden sich dort auch etablierte, offene, souveräne Alternativen wie [OpenDesk](https://www.opendesk.eu/de) von ZenDis, [SCS](https://sovereigncloudstack.org/), [KIPITZ](https://www.egovernment.de/was-verbirgt-sich-hinter-kipitz-a-fa3347608ca360cc54876d489daf215e/) oder [SWEC](https://www.itzbund.de/DE/itloesungen/standardloesungen/software-entwicklungsplattform-cloud/software-entwicklungsplattform-cloud.html) des ITZBunds. Diese zu identifizieren und zu einer Nachnutzung zu verhelfen, ist eine der wichtigsten und niedrigst hängenden Aufgaben des D-Stack. #294 scheint hier ähnliche Ansätze zu verfolgen und geht noch etwas mehr in die Tiefe.

## Konsolidierung

Bei den Technologien wird es fast immer mehrere Lösungen für ähnliche Anwendungsfälle geben. Zwar hat der D-Stack die Motivation der Konsolidierung. Gleichzeitig belebt die Konkurrenz das Geschäft und sorgt für Innovation. Deshalb setzt beispielsweise die CNCF absichtlich darauf, verschiedene Tools für gleiche Anwendungsfälle zu unterstützen. Außerdem haben Anwendungsfälle selten die exakt gleichen Anforderungen und Rahmenbedingungen, siehe beispielsweise die Diskussion über Argo CD/Flux, Helm/Kustomize in #327. Die Konsolidierung durch den D-Stack sollte nicht das Ziel haben, _die_ eine Technologie für einen Anwendungsfall bereitzustellen, sondern durch Kuratierung eine fundierte Auswahl aus einem Katalog erprobter Lösungen in seiner Domäne zu erleichtern. Was eigentlich die Domäne ist, Deutschland oder öffentlicher Dienst in Deutschland, gilt es noch zu schärfen. Im Idealfall können Referenzen die Auswahl erleichtern. Ansprechpartner oder die Schaffung von Anwenderforen zum direkten Austausch können die interbehördliche Kommunikation, auch zwischen Kommunen, Ländern und Bund, fördern. Hier besteht viel Potenzial, das Ziel der Konsolidierung, konkret das Schaffen einheitlicher Lösungen statt “vieler isolierter Insellösungen" zu erreichen.  
Das eine Extrem ist das Anbieten nur einer Technologie pro Anwendungsfall. Das andere Extrem, eine bloße Auflistung von Technologien, ist ebenfalls nicht hilfreich. Ausgerechnet die CNCF-Landscape, die als technologische Basis für die Darstellung des Tech-Stack dient, ist genau das. Auf Tech-Konferenzen taucht sie regelmäßig in sarkastischen Memes auf, um die Qual der Wahl bei der Auswahl der richtigen cloud-nativen Technologien zu visualisieren. Einerseits hat der D-Stack mit seinen domänenspezifischen Kriterien Potenzial, wertvoller zu sein als beispielsweise die CNCF-Landscape. Andererseits zeigt er Tendenzen, noch umfassender zu werden als die CNCF-Landscape, indem grundlegende Aspekte wie Protokolle aufgeführt werden. Hier die richtige Balance zwischen Auswahl und Übersicht zu finden, wird entscheidend für die Nutzbarkeit und den Erfolg des D-Stacks sein. Methoden, die man aus Tech-Radars kennt, können hier ergänzend konkretisieren, siehe auch #293. Vielleicht lässt sich ein “Golden Path” Ansatz umsetzen, der die gängigsten Lösungen und mögliche Integrationen für gängige Anwendungsfälle aufzeigt. Beispiele für diese Anwendungsfälle sind der digitale Arbeitsplatz, Softwareentwicklung, DevOps, Betrieb von Kubernetes, Projektmanagement, etc. Gerade das Thema Projektmanagement/Anforderungsmanagement ist ein gutes Beispiel, weil Atlassian durch das Endes seiner Datacenter-Lizenzen für Confluence und Jira ein Praxisbeispiel für die Wichtigkeit digitaler Souveränität liefert. Mit [OpenProject](https://openproject.org/), [Redmine](https://www.redmine.org/)/[EasyRedmine](https://www.easyredmine.com/) (siehe auch #71) in Kombination mit [BlueSpice](https://bluespice.com/) oder [XWiki](https://xwiki.com) stehen hier föderierbare souveräne Stacks bereit. Auch [PMFlex](https://www.bva.bund.de/DE/Services/Behoerden/Beratung/BZB/Themenwelten/Strategie/Projektmanagement/PMflex/pmflex_node.html) als Projektmanagementmethodik im öffentlichen Dienst kann darin verwendet werden.

## Transparenter Aufnahmeprozess durch Landkarte als Open Source

Nach dem Konsultationsverfahren und der oben beschriebenen Inventur sollte der D-Stack nicht "fertig" sein. Tatsächlich sollte er niemals "fertig" sein, denn sein Ziel ist es, ein "lebendiges Ökosystem der offenen Innovation" zu etablieren. Dafür ist es notwendig, einen klar geregelten und transparenten Aufnahmeprozess für weitere Technologien zu schaffen. Dafür bietet sich ebenfalls OpenCode an. Dies fordert auch die OSBA in #287.  
Bisher ist jedoch nur das Repository `d-stack-home` einsehbar, das Repository hinter `technologie.deutschland-stack.gov.de` (noch) nicht. Anbieter könnten dort per Merge Request einen Antrag stellen und es könnte dort eine transparente Diskussion stattfinden. Auch die Pflege der Einträge durch Anbieter und Benutzende wäre über diesen Prozess einfach möglich.

## Kriterien und Reifegrad

Die Idee, Technologien auf Basis verschiedener Kriterien transparent zu bewerten, klingt sinnvoll und würde den D-Stack gegenüber beispielsweise der CNCF-Landscape als unübersichtliche Auflistung einer riesigen Anzahl Technologien hervorheben. Ein weiterer Mehrwert können Referenzen sein: Wo in Deutschland, Europa, im öffentlichen Dienst, bei welchen Behörden kommt ein Produkt zum Einsatz und wie viele User verwenden es?

Das zentrale Kriterium im D-Stack dürfte die digitale Souveränität sein. Besonders mit diesem kann der D-Stack sein Ziel "Stärkung der Digitalwirtschaft" in die Tat umsetzen. Die Kriterien Anbietereinfluss, Gestaltungsfähigkeit (Produktpartizipation) sind gerade im öffentlichen Dienst besonders wichtig: Hier gibt es oft im Vergleich zur Wirtschaft speziellere Anforderungen (beispielsweise Air-gapped-Systeme, VS-NfD, weniger Fachkräfte). Erfahrungsgemäß sind gerade KMU hier besonders flexibel und können an dieser Stelle gefördert werden, um sich von (internationalen) Konzernen hervorzuheben. Eine weitere Hilfe können Badges sein, wie man sie von manchen großen Einzelhandelsplattformen kennt, die visualisieren, wenn Produkte von KMU angeboten oder supportet werden.

Im numerischen Wert oder der Stufe des Kriteriums digitale Souveränität müssen sich auch Unterschiede widerspiegeln wie Open Source vs. Open Core sowie Rechteinhaber/Codeowner (Firma vs. NPO/Konsortium/Verein/Stiftung) und der gültige Rechtsraum.  
Beispiele sind hier die Linux Foundation, auch NeoNephos, SCS/OSBA (siehe auch #310 bis #317 bzw. #276 bis #291), ALASCA (#229), CodeBerg, etc. Beispiel: Zum einzigen Source Code Management im derzeitigen Tech-Stack GitLab (amerikanische Firma mit Open Core Modell) gibt es souveränere Alternativen, beispielsweise [Forgejo](https://forgejo.org/) (Open Source, Weiterentwicklung durch deutschen Verein [Codeberg](https://codeberg.org/)) oder [SCM-Mananger](https://scm-manager.org/) (Open Source, Weiterentwicklung und Support durch Cloudogu, also ein KMU aus Deutschland).

Zur Transparenz trägt auf jeden Fall bei, wenn neben dem numerischen Wert und der Stufe auch Fakten und Quellen gelistet sind. Auch souveränere Alternativen sollten direkt angezeigt werden.

## Vergabe

Auch auf der wirtschaftlichen Ebene kann der D-Stack dazu beitragen, den technologischen Rückstand in Deutschland und Europa aufzuholen.  
Ein umfangreiches Konzept dazu hat der Bitkom vorgelegt (siehe auch #415). Einer der Wesentlichen Punkte ist die Schaffung eines [Zentraler Marktplatz für cloudbasierte IT im öffentlichen Sektor](https://www.bitkom.org/sites/main/files/2025-07/bitkom-positionspapier-zentraler-marktplatz-fuer-cloudbasierte-it-im-oeffentlichen-sektor.pdf) als Erweiterung des Konzepts „Marktplatz der Zukunft“ des IT-Planungsrates. Der D-Stack könnte föderale Marktplätze wie FIT-Store, EfA-Marktplatz und Cloud Service Portal der Deutschen Verwaltungscloud konsolidieren und für private Anbieter öffnen. Auch hier besteht eine besondere Chance, Innovationen voranzutreiben, beispielsweise durch eine KMU-Quote oder mittelstandsfreundliche Teilnahmebedingungen. Gerade kleine Unternehmen sind oft leichtgewichtig und innovativ, aber durch die übliche Vergabe benachteiligt. Sie verfügen nicht über personelle Ressourcen, Fachwissen, juristische Unterstützung oder Referenzen, um über Ausschreibungen an große Rahmenverträge zu kommen.  
Auch im Vergaberecht muss Open Source verankert werden, um dessen zentrale Bedeutung für digitale Souveränität zu unterstreichen. Beispielsweise durch eine Bevorzugung von Open Source bei der Vergabe, wie sie [die OSBA fordert](https://osb-alliance.de/publikationen/statements/stellungnahme-der-osba-zum-deutschland-stack) (siehe auch Open-Source-Vorrang in #276 und #288) oder durch das Prinzip Free Software First wie von der FSFE in #347 gefordert.

In Deutschland bemängeln wir oft, dass wir im europäischen Vergleich bei der Digitalisierung hinterherhinken. Darin besteht eine Chance\! Statt das Rad neu zu erfinden, sollten wir gute Praktiken aus anderen Ländern abschauen. Auch die EU wird in der deutschen Öffentlichkeit viel kritisiert. An dieser Stelle sollten wir deren Vorteile nutzen und in Erfahrungsaustausch und Zusammenarbeit mit unseren europäischen Partnern funktionierende Lösungen identifizieren, adaptieren und gemeinsam weiterentwickeln.

## Weiteres Beteiligungsverfahren

Es bleibt wünschenswert, dass auch nach dem Abschluss des initialen Beteiligungsverfahrens weitere Konsultationen der Öffentlichkeit erfolgen, in der auch der Mittelstand Gehör findet. Gerne bringen wir unsere Erfahrung in der Entwicklung von Open Source und Zusammenarbeit mit dem öffentlichen Dienst auch weiterhin ein.

---

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/428 -->

Sie formulieren als Cloudogu GmbH einen umfassenden, sehr fundierten Katalog von Verbesserungsvorschlägen für den Deutschland-Stack. Ich finde Ihr Feedback besonders wertvoll, weil es aus der Praxis des Mittelstands kommt.

### Tech-Inventur: Die niedrigst hängenden Früchte

Sie fordern: Etablierte Lösungen (OpenDesk, SCS, KIPITZ, SWEC) zu identifizieren und zur Nachnutzung zu verhelfen. Der Stack braucht weniger "hier ist eine Liste" und mehr "hier sind erprobte Lösungen aus der Praxis".

### Konsolidierung vs. Innovation

Ihr Punkt zur Konsolidierung ist differenziert: "Die Konsolidierung durch den D-Stack sollte nicht das Ziel haben, _die_ eine Technologie für einen Anwendungsfall bereitzustellen, sondern durch Kuratierung eine fundierte Auswahl aus einem Katalog erprobter Lösungen ... zu erleichtern."

Das ist genau richtig. Ihr Verweis auf die CNCF, die bewusst mehrere Tools für gleiche Anwendungsfälle unterstützt, weil "Konkurrenz das Geschäft belebt", ist wichtig. Zu viel Konsolidierung würde Innovation ersticken. Aber zu wenig Konsolidierung – die aktuelle Situation – führt zu Orientierungslosigkeit.

Ihre Lösung: "Kuratierung mit Referenzen, Ansprechpartnern, Anwenderforen". Ihr "Golden Path" Ansatz – gängigste Lösungen für gängige Anwendungsfälle – wäre echte Hilfe.

### Projektmanagement: Atlassian als Weckruf

Ihr Beispiel Atlassian (Ende der Datacenter-Lizenzen) zeigt die Wichtigkeit digitaler Souveränität. Ihre Alternativen: OpenProject, Redmine, BlueSpice, XWiki, PMFlex. Genau das braucht der Stack.

### Transparenz und Kriterien

Sie fordern transparenten Aufnahmeprozess via OpenCode. Wichtig: Das Repository hinter `technologie.deutschland-stack.gov.de` muss einsehbar sein.

Zu Souveränitätskriterien: Ihr Beispiel GitLab (US-Firma, Open Core) vs. Forgejo (deutscher Verein) oder SCM-Manager (deutsches KMU) zeigt die Unterschiede. Ihre Forderung nach KMU-Badges ist echte Mittelstandsförderung.

### Vergabe und KMU-Förderung

Sie kritisieren: Kleine Unternehmen sind innovativ, aber durch Vergabe benachteiligt. Ihr Bitkom-Vorschlag eines zentralen Marktplatzes ist richtig. Ihre Forderung nach KMU-Quote und Open-Source-Vorrang ist entscheidend.

### Ein Beispiel aus dem UI-Bereich

Viele Ihrer Prinzipien – Tech-Inventur, Kuratierung, Transparenz, Souveränitätskriterien, KMU-Freundlichkeit – lassen sich auch auf den UI-Bereich übertragen. Ich habe dazu einen Antrag gestellt: **[Aufnahme von KoliBri – die barrierefreie Komponentenbibliothek des Bundes in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)** – ein Beispiel für eine etablierte, Open-Source, KMU-freundliche Lösung aus der Verwaltungspraxis.

Falls Sie an einem Austausch zu Ihren Vorschlägen interessiert sind, stehe ich gerne zur Verfügung.

---

> _Weitere Informationen: [KoliBri auf GitHub](https://github.com/public-ui/kolibri)_

---

**Tags:** open-source, souveränität
