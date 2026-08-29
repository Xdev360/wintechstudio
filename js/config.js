/* ──────────────────────────────────────────────────────────────
   Wintech Studio — site config
   Everything you might need to change lives in this one file.
   ────────────────────────────────────────────────────────────── */

window.WINTECH = {

  /* Where every "Book a call" button goes. */
  CALENDLY: 'https://calendly.com/wintechstudio/30min',

  /* Shown on every booking button, e.g. "Book a 25-min call". */
  CALL_MINUTES: 25,

  /* Where the contact form POSTs a JSON brief.
     Leave blank and the form falls back to opening the visitor's
     mail client with the brief pre-filled (needs EMAIL below).
     Works with Formspree, Basin, Web3Forms, a Vercel function, etc. */
  FORM_ENDPOINT: '',

  /* Studio inbox. Used for the mail fallback above. Blank hides it. */
  EMAIL: '',

  /* ── Wintech AI ──────────────────────────────────────────────
     The studio's own assistant, running on this site.

     AI_ENDPOINT is the only thing it needs. Until you set it, the
     assistant runs in "scripted" mode: it still opens, still
     answers the common questions from ANSWERS below, and still
     hands people to Calendly. It just is not your model yet.

     Your endpoint receives:
       { messages: [{role:'user'|'assistant', content:'...'}] }
     and returns either:
       { reply: 'text' }
     or a text/plain stream, which the panel renders as it arrives.
     ──────────────────────────────────────────────────────────── */
  AI_ENDPOINT: '',
  AI_NAME: 'Wintech AI',
  AI_GREETING: 'Ask me what something costs, how long it takes, or what we would build for your situation.',

  /* Used only while AI_ENDPOINT is blank. Each entry is
     [keywords that must match, the reply]. First match wins. */
  AI_ANSWERS: [
    [['price', 'cost', 'much', 'budget', 'charge', 'rate'],
     'Sites and brand start at $5,000 and run three to four weeks. Product and automation start at $12,000 and run six to twelve. Most engagements land between $5K and $30K.\n\nIf you tell me what you are trying to fix, I can narrow that.'],
    [['time', 'long', 'timeline', 'weeks', 'deadline', 'fast'],
     'A site is three to four weeks. A product with an automation layer is six to twelve. A fast MVP can be four to six.\n\nWhatever the length, something usable ships every week, so you are never waiting in the dark.'],
    [['ai', 'automation', 'agent', 'chatbot', 'bot', 'support'],
     'We build the AI layer around how you already sell: support that answers, enquiry qualification that routes, an admin agent you can message on Telegram, and agents that book calls straight into your calendar.\n\nIt starts narrow, usually support, then widens once accuracy holds.'],
    [['website', 'site', 'web', 'shop', 'store', 'ecommerce', 'e-commerce'],
     'A site people can order from without waiting on a reply. Story, structure, SEO groundwork, and one obvious action at the end of it.\n\nVirelle Wellness Hub is the live example: they went from taking every order in Instagram DMs to a store that runs on its own.'],
    [['brand', 'logo', 'identity', 'design'],
     'Mark, type, colour, and the rules for applying them, built tight enough that someone on your team can use it without calling us.\n\nMost of our brand work ships alongside a site, because a brand that has only lived in a presentation has not been tested yet.'],
    [['mvp', 'idea', 'prototype', 'first version', 'startup'],
     'A fast MVP is one job, scoped hard, shipped in four to six weeks with real accounts and a working core flow.\n\nIf it works, the full product is the next conversation. If it does not, you found out in six weeks instead of six months.'],
    [['work', 'portfolio', 'example', 'case', 'built', 'project'],
     'Five live products: Virelle Wellness Hub, Mylo, Let’s Hang, Cyber Sweep, and Cleartext. You can open every one of them from the Work page.\n\nWant me to point you at the closest one to what you are building?'],
    [['who', 'team', 'you', 'studio', 'about'],
     'Wintech Studio is founder-led out of Lagos, working with businesses anywhere. Oladele runs the diagnostic, writes the build map, and ships the work, with build partners brought in for heavier product and AI jobs.\n\nFour projects at a time, so the weekly rhythm actually holds.'],
    [['start', 'begin', 'need', 'require', 'process', 'how do'],
     'Three things: clarity on what is slowing you down, access to whatever already exists, and one person who can make decisions.\n\nWeek one is a diagnostic. You leave that week with a one-page build map whether or not you continue.']
  ],

  /* Shown next to the availability dot. null hides the line. */
  NEXT_START: 'Next start: November'
};
