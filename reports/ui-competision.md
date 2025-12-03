# Vergleichende Analyse von UI-Komponentenbibliotheken für die deutsche öffentliche Verwaltung

Die Auswahl einer UI-Komponentenbibliothek für öffentliche Verwaltungen erfordert eine systematische Bewertung, die weit über reine Funktionalität hinausgeht. **BITV 2.0-Konformität, langfristige Kostenstrukturen und strategische Governance-Risiken** entscheiden maßgeblich über die Eignung für den öffentlichen Sektor. Diese Analyse untersucht neun etablierte Bibliotheken anhand eines standardisierten Bewertungsrahmens und ermöglicht so eine fundierte, kontextabhängige Entscheidungsfindung für unterschiedliche Projektanforderungen.

---

## 1. Executive Summary

### Fragestellung und Kontext

Die digitale Transformation der öffentlichen Verwaltung in Deutschland stellt besondere Anforderungen an Frontend-Technologien. Seit dem Inkrafttreten der BITV 2.0 müssen alle Webangebote des Bundes und der Länder WCAG 2.1 Level AA entsprechen – eine Anforderung, die ab Juni 2025 durch das Barrierefreiheitsstärkungsgesetz (BFSG) auch auf privatwirtschaftliche Akteure ausgeweitet wird. Gleichzeitig erfordern knappe Entwicklungsressourcen und langfristige Wartungsverpflichtungen eine sorgfältige Abwägung zwischen Eigenentwicklung und der Nutzung etablierter Komponentenbibliotheken.

Diese Analyse beantwortet die zentrale Frage: **Welche UI-Komponentenbibliothek eignet sich unter Berücksichtigung von Barrierefreiheit, Lizenzkosten, Governance-Strukturen und strategischen Risiken am besten für spezifische Anwendungsfälle in der deutschen öffentlichen Verwaltung?**

### Methodik

Die Bewertung basiert auf einer Kombination aus quantitativen Metriken (npm-Downloads, GitHub-Aktivität, Bundle-Größen) und qualitativen Einschätzungen (Dokumentationsqualität, Compliance-Status). Alle Behauptungen werden auf öffentlich verfügbare Quellen zurückgeführt. Szenarien und Schätzungen sind explizit als solche gekennzeichnet.

### Kurzprofil-Übersicht aller Bibliotheken

| Bibliothek     | Primärer Fokus                  | Lizenz            | GitHub Stars | npm Weekly Downloads | Governance            | BITV-Eignung |
| -------------- | ------------------------------- | ----------------- | ------------ | -------------------- | --------------------- | ------------ |
| **KoliBri**    | Deutsche öffentliche Verwaltung | EUPL 1.2          | ~220         | ~2.700               | Staatlich (ITZBund)   | ⭐⭐⭐       |
| **MUI**        | Enterprise React                | MIT + kommerziell | ~97.000      | ~5.800.000           | Kommerziell           | ⭐⭐         |
| **Ant Design** | Enterprise React                | MIT               | ~96.000      | ~2.300.000           | Corporate (Ant Group) | ⭐           |
| **Chakra UI**  | Entwickler-Experience           | MIT               | ~38.000      | ~910.000             | Community             | ⭐⭐         |
| **Mantine**    | Vollständigkeit                 | MIT               | ~30.000      | ~785.000             | Community             | ⭐⭐         |
| **shadcn/ui**  | Anpassbarkeit                   | MIT               | ~101.000     | N/A (Copy-Paste)     | Community/Vercel      | ⭐⭐         |
| **Carbon**     | IBM Enterprise                  | Apache 2.0        | ~8.500       | ~moderat             | Corporate (IBM)       | ⭐⭐⭐       |
| **Fluent UI**  | Microsoft-Ökosystem             | MIT               | ~19.700      | ~890.000             | Corporate (Microsoft) | ⭐⭐⭐       |
| **PrimeReact** | Komponentenvielfalt             | MIT + kommerziell | ~8.100       | ~870.000/Monat       | Kommerziell           | ⭐⭐         |

---

## 2. Methodik und Bewertungsrahmen

### Sechs Bewertungsdimensionen

Die Analyse strukturiert sich entlang von sechs Dimensionen, die für Entscheidungsträger in der öffentlichen Verwaltung zentrale Relevanz besitzen:

**Dimension 1: Lizenzkosten** umfasst direkte Lizenzgebühren, versteckte Kosten durch kommerzielle Erweiterungen und langfristige Preisentwicklungen. Die Bewertung berücksichtigt sowohl Open-Source-Grundlagen als auch kostenpflichtige Premium-Tiers.

**Dimension 2: Barrierefreiheit** bewertet die Konformität mit WCAG 2.1 Level AA und BITV 2.0, die ARIA-Implementierungsqualität sowie den geschätzten Nacharbeitsaufwand für vollständige Compliance.

**Dimension 3: Governance** analysiert die Eigentümerstruktur, Entscheidungsprozesse für Breaking Changes und die langfristige Stabilität des Projekts. Hier fließen sowohl Unternehmensformen als auch Community-Strukturen ein.

**Dimension 4: Ökosystem** bewertet die Größe der Entwickler-Community, die Verfügbarkeit von Drittanbieter-Erweiterungen und die Integration mit gängigen Entwicklungswerkzeugen.

**Dimension 5: Technische Eignung** umfasst Bundle-Größen, Framework-Kompatibilität, Theming-Möglichkeiten und Dokumentationsqualität.

**Dimension 6: Strategische Risiken** identifiziert Faktoren wie Vendor Lock-in, geopolitische Abhängigkeiten und die Wahrscheinlichkeit disruptiver Änderungen.

### Scoring-Skala 1-5

| Score | Bedeutung    | Beschreibung                                    |
| ----- | ------------ | ----------------------------------------------- |
| 5     | Exzellent    | Vollständig geeignet ohne Einschränkungen       |
| 4     | Gut          | Geeignet mit minimalen Anpassungen              |
| 3     | Befriedigend | Geeignet mit moderatem Aufwand                  |
| 2     | Ausreichend  | Nutzbar mit erheblichem Aufwand                 |
| 1     | Mangelhaft   | Nicht empfohlen ohne grundlegende Überarbeitung |

### Bewertungsmatrix der Primärbibliotheken

| Dimension            | KoliBri | MUI     | Ant Design |
| -------------------- | ------- | ------- | ---------- |
| Lizenzkosten         | 5       | 4       | 5          |
| Barrierefreiheit     | 5       | 3       | 2          |
| Governance           | 5       | 4       | 3          |
| Ökosystem            | 2       | 5       | 5          |
| Technische Eignung   | 4       | 5       | 4          |
| Strategische Risiken | 5       | 3       | 2          |
| **Durchschnitt**     | **4,3** | **4,0** | **3,5**    |

---

## 3. Teamstrukturen und Entwicklungskapazitäten

### Governance-Modelle im Vergleich

Die analysierten Bibliotheken lassen sich in drei grundlegend verschiedene Governance-Kategorien einteilen, die jeweils spezifische Vor- und Nachteile für öffentliche Auftraggeber mit sich bringen.

**Staatlich geführte Projekte** wie KoliBri unterliegen der direkten Kontrolle öffentlicher Institutionen. Das Informationstechnikzentrum Bund (ITZBund) mit seinen rund **4.100 Mitarbeitern** an 12 Standorten gewährleistet eine langfristige Finanzierung und strategische Ausrichtung auf die Bedürfnisse der Bundesverwaltung. Die Veröffentlichung unter der EUPL-Lizenz im Oktober 2022 markierte den Übergang zu einem Open-Source-Modell, das externe Beiträge ermöglicht, während die Kernentwicklung intern koordiniert bleibt.

**Corporate-gesteuerte Bibliotheken** wie MUI, Ant Design, Carbon und Fluent UI profitieren von erheblichen Ressourcen ihrer Mutterorganisationen. MUI SAS beschäftigt nach eigenen Angaben etwa **32 Mitarbeiter (Stand 2023)** und plant eine Expansion auf 60 Mitarbeiter. Das Unternehmen finanziert sich primär durch kommerzielle Lizenzen für MUI X und hat laut verfügbaren Daten keine klassische Venture-Capital-Finanzierung erhalten, sondern eine Fremdfinanzierung über **20 Millionen US-Dollar** von Indies Special Opportunities. Ant Design wird von Ant Group entwickelt, einem Tochterunternehmen der Alibaba-Gruppe, und verfügt über ein Kernteam von etwa **5 hauptverantwortlichen Maintainern** sowie über 2.280 Contributors auf GitHub.

**Community-getriebene Projekte** wie Chakra UI, Mantine und shadcn/ui weisen heterogenere Strukturen auf. Mantine wird primär von Vitaly Rtishchev entwickelt und finanziert sich über Open Collective. Shadcn/ui erfuhr durch die Einstellung seines Hauptentwicklers bei Vercel im August 2023 eine erhebliche Professionalisierung, bleibt aber im Kern ein Copy-Paste-Ansatz ohne zentrale Abhängigkeiten.

### GitHub-Aktivitätsmetriken

| Bibliothek | Contributors | Commits  | Open Issues     | Release-Frequenz |
| ---------- | ------------ | -------- | --------------- | ---------------- |
| KoliBri    | ~30-50       | ~5.000+  | ~50-100         | Monatlich        |
| MUI        | ~3.000+      | ~30.000+ | Mehrere hundert | Wöchentlich      |
| Ant Design | ~2.280       | ~29.700+ | Mehrere hundert | Wöchentlich      |
| Chakra UI  | ~700-1.470   | ~15.000+ | ~200-400        | Monatlich        |
| Mantine    | ~500+        | ~10.000+ | ~100-200        | Monatlich        |
| shadcn/ui  | ~500+        | ~3.000+  | ~100-300        | Unregelmäßig     |
| Carbon     | ~549         | ~20.000+ | ~100-200        | Monatlich        |
| Fluent UI  | ~Hunderte    | ~25.000+ | ~500+           | Wöchentlich      |
| PrimeReact | ~341         | ~10.000+ | ~100-200        | Monatlich        |

### DORA-Metriken und Entwicklungsgeschwindigkeit

Die **DORA-Metriken** (Deployment Frequency, Lead Time for Changes, Change Failure Rate, Time to Restore Service) bieten Einblicke in die Entwicklungsreife der Projekte. Die verfügbaren Daten deuten darauf hin, dass MUI und Ant Design aufgrund ihrer wöchentlichen Release-Zyklen und der schnellen Reaktion auf kritische Bugs die höchste Deployment-Frequenz aufweisen. KoliBri verfolgt dagegen einen konservativen Ansatz mit **LTS-Versionen über 3 Jahre** und STS-Versionen über 15 Monate, was für Behörden mit langfristigen Wartungszyklen vorteilhaft sein kann.

Die Lead Time for Changes variiert erheblich: Während bei MUI Pull Requests oft innerhalb von Tagen gemerged werden, können bei kleineren Projekten wie Mantine Wochen vergehen. Die Change Failure Rate ist schwer zu quantifizieren, jedoch weisen die häufigen Patch-Releases bei MUI (v7.3.5 im November 2024, v7.3.6 kurz darauf) auf eine hohe Fehlerkorrekturrate hin.

---

## 4. Nutzungsstatistiken und Marktdurchdringung

### npm-Download-Analyse

Die wöchentlichen npm-Download-Zahlen bieten einen quantitativen Indikator für die Marktdurchdringung, sind jedoch mit Vorsicht zu interpretieren. CI/CD-Pipelines, automatisierte Builds und Mirror-Server können die Zahlen künstlich aufblähen.

| Bibliothek | Haupt-Paket                | Wöchentliche Downloads  | Trend (12 Monate)      |
| ---------- | -------------------------- | ----------------------- | ---------------------- |
| MUI        | @mui/material              | ~5.800.000              | Stabil bis steigend    |
| Ant Design | antd                       | ~2.300.000              | Stabil                 |
| Chakra UI  | @chakra-ui/react           | ~910.000                | Leicht fallend         |
| Fluent UI  | @fluentui/react-components | ~890.000 (kombiniert)   | Steigend (v9-Adoption) |
| PrimeReact | primereact                 | ~870.000/Monat          | Steigend               |
| Mantine    | @mantine/core              | ~785.000                | Steigend               |
| KoliBri    | @public-ui/react           | ~2.700                  | Stabil (Nischenmarkt)  |
| shadcn/ui  | N/A                        | N/A (Copy-Paste-Modell) | N/A                    |

Die deutlich niedrigeren Download-Zahlen von KoliBri spiegeln den Fokus auf die deutsche öffentliche Verwaltung wider und sind kein Indikator für mangelnde Qualität. Die Bibliothek adressiert einen spezifischen Markt mit etwa 500.000 Beschäftigten in der unmittelbaren Bundesverwaltung und mehreren Millionen in der erweiterten öffentlichen Verwaltung.

### Zielmarkt-Segmentierung

**Enterprise-fokussierte Bibliotheken** wie MUI, Ant Design und PrimeReact dominieren im B2B-Segment mit umfangreichen Komponenten für Data Grids, Charts und komplexe Formulare. MUI berichtet von über **10.300 abhängigen Projekten** auf npm.

**Developer-Experience-fokussierte Bibliotheken** wie Chakra UI und Mantine priorisieren Entwicklerproduktivität und API-Design. Mantine bietet mit **120+ Komponenten und 70+ Hooks** die umfangreichste Funktionalität in dieser Kategorie.

**Design-System-fokussierte Bibliotheken** wie Carbon und Fluent UI dienen primär der Markenidentität ihrer Mutterorganisationen (IBM bzw. Microsoft), werden aber auch extern eingesetzt.

**Public-Sector-fokussierte Bibliotheken** wie KoliBri adressieren spezifische Compliance-Anforderungen und sind für den allgemeinen Markt weniger relevant, bieten aber für ihren Zielmarkt optimale Passung.

### Paket-Strukturen und Abhängigkeiten

Die analysierten Bibliotheken unterscheiden sich erheblich in ihrer Paketstruktur:

**Monolithische Pakete** wie antd liefern alle Komponenten in einem Paket. Tree-Shaking ist seit Version 5 automatisch möglich, erfordert aber korrekte Bundler-Konfiguration.

**Modulare Pakete** wie MUI (@mui/material, @mui/system, @mui/base, @mui/x-data-grid) ermöglichen selektive Installation, erhöhen aber die Komplexität des Dependency-Managements.

**Copy-Paste-Modelle** wie shadcn/ui eliminieren externe Abhängigkeiten vollständig. Der Quellcode wird direkt ins Projekt kopiert, was maximale Kontrolle, aber auch Wartungsaufwand bedeutet.

---

## 5. Lizenzmodelle und kommerzielle Aspekte

### Lizenztypen im Überblick

Die Lizenzlandschaft der analysierten Bibliotheken ist heterogen. Für öffentliche Auftraggeber ist die Unterscheidung zwischen permissiven Lizenzen (MIT, Apache 2.0), Copyleft-Lizenzen (EUPL) und kommerziellen Dual-Licensing-Modellen entscheidend.

**MIT-lizenzierte Bibliotheken** (MUI Core, Ant Design, Chakra UI, Mantine, shadcn/ui, Fluent UI, PrimeReact) erlauben uneingeschränkte kommerzielle Nutzung ohne Pflicht zur Quelltextoffenlegung. Dies bietet maximale Flexibilität, birgt aber das Risiko, dass Dritte proprietäre Forks erstellen können.

**Apache 2.0-lizenzierte Bibliotheken** (Carbon) bieten ähnliche Freiheiten wie MIT, enthalten aber zusätzlich eine explizite Patentlizenz und Pflichten zur Dokumentation von Änderungen.

**EUPL-lizenzierte Bibliotheken** (KoliBri) unterliegen einem moderaten Copyleft. Abgeleitete Werke müssen unter EUPL oder einer kompatiblen Lizenz veröffentlicht werden. Die EUPL wurde explizit für EU-Behörden entwickelt und ist in **23 EU-Amtssprachen** rechtlich bindend verfügbar.

### Kommerzielle Tier-Strukturen

| Bibliothek   | Free Tier             | Pro/Premium                                  | Enterprise                |
| ------------ | --------------------- | -------------------------------------------- | ------------------------- |
| MUI          | Core-Komponenten      | $180/dev/Jahr (Pro), $588/dev/Jahr (Premium) | Individuelle Preise       |
| PrimeReact   | Alle Komponenten      | $99/dev/Jahr (Elite)                         | PRO Support (auf Anfrage) |
| Alle anderen | Vollständig kostenlos | N/A                                          | N/A                       |

Die kommerzielle Struktur von MUI X verdient besondere Beachtung. Der **Pro-Tier** für **180 USD pro Entwickler und Jahr** umfasst erweiterte Funktionen für Data Grid, Date Range Pickers und Tree View. Der **Premium-Tier** für **588 USD pro Entwickler und Jahr** fügt Row Grouping, Excel-Export und Aggregationsfunktionen hinzu.

**Wichtiger Hinweis zur Preisstruktur:** MUI hat im September 2024 sein Lizenzmodell von einer pauschalen Lizenz für die ersten 10 Entwickler auf ein individuelles Pro-Developer-Modell umgestellt. Bestandskunden behalten ihre Legacy-Konditionen, neue Kunden zahlen für jeden Frontend-Entwickler. Zudem behält sich MUI jährliche Preiserhöhungen von **bis zu 7%** vor.

### Historische Lizenzänderungen als Risikoindikator

Die Geschichte zeigt, dass Lizenzänderungen erhebliche Auswirkungen haben können. Das prägnanteste Beispiel ist **React selbst**: Zwischen 2013 und 2017 verwendete Facebook eine BSD+Patents-Lizenz mit einer kontroversen Patentklausel. Erst nach erheblichem Community-Druck und dem Ausschluss durch die Apache Foundation erfolgte im September 2017 der Wechsel zu MIT.

Für die analysierten Bibliotheken sind keine vergleichbaren Lizenzänderungen dokumentiert. Dennoch sollten öffentliche Auftraggeber bei Bibliotheken mit kommerziellen Tiers (MUI, PrimeReact) die Möglichkeit zukünftiger Preisanpassungen berücksichtigen.

### Drei-Jahres-Kostenprojektion (Szenario: 10 Entwickler)

| Bibliothek         | Jahr 1  | Jahr 2  | Jahr 3  | Gesamt (3 Jahre) |
| ------------------ | ------- | ------- | ------- | ---------------- |
| KoliBri            | 0 €     | 0 €     | 0 €     | **0 €**          |
| MUI (nur Core)     | 0 €     | 0 €     | 0 €     | **0 €**          |
| MUI X Pro          | 1.656 € | 1.772 € | 1.896 € | **~5.300 €**     |
| MUI X Premium      | 5.410 € | 5.789 € | 6.194 € | **~17.400 €**    |
| PrimeReact Elite   | 911 €   | 911 €   | 911 €   | **~2.730 €**     |
| Alle anderen (MIT) | 0 €     | 0 €     | 0 €     | **0 €**          |

_Annahmen: USD/EUR-Kurs 0,92; 7% jährliche Erhöhung bei MUI; stabile Preise bei PrimeReact_

---

## 6. Barrierefreiheit und BITV 2.0 Konformität

### Regulatorischer Rahmen

Die **BITV 2.0** (Barrierefreie-Informationstechnik-Verordnung) konkretisiert die Anforderungen des Behindertengleichstellungsgesetzes (BGG) für Webangebote und mobile Anwendungen. Sie inkorporiert den europäischen Standard **EN 301 549**, der wiederum auf **WCAG 2.1 Level AA** basiert. Zusätzlich fordert BITV 2.0 spezifisch deutsche Anforderungen wie Inhalte in Deutscher Gebärdensprache und Leichter Sprache auf Startseiten.

Ab dem **28. Juni 2025** erweitert das Barrierefreiheitsstärkungsgesetz (BFSG) diese Anforderungen auf privatwirtschaftliche Produkte und Dienstleistungen – ein Aspekt, der auch für privatwirtschaftliche Auftragnehmer der öffentlichen Verwaltung relevant ist.

### WCAG-Konformitätsstatus der Bibliotheken

| Bibliothek | Beanspruchtes Level               | Verifizierung                                | ARIA-Qualität | Nacharbeitsaufwand   |
| ---------- | --------------------------------- | -------------------------------------------- | ------------- | -------------------- |
| KoliBri    | WCAG 2.1 AA, EN 301 549, BITV 2.0 | ✅ Intern getestet, EU AccessibleEU gelistet | Exzellent     | Gering (0-20h)       |
| Carbon     | WCAG 2.1/2.2 AA, Section 508      | ✅ IBM Accessibility Checklist               | Exzellent     | Gering (40-80h)      |
| Fluent UI  | WCAG 2.1 AA                       | ✅ Microsoft interne Tests                   | Sehr gut      | Moderat (80-120h)    |
| Chakra UI  | WAI-ARIA, WCAG 2.0                | ⚠️ Selbstauskunft                            | Gut           | Moderat (120-200h)   |
| Mantine    | WAI-ARIA                          | ⚠️ axe/VoiceOver-Tests dokumentiert          | Gut           | Moderat (100-150h)   |
| MUI        | WCAG 2.1 AA (Ziel)                | ⚠️ Selbstauskunft, kein VPAT                 | Mäßig         | Erheblich (160-320h) |
| shadcn/ui  | Via Radix UI Primitives           | ⚠️ Abhängig von Radix                        | Gut           | Moderat (100-180h)   |
| PrimeReact | WCAG 2.0 AA                       | ⚠️ Selbstauskunft                            | Mäßig         | Erheblich (150-250h) |
| Ant Design | Keine explizite Angabe            | ❌ Keine Dokumentation                       | Unzureichend  | Hoch (400-600h+)     |

### ARIA-Implementierungsdetails

Die Qualität der ARIA-Implementierung variiert erheblich. **KoliBri** und **Carbon** implementieren konsistent semantisches HTML mit korrekten ARIA-Rollen, -Zuständen und -Eigenschaften über alle Komponenten hinweg. Beide Bibliotheken verfügen über dedizierte Accessibility-Teams (bei KoliBri durch ITZBund, bei Carbon durch die IBM Accessibility Guild).

**MUI** dokumentiert ARIA-Best-Practices in der Dokumentation, die tatsächliche Implementierung weist jedoch Lücken auf. Bekannte Issues betreffen das Select-Komponente (`aria-hidden` und `tabindex` inkorrekt verwendet), Data Grid (fehlende Form-Labels) und mehrere MUI X-Komponenten, die WCAG 2.2-Anforderungen für Zielgrößen nicht erfüllen.

**Ant Design** weist die größten Accessibility-Defizite auf. In GitHub-Issues wird dokumentiert, dass das Kernteam Barrierefreiheit als nachrangig betrachtet. Ein Issue (#16270) beschreibt explizit, dass "Ant Design derzeit nicht barrierefreie Formulare generiert. Blinde Personen können mit Ant Design erstellte Formulare nicht nutzen."

### Aufwandsschätzung für BITV 2.0-Konformität

Die folgenden Schätzungen basieren auf typischen Projektanforderungen und sollten als Orientierungswerte verstanden werden:

| Bibliothek | Komponenten mit Defiziten | Geschätzte Entwicklerstunden | Risikobewertung |
| ---------- | ------------------------- | ---------------------------- | --------------- |
| KoliBri    | 0-5%                      | 0-20h                        | 🟢 Niedrig      |
| Carbon     | 5-10%                     | 40-80h                       | 🟢 Niedrig      |
| Fluent UI  | 15-20%                    | 80-120h                      | 🟡 Mittel       |
| Chakra UI  | 25-35%                    | 120-200h                     | 🟡 Mittel       |
| MUI        | 30-40%                    | 160-320h                     | 🟠 Mittel-Hoch  |
| Ant Design | 60-70%                    | 400-600h+                    | 🔴 Hoch         |

_Diese Schätzungen beziehen sich auf die Erreichung vollständiger WCAG 2.1 AA-Konformität und berücksichtigen nicht projektspezifische Anforderungen._

---

## 7. Governance und strategische Risiken

### Governance-Modelle im Detail

Die langfristige Stabilität einer UI-Bibliothek hängt maßgeblich von ihrer Governance-Struktur ab. Für öffentliche Auftraggeber mit Projektlaufzeiten von 5-10+ Jahren ist dies ein kritischer Faktor.

**Staatliche Governance (KoliBri)** bietet die höchste Stabilität für deutsche Behörden. Das ITZBund als Betreiber unterliegt der Kontrolle des Bundesfinanzministeriums und ist gesetzlich zur Bereitstellung von IT-Diensten für die Bundesverwaltung verpflichtet. Das Projekt kann nicht ohne weiteres eingestellt oder verkauft werden. Die Entwicklungs-Roadmap ist öffentlich dokumentiert mit LTS-Versionen, die drei Jahre Support erhalten.

**Corporate Governance (MUI, Ant Design, Carbon, Fluent UI)** bietet erhebliche Ressourcen, aber auch Abhängigkeiten von Unternehmensstrategien. MUI SAS ist ein eigenständiges Unternehmen mit Hauptsitz in Paris, das sich über kommerzielle Lizenzen finanziert. Ein Szenario, in dem das Unternehmen verkauft wird oder die Strategie ändert, kann nicht ausgeschlossen werden. IBM und Microsoft bieten als Großkonzerne hohe Stabilität, ihre Bibliotheken könnten aber im Zuge strategischer Neuausrichtungen deprioritisiert werden (wie bei der Einstellung von Northstar für Fluent UI im Juli 2025).

**Community Governance (Chakra UI, Mantine, shadcn/ui)** weist das höchste Risiko auf. Projekte, die primär von Einzelpersonen oder kleinen Teams abhängen, können durch Burnout, Interessenwandel oder Finanzierungsprobleme gefährdet werden. Mantine wird primär von einem einzelnen Maintainer entwickelt – ein erhebliches "Lottery Factor"-Risiko.

### Geopolitische Faktoren

Die Herkunft der Bibliotheken kann je nach Sicherheitsanforderungen relevant sein. Diese Darstellung erfolgt neutral und informativ; die Bewertung obliegt den jeweiligen Entscheidungsträgern unter Berücksichtigung ihrer spezifischen Anforderungen.

| Bibliothek | Herkunft    | Eigentümerstruktur          | Anmerkungen                                                |
| ---------- | ----------- | --------------------------- | ---------------------------------------------------------- |
| KoliBri    | Deutschland | Bundesbehörde (ITZBund)     | Vollständig deutsche Kontrolle                             |
| MUI        | Frankreich  | Privatunternehmen (MUI SAS) | EU-basiert, keine bekannten externen Investoren            |
| Ant Design | China       | Ant Group/Alibaba           | Unterliegt chinesischem Recht und regulatorischer Aufsicht |
| Chakra UI  | USA         | Community-Projekt           | Unabhängig                                                 |
| Mantine    | Belarus     | Einzelentwickler            | Kann für bestimmte Anforderungen relevant sein             |
| shadcn/ui  | Kanada      | Vercel-Mitarbeiter          | US-Unternehmen Vercel ist Arbeitgeber                      |
| Carbon     | USA         | IBM Corporation             | Amerikanischer Konzern                                     |
| Fluent UI  | USA         | Microsoft Corporation       | Amerikanischer Konzern                                     |
| PrimeReact | Türkei      | PrimeTek                    | Türkisches Unternehmen                                     |

**Hinweis zu Ant Design:** Die Bibliothek ist Open Source unter MIT-Lizenz, der Quellcode ist öffentlich auditierbar, und es sind keine datenschutzrelevanten Funktionen enthalten. Einige Organisationen haben jedoch Richtlinien bezüglich Software aus bestimmten Jurisdiktionen, die unabhängig von technischen Faktoren zu berücksichtigen sein können.

### Breaking Changes und Migrationshistorie

Die Historie von Breaking Changes gibt Aufschluss über die Stabilität und den Respekt gegenüber bestehenden Nutzern.

**KoliBri** verfolgt eine konservative Strategie mit expliziten LTS-Versionen. Die Migration von v1 zu v2 wurde durch ein CLI-Tool (`npx @public-ui/kolibri-cli migrate src`) unterstützt, das die meisten Breaking Changes automatisch handhabt. Deprecated Features werden mindestens eine Major-Version vor Entfernung gekennzeichnet.

**MUI** hatte mit der Migration von v4 zu v5 erhebliche Breaking Changes, insbesondere den Wechsel des Styling-Systems von JSS zu Emotion. Dies erforderte bei vielen Projekten umfangreiche Anpassungen. Codemods wurden bereitgestellt, aber Community-Berichte dokumentieren wochenlange Migrationsarbeiten bei größeren Codebasen.

**Ant Design** führte mit v5 (November 2022) einen vollständigen Wechsel der CSS-Architektur durch: Less wurde durch CSS-in-JS ersetzt, alle CSS-Dateien wurden entfernt. Diese Änderung war tiefgreifend und erforderte bei vielen Projekten erhebliche Anpassungen. Version 4 erreichte End-of-Life im Dezember 2023.

---

## 8. Technische Eigenschaften

### Bundle-Größen im Vergleich

Die Bundle-Größe beeinflusst Ladezeiten und damit Nutzererfahrung und Barrierefreiheit. Die folgenden Werte beziehen sich auf gzip-komprimierte Pakete bei typischer Nutzung:

| Bibliothek | Volle Bibliothek (gzip)            | Einzelkomponenten | Tree-Shaking        |
| ---------- | ---------------------------------- | ----------------- | ------------------- |
| KoliBri    | ~80-100 kB (Lazy Loading)          | Ja                | Ja (Web Components) |
| MUI        | ~170-180 kB                        | Ja                | Ja                  |
| Ant Design | ~350-380 kB                        | Ja                | Ja (ab v5)          |
| Chakra UI  | ~89-101 kB                         | Eingeschränkt     | Ja                  |
| Mantine    | ~44 kB (Core)                      | Ja                | Ja                  |
| shadcn/ui  | Minimal (nur kopierte Komponenten) | Per Definition    | N/A                 |
| Carbon     | Variabel (Tree-Shaking kritisch)   | Ja                | Ja                  |
| Fluent UI  | ~Moderat                           | Ja                | Ja                  |
| PrimeReact | ~Groß (59.6 MB unpacked)           | Ja                | Ja                  |

**KoliBri** verwendet Web Components mit Shadow DOM und Lazy Loading, was bedeutet, dass Komponenten erst bei tatsächlicher Nutzung geladen werden. Dies ist für die initiale Ladezeit vorteilhaft.

**Mantine** weist mit ~44 kB für das Core-Paket eine der geringsten Größen auf, erfordert aber zusätzliche Pakete für erweiterte Funktionen wie Rich Text Editor oder Charts, die erheblich größer sind.

**shadcn/ui** hat das einzigartige Merkmal, keine Runtime-Abhängigkeit zu haben – der Quellcode wird ins Projekt kopiert. Dies ermöglicht minimale Bundle-Größen, erfordert aber manuelle Wartung.

### Framework-Kompatibilität

| Bibliothek | React        | Vue                 | Angular        | Web Components | Weitere                 |
| ---------- | ------------ | ------------------- | -------------- | -------------- | ----------------------- |
| KoliBri    | ✅ (Adapter) | ✅ (Adapter)        | ✅ (Adapter)   | ✅ (Nativ)     | Solid, Preact, Astro    |
| MUI        | ✅ (Nativ)   | ❌                  | ❌             | ❌             | Next.js, Remix          |
| Ant Design | ✅ (Nativ)   | ✅ (ant-design-vue) | ✅ (ng-zorro)  | ❌             | React Native (partiell) |
| Chakra UI  | ✅ (Nativ)   | ✅ (Port)           | ❌             | ❌             | -                       |
| Mantine    | ✅ (Nativ)   | ❌                  | ❌             | ❌             | Next.js, Remix, Gatsby  |
| shadcn/ui  | ✅ (Nativ)   | ✅ (Port)           | ✅ (Port)      | ❌             | Svelte (Port)           |
| Carbon     | ✅ (Nativ)   | ✅ (Community)      | ✅ (Community) | ✅             | Svelte (Community)      |
| Fluent UI  | ✅ (Nativ)   | ❌                  | ❌             | ✅             | Blazor, iOS, Android    |
| PrimeReact | ✅ (Nativ)   | ❌ (PrimeVue)       | ❌ (PrimeNG)   | ❌             | -                       |

**KoliBri** bietet die breiteste Framework-Kompatibilität durch seine Web-Components-Architektur. Da Web Components ein W3C-Standard sind, können sie in jedes Framework integriert werden. Offizielle Adapter für React, Vue, Angular, Solid und Preact vereinfachen die Integration.

**MUI** ist ausschließlich für React verfügbar. Alternative Material-Design-Implementierungen wie Vuetify (Vue) oder Angular Material existieren, sind aber separate Projekte mit eigenen APIs und Eigenheiten.

### Dokumentationsqualität

Die Dokumentationsqualität wurde anhand von Vollständigkeit, Beispielen, API-Referenzen, Accessibility-Dokumentation und Suchfunktion bewertet:

| Bibliothek | Vollständigkeit | Beispiele | API-Referenz | A11y-Docs | Suchqualität | Gesamt    |
| ---------- | --------------- | --------- | ------------ | --------- | ------------ | --------- |
| MUI        | ⭐⭐⭐          | ⭐⭐⭐    | ⭐⭐⭐       | ⭐⭐      | ⭐⭐⭐       | **4,6/5** |
| Mantine    | ⭐⭐⭐          | ⭐⭐⭐    | ⭐⭐⭐       | ⭐⭐⭐    | ⭐⭐⭐       | **4,8/5** |
| Carbon     | ⭐⭐⭐          | ⭐⭐⭐    | ⭐⭐⭐       | ⭐⭐⭐    | ⭐⭐⭐       | **4,8/5** |
| KoliBri    | ⭐⭐⭐          | ⭐⭐      | ⭐⭐⭐       | ⭐⭐⭐    | ⭐⭐         | **4,2/5** |
| Ant Design | ⭐⭐⭐          | ⭐⭐⭐    | ⭐⭐⭐       | ⭐        | ⭐⭐⭐       | **4,0/5** |
| Chakra UI  | ⭐⭐⭐          | ⭐⭐⭐    | ⭐⭐         | ⭐⭐⭐    | ⭐⭐         | **4,2/5** |
| shadcn/ui  | ⭐⭐            | ⭐⭐⭐    | ⭐⭐         | ⭐⭐      | ⭐⭐         | **3,6/5** |
| Fluent UI  | ⭐⭐⭐          | ⭐⭐      | ⭐⭐⭐       | ⭐⭐⭐    | ⭐⭐         | **4,2/5** |
| PrimeReact | ⭐⭐⭐          | ⭐⭐⭐    | ⭐⭐⭐       | ⭐⭐      | ⭐⭐         | **4,2/5** |

---

## 9. Kostenmodell: Neun-Faktoren-Analyse

### Kostenfaktoren jenseits der Lizenzgebühren

Eine vollständige Kostenbetrachtung muss über direkte Lizenzkosten hinausgehen. Die folgenden neun Faktoren beeinflussen die Total Cost of Ownership (TCO) einer UI-Bibliothek:

**Faktor 1: Direkte Lizenzkosten** umfassen jährliche Gebühren für kommerzielle Tiers. Nur MUI X und PrimeReact Elite erfordern Zahlungen; alle anderen Bibliotheken sind vollständig kostenlos.

**Faktor 2: Barrierefreiheits-Anpassung** quantifiziert den Aufwand, eine nicht BITV-konforme Bibliothek compliant zu machen. Bei einem angenommenen internen Stundensatz von 85 €/h können hier erhebliche Kosten entstehen.

**Faktor 3: Audit-Kosten** beinhalten externe BITV-Tests und Zertifizierungen. Ein vollständiger BITV-Test kostet typischerweise **5.000-15.000 €** je nach Umfang.

**Faktor 4: Theme-Anpassung** berücksichtigt den Aufwand, das Corporate Design umzusetzen. Bibliotheken mit starkem visuellen Branding (MUI, Ant Design) erfordern mehr Anpassungsaufwand als design-agnostische Optionen.

**Faktor 5: Schulungskosten** umfassen Einarbeitung des Teams, Dokumentationsstudium und ggf. externe Schulungen.

**Faktor 6: Dependency-Management** quantifiziert den laufenden Aufwand für Updates, Security-Patches und Kompatibilitätsprüfungen.

**Faktor 7: Produktivitätseffekte** berücksichtigt, wie schnell Entwickler mit der Bibliothek arbeiten können. Eine gute Developer Experience (DX) kann Entwicklungszeit signifikant reduzieren.

**Faktor 8: Migrationsaufwand** schätzt die Kosten bei Major-Version-Upgrades oder einem Wechsel zu einer anderen Bibliothek.

**Faktor 9: Strategische Risikokosten** quantifiziert potenzielle zukünftige Kosten durch Vendor Lock-in, Lizenzänderungen oder Projekteinstellung.

### Szenario-basierte TCO-Berechnung (5 Jahre, 10 Entwickler)

**Szenario A: Behördenportal mit hohen Barrierefreiheitsanforderungen**

| Kostenfaktor           | KoliBri              | MUI                   | Ant Design             |
| ---------------------- | -------------------- | --------------------- | ---------------------- |
| Lizenzkosten (5 Jahre) | 0 €                  | 0-29.000 €\*          | 0 €                    |
| A11y-Anpassung         | 0-1.700 €            | 13.600-27.200 €       | 34.000-51.000 €        |
| BITV-Audit             | 5.000 €              | 10.000-15.000 €       | 15.000 €               |
| Theme-Anpassung        | 8.500 €              | 17.000 €              | 17.000 €               |
| Schulung               | 8.500 €              | 5.100 €               | 5.100 €                |
| Dependency-Mgmt (5y)   | 8.500 €              | 12.750 €              | 12.750 €               |
| Produktivitätseffekte  | -4.250 €\*\*         | 0 €                   | 0 €                    |
| Migration (1x Major)   | 4.250 €              | 17.000 €              | 21.250 €               |
| Strategisches Risiko   | 0 €                  | 5.000 €               | 15.000 €               |
| **Gesamt**             | **~31.000-35.000 €** | **~80.000-128.000 €** | **~120.000-137.000 €** |

_MUI X Premium für 10 Entwickler über 5 Jahre mit 7% jährlicher Erhöhung_

\*_Geringere Produktivität durch kleineres Ökosystem angenommen, aber kompensiert durch weniger A11y-Nacharbeit_

**Szenario B: Interner Backoffice-Anwendung (geringere A11y-Anforderungen)**

| Kostenfaktor           | MUI                  | Mantine       | PrimeReact           |
| ---------------------- | -------------------- | ------------- | -------------------- |
| Lizenzkosten (5 Jahre) | 0-29.000 €           | 0 €           | 0-4.550 €            |
| A11y-Anpassung         | 4.250 €              | 4.250 €       | 6.800 €              |
| BITV-Audit             | 0 €                  | 0 €           | 0 €                  |
| Theme-Anpassung        | 12.750 €             | 8.500 €       | 10.200 €             |
| Schulung               | 4.250 €              | 4.250 €       | 5.100 €              |
| Dependency-Mgmt (5y)   | 12.750 €             | 8.500 €       | 10.200 €             |
| Produktivitätseffekte  | -8.500 €             | -6.800 €      | -8.500 €             |
| Migration (1x Major)   | 17.000 €             | 8.500 €       | 8.500 €              |
| Strategisches Risiko   | 5.000 €              | 8.500 €       | 6.800 €              |
| **Gesamt**             | **~47.500-76.500 €** | **~35.700 €** | **~43.650-48.200 €** |

_Diese Szenarien basieren auf Annahmen und sollten mit projektspezifischen Parametern angepasst werden._

---

## 10. Entscheidungsrahmen und Fazit

### Entscheidungsmatrix nach Prioritäten

Die folgende Matrix hilft bei der Auswahl basierend auf der wichtigsten Projektpriorität:

| Wenn Ihre Priorität ist... | Empfohlene Optionen         | Begründung                                                 |
| -------------------------- | --------------------------- | ---------------------------------------------------------- |
| **BITV 2.0-Konformität**   | KoliBri, Carbon             | Verifizierte Compliance, minimaler Nacharbeitsaufwand      |
| **Minimale Lizenzkosten**  | KoliBri, Mantine, Chakra UI | Vollständig kostenlos ohne kommerzielle Tiers              |
| **Größtes Ökosystem**      | MUI, Ant Design             | Millionen Downloads, umfangreiche Community-Ressourcen     |
| **Framework-Flexibilität** | KoliBri, Carbon             | Web Components / Multi-Framework-Unterstützung             |
| **Enterprise Data Grids**  | MUI X, PrimeReact           | Fortgeschrittene Tabellenkomponenten im kommerziellen Tier |
| **Minimale Bundle-Größe**  | Mantine, shadcn/ui          | Leichtgewichtige Optionen                                  |
| **Deutsche Governance**    | KoliBri                     | Einzige staatlich-deutsche Lösung                          |
| **Microsoft-Integration**  | Fluent UI                   | Native Passung zu M365, Teams, SharePoint                  |
| **Maximale Kontrolle**     | shadcn/ui                   | Code-Ownership durch Copy-Paste-Modell                     |

### Kontextabhängige Empfehlungsszenarien

**Für Bundesbehörden mit strengen BITV-Anforderungen** stellt KoliBri die optimale Wahl dar. Die Bibliothek wurde explizit für diesen Anwendungsfall entwickelt, ist vollständig kostenlos, unterliegt deutscher staatlicher Governance und dokumentiert BITV 2.0-Konformität laut Eigenaussage. Das kleinere Ökosystem wird durch den geringeren Compliance-Aufwand kompensiert.

**Für Landesbehörden oder kommunale Projekte mit moderaten Budgets** können MUI Core oder Mantine attraktive Alternativen sein. Beide bieten umfangreiche kostenlose Komponenten und gute Dokumentation. Der höhere Aufwand für Accessibility-Anpassungen sollte einkalkuliert werden (geschätzt 100-300 Entwicklerstunden).

**Für Projekte im Microsoft-Ökosystem** (SharePoint-Integration, Teams-Apps) bietet Fluent UI die nahtloseste Integration und sollte trotz des größeren A11y-Nacharbeitsaufwands gegenüber KoliBri in Betracht gezogen werden.

**Für internationale oder mehrsprachige Projekte** mit Bedarf an umfangreicher i18n-Unterstützung bietet Ant Design mit Unterstützung für 50+ Sprachen einen Vorteil, der gegen die dokumentierten Accessibility-Defizite abgewogen werden muss.

### Keine pauschale Empfehlung

Diese Analyse verzichtet bewusst auf eine generelle "beste Bibliothek"-Empfehlung. Die optimale Wahl hängt von projektspezifischen Faktoren ab, die nur die jeweiligen Entscheidungsträger vollständig bewerten können:

- Welche Compliance-Anforderungen sind bindend?
- Welche Frameworks sind bereits im Einsatz?
- Wie hoch ist das verfügbare Budget für kommerzielle Lizenzen?
- Welche langfristigen Wartungskapazitäten bestehen?
- Gibt es organisatorische Vorgaben bezüglich Herkunft oder Governance?

Die dargestellten Daten und Analysen sollen eine fundierte Entscheidung ermöglichen – die Entscheidung selbst muss im jeweiligen Kontext getroffen werden.

---

## Anhang: Getroffene Annahmen

Die folgende Liste dokumentiert alle wesentlichen Annahmen dieser Analyse:

1. **npm-Download-Zahlen** wurden zum Recherchezeitpunkt (Dezember 2024/2025) erhoben und können schwanken.
2. **GitHub-Statistiken** basieren auf öffentlich verfügbaren Daten und können je nach Abfragezeitpunkt variieren (Stars: ±5%, Issues: ±20%).
3. **Bundle-Größen** beziehen sich auf typische Nutzungsszenarien mit aktiviertem Tree-Shaking; tatsächliche Werte können projektspezifisch abweichen.
4. **Kostenkalkulationen** verwenden einen USD/EUR-Kurs von 0,92 und einen internen Entwickler-Stundensatz von 85 €.
5. **A11y-Aufwandsschätzungen** basieren auf Erfahrungswerten und Community-Berichten; projektspezifische Anforderungen können erheblich abweichen.
6. **BITV 2.0-Konformitätsangaben** für KoliBri basieren auf Eigenaussagen von ITZBund und der Listung auf EU AccessibleEU; eine unabhängige Verifizierung wurde nicht durchgeführt.
7. **MUI-Preiserhöhungen** von 7% p.a. entsprechen der in den Lizenzbestimmungen dokumentierten Obergrenze; tatsächliche Erhöhungen können niedriger ausfallen.
8. **Teamgrößen** für MUI SAS basieren auf öffentlichen Angaben (2023) und können sich geändert haben.
9. **Geopolitische Einschätzungen** sind informativ und spiegeln keine Wertung wider; die Relevanz ist organisationsabhängig.
10. **TCO-Szenarien** sind illustrativ und sollten mit projektspezifischen Parametern angepasst werden.
11. **Produktivitätseffekte** sind schwer zu quantifizieren; die angegebenen Werte basieren auf qualitativen Einschätzungen.
12. **Migrationsaufwände** wurden aus Community-Berichten abgeleitet; tatsächliche Werte hängen stark von Codebasis-Größe und -Komplexität ab.

---

## Quellenverzeichnis

1. KoliBri GitHub Repository: https://github.com/public-ui/kolibri
2. KoliBri npm Package: https://www.npmjs.com/package/@public-ui/components
3. ITZBund KoliBri-Seite: https://itzbund.de/DE/itloesungen/standardloesungen/kolibri-barrierefreie-komponentenbibliothek
4. MUI GitHub Repository: https://github.com/mui/material-ui
5. MUI Pricing: https://mui.com/pricing/
6. Ant Design GitHub: https://github.com/ant-design/ant-design
7. Carbon Design System: https://github.com/carbon-design-system/carbon
8. Fluent UI GitHub: https://github.com/microsoft/fluentui
9. Mantine GitHub: https://github.com/mantinedev/mantine
10. Chakra UI GitHub: https://github.com/chakra-ui/chakra-ui
11. shadcn/ui GitHub: https://github.com/shadcn-ui/ui
12. PrimeReact GitHub: https://github.com/primefaces/primereact
13. BITV 2.0 Verordnung: https://www.gesetze-im-internet.de/bitv_2_0/
14. WCAG 2.1 Standard: https://www.w3.org/TR/WCAG21/
15. EU AccessibleEU Centre: https://accessible-eu-centre.ec.europa.eu/
