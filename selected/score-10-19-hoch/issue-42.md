**Titel:** Feedback für die Seite /beteiligung
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/42
**Typ:** issue
**Status:** Offen
**Erstellt:** 10. Oktober 2025 um 03:11
**Aktualisiert:** 3. November 2025 um 16:10
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Daten, Datenschutz, Erweiterung, To be Done, Unterstützung notwendig, Änderungsvorschlag, Ökosystem
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 0
**Likes:** 2
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/42 -->

Ihre GovTech-Anforderungsliste liest sich wie eine Checkliste für KoliBri: "OSS-Defaults (EU-kompatible Lizenzen)", "Referenz-Implementierungen, SDKs", "Portabilität & Exit". All das haben wir umgesetzt.

KoliBri ist die Referenz-Implementierung für barrierefreie UIs im öffentlichen Sektor. 50+ Komponenten, EUPL-lizenziert, vom ITZBund entwickelt. Ihre Forderung "keine proprietären Locks" erfüllen wir durch Web Components – funktioniert mit React, Angular, Vue oder nativ. Wenn Sie morgen das Framework wechseln, bleiben die Komponenten dieselben.

**KoliBri erfüllt GovTech-Kriterien:**

- **OSS-Default**: EUPL-Lizenz (EU-kompatibel), 3.000+ wöchentliche Downloads
- **Referenz-SDK**: 50+ UI-Komponenten, WCAG 2.1 konform, für alle Frameworks
- **Portabilität**: Web Components (W3C), kein Vendor-Lock-in, Exit jederzeit möglich
- **Testbarkeit**: Automatisierte A11y-Tests, Conformance-Suites für BITV 2.0

Welche Ihrer GovTech-Anforderungen sehen Sie als größte Herausforderung? Vielleicht können wir helfen.

---

> Mehr Infos:
>
> - **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**
> - [Repository - Public UI - KoliBri](https://github.com/public-ui/kolibri)

## Beschreibung

**Feedback:** <br>Anforderungen von GovTech/CivicTech an den Stack

Offene Schnittstellen & Datenmodelle: OpenAPI/JSON-Schema, JSON-LD/RDF, BPMN/DMN für Prozesse/Entscheidungen; Kompatibilität zu XÖV (XRechnung, XBau, XJustiz) und EU-SEMIC Core Vocabularies.

Identität & Zugriffssteuerung: EIDAS/BSI-konforme eIDs, Rollen/Attribute (ABAC), Föderation (OIDC/SAML), Auditbarkeit by design.

Datenschutz & Rechtskonformität: Privacy-by-Design, W3C-DPV zur maschinenlesbaren Dokumentation von Rechtsgrundlagen/Einwilligungen.

Wiederverwendung & Lizenzierung: OSS-Defaults (EU-kompatible Lizenzen), Referenz-Implementierungen, SDKs.

Testbarkeit & Sandboxen: Staging-Tenants, synthetische Testdaten, Conformance-Suiten, öffentliche Mock-APIs.

Betriebsoptionen: Cloud, Edge, On-Prem – einheitliche Packaging-Standards (OCI/K8s/Helm), IaC (Terraform/Ansible).

Innovationen, die in den Stack gehören

Maschinenlesbare „Prozess-DIN“: Standardisierte Business-Language (BPMN/DMN + SEMIC + XÖV-Profile) für Anträge/Genehmigungen.

Trusted Internet-Bausteine: RPKI verpflichtend, DNSSEC/DANE, TLS 1.3/QUIC; Signatur-/Update-Transparenzlogs.

Souveräne Identität & Wallets: EIDAS-2.0-konforme EU-Wallets (Person/Organisation/Device), attributbasiert.

Sichere Basisdienste: Signierte Software-Lieferketten (SBOM/HBOM), Remote-Attestation-Profile (TPM/DICE), BSI-geprüfte Images.

Mini-AI/Edge-KI: Lokal/offline betreibbar (Schule/Behörde/Haushalt), geprüfte Modelle/Prompt-Policies, Dataset-Governance.

Operator-gestütztes Mesh/Offline-Ableger: PC5/BT/Wi-Fi-Mesh mit SIM-Policies für Krisen/No-Netz-Szenarien.

Observability-Standard: Zentraler Telemetrie-Rahmen (OpenTelemetry) mit Datenschutz-Vorgaben.

Marktanforderungen für verlässliche, souveräne, sichere Nutzung

BSI-Profile & Zertifizierung: Mindeststandards (z. B. ETSI EN 303 645, IEC 62443) + Betriebszertifikate; Security SLAs.

Compliance-Klarheit: NIS2/Cyber-Resilience-Act-Konformität, Rechtskataster je Modul.

Langfrist-Wartung: LTS-Roadmaps (5–10 Jahre), Patch-SLA, End-of-Support-Label.

Portabilität & Exit: Daten-/API-Portabilität, Migrationspfade, keine proprietären Locks.

Transparente Beschaffung: „Beitrag zum Deutschland-Stack“ als Pflichtfrage in jeder Ausschreibung.

Mechanismen für Dienstleister: Integration & Distribution

Konformitätsprüfungen: Automatisierte CTS/Conformance-Tests pro API/Schema; Badges & Registry (Stack-Store).

Packaging & Delivery: OCI-Images, Helm-Charts, SBOM-Pflicht; signierte Repos; Blue-Green-/Canary-Rollouts.

Referenz-Architekturen & Starter-Kits: Template-Repos, „Golden Paths“ (Backstage), Beispiel-Datenräume.

Pflege & Support: Gemeinschaftliche SRE-Runbooks, Incident-Standards, Sicherheits-Hotfix-Prozess.

Praktische Entkopplung von Fachlogik, Daten, Basisdiensten, Infrastruktur

Schichtenmodell & Verträge:

Fachdaten: versionierte Schemas, Event-Sourcing/CDC, klare Datenhoheit.

Fachlogik: als Services/Functions mit stabilen Domain-APIs.

Basisdienste: Identität, Signatur, Zahlung, Logging als austauschbare Plattform-Services.

Infrastruktur: K8s/IaC abstrahieren Compute/Netz/Storage.

Techniken: API-First, Event-Driven-Architecture (Kafka/NATS), mTLS/service mesh (Istio/Linkerd), Policy-as-Code (OPA), Secrets-Management (HSM/KMS).

Daten-/Modell-Governance: Schema Registry, Contract-Testing (Pact), Migrationsleitfäden.

Best Practices & nötige Veränderungen für ein gemeinsames Ökosystem

Stiftung/Non-Profit-Träger: kapitalgedeckt, unabhängige Governance (Vorbild: Linux Foundation, NIIS/X-Road, Sovereign Tech Fund); öffentl. Roadmap & Audits.

Ausschreibungs-Reform: Nutzungs-/Weiterentwicklungs-pflicht von Stack-Bausteinen; Open-Source-by-Default; Re-Use-First.

Kompatibilitätsmanagement: Versionierung/Deprecation-Policies, LTS-Kalender, „no breaking changes“ ohne Migrationspfad.

Security-by-Default: RPKI/DNSSEC Pflicht bei Providern, SBOM für Beschaffung, sichere Defaults (MFA, mTLS, Least Privilege).

Bildung & Talentpipeline: Hochschul-Editionen pro Branche (Bau, Energie, Gesundheit), finanzierte Maintainer-Rollen.

Transparenz & Messbarkeit: öffentliche KPIs (Uptime, Mean Time to Patch, Re-Use-Quote), Zertifikats-/Update-Transparenzlogs.

Distribution in die Fläche: Stack-Registry/„App-Store“ für Verwaltungen/Schulen/KMU, zertifizierte Integrationspartner.

Kurzfassung:
Der Deutschland-Stack wird erfolgreich, wenn er (1) offene, geprüfte Standards/Schnittstellen bereitstellt, (2) Innovationen wie Prozess-Standards, Trusted-Internet-Bausteine und Edge-KI integriert, (3) über klare Sicherheits-/Compliance-Vorgaben markttauglich ist, (4) Integrations- und Distributionsmechanismen industrialisiert, (5) Fachlogik/Daten von Basisdiensten/Infra konsequent entkoppelt und (6) durch eine unabhängige Stiftung mit LTS-Disziplin, Audits und Ausschreibungs-Reform dauerhaft gepflegt wird.
