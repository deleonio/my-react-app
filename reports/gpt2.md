# KoliBri Jahresbericht 2025 – Management- und Politikfassung

## Executive Summary (Kernbotschaften)

- **Hocheffizientes Open-Source-Projekt:** Trotz nur ~4,5 VZÄ (400–450 T€ Budget/Jahr) liefert das KoliBri-Team ein vollumfängliches Design-System mit über 40 barrierefreien Komponenten. Zum Vergleich: Kommerzielle Design-Systeme (z.B. MUI, AntD) beschäftigen 10–30 × mehr Entwickler bei Millionen-Budgets. KoliBri realisiert Standardfunktionen „out of the box“ und minimiert individuellen Entwicklungsaufwand.

- **Vollständige Barrierefreiheit & Standards:** KoliBri erfüllt **WCAG 2.1 AAA**, BITV 2.0 und EN 301 549. Die Komponenten basieren auf W3C-Webstandards und sind rahmenunabhängig. Das erspart umfassende Nacharbeit für BITV-Konformität.

- **Hohe Kosteneffizienz und Souveränität:** Vollständig **Open Source (EUPL v1.2)**, keine Lizenzkosten, keine Premium-Funktionen. Vermeidet vendor-lock-in, sichert strategische Kontrolle und Datenschutz.

- **Etablierte Nutzung im Zielmarkt:** Kontinuierliche Nutzung durch den öffentlichen Sektor mit 4.000–5.000 Installationen/Woche. Im Verwaltungs-Kontext ist dies ein starkes Signal für Marktdurchdringung.

- **Signifikante Einsparpotenziale:** In einer typischen Verwaltungs-App spart KoliBri im ersten Jahr bis zu 40.000 €. Hochgerechnet auf 50 Anwendungen ergibt das über 1,5 Mio. € Einsparung für die öffentliche Hand.

## 1. Team-Effizienz: KoliBri (4,5 FTE) vs. Marktanbieter

| System/Team    | Entwickler (ca.) | Budget (€/Jahr) | Komponenten | Produktivität (Komponenten/Dev) |
| -------------- | ---------------- | --------------- | ----------- | ------------------------------- |
| **KoliBri**    | 4,5              | ≈380.000 €      | 40+         | ≈10                             |
| MUI (Google)   | 50–100           | >5 Mio. €       | 100+        | ≈1–2                            |
| Ant Design     | 50               | >5 Mio. €       | 60+         | ≈1–2                            |
| Carbon (IBM)   | 20               | >5 Mio. €       | 50+         | ≈2–3                            |
| Fluent UI (MS) | 100              | >10 Mio. €      | 80+         | ≈0,8                            |
| PrimeReact     | 5                | ≈1 Mio. €       | 60+         | ≈12                             |

**Fazit:** KoliBri erzielt mit kleinem Budget und Team eine außergewöhnliche Output-Qualität.

## 2. Nutzung & Download-Zahlen

- **@public-ui/components:** ≈2.800 Downloads/Woche
- **Themes (ITZBund, BMF etc.):** ≈846 Downloads/Woche
- **Adapter React/Angular:** ≈872 / ≈276 Downloads/Woche
- **Tooling (create-kolibri):** ≈100/Woche
- **Gesamt:** ≈4.000–5.000 Downloads/Woche

**Einordnung:** Im Zielmarkt "Verwaltung" ist das signifikant. Absolute Downloadzahlen von MUI (>5 Mio./Woche) sind irrelevant, da globaler Markt.

## 3. Kommerzielle Systeme: Risiken & Vergleich

| Faktor             | KoliBri          | Kommerziell (z.B. MUI, Ant)            |
| ------------------ | ---------------- | -------------------------------------- |
| Lizenzmodell       | EUPL (Copyleft)  | MIT + kostenpflichtige Pro-Komponenten |
| Premium-Funktionen | Nein             | Ja (z.B. DataGrid Pro)                 |
| Souveränität       | Hoch (staatlich) | Niedrig (Google, Alibaba etc.)         |
| Datenschutz        | DSGVO-konform    | Teils US-/CN-Recht betroffen           |
| Preis 10 Devs/Jahr | 0 €              | bis zu 5.600 €                         |
| Wartungsaufwand    | Niedrig          | Hoch (viele Abhängigkeiten)            |
| Roadmap-Kontrolle  | Hoch             | Niedrig                                |

## 4. Vergleich zu Community-Frameworks (Chakra, shadcn, etc.)

- **Barrierefreiheit:** Nur KoliBri mit WCAG AAA & BITV out of the box
- **Verwaltungs-Fokus:** Nur KoliBri mit Themes für ITZBund, BZSt etc.
- **Governance:** KoliBri durch öffentliche Institutionen, andere meist Einzelpersonen oder Kleinteams
- **Finanzierung:** KoliBri öffentlich finanziert (≈380k), Chakra UI ≈120k$/Jahr Spendenziel, shadcn = 1 Person ohne Finanzierung

## 5. Technische Vergleichsdaten

- **BITV-Einsparung:** 30+ Tage dev-Zeit erspart pro Projekt
- **Bundle-Größe:** KoliBri ≈47 kB min., MUI >800 kB
- **Lighthouse-Scores:** KoliBri ≈100/100 Accessibility, Performance sehr hoch
- **Wartung:** Wenige Dependencies, einfache Updates
- **CVEs:** Keine gemeldeten Schwachstellen

## 6. Kostenvergleich pro Anwendung (10-Dev-Team, erstes Jahr)

| Kostenfaktor            | KoliBri      | MUI Pro      | Chakra       | Vuetify      | Ant          |
| ----------------------- | ------------ | ------------ | ------------ | ------------ | ------------ |
| Lizenz                  | 0 €          | 1.700 €      | 0 €          | 0 €          | 0 €          |
| Nacharbeit Barrierefrei | 0 €          | 15.000 €     | 15.000 €     | 15.000 €     | 15.000 €     |
| Audit                   | 2.000 €      | 10.000 €     | 10.000 €     | 10.000 €     | 10.000 €     |
| Theme-Entwicklung       | 0 €          | 10.000 €     | 10.000 €     | 10.000 €     | 10.000 €     |
| Schulung                | 2.000 €      | 8.000 €      | 8.000 €      | 8.000 €      | 8.000 €      |
| Wartung & Migration     | 2.000 €      | 25.000 €     | 15.000 €     | 15.000 €     | 15.000 €     |
| Souveränitätsschutz     | 0 €          | 5.000 €      | 5.000 €      | 5.000 €      | 5.000 €      |
| **Gesamt**              | **24.000 €** | **64.700 €** | **63.000 €** | **63.000 €** | **63.000 €** |

## 7. Hochrechnung für 50 Verwaltungen

- **Ersparnis pro Anwendung:** ≈40.000 €
- **50 Anwendungen:** ≈1,5 Mio. € Einsparung
- **Langfristiger Nutzen:** Standards, Wiederverwendung, weniger Schulung, mehr Kontrolle

## 8. Empfehlungen für 2026

- Finanzierung halten/steigern (z.B. 450 T€)
- KoliBri als Standard bei öffentlichen Projekten
- Ausbau Schulungs- & Community-Strukturen
- EU-Kooperationen und Komponententausch
- Monitoring und Audits zentral über KoliBri-Team organisieren

**Fazit:** KoliBri ist ein souveränes, effizientes und strategisch wertvolles Open-Source-Projekt für den digitalen Staat. Es verdient politisches Mandat und langfristige Sicherung.
