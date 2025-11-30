# **KoliBri Jahresbericht 2025**

## **Digitale Souveränität. Barrierefreie Qualität. Effizienz aus dem öffentlichen Dienst.**

### **Executive Summary**

KoliBri hat sich 2025 als **führende barrierefreie Web-Komponentenbibliothek** der deutschen Verwaltung etabliert. Mit rund **50 vollständig barrierefreien Komponenten**, einer **frameworkunabhängigen Architektur** (Web Components) und einem **kleinen, hochproduktiven Team** liefert das Projekt Leistungen, die sonst nur große Unternehmen mit 30–100+ Vollzeitentwicklern erbringen.

Trotz eines geschätzten Teamvolumens von **rund 4,5 FTE** (verteilt auf bis zu 9 Rollen) erreicht KoliBri eine **Effizienz von Faktor 4–6** gegenüber typischen Verwaltungsprojekten, die ohne gemeinsame technische Basis arbeiten.

KoliBri spart darüber hinaus **direkt und nachweisbar**:

- ✦ **Lizenzkosten** für kommerzielle Bibliotheken (jährlich bis zu 600.000 € bundesweit)
- ✦ **Redundante Eigenentwicklungen** in Ministerien und Behörden
- ✦ **Wartungsaufwände**, da Änderungen zentral wirken
- ✦ **Barrierefreiheitsnacharbeit**, da die Komponenten bereits BITV-konform sind

KoliBri ist damit ein zentrales Bausteinprojekt für **OZG-Folgearbeiten**, **BFSG-Konformität**, **EU-Web-Accessibility-Compliance**, und für die **digitale Souveränität** der Bundesverwaltung.

---

# **1. Warum KoliBri notwendig ist**

Die Bundesverwaltung arbeitet traditionell mit einer Vielzahl an Frameworks, UI-Bibliotheken und individuellen Komponenten. Dadurch entstehen:

- hohe **Redundanzkosten**
- fehlende **Kompatibilität** zwischen Projekten
- unterschiedliche **Barrierefreiheits-Niveaus**
- schwer planbare **Wartungsaufwände**
- keine **gemeinsamen Standards**
- fehlende **UX-Konsistenz**

Die Alternative wäre die Nutzung kommerzieller UI-Bibliotheken (z. B. MUI, Telerik, Prime).
Diese scheitern jedoch in Schlüsselbereichen:

### **Warum nicht MUI / Material / Ant Design / Prime / Chakra?**

| Kriterium                        | Kommerzielle / generische UI-Bibliotheken                 | KoliBri                                                       |
| -------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| **Barrierefreiheit**             | AA-Level, inkonsistent; Add-ons oft nicht WCAG-konform    | **Konsequent BITV-2.0-konform**, AAA-orientiert               |
| **DSGVO-Souveränität**           | Teilweise Cloud Dependencies, Telemetrie, US-Jurisdiktion | **100 % öffentlich-rechtlich**, keine externen Abhängigkeiten |
| **Framework-Lock-in**            | React/Angular/Vue-spezifisch                              | **Frameworkneutral (Web Components)**                         |
| **Lizenzkosten**                 | 600–2.000 €/Dev/Jahr (für benötigte Pro-Features)         | **0 €**                                                       |
| **Langzeitverfügbarkeit**        | Unternehmensstrategieabhängig                             | **öffentlich garantiert**                                     |
| **Visual CI der Bundesbehörden** | Nicht kompatibel mit Bundes-Designs                       | **DESYBRI / ITZBund Themes verfügbar**                        |
| **Vendor Lock-in**               | Hoch                                                      | **Kein Lock-in**                                              |

Fazit:
**Keines dieser Systeme kann die Anforderungen der deutschen Verwaltung langfristig erfüllen.**
KoliBri schließt diese Lücke.

---

# **2. KoliBri in Zahlen (Stand 2025)**

| Kennzahl                    | Wert                                              |
| --------------------------- | ------------------------------------------------- |
| **Komponenten**             | ~50 produktiv einsetzbare Web Components          |
| **Teamrollen**              | 7–9 Rollen (ca. 4,5 FTE, verteilt)                |
| **GitHub Stars**            | >230                                              |
| **Contributors**            | ~30 externe + internes Team                       |
| **Downloads**               | ~5.200 / Woche über alle NPM-Pakete               |
| **Unterstützte Frameworks** | React, Angular (v15–v17), Vue, Solid, Next, Astro |
| **Themes**                  | ITZBund, DESYBRI (BMF), BZST, BWst, KERN          |
| **Accessibility**           | Vollständig WCAG 2.1 AA, viele Komponenten AAA    |
| **Security**                | Keine bekannten CVEs                              |
| **Aktuelle Version**        | 3.0.x stabil (4.0 LTS in Planung)                 |

---

# **3. Das Team und seine außergewöhnliche Effizienz**

## **3.1 Teamgröße**

GitHub-Daten zeigen ein Kerngerüst von:

- **4–6 konstant aktiven Hauptentwicklern**
- **2–4 intermittierenden Rollen** (UX, QA, Management, Docs)
- externen **Community-Contributors**

Die reale Arbeitszeit liegt **unter 50 %** der Personen, da das Team parallel dienstliche Aufgaben erfüllt.

**→ Effektiv ~4,0–5,0 FTE.**

## **3.2 Produktivität**

Typische kommerzielle Bibliotheken benötigen:

- 50–150 Entwickler
- Vollzeit
- dedizierte QA-Teams
- dedizierte Accessibility-Teams

KoliBri liefert mit 4,5 FTE:

- gleichwertige Qualität im Accessibility-Bereich
- höhere Integrationsfähigkeit
- niedrigere Folgekosten

**Produktivitätsfaktor:**
40–50 Komponenten / 4,5 FTE = **~9 Komponenten pro FTE**

Bei kommerziellen Anbietern:
100 Komponenten / 50 FTE ≈ **2 pro FTE**

→ **KoliBri ist 4–5× produktiver.**

---

# **4. Wirtschaftlicher Nutzen (Return on Investment)**

## **4.1 Lizenzkosten-Ersparnis**

Ein Entwickler benötigt bei MUI in realen Projekten oft:

- DataGrid Pro
- DatePicker Pro
- Charts Pro
  → Kosten: **~600–1.500 € pro Entwickler/Jahr**

**Beispiel:**
200 Entwickler in Bundesprojekten → 200 × 1.200 € = **240.000 €/Jahr**

Im Vollausbau (Bund + Länder ~700–1.000 Entwickler):
→ **600.000–1.200.000 €/Jahr Einsparung**

## **4.2 Vermeidung redundanter Eigenentwicklungen**

Ohne KoliBri baut jede Behörde:

- eigene Button-Styles
- eigene Formularfelder
- eigene Tabellen
- eigene Dialoge

Kosten für ein Behörden-Designsystem (ohne Komponenten):
**150.000–300.000 €**

Kosten für eine Komponentenbibliothek:
**300.000–500.000 €**

Bei 10 Behörden wären das:
**4–8 Millionen €**

→ Durch KoliBri komplett vermeidbar.

## **4.3 Gemeinsame Wartung statt 50 Parallelprojekte**

Wenn eine Komponente zentral verbessert wird,
profitieren **alle** Projekte gleichzeitig.

Das spart:

- Testzeit
- Wartungszeit
- Fehlersuche
- Accessibility-Nacharbeit

Geschätzte Ersparnis pro Projekt:
**6.000–20.000 € jährlich**

---

# **5. Digitale Souveränität**

KoliBri erfüllt alle Kriterien für souveräne öffentliche Software:

✔ EUPL-Lizenz
✔ deutscher Betreiber (ITZBund)
✔ vollständige Code-Transparenz
✔ keine Cloud-Abhängigkeiten
✔ keine US-Jurisdiktion
✔ keine kommerziellen Interessen
✔ langfristige LTS-Strategie

Kein anderes UI-Framework erfüllt diesen Kombinationsanspruch.

---

# **6. Barrierefreiheit (Accessibility) als Kerneigenschaft**

## **Warum Barrierefreiheit teuer ist – wenn man sie selbst machen muss**

Ein typisches Behördenprojekt muss sonst:

- ARIA-Verhalten von Standardkomponenten überarbeiten
- Kontraste korrigieren
- Fokusmanagement testen
- Screenreader-Edge-Cases korrigieren

Das dauert _pro Komponente_ 1–3 Tage.

Bei 40 Komponenten wären das:
→ **40–120 Tage Arbeit**
→ **32.000–96.000 €**

Mit KoliBri:
→ **0 Tage**, da alle Komponenten bereits konform sind.

---

# **7. Integration: Warum KoliBri hier unschlagbar ist**

**Web Components** bedeuten:

- funktionieren in jedem Framework
- brauchen keine Rewrite-Zyklen
- überleben Framework-Generationswechsel
- minimieren Abhängigkeiten

In der Verwaltungsrealität mit:

- Angular
- React
- Vue
- teilweise älteren Frameworks
- Microfrontends

ist diese Technik **der einzig zukunftssichere Ansatz**.

---

# **8. DESYBRI + KoliBri: Doppelter Mehrwert**

DESYBRI = Designsystem des Bundesministeriums der Finanzen
basierend auf **KoliBri-Komponenten**.

Vorteil:

- Behörden nutzen **dasselbe technische Fundament**, nur mit eigenem CI
- keine Parallelentwicklung
- kein zusätzlicher Pflegeaufwand

DESYBRI nutzt KoliBri — nicht umgekehrt.

---

# **9. Risiken & Gegenargumente – und warum sie nicht ziehen**

### **9.1 „Das Team ist zu klein“**

Antwort:
Gerade deshalb ist es effizient.
Mehr Ressourcen → mehr Stabilität → höherer ROI.

### **9.2 „KoliBri ist nicht so bekannt wie MUI“**

Antwort:
Barrierefreie Verwaltungssoftware ist ein Spezialmarkt.
MUI ist für globale Web-Apps, **nicht für Verwaltung**.

### **9.3 „KoliBri hat weniger Features“**

Antwort:
Verwaltung braucht **verifizierbare Barrierefreiheit**, nicht 200 fancy Animationen.

### **9.4 „Warum macht der Staat das selbst?“**

Antwort:
Weil **kein anderes System**:

- barrierefrei
- souverän
- DSGVO-rein
- verwaltungsspezifisch
  verfügbar ist.

---

# **10. Handlungsempfehlungen 2026**

1. **Stabile Teamfinanzierung sichern**
   → 8–10 FTE für nachhaltigen Betrieb

2. **Bundesweit verbindliche Empfehlung des IT-Planungsrats**

3. **Föderale Kooperationsmodelle ausbauen**

4. **Automatisierter Support via KI-Integration**
   → entlastet Entwicklerteam

5. **EU-Positionierung**
   → KoliBri als europäischer Accessibility-Standard

---

# **11. Schlusswort**

KoliBri zeigt:
Öffentliche Verwaltung _kann_ Software liefern, die technisch, ökonomisch und gesellschaftlich besser ist als kommerzielle Angebote.

Mit minimalem Budget entsteht ein Projekt, das:

- Millionen spart
- Barrierefreiheit garantiert
- digitale Souveränität stärkt
- föderale Zusammenarbeit ermöglicht

**KoliBri ist kein Kostenfaktor.
KoliBri ist eine Investition in die Zukunftsfähigkeit der Verwaltung.**
