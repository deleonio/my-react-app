**Titel:** Feedback für die Seite /beteiligung
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/57
**Typ:** issue
**Status:** Offen
**Erstellt:** 10. Oktober 2025 um 13:32
**Aktualisiert:** 3. November 2025 um 09:44
**Autor:** Konsultations- & Kommentierungs-Bot (@konsultations-kommentierungs-bot)
**Zugewiesen:** Keine
**Labels:** Fehler, In Progress, Unterstützung notwendig, Änderungsvorschlag
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

**Feedback:** <br>Der Deutschland-Stack soll eine souveräne, vertrauenswürdige und zukunftsfähige technologische Grundlage für digitale Vorhaben der öffentlichen Verwaltung schaffen.
Technologien, die in den Stack aufgenommen werden, müssen daher insbesondere digitale Souveränität, Interoperabilität, Nachhaltigkeit und Vertrauenswürdigkeit gewährleisten.

Nach Prüfung entlang der Kriterien des Deutschland-Stacks und Auswertung der in der Fachöffentlichkeit geführten Debatte ist festzustellen, dass Next.js diesen Anforderungen nicht genügt. Das Framework weist strukturelle, technische und governance-bezogene Defizite auf, die mit den Zielsetzungen des Deutschland-Stacks nicht vereinbar sind.

# Fehlende digitale Souveränität

Next.js wird von dem US-amerikanischen Unternehmen Vercel Inc. entwickelt, kontrolliert und strategisch gesteuert.
Obwohl der Quellcode unter einer Open-Source-Lizenz (MIT) steht, besitzt Vercel die alleinige Entscheidungsgewalt über:

- die technische Roadmap,
- die Releasezyklen,
- die Implementierung neuer Funktionen,
- und die Integration in das Vercel-Hosting-Ökosystem.

Damit besteht eine einseitige Abhängigkeit von einem nicht-europäischen Anbieter ohne institutionelle Mitbestimmung oder Governance-Mechanismen aus Europa.
Viele zentrale Funktionen (z. B. Incremental Static Regeneration, Server Actions, Edge Functions) sind auf die proprietäre Infrastruktur von Vercel zugeschnitten und außerhalb dieser nur eingeschränkt oder instabil nutzbar.

Dies widerspricht unmittelbar dem Ziel des Deutschland-Stacks, digitale und technologische Eigenständigkeit zu fördern.

# Eingeschränkte Interoperabilität und Portabilität

Next.js ist formal quelloffen, aber faktisch nicht plattformneutral.
Das Build- und Deployment-Modell nutzt undokumentierte oder proprietäre Schnittstellen ("build output format", "minimal mode"), die ein Deployment auf Vercel bevorteilen und Dritten den Betrieb auf alternativer Infrastruktur erheblich erschweren.
Andere Anbieter (z. B. Netlify, AWS, Cloudflare) mussten auf Reverse Engineering zurückgreifen, um Next.js-Applikationen kompatibel zu machen.

Damit fehlt die für den Deutschland-Stack essenzielle Interoperabilität und Wechselfähigkeit zwischen Infrastrukturen.
Ein Wechsel zwischen Hosting-Anbietern oder eine Integration in souveräne europäische Cloud-Infrastrukturen (z. B. Gaia-X) wird dadurch erschwert.

# Geringe Vertrauenswürdigkeit und Transparenz

Next.js enthält verschiedene "magische" Mechanismen, die das Verhalten des Frameworks für Entwickler schwer vorhersehbar machen – etwa durch:

- automatische Überschreibungen globaler Funktionen wie fetch,
- proprietäre Caching-Mechanismen,
- und intransparente Server-Side-Rendering-Logiken.

Diese Intransparenz erschwert die Prüfung sicherheitsrelevanter Aspekte und steht einer nachvollziehbaren Auditierbarkeit entgegen.
Es bestehen keine öffentlich dokumentierten Sicherheits- oder Konformitätsnachweise, keine Zertifizierungen nach europäischen Standards und keine Auditmechanismen im Sinne der Kriterien des Deutschland-Stacks.

# Fehlende Nachhaltigkeit und Community-Governance

Obwohl Next.js Open Source ist, existiert keine unabhängige Community-Governance oder Stiftung, die Entwicklung und Nachhaltigkeit sicherstellt.
Die Kontrolle durch ein einzelnes, kommerziell orientiertes Unternehmen birgt das Risiko strategischer Kursänderungen, Lizenzänderungen oder technischer Brüche.
Beispiele aus der jüngeren Entwicklung zeigen, dass Vercel regelmäßig tiefgreifende Änderungen an der Architektur (z. B. "App Router", "Server Actions", "Server Components") ohne langjährige Stabilitätsgarantien einführt.

Diese Volatilität steht im Widerspruch zur für den öffentlichen Sektor erforderlichen Langfristigkeit, Stabilität und Wartbarkeit.

Next.js erfüllt zentrale Anforderungen des Deutschland-Stacks (Souveränität, Nachhaltigkeit, Vertrauenswürdigkeit) nicht ausreichend und steht beispielhaft für ein modernes, aber stark kommerzialisiertes Framework-Ökosystem, das die Abhängigkeit von außereuropäischen Plattformen verstärkt.

Für den Deutschland-Stack, der auf Souveränität, Transparenz und Nachhaltigkeit zielt, ist es daher nicht geeignet. Die Aufnahme von Next.js würde langfristig technologische Fremdsteuerung und Abhängigkeit institutionalisieren – entgegen dem Grundgedanken einer souveränen Digitalstrategie.

 Die Aufnahme würde die Zielsetzung einer souveränen, europäischen Digitalinfrastruktur unterlaufen.
