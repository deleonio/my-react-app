**Titel:** Feedback zum Deutschland-Stack (aus RegMo-Perspektive)
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/401
**Typ:** issue
**Status:** Offen
**Erstellt:** 28. November 2025 um 07:51
**Aktualisiert:** 28. November 2025 um 07:51
**Autor:** Tobias Schäfer (@OC000112044870)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 0
**Likes:** 0
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

# Allgemein

### Positive Aspekte

1. **Iterative Entwicklung und Beteiligung**: Der Deutschland-Stack wird nicht als fertiges Produkt präsentiert, sondern im offenen, iterativen Verfahren mit einbezogenem Feedback (Workshops, öffentliche Kommentierungsphasen) entwickelt. Das fördert Akzeptanz und Qualität.
2. **Verknüpfung von Technologie, Organisation und Strategie**: Es geht nicht nur um reine technische Standards – auch organisatorische und strategische Rahmenbedingungen werden aktiv eingebunden. Damit kann ein wertvolles „Gesamtbild“ entstehen.
3. **Fokus auf Interoperabilität, digitale Souveränität und europäische Anschlussfähigkeit**: Diese Leitprinzipien sind zentral definiert. Damit kann gewährleistet werden, dass die Lösungen nicht national isolierend sind, sondern sich in EU-Zusammenhänge einfügen.
4. **Klare Struktur mit Schichtenmodell, Tech-Stack-Landkarte und Kriterien**: Die Inhalte sind organisiert in Schichten, mit einer Technologie-Landkarte, Bewertungs- bzw. Reifegrad-Kriterien. Dadurch kann Transparenz darüber entstehen, wie Entscheidungen getroffen und Technologien bewertet werden.

### Unklarheiten

1. **Verantwortlichkeiten und Pflege**
   * Wer trägt finale Verantwortung für einzelne Standards bzw. Technologien nach der Definition durch den Stack? (Ministerium, Länder, Kommunen, oder föderale Gremien?)
   * Wie laufen Entscheidungsprozesse ab, wenn es um Änderungen an den Kriterien oder die Einführung neuer Technologien geht?
   * Wie werden Standards, Kriterien etc. gepflegt, weiterentwickelt und aktualisiert, wenn Technologie sich wandelt (z. B. KI, neue Sicherheitsrisiken)?
   * Welchen Governance-Prozess gibt es dafür? Wer ist dafür zuständig?
2. **Verbindlichkeit der Standards und Technologien**
   * In welchem Umfang sind die definierten Standards und Technologien verpflichtend?
   * Gibt es Anreizsysteme zur Anwendung oder Sanktionen, wenn Standards und Technologien nicht angewendet werden?
3. **Zeitplan und Meilensteine**
   * Der Zeitraum bis 2028 ist benannt; fehlen aber spezifische Meilensteine, Statusberichte oder Zwischenziele.
   * Wie wird überwacht, ob die geplanten Angebote und Anwendungen tatsächlich fristgerecht realisiert werden?
4. **Überführung in konkrete Angebote**
   * Was genau sind diese Angebote für Bund, Länder, Kommunen? In technischer, organisatorischer oder Dienstleistungsform?
5. **Föderale Heterogenität**
   * Deutschland ist föderal stark divers in Infrastruktur, Ressourcen und Standards. Wie wird sichergestellt, dass kleine Kommunen ebenso mit den Anforderungen mithalten können?
   * Gibt es Unterstützungsangebote, Fördermittel, technische Beratungsstrukturen?
6. **Kompatibilität vorhandener Legacy Systeme**
   * Wie wird der Übergang von bestehenden Systemen gestaltet? Gibt es Interoperabilitäts-Adapterkonzepte, Migrationsstrategien, Datenmigration und Synchronisation?
   * Wie wird vermieden, dass Doppelstrukturen entstehen, wenn Teilsysteme nicht rechtzeitig angepasst werden?

### Empfehlungen

* **Dokumentation mit konkreten, verbindlichen Vorgaben für Schlüsselbereiche** (z. B. Sicherheit, IAM, Schnittstellen), inklusive Beispielimplementierungen.
* **Klare Zuständigkeitsregelungen & Governance-Struktur**: Wer kann oder muss bei Streitfällen über Standards entscheiden? Wie werden Änderungen initiiert und beschlossen?

# Registermodernisierung / NOOTS

### Unklare Verknüpfung zwischen D-Stack und RegMo / NOOTS

* Es existiert aktuell keine sichtbare Referenz auf das NOOTS oder das Once-Only-Prinzip. Wie sollen diese Aspekte zukünftig im D-Stack Berücksichtigung finden?

### Unklare Verknüpfung zwischen D-Stack und GovStack

* Werden Angebote wie der GovStack (https://govstack.global/) zukünftig im D-Stack berücksichtigt? Falls ja, inwiefern?

### Unklare Rolle von IsyFact / RegisterFactory im D-Stack

* **Umgang mit bestehenden Technologie-Standards wie IF/RF** (https://isyfact.github.io/isyfact-standards-doku/dev/einstieg/einstieg.html)
  * Die Register Factory ist ein Standard für den Bau und Betrieb von IT-Systemen zur Führung von elektronischen Registern. Sie bündelt bestehendes fachliches und technisches Know-how um Registeranwendungen effizienter entwickeln und betreiben zu können.
  * Das BVA bietet die Register Factory als Einer-für-Alle-System auch anderen Behörden zur Nutzung und Weiterentwicklung an. Sie basiert auf den IsyFact Standards, die als Open Source Lösung vom BVA öffentlich bereitgestellt wird.
  * Sollen auch diese beiden Technologie-Standards in den D-Stack aufgenommen werden?
