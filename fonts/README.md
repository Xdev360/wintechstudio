# Gellix

## Licence — read this before launch

The copy on this machine (`~/Downloads/gellix-font-family`) ships with:

```
License: Personal Use Only
https://befonts.com/gellix-font-family.html
```

Every file is a `-TRIAL` build. This website is commercial work meant to
win paying clients, which is **not** personal use. Those files cannot be
deployed.

So they are not. `fonts/*.woff2` is listed in both `.gitignore` and
`.vercelignore`, which means the converted files stay on your machine,
never enter the repo, and never reach the CDN. Production renders in
Satoshi until a licence is bought.

Buy from the foundry, or pick up Gellix on MyFonts / Fontspring. A single
web licence is the whole fix.

## Previewing locally right now

```bash
python3 tools/gellix-preview.py
```

That finds the `.otf` files, converts the four weights the site uses to
`.woff2`, and drops them in this folder. Reload and you are looking at
real Gellix. Full 759-glyph character set, so the preview is accurate.

## Going live, once licensed

1. Put the licensed files anywhere the script searches, or in `fonts/src/`.
2. Run `python3 tools/gellix-preview.py` again.
3. Delete the `fonts/*.woff2` and `fonts/*.woff` lines from `.gitignore`
   and `.vercelignore`.
4. Commit and deploy.

No CSS change at any point. The `@font-face` blocks at the top of
`css/styles.css` already point at these exact filenames:

```
fonts/Gellix-Regular.woff2     (400)
fonts/Gellix-Medium.woff2      (500)
fonts/Gellix-SemiBold.woff2    (600)   <- the display weight
fonts/Gellix-Bold.woff2        (700)
```

## Weights actually used

Every heading is **600 (SemiBold)**. Body and UI are 400 and 500. Nothing
uses 800. The single control is `--w-display` in `css/styles.css`.
