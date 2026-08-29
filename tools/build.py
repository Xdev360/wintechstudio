#!/usr/bin/env python3
"""
Wintech Studio — page assembler.

The nav, footer, head tags and script tags live once in partials/.
This stamps them into every .html page, between comment markers:

    <!--#nav-->  ... generated ...  <!--#/nav-->

Edit a partial, run `python3 tools/build.py`, and every page updates.
The output stays plain static HTML, so nothing changes about hosting.
"""

import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
PARTIALS = ROOT / "partials"
BLOCKS = ["head", "nav", "footer", "scripts"]


def main() -> int:
    parts = {}
    for name in BLOCKS:
        path = PARTIALS / f"{name}.html"
        if not path.exists():
            print(f"missing partial: {path}", file=sys.stderr)
            return 1
        parts[name] = path.read_text(encoding="utf-8").strip()

    pages = sorted(p for p in ROOT.glob("*.html"))
    if not pages:
        print("no pages found", file=sys.stderr)
        return 1

    for page in pages:
        original = page.read_text(encoding="utf-8")
        updated = original
        stamped = []

        for name in BLOCKS:
            pattern = re.compile(
                rf"(<!--#{name}-->).*?(<!--#/{name}-->)",
                re.DOTALL,
            )
            if not pattern.search(updated):
                continue
            updated = pattern.sub(
                lambda m: f"{m.group(1)}\n{parts[name]}\n{m.group(2)}",
                updated,
            )
            stamped.append(name)

        missing = [b for b in BLOCKS if b not in stamped]
        if updated != original:
            page.write_text(updated, encoding="utf-8")

        status = "updated" if updated != original else "unchanged"
        note = f"  (no markers for: {', '.join(missing)})" if missing else ""
        print(f"{page.name:18} {status}{note}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
