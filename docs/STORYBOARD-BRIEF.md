# Motion storyboards: shared brief (Figma)

Oladele wants a storyboard designed in Figma for every website motion in docs/MOTION-BRIEFS.md. The storyboards are a guide for him to animate from. They are not exported.

He also flagged a problem: too many briefs reused the same idea (logo, then screens, then logo). Each motion must now have its own distinct, bold concept that suits where it plays on the site. The concepts below are set; build them, and push them to be "crazy and cool" while staying on brand and using real work.

## Where
- Figma file "Wintech Studio Website v5", fileKey `kQl8LQLi5xdRVVyXF3R4NZ`.
- Do your own `create_session` for this file.
- Read skill://figma/figma-use/SKILL.md via ReadMcpResourceTool before any use_figma call.
- use_figma returns at most ~48KB, so build one storyboard per call or less. If a call says "connection lost", retry.
- Create ONLY your own new page (named in your task) and touch nothing else.
- Real assets live in this file:
  - case study frames (C1 Mylo, C2 Virelle, C3 Manzeelatur, C4 Tobel, C5 Let's Hang, C6 CardioRisk, C7 Virtual Trades);
  - their films, galleries ("Grid · masonry (parallax columns)") and chapter images;
  - service pages and the home page.
- Find assets with findAll by name, then **clone** them into your panels and scale or crop them (clipsContent frames). Never move or edit the originals.
- Wintech Templates screens are in file `sSPMODTzF6lyMnCSUhH0rd` if needed. Prefer this file.

## Storyboard format (one Section per motion)
1. **Section name:** `Brief N · <name> · <concept title>`.
2. **Header card** (left, 560 wide, white, 1px hairline, padding 32). It holds:
   - brief number and name;
   - concept title (Figtree 600, 32);
   - the idea in 2 or 3 sentences;
   - why it works on the site;
   - spec line: file path, size, length, loop or once, silent;
   - look: palette with swatches;
   - the poster it must start and end on.
3. **Keyframe panels**, left to right, 5 to 8 per motion. Each panel is a frame at the motion's true aspect ratio:
   - 4:3 cards: 480 x 360
   - 16:9: 512 x 288
   - tall films: keep their ratio at 512 wide
   - 4:3 service loops: 480 x 360

   Each panel shows the actual composition, built from cloned real assets plus simple shapes and type. Under each panel put a caption block:
   - timecode (e.g. `0:00 – 0:01.5`, using an en dash or "to", never an em dash);
   - scene title;
   - "On screen" (what we see);
   - "Motion" (what moves, direction, easing, e.g. "slide up 40px, ease out expo, 400ms");
   - "Transition" (cut, match cut, morph, whip);
   - optional "Text on screen".
4. **Annotations** on the panels: thin blue #3B5BFF arrows and dashed paths showing direction of movement, and small numbered dots for the order of events. Keep them on their own layer group named `annotations` so they can be hidden.
5. **Timeline strip** under the panels: a hairline bar for the full duration with tick marks at each keyframe and the loop point marked "loop".
6. **Grouping:** each panel's artwork goes in its own group, with captions as separate text groups. Use auto layout for the caption blocks.
7. **Page layout:** at the top, a page title frame listing every storyboard on the page and its concept in one line. Below it, sections stacked vertically with 200px gaps.

## Style
- Figtree 400/500/600 only.
- Ink #0A0E17 and paper white, hairlines rgba(10,14,23,.10), blue #3B5BFF for annotations and primary accents.
- Each piece's own palette applies inside its panels (Mylo black and ash, Virelle forest and marigold, Manzeelatur navy and gold, Virtual Trades near-black and violet, Tobel blue and orange, Let's Hang lilac, CardioRisk white, black and red).
- No emoji, no em dashes, no Instrument Serif. Lucide icons.
- Never invent client logos, testimonials or metrics.

## The concepts (one per motion; every one must feel different)

### Card loops (4:3, 1312x984, 6 to 10s, silent)
- **B1 Mylo · "One jump, three worlds".** The white Mylo character leaps from phone to phone like a platform game: it lands on Today (the plan lights up), springs to the chess board (a piece moves), then lands on the egg (it cracks). Its last jump lands back on the wordmark, which is the loop point.
- **B2 Virelle · "Seal of trust".** A macro camera on the printed tamper seal. The seal peels back, the camera dives through the opening into the store UI (products, expiry date, Pay with Paystack), the order confirms, and the seal presses shut again for the loop.
- **B3 Manzeelatur · "Ink to star".** A calligraphy stroke draws the seal. The same stroke becomes the path a child's finger traces in the app's letter lesson. When the trace completes, a gold star bursts, shrinks and settles as the jewel at the centre of the seal, which is the loop.
- **B4 Virtual Trades · "Card to cash".** A gift card flips in 3D and shatters into digits that fly into the phone and count up as a naira balance (₦152,400). The status ticks from submitted to verifying to paid, then the digits reassemble into the card for the loop.
- **B25 Let's Hang · "Pin rain".** Pins rain onto a city map and settle into a cluster. The camera zooms into one pin, Peek opens, and "Join hang" fills the screen with friends' avatars. The view zooms out to the rain for the loop.
- **B26 CardioRisk · "Heartbeat to answer".** A single ECG line runs across the white screen. Its peak bends into the risk gauge needle and the gauge fills to 23.4%. The line then breaks into the three top-factor bars rising like a waveform, and flattens back to the ECG for the loop.

### Hero "now playing" films (16:9, 1280x720, 7s)
- **B5 Mylo · "A day in three phones".** The three phones sit side by side while the light behind them moves from sunrise to noon to night. Each phone shows that time of day in Mylo (morning plan, afternoon chess, night pet). Slow push-in.
- **B6 Virelle · "One take order".** A single continuous camera move with no cuts: shelf of real products, the laptop store, the cursor adds to cart, Paystack, then a doorstep box with the seal. It whips back to the shelf for the loop.
- **B7 Let's Hang · "From chat to map".** Group chat bubbles ("Who's out tonight?") float up off a phone and turn into pins as they land on the map. One pin pulses and the hang card opens.

### Case study films
- **B8 to B11:** existing films (Mylo 16s, Virelle 13s, Manzeelatur 34s, Virtual Trades 16s). Storyboard them as an export map: 5 to 6 keyframes from the film poster or frames, and the trim and loop points. Note "remove play button" and "silent site version".
- **B12 Tobel Pearls · "Five days, maximum".** A big counter runs DAY 1 to DAY 5 while guide pages fly past like a flipbook (logo, colour, type, bird and fish marks). On DAY 5 the branded truck drives through frame and the camera follows it to the billboard. End on the guide cover.
- **B13 Let's Hang · "Thumb's eye view".** A POV hand holds the phone over a blurred Lagos night street, using the real demo screens: map, Peek, join, live room. Show tap ripples at each touch point.
- **B14 CardioRisk · "Numbers to a heart".** Fifteen routine measurements (BP 128/82, cholesterol and so on) float as numbers, swarm into a heart shape, and the heart resolves into the clean results UI with the 23.4% risk band and the factor bars.

### Service loops (4:3, 1168x876, 6 to 8s), home "How we help"
- **B15 Brand · "One mark, every surface".** A single mark stamps in rhythm across real surfaces, one per beat: business card, jar label, truck side, phone app icon, billboard (real Tobel and Virelle work). The last stamp lands on a blank panel for the loop.
- **B16 Websites · "Wireframe to sale".** Grey wireframe blocks snap into the real Virelle store one block per beat. The cursor buys and "Order received ₦18,500" drops in. Then it all un-snaps back to wireframe.
- **B17 AI assistant · "2am".** A dark room with a phone on a table; the clock reads 2:00 AM. A customer message lights the screen, the AI answers with the delivery fee, and an order lands. Light turns to morning and the owner's hand picks up the phone to see "1 new order". Night returns for the loop.
- **B18 Apps · "Friday flipbook".** A stack of phones flips like a flipbook. Each flip is a Friday build ("Build 9", "Build 10", "Build 11"), and the real app screens get more complete each time (Mylo screens). The final build launches with an App Store badge.
- **B19 Automation · "Domino".** A payment notification tips the first domino. Each domino is a step (receipt sent, sheet updated, stock checked, WhatsApp to owner) with a Lucide icon on its face. The last one rings a phone, then the dominoes stand back up for the loop.
- **B20 Motion · "The edit".** An editing timeline. Real Wintech film frames drop onto the tracks as clips, the playhead plays across them, and the preview window above shows each clip. The timecode runs, then the timeline clears for the loop.

### Motion work cards (16:9, 1280x720, 6s; the full video opens on click)
- **B21 inDrive · "Name your price".** Frame the existing ad's fare-offer moment. A slider sets the fare, a driver accepts, and the label reads "Spec ad".
- **B22 Lagos Life · "City in a browser".** Isometric Lagos game map panning, with characters moving. Label "Explainer · spec".
- **B23 Life of the Party · "Room fills up".** The 3D rave room goes from empty to full in 6s, with lights pulsing on the beat.
- **B24 Miol Luxe · "The unboxing".** The luxury bag reveal moment from the ad, with a slow push.

For B21 to B24 the original videos may not be in this file. If no frames exist, build the panels from simple shapes and type that describe the shot, and mark them "placeholder: replace with frame from the original ad".
