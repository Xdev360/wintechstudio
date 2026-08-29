/* ──────────────────────────────────────────────────────────────
   Wintech Studio — site config
   Everything you might need to change lives in this one file.
   ────────────────────────────────────────────────────────────── */

window.WINTECH = {

  /* Where every "Book a call" button goes. */
  CALENDLY: 'https://calendly.com/wintechstudio/30min',

  /* Where the contact form POSTs a JSON brief.
     Leave blank and the form falls back to opening the visitor's
     mail client with the brief pre-filled (needs EMAIL below).
     Works with Formspree, Basin, Web3Forms, a Vercel function, etc. */
  FORM_ENDPOINT: '',

  /* Studio inbox. Used for the mail fallback above and shown on
     the contact page. Leave blank to hide it. */
  EMAIL: '',

  /* The estimator.
     Blank  = the built-in rules run instantly, no fake "thinking".
     Set it = the answers are POSTed as JSON and your model replies
              with { low, high, timeline, includes[], note }.
     See README-ESTIMATOR.md for the exact contract. */
  AI_ENDPOINT: '',

  /* Shown next to the availability dot. Set to null to hide the
     line completely rather than run an unverifiable countdown. */
  NEXT_START: 'Next start: November'
};
