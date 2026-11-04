# Wintech Templates v4, round 3: the platform flows (4 Nov 2026)

Read docs/TEMPLATES-V4-BRIEF.md and docs/TEMPLATES-V4-ROUND2.md first. Every rule in them still applies:
- Same Figma file: sSPMODTzF6lyMnCSUhH0rd.
- Create your own session.
- Read skill://figma/figma-use/SKILL.md before using use_figma.
- Set `figma.skipInvisibleInstanceChildren = false` before editing instances.
- Reuse page 18's tokens and components ("v4 App tokens", Sidebar, Top bar).
- Make sure no frame has full-height empty space at the bottom.

**Working product name:** keep "Wintech Templates" for now. A rename is coming, so put the product name in as few text layers as possible (logo lockup and page titles) so it can be swapped later.

## What Oladele asked for (4 Nov), in his words where it matters
1. **Business owner sign-up and site creation.** He has not seen the business owner (client) journey yet: sign up, then create a website. He has only seen the designer side.
2. **Signup with the Wintech AI mascot.** Model it on the reel he sent:
   - a small dark square with two eyes, next to a speech bubble that reacts as you type;
   - "Hi Adrien!" once a name is typed;
   - "That looks right." when the email is valid;
   - "Check your inbox." on the 6-box code;
   - "I'm not looking." with the eyes shut while a password is typed;
   - Google and Apple buttons, "X builders already joined" (use no number: "Join business owners across Nigeria"), and a "Create my free account" button.

   The Wintech AI face already exists in the Studio site (AiFace: a dark rounded face with two pill eyes). Use that face as the mascot and give it these states.
3. **Each website type gets its own dashboard.** Use the Framer-style categories:
   - Store (physical products)
   - Digital products (files, courses, presets; upload, then automatic delivery after payment)
   - Bookings and services
   - Portfolio (upload videos and pictures, projects)
   - Restaurant/food (menu and orders)
   - Events (tickets)

   A customer can own several sites of different types. The sidebar changes per type.
4. **Money protection** ("we don't want to leave a gap for scamming"). Buyer payments go into a protected balance:
   - a 24-hour window in which the buyer can ask for a refund or report the seller;
   - after that, funds become "available" and are paid out on a schedule (2 to 3 days) minus fees.

   Show the seller: pending, protected, available, and paid out, with dates. Show the buyer: their protection (refund or report within 24 hours) on the order confirmation and the email receipt. Add an admin dispute review.
5. **Inbox for now.** Messages come from the website contact and enquiry forms only. Wintech AI drafts the reply. The owner taps "Reply by email" (sent from the platform to the customer's email), and also gets a "Copy for WhatsApp" version to paste. WhatsApp and Instagram DMs show as "Coming soon" with a waitlist toggle.
6. **Domains with no stress.**
   - **Own domain:** type the domain; the system detects the registrar and, where supported, connects automatically through one-click provider login (Domain Connect or Entri style). If not supported, it shows the exact two records with copy buttons, live checking and a "We'll email you when it's live" note.
   - **New domain:** search, see the price in naira, pay with Paystack, and it connects itself.
   - Include .com.ng and .ng.
7. **Designer flow with Claude and the MCP.** Designers build or vibe-code a template with Claude (or in Figma), connect their designer account to Claude through the Wintech MCP connector, and Claude submits the template. Show:
   - connect Claude (OAuth);
   - in Claude, "Submit to Wintech Templates" (a mock Claude chat showing the tool call);
   - the submission arriving in the designer dashboard with an automatic check: responsive, speed, forms wired, accessibility, licence of fonts and images;
   - human review;
   - live in the marketplace.

   Also show the alternative route: import from Figma (the Figma plugin) or upload a zip.
8. **How template functions work.** Designers mark sections and forms with data types (contact form, booking slot, product list, gallery). The platform wires them to the owner's database automatically. Show this as the "Functions" step in submission (a form detected, mapped to "Enquiries"; a product grid mapped to "Products").
9. **Marketplace taxonomy, Framer style.**
   - **Templates.** Categories with sub-categories:
     - Portfolio: artist, designer, photography, resume.
     - Store: beauty, digital, fashion, furniture.
     - Services: consulting, education, home, legal.
     - Health: fitness, medical, therapy, wellness.
     - Food and hospitality: food, hotel, restaurant, travel.
     - Events: conference, music, sports, weddings.
     - Real estate: agent, construction, listing.
     - Church and community.
     - Software: AI, apps, fintech, SaaS.
     - Agency.
   - **Template filters:** Free/Paid; Trending/Best/Recent; and style (3D, animated, black and white, colourful, gradient, grid, illustrative, lifestyle, light, minimal, modern, monochromatic, pastel, professional, retro, typographic).
   - **Components:** buttons, forms, galleries, maps, sections, navigation, footers, carousels, effects, text, backgrounds, cursors, players, loaders, charts, cards, accordions.
   - **Plugins:** AI, e-commerce, localization, styles, CMS, integrations, media, utilities, SEO.

   Designers can sell all three. Owners can swap a section (for example, pick another footer) from the components library inside the editor.
10. **AI for everyone.** Two advisers:
    - **Designers:** a pricing adviser that recommends a price from category, comparable sales and quality score, and a weekly "what to improve" note based on how buyers use the template.
    - **Owners:** insights such as "Visitors leave on your price page; try showing delivery fees earlier."
11. **Motion templates and the Instagram-to-content studio.**
    - **Motion templates:** clients edit the words, colours and logo on a motion template and render it in the cloud. There is no computer needed on their side.
    - **"Paste your Instagram link":** Wintech AI reads the public profile and posts, understands the services, and proposes a content pack (posts, a story set, a 15-second promo video). Generation runs on Wintech's cloud computer and uses usage from the owner's plan.
12. **Usage instead of credits.** Show plan usage like Claude does:
    - a usage meter that resets monthly, with "light, standard and heavy" jobs explained;
    - top-up packs for extra usage.
13. **Link back to Wintech Studio.** In the app and on the marketplace: "Need a custom site or app? Wintech Studio builds it for you", linking to wintechstudio.com.
14. **Micro-interactions.** Oladele wants space for them. On key frames, add a small annotation layer (named "motion notes", hidden by default) describing the micro-interaction: hover, success tick, counter, mascot reaction, toast.
