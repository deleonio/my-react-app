**Titel:** Feedback für die Seite /beteiligung
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/74
**Typ:** issue
**Status:** Offen
**Erstellt:** 11. Oktober 2025 um 11:06
**Aktualisiert:** 11. Oktober 2025 um 11:06
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

**Feedback:** <br>Hallo zusammen,

im Rahmen der Diskussion um den Deutschland-Stack und die Integration von digitalen Identitätsdiensten möchte ich gerne auf eine interessante kostenlose Open-Source-Komponente hinweisen, die aus der Telekom-Forschung (T-Labs) stammt: SmartCredentials.

- Was ist SmartCredentials?

SmartCredentials ist eine offene, modulare Bibliothek (SDK), die eine einheitliche Schnittstelle für Identität, Authentifizierung und Autorisierung bereitstellt.
Statt für jede App oder jedes Backend eigene Logik zu bauen, abstrahiert SmartCredentials alle relevanten Verfahren in einem Credential-Konzept – egal ob eID, OTP, Wallet-Credential oder App-Token.

Die Bibliothek besteht aus rund 13 Modulen (u. a. Authentication, Authorization, eID, Security, Storage, QR-Login, Push-Auth etc.) und kann leicht in Android- oder Java-basierte Projekte eingebunden werden.
Sie ist unter Apache 2.0 lizenziert, also vollständig offen und für öffentliche Projekte nutzbar.

🇩🇪 Warum relevant für den Deutschland-Stack?

Der Stack soll einheitliche, wiederverwendbare Basiskomponenten schaffen – insbesondere für:

digitale Identitäten & Wallets (EUDI-/eIDAS 2.0-kompatibel)

sichere Authentifizierung & Autorisierung

vertrauenswürdige Datenhaltung und Interoperabilität

SmartCredentials könnte hier als „Identity-Layer“ dienen, der:

Auth- und ID-Funktionalitäten standardisiert,

hardwarebasierte Sicherheit (TEE, Secure Element, Root-Detection) bietet,

einfach durch neue Module (z. B. EUDI-Wallet-Connector, FIDO2, Verifiable Credentials) erweiterbar ist,

und Entwicklern einen sofort nutzbaren SDK-Baukasten bereitstellt.

Damit ließe sich die Nutzung von Identitäts- und Wallet-Diensten im Stack erheblich beschleunigen – auch für Bildung, Verwaltung oder GovTech-Start-ups.

- Beispielhafte Einsatzfelder

Bürger- oder Schüler-App mit eID-basierter Anmeldung

Wallet-Integration für Verifizierungen oder Nachweise

sichere Token-Verwaltung in Behörden- oder Gesundheitsdiensten

Ausführlicher:
Einheitliche Credential-Abstraktion als „Identity-Layer“

Der Deutschland-Stack zielt darauf, standardisierte Basiskomponenten für öffentliche und private digitale Dienste bereitzustellen – insbesondere für:

Login / Authentifizierung (eIDAS 2.0 / EUDI Wallet-ready)

Zugriffsrechte und Berechtigungen (Authorization / Consent)

Sichere Speicherung und Nutzung von Identitätsnachweisen (Credentials)

SmartCredentials bietet genau diese Abstraktionsebene:
Es kapselt alle Formen digitaler Identitäten – Nutzer-ID, eID, OTP, App-Token, Zertifikat, NFC-Chip oder Wallet-Credential – unter einer einheitlichen, modularen API.
Damit wird eine gemeinsame Schnittstelle geschaffen, über die Fach- und Basisdienste im Stack sicher und wiederverwendbar auf Identitätsfunktionen zugreifen können.

2.  Modularität und Wiederverwendbarkeit

Der Stack verlangt komponierbare Module („Bausteine“).
SmartCredentials besteht bereits aus klar getrennten Modulen:

Stack-Ebene SmartCredentials-Modul Nutzen
Authentifizierung authentication, otp, qrlogin, pushnotifications Sicherer Login über verschiedene Kanäle
Autorisierung authorization, networking Token-Verwaltung, Policy-Enforcement
Identitätsmanagement eid, identityprovider Integration von eIDAS-Identitäten, Wallets, IDPs
Sicherheit security, persistentlogging Root-Check, Secure Storage, Audit-Trails
Datenhaltung storage Lokale und verschlüsselte Datenspeicherung
Nutzererlebnis camera, documentscanner Onboarding, biometrische oder Dokument-Verifikation

Damit ist SmartCredentials praktisch ein Identity-SDK, das als referenzierbares Modul im Stack dienen kann, um Behörden- oder Bildungs-Apps, Wallets und private Dienste schnell anzubinden.

3.  Kompatibilität mit EUDI- und eIDAS-Anforderungen

SmartCredentials erfüllt viele technische Basiskriterien, die für den EUDI-Wallet-Kern (gemäß eIDAS 2.0 / ARF) nötig sind:

Hardware-gebundene Schlüssel (TEE / Secure Element)

Lokale Credential-Speicherung mit Nutzerkontrolle

Modularität für unterschiedliche Auth-/ID-Protokolle

Erweiterbarkeit für Wallet- oder eID-Module

Damit kann SmartCredentials als Integrationsschicht zwischen EUDI-Wallet und nationalen Fachverfahren dienen – z. B.:

„Wallet-App authentifiziert Nutzer → SmartCredentials stellt Token für Verwaltungs- oder Bildungsdienst bereit → Stack nutzt standardisierte Schnittstelle für AuthZ/AuthN.“

🏗️ 4. Beschleuniger für GovTech- und CivicTech-Ökosystem

Im Stack-Kontext sind einheitliche SDKs und Schnittstellen entscheidend, damit:

Start-ups, Kommunen und Bildungsträger schnell Lösungen bauen können.

Dienste interoperabel bleiben (nicht jeder muss „eigene eID-Integrationen“ entwickeln).

SmartCredentials bringt hier:

Offene Architektur (Apache 2.0) → frei in GovTech-Projekten nutzbar

SDK-Funktionalität → sofort einsetzbar in mobilen oder Web-Frontends

Maven-Distribution → einfach integrierbar in nationale App-Entwicklungen

Damit stärkt SmartCredentials den Stack als Developer-friendly Identity Enabler. 5. Sicherheits- und Vertrauensanker

Integrierte Root-Detection und Secure-Execution-Umgebungen (TEE / Knox / StrongBox)

Audit-Logging und modulare Sicherheits-Policies

Optionale Nutzung von Smartcards, Secure Elements oder eSIM

Dadurch lässt sich der Stack sicherheitstechnisch konsistent erweitern – etwa für:

Schüler- und Bürgerausweise

Mobile Behördenzugänge

Gesundheits- oder Bildungscertificates 6. Operator- und Industrie-Integration

Da SmartCredentials ursprünglich aus Telekom-/T-Labs-Entwicklung stammt, kann es:

Direkt in MNO-, IoT- oder Entitlement-Server-Lösungen integriert werden.

Als Brücke zwischen Telekom-Identität (SIM, eSIM, IMS-Profile) und staatlichen Credentials dienen.

So einen hybriden Identitäts-Layer (Operator + Wallet) schaffen, z. B.:

„SIM-basierte Identität + SmartCredentials-Modul → Wallet-Token → Stack-Dienst.“

⚡ 7. Praktische Wirkung im Deutschland-Stack

Kurz gefasst:
SmartCredentials

macht den Stack identitätsfähig (Wallet-Integration, AuthN/AuthZ-Layer),

bietet sicheren, modularen SDK-Baukasten für App-Entwickler,

ermöglicht schnellere Integration von eIDAS-konformen Diensten,

und reduziert Redundanz und Integrationsaufwand in Verwaltung, Bildung, Gesundheit und Industrie.
