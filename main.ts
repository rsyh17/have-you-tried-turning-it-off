// Entry for make.fun bounty "Have You Tried Turning It Off?" —
// writes one deterministic funny line to entry.txt in the output dir.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Have you tried turning it off and on again? — the sacred reboot ritual, performed daily by tech priests since 1985, fixes 90% of computers and 0% of my life choices.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
