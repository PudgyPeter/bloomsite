import re
from pathlib import Path

root = Path(r"C:\Users\PenderITAdmin\Downloads\bloomsite\simple")

pattern = re.compile(
    r'(\s*)<li><span class="number">([^<]+)</span><span class="song">([^<]*(?:&[^;]+;[^<]*)*)</span><span class="length">([^<]+)</span></li>'
)


def expand(match):
    indent, num, song, length = match.groups()
    return (
        f"{indent}<li>\n"
        f'{indent}  <span class="number">{num}</span>\n'
        f'{indent}  <span class="song">{song}</span>\n'
        f'{indent}  <span class="length">{length}</span>\n'
        f"{indent}</li>"
    )

for name in ["index.html", "music.html"]:
    p = root / name
    text = p.read_text(encoding="utf-8")
    new, count = pattern.subn(expand, text)
    p.write_text(new, encoding="utf-8", newline="")
    print(name, "expanded", count, "song rows")
