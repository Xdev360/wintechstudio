# Rebuild brief, round 2 (read fully before starting)

Oladele rejected round 1: it followed the Figma frames too literally and the result is oversized (nav, mega menu, icons, spacing), not DesignMe. He wants the site to follow DesignMe's sizes, spacing and structure exactly, with Wintech's own brand and content.

Source of truth for sizes/spacing/structure: /home/claude/wintechstudio/docs/DESIGNME-SPEC.md (measured from designme.agency). Content and facts: the existing pages, src/data/*.ts|json, and the Figma file (fileKey kQl8LQLi5xdRVVyXF3R4NZ, sessionId 5a601d72-611c-413d-9471-68df3a7116d5) for our copy/brand only.

Rules
- Brand: Figtree (400/500/600 only), Geist Mono for small labels only where the spec uses an eyebrow (you may use Figtree uppercase 11/500/.66 instead to match DesignMe more closely; be consistent site-wide), blue #3B5BFF primary, ink #0A0E17 text. Light theme is the default; dark theme must work (data-theme="dark").
- Icons: Lucide line icons at the spec sizes (thin, stroke 1.5). Do not use the big duotone "Bi" icons in nav/menus/small UI any more.
- No em dashes. No emoji. Never invent prices, clients, metrics or testimonials. No testimonial boxes until real quotes exist.
- Free tools are being removed (see spec). Don't link to /tools anywhere; "Plan your project" buttons become "Book a call" (/book) or "See our work" (/work).
- Images: use files already in public/images (cases/film-*, cases/tiles/*, cases/ch/*, services/*, home/*). Some are being re-exported at 2x by the lead with the same filenames; just reference them. Never upscale a small image in CSS beyond its pixel size in a way that blurs; size media boxes so images display at or below their natural size (use srcset/sizes where a 2x file exists).
- Code: Astro in /home/claude/wintechstudio. Don't run `astro build`; use your own `npx astro dev --port <port> --host 127.0.0.1 --ignore-lock` (a server already runs on 4400). Verify with Playwright screenshots at 1440 and 390 and compare against the spec numbers (use getComputedStyle in Playwright to check sizes, don't eyeball). Don't commit.
- Only edit files in your assignment. Report: what changed, anything you couldn't match, and any copy or asset you need from Oladele.
