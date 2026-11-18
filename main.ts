// news-image-20261118 — make.fun entry.
// The program copies the pre-rendered news summary image (entry.png,
// JPEG bytes under a .png name, as the competition allows) to the
// output directory as entry.png. No network, no randomness: every
// run writes the same bytes.
// The image itself is the entry: a one-page summary of Wednesday
// 18 November 2026 — Trump in Manila, the EU's 45bn Ukraine loan,
// Cyclone Akvan, Dhoni's IPL retirement, Baidu's AI-bubble warning,
// and the US/ICAO Taiwan-flights row. It was drawn for this
// competition and checked by eye before it was committed.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
