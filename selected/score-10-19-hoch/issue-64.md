**Titel:** Hallo, meine Wünsche Anregungen und Feedback warum ein Stack so vielseitig ist und vielleicht auch sein muss. Wo Ich die größten Verbesserungspotentiale sehe
**Quelle:** https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/64
**Typ:** issue
**Status:** Offen
**Erstellt:** 10. Oktober 2025 um 17:53
**Aktualisiert:** 28. November 2025 um 22:03
**Autor:** Marc Weber (@OC000100495691)
**Zugewiesen:** Keine
**Labels:** Keine
**Meilenstein:** Keiner
**Fälligkeitsdatum:** Kein
**Gewichtung:** Keine
**Zeitschätzung:** Keine
**Zeitaufwand:** Keine
**Kommentare:** 1
**Likes:** 1
**Dislikes:** 0
**Merge Requests:** 0
**Aufgaben:** 0/0
**Blockiert:** 0 Issues
**Vertraulich:** Nein
**Diskussion gesperrt:** Nein
**Schweregrad:** Keine

<!-- KoliBri Kommentar: https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/64 -->

Sie schreiben: "Die Spaltung der Communities minimieren und aktiv managen" – das spricht mir aus der Seele. Ihr Punkt "HTML – braucht man mehr?" trifft es perfekt: Web Components sind die Antwort. Native Browser-Technologie, seit 2018 mit 97%+ Browser-Support, kein Framework-Overhead.

Ihre Beobachtung "vscode vs eclipse vs lapce" und "GTK vs QT" zeigt das Fragmentierungsproblem. KoliBri setzt genau dort an: Ein Team nutzt Angular, ein anderes React? Beide nutzen dieselben 50+ barrierefreien Komponenten. W3C Web Components als gemeinsamer Nenner, keine Framework-Zwänge, 3.000+ wöchentliche npm-Downloads zeigen den Bedarf.

Ihr Fazit "ein Standard sollte einer sein, der es erlaubt Technologien zu koexistieren" trifft KoliBris Kern: Barrierefreiheit (WCAG 2.1, BITV 2.0) als eingebauter Standard für 10 Mio. Menschen mit Behinderung in Deutschland, während React, Angular, Vue oder Vanilla JS ihre Stärken behalten. Ihre Idee zur Paketmanager-Harmonisierung (npm, pip, cargo vereint) ist übrigens spannend – haben Sie da schon konkrete Ansätze?

---

> Mehr Infos:
>
> - **[Aufnahme von KoliBri in den Deutschland-Stack](https://gitlab.opencode.de/dstack/d-stack-home/-/work_items/200)**
> - [Repository - Public UI - KoliBri](https://github.com/public-ui/kolibri)

## Beschreibung

Zusammenfassung was Ich mir für die Zukunft wünesche, wo Ich auch beisteuern könnte:

1. Daten müssen Daten bleiben (versionierbar) Wünschenstwert: automatisch verteilt !
2. Kompiler wird man nicht mehr los, weil es gibt zu viel Code. Aber vielleicht kann man eine Zukunft schaffen, in der sie besser zusammenarbeiten. Oder zumindest die gleichen Funktionen (substr) gleich heißen und sich gleich verhalten (mysql zählt ab 1 nicht 0)

   D.h. man könnte auch neue Core-Libraries anbieten die einheitlicher sind ohne die Sprachen aufzugeben

   Würde man Sprachen harmonisieren (wie ein Chamäleon einige Features gradually machen), dann würden weiger Sprachen ausreichen und weniger Zeit investiert werden müssen um was zu lernen.

3. Abgeleitete Daten (kompiliert, Pakete, AI Ergebnisse) könnte man als abstraktes Konzept verstehen. Eventuell kann man sogar auf Dinge Zugreifen, die erst noch dabei sind zu entstehen oder heruntergeladen zu werden: D.h. # ./(await /bin/program)

   Hieraus ergibt sich automatisc hein verteiltes System, dass Abhängigkeiten auflösen kann für verschiedene Betriebssysteme und Programmiersprachen. Also uv, pip, cargo, nixos, brew, chocolately, npm, buck2, rpm, gentoo .. vereint.

4. Als UI Zukunft: Opengl/Vulkan (CPU rendering als fallback für embedded) + HTML =\> braucht man mehr - ist bereits alles fertig ?
5. Hardware wird immer anspruchsvoller: CPU, GPU, NPU, RAM und Konnektivität und mitnehmen. Also wenn Hardware hätte wo man Bildschirme wechseln kann (Eink vs TV vs Beamer vs watch vs tablet mit touch oder Maus/Tastatur+Monitor) dann würde das Chaos OXS vs Windows vs Linux vs BSD vs eventuell kleiner werden. Ein Gerät zum mitnehmen. Ein Backup. Ab und zu der passende Monitor anstecken und in gross arbeiten - was brauct man mehr ?

Samsung DEX Z.b. S21 FE 150 EUR gebraucht DDR5 krita startet schneller als auf einem neuen Dell Laptop (?) zeigen dass es geht zumindest für Durchschnittsnutzer ? -\> Damit weniger Müll ..

6. Es wäre auch schön wenn Verträge und die Art und Weise wie auf Rechnungen zugegriffen werden könnte vereinheitlicht wäre: So wie Authenticator Apps (Google, Microsoft, otp) Passwörter managen, warum kann eine Identität nicht Verträge und Rechnungen managen. Weil Rechnungen per E-Mail ist immer noch fehleranfällig. Wenn es aber eine API gäbe

- gib mir alle Verträge
- gib mit Vertragsoptionen (neu)
- gib mir alle Rechnungen (Zeitraum)

Dann würde sich alles besser automatisieren lassen. Dokumente mit eigener git-ähnlicher Historie würden die Vertrags Ebene bereits abbilden.

Das Ergebnis ist ein bischen eine Block-Chain, die immer nur zwischen 2 Vertragsparteien besteht. So bleibt Datenschutz bestehen. Wer welche Anwendung nutzt um die Dokmuente zu speichern ist dann die Aufgabe von jedem selbst.

Ich bin Programmierer und Ich habe folgende Wünsche und Ziele:

- Vergangenheit kann man nicht loslassen (alles neu zu schreiben zu teuer)
- Aber mit der Vergangenheit gewinnt man nicht die Zukunft.

Daraus ergibt sich dass man beides irgendwie supporten muss .. Auch ganz ehrlich deswegen weil die Technologie weiter voranschreitet. Gestern C++, dann Rust, dann Typing Systeme für C/C++ und alle können eventuell alles und der Grund zu wechseln fällt weg ? Man kann auch nicht immer vorhersagen was wann am besten ist. Weil jedes Tool Vor/Nachteile hat. Und jeder Programmierer kennt unterschiedliche Tools. Selbst vscode's completion ist langsamer als Neovim custom code. IT Industrien brauchen 10+ Jahre um sich anzpuassen. Mancher Code läuft 20 Jahre. Dennoch ist die Zukunft länger als die Vergangenheit. Und Verbesserungen und Änderungen sind zumindest eventuell zuzulassen ?

Hier ein paar Beispiele wie einige Menschen die Zukunft von Sprachen gesehen haben. Und oft haben die Projekte in einem oder mehreren Aspekten die Welt weitergebracht. C -\> Zig ? C -\> C++ JS -\> Go JS -\> TS (und Alternativen) JS -\> low memory Fork ( Facebook ) JS -\> TS (aber ohne Macros - nein Bun ist eine Ausnahme) JS -\> Webassembly (3x schneller _ABER_ keine regex included also am Ende doch langsamer geladen ..) PHP -\> Facebook Forks PHP -\> Java/.net (tot oder kaum genutzt) JS/C++ -\> Go C++ -\> .. Rust? Rust -\> Rust mit GC (alloy auf Github) Rust -\> interpreted language mit und ohne GC Java -\> Scala Java -\> Kotlin Python PIP -\> uv (rewrite in Rust) Python -\> Mojo webpack -\> esbuild (Go) und Python/Numpy -\> hier gehts nicht mehr um Python. Es ist ein eigener Standard wie man mit Arrays umgehen kann (mit GPU Erweiterungen etc)

Beispiel Limitierungen on Probleme:

Go -\> noch kein OpenXR support implementiert Rust -\> langsamer zu schreiben. Z.b. Cyclic lists entwder mit RC (langsamer) oder mit unsafe -\> D.h. Rust schafft Probleme, die es sonst nicht gegeben hätte ! Beweis-Systeme würden die Situation verbessern. JS/Haskell.. -\> 5-10x langsamer C -\> langsamer zu schreiben Java -\> Wie GC einstellen ? Code ohne Allocations machbar, aber wieder kompliiert (Arena Allocation wie Rust / Zig / ..) Zig -\> kein .map(x=\> x+1), etc JS/NPM -\> Gitub Code und as auf NPM ist kann unterschiedlich sein. Wenn Chinesen zerstückelt Videos verteilen dann lacht man noch. Wenns aber eine Sicherheitslücke ist dann nicht mehr. Deswegen ist ein kontrollierbares Distibutionssystem mit bekannten reproduzierbaren Prozessen eine wichtige Komponente für die Zukunft

Leider fehlt immer noch

- Harmonisierung (Kernel -\> User-Space
- High level language -\> shell (Completion) Strukturierte Verantwortlichkeit: X startet Y und Z. Wenn X fertig ist soll Y Z aufgeräumt sein.

Was auch noch fehlt sind automatische verteilte Datei-Systeme. Denn wir haben Pingzeiten von 50ms. Aber viele haben heute mehrere Geräte. Hätten wir sinnvolle neue abonierbare Datenkonzepte, die auch komplexe Queries zulassen, dann wäre unsere Welt eventuell einfacher. Denn es ist heute auch nicht mehr klar wo die Daten liegen sollen in der Cloud damit AI drauf zugreifen kann? Nur bei mir (privat!!) ?

Also muss man ein System, dass beides zulässt, vorallem auch eine Änderung ohne wieder von vorne anzufangen. Also z.B. Journal verteilen, und Daten je nach Situation wenn es Sinn macht in Abhängigkeit von Internet etc.

Ich wüsche mir folgende Zukunft (und kann auch beisteuern!)

1. Daten (der Ursprung von allem). Also sowas wie Github sind wichtig, dass alles nachvollziehbar ist.
2. Daraus dann Ergebnisse machen (Anwendungen, Apps, ..) nach klaren Regeln. Leider ist auch hier nicht immer klar was am besten ist manchmal muss man einfach patchen. Es muss alles irgendwie korrigierbar sein.

   Cross OS, cross language Distributions-System.

   Damit wird es möglich Wordpress Drag&DRop auf einne Server zu ziehen und man ist fertig.

   Eine Mischung aus nixos.org homebrew (OSX) aber auch buck2. Sowohl freundlich zum Programmierer (mach mir Entwicklungsumgebung ... ) als auch Distrbiution (mach mir Debian Paket, Installiere lokal). Als auch kompliziiert: Nimm native Libraries soweit es geht, den Rest kompiliere selber.

Als wenn man Daten mit Code der daraus einen Plan macht hat man nachvollziehbare Ergebnisse (Executables) und das will man.

Da eben heute auch noch AI etc dazukommt Daten -\> Training -\> Ergebnis. Die Nachvollziehbarkeit ist hier eventuell nicht mehr gegeben weil kleine Unterschiede im Training das Ergebnis beeinflussen können.

Beispiel Grafiken: HTTML/CSS OpenGL -\> Vulkan Speziallibraries wie Java/C# UIs etc. Kann man GPU und HTML/CSS kann man alles. Industrie-Standards.

Wertvolle Projekte die weitergegangen sind als was die meisten kennen: FuchsiaOS (Google) - kann Code ausführen bevor auf Festplatte ist OpenHarmony (Huawei) - kann Services auf allen Geräten gross und klein nutzen, bevor runtergeladen ist. _UND_ hat Sicherheitskonzepte für große und kleine Geräte die zusammenarbeiten.

Sie haben ein paar der Probleme gelöst

Es sind viele kleine Optimierungen möglich: Z.b. wenn PC und Backup gleiches Journal hätten, könnte man Bitflips korrigieren !

Klar werden von 100 Programmierern mindestens 30 sagen Python soll Stantdard sein. Aber Ich denke der Standard sollte einer sein, der es erlaubt Technologien zu koexistieren. Und das gut macht. Denn wir können nicht anders. Und natürlich darf man aus der Co-Existenz auch Empfehlungen für die Zukunft ableiten.

Leider hat mich Prototype-Fun mit meinen Ideen erstmal abgelehnt. Aber Ich bin der Meinung dass wenn wir intelligent vorgehen wir in der Zukunft viel Arbeit einsparen können.

Die meisten Menschen wenn man sie frägt: Hast du Lust PHP, Python, JS und SQL zu lernen statt einer Sprache, die alles kann. Ist die Antwort meist Ja. D.h. die meisten verstehen nicht wie viel Aufwand es bedeutet:

1. compiler (syntax)
2. core librariers
3. extra libarries
4. editor / typing / ..
5. Paketmanagement ... Mehrfach zu lernen _UND_ aktuell zu bleiben.

Gleichzeitig sind neue Ideen wie ein Komplier dessen Typing SQL Migrations schreibt noch nicht umgesetzt.

Weitere Beispiele: vite nutzt webpack und esbuild (für node-modules). esp32 als Ziel Micropython 1sec cycle möglich, mit C++ \> 20 Sekunden. Der Wechsel von Micropython zu C++ kann aber nötig werden z.B. um mp3 zu dekodieren ..

Vite und Micropython tun aber das selbe: Libraries vor-packagen. Und dann noch eine glue Schicht oben drauf flexibel halten. (Wie C -\> lua, Rust -\> Rhai, ...)

Ich sehe deswegen in der Harmonisierung das größte Potential für die Zukunft. Also versuchen die Spaltung der Communities zu minimieren zu optimieren und aktiv zu managen.

vscode vs eclipse vs lapce (JS mit jitting vs Java vs Rust) jackd (c/C++ versionen) GTK vs QT Das meine Ich damit ..

Ein Deutschland-Stack muss die Vergangenheit integrieren _UND_ die Zukunft im Auge behalten ohne sich in Aussagen wie \>Rust ist am besten und schnellsten\< zu verlieren. Was nicht stimmt. Ja im Vergleich zu JS ist Rust schneller. Aber grade Grafik-Libraries haben oft den kommentar 1.5 bis 2x langsamer als die C Variante. Was Rust geliefert hat:

- Stabilität (d.h. auch alter Code geht)
- ein Cargo packaging System
- einige moderne Prinzipien (enums mit Werten, ...)

Aber warum sagen manche immer noch sie nutzen Haskell fürs Prototyping und dann Rust für Produktion ? In Haskell (+1) ist Funktion die 1 dazuzählt. In Rust muss man typen angeben und mehrere Zeilen definieren.

Es gibt aber keinen übergang von Haskell zu Rust. Man muss dann alles neu schreiben. Und das würde Ich gerne für die Zukunft schaffen.

Ich kann zu den ganzen Themen noch Details nennen auch teilweise Pläne. Wer Interesse hat einfach anschreiben: marco-oweber@gmx.de Ja es wird ein 10+ Jahre Weg sein. Aber er wird es wert sein gegangen zu werden.
