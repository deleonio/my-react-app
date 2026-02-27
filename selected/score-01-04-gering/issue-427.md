**Titel:** Feedback für die Seite /
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/427
**Typ:** issue
**Status:** Offen
**Erstellt:** 28. November 2025 um 15:27
**Aktualisiert:** 28. November 2025 um 15:27
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
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

**Feedback:** <br>Im Rahmen der Arbeiten zum "Deutschland-Stack" und der Definition relevanter Standards für eine souveräne Verwaltungs-IT möchten wir folgende Technologien zur Aufnahme in die Technologielandkarte vorschlagen. Diese Komponenten haben sich in der Open-Source-Community als Industriestandards für den performanten und souveränen Betrieb von KI-Anwendungen etabliert.

1. vLLM als Standard für Inference Engines
Für den serverseitigen Betrieb von Large Language Models (LLMs) schlagen wir vLLM als bevorzugte Inference Engine vor.

Begründung: vLLM bietet einen hohen Durchsatz und effizientes Speichermanagement. Es ist Open Source, unterstützt eine breite Palette an Modellen und ermöglicht den Betrieb von KI-Diensten in eigenen Rechenzentren ohne Abhängigkeit von proprietären Cloud-APIs. 

2. Ollama für lokale Entwicklung und Edge-Inference
Zur Vereinheitlichung der lokalen Ausführung und Verteilung von Modellen sollte Ollama in den Stack aufgenommen werden.

Begründung: Ollama hat sich als De-facto-Standard für das einfache Deployment und Management von lokalen LLMs etabliert. Es erleichtert Entwicklern in der Verwaltung das Prototyping und ermöglicht den Betrieb von KI-Modellen auf dezentraler Hardware (Edge-Devices) oder lokalen Workstations, ohne dass Daten das System verlassen müssen.

3. AutoGen (Microsoft Agent Framework) für Agentic Workflows
Für die Orchestrierung komplexer Arbeitsabläufe schlagen wir AutoGen (inzwischen Teil des Microsoft Agent Frameworks) vor.

Begründung: Um über einfache Chat-Bots hinauszugehen, benötigt die Verwaltung "Agentic Workflows", bei denen mehrere spezialisierte KI-Agenten zusammenarbeiten. AutoGen bietet hierfür ein robustes, quelloffenes Framework zur Orchestrierung dieser Interaktionen und ermöglicht die Automatisierung komplexer Verwaltungsprozesse.

Wir möchten darüber hinaus auf die Arbeiten im Projekt "KIVA" (KI-Verwaltungsassistenz) hinweisen. Die dort entworfene KI-Referenzarchitektur bildet bereits wesentliche Komponenten wie Inference-Layer, Gateways und Agenten-Pools ab und deckt sich mit modernen Best Practices für eine föderale IT-Struktur.

Link zur Architektur: https://baden-wuerttemberg.usercontent.opencode.de/innenministerium/kiva/docs/architecture/high_level_architecture/
