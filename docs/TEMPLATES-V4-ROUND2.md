# Wintech Templates v4, round 2: everything still missing (3 Nov 2026)

Read docs/TEMPLATES-V4-BRIEF.md first. Its design system, facts and Figma craft rules all still apply. The file is the same: sSPMODTzF6lyMnCSUhH0rd. Create your own session, and read skill://figma/figma-use/SKILL.md before using use_figma. use_figma returns at most ~48KB, so build a few frames per call. If a call says "connection lost", retry. In this file instances hide invisible children by default, so set `figma.skipInvisibleInstanceChildren = false` before editing instances.

## Where things stand
Oladele says the desktop web app (the Wintech Templates app itself), the templates and the rest have not been designed well enough. He wants every feature of the product designed for desktop.

Pages that already exist in v4:
- 17 Website (marketing)
- 18 App (36 frames)
- 19 Mobile app
- 20 App Store

Page 18 covers:
- first run
- home, plus home with the AI panel open
- one editor screen
- the store (products, product edit, categories, delivery)
- orders
- bookings
- customers
- messages
- analytics
- promo codes and social links
- domains
- plan
- four settings screens
- three dark screens

Feature sources to mine for what is still missing:
- page 06 App v2 (UX), the full editor flow C1 to C10
- page 08 App v3 (V1 to V19)
- page 13 Domains
- page 14 Admin panel (A1 to A14)
- page 10 Economics (plans, credits, designer program)
- page 01 Current site (the 12 live templates and the current app screens)

## Reuse page 18's kit
For app screens, reuse page 18's components and the "v4 App tokens" variables (light and dark) so everything matches. Clone the Sidebar and Top bar instances from page 18 rather than redrawing them. The sample business is "Glow Skin Studio" (a Lekki salon that also sells skincare), and screens carry the "Sample data" chip. You may add a second sample site, "Ade Bakes", for multi-site screens.

## Quality bar
- Every screen has full, realistic content: no lorem, no empty grey boxes standing in for UI.
- Spacing is consistent on an 8px grid, with clear hierarchy.
- Take a get_screenshot of every frame after building it, and fix anything clipped, overlapping, misaligned or generic.
- Wire prototype links for navigation and the main flows. Set a flow starting point per flow.
