**Titel:** Ergänzung von Cloud Infrastructure Layer
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/257
**Typ:** issue
**Status:** Offen
**Erstellt:** 7. November 2025 um 22:03
**Aktualisiert:** 7. November 2025 um 22:03
**Autor:** Christian Berendt (@berendt)
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

Der Deutschland-Stack definiert zwar Standards und Technologien, es fehlen jedoch konkrete, produktionsreife Implementierungen und Referenzarchitekturen, die die Anforderungen an digitale Souveränität und europäische Anschlussfähigkeit erfüllen und als Basisinfrastruktur dienen.

OSISM ist die Referenzimplementierung des Sovereign Cloud Stacks (SCS) und damit direkt an die strategischen Ziele des Deutschland-Stacks gekoppelt. Der SCS wurde von SPRIND und dem Bundesministerium für Wirtschaft und Klimaschutz (BMWi) gefördert und verfolgt das Ziel, eine vollständig offene, föderierte und souveräne Cloud- und Container-Infrastruktur zu schaffen. OSISM wird bei plusserver, TLRZ, BTC, aov IT.Services, Scaleup Technologies und vielen anderen bereits eingesetzt und ist als Building Block „Cloud Infrastructure” Teil von GovStack (https://cloud.govstack.global). Dadurch wird eine große Anzahl bestehender Cloud Infrastrukturen in Deutschland und Europa indirekt befähigt, den Teil oberhalb des Cloud-Infrastructure-Layers vom Deutschland-Stack aufzunehmen. So wird sichergestellt von Tag 1 an eine funktionierende und bezugsfähige Basisinfrastruktur verteilt über eine Vielzahl von Anbietern zu haben.

Ich möchte OSISM als konkrete Implementierung für eine unterste Cloud-Infrastruktur-Schicht des Deutschland-Stacks vorschlagen. OSISM (ebenfalls OSS) integriert etablierte Open-Source-Lösungen für den Aufbau und Betrieb souveräner Cloud-Infrastrukturen. Diese selbst sowie Sovereign Cloud Stack sollten ebenfalls mit aufgeführt werden um alternative Implementierungen zu ermöglichen.

- OpenStack (IaaS-Plattform)
- Kubernetes as a Service auf Basis von Gardener (Container-Orchestrierung).
- Ceph (Software-defined Storage).
- OVN (Software-defined Networking).
- SONiC (Network Operating System).
