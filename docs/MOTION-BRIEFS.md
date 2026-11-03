# Wintech website motion briefs (3 Nov 2026)

Every motion the Wintech Studio website needs, one brief per piece. Each brief stands on its own, so it can be copied straight into the Wintech Motion chat.

## Rules for every website motion
These rules apply to everything below. The social-video standard (9:16, voiceover, sound hits) is a separate thing for posts.

- **Silent.** Website loops have no audio track. Strip it on export.
- **Calm.** One idea per piece, slow moves, nothing flashing. Cards sit side by side on the page, so busy motion fights itself.
- **Seamless loop.** The last frame cuts cleanly back to the first, so end on the same framing you start on.
- **Real product only.** Use the real screens, packaging and characters, never look-alikes.
- **Brand.** Figtree Medium, Ink #0A0E17, Paper #FFFFFF, blue #3B5BFF. No emoji, no em dashes, no Instrument Serif.
- **Export.**
  - mp4: H.264, yuv420p, 30fps, faststart.
  - webm (VP9): optional, with the same name next to the mp4.
- **First frame.** It should look like the still image already on the site (the poster), so the swap from image to video is invisible.
- **Safe area.** Keep logos, headlines and key UI out of the outer 3% on every side, because boxes crop slightly.
- **Delivery.** Send the files back and they go into the paths listed. The site switches from image to video on its own.

Example export:
```
ffmpeg -i in.mov -an -vf "scale=W:H:force_original_aspect_ratio=increase,crop=W:H,fps=30" -c:v libx264 -pix_fmt yuv420p -crf 23 -preset slow -movflags +faststart out.mp4
```

## Priority order
1. **P1:** project card loops (4) and the home "now playing" films (3). These sit on the home page and the Work page.
2. **P2:** case study films (7) and the service loops (6).
3. **P3:** the motion work section (4) and the extra card loops (2).

---

# P1 · Project card loops

These play inside the project cards on the home page, the Work page and the "More case studies" strip. One file per project covers all three places.

- **Size:** 1312 x 984 (4:3). Keep key content inside the centre 1280 x 900.
- **Length:** 6 to 10 seconds, looping.
- **File size:** under 3MB.

## Brief 1 · Mylo card loop
- **File:** `public/videos/cards/mylo.mp4`
- **Size and length:** 1312 x 984, 8 seconds, loop, silent.
- **Look:** black and ash, matching the Mylo cover.
- **Source:** the 16s Mylo homepage film (three phones) in Figma Motion.
- **Scenes:**
  1. (0 to 1.5s) Mylo wordmark and the white Mylo character, framed like the cover.
  2. (1.5 to 6.5s) The three sides of the app, one at a time, on real screens: Today with the plan and streak, then a chess match with a friend, then the pet egg hatching.
  3. (6.5 to 8s) Back to the wordmark frame, so it loops.
- **Poster to match:** `cover-mylo.webp`

## Brief 2 · Virelle Wellness card loop
- **File:** `public/videos/cards/virelle.mp4`
- **Size and length:** 1312 x 984, 8 seconds, loop, silent.
- **Look:** forest green with the marigold accent.
- **Source:** the 13s Virelle homepage film ("original, sealed, dated").
- **Scenes:**
  1. The store homepage opens.
  2. The real products line up (fragrance mist, supplements), with the expiry date visible on a listing.
  3. The order is placed and the printed seal closes on the box.
  4. Back to the cover framing ("E-commerce + AI assistant", products on green), so it loops.
- **Poster to match:** `cover-virelle.webp`

## Brief 3 · Manzeelatur Ridho card loop
- **File:** `public/videos/cards/manzeelatur-ridho.mp4`
- **Size and length:** 1312 x 984, 9 seconds, loop, silent.
- **Look:** midnight navy from the brand film, or the light lapis from the cover. Pick one and keep it.
- **Source:** the opening of the 34s brand film.
- **Scenes:**
  1. The seal draws in, and the name appears in English and Arabic.
  2. The children's app on a phone shows the lesson loop: listen, try, play, earn a star.
  3. Gold appears only on the star moment.
  4. Hold on the seal frame, so it loops.
- **Spelling:** use the client's real logo spelling. Check the film's "Manzilatu r Ridoh" against the logo before export.
- **Poster to match:** `cover-manzeelatur-ridho.webp`

## Brief 4 · Virtual Trades card loop
- **File:** `public/videos/cards/virtual-trades.mp4`
- **Size and length:** 1312 x 984, 8 seconds, loop, silent.
- **Look:** near black, one violet glow, the diagonal light from the cover.
- **Source:** the 16s Virtual Trades homepage film.
- **Scenes:**
  1. The phone shows the Sell flow: pick a gift card, see the naira quote.
  2. The status moves from submitted to verifying to paid.
  3. The gift card and the coins drift gently around the phone, as on the cover.
  4. Close on the hero line "Trade gift cards and crypto. Get paid in naira, in minutes.", so it loops.
- **Poster to match:** `cover-virtual-trades.webp`

---

# P1 · Home "now playing" films

The small film card in the home hero rotates through three projects, 7 seconds each, with a "Play film" chip.

- **Size:** 1280 x 720 (16:9).
- **Length:** 7 seconds, loop.
- **File size:** under 2.5MB.

When a file is ready, its path goes into the `video` field in `src/components/home/Hero.astro`.

## Brief 5 · Hero film: Mylo
- **File:** `public/videos/hero/mylo.mp4`
- **Size and length:** 1280 x 720, 7 seconds, loop, silent.
- **Source:** the Mylo homepage film, the same as Brief 1 but framed wide.
- **Scenes:**
  1. The three phones side by side, as on the current poster.
  2. A slow 3% push-in while each phone's screen changes once (Today, chess, egg).
  3. End on the same three-phone frame.
- **Poster to match:** `film-mylo-800.webp`

## Brief 6 · Hero film: Virelle Wellness
- **File:** `public/videos/hero/virelle.mp4`
- **Size and length:** 1280 x 720, 7 seconds, loop, silent.
- **Source:** the Virelle homepage film, framed wide.
- **Scenes:**
  1. The laptop store page.
  2. The cursor adds the jar to the cart.
  3. "Delivered in 3 to 5 days" pops in.
  4. Back to the starting frame.
- **Poster to match:** `film-virelle-800.webp`

## Brief 7 · Hero film: Let's Hang
- **File:** `public/videos/hero/lets-hang.mp4`
- **Size and length:** 1280 x 720, 7 seconds, loop, silent.
- **Source:** a screen recording of the live demo (letshang-henna.vercel.app), placed inside the phone frames from the case study.
- **Scenes:**
  1. The map with friends' pins appearing one by one.
  2. Tap a pin to see Peek.
  3. "Join hang" and the live room.
  4. Back to the map.
- **Look:** light lilac, as on the poster.
- **Poster to match:** `film-lets-hang-800.webp`

---

# P2 · Case study films

Each case study page opens with a big film under the overview. The page shows the still image until a film exists.

- **Width:** 1920 wide, at the heights listed.
- **Length:** the full film length.
- **File size:** under 8MB.

## Brief 8 · Mylo homepage film (16s)
- **File:** `public/videos/films/mylo.mp4`
- **Size and length:** 1920 x 1080, 16 seconds, plays once then loops, silent.
- **Source:** the existing Mylo homepage film in Figma Motion. Export at 1920 wide.
- **Note:** remove the play button overlay. The site has its own chip.

## Brief 9 · Virelle Wellness homepage film (13s)
- **File:** `public/videos/films/virelle.mp4`
- **Size and length:** 1920 x 1320, 13 seconds, silent.
- **Source:** the existing Virelle film in Figma Motion. Export at 1920 wide, keeping its taller frame.

## Brief 10 · Manzeelatur Ridho brand film (34s)
- **File:** `public/videos/films/manzeelatur-ridho.mp4`
- **Size and length:** 1920 x 1080, 34 seconds, silent on the page.
- **Source:** the existing brand film (seal, lamp, midnight sky).
- **Note:** if it has a music track, export a silent version for the site and keep the music version for social.

## Brief 11 · Virtual Trades homepage film (16s)
- **File:** `public/videos/films/virtual-trades.mp4`
- **Size and length:** 1920 x 1320, 16 seconds, silent.
- **Source:** the existing Virtual Trades film. Export at 1920 wide.

## Brief 12 · Tobel Pearls guide film (new, about 15s)
- **File:** `public/videos/films/tobel-pearls.mp4`
- **Size and length:** 1920 x 1153, 15 seconds, loop, silent.
- **Look:** Tobel blue with the brand's grid lines, as on the current "Brand Style Guide" poster.
- **Scenes:**
  1. The "Brand Style Guide" cover.
  2. Pages flip through the 55-page guide: logo, colour, type, the bird and fish marks.
  3. The billboard and truck livery.
  4. Close on the cover.
- **Source:** the guide pages in Figma.
- **Note:** Tobel blue is allowed here because it is the client's brand.

## Brief 13 · Let's Hang demo film (new, about 15s)
- **File:** `public/videos/films/lets-hang.mp4`
- **Size and length:** 1920 x 1080, 15 seconds, loop, silent.
- **Source:** a screen recording of the live demo inside two phone frames.
- **Scenes:**
  1. Open the app on the map.
  2. Friends' pins appear.
  3. Peek at a hang.
  4. Join it.
  5. The live room fills with avatars.
  6. Back to the map.

## Brief 14 · CardioRisk redesign film (new, about 12s)
- **File:** `public/videos/films/cardiorisk.mp4`
- **Size and length:** 1920 x 1080, 12 seconds, loop, silent.
- **Look:** clinical white, black and the single red accent, as on the poster.
- **Scenes:**
  1. The homepage hero: "Know the risk before it becomes an event."
  2. The assessment form fills step by step.
  3. The risk gauge fills to a band (23.4%).
  4. The top factors appear as bars.
  5. Back to the hero.

---

# P2 · Service loops ("How we help" on the home page)

Each open service row on the home page has a media box. It currently runs a coded animation, and these videos replace it with richer motion.

- **Size:** 1168 x 876 (4:3). On phone it shows full width at 390 x 293, so keep key content central.
- **Length:** 6 to 8 seconds, loop, silent.
- **File size:** under 3MB.

## Brief 15 · Brand and packaging loop
- **File:** `public/videos/services/brand.mp4`
- **Scenes:**
  1. A logo mark draws itself on a clean panel.
  2. The colour swatches and a type sample slide in.
  3. The mark lands on real packaging: a Virelle jar and a Tobel business card.
  4. Back to the empty panel.
- **Use:** real Wintech brand work (Tobel, Virelle, Mylo), not invented brands.

## Brief 16 · Websites and stores loop
- **File:** `public/videos/services/websites.mp4`
- **Scenes:**
  1. A browser window builds a real store page block by block (the Virelle store works well).
  2. The cursor adds a product to the cart.
  3. A Paystack checkout appears.
  4. "Order received" pops up.
  5. Back to the empty browser.

## Brief 17 · AI assistant loop
- **File:** `public/videos/services/ai-assistant.mp4`
- **Scenes:**
  1. A chat window (website or WhatsApp style).
  2. A customer asks "Do you deliver to Ibadan? How much?"
  3. The assistant replies with the real fee and a link.
  4. The customer orders.
  5. An order card lands.
- **Writing:** realistic Nigerian context and calm replies.

## Brief 18 · Apps and MVPs loop
- **File:** `public/videos/services/apps.mp4`
- **Scenes:**
  1. Real app screens from Mylo and Let's Hang swipe across a phone: home, a key flow, success.
  2. A "Build 12 · Friday" label ticks up once, to show weekly builds.
  3. Back to the first screen.

## Brief 19 · Automation loop
- **File:** `public/videos/services/automation.mp4`
- **Scenes:**
  1. Four steps light up in a line: Payment received, Receipt sent, Sales sheet updated, WhatsApp to owner.
  2. A small card travels along the line.
  3. The final step shows a tick.
  4. Reset.
- **Look:** clean nodes with hairline connectors, Lucide icons, blue only on the active step.

## Brief 20 · Motion and film loop
- **File:** `public/videos/services/motion.mp4`
- **Scenes:**
  1. Quick but calm cuts (about 1.5s each) between frames of real Wintech films: Mylo, Virelle, Manzeelatur, inDrive, Lagos Life.
  2. A thin playhead scrubs along a timeline at the bottom.
  3. The timecode counts up.
  4. Loop.

---

# P3 · Motion work section

The Work page has a "Motion" section, hidden until these exist. Each piece already exists as a social video. The site needs a 16:9 cut for the card and the full video in a lightbox.

- **Card loop:** 1280 x 720, 6 seconds, silent, under 2.5MB.
- **Full video:** the original master at 1080 x 1920 or 1920 x 1080, with sound, opened on click.

## Brief 21 · inDrive spec ad ("Feel the Fairness")
- **Files:**
  - card loop: `public/videos/motion/indrive-card.mp4`
  - full video: `public/videos/motion/indrive.mp4`
- **Card loop:** the strongest 6 seconds (the fare offer moment), reframed to 16:9, ending on the same frame it starts.
- **Label on the site:** "Spec ad · inDrive". Keep "spec" visible; it was not commissioned.

## Brief 22 · Lagos Life explainer
- **Files:**
  - card loop: `public/videos/motion/lagos-life-card.mp4`
  - full video: `public/videos/motion/lagos-life.mp4`
- **Card loop:** the game map and characters moment, reframed to 16:9.
- **Label on the site:** "Explainer · Lagos Life (spec)".

## Brief 23 · Life of the Party launch film
- **Files:**
  - card loop: `public/videos/motion/life-of-the-party-card.mp4`
  - full video: `public/videos/motion/life-of-the-party.mp4`
- **Card loop:** the 3D rave room filling up, reframed to 16:9.
- **Label on the site:** "Launch film · Life of the Party".

## Brief 24 · Miol Luxe spec ad
- **Files:**
  - card loop: `public/videos/motion/miol-luxe-card.mp4`
  - full video: `public/videos/motion/miol-luxe.mp4`
- **Card loop:** the hero product moment, reframed to 16:9.
- **Label on the site:** "Spec ad · Miol Luxe".

---

# P3 · Extra card loops (if you want all seven cards moving)

## Brief 25 · Let's Hang card loop
- **File:** `public/videos/cards/lets-hang.mp4`
- **Size and length:** 1312 x 984, 8 seconds, loop, silent.
- **Scenes:** pins appear on the map, Peek, then "Join hang". Back to the map.
- **Source:** a screen recording of the live demo.
- **Code change:** set Let's Hang's card to motion in `src/data/cases.ts`.

## Brief 26 · CardioRisk card loop
- **File:** `public/videos/cards/cardiorisk.mp4`
- **Size and length:** 1312 x 984, 8 seconds, loop, silent.
- **Scenes:** the risk gauge fills to a band, then the top three factors appear as bars. Back to the start.
- **Code change:** set CardioRisk's card to motion in `src/data/cases.ts`.

---

## Checklist when sending files back
- [ ] Correct file name and folder, as listed above.
- [ ] Exact size, and no audio (except the full motion work videos).
- [ ] First frame matches the poster image.
- [ ] Loops cleanly (watch the last second into the first).
- [ ] Under the file size limit.
