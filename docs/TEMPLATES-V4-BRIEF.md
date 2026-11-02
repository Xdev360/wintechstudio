# Wintech Templates v4: shared brief (Figma)

Figma file: Wintech Templates, fileKey sSPMODTzF6lyMnCSUhH0rd. Do your own `create_session` for this file and reuse that sessionId.
Before any use_figma call, read the MCP resource skill://figma/figma-use/SKILL.md (server "Figma") via ReadMcpResourceTool and follow it. use_figma returns at most ~48KB; build in several calls (one section or a few frames per call). If a call says "connection lost", retry.

## What this is
Oladele wants Wintech Templates (his website-builder product at app.wintechstudio.com, for Nigerian small businesses: salons, fashion stores, bakeries, restaurants, services) redesigned so it looks like the new Wintech Studio website (v5). Everything from beginning to end: marketing website, the logged-in app, the mobile app (there is no mobile app yet) and the App Store listing.
Read the existing pages for features and content (do not change them): 01 Current site, 06 App v2 (UX), 07 Brand (logo, icons, hero art), 08 App v3, 13 Domains, 15 Website v3, 16 Mobile app (iOS). Keep the product's features and facts; change the look to the v5 system below.

## v5 design system (Wintech Studio, measured from designme.agency, Wintech brand)
- Font Figtree only, weights 400/500/600 (nothing heavier). Never Instrument Serif. Mono labels may use Geist Mono or Figtree.
- Colours: ink #0A0E17, page #FFFFFF, soft panel #FAFAFA, panel 2 #F3F4F6, hairline rgba(10,14,23,0.10), strong hairline rgba(10,14,23,0.24), muted text 75% ink, labels 62% ink. Brand blue #3B5BFF (hover #2F4BE6). Warm tag #F97316 at 16% bg. Dark theme: page #0F0F0F, panels #151515 / #1A1A1A, text #F5F5F5, hairlines rgba(245,245,245,0.12).
- Radius 2 almost everywhere (buttons, chips, inputs); cards square with a 1px hairline. Pills only for the floating Ask AI pill (radius 999).
- Type: eyebrow 11/500, letter-spacing 0.66, uppercase, 62%. H1 77.76/600/line 1.0/-1.555 (mobile 45.36). H2 56/600/64.4/-1.12 (mobile 36). Small H2 42/600. H3 20-32/600. Body 16/24. Intro 18/500/27 at 75%.
- Buttons: 40 tall, padding 0 24, 16/500, radius 2. Primary blue fill white text; secondary #F3F4F6 fill ink text. Header button 36 tall, 14/500. Text links 14/600 underlined with an arrow.
- Layout: desktop frame 1440, content 1200 (120 side padding), section padding 128 (mobile 64, side 16). Hairline-framed rows, logo band 74 tall with 240 cells, sticky left heading next to scrolling right content.
- Website chrome: 32px announcement strip #111 (14/400 at 75% white, white NEW tag), nav bar 75 tall with hairline, 14/500 links with thin "+", sound/theme icon buttons 36, Book/Start button 36; mega menus 1200 wide, 44px one-line items with 28px hairline icon boxes and 16px icons, column titles 11px uppercase, footer row. Dark footer #0F0F0F with clock row, centred logo + tagline, link grid, bottom legal row.
- Icons: Lucide, stroke 1.5, 16-20px. Never emoji.
- Copy: no em dashes, plain short sentences, Nigerian context (naira, Paystack, WhatsApp, delivery areas). Never invent testimonials, customer counts or metrics; use clearly labelled sample data inside product UI only (e.g. "Sample store"). Never mention trading or SmartSMB.
- Facts you may use: plans Free $0, Starter $4 (₦6,000), Grow $10 (₦15,000), Business $25 (₦37,500) per month, 0% cut of sales; payments through Paystack (card, transfer, USSD); sites at <name>.wintechstudio.com or your own domain; AI assistant that builds and edits the site and answers customers; credits for AI work; templates for salons, fashion, bakeries, restaurants, services. Logo: use the Wintech Templates logo from page 07 (clone it), Studio sliced-W mark.

## Figma craft rules (Oladele's)
- Real editable layers with auto layout; name every frame and layer clearly.
- Group so he can pick things out: each screen is one frame; inside, sections are grouped, and text/labels sit in their own groups he can move.
- Lay frames out in tidy labelled rows on your page (a section per flow), left to right, with a title text above each row.
- Wire prototype links for the main flows (nav, tabs, primary buttons) and set a flow starting point per flow.
- Reuse imagery that already exists in the file (template screenshots on page 01, hero art on page 07) by cloning; do not invent fake photos. Where an image is missing, use a neutral #F3F4F6 panel with a small label.
- Only work on your own page(s). Other agents are working on other new pages at the same time; never edit or delete anything outside your page.
