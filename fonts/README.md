# Gellix

Gellix is a licensed font, so the files cannot ship in this repo by default.
The CSS is already wired for it. Drop the files in **this folder** with these
exact names and Gellix takes over the whole site instantly:

```
fonts/Gellix-Regular.woff2     (400)
fonts/Gellix-Medium.woff2      (500)
fonts/Gellix-SemiBold.woff2    (600)   <- the display weight
fonts/Gellix-Bold.woff2        (700)
```

`.woff` versions with the same names are optional and used as a fallback for
older browsers. No CSS edit is needed.

## Until then

The site renders in **Satoshi** (Fontshare, free), which is the closest free
match to Gellix in width and geometry. Nothing looks broken without Gellix,
it just is not Gellix.

## Converting what you have

If you own Gellix as `.otf` or `.ttf`, convert to `.woff2` at
<https://cloudconvert.com/ttf-to-woff2> or with:

```bash
python3 -m pip install --user fonttools brotli
python3 -c "from fontTools.ttLib import TTFont; f=TTFont('Gellix-SemiBold.otf'); f.flavor='woff2'; f.save('Gellix-SemiBold.woff2')"
```

## Weights actually used

The site is set in **600 (SemiBold)** for every heading and **400/500** for
body and UI. Nothing uses 800. If a heading ever looks too heavy, the single
control is `--w-display` in `css/styles.css`.
