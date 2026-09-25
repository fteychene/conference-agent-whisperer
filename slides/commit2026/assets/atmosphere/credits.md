# Atmosphere pool — provenance

Shared pool for `title-slide`, `section-slide`, and `thanks` backgrounds (see SKILL.md — these three slide types draw from the same "atmospheric" image family in François's real decks, unlike `.photo` beats which are topic-specific).

| File | Source | Original resolution | Notes |
|---|---|---|---|
| `marble-blue.jpg` | Extracted directly from the "Le design de l'erreur" (Devoxx FR 2021) Google Slides deck, title slide (page 1). | 1920×1280 | Full-res, safe to use for a real projected/exported deck. |
| `dock-sunset.jpg` | Extracted directly from the same deck, closing "Thanks" slide (page 130). | 1350×900 | Full-res. |
| `marble-teal-magenta.jpg` | The real title-slide background of "Algebraic data types in Java 17" (Devoxx FR 2022, slides.com). Originally only found via that deck's OpenGraph thumbnail, which turned out to be a *composited screenshot* — background **and** the title text/branding baked into one flat image, unusable as a reusable background. Found the clean original instead: slides.com server-renders the deck's real HTML for SEO on its public page, which still had the actual `data-background-image` URL — a genuine Unsplash photo (`images.unsplash.com/photo-1557264322-b44d383a2906`), separate from the title text (reveal.js renders text as its own layer on top; the composited thumbnail had just flattened both together). | 1920×1280 | Full-res, clean, no baked-in text — safe to use. Photographer not identified (Unsplash's CDN URL alone doesn't carry that metadata, and no API lookup was done) — the Unsplash License doesn't require attribution, but note this if that matters later. |

**Original stock-photo source/license unknown for all three** — these were extracted from François's own previously-published decks, not sourced fresh, so reuse in his own future personal talks is reasonable, but the underlying photographer/license isn't tracked here. If any of these need public redistribution beyond his own slides, verify the original source first.

Add to this pool over time: drop a new atmospheric image in this folder, add a row here with its source deck/page and resolution, and it joins the random-pick rotation automatically — see SKILL.md.
