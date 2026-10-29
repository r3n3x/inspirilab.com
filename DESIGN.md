# Design: Klang Valley rail map

The site is a rail network. Each build service is a coloured line, each real project is a station on it, and the consultation with Rene is the interchange every line leaves from. Product facts live in `PRODUCT.md`; content in `data/site.ts`.

## Tokens (`assets/css/main.css`)
- Ground `--paper #ffffff`; ink `--ink #0d1f17` (text, line outlines, station rings, signs); secondary text `--ink-2 #3d5248`; hairlines `--line #dfe6e2`; text on ink `--ink-band-secondary #b7cfc3`.
- Line colours (non-text use only): `--line-red #e4002b` SaaS & AI, `--line-green #23b573` Websites (also the brand green), `--line-blue #0072bc` Blockchain & DeAI, `--line-amber #f5a800` Consulting. Each service carries its `color` and `short` name in `data/site.ts`.
- Green text on white uses `--brand-deep #13804f`.

## Type
- Headings: Schibsted Grotesk Variable, bold, tight tracking (signage voice).
- Body/UI: Public Sans Variable (wayfinding clarity).

## Components
- **Station sign** (`.station-sign`): ink panel, white heading, four-colour line strip on its top edge. Used for every page's h1 (`PageHeader`) and the home hero.
- **Route map** (`RouteMap.vue`): SVG network, lines 14px with round caps, stations as white discs with 6px ink rings, interchange as a large ringed disc with the "Start here: book a consultation" button beside it. Planned stops are dashed rings in the line colour ("Your project"). Phones get a strip map (one vertical track per line).
- **Route spine** (`.spine` + `.stop`): one 8px ink line down the left of the home sections; each section heading is a stop disc. Desktop only.
- **Buttons**: `.btn-primary` pill, brand green, 3px ink outline, hover inverts to ink; `.btn-secondary` pill with hairline border.
- **ProjectCard**: 2px hairline card, line pill + "<line> line", station disc before the name.
- **CtaBanner**: the terminus, the one dark ink band per page.

## Interaction & motion
- Signature: hovering or focusing a line (legend or the line itself) isolates it; other lines drop to 16% opacity.
- Station sign rises in on load (`.rise`), off under reduced motion. Everything else: 150–200ms colour/transform transitions.

## Rules
- No eyebrow labels, section numbers, gradient text, glass, blobs or grids of identical icon cards.
- Never invent clients, metrics, testimonials or prices. Ghost stations stay labelled "Your project".
- Must hold at 390px with no horizontal scroll.
