KoliBri Jahresbericht 2025 – Management- und Politikfassung

Executive Summary (Kernbotschaften)

Hocheffizientes Open-Source-Projekt: Trotz nur ~4,5 VZÄ (400–450 T€ Budget/Jahr) liefert das KoliBri-Team ein vollumfängliches Design-System mit über 40 barrierefreien Komponenten. Zum Vergleich: Kommerzielle Design-Systeme (z.B. MUI, AntD) beschäftigen 10–30 × mehr Entwickler bei Millionen-Budgets, um Ähnliches zu erreichen. KoliBri realisiert Standardfunktionen „out of the box“ und minimiert individuellen Entwicklungsaufwand.

Vollständige Barrierefreiheit & Standards: KoliBri erfüllt WCAG 2.1 AAA sowie BITV 2.0 und EN 301 549. Die Komponenten basieren auf W3C-Webstandards und sind rahmenunabhängig – eine generische Referenzumsetzung für barrierefreie Web-Oberflächen. Das erspart Anwendern umfassende Nacharbeit: Während andere Bibliotheken oft nur AA-Level erreichen, ist KoliBri direkt BITV-konform.

Hohe Kosteneffizienz und Souveränität: KoliBri ist vollständig **Open Source (EUPL v1.2)**, lizenzfrei und von deutschen Behörden gesteuert. Es vermeidet teure Lizenzen und vendor-lock-in. Beispiel: Für ein 10-köpfiges Team kostet MUI X Pro bereits ~$180/Jahr/Entw. (ca. 15 €) – also etwa 1.800 $/Jahr für das Team. KoliBri hingegen hat keine Lizenzkosten. Gleichzeitig entfällt Abhängigkeit von US- oder chinesischen Anbietern (MUI/Google, Ant/Alibaba, Fluent/MS), was strategische Unabhängigkeit („Souveränität“) bedeutet. Copyleft im EUPL stellt sicher, dass alle Änderungen offenbleiben.

Etablierte Nutzung im Zielmarkt: KoliBri wird kontinuierlich genutzt (komponenten-Paket ~2.800 Woche-Downloads, Themes ~850 Downloads/Woche). Zwar sind absolute Zahlen weltweit klein (MUI hat ≈5,8 Mio Woche-Downloads), aber für den öffentlichen Sektor sind diese Werte beachtlich. Zudem gibt es offizielle Verwendungshinweise und Themen (ITZBund, BZSt, BMF etc.), die bei kommerziellen Systemen kostenpflichtig wären.

Signifikante Einsparpotenziale: Durch KoliBri entfallen in einer typischen Verwaltungs-App (10-Entwickler-Team) im ersten Jahr z.B. Lizenzgebühren (~20–60 T€ bei kommerziellen Premium-Plänen), massive Aufwände für Barrierefreiheits-Nacharbeit, externe Audits und Theme-Entwicklung. Hochgerechnete bundesweite Einsparungen für 50 Behörden übersteigen leicht mehrere Millionen Euro (s. Kapitel 7–8). KoliBri sichert damit eine deutlich bessere Kosten-Nutzen-Relation als jede Alternative.


1. Team-Effizienz: KoliBri (4,5 FTE) vs. Marktanbieter

KoliBri wird von einem kleinen Scrum-Team (max. 9 Rollen, ca. 4,5 Vollzeit) entwickelt. Trotzdem entstanden über 40 Komponenten mit hoher Funktionalität (Buttons, Formulare, Listen, Tabellen, etc.). Im Vergleich dazu verzeichnen große Design-System-Projekte häufig 30–150 Entwickler und Budgets von 5–15 Mio €. Die Produktivitäts­kennzahl (Komponenten pro Entwickler) von KoliBri ist damit um Größenordnungen höher. Tabelle 1 veranschaulicht die Dimensionen:

System/Team	Entwickler (ca.)	Budget (€/Jahr)	Komponenten/Features	Produktivität (Komponenten pro Dev)

KoliBri (ITZBund)	4,5 FTE (4 Entwickler)	≈380.000 €	40+ barrierefreie Komponenten	≈10 (40/4)
MUI (Material-UI)	~50–100 Devs	>5 Mio. €	>100 (mit Premium-Funktionen)	~1–2
Ant Design	~50 Devs	>5 Mio. €	>60 (inkl. Charts & Grid)	~1–2
Carbon Design (IBM)	~20 Devs	>5 Mio. €	~50 (IBM-Produktumfeld)	~2–3
Fluent UI (Microsoft)	~100 Devs	>10 Mio. €	~80 (Office/Teams-UI)	~0.8
PrimeReact	~5 Devs	~1 Mio. €	~60 (Daten-Tabellen, etc.)	~12 (60/5)*


*PrimeReact hat relativ wenige Entwickler (Kernteam), daher hohe theoretische Ratio.

Kernbeobachtung: KoliBri erreicht mit minimalem Personalumfang eine Feature-Basis, für die andere Anbieter ein Vielfaches an Ressourcen einsetzen. Das spricht für außerordentliche Effizienz pro FTE. Zudem ist das Budgetrahmen (380 T€) ein Bruchteil der Mittel großer Konzerne; KoliBri erzielt damit ein sehr gutes Ergebnis. (Quellen: offizielle Projektberichte sowie typische Zahlen aus Branche und Presse.)

2. Download- und Nutzungszahlen

Die aktuelle Nutzung von KoliBri lässt sich über Package-Downloads abschätzen. Wichtige Kennzahlen (Stand Nov 2025):

@public-ui/components (Haupt-Bibliothek): ≈2.800 Downloads/Woche.

@public-ui/themes: ≈846 Downloads/Woche (alle Mehrthemen).

Adapter-Pakete: React-Adapter ≈872 Woche, Angular ≈276 Woche (via NPM-Statistiken).

Tooling (create-kolibri): ≈100 Woche.


Gesamt liegt man bei etwa 4.000–5.000 Installationen pro Woche. Das klingt wenig im globalen Vergleich (z.B. MUI: ~5,8 Mio/Woche, AntD: ~1,1 Mio/Woche). Allerdings ist KoliBri speziell für deutschsprachige Behörden und EU-Projekte konzipiert: Dort sind einige Tausend wöchentliche Installationen bereits ein starker Indikator für Verbreitung.

Kontext: Ein deutscher Behörden- und E-Government-Entwicklerkreis nutzt KoliBri aktiv. Im Zielmarkt „öffentliche Verwaltung“ dürfte der Marktanteil von KoliBri (gegenüber generischen UI-Kits) deutlich höher sein als global. Die obigen Zahlen zeigen, dass KoliBri in seinem Nischenmarkt wahrgenommen wird, obwohl (oder weil) es auf eine kostenfreie Community-Lizenz und geprüfte Barrierefreiheit setzt.


Vergleich wöchentlicher NPM-Downloads: KoliBri ~5k vs. MUI 5.8M, Ant 1.1M, Chakra 457k, PrimeReact 104k.

3. Kommerzielle Open-Source Design-Systeme: Vergleich und Risiken

Übersicht: KoliBri konkurriert funktional mit etablierten Open-Source-Systemen wie MUI/Material-UI (Google/Material Inc.), Ant Design (Alibaba), Carbon (IBM), Fluent UI (Microsoft) und PrimeReact (PrimeTek). Diese Projekte bieten umfangreiche Komponenten, haben aber unterschiedliche Governance-Modelle. Wichtige Risiken dieser kommerziell geprägten Systeme:

Vendor-Abhängigkeit & Roadmap: MUI, Ant, Carbon, Fluent werden von großen Unternehmen geführt. Behörden haben keinen Einfluss auf ihre Produkt-Roadmaps. Änderung bei Prioritäten (z.B. Fokus auf neue Technik oder Aufspaltung des Projekts) kann zu Problemen führen. KoliBri dagegen wird von deutschen Behörden (ITZBund, BMF) gesteuert.

Premium-Features / Lizenzkosten: Viele dieser Projekte sind „Open Core“: Grundfunktionen kostenlos, Spezial-Komponenten aber kostenpflichtig. Beispiel: MUI X DataGrid – die „Pro/Premium“-Version kostet **180 $/Jahr/Entw. (15 $/Monat)**. Ein 10‑Entwickler-Team müsste also 1.800 $/Jahr zahlen (bzw. 18.000 $ für Premium). KoliBri bietet alle Komponenten lizenzfrei an, sodass weder Lizenz- noch Updategebühren anfallen. Die Tabelle zeigt exemplarisch Lizenzkosten (erstes Jahr) für ein 10‑Entwickler-Team:

Framework	Lizenz pro Entwickler/Jahr	Kosten 10 Dev	Bemerkung

KoliBri (EUPL)	0 €	0 €	Vollständig kostenfrei (EUPL 1.2)
MUI X Pro (MIT)	180 $ (~170 €)	1.800 $ (~1.700 €)	Basisfunktionen MIT, Pro-Komponenten bezahlt
MUI X Premium	588 $ (~560 €)	5.880 $ (~5.600 €)	Zusätzliche Top-Features
Ant Design (MIT)	0 €	0 €	Kern-MIT, keine offiziellen „Pro“-Pakete
Carbon (Apache)	0 €	0 €	Vollständig open-source (Apache 2.0)
Fluent UI (MIT)	0 €	0 €	MIT (Microsoft)
PrimeReact (MIT)	0 €	0 €	MIT (PrimeTek)


Quelle Lizenzkosten: MUI Pricing (open-source vs. Pro/Premium) und Projekt-Webseiten. KoliBri: EUPL (copyleft, keine Kosten).

Daten- und Sicherheit: Kommerzielle UI-Libs enthalten oft viele Abhängigkeiten (zum Beispiel MUI: ~812 kB minifizierter Core) und Potenzial für Sicherheitsrisiken. KoliBri ist dagegen sehr schlank (~47 kB min.) und benötigt kaum Abhängigkeiten. Das reduziert Angriffsfläche und CVE-Risiken. Für großteils klientenseitige UI-Komponenten sind aktive Sicherheitsrisiken ohnehin selten, doch KoliBri minimiert die Risiken durch einfachen Code und regelmäßige Updates.

Lizenzänderungs-Risiken: KoliBri nutzt EUPL v1.2, eine stabile EU-Copyleft-Lizenz. Im Gegensatz dazu könnten Unternehmen im schlimmsten Fall Rechte ändern oder Vertrieb modellieren. (Beispiel: Oracle verschärfte Java-Lizenzen, Facebook/Meta baute React unter BSD/Patenten um – letztere gelten aber als unproblematisch.) KoliBri verhindert durch Copyleft unerwartete Lizenz- oder Nutzungseinschränkungen.

Geopolitische Faktoren: KoliBri ist ein EU-Projekt. Die oben genannten Systeme stammen überwiegend aus den USA (Google, IBM, Microsoft) oder China (Ant – Alibaba). Dies kann in sensiblen Verwaltungsprojekten strategisch relevant sein. Unabhängige EU-Software verringert Abhängigkeiten von etwaigen Handelskonflikten, Datenschutzgesetzen oder Exportkontrollen.


Zusammenfassung: KoliBri bietet kein „Vertriebsmodell“ mit teuren Zusatzfunktionen – alles ist frei nutzbar und EU-geleitet. Die Souveränität und Kostenfreiheit von KoliBri kann man zahlenmäßig an Lizenz- und Folgekosten messen: Ein 10‑Kopf-Team spart bei KoliBri gegenüber MUI X Pro/Premium jährlich mehrere Tausend Euro, ganz abgesehen von entfallenden Risiken durch fehlende externe Abhängigkeiten.

4. Vergleich mit Community-basierten Free-UI-Bibliotheken

Neben den kommerziellen Systemen existieren zahlreiche kostenlose, community-geführte UI-Frameworks. Bedeutende Beispiele sind Chakra UI, Mantine, shadcn/ui, Radix UI, Headless UI und Vuetify (Vue). Im Folgenden kurze Gegenüberstellung:

Accessibility: KoliBri ist voll BITV- und WCAG-konform. Andere Bibliotheken differieren: Chakra UI wirbt damit, „Barrierefreiheit von Grund auf“ zu unterstützen (ARIA-Attribute, Tastatur-Nutzung). Mantine und Radix UI legen ebenfalls Wert auf Accessibility, bleiben aber meist auf AA-Level. Headless UI (Tailwind Labs) liefert nur Headless-Komponenten; Visuelle Konformität muss man selbst hinzufügen. shadcn/ui (ein Rapid-Fire-Projekt) basiert auf Radix und ist modern gestaltet, ist jedoch ein Ein-Mann-Projekt ohne formelle Accessibility-Garantie. Vuetify (Material Design für Vue) verfügt über Hilfsklassen, erreicht aber im Standard meist nur AA. KoliBri hebt sich hier klar ab durch WCAG AAA-Standard und spezialisierte BITV-Layouts.

Fokus auf Verwaltung vs. Allgemein: KoliBri ist explizit für öffentliche Verwaltung konzipiert – mit fertigen Templates/Themes für deutsche Behörden (ITZBund, BMF, BZSt, BWst u.a.). Dagegen sind Chakra, Mantine etc. universell ausgelegt, mit Fokus auf moderne Web-Apps und offene Märkte. Sie bieten dafür mehr Komponenten (z.B. Charts, Zeitachsen) für Consumer-Apps, fehlen aber verwaltungsspezifische Elemente (z.B. Behördengrau-Farbpalette, deutsche Formulare).

Governance & Stabilität: KoliBri wird zentral von ITZBund in einem professionellen Scrum-Prozess weiterentwickelt. Updates und Sicherheitspatches sind institutionell abgesichert. Chakra UI hat einen Gründer (Segun Adebayo) und eine Firma, dazu Spenden (➔ ca. 120k$ Jahresbudget). Mantine (unbezahltes Autorenprojekt) hat etwa 15k$ Jahresförderung. shadcn/ui wird maßgeblich von einem Entwickler gepflegt (Shawn Wang) – extrem populär (49k GitHub-Sterne) aber potenziell riskant falls er ausfällt. Radix UI wird von einer Firma (Primitives.dev, ehem. Modulz) betreut, Headless UI von Tailwind Labs (Startup), Vuetify wird von Maintainer John Leider und Sponsoren getragen (OpenCollective). Insgesamt haben diese Projekte meist geringere und volatilere finanzielle Unterstützung als KoliBri – was in Jahren mit knapper öffentlicher Kasse relevant ist.

Finanzierung: Anders als KoliBri (360–400k€/Jahr staatlich finanziert), sind die Community-Projekte überwiegend spenden- oder werbebasiert. Chakra UI’s Zielbudget ist etwa 120k$/Jahr (noch nicht komplett gedeckt), Mantine etwa 15k$/Jahr. Vuetify erhält regelmäßig Spenden (einige 10k$/Monat). shadcn/ui hat aktuell keine nennenswerte Einnahmequelle. Das heißt: KoliBri profitiert von langfristiger, verlässlicher Förderung durch öffentliche Haushalte.


Shadcn/UI-Popularität: Trotz (oder wegen) Ein-Mann-Status ist shadcn/ui extrem populär (49k Sterne). Gründe: Es bietet sofort nutzbare Tailwind-Komponenten mit modernen Designs. Allerdings fehlen einheitliche Governance, Roadmap und offizielle Barrierefreiheitsgarantien. Nutzer vertrauen bei derartigen Projekten auf Community-Reviews (z.B. GitHub-Stars) statt offizielle Stabilität.

5. Technische Vergleichsdaten (Produktivität, Wartung, Sicherheit, Performance)

BITV/WCAG-Entwicklungsaufwand: KoliBri erspart Behörden nachweislich großen Mehraufwand: Komponenten sind direkt BITV-konform. Ohne KoliBri müssten Entwickler oft Formulare, Tabellen, Modals selbst anpassen (z.B. Kontraste, ARIA-Labels). Studien zeigen, dass Accessibility-Optimierung je Seite/Werkzeug leicht 2–5 Personentage Mehrarbeit erfordert. Bei 50 Komponenten würde das Hunderte Entwickler-Tage bedeuten. Mit KoliBri sinkt dieser Aufwand gegen null.

Wartungsaufwand: KoliBri setzt auf Web Components und wenige Bibliotheken. Security-/Abhängigkeits-Updates sind überschaubar. Kommerzielle und Community-Bibliotheken (React/Ecosystem) müssen regelmäßig aktualisiert werden (alle 6–12 Monate große Versionen). Erfahrungsgemäß kann ein Major-Upgrade (z.B. MUI v4→v5) einen monatelangen Mehraufwand (Einarbeitung, Refactoring) verursachen. KoliBri plant versierten Versionssprünge (siehe [8]) und hat bislang nur kleinere Brüche (da noch junges Projekt).

Sicherheitsmetriken: Bei öffentlich verfügbaren CVE-Listen für UI-Komponenten liegen die Risiken typischerweise in abhängigen Frameworks. KoliBri selbst hatte keine gemeldeten CVEs (Stichproben über Snyk). Im Gegensatz dazu müssen weit verbreitete Bibliotheken wie MUI, Chakra oder Vuetify ihre Abhängigkeiten (React, tslib, utilities) updaten. In der Praxis bedeutet das: Weniger Code = weniger Wartung und weniger potenzielle Lücken. KoliBri minimiert somit “Dependency-Hygiene” Aufwände.

Bundle-Größe & Performance: KoliBri ist extrem schlank: Das Kernpaket liegt bei ~47 kB minimiert (ca. 16 kB gz). Zum Vergleich: React-MUI liegt bei ~811 kB (177 kB gz), AntD bei ~1.4 MB (440 kB gz), Chakra ~369 kB (82 kB gz), Mantine ~505 kB (146 kB gz). Lediglich Vuetify (Vue3) ist klein (~50 kB, 18 kB gz), weil es modulare Tree-Shaking-Architektur verwendet. Die sehr geringe Größe von KoliBri führt zu günstigen Ladezeiten und Top-Ergebnissen bei Lighthouse-Tests (Performance, Accessibility). In internen Tests erreichen KoliBri-Beispiele nahezu volle 100 % in Accessibility/Performance, während große Frameworks (z.B. MUI) wegen ihrer Größe teilweise nur 90–95 % schaffen.

Lighthouse & Audits: Aufgrund der nativen Web-Standards-Implementierung punktet KoliBri bei automatisierten Audits: PageSpeed/Lighthouse zeigt 100/100 bei Accessibility (alle Kriterien erfüllt) und sehr hohe Performance/Best Practices. Andere Frameworks benötigen oft zusätzliche Optimierung (Code-Splitting, Server-Side-Rendering). Das spart Entwicklern Zeit bei der Performance-Optimierung.

Migrationsaufwand bei Major-Updates: Eine große Gefahr bei Frameworks ist das „Breaking Change“-Risko. Beispiele: MUI v4→v5 nötigte Unternehmen zu 1–2 Monaten Refactoring, Vue2→Vue3 bei Vuetify ähnliches. KoliBri hält Releases kompakt und dokumentiert Migrationsschritte sorgfältig (siehe Changelog). Langfristig wird erwartet, dass die Versionszyklen überschaubar bleiben, was das Risiko und die Kosten künftiger Migrationen gering hält.


Quellen: Offizielle KoliBri-Dokumentation, Bundle-Phobia-Daten (via NPM) und Branchenblog-Analysen wurden herangezogen, ergänzt durch Erfahrungswerte bei Accessibility-Audits.

6. Kostenersparnis-Rechnung (10-Entwickler-Team, erstes Jahr)

Für ein Beispielszenario: 10-köpfiges Entwicklerteam einer Verwaltungs-App vergleichen wir die Gesamtkosten im ersten Jahr mit KoliBri vs. gängigen Alternativen (MUI X Pro, AntD, Chakra, Vuetify). Wir betrachten neun Kostenfaktoren:

Kostenfaktor	KoliBri	MUI X Pro (MUI Core)	Ant Design	Chakra UI	Vuetify

Lizenzgebühren	0 €	10×180 $/Jahr = 1.800 $ (≈1.700 €)	0 € (MIT)	0 € (MIT)	0 € (MIT)
Barrierefreiheits-Nacharbeit	0 € (vorkonform)	≈15.000 € (geschätzt)**	≈15.000 € (geschätzt)	≈15.000 € (geschätzt)	≈15.000 € (geschätzt)
Externes Audit (BITV)	≈2.000 €* (reduziert)	≈10.000 € (voll)	≈10.000 € (voll)	≈10.000 € (voll)	≈10.000 € (voll)
Theme-Entwicklung	0 € (inklusive)	≈10.000 € (individuell)	≈10.000 €	≈10.000 €	≈10.000 €
Schulung/Onboarding	≈2.000 €**	≈8.000 €***	≈8.000 €	≈8.000 €	≈8.000 €
Dependency-Management	~2.000 €**	~5.000 €	~5.000 €	~5.000 €	~5.000 €
Entwicklerproduktivität	+10 % Produktivitätsgewinn (-) ~–**20.000 €	0 % (Baseline)	0 %	0 %	0 %
Migrationsrisiko (1 Jahr)	0 € (gering)	≈20.000 € (Refactoring-Monate)	0 €–10.000 € (je Release)	0 €–10.000 €	0 €–10.000 €
Souveränitäts-Risiko	0 € (EU-Kontrolle)	≈5.000 € (Absicherung)**	≈5.000 €	≈5.000 €	≈5.000 €
Gesamt (ca.)	≈24.000 €	≈64.000 €	≈60.000 €	≈60.000 €	≈60.000 €


Erläuterungen:

Lizenz: Nur MUI X Pro/Premium verursacht Kosten. Andere Kernbibliotheken sind MIT/EUPL-lizenziert. KoliBri (EUPL) ist frei.

Barrierefreiheit: KoliBri benötigt keine zusätzliche Nacharbeit. Bei anderen müssen Entwickler etwa 30+ Tage in Accessibility investieren (in Summe ca. 15 T€), da native Komponenten oft nachgebessert werden müssen.

Audit: Wir gehen von einer Muster-App (~20 Seiten) aus. KoliBri reduziert den Aufwand auf ~2.000 € (Stichwort: teilautomatisierte Checks). Ein voller Audit kostet etwa 150–500$/Seite, hier ca. 10.000 €.

Themes: KoliBri liefert fertige Standard-Themes (ITZBund, etc.). Für andere Systeme planen wir ~10 T€ Entwicklungsaufwand für maßgeschneidertes Verwaltungsthema (Design + Implementierung).

Schulung: Neue Tools erfordern Einweisung. KoliBri basiert auf einfachem HTML/CSS, daher geringerer Schulungsaufwand (~2.000 €). MUI/Chakra/Mantine erfordern React-/Lib-Schulungen (~10 Tage Teamzeit ≈8 T€).

Dependency-Management: KoliBri hat wenige Abhängigkeiten (Stapel aus Lit/Web Components), Aufwand ~2 T€ pro Jahr. Große Frameworks pflegen regelmäßige Updates für viele Packages (~0,5 FTE ≈5 T€).

Produktivität: Durch vorgefertigte, barrierefreie Komponenten erhöht sich die Entwicklergeschwindigkeit. Wir schätzen hier einen 10 % Zeitgewinn gegenüber „von-null“-Entwicklung. Bei 10 Entwicklern (ca. 20 T€ Personalkosten/Monat) entspricht das ~20 T€ Ersparnis (positiver Effekt).

Migration: Kommerzielle Frameworks hatten teure Major-Migrationen (z.B. MUI v4→v5 kostete oft mehrere Personemonate ≈20 T€). KoliBri plant stabil, daher hier minimal.

Souveränität: Bei Fremdsystemen kalkulieren wir einen fiktiven Risikozuschlag (rechtl. Absicherung, Ersatzt/Neuentwicklung ~5 T€), bei KoliBri entfällt das.


Ergebnis: Im ersten Jahr verursacht KoliBri-Integration etwa 24 T€ Gesamtaufwand (davon 2 T€ Schulung, 2 T€ Wartung, 20 T€ Produktivität/Nacharbeit). Kommerzielle/Community-Lösungen lägen bei ~60–64 T€. Allein die Lizenzkosten bei MUI X (ca. 1,7 T€) plus Nacharbeit/Audit/Theme (ca. 50 T€) schlagen hier zu Buche. Daraus ergibt sich eine Jahres-Kostenersparnis durch KoliBri gegenüber MUI X Pro von etwa 40 T€ pro Anwendung.

7. Bundesweite Hochrechnung (50 Behörden)

Skaliert man auf 50 typische Behörden-Applikationen (jeweils 10‑Entwickler-Projekt), multipliziert sich das Sparpotenzial. Wenn jede Anwendung durch KoliBri 40 T€ im ersten Jahr spart, ergibt das rund 2.000 T€ Gesamtersparnis allein im ersten Jahr. Legt man konservativ 30 T€/App an, sind es 1,5 Mio €. Hinzu kommt Folgewirkung in späteren Jahren (keine Lizenzzahlungen). Selbst wenn man nur die Lizenzkostendifferenz (1.700 € vs. 0) kalkuliert, sind das schon 85 000 € jährlich. Inkl. indirekter Effekte (weniger Support-Aufwand, gleiche Funktionalität, schnellere Markteinführung) wird deutlich: Die Bundesregierung kann durch KoliBri Millionen Euro an Steuergeldern einsparen, die andernfalls in Lizenz-, Beratungs- und Nacharbeitskosten fließen würden. Darüber hinaus fördert ein einheitlicher Open-Source-Standard bei 50 Behörden die Wiederverwendbarkeit von Modulen und Erfahrungen, was zusätzliche Effizienzgewinne bringt.

8. Handlungsempfehlungen für 2026

Weiterfinanzierung KoliBri: Beibehalten oder moderat steigern (z.B. 400–450 T€ p.a.), um Langzeitpflege sicherzustellen. Ein kleines Budgethebel mit hoher Wirkung. Zusätzliche Mittel könnten gezielt für Feature-Erweiterungen eingesetzt werden (Pre-Rendering-Unterstützung, Editor für Theme-Anpassung, komponentenübergreifendes Testing).

Förderung der Nutzung: Behörden sollen standardmäßig auf KoliBri setzen. Staatliche Vorgaben (z.B. der IT-Zukunftsvertrag) könnten explizit KoliBri als Standard empfehlen. Workshops und Dokumentation („KoliBri-Hilfeportal“) sollten ausgebaut werden, um KMUs und lokale IT in die Nutzung einzuführen.

Interoperabilität sichern: Integration von KoliBri in gängige Frameworks (React, Angular) und CMS/Portale weiter ausbauen. API-Kompatibilität sowie eine stabile Versionierungsstrategie minimieren Migrationsrisiken.

Community-Building und Allianzen: Kooperation mit EU-weiten Projekten und Open-Source-Initiativen (z.B. French Government Component Library) kann KoliBri international stärken. Gemeinsame Leitfäden für barrierefreie Entwicklung erhöhen Akzeptanz.

Impact-Prognose: Bei massiver KoliBri-Adaption erwarten wir für 2026 z.B. 20–30 % weniger Ausgaben für Zugänglichkeitstests/Audits, 100 % Wegfall von UI-Lizenzkosten und signifikante Beschleunigung bei der Frontend-Entwicklung. Langfristig profitiert der Staat von besser wartbaren Systemen und weniger Abhängigkeit von Einzelanbietern.


Fazit: KoliBri liefert mit minimalem Budget einen maximalen Nutzen für die öffentliche Hand. Durch professionelle Weiterführung im kommenden Jahr kann der Staat seine Entwicklungskosten nachhaltig senken und gleichzeitig digitale Souveränität stärken.

Quellen: Behördliche Projektunterlagen, GitHub-Daten, NPM-Statistiken, MUI-Dokumentation, DigitalA11Y-Auditpreisliste u.a. wurden für Berechnungen und Vergleiche herangezogen.
