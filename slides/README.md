# 100x Engineer

Slides built with [reveal.js](https://revealjs.com) and the `teychene-theme` custom theme. No install required — this deck loads reveal.js from a CDN.

## Run it

Opening `index.html` directly by double-clicking it works for a quick look, but local images/fonts can get blocked by the browser's file:// restrictions — better to serve the folder:

```sh
# pick one, whichever you have handy — both just serve static files
npx serve .
# or
python3 -m http.server 8000
```

Then open the URL it prints (e.g. `http://localhost:3000` or `http://localhost:8000`).

## Speaker view / notes

Press **S** while the deck is open to pop out the speaker view (upcoming slide, timer, speaker notes from any `<aside class="notes">` in the markup). Needs the page to be served (see above), not opened as a bare file. Opens in a new window — if nothing happens, check your browser didn't block it as a popup.

## Export to PDF

No extra install needed — reveal.js has this built in:

1. Serve the folder (see above) and open it with `?print-pdf` appended to the URL, e.g. `http://localhost:8000/?print-pdf`.
2. Open the browser's print dialog (Ctrl/Cmd+P), set destination to "Save as PDF", and disable headers/footers.
3. Save.

If you want this automated (e.g. for CI or a one-liner), [Decktape](https://github.com/astefanutti/decktape) does the same thing from the command line: `npx decktape reveal http://localhost:8000 slides.pdf` — needs Chromium, which npx will fetch on first run.

## Other keyboard shortcuts while presenting

- `→` / `←` / `Space`: next/previous slide
- `Esc`: slide overview grid
- `F`: fullscreen
- `B` or `.`: pause (blank the screen)

## Slide snippets

Copy-paste starting points for the slide types you'll reach for most while editing by hand. Full type list (including `title-slide`, `evidence`, `bio`, `thanks`) and the rules behind each one are in the `talk-slides` skill's `SKILL.md` — these four cover most day-to-day edits.

**Punchline** — one crisp, standalone thesis sentence. Rotate the accent (`accent-blue`, `accent-teal`, `accent-violet`, `accent-coral`, `accent-sky`, `accent-mint`), never the same one twice in a row:

```html
<section class="punchline accent-blue">
  <h2>The one-line thesis of this section</h2>
  <aside class="notes">Transition: bridge into the next slide's beat here.</aside>
</section>
```

**Quote** — borrowed authority or a deadpan definition. The attribution line needs a real citation, not "source: internet":

```html
<section class="quote">
  <span class="glyph">&ldquo;</span>
  <p class="quote-text">The quoted or defined text, verbatim.</p>
  <p class="attribution">Author &mdash; Source, Year</p>
</section>
```

**Section divider** — act/chapter break. Pick ONE image from `assets/atmosphere/` (tagged `section`-eligible in `credits.md`) and reuse that exact same file for every section divider in this deck — it's a consistent "new chapter" cue, not a fresh pick each time:

```html
<section class="section-slide" data-background-image="assets/atmosphere/marble-teal-magenta.jpg">
  <h2>Act N — title</h2>
</section>
```

**Photo** — a standalone metaphor/emotional beat, full-bleed. This is the one that's easy to get wrong: **the photographer credit in the bottom-right corner is mandatory**, not optional styling — every photo beat in François's real decks carries one, and the theme's `.credit` class already positions and styles it (small italic, bottom-right) so you only need to fill in the name:

```html
<section class="photo" data-background-image="ASSETS/your-photo.jpg">
  <div class="credit">Photographer Name</div>
</section>
```

## Editing

- Slide content: `index.html` — one `<section class="...">` per slide, classes documented in the `talk-slides` skill's `SKILL.md`.
- Visual theme: `teychene-theme.css` — don't hand-roll one-off slide styles in `index.html`, extend this file so the change is reusable next time.
- Background images: `assets/atmosphere/` — shared pool for title/section/closing slides, see `assets/atmosphere/credits.md`.
