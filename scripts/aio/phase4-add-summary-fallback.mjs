import fs from "node:fs/promises";
import { execSync } from "node:child_process";

function normalizeText(text) {
  return String(text ?? "")
    .replace(/\s+/g, " ")
    .replace(/\u00a0/g, " ")
    .trim();
}

function extractConclusionBulletsByRegex(source) {
  // Try to capture list items in the conclusion section block.
  const start = source.indexOf('id="conclusion"');
  if (start < 0) return [];
  const sectionOpen = source.lastIndexOf("<motion.section", start);
  const sectionClose = source.indexOf("</motion.section>", start);
  if (sectionOpen < 0 || sectionClose < 0) return [];
  const block = source.slice(sectionOpen, sectionClose);

  const li = [];
  const liRe = /<li\b[^>]*>([\s\S]*?)<\/li>/g;
  let m;
  while ((m = liRe.exec(block)) !== null) {
    const text = normalizeText(m[1].replace(/<[^>]*>/g, " "));
    if (text && text.length >= 10) li.push(text);
    if (li.length >= 5) break;
  }
  if (li.length >= 3) return li;

  const p = [];
  const pRe = /<p\b[^>]*>([\s\S]*?)<\/p>/g;
  while ((m = pRe.exec(block)) !== null) {
    const text = normalizeText(m[1].replace(/<[^>]*>/g, " "));
    if (text && text.length >= 20) p.push(text);
  }
  const merged = normalizeText(p.join(" ")).replace(/^結論[:：]\s*/u, "");
  if (!merged) return [];
  const sentences = merged
    .split("。")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 5)
    .map((s) => `${s}。`);
  return sentences;
}

function extractKetsuronSentences(source) {
  const bullets = [];
  const re = /結論[:：]\s*([^。]{10,220})。/g;
  let m;
  while ((m = re.exec(source)) !== null) {
    const text = normalizeText(m[1]);
    if (!text) continue;
    const sentence = `${text}。`;
    if (bullets.includes(sentence)) continue;
    bullets.push(sentence);
    if (bullets.length >= 5) break;
  }
  return bullets;
}

function extractTocLabels(source) {
  const labels = [];
  const re = /label:\s*\"([^\"]+)\"/g;
  let m;
  while ((m = re.exec(source)) !== null) {
    const label = normalizeText(m[1]);
    if (!label) continue;
    if (/^(FAQ|よくある質問)/.test(label)) continue;
    if (/^(次のアクション|CTA)/.test(label)) continue;
    labels.push(label);
    if (labels.length >= 5) break;
  }
  return labels;
}

function buildSummarySection(bullets) {
  const items = bullets.slice(0, 5).map((b) => `            <li className=\"pl-1 marker:text-gray-500\">${b}</li>`);
  return [
    "",
    "        <motion.section",
    "          className=\"mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6\"",
    "          initial=\"hidden\"",
    "          whileInView=\"visible\"",
    "          viewport={{ once: true, amount: 0.2 }}",
    "          variants={sectionReveal}",
    "          transition={{ duration: 0.5, ease: \"easeOut\" }}",
    "        >",
    "          <h2 id=\"summary\" className=\"scroll-mt-28 text-2xl font-bold text-gray-900\">",
    "            まとめ",
    "          </h2>",
    "          <ul className=\"mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700\">",
    ...items,
    "          </ul>",
    "        </motion.section>",
    "",
  ].join("\n");
}

function findCtaSectionStart(source) {
  const h2Index = source.indexOf('<h2 id="cta"');
  if (h2Index < 0) return -1;
  const sectionOpen = source.lastIndexOf("<motion.section", h2Index);
  return sectionOpen >= 0 ? sectionOpen : h2Index;
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
    if (source.includes('id="summary"')) continue;

    const bullets = [
      ...extractConclusionBulletsByRegex(source),
      ...extractKetsuronSentences(source),
    ];

    const unique = [];
    for (const b of bullets) {
      const text = normalizeText(b);
      if (!text) continue;
      if (unique.includes(text)) continue;
      unique.push(text);
      if (unique.length >= 5) break;
    }

    if (unique.length < 3) {
      const labels = extractTocLabels(source);
      for (const label of labels) {
        unique.push(`${label}のポイントを振り返る。`);
        if (unique.length >= 3) break;
      }
    }
    if (unique.length < 3) {
      unique.push("要点を3つに絞って確認する。");
      unique.push("次の一歩（行動）を決める。");
      unique.push("FAQで不明点を解消する。");
    }

    const insertAt = findCtaSectionStart(source);
    const section = buildSummarySection(unique.slice(0, 5));
    const next =
      insertAt >= 0 ? source.slice(0, insertAt) + section + source.slice(insertAt) : source;

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

