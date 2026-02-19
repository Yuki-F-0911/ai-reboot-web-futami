import fs from "node:fs/promises";
import { execSync } from "node:child_process";

function extractSectionBlock(source, markerId) {
  const marker = `id="${markerId}"`;
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) return null;

  const start = source.lastIndexOf("<section", markerIndex);
  if (start < 0) return null;

  const end = source.indexOf("</section>", markerIndex);
  if (end < 0) return null;

  const blockEnd = end + "</section>".length;
  return { start, end: blockEnd, block: source.slice(start, blockEnd) };
}

function findMotionSectionStartBefore(source, markerIndex) {
  const motionStart = source.lastIndexOf("<motion.section", markerIndex);
  if (motionStart >= 0) return motionStart;
  return source.lastIndexOf("<section", markerIndex);
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

    const ctaIndex = source.indexOf('id="cta"');
    if (ctaIndex < 0) continue;

    const related = extractSectionBlock(source, "related-links");
    if (!related) continue;

    if (related.start < ctaIndex) continue;

    // Remove related-links block from current position.
    const without = source.slice(0, related.start) + source.slice(related.end);

    // Insert it before the CTA section (or before summary if summary is right before CTA).
    const summaryIndex = without.indexOf('id="summary"');
    const insertAt = summaryIndex >= 0 && summaryIndex < ctaIndex
      ? findMotionSectionStartBefore(without, summaryIndex)
      : findMotionSectionStartBefore(without, ctaIndex);

    if (insertAt < 0) continue;

    const next = without.slice(0, insertAt) + related.block + "\n\n" + without.slice(insertAt);
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

