#!/usr/bin/env python3
"""
Local Gellix preview.

Converts the Gellix .otf files you have into .woff2 in fonts/ so you can
see the real thing while designing.

  python3 tools/gellix-preview.py

IMPORTANT
The copy in ~/Downloads/gellix-font-family is licensed "Personal Use Only"
and every file is a TRIAL build. This site is commercial work, so those
files must not be deployed. The output of this script is listed in both
.gitignore and .vercelignore, so it stays on your machine and never
reaches the CDN. Production falls back to Satoshi until you buy a licence.

When you buy Gellix, run this again pointing at the licensed files and
remove the fonts/*.woff2 lines from .gitignore and .vercelignore.
"""

import pathlib
import sys

try:
    from fontTools.ttLib import TTFont
except ImportError:
    sys.exit("Run: python3 -m pip install --user fonttools brotli")

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "fonts"

SEARCH = [
    pathlib.Path.home() / "Downloads" / "gellix-font-family",
    pathlib.Path.home() / "Desktop" / "confidence-proposal" / "app" / "fonts",
    OUT / "src",
]

# weight -> the name fragments to look for, best first
WANT = {
    400: ["Regular"],
    500: ["Medium"],
    600: ["SemiBold", "Semibold"],
    700: ["Bold"],
}
NAMES = {400: "Regular", 500: "Medium", 600: "SemiBold", 700: "Bold"}


def find(fragment: str):
    for folder in SEARCH:
        if not folder.is_dir():
            continue
        for f in sorted(folder.glob("*.otf")) + sorted(folder.glob("*.ttf")):
            stem = f.stem
            if "Italic" in stem:
                continue
            # "Bold" must not match "SemiBold" / "ExtraBold"
            if fragment == "Bold" and any(x in stem for x in ("SemiBold", "Semibold", "ExtraBold", "ExtraBold")):
                continue
            if fragment in stem:
                return f
    return None


def main() -> int:
    OUT.mkdir(exist_ok=True)
    made, trial = 0, False

    for weight, fragments in WANT.items():
        src = next((s for s in (find(fr) for fr in fragments) if s), None)
        if not src:
            print(f"  {weight:<4} no source found")
            continue
        if "TRIAL" in src.stem.upper():
            trial = True
        dest = OUT / f"Gellix-{NAMES[weight]}.woff2"
        font = TTFont(str(src))
        font.flavor = "woff2"
        font.save(str(dest))
        made += 1
        glyphs = len(font.getGlyphOrder())
        print(f"  {weight:<4} {src.name:<34} -> {dest.name}  ({glyphs} glyphs, {dest.stat().st_size // 1024}KB)")

    print(f"\n{made} weights written to fonts/")
    if trial:
        print(
            "\n  !!  These are TRIAL files under a Personal Use Only licence.\n"
            "      They are gitignored and vercelignored, so they stay local\n"
            "      and never deploy. Buy a licence before launch."
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
