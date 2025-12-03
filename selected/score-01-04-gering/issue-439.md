**Titel:** Feedback für die Seite /
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/439
**Typ:** issue
**Status:** Offen
**Erstellt:** 29. November 2025 um 13:44
**Aktualisiert:** 29. November 2025 um 13:44
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 1
**Likes:** 0
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

**Feedback:** <br>Gardenlinux - modernes Betriebssystemkonzept für Cloud-native Umgebungen

Es ist eine schlanke, sichere und hochgradig anpassbare Debian-basierte Linux-Distribution für den Betrieb von Cloud Native Workloads, insbesondere im Kubernetes Ökosystem.

Es wurde im Kontext von Gardener Projekt ( Verwaltung des Lebenszyklus von sehr vielen Kubernetes Clusters ) entwickelt.

Die Vorteile von Garden Linux liegen in seiner Optimierung für moderne, Cloud-native Workloads und seiner Ausrichtung auf Sicherheit, Auditierbarkeit und Anpassbarkeit.

* Kleine Größe und geringer Fußabdruck: Die Images sind sehr klein gehalten, was die Bereitstellung beschleunigt und den Ressourcenverbrauch reduziert.

Auditierbare und wiederholbare Builds: Das Build-System ist so konzipiert, dass die erzeugten Images transparent und jederzeit reproduzierbar sind. Dies ist wichtig für Compliance und Sicherheit.

Fokus auf Cloud und Container:

Es unterstützt out-of-the-box die großen Cloud-Plattformen und Virtualisierer (VMware, OpenStack, KVM) sowie Bare-Metal-Systeme.


Hohe Anpassbarkeit (Feature-Set): Sie können benutzerdefinierte Images erstellen, indem Sie gezielt Features hinzufügen oder weglassen. Beispiele für Features sind:

Verschiedene Plattformen (z. B. aws, azure, gcp, metal).

Sicherheits- und Konformitätsfunktionen (z. B. CIS-Framework-Konformität, optionale vollständig unveränderliche (immutable) Images).

Netzwerk- und Init-System (rein systemd-basiert, dracut-generiertes Initramfs).

Sicherheit: Bietet optionale Funktionen wie vollständig unveränderliche Images (_readonly Feature) und Unterstützung für Sicherheitsstandards wie das CIS Framework.

Ziel ist es die Vorteile und die möglichen Einsatzszenarien für den Deutschland Stack aufzuzeigen und in eine Referenzarchitektur zu bringen.
