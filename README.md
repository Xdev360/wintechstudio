# Wintech Studio

The website for [Wintech Studio](https://wintechstudio.com), a design and build studio in Lagos working with startups and small businesses worldwide.

**Live:** [wintechstudio.com](https://wintechstudio.com)

I designed it in Figma and built it in Astro. Every page, component and motion loop in this repo is mine.

## What's in it

- **Home, Work and case studies.** Real client projects, including [Mylo](https://wintechstudio.com/work/mylo), [Virelle](https://wintechstudio.com/work/virelle), [Manzeelatur Ridho](https://wintechstudio.com/work/manzeelatur-ridho) and [Tobel Pearls](https://wintechstudio.com/work/tobel-pearls). Each one is generated from a single data file.
- **Services and a brief builder.** Visitors pick what they need and send a structured brief instead of a blank contact form.
- **Pricing, monthly plans and templates.** These cover the custom builds and [Wintech Templates](https://wintechstudio.com/templates), the site builder that publishes small-business websites on `name.wintechstudio.com`.
- **Guides, comparisons, an industry page and a glossary.** These are written for search and for AI answer engines (`llms.txt`).
- **An AI assistant.** A chat panel answers questions about the studio. It runs as a Vercel serverless function in `api/ai.js`.
- **Motion.** Silent looping product films replace the still images once they load. They are made from real Figma layers, rendered frame by frame in code and encoded with ffmpeg (`motion-src/`).
- **Light and dark themes.** The site also has optional UI sounds and scroll effects.

## Stack

| Layer | Tools |
| --- | --- |
| Design | Figma, FigJam |
| Framework | Astro 7 |
| Type | Figtree, Geist Mono |
| Styling | Hand-written CSS with design tokens (`src/styles/tokens.css`) |
| AI | Anthropic SDK in a Vercel function |
| Motion | HTML render pages, a headless browser and ffmpeg |
| Hosting | Vercel, with a sitemap from `@astrojs/sitemap` |

## Project structure

```
src/
  components/   home, work, services, search and UI blocks
  data/         case studies, services and site config (content lives here)
  layouts/      base and page layouts
  pages/        routes, including work/[slug] and services/[slug]
  styles/       tokens and page styles
api/            AI assistant endpoint (see api/README.md)
motion-src/     source and pipeline for every motion loop (see PIPELINE.md)
docs/           design specs and briefs used during the rebuild
public/         images, videos, icons and the archived previous site
```

## Run it locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

The AI assistant needs an `ANTHROPIC_API_KEY` environment variable on Vercel. The rest of the site works without it.

## Contact

Built by [Ibraheem Oladele](https://github.com/Xdev360), design engineer.
[xbigbrainnx@gmail.com](mailto:xbigbrainnx@gmail.com) · [X](https://x.com/xbigbrainnx) · [Behance](https://www.behance.net/xbigbrainnx)
