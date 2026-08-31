# Wintech AI endpoint

`api/ai.js` is the assistant behind the chat panel. It runs as a Vercel
serverless function at `/api/ai`.

## Turning it on

1. **Install the dependency**

   ```bash
   npm install
   ```

2. **Add your Anthropic API key to Vercel.** Get one from
   <https://console.anthropic.com> → API keys.

   ```bash
   vercel env add ANTHROPIC_API_KEY production
   ```

   Or in the dashboard: Project → Settings → Environment Variables →
   `ANTHROPIC_API_KEY`. Add it to Production, Preview, and Development.

   The key lives only in Vercel. It is never in the repo, never in the
   browser, and never sent to a visitor. Every call goes through this
   function, which is the whole reason it exists.

3. **Deploy.**

   ```bash
   vercel --prod
   ```

## Running it locally

`python3 -m http.server` serves static files only, so `/api/ai` will 404
and the panel falls back to its scripted answers. To run the real thing:

```bash
vercel dev
```

That serves the site and the function together on one port, reading the
key from `.env.local`.

## What it costs

Claude Opus 5 is $5 per million input tokens and $25 per million output.
A typical exchange here is roughly 900 input tokens (the brief is cached
after the first call) and about 150 output, so on the order of a cent per
conversation. The system prompt uses a cache breakpoint, so repeat calls
within the cache window read the brief at a tenth of the input price.

If volume ever makes that matter, change one line in `api/ai.js`:

```js
model: 'claude-haiku-4-5',   // $1 / $5 per million
```

Haiku handles this kind of scripted-brief Q&A well. Opus is the default
because the assistant is a live demo of what you sell.

## Changing what it says

The `SYSTEM` constant at the top of `api/ai.js` is the single source of
truth: services, prices, timelines, the five live products, and the fit
criteria. Edit it there. The scripted fallback answers in `js/config.js`
should be kept roughly in step so both paths tell the same story.

## Failure behaviour

If the key is missing, the endpoint is down, or the network fails, the
panel falls back to the scripted answers in `js/config.js`. A visitor
never sees an error state.
