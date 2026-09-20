# The Agent Whisperer — talk plan

> **Status:** synced to the live deck 2026-09-22 (`talk-style` skill, punch-up
> mode). The deck (`slides/index.html`) diverged substantially from the last
> plan sync — new title, a restructured personal-framing opening, reordered
> Act 1/2 beats, several genuinely new pieces of content, and a rewritten
> closing. This file is now a faithful *record* of what's actually in the
> deck, not a proposal — most of the authorship below is François's own
> direct editing, not this skill's. Where something is still a placeholder
> or needs a source, it's flagged the same way as before.

> **Pitch (FR, original):** Le 10x engineer est devenu un mythe de la tech. Avec
> l'essor des agents IA, la question n'est plus de savoir s'il existe, mais
> jusqu'où on peut le pousser. Peut-on construire des 100x engineers ? Ou
> cherchons-nous autre chose à l'ère de l'IA ?

> **Thesis (unchanged):** Agents increase productivity, which is exactly why
> the bottleneck stops being code. Most system failures were never about
> typing speed — they're bad design and badly-defined requirements. Give that
> problem an agent and you don't fix it, you hit it faster.

> **New framing layer, added in the opening (2026-09-2x):** the talk now
> opens *personally*, not abstractly — François speaking as an independent/
> freelancer asking "how do I sell myself in an agent world?" This isn't a
> replacement for the productivity thesis, it's the hook that gets to it: the
> abstract industry question ("is productivity the right measure?") is
> reframed as a stakes-having personal one first (what does a client actually
> pay for?), then generalized. The talk's closing now bookends this
> explicitly — see Closing.

- **Audience:** mixed — devs, POs, CTOs. Act 3 stays concrete and intuitive.
- **Length:** 45 min (unconfirmed against actual slide count — see Open
  Decisions, timings still need doing).
- **Language:** built in English, translated to French for delivery. One
  translation is already done and living in speaker notes (Brooks' "No
  Silver Bullet" quote, Act 3) — see that beat.
- **Talk type:** conceptual/argument-driven, paced with frequent `photo`/
  `photo-text` interludes for rhythm (per the `talk-slides` skill's ~3
  slides/min target) — no live demos; TLA+ and TypeScript code is shown
  static, verified beforehand, narrated on slides.
- **This repo now has its own copy of the TLA+ Bank demo**: `demos/00-tla-design/`
  (Bank.tla, BankAtomic.tla, configs, README, and a local `tools/tla2tools.jar`
  so it runs standalone — copied 2026-09-22 from `tester_c_douter/demos/00-tla-design/`,
  which is the one actually used in the deck's TLA+ slide, re-verified with
  TLC after copying: naive violates `NoOverdraft` in 5 steps, atomic fix
  reports "No error has been found," same as before the copy). Mirrors how
  `demos/01-typescript-illegal-states/` is already self-contained here.
- **Related workspace:** `../tester_c_douter/` — formal-methods deep dive
  (glossary, bibliography, demo ladder). Still holds
  `demos/07-tla-lock/` (a generic mutual-exclusion lock spec, verified but
  **not used** in the deck — the deck's TLA+ code slide uses the Bank.tla
  actions directly instead, now via the local copy above; keep 07 in
  `tester_c_douter` as reserve/backup material, see Open Decisions).

---

## Opening

Richer and more personally-framed than the original plan — a paced sequence
of punchlines and photo interludes, not a single ritual slide. In slide
order:

1. **Title — "The Agent Whisperer."** Speaker note: *"Talking about code is
   so 2024 since now Agents are doing code for us. I had to ask myself a
   question as an independant."* — establishes the personal/freelancer
   framing immediately: this isn't an abstract industry talk, it's "what do
   I do now" from someone whose livelihood depends on the answer.
2. **Punchline — "How do I sell myself in an agent world?"** Note: *"I get
   that's not maybe your question. So let's rephrase it"* — explicitly
   flags this as deliberately narrow/personal, about to be generalized.
3. **Photo-text — "What's the value of a developer in an organisation?"**
   (Quilia)
4. **Photo-text — "What's appealing to my clients"** (Hunters Race) —
   rephrasing landing on the client's/employer's actual perspective.
5. **Photo — warning imagery** (Goh Rhy Yan), no text — mood beat.
6. **Photo — "10xengineer.jpg"** (Alberta Tech) — mood/meme beat, visual
   callback to the term before Act 1 properly opens it up.
7. **Photo — Buddy Christ (Dogma)** (Dogma) — `[JOKE: pop-culture image
   beat — needs the actual joke/framing spoken over it, not scripted here]`
8. **Punchline — "Strip away the mythology / and there's only one thing
   left"** — deliberate cliffhanger, split across two lines, doesn't finish
   the sentence with "productivity" (unlike the earlier plan draft) — the
   answer lands later, structurally, via the framing question itself.
9. **Photo — productivity imagery** (Andreas Klassen)
10. **Photo — AI imagery** (Aerps.com)
11. **Framing question — "What does productivity actually mean, once an
    agent is holding the keyboard?"** (still the load-bearing question the
    whole talk answers — unchanged in substance from the earlier plan,
    reworded "pen" → "keyboard.")
12. **Photo — "adapt" imagery** (Brett Jordan)
13. **Act 1 divider — "Augmented 10x Engineer."** Note: *"Can we be
    augmented 10x engineer or all be 10x engineer"* — a genuinely open
    question posed to the room, not just a section label; sets up the
    "augmented vs. everyone" tension Act 1 works through.

*Refs: none new — this is pacing/framing, not argument. `[JOKE: ...]` only
on beat 7 (Buddy Christ); the rest are mood photos, no joke needed per beat.*

---

## Act 1 — Augmented 10x Engineer

Same thesis as before (whichever version of "10x engineer" collapses to
productivity, and the data on productivity cuts both ways), restructured
with real embedded quotes and moved beats. Goodhart's Law now closes the act
instead of opening it.

### Beat — AI's pitch is the same word (now with real quotes inline)
Punchline: **"Open any pitch deck for an AI coding tool / it's the same word
management already worshipped: productivity."**

Now shows the actual sourced quotes directly on the slide, not just
described:
> GitHub Copilot: *"up to 55% more productive at writing code"*
> Cursor: *"make software development 10× more productive"*

*Refs: [7] GitHub Copilot research · same Cursor mission-statement source
already used elsewhere in this doc's productivity-data section.*

### Beat — Become the Myth (Whichever version)
Photo-text (Esteban López), replacing what was a plain `evidence` slide.
Same content as before: individual hero / raw number / tool-manufactured
belief all collapse to one axis; Sackman 1968's weak study is the anchor.

*Refs: [1] Sackman, Erikson & Grant 1968*

### Beat — The industry didn't bring any new angle
Unchanged content (every headline claim is faster/more-output/more-
throughput, never judgment or design quality).

### Beat — So can everyone be a 10x engineer with AI?
Same turn as before, reworded slightly. → Photo-text "The naive answer
feels obviously: yes" (Isaac Smith) → punchline "Agents don't make the 10x
engineer real. They make the number measurable at scale."

### Beat — The productivity data, both ways
Same four pro-data slides (task completion speed, throughput & skill tier,
sector & adoption, org-level throughput) — unchanged, still sourced to
[7][8][9][10]. Now followed by a two-line fragment punchline: **"Yes, the
data says agents make you faster." / "It also says you'll be wrong about by
how much"** (was one longer sentence before; now a fragment reveal).

Then a shorter bridge punchline — **"Same territory, different reports."**
(replaces the earlier "Then the landmine — same territory, measured more
rigorously.") — into the same landmine sequence: METR, stability/trust,
the NBER executives slide, and the NBER quote. All unchanged, still sourced
to [11][22].

### Beat — Weighing the sources
Unchanged.

### NEW Beat — Where are we going with that
Photo-text (Aron Visuals), two fragments: *"AI impact is metered by
measuring **productivity**."* / *"It's the same metric as for developer"* —
a new explicit bridge line tying the executives' own measurement problem
back to the developer-productivity framing from earlier in the act. Not in
the previous plan draft.

### NEW Beat — doubt (mood photo)
Photo (Markus Winkler), no text — pacing beat before the act's closing
quote.

### Beat — Goodhart's Law (moved to close Act 1, was previously the anchor
for Beat 1.1 near the start)
Unchanged quote and attribution. Now the *last* beat of Act 1 rather than
the first — lands as the act's closing thought before Act 2's section
divider, rather than as early scaffolding for the productivity-axis claim.

*Refs: [6] Goodhart (1975) / Strathern (1997)*

---

## Act 2 — Productivity is not value

Section divider retitled from the earlier plan's generic Act 2 header to
**"Productivity is not value"** — sharper, states the act's conclusion as
its own title.

### Beat — The turn
Punchline: **"Producing more code doesn't mean producing more value."**
(unchanged)

### NEW Beat — Green tests were never proof / Bugs are mostly not technical
This callback line has **moved earlier** — it used to only appear at the
Bloch cold-open (mid-act) and get recalled once at the close. Now it's
stated as its own punchline immediately after "the turn," with a new
second line: *"Bugs are mostly not technical."* It still gets recalled
again at the close (see Closing) — now it's stated three times total across
the talk instead of two, which is a stronger callback if delivered
consistently.

### Beat — Validity is judged by machines / Value is judged by humans
Unchanged, now positioned right after the (moved-up) green-tests line
rather than before it.

### Beat — "My take" (the hinge, now photo-text)
Photo-text (AbsolutVision), title moved into the speaker note ("My take")
rather than shown as an on-slide `<h3>`. Same content: agents write more,
faster, but throughput was never the axis that mattered.

### NEW Beat — newspaper photo
Photo (Utsav Srestha). Note is currently unfinished: *"Made me think of an
article I read in [...]"* — `[SOURCE NEEDED: the specific article this
photo/note references — currently a dangling thought in the speaker note,
not yet named]`.

### Beat — The bug that should have been impossible
**Now has a real citation link on the slide itself** — the Google Research
blog republication of Bloch's post:
https://research.google/blog/extra-extra-read-all-about-it-nearly-all-binary-searches-and-mergesorts-are-broken/
Added to the Bibliography below (still ref [12], URL added).

Speaker note now spells out the full mechanism in prose (1986 Bentley
origin → 2006 JDK discovery → overflow → negative index → invariant never
stated) — this is now fully in the notes, not just implied.

### NEW Beat — real work example: "Bill" (Dylan Gillis photo)
**This is new, real content — not a placeholder anymore.** Speaker note:

> Real work example: Bill in portal. FK to service initially, change a
> service changes the amount of all bills. Invariant: amount is an
> immutable copy of service.price at creation time.

This is the anecdote the original plan's Act 2 reserve material gestured at
generically — now it's a specific, real (anonymized) production bug: a
`Bill` record referencing a `Service` by foreign key meant the bill's
*displayed* amount would silently change if the service's price changed
later, because nothing enforced that a bill's amount should be an immutable
snapshot taken at creation, not a live join. This is the same class of bug
as Bloch's — an invariant that was never named — but ordinary, boring,
backend CRUD, which is exactly the "not an academic example" answer the
talk needs. **This same example resurfaces properly in Act 3** as the
"Domain definition" slide (the actual `Bill` type with its invariants
spelled out) — see below.

*Refs: none external — this is François's own real (anonymized) production
experience.*

### NEW Beat — "question" (mood photo)
Photo (Tim Mossholder), transition note: *"I used the term invariant. Let
me introduce it"* — bridges from the Bill anecdote into the dry-definition
beat.

### Beat — The dry definition (Invariant, Wikipedia)
Unchanged.

### Beat — Nobody had named the one that mattered
Unchanged.

### Beat — Most of your incidents were never algorithm bugs
Unchanged punchline.

### NEW Beat — "Does AI behave better than us on those gaps? Nope."
Photo (Nahrizul Kadri), a new rhetorical beat in the speaker note — directly
pre-empts "wouldn't an agent at least catch this?" before Act 2's reframe
lands.

### Beat — Going faster into the wall
Now photo-text (Gareth Harrison credit) rather than plain evidence. Same
Hillel Wayne citation.

*Refs: [14] Hillel Wayne, "Why Don't People Use Formal Methods?"*

### Beat — Holloway / NASA quote, "An agent is an amplifier, not a
corrective," "It amplifies whatever discipline is already in the room"
All unchanged.

*Refs: [15] Holloway · [10] DORA 2025 (amplifier framing)*

---

## Act 3 — My proposals

**Section divider retitled** from "Point the Productivity Gain at the
Actual Bottleneck" to **"My proposals"** — with a new, pointed speaker
note: *"Everyone is so enthusiast to talk about revolution ..."* (a skeptical
lead-in to the revolution framing that follows, not an endorsement of it —
matches the talk's overall "take the word seriously, don't just wave it
around" move).

### Beat — Revolution reframe (now photo-text)
"A revolution isn't for doing the old thing faster..." is now shown as
photo-text over the fist image (Towfiqu barbhuiya) rather than a plain
punchline. Same line.

### NEW Beat — "So problems are human based"
Photo-text (Redd Francisco): *"So problems are human based"* / *"Identify
what we need, how to explain it, ..."* / fragment: *"How can we use AI
Agent to provide more value."* Note: *"It's an obvious subject but we can't
always act on it."* A new beat bridging the revolution-reframe directly
into "the actual problems are requirements/communication problems," before
the "Not more. Better." evidence slide.

### Beat — Not more. Better. → Engineers, not plumbers → NATO/Brooks/
essential-accidental-complexity chain
Same as before, with the "Software engineering was a provocation" beat now
shown as photo-text (Compagnons credit) instead of plain evidence, and the
rejected-practices list **expanded**: now reads *"Formal proof, functional
programming, category theory, DDD, hexagonal architecture, anti-corruption
layers"* — broader than the earlier plan's DDD/hexagonal/formal-methods-only
list.

**New: the Brooks quote's French translation now lives in the speaker
note** (done earlier this session, dropped straight into the deck):
*"Il n'existe aucune innovation isolée, technologique ou managériale, qui
promette à elle seule ne serait-ce qu'un gain d'un ordre de grandeur en une
décennie — que ce soit en productivité, en fiabilité ou en simplicité."*

*Refs: [25] NATO Software Engineering Conference · [26] Brooks (1986)*

### Beat — An agent will implement your wrong domain model flawlessly
Unchanged punchline.

### Beat — "Formal is the new cool" (photo-text, Patrick Tomasso)
Unchanged.

### Beat — I'm not the first to say it
Unchanged — the DDD/hexagonal/formal-methods sourced list, refs [28]-[34],
**now confirmed live in the deck** (was "not yet wired into a beat" in the
last sync — that flag is now resolved, see Bibliography below).

### Beat — Ubiquitous language, bounded contexts, anti-corruption layers
Unchanged. → **Context rot** unchanged.

### NEW Beat — Domain definition (the real "Bill" type)
**This is the Act 2 "Bill" anecdote, now made concrete as an actual worked
example** — a code slide showing the real (anonymized) domain type:

```typescript
type Bill = {
    id: int
    number: string   // format: FYYYYMMNNN
    user: User
    service: Service // ref — our internal service, resolved via external_service_id
    date: DateTime
    amount: float
    issuerAddress: string
    billingAddress: string
    vouchers: [Voucher]

    // invariant: number is computed at creation.
    // invariant: date is computed at creation as system time
    // invariant: amount is a copy of service.price at creation time
    // invariant: once created Bill is immutable from this app's perspective
}
```

This is a genuinely strong beat: it's the *exact* worked-example pattern
the original plan's Act 3 gestured at abstractly (`worked-example-update-
pipeline.md`) but now it's real, specific, and already set up by the Act 2
anecdote — the four invariants stated as comments are literally the
"sentences nobody wrote down" the talk has been building toward the whole
time, now written down, on a slide, in the exact syntax an agent would need
them in.

*Refs: none external — same real work example as the Act 2 Bill anecdote.*

### Beat — Make illegal states unrepresentable → naive.ts → safe.ts
Unchanged. Still the same real, verified TypeScript demo
(`demos/01-typescript-illegal-states/`).

### NEW Beat — "Code design skill" (the CLAUDE.md snippet, now a slide)
A genuinely fun full-circle moment: this slide's content **is the CLAUDE.md
entry generated earlier this session** (the "make illegal states
unrepresentable" coding guideline, written to be pasted into a real
project's CLAUDE.md) — now repurposed directly as talk content, shown as a
code block. Worth calling out live if it fits the delivery: "here's the
version of this I actually run against my own agents."

*Refs: none external — this talk's own synthesis, already written this
session.*

### NEW Beat — math photo (Bozhin Karaivanov)
Photo-text with an empty text div (title/text TBD — currently just the
credit shows). Note: *"Bit more harder / Agent can understand formal
decisions"* — a transition beat into the formal-methods leg, flagging that
what follows is a step up in difficulty.

### Beat — The checker doesn't care how confident you are → cost-inversion
argument → property checklist → Design by Contract
Unchanged content, minor rewording ("A checker" vs "The checker" in the
punchline — cosmetic).

*Refs: [16] tester_c_douter/reflections.md · [27] Meyer (1992)*

### NEW Beat — Formal method language - TLA+ example (the code, now
actually shown)
**This is genuinely new** — the earlier plan described the TLA+ worked
example only as narrated trace output; the deck now shows the **actual
TLA+ action definitions** (`Check`, `Debit`, `Next`, `NoOverdraft`) from
`Bank.tla`, with a trailing `\* explanation` fragment on every line (built
together this session), plus a matching numbered line-by-line walkthrough
in the speaker note. This replaces "narrate the trace, don't show the spec"
with "show the spec, narrate it line by line, then show the trace" — a
stronger beat than the plan previously called for. **Now local to this
repo**: `demos/00-tla-design/Bank.tla` (copied 2026-09-22 from
`tester_c_douter`, since it's the one actually used — see the top-level
"Related workspace" note).

Note: a separate, more generic lock-specific version of this same idea
(`tester_c_douter/demos/07-tla-lock/`, `CheckAndAcquire`/`MutualExclusion`)
was also built this session but **isn't what ended up in the deck** — the
deck uses the original Bank actions directly. That one stayed in
`tester_c_douter` (not copied here) as backup/alternative material.

*Refs: [16] `demos/00-tla-design` (this repo)*

### Beat — "A checker doesn't care how confident you are" (the trace
output, retitled from "Formal method language")
Same TLC trace as before, title changed to avoid duplicating the new code
slide's title.

### Beat — Asking "what must never happen" → property-thinking bridge →
"Both legs are the same move..."
Unchanged.

---

## Closing

Substantially expanded from the earlier plan's six-line list — now a full
paced sequence, ending with an explicit bookend back to the opening's
personal/freelancer framing.

1. **Section divider — "TL DL"** (stylized TL;DR). No note content yet.
2. **Fragmented reveal, three lines:** *"Can you build 100x engineer?"* →
   *"How can you produce more?"* → *"Wrong question."* — the callback/reframe
   from the earlier plan, now delivered as a three-step fragment build
   instead of one sentence.
3. **New reframed question:** *"How can I produce more value with the time
   granted by AI"* — replaces the earlier plan's "10x-clearer spec" framing
   with this more direct phrasing.
4. **Photo-text — "Be the revolution" / "AI is changing our job so let's
   assume that fact"** (Towfiqu barbhuiya, same image reused from Act 3's
   opening) — direct callback to Act 3's own revolution framing.
5. **Photo-text — the "Green tests were never proof" callback, now with a
   third line:** *"Green tests were never proof"* / *"and neither is a
   green build from an agent."* / fragment: *"Only perceived value
   matters."* — this is the third and final appearance of the callback line
   (see Act 2 note on the line now recurring three times), landing here
   with its sharpest addition.
6. **New punchline pair — "Code is cheap" / "Design is hard."** Not in the
   earlier plan at all — a crisp, quotable closing thesis in its own right.
7. **Advice, now two slides** (the earlier plan had three bullets; the
   deck currently only shows two): *"Don't let velocity decide what
   'correct' means"* and *"Be as suspicious of a green build as you were
   taught to be of a confident junior."* **The earlier plan's first advice
   line — "Go find the sentence nobody wrote down in your own codebase" —
   doesn't currently have a slide.** Worth confirming whether that's an
   intentional cut or just not yet re-added; flagged in Open Decisions.
8. **Photo-text — the explicit bookend to the opening:** *"It's not an
   automation issue. It's a management, human, objective target"* / *"My
   clients value that I deliver 'right' software, not that I commit 2k+
   lines a day"* (Frugal Flyer). This directly answers the opening's "how
   do I sell myself in an agent world" / "what's appealing to my clients"
   — the talk closes the personal frame it opened with, landing on: not
   commit volume, but whether the thing built was right. This is the
   strongest structural addition in this whole sync — the talk now has a
   real narrative arc (personal question → industry argument → personal
   answer), not just an argument with a ritual close bolted on.
9. **Thanks slide.** Unchanged.

*Refs: none new in Closing — pure callback/synthesis of material already
sourced earlier.*

---

## Appendix: Sources (in the deck, after Thanks)

The deck now has one consolidated `evidence` slide (behind a "Appendix"
section divider) listing all sourced references with links, rather than
the 6-slide split built earlier this session — François condensed it
himself. Content matches the Bibliography below; not duplicated here.

---

## Bibliography

In order first used. Unchanged from the last sync except where noted.

1. Sackman, H., Erikson, W. J., & Grant, E. E. (1968). "Exploratory
   Experimental Studies Comparing Online and Offline Programming
   Performance." *Communications of the ACM*, 11(1), 3-11.
   https://dl.acm.org/doi/10.1145/362851.362858
2. McConnell, S. "The Origins of 10x – How Valid is the Underlying
   Research?" Construx blog. (reserve material, not in live flow)
   https://www.construx.com/blog/the-origins-of-10x-how-valid-is-the-underlying-research/
3. Bossavit, L. *The Leprechauns of Software Engineering* (2014). (reserve)
   https://leanpub.com/leprechauns/read
4. Crawford, J. "10x engineers: Stereotypes and research." (reserve)
   https://jasoncrawford.org/10x-engineers
5. Simple Thread. "The 10x Programmer Myth." (reserve)
   https://www.simplethread.com/the-10x-programmer-myth/
6. Goodhart, C. (1975); popularized by Strathern, M. (1997) — Goodhart's
   Law. Now closes Act 1 (moved from opening it).
7. GitHub. "Research: quantifying GitHub Copilot's impact on developer
   productivity and happiness." Now also the source of the literal quote
   shown on the "pitch deck" slide ("up to 55% more productive").
   https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/
8. Harness. "The Impact of GitHub Copilot on Developer Productivity: A Case
   Study." https://www.harness.io/blog/the-impact-of-github-copilot-on-developer-productivity-a-case-study
9. McKinsey (2024-25), via Fortegrp. https://www.fortegrp.com/insights/ai-coding-assistants
10. DORA / Google Cloud (2025). "State of AI-assisted Software Development."
    https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report
11. METR (July 2025). https://letsdatascience.com/blog/developers-thought-ai-made-them-faster-the-data-said-otherwise
12. Bloch, J. (2006). "Extra, Extra – Read All About It: Nearly All Binary
    Searches and Mergesorts are Broken." **Now linked live on the slide**:
    https://research.google/blog/extra-extra-read-all-about-it-nearly-all-binary-searches-and-mergesorts-are-broken/
    (also archived at `tester_c_douter/sources/bloch-2006-binary-search-broken.html`)
13. Wikipedia. "Loop invariant." en.wikipedia.org/wiki/Loop_invariant
14. Wayne, H. "Why Don't People Use Formal Methods?" `tester_c_douter/sources/`
15. Holloway, C. M. — cited in `tester_c_douter/citations.md`.
16. `tester_c_douter/` full workspace — glossary.md, reflections.md,
    worked-example-update-pipeline.md, demos/00-tla-design.
17. Evans, E. (2003). *Domain-Driven Design*. Addison-Wesley.
18. Fowler, M. "Bounded Context." https://martinfowler.com/bliki/BoundedContext.html
19. Wlaschin, S. (2018). *Domain Modeling Made Functional*.
    https://pragprog.com/titles/swdddf/domain-modeling-made-functional/
20. Augment Code. "Security Architecture for the Agentic SDLC."
    https://www.augmentcode.com/guides/security-architecture-agentic-sdlc
21. `demos/01-typescript-illegal-states/` (this workspace).
22. Yotzov, I., Barrero, J. M., Bloom, N. et al. (2026). "Firm Data on AI."
    NBER Working Paper No. 34836.
    https://www.nber.org/system/files/working_papers/w34836/w34836.pdf
23-24. (intentionally skipped, see earlier note in file history)
25. Naur, P. & Randell, B. (eds.) (1969). NATO Software Engineering
    Conference report, Garmisch, 1968.
26. Brooks, F. P. (1986). "No Silver Bullet — Essence and Accident in
    Software Engineering." **French translation now in the speaker note.**
27. Meyer, B. (1992). "Applying 'Design by Contract'." *IEEE Computer*,
    25(10), 40-51.
28. threedots.tech. "Domain-Driven Design matters more when AI writes your
    code." **Now confirmed live** in the "I'm not the first to say it"
    slide. https://threedots.tech/post/ddd-and-ai-coding/
29. Golovko, N. "From Prompt Spaghetti to Bounded Contexts." **Live.**
    https://gitnation.com/contents/from-prompt-spaghetti-to-bounded-contexts-ddd-for-agentic-codebases
30. Khosravi, B. "Backend Coding Rules for AI Coding Agents: DDD and
    Hexagonal Architecture." **Live.**
    https://medium.com/@bardia.khosravi/backend-coding-rules-for-ai-coding-agents-ddd-and-hexagonal-architecture-ecafe91c753f
31. Bougouffa, D. "Hexagonal Architecture Is the Best Gift You Can Give an
    AI Agent." **Live.** https://djamel-bougouffa.com/blog/hexagonal-architecture-ai-agents/
32. Willison, S. / Kleppmann, M. "AI will make formal verification go
    mainstream." **Live.** https://simonwillison.net/2025/Dec/9/formal-verification/
33. JetBrains Research. "Can LLMs Enable Verification in Mainstream
    Programming?" **Live.** https://arxiv.org/pdf/2604.22601
34. "Intent Formalization: A Grand Challenge for Reliable Coding in the Age
    of AI Agents." arXiv. https://arxiv.org/pdf/2603.17150 — **still not
    wired into a beat**, only entries 28-33 made it into the "I'm not the
    first to say it" slide.

---

## Open decisions
- [x] Rough timings per beat — redone from the current deck (93 slides
      total, counted directly from `slides/index.html`, Appendix excluded
      from the spoken-through count since it's backup material, not
      presented slide-by-slide).

      Slide count and mix per section (fast = photo/punchline/quote/
      section/title/thanks; evidence = the slower, denser beat):

      | Section | Total | Fast | Evidence | Est. min |
      |---|---|---|---|---|
      | Opening | 12 | 12 | 0 | ~3.5 |
      | Act 1 | 22 | 13 | 9 (no code, data/definition-style) | ~8 |
      | Act 2 | 17 | 14 | 3 (1 with code) | ~5.5 |
      | Act 3 | 30 | 12 | 18 (6 code-heavy, line-by-line TLA/TS fragment walkthroughs) | ~18.5 |
      | Closing | 10 | 8 | 2 | ~3.5 |
      | **Total** | **91** | | | **~39** |

      Flat 3 slides/min (the talk-slides skill's baseline heuristic) gives
      93/3 ≈ 31 min — but that assumes an even mix, and this deck isn't
      one: Act 3 alone carries 18 evidence slides, 6 of them code walked
      fragment-by-fragment (TLA+ demo, TypeScript illegal-states demo),
      which run well past the ~20s/slide average the flat rate assumes.
      Weighting fast beats (~15-18s) against evidence beats (~25-30s
      plain, ~45-60s for a fragment-walked code slide) lands at **~39
      minutes** — under the 45-minute slot with ~6 minutes of slack for
      audience interaction (show of hands, live questions) and natural
      overrun, without needing to cut content.

      **Act 3 is the pacing risk**, not the others — it's nearly half the
      estimated runtime on a third of the slide count. If the talk runs
      long in a dry run, that's the section to look at first (trim a
      fragment-walkthrough's step count, not add more photo beats
      elsewhere to compensate).
- [x] "Domain definition" (Bill type) and "Code design skill" (CLAUDE.md)
      slides — resolved: **no on-slide citation, deliberately.** Both are
      based on François's own real work, already anonymized/changed
      specifically because the source isn't public — there's nothing to
      cite (it's original, not reported), and attributing it to "a real
      codebase" on-slide would gesture at a source that doesn't publicly
      exist. Speaker notes + this plan doc are the only provenance record,
      which is the right amount for personal, already-anonymized experience.
