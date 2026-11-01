# Plugging your model into the estimator

The estimator on `quote.html` currently answers from a small rule table in
`js/main.js` (`RULES` + `localEstimate`). It returns instantly and makes no
claim about being AI.

When your model is ready, set one value in `js/config.js`:

```js
AI_ENDPOINT: 'https://your-api.example.com/estimate'
```

Nothing else needs to change. The rules stay in place as the fallback, so if
the endpoint is down or slow the visitor still gets a number instead of an
error.

## What the site sends

`POST` with `Content-Type: application/json`:

```json
{
  "need":  "auto | app | web | brand | growth | unsure",
  "stage": "est | pre | post | idea",
  "when":  "now | month | later",
  "brief": "free text, whatever they typed"
}
```

## What your endpoint must return

```json
{
  "low": 8,
  "high": 18,
  "timeline": "6 to 10 weeks",
  "includes": [
    "A support agent trained on your range",
    "Escalation rules",
    "A path from answer to order"
  ],
  "note": "Optional line shown under the range."
}
```

- `low` and `high` are **thousands of USD**, rendered as `$8K – $18K`.
- `timeline` and `note` are plain strings. Both may be empty.
- `includes` is an array of short strings. May be empty.

Any non-200 response, a network failure, or malformed JSON falls back to the
local rules silently. The visitor sees a range either way.

## Copy that changes when you switch it on

While `AI_ENDPOINT` is blank the result appears immediately with no loading
state, because pretending to think is worse than being fast. Once the endpoint
is set, the panel shows *"Reading your brief…"* while the request is in
flight — that message is honest only when a model is genuinely reading it.

If you want the buttons to say "Estimate with AI" again rather than
"See a price range", that label lives in `partials/nav.html` and in each
page's hero. Change it, then run `python3 tools/build.py`.
