**Titel:** Interoperabilität für den/im Deutschland-Stack
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/312
**Typ:** issue
**Status:** Offen
**Erstellt:** 20. November 2025 um 14:05
**Aktualisiert:** 28. November 2025 um 20:57
**Autor:** Felix Kronlage-Dammers (@OC000011955023)
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

Interoperabilität in Cloud-Infrastrukturen ist bereits gewährleistet, wenn diese die [SCS-compatible-Standards](https://docs.scs.community/standards) erfüllen. Durch den Einsatz von offenen, standardisierten Schnittstellen wird eine technische
Kompatibilität geschaffen, die notwendige Basis für eine Wahlfreiheit zwischen verschiedenen Anbietern, die
auch die Möglichkeit des In-Sourcings (On-Premise-Betriebs) sichergestellt. 

Die SCS-Standards erstrecken sich
von der [Infrastructure-as-a-Service](https://docs.scs.community/standards/iaas/)
 (IaaS) Schicht, über [Kubernetes-as-a-Service](https://docs.scs.community/standards/kaas/)
 (KaaS), zu Identity and
Access Management (IDAM/IAM) sowie den operationalen Teil. Hierbei werden bestehende Standards und in der
Industrie anerkannte Best-Practices aufgegriffen. Kubernetes selbst bswp. ist schon ein umfangreicher IndustrieStandard. Durch die SCS Standards auf der KaaS Ebene, werden Aspekte abgedeckt, die Kubernetes von Haus
aus nicht abdeckt (beispielsweise die [Node Distribution und Verfügbarkeit](https://docs.scs.community/standards/scs-0214-v2-k8s-node-distribution/)
). 

Die Praxisnähe der Standards wird durch die erprobten Implementierungen, die durch die Unternehmen in der SCS Community entwickelt werden,
gestützt (vgl. auch Abschnitt: Marktreife). Für Greenfield-Szenarien wie auch als einzelne Bausteine bietet sich
Software aus dem SCS Ökosystem an.Der Stack soll die Vernetzung und den Datenaustausch auf einer
gemeinsamen digitalen Infrastruktur zwischen Stakeholdern auf verschiedenen Ebenen ermöglichen. Das SCS
Projekt hat sich nicht nur Infrastructure-as-a-Service (IaaS) und Kubernetes-as-a-Service (KaaS) angeschaut,
sondern das in einem Gesamtkontext im Verbund mit Identity and Access Management (IAM/IDAM) betrachtet.
Hierbei ist ein [Architektur Blueprint](https://cloud.govstack.global/)
 entstanden, der auch in [GovStack übernommen wurde](https://sovereigncloudstack.org/announcements/govstack_cloud_spec/). Dieses
Zusammenspiel von Standard-Komponenten kann in eine Referenzarchitektur einfließen, die im Rahmen des
Deutschland-Stack als Beispielumsetzung an die Hand gegeben werden kann


(Die komplette Stellungnahme des Forum SCS-Standards der OSBA ist unter folgender Adresse zu finden: [https://sovereigncloudstack.org/konsultationsverfahren-deutschland-stack-einreichung-forum-sovereign-cloud-stack-standards-der-open-source-business-alliance-e-v/](https://sovereigncloudstack.org/konsultationsverfahren-deutschland-stack-einreichung-forum-sovereign-cloud-stack-standards-der-open-source-business-alliance-e-v/))
