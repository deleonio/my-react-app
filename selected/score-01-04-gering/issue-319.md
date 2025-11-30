**Titel:** Domäne KI, Fehlender Fokus auf Management / Observability (IT-Referat, München)
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/319
**Typ:** issue
**Status:** Offen
**Erstellt:** 20. November 2025 um 19:17
**Aktualisiert:** 20. November 2025 um 19:17
**Autor:** Fabian Reinold (@freinold)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 0
**Likes:** 4
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

## Beschreibung

Der großflächige Betrieb von GenAI-Lösungen erfordert neben den anwendungsspezifischen Libraries und Frameworks zusätzliche geteilte Komponenten.
Wir nutzen dabei folgende Lösungen:

- [LiteLLM](https://github.com/BerriAI/litellm/) als Proxy/Gateway zu Modellen inkl. Guardrails, Logging und Access Control; nutzt als de-facto Standard die OpenAI-API
- [Langfuse](https://github.com/langfuse/langfuse) als LLM Engineering / Observability-Plattform für Metriken, Traces, Evaluationen und mehr; nutzt als Standard OTEL-Traces zur Übertragung.
- [Docling](https://github.com/docling-project/docling-serve) zum Parsen und Auslesen strukturierter Dokumente. Wird durch docling-serve als API für andere Anwendungen bereitgestellt.

Unserer Ansicht nach können Organisationen und auch externe Dienstleister durch diese Plattformen einen großen Mehrwert erhalten und GenAI-Produkte im Betrieb besser einsetzen und überwachen.
Eine detaillierte Beschreibung des KI-Stack der LHM findet sich [in unserem Blogpost](https://ki.muenchen.de/blog/2025-07-23-oss-genai-stack)
