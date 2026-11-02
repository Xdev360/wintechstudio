# Motion list: project card loops

Four cards are set to motion in `src/data/cases.ts` (`card.kind: 'motion'`): Mylo, Virtual Trades, Virelle Wellness and Manzeelatur Ridho. These are the four cases that already have a film made in Figma Motion, so each loop can be cut from real footage. Tobel Pearls, Let's Hang and CardioRisk stay as image cards.

Until a file exists, the card shows its cover (`public/images/cases/cover-<slug>.webp`) with a small "Film" chip. Drop the mp4 into the path below and the card switches to video on the next build. Nothing else needs changing.

## One file per case, used in three places

Each case gets one loop. It plays in every card that shows that case:

| Where | Media box at 1440 | At 2x |
|---|---|---|
| Work index card (`/work`) | 572 x 429 (4:3) | 1144 x 858 |
| Home case row (`/`, Mylo, Virelle, Manzeelatur only) | 646 x 490 (about 4:3) | 1292 x 980 |
| "More case studies" card (bottom of case pages) | 368 x 257 (about 1.43:1) | 736 x 514 |
| Phone (all three) | 358 to 390 wide, about 4:3 | covered by the master |

**Export size: 1312 x 984 (4:3).** This covers the largest box at 2x. The video fills each box with object-fit cover, so:
- **Safe area:** keep logos, headlines and key UI inside the centre **1280 x 900**.
- The "More case studies" card crops about 35px off the top and bottom.
- The home row crops a few px off each side.

## Spec for every loop

- **Length:** 6 to 10 seconds, as a seamless loop. The last frame must cut cleanly back to the first, so end on the same framing you start on.
- **Format:**
  - `mp4`, H.264, yuv420p, 30fps, `-movflags +faststart`.
  - Optional `webm` (VP9) with the same name next to it. The card picks it up automatically.
- **Audio:** none. Strip the track.
- **File size:** under 3MB each. Around 2 to 2.5 Mbps at this size is usually enough.
- **Poster:** already in place (`cover-<slug>.webp`). Make the first frame of the loop look close to the cover so the swap is not jarring.
- **Pace:** slow and readable. One idea per loop, no fast cuts. Cards sit side by side, so calm motion reads better than busy motion.

Example encode:
```
ffmpeg -i in.mov -an -vf "scale=1312:984:force_original_aspect_ratio=increase,crop=1312:984,fps=30" -c:v libx264 -pix_fmt yuv420p -crf 24 -preset slow -movflags +faststart public/videos/cards/<slug>.mp4
ffmpeg -i in.mov -an -vf "scale=1312:984:force_original_aspect_ratio=increase,crop=1312:984,fps=30" -c:v libvpx-vp9 -b:v 0 -crf 36 public/videos/cards/<slug>.webm
```

## The four loops

### 1. Mylo
- **File:** `public/videos/cards/mylo.mp4` (optional `mylo.webm`)
- **Shows on:**
  - Work index (first card);
  - home case row 1;
  - "More case studies" on other case pages.
- **Background:** black and ash, matching the dark brand.
- **What to show:** cut from the 16s homepage film with the three phones.
  1. Open on the Mylo wordmark and the white Mylo character, as on the cover.
  2. Then show the three sides of the app, one after another, using the real screens:
     - Today, with the plan and streak;
     - a chess match with a friend;
     - the pet egg hatching.
  3. End back on the wordmark frame to loop.

### 2. Virtual Trades
- **File:** `public/videos/cards/virtual-trades.mp4` (optional `virtual-trades.webm`)
- **Shows on:**
  - Work index (second card);
  - "More case studies" on other case pages.
- **Background:** near black, one violet and the diagonal light.
- **What to show:** cut from the 16s homepage film.
  1. The phone shows the Sell flow: choose a card, see the naira quote, then the status moving from submitted to verifying to paid.
  2. The gift card and the BTC, USDT and ETH coins drift gently around the phone, as on the cover.
  3. Close on the hero line "Trade gift cards and crypto. Get paid in naira, in minutes." to loop.

### 3. Virelle Wellness
- **File:** `public/videos/cards/virelle.mp4` (optional `virelle.webm`)
- **Shows on:**
  - Work index (third card);
  - home case row 2;
  - "More case studies" on other case pages.
- **Background:** forest green with the marigold accent.
- **What to show:** cut from the 13s homepage film ("original, sealed, dated").
  1. The store opens on the homepage.
  2. The real products line up, such as the fragrance mist and the supplements, with the expiry date visible on a listing.
  3. The order is placed and the printed seal closes it.
  4. Return to the cover framing ("E-commerce + AI assistant", products on green) to loop.

### 4. Manzeelatur Ridho
- **File:** `public/videos/cards/manzeelatur-ridho.mp4` (optional `manzeelatur-ridho.webm`)
- **Shows on:**
  - Work index (fourth card);
  - home case row 4;
  - "More case studies" on other case pages.
- **Background:** the light lapis palette from the cover, or the midnight navy from the film.
- **What to show:** take the opening of the 34s brand film.
  1. The seal draws in and the name appears in English and Arabic.
  2. The child app follows on a phone, showing the lesson loop: listen, try, play, earn a star.
  3. Gold appears only on the star moment.
  4. Hold the seal frame at the end so it loops.
- **Length:** keep it under 10s; this is a cut-down, not the full film.

## If you later want more motion cards

Set `card: { kind: 'motion', video: '/videos/cards/<slug>.mp4', poster: '/images/cases/cover-<slug>.webp' }` for that case in `src/data/cases.ts`, and follow the same spec. Good next candidates:
- **Let's Hang:** pins appearing on the map, Peek, then joining a hang. This can be screen-recorded from the live demo.
- **CardioRisk:** the risk gauge filling to a band, then the top factors as bars.
