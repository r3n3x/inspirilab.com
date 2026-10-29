# Design: Klang Valley rail map

The site is a rail network. Each build service is a coloured line, each real project is a station on it, and the consultation with Rene is the interchange every line leaves from. Product facts live in `PRODUCT.md`; content in `data/site.ts`.

## Tokens (`assets/css/main.css`)
- Ground `--paper #ffffff`; ink `--ink #0d1f17` (text, line outlines, station rings, signs); secondary text `--ink-2 #3d5248`; hairlines `--line #dfe6e2`; text on ink `--ink-band-secondary #b7cfc3`.
- Line colours (non-text use only): `--line-red #e4002b` SaaS & AI, `--line-green #23b573` Websites (also the brand green), `--line-blue #0072bc` Blockchain & DeAI, `--line-amber #f5a800` Consulting, purple `#7b3fa0` Partner Projects & Incubation (set per service in data). Each service carries its `color` and `short` name in `data/site.ts`.
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
- Load: lines draw out of the interchange one after another (`.draw`), stations pop in as each line arrives (`.pop`); the station sign rises in (`.rise`).
- Hover/focus a line: a white train disc runs along it (`.train`, SVG animateMotion).
- Scroll (home, desktop): the route spine fills down the page and each section's stop turns green when reached (`.spine.live`); without JS the spine shows full.
- Navigation: a rail track under the nav links with one ink 'train' (with a headlight disc) that glides to the current page; the nav gains a soft shadow once scrolled; a five-colour rail line runs across the top while a page loads; pages pull out left and arrive from the right (page transition); the mobile menu unrolls from the top.
- Lists (offerings, service rows, team, project cards) rise in once with a capped 70ms stagger (-reveal, content visible without JS); Work filter cards glide to new positions; buttons scale slightly on press.
- All of it switches off under prefers-reduced-motion. Project cards show the project's logo on a mist panel (`/public/logos`, set via `logo` in data/site.ts), scaling slightly on hover; with no logo the panel shows the name as a wordmark.

## Rules
- No eyebrow labels, section numbers, gradient text, glass, blobs or grids of identical icon cards.
- Never invent clients, metrics, testimonials or prices. Ghost stations stay labelled "Your project".
- Must hold at 390px with no horizontal scroll.
