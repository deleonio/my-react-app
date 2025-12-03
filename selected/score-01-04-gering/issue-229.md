**Titel:** Digitale Souveränität stärken: Infrastruktur- und Betriebssystemschicht sowie Sovereign Cloud Stack hinzufügen
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/229
**Typ:** issue
**Status:** Offen
**Erstellt:** 28. Oktober 2025 um 15:03
**Aktualisiert:** 28. November 2025 um 20:27
**Autor:** Daniel Gerber (@oc000052166394)
**Zugewiesen:** Keine
**Labels:** Erweiterung, To be Done, Änderungsvorschlag
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 3
**Likes:** 6
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

Wir als [ALASCA-FOCIS](https://alasca.cloud/focis/) (Free and Open Cloud Initiative Saxony), ein auf den sächsischen Mittelstand ausgerichtetes Förderprogramm im Open-Source Cloud Bereich, begrüßen den Verstoß der Bundesregierung und des Versuchs der Definition von Technologie sowie Standards zur Erreichung des Ziels der Steigerung der Digitalen Souveränität der Bundesrepublik Deutschland. Insbesondere der klare Fokus auf betriebsfähige und etablierte Open Source Technologien ist positiv hervorzuheben.

Während in der aktuellen Ausgestaltung des Stacks bereits in Teilen auf die Container-Schicht eingegangen wird, fehlt aus unserer Sicht die dafür notwendige darunterliegende Infrastruktur- bzw. **Infrastructure-as-a-Service-Schicht**. Mit Hilfe dieser Schicht, z.B. bereitgestellt durch Produkte wie [OpenStack](https://www.openstack.org), können virtuelle Maschinen, virtuelle Netzwerke und beliebige verteilte Speichertypen ([Ceph](https://ceph.io/en/), [Swift](https://opendev.org/openstack/swift)) bereitgestellt werden. In diesem Kontext notwendige, etablierte und erfolgreich weltweit eingesetzte Open Source Projekte wie [Proxmox](https://www.proxmox.com/en/), [OpenBAO](http://openbao.org) (Hasicorp Vault Fork), [OpenTofu](https://opentofu.org) (Terraform Fork), [Grafana](https://grafana.com), [Prometheus](https://prometheus.io), [Thanos](https://thanos.io), [Helm](https://helm.sh), [Keycloak](http://keycloak.org), [Podman](https://podman.io), [Harbor](https://goharbor.io), [Ansible](https://github.com/ansible/ansible), [Redis](https://redis.io) und [RabbitMQ](https://www.rabbitmq.com) sollten hinzugefügt werden.

Eine darauf aufbauende und ebenfalls bisher fehlende Schicht, ist die **Betriebssystemschicht**. Hier sollten unbedingt die hier typischerweise zum Einsatz kommenden Betriebssysteme wie [Ubuntu](http://ubuntu.com/), [CentOS](https://www.centos.org/), [Alpine Linux](https://www.alpinelinux.org) oder [NixOS](https://nixos.org) mit in den Stack aufgenommen werden.

Neben der Bereitstellung von Infrastruktur sollte ebenfalls auf deren Betrieb Rücksicht genommen werden. Insbesondere Day-2 Operations und sichere Kommunikation innerhalb von virtueller Infrastuktur sind hier relevant. Kubernetes-basierte Tools zum Betrieb und Lebenszyklusmanagement von Openstack wie [Yaook](https://yaook.cloud), [Yake](https://yake.cloud) als Installations- und Lifecycle-Management-Tool für [Gardener](https://gardener.cloud) und [Tarook](https://tarook.cloud) zum Lifecycle-Management von Kubernetes Clustern auf Bare-Metal oder OpenStack sollten im Stack enthalten sein. 

**Änderungswunsch:** Die Schicht bzw. Gruppe „Infrastruktur“ sollte deshalb um die Kategorie *Infrastructure-as-a-Service* und *Betriebssysteme* ergänzt werden. Die in diesem Kontext relevanten oben genannten Technologien sollten ergänzt werden.

Auf die in der Beschreibung der Ausschreibung definierten Leitfragen nach Mechanismen zur flächendeckenden Integration und Distribution sowie zur Entkopplung von Logik, Daten, Diensten und Infrastruktur bietet der [Sovereign Cloud Stack](https://www.sovereigncloudstack.org) eine ausgezeichnete Antwort. Das vom BMBF geförderte Projekt und dessen mittlerweile in [Release 9](https://www.sovereigncloudstack.org/de/announcements/release9/) veröffentlichte Referenzimplementierung wurde entwickelt, um 
- eine nahtlose Integration und optimale Performance in verschiedenen Cloud-Umgebungen zu ermöglichen
- den Wechsel zwischen verschiedenen Cloud-Anbietern zu ermöglichen
- standardisierte, zertifizierte, hochverfügbare, sichere Cloud-Infrastruktur auf Container- und Infrastruktur-as-a-Service Ebene anzubieten.

Der Stack wird mittlerweile in [Projekten der GIZ](https://sovereigncloudstack.github.io/website/release/2024/12/17/collaboration-scs-govstack/) weltweit nachgefragt, wird in der [Thüringer Verwaltungscloud](https://digitales-infrastruktur.thueringen.de/medienservice/medieninformationen/medieninformation/thueringer-verwaltungscloud-gewinnt-silber-beim-open-source-preis-2025-bundesweites-vorzeigeprojekt) erfolgreich eingesetzt und hat mit Yaook eine zweite Referenzimplementierung. 

**Änderungswunsch:** Der Sovereign Cloud Stack sollte in der Infrastrukturschicht aufgenommen werden. 

Generell möchten wir darauf hinweisen und hinwirken, dass insbesondere auch bei den ausgewählten Projekten darauf geachtet werden sollte, dass sich die Jurisdiktion der Governance (Linux Foundation, Cloud Native Computing Foundation), also Steuerung und Koordination, innerhalb der Europäischen Union befindet. Für Projekte, für die dies nicht der Fall ist, sollte unbedingt darauf geachtet werden, dass 

1. deren Lizenzbestimmungen denen der [Open Source Definition](https://opensource.org/osd) der Open Source Initiative (OSI) entsprechen und 
2. das entsprechende Know-how und Infrastruktur für den Betrieb und die Weiterentwicklung der entsprechenden Technologien, bspw. durch Förderung, Wettbewerbe und Anpassung von Vergaberichtlinien innerhalb Deutschlands und der EU geschaffen werden. 

Abschließend plädieren wir bei der Definition des D-Stacks darauf zu achten, keine Dienste aufzunehmen, welche sich zwar „souverän” nennen aber die Datensouveränität der deutschen Verwaltung gefährden. Insbesondere Dienste, die beispielsweise dem Cloud Act oder FISA 702 unterliegen, sollten keine Rolle im D-Stack spielen dürfen, „[e]ine Datenhoheit, wie sie europäische Datenschutzstandards fordern, ist bei der Nutzung US-amerikanischer Lösungen somit nicht gewährleistet.” ([Souveränitäts-Washing bei Cloud-Diensten erkennen](https://www.zendis.de/media/pages/newsroom/publikationen/souveraenitaets-washing/751a2c5eb1-1755243871/zendis-whitepaper-souveraenitaets-washing.pdf), ZenDiS)
