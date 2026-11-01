# Rebuild brief: make the Astro site match the Figma design exactly

The site at /home/claude/wintechstudio (Astro 7, static, branch astro-v5) has the right content but the visuals were approximated. The owner (Oladele) says it "doesn't look like my design at all". Your job is to make your assigned pages match the Figma frames section by section: layout, spacing, type sizes, colours, borders, radii, imagery, decorative elements, light/dark, and the mobile frame.

## Figma
- fileKey: kQl8LQLi5xdRVVyXF3R4NZ, page "Website · v5" (799:480).
- sessionId for every Figma tool call: 5a601d72-611c-413d-9471-68df3a7116d5
- Before calling get_design_context, read the MCP resource skill://figma/figma-design-to-code/SKILL.md (server "Figma") once, and pass skillNames "resource:figma-design-to-code".
- Big frames come back sparse: call get_metadata on the frame, then get_design_context on each section (child) node. Use the returned screenshot as the visual target.
- get_screenshot (enableBase64Response true, maxDimension ~1600) shows you any node.
- use_figma runs Plugin API JS (return value limit 48KB). Use it to read exact text, sizes, fills, and to export vectors: `await node.exportAsync({format:'SVG_STRING'})`.

## Assets: important constraint
- figma.com asset URLs (from get_design_context or download_assets) can NOT be downloaded from this machine (proxy blocks figma.com). Do not try curl.
- Vectors (icons, logos, illustrations, decorative shapes): export with use_figma as SVG_STRING and inline them or save as .svg in public/. The duotone "bi/*" icons use fills #DFE6EF and strokes #2F4A6B; replace those with `var(--bi-fill)` and `var(--bi-stroke)` so dark mode can recolour them (dark values: fill #1A2233, stroke #AFC0E0).
- Raster images that already exist and may be reused:
  - public/images/cases/film-<slug>.webp (1360 wide) and film-<slug>-800.webp, grid-<slug>.webp (1280x2440 PXDX gallery) for slugs mylo, virelle, manzeelatur-ridho, tobel-pearls, lets-hang, cardiorisk, virtual-trades
  - public/images/services/<service>-hero.webp (hero stage, 1040x760 transparent) and <service>-1..5.webp ("what you get" bento cards, 2x) for brand, websites, ai-assistant, automation, apps, motion
  - public/images/work/{mylo,virelle,letshang}-1000.webp, public/images/hero/hero-light.svg, hero-dark.svg
- If a raster in the design is not available, do NOT invent one. Build the slot at the right size with a neutral placeholder (background var(--surface)), give it `data-todo-image="<figma node id>"`, and list it in your final report so it can be exported later.
- Pure CSS can recreate gradients, grids, simple shapes, UI mock cards made of text and boxes: prefer real HTML/CSS for anything that is text or UI (it should stay selectable and responsive).

## Code conventions
- Global CSS: src/styles/tokens.css (colour vars, .btn variants, .wrap = 1200 max + clamp gutter 16..120px, .mono) and src/styles/page.css (generic section helpers). You may use them, but match the Figma numbers. Do NOT edit tokens.css, page.css, Base.astro, Page.astro, Header.astro, Footer.astro, AskAI.astro, ui/Closing.astro: another worker owns them. Put page-specific CSS in the page/component `<style>`.
- Layout: src/layouts/Page.astro (props: title, description, crumbs, jsonld, closing, theme). Pass `theme="dark"` for pages whose Figma frame is dark-only (Work W1, tools T0-T3, Book B1/B2, Paid diagnostic S8, 404 E1, dark case studies Mylo and Virtual Trades). Page.astro already renders Header, the closing band and Footer; don't duplicate them (the closing band in Figma = ui/Closing.astro).
- Data: src/data/site.ts, services.json, cases.ts, bento.ts. Keep facts and prices as they are in the data/Figma; never invent prices, clients, metrics or testimonials.
- Fonts: Figtree (weights 400, 500, 600 only) and Geist Mono. No Instrument Serif. No em dashes in copy. UI icons: Lucide (src/components/Icon.astro has some; add inline lucide SVG paths locally if you need more). Never emoji.
- Responsive: desktop frames are 1440 wide with 120px side padding (content 1200). Mobile frames are 390 wide ("M · ..." frames). Breakpoint 1023px is used site-wide. Make the mobile layout match the M frame.
- Interactive bits in the design (accordions, tabs, toggles, sliders, chips) must work.
- Keep existing working behaviour on the pages you touch (brief builder on service pages that saves picks in localStorage and sends to WhatsApp/book, forms that open WhatsApp/mailto via public/form-send.js, FAQ JSON-LD, breadcrumbs).

## Checking your work
- Do not run `astro build` (others are working in the same folder). Run your own dev server: `cd /home/claude/wintechstudio && npx astro dev --port <your port> --host 127.0.0.1` in the background.
- Screenshot your pages with Playwright (require('playwright') works, chromium.launch() needs no options) at 1440 wide and 390 wide, full page, and compare with the Figma screenshot of the same frame/sections. Iterate until they match. Look at each section side by side, not just the overall impression.
- Do not commit; the lead will commit. Do not touch files outside your assignment.

## Report back
A short list: pages done, anything you could not match and why, and every `data-todo-image` slot with its Figma node id and size.
