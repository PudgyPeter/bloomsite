import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

root = Path(r"C:\Users\PenderITAdmin\Downloads\bloomsite\simple")

for name in ["index.html", "members.html", "music.html", "assets/css/style.css"]:
    p = root / name
    lines = p.read_text(encoding="utf-8").splitlines()
    over = [(i + 1, len(l)) for i, l in enumerate(lines) if len(l) > 120]
    print(f"{name:26} lines={len(lines):4} max={max(len(l) for l in lines):4} over120={len(over)}")
    for n, ln in over[:6]:
        print("    ", n, ln)

css = (root / "assets/css/style.css").read_text(encoding="utf-8")
html = "\n".join((root / n).read_text(encoding="utf-8") for n in ["index.html", "members.html", "music.html"])

import re

classes = sorted(set(re.findall(r"\.([a-zA-Z][\w-]*)", css)))
used = set()
for m in re.finditer(r'class="([^"]+)"', html):
    used.update(m.group(1).split())
print("\nCSS classes:", len(classes))
print("unused in CSS:", [c for c in classes if c not in used])
print("used in HTML but not styled:", sorted(c for c in used if c not in classes))
