**Titel:** Feedback für die Seite /beteiligung
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/158
**Typ:** issue
**Status:** Offen
**Erstellt:** 18. Oktober 2025 um 11:44
**Aktualisiert:** 28. November 2025 um 18:53
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 1
**Likes:** 1
**Dislikes:** 1
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

**Feedback:** <br>Meta-Consents sind eine erweiterte, strukturierte Form von Einwilligungen, die nicht nur ausdrücken „ich stimme der Datenverarbeitung X zu“, sondern auch beschreiben, wie, wann und unter welchen Bedingungen solche Einwilligungen gültig sind, kombiniert oder weitergegeben werden dürfen.

Sie sind sozusagen Einwilligungen über Einwilligungen – also eine Maschine-lesbare Logik, die festlegt, wie mit Zustimmungen umgegangen werden soll, insbesondere in komplexen, föderierten oder KI-gestützten Datenumgebungen.

⸻

🔹 Beispiel zur Verdeutlichung

Normale Einwilligung:

„Ich stimme zu, dass meine E-Mail-Adresse für den Versand von Newslettern verwendet wird.“

Meta-Consent:

„Ich stimme zu, dass die App meine E-Mail-Adresse für Newsletter nutzt,
aber nur, wenn die Daten in der EU bleiben,
nicht mit Dritten geteilt werden,
und nach 12 Monaten automatisch gelöscht werden.“

Diese Meta-Einwilligung kann zudem festlegen:
	•	ob die Zustimmung einmalig, wiederkehrend oder bedingt ist
	•	wer sie validieren oder widerrufen darf
	•	ob sie automatisch erweitert oder eingeschränkt wird, wenn sich der Zweck ändert

⸻

🔹 Technisch gesehen

Meta-Consents werden meist in maschinenlesbarer Form (z. B. JSON-LD, RDF) abgebildet, oft auf Basis von Standards wie:
	•	W3C DPV (Data Privacy Vocabulary) – beschreibt Zwecke, Datenarten, Rechtsgrundlagen etc.
	•	ODRL (Open Digital Rights Language) – beschreibt Nutzungsrechte und Bedingungen
	•	eIDAS / SSI – liefert Identität und Authentizität der Zustimmung

So kann ein System automatisch erkennen, ob eine Verarbeitung erlaubt ist oder eine neue Zustimmung erforderlich ist.

⸻

🔹 Warum das wichtig ist (z. B. im „Deutschland-Stack“)

In einem föderierten Ökosystem wie dem Deutschland-Stack mit Schulen, Behörden, KI-Diensten oder Gesundheitsplattformen muss Datenschutz automatisiert überprüfbar sein.
Meta-Consents ermöglichen genau das:
	•	Sie standardisieren Zustimmungen über Systemgrenzen hinweg.
	•	Sie machen Einwilligungen übertragbar und prüfbar (z. B. von Schule → Landesplattform → Bundesdienst).
	•	Sie erlauben KI-gestützte Compliance-Prüfungen: ein System kann selbst entscheiden, ob eine Nutzung erlaubt ist.

⸻

🔹 Kurz gesagt

Meta-Consents sind maschinenlesbare, bedingte Einwilligungen, die festlegen, wie und unter welchen Umständen personenbezogene Daten verarbeitet werden dürfen – und damit die Grundlage für automatisierte, überprüfbare Datenschutzentscheidungen in modernen, vernetzten Infrastrukturen wie dem Deutschland-Stack oder EUDI-Wallet-Ökosystem bilden.
