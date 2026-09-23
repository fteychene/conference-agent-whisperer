# The Agent Whisperer

Workspace for a conference talk on what "productivity" actually means once
an AI agent is holding the keyboard — delivered at **Commit 2026** (Sept 21,
2026). Argument, in short: agents genuinely increase productivity, which is
exactly why the bottleneck stops being code — most system failures were
never about typing speed, they're bad design and badly-defined requirements,
and an agent just hits that faster.

> **Pitch (FR):** Le 10x engineer est devenu un mythe de la tech. Avec
> l'essor des agents IA, la question n'est plus de savoir s'il existe, mais
> jusqu'où on peut le pousser. Peut-on construire des 100x engineers ? Ou
> cherchons-nous autre chose à l'ère de l'IA ?

This repo holds three things that stay in sync with each other: the talk
plan, the slide deck, and the live demos the deck refers to.

## Structure

- **[`talk-plan.md`](talk-plan.md)** — the talk's source of truth: a
  beat-by-beat breakdown of every section (Opening, Act 1–3, Closing),
  speaker-note excerpts, bibliography, and open decisions (pacing, timings).
  Read this first to understand the argument the slides and demos are built
  to support.
- **[`slides/`](slides/)** — the actual deck: reveal.js + a custom
  `teychene-theme.css`, loaded from a CDN so there's nothing to install. See
  [`slides/README.md`](slides/README.md) for running it locally, speaker
  view, PDF export, and slide-type snippets. Auto-published to GitHub Pages
  on every push to `main` (see below).
- **[`demos/`](demos/)** — standalone, runnable demos referenced live from
  Act 3 of the deck:
  - **[`00-tla-design/`](demos/00-tla-design/)** — a TLA+ spec (`Bank.tla`)
    with a check-then-act race, verified with the TLC model checker;
    `BankAtomic.tla` is the fixed design. Backs the "design verification"
    beat.
  - **[`01-typescript-illegal-states/`](demos/01-typescript-illegal-states/)**
    — the same "make illegal states unrepresentable" idea in TypeScript:
    naive vs. type-safe models of an update pipeline. Backs the DDD/types
    beat.
- **`tools/tla2tools.jar`** — vendored TLA+ tooling (the TLC model checker)
  needed to run `demos/00-tla-design/` locally; see that demo's README for
  the exact commands.

## Slides: live and local

The deck is deployed by [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)
to GitHub Pages whenever `slides/` changes on `main` (or on manual dispatch).
Once Pages is set to "GitHub Actions" as its source in the repo settings,
it's served at `https://fteychene.github.io/conference-agent-whisperer/`.

To view or edit it locally, see [`slides/README.md`](slides/README.md).

## Demos

Each demo folder is self-contained (own README, own dependencies) so it can
be run standalone during the talk without touching the rest of the repo —
see the README inside each one for exact run instructions and expected
output.
