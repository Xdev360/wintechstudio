# DesignMe reference spec (measured live from designme.agency, 2 Nov 2026)

Oladele's instruction: follow DesignMe's sizes, spacing and structure exactly (they get results), keep Wintech's brand (logo, Figtree font, blue #3B5BFF, our copy and work). These numbers were measured with getComputedStyle at a 1440 wide viewport and in a 390 wide iframe. Use them as the source of truth for size/spacing/type; the Figma frames are only for content/brand.

Do NOT copy DesignMe's code, copy, images, logos or brand. Copy the measurements and layout patterns.

## Global
- Body text 16/24 regular. Muted text = 75% opacity of text colour; labels/eyebrows = 62% opacity.
- Eyebrow / section label: 11px, weight 500, line 14.3, letter-spacing 0.66px, uppercase, 62% colour.
- Section padding: 128px top and bottom on desktop (services 108/128), 64px on mobile (services 44/64).
- Container: 1200 content at 1440 (side padding 120). Mobile side padding 16.
- Section H2: 56px / 600 / line 64.4 / letter-spacing -1.12px. Mobile 36 / 600 / 41.4 / -0.72.
- Smaller H2 (FAQ): 42 / 600 / 48.3 / -0.84. Mobile 30 / 600 / 34.5 / -0.6.
- Intro paragraph under section H2: 18px / 500 / 27, centred blocks max ~640 wide. Mobile 16/500/24.
- Hairlines: 1px at 12% of text colour (light theme: rgba(3,17,28,0.10)). Radius almost everywhere 2px (buttons, tags, pills); cards square.
- Buttons: height 40, padding 0 24, 16px / 500, radius 2. Header button height 36, padding 0 16, 14px/500. Mobile buttons full width height 40, 15px/500.
- Text links: 14px / 600, underlined (offset ~3px), arrow "→" after.
- Light theme colours: page #FFFFFF, text #03111C (we use our ink #0A0E17), soft panel #FAFAFA, hairline rgba(3,17,28,.10). Dark theme: page #0F0F0F, panels #151515 / #1A1A1A, text #F5F5F5.

## Announcement bar (top strip)
- Height 32, padding 4px 40px, gap 12, centred. 14px / 400 at 75% white.
- Background is near-black #101010/#111 in BOTH themes, with a slow soft light sheen moving across (subtle gradient), and 1px bottom hairline rgba(245,245,245,.12). It must read as a separate strip from the nav, never the same colour as the nav in dark mode.
- NEW tag: 11px / 400, letter-spacing .44, padding 1px 8px, radius 2, white bg, dark text. Arrow 16x10.

## Header bar
- Height 75 (74 + 1px hairline). Container padding 0 40 inside 1280 (logo at x 120). Light: white bg, bottom hairline rgba(3,17,28,.10).
- Logo: wordmark height 18.
- Nav links: 14px / 500 / line 21, height 36, padding 0 12, gap 8 between label and "+" icon (14x14, thin 1.5 stroke). Items gap 4. Hover/open: pill bg 6% of text colour, radius 2.
- Right actions: sound + theme icon buttons 36x36 round (icons 18x18, 75% colour), gap 8; Book a call button 99x36 (14px/500, padding 0 16, radius 2).
- Mobile (390): bar height 67, padding 0 16; logo mark only (28px); right: sound 36, theme 36, menu toggle 40x40 drawn as a 3x3 dot grid (dots 3px). No Book button in bar.

## Mega menu (desktop)
- Panel 1200 wide aligned to the container, directly under the bar (no gap), page-colour background, 1px hairline border, no big shadow.
- Columns of equal width separated by 1px hairlines. Column title row: 11px / 400, letter-spacing .44, uppercase, 62% colour, padding 12px 16px, height 42, bottom hairline.
- Items: one line only, height 44, padding 8px 16px, gap 12. Label 16px / 500. Icon box 28x28 square with 1px hairline border and page-colour bg; icon inside 16x16 thin line icon (stroke 1.5, 62% colour). A small arrow (12x12) appears at the right on hover. NO two-line descriptions, NO 40px duotone icons.
- List padding 4px 0. Bottom footer row: hairline top, padding 4px 0, links in a row (14px, icon 16 inline), equal spacing.
- Third column may be a featured card: media 398x224 then a one-line link row (16/500) with icon.
- Panel height for 6 rows ≈ 363 total.

## Hero (home)
- Section 703 tall. Container padding 28 40 68; two columns: copy 784 wide, aside 352 wide, gap 64.
- Eyebrow at top (11/500/.66). H1 77.76px / 600 / line 1.0 / letter-spacing -1.5552px (2 lines). Mobile: 45.36 / 600 / 1.0 / -0.907.
- Sub 18 / 400 / 27 at 75%. Mobile 16/400/24.
- CTAs: gap 8, Book a call (primary) + See our work (soft grey bg). Mobile: both full width, stacked, gap 8.
- Aside "now playing": video/poster 352x198 (16:9), "Play film" chip bottom-left (13px/500, padding 4 8, dark 60% bg, radius 2); caption row: "NOW PLAYING" label (11/500) + client 14/600 + work list 14/400 at 62%; under it: 3 segment bars 32x2 gap 4 (track 24% / fill 100%) and "View case study →" 14/600 right aligned. Mobile: aside full width under the CTAs, media 358x201.
- Trust row at the bottom of the hero: facts 14px (value 600, label 75%) gap 24, then a full-width logo band: height 74, hairlines top and bottom, 5 cells of 240 separated by hairlines, grey monochrome client logos ~22px tall centred. Mobile: band scrolls horizontally (cells ~115 wide).

## Services accordion ("How we help")
- Centred intro (eyebrow, H2 2 lines, intro sub 640 wide).
- List starts 80 below. Each row: number 42px/600 (112 wide column) + title 42/600/-0.32, toggle "+"/"−" 32x32 in brand blue, thin. Row padding-bottom 24, 1px hairline between items. Closed row height ≈ 72.
- Open body: media 584x438 (left, soft grey bg, autoplay muted looping video or an animated illustration specific to that service) + copy 600 wide (padding-right 48, gap 24): desc 18/600/25.2, bullet list 16/400/24 at 75% (dot bullets, gap 4), link "Explore … →" 14/600 at the bottom.
- Mobile: no number column, title 24/600, toggle 24px, media full-bleed 390x293 above copy, desc 16/600.
- One open at a time; each service has its own animation in the media slot (that's the "custom development / brand identity animation" Oladele refers to).

## Cards row under services
- Two cards side by side, 20 gap, card bg panel colour, padding 80 20 40, centred text: logo/icon row on top (or a canvas/gradient flow), H3 32/600/-0.64, text 18/600 at full colour, link 14/600 with 24 top padding. Second card: label + H3 + text + horizontally scrolling marquee of 86x86 tiles (radius 12, 6% bg) with tool logos 28px.
- Mobile: stacked, H3 24, text 16/600, padding 40 20.

## Case studies (home and work index)
- Centred intro: eyebrow "Selected work" + H2 "Case studies".
- List gap 80 (mobile 40). Each case = one bordered row 1200x491 (hairline .5px), alternating media side: media 646x490 (autoplay video / animated product shot) and text side 553 wide, padding 32.
- Text side: meta row (client name 14/600 + tags: 14/400, padding 4 8, tinted bg e.g. orange 16% with orange text for funding/stage, neutral 6% for category) and year range right-aligned 13px muted; title 20/600/26 (-0.2) max ~2 lines; summary 16/400/24 at 75%; "Read the case study" link 14/600 underlined; then testimonial box (panel bg #FAFAFA light / #151515 dark, padding 20): quote 14/500/21, then avatar 44 round + name 16/600 + role 14/400 at 62%.
- Mobile: media on top full-bleed 390x294, text padding 20 16, title 18/600, summary 15, quote 13/500.
- If no testimonial exists for a case, leave the quote box out (never invent one).

## Testimonials section
- Left H2 (2 lines) with arrow buttons 44x44 (radius 4, inverted colours) at the right; horizontal slider of cards 363 wide (gap 16, padding 32, 1px hairline 24%), card: client logo + small arrow-link button 32x32, quote 24/600/31.2, foot with metrics (value 24/600, label 13) and avatar 44 + name 14/600 + role 13. Dots below + "More reviews on Clutch ↗".
- Only build when Oladele supplies real quotes.

## Team / about block
- Centred H2 + intro, two rows of square portraits (142px, gap 6) scrolling slowly, then 3 stat cards (hairline border, padding 24, value 56/600/-1.12, label 14 at 62%), button "Meet the team".

## FAQ
- Two columns: side 480 (eyebrow, H2 42px, "ask" card: panel bg, padding 24, avatars 48, title 24/600, text 16, Book a call button, small "Or email us → address" 14px) and questions 672 wide (gap 12): each question a panel-bg row 68 tall, padding 20, gap 20, with a 28x28 hairline tile on the left holding +/−; answer padding 8 20 24 68.
- Mobile: questions first, ask card after; H2 30px.

## Closing band
- Black, section padding ~252 top/bottom (839 tall), centred: eyebrow, H2 72/600/79.2/-1.44 (2 lines, ~520 wide), sub 18/600/27, one primary button. Animated light/glow media along the bottom 335 tall. Mobile: padding 196, H2 42/600/46.2, button 286 wide.

## Footer
- Clock row on top (11/500 labels, padding 16 0) with hairline.
- Brand row (padding 40 0): logo + tagline 18/500; partner badges on the right.
- Main (padding 48 0 80, gap 96): left 506 wide: heading 32/600/-0.64 ("Design, build, and …"), contact links 16/500 underlined, "Ask AI about …" 24/600 with 40x40 square icon buttons (gap 12) for ChatGPT/Claude/Perplexity etc; right 598: link grid (columns, title 11/500 labels, links 14/500 gap 8), addresses 14/500 at 75%, review badge box (hairline 24%, padding 20).
- Bottom row: hairline, padding 32 40, legal links + socials (gap 32).
- Mobile: single column, heading 24/600.

## Ask AI pill
- Fixed bottom centre ~20px from the bottom: 124x44, radius 999, white 92% + backdrop blur 14px, 1px hairline rgba(3,17,28,.1), shadow 0 8 28 rgba(0,0,0,.1), padding 0 18 0 14, 14px/500 label, face icon on the left.
- The face's eyes follow the cursor anywhere on the page (eyes translate a few px towards the pointer); sleep state until hover, then wakes and blinks.

## Mobile menu (from the 3x3 dot toggle)
- Full-screen sheet under the bar, large accordion rows, CTA at the bottom. Keep it simple and clearly grouped.

## Work index (designme.agency/work)
- Light page. Centred eyebrow "CASE STUDIES", H2 ~56px two lines, sub 18/500.
- Filter chips row centred (height ~40, padding 0 16, 15px, hairline border, active = dark fill white text, radius 2).
- Grid of 2 columns, gap ~20. Card = hairline border, padding 8, media on top (soft grey panel, ~4:3, product shot centred), then meta row (client 16/600 + tag chip + year right 13px muted) with a hairline under it, then title 20/600 two lines + a small 32x32 hairline arrow button at the right.

## Changes Oladele asked for on 2 Nov
- Remove the free tools entirely: nav item, announcement text, footer column, the /tools pages, and every "Plan your project" button (point those to /book "Book a call" instead). Keep /book.
- Mobile must be simple and clear, following the DesignMe mobile numbers above.
- No invented testimonials; leave testimonial slots out until real quotes arrive.
