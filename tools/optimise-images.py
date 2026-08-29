#!/usr/bin/env python3
"""
Turns images/*.png into responsive WebP in images/opt/.

Run after dropping a new project screenshot into images/:

    python3 tools/optimise-images.py

Needs Pillow:  python3 -m pip install --user Pillow
"""

import pathlib
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is missing. Run: python3 -m pip install --user Pillow")

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "images"
OUT = SRC / "opt"
WIDTHS = [640, 1000, 1600]
QUALITY = 80


def main() -> int:
    OUT.mkdir(exist_ok=True)
    sources = sorted(p for p in SRC.glob("*.png"))
    if not sources:
        print("no PNGs in images/")
        return 0

    before = after = 0
    for src in sources:
        im = Image.open(src).convert("RGB")
        w, h = im.size
        before += src.stat().st_size
        made = []

        for target in WIDTHS:
            if target > w:
                continue
            dest = OUT / f"{src.stem}-{target}.webp"
            im.resize((target, round(h * target / w)), Image.LANCZOS).save(
                dest, "WEBP", quality=QUALITY, method=6
            )
            after += dest.stat().st_size
            made.append(f"{target}w {dest.stat().st_size // 1024}KB")

        print(f"{src.stem:18} {w}x{h}  ->  " + ", ".join(made))

    print(f"\nsource PNG: {before / 1048576:.1f} MB")
    print(f"WebP total: {after / 1048576:.1f} MB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
