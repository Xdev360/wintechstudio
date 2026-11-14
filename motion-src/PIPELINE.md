# How website motions are made (Nov 2026)

Every website motion is a small HTML page whose `window.render(t)` draws the frame at time t (seconds).
`render.js` steps t at 30fps, screenshots `#stage`, and ffmpeg turns the frames into an mp4.
Real assets come from Figma as PNG layers, so the motion uses the real product, not look-alikes.
Worked example: `mylo-card/` (Brief 1, 1312x984, 8s). Read it before starting.

## Steps
1. Read the brief in `docs/MOTION-BRIEFS.md` and the storyboard section in Figma file kQl8LQLi5xdRVVyXF3R4NZ
   (M1 card loops page 1135:23916, M2 films 1134:26676, M3 services and motion work 1134:23770; index in the project doc motion/05-storyboard-index.md).
   Screenshot the storyboard section to see the concept, then inspect panels with use_figma (read-only) to find the real layers they cloned.
2. Export layers at the size they will be shown (or larger):
   - use_figma: on the storyboard page, make one temporary frame named `__motion export · <slug> (temp)` far off-canvas (x 30000).
     Clone the source layers into it, `rescale()` them to the needed size, hide parts you want as separate layers. Never edit originals.
   - get_screenshot with `enableBase64Response: true`, `contentsOnly: true` and `maxDimension` set to the node's full size
     (the tool result reports original_width/height; ask again with that number if it was downscaled). The PNG is saved on disk at the
     path printed as `[Image: source: ...]` in the tool result; copy it into `motion-src/<slug>/a/<name>.png`. Transparent nodes export with alpha.
   - Use use_figma read-only calls to get exact positions (absoluteTransform, absoluteRenderBounds vs absoluteBoundingBox give the node's offset inside the exported PNG).
   - Delete the temporary frame when done.
3. Write `motion-src/<slug>/index.html`: a `#stage` div at the exact video size, absolutely positioned layers, and `window.render(t)` that sets transforms/opacity from t only (no timers, no CSS transitions), so every frame is deterministic.
4. Poster match: frame 0 must equal the poster already on the site (e.g. `public/images/cases/cover-<slug>.webp`, or the Figma cover). Start and end on a full cover image and crossfade to/from the layered version; check alignment numerically (mean absolute difference of the frame vs the cover under ~2 on 0-255 grey).
5. Render and review: `node motion-src/render.js motion-src/<slug> <seconds> /tmp/frames 30` (add a comma list of times to render only those). Make contact sheets and look at them; fix overlaps (nothing over headlines), clipping, jumps.
6. Encode (silent, loop-friendly):
   `ffmpeg -y -framerate 30 -i /tmp/frames/f%04d.png -an -c:v libx264 -pix_fmt yuv420p -crf 22 -preset slow -movflags +faststart public/<path>.mp4`
   Keep card loops under 3MB. Skip webm unless it is smaller than the mp4.
7. Put the mp4 at the path the brief names. Card loops: `public/videos/cards/<slug>.mp4` (CardMedia switches automatically when the file exists and the case has `card.kind: 'motion'`). Other slots: check the component the brief names.
8. `npx astro build`, check the page in `astro preview` with Playwright (video plays, readyState 4), commit with the session's attribution lines, `git fetch && git rebase origin/astro-v5`, push `astro-v5`, then push `astro-v5:site-overhaul` (site-overhaul is the live production branch).

## Rules (from the briefs)
Silent. Calm, one idea, slow moves. Seamless loop (last frame cuts to the first). Real product only. Figtree, Ink #0A0E17, Paper #FFFFFF, Signal #3B5BFF. No emoji, no em dashes, no Instrument Serif. Keep key content out of the outer 3%.
