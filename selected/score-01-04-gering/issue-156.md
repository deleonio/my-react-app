**Titel:** Feedback für die Seite /beteiligung
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/156
**Typ:** issue
**Status:** Offen
**Erstellt:** 17. Oktober 2025 um 18:05
**Aktualisiert:** 17. Oktober 2025 um 18:05
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
**Dislikes:** 1
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

**Feedback:** <br>Hallo,

ich wuerde es gerne kurz halten.

Office:
Ich kenne LibreOffice etc. seit 2000 via StarOffice, damals noch auf Solaris auf meiner Sun zu Hause und auf FreeBSD.
Ich hab es auch immer wieder privat und beruflich benutzt.
Ich finde es veraltet, zurueckgeblieben und schrecklich.
Die Integration (Collabora etc) mit Nextcloud ist ein Desaster und die Team-Edit Funktion schlecht.
Wenn Sie koennen, Lizenzieren Sie OnlyOffice landesweit (volle Sourcecodelizenz oder so). Ich hab alles darauf umgestellt, es ist so viel anwenderfreundlicher, startet schneller, hat weniger dumme Bugs.

Virtuelle Arbeitsplaetze und sichere Remotedesktops:
Hier bin ich von allen Loesungen wie Citrix, MS TS, VMware Horizon, blablabla auf das erste, was wieder mit SCO Tarantella ansatzweise gleichziehen konnte gegangen: KASM. Das ist auch Open Source.
Es gibt viele halb-und-teil-erfolgreiche Loesungen auf Basis von Apache Guacamole. Stellen Sie genug Entwickler mit ab, um es paritaetisch zu entwickeln und Hoheit mit halten zu koennen, aber bitte setzen Sie auf sowas ausgereiftes, was auch sicherheitskonzepte etc. hat.
Alleine von den gesparten Lizenzen fuer anderen Muell koennen Sie von Landesseite die Entwicklung sichern.
Die Loesung ist gut strukturiert, ich kann das gerne mal per Videocall zeigen/begruenden.
Sicherheitsmaessig an Qubes anlehnend, aber fuer mehr Anwendungsfaelle. Wenn ich eine general-Loesung suche, die fuer die Dorf-Verwaltung und die Grossstadt und das Gerichtswesen getrennt aber gleichartig einsatzbar ist, ist KASM die Antwort. Ich bekomme da kein Geld fuer - ich bekomme generell aber Geld dafuer zu sehen, welche Loesungen nicht nur Eintagsfliegen sind.

Hochsicherheit:
Bitte gehen Sie auf Qubes als Vorgabe. Ich bin es leid, dass Admins und Vorstaende ohne mit der Wimper zu zucken jede hochkritische Arbeit mit ihrem Admin-Account auf dem normalen verwanzten PC machen. Auch als sicherheitsbewusste Person vernaechlaessigt man so schnell wichtige Massnahmen.


Windows / Linux:
Fuer Windows - versuchen Sie landesweit 0patch zu lizenzieren, das bringt mehr als anderen Sachen nachzulaufen. Notfalls handeln Sie es fuer 10000er Bloecke mit 6-monatiger Zahlung aus, und mit jeder abgeloesten Verwaltungsumgebung kuendigen Sie einen davon.
Generell waere eine Platform mit nur Windows LTSC + 0patch vertretbar, diese kann 5 oder 10 Jahre strikt betrieben werden. Das sind auch erfahrungsgemaess die einzigen geeigneten Einsatzzyklen.

Bei Linux bitte auch Livepatching als harte Vorgabe machen - Bei Ubuntu muss man es nur lizenzieren (und es ist nicht teuer - es fehlt eine gesetzliche Vorgabe), bei Oracle Linux (RHEL Clone) ist es in der Lizenz mit drin.

Router etc.
Hier sollte man mehr segmentieren und klare Vorgaben machen, und auch die Hersteller ein wenig unterstuetzen.
Definieren Sie, wo Mikrotik eine Empfehlung ist, schreiben Sie mit denen eine Declaration of Backdoorfreiheit (ich hab den Begriff vergessen, Alcatel z.b. hat sowas), und definieren Sie es klarer, was muss ein Pruefstand haben, was muss eine Polizeidienststelle haben, was muss ein Klassenzimmer haben. Es gibt nur so wenige Ebenen und sie gleichen sich.

Was auch fehlt ist noch mehr Rechtssicherheit fuer Reverse Engineering - es sollte ein uebliches und legales Vorgehen sein, dass auf nationaler Ebene z.b. BMC Firmware durch standardisierte OpenBMC etc. ersetzt wird und die Hersteller dem Kaeufer die entsprechenden GPIO Schnittstellen unbuerokratisch offenlegen. Schon bevor, aber insbesondere dann, wenn das Produkt alt wird. Alle Freiheiten und Moeglichkeiten, die sich ein Facebook, Google, sonstwas nimmt, stehen uns als Nation auch zu - und wir muessen sie wahrnehmen.
