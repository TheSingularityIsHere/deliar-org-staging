"""Build die-diele/data/day-NN.json from typing/20250424_122832.json.

Each day becomes {"day": n, "text": str, "runs": [[start, end, style], ...]}:
markdown markers are removed from the text and kept as style runs
(1 = bold, 2 = italic, 3 = both). Headings become bold, list bullets
become "•", and lines of only asterisks ("* * *") stay as written.

Run from the repository root:  python3 die-diele/build_data.py
"""
import json
import re

SRC = "typing/20250424_122832.json"
OUT = "die-diele/data/day-{:02d}.json"

BOLD = re.compile(r"\*\*(?=\S)(.+?)(?<=\S)\*\*")
ITALIC = re.compile(r"(?<![\w*])\*(?=[^\s*])(.+?)(?<=[^\s*])\*(?![\w*])")
HEADING = re.compile(r"^\s*#{1,6}\s+")
BULLET = re.compile(r"^(\s*)[*-](\s+)")
RULE = re.compile(r"^[\s*#]*\*[\s*]*$")


def clean_line(line):
  """Return (text, per-character style list) for one line."""
  if RULE.match(line):
    text = re.sub(r"^\s*#+\s*", "", line).strip()
    return text, [0] * len(text)
  base = 0
  m = HEADING.match(line)
  if m:
    line = line[m.end():]
    base = 1
  line = BULLET.sub(lambda m: m.group(1) + "•" + m.group(2), line)

  drop = set()
  style = [base] * len(line)
  for m in BOLD.finditer(line):
    drop.update((m.start(), m.start() + 1, m.end() - 2, m.end() - 1))
    for i in range(m.start(1), m.end(1)):
      style[i] |= 1
  masked = "".join("\0" if i in drop else c for i, c in enumerate(line))
  for m in ITALIC.finditer(masked):
    drop.update((m.start(), m.end() - 1))
    for i in range(m.start(1), m.end(1)):
      style[i] |= 2

  out, out_style = [], []
  for i, c in enumerate(line):
    if i not in drop:
      out.append(c)
      out_style.append(style[i])
  return "".join(out), out_style


def build_day(raw):
  raw = raw.replace("\r\n", "\n").replace(" ", " ").replace("\t", "    ")
  lines, styles = [], []
  for line in raw.split("\n"):
    t, s = clean_line(line.rstrip())
    lines.append(t)
    styles.append(s)
  text = "\n".join(lines).strip("\n")
  # Per-character style for the joined text, then compress to runs.
  flat = []
  for i, s in enumerate(styles):
    flat.extend(s)
    flat.append(0)
  lead = len("\n".join(lines)) - len("\n".join(lines).lstrip("\n"))
  flat = flat[lead:lead + len(text)]
  runs, start = [], None
  for i, s in enumerate(flat + [0]):
    if start is not None and (i == len(flat) or s != flat[start]):
      runs.append([start, i, flat[start]])
      start = None
    if start is None and i < len(flat) and s:
      start = i
  return text, runs


def main():
  days = json.load(open(SRC))
  total = 0
  for n, raw in enumerate(days):
    text, runs = build_day(raw)
    total += len(text)
    with open(OUT.format(n), "w") as f:
      json.dump({"day": n, "text": text, "runs": runs}, f, ensure_ascii=False, separators=(",", ":"))
  print(len(days), "days,", total, "characters")


if __name__ == "__main__":
  main()
