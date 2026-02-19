import fs from "node:fs/promises";
import { execSync } from "node:child_process";

function extractMotionSectionAround(source, marker) {
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) return null;
  const start = source.lastIndexOf("<motion.section", markerIndex);
  if (start < 0) return null;
  const end = source.indexOf("</motion.section>", markerIndex);
  if (end < 0) return null;
  const blockEnd = end + "</motion.section>".length;
  return { start, end: blockEnd, block: source.slice(start, blockEnd) };
}

function findMotionSectionStartBefore(source, marker) {
  const idx = source.indexOf(marker);
  if (idx < 0) return -1;
  return source.lastIndexOf("<motion.section", idx);
}

async function main() {
  const filesRaw = execSync('rg --files components/academyLanding/blog | rg "Page\\\\.tsx$"', {
    encoding: "utf8",
  });
  const files = filesRaw
    .trim()
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  let changedFiles = 0;

  for (const file of files) {
    const source = await fs.readFile(file, "utf8");
    if (!source.includes('id="summary"') || !source.includes('id="cta"')) continue;

    const summary = extractMotionSectionAround(source, 'id="summary"');
    if (!summary) continue;
    const ctaStart = findMotionSectionStartBefore(source, 'id="cta"');
    if (ctaStart < 0) continue;

    // If summary is already immediately before CTA section, skip.
    const between = source.slice(summary.end, ctaStart);
    if (/^\s*$/.test(between)) continue;

    const without = source.slice(0, summary.start) + source.slice(summary.end);
    const newCtaStart = findMotionSectionStartBefore(without, 'id="cta"');
    if (newCtaStart < 0) continue;

    const next =
      without.slice(0, newCtaStart) + summary.block + "\n\n" + without.slice(newCtaStart);

    if (next !== source) {
      await fs.writeFile(file, next);
      changedFiles += 1;
    }
  }

  process.stdout.write(JSON.stringify({ total: files.length, changedFiles }, null, 2) + "\n");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

