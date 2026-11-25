import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, no deadline met: a single-line joke giving an excuse for
// missing a deadline. The excuse is the joke itself — the writer was so
// busy perfecting the excuse that the deadline slipped past anyway.
const line =
  "I spent so long perfecting my excuse for missing the deadline that I missed the deadline.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters, a single
// line, and not only white space. Refuse to write anything that breaks it.
const codePoints = [...line].length;
if (line.trim().length === 0 || line.includes("\n") || codePoints > 200) {
  throw new Error("entry line fails the gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
