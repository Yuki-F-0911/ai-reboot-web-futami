import fs from "node:fs/promises";
import { execSync } from "node:child_process";

function normalizeFaqTocLabel(source) {
  return source
    .replaceAll('{ id: "faq", label: "FAQ" }', '{ id: "faq", label: "よくある質問（FAQ）" }')
    .replaceAll("{ id: 'faq', label: 'FAQ' }", "{ id: 'faq', label: 'よくある質問（FAQ）' }");
}

function normalizeFaqHeading(source) {
  const marker = 'id="faq"';
  let idx = source.indexOf(marker);
  if (idx < 0) return { next: source, changed: false };

  let next = source;
  let changed = false;

  while (idx >= 0) {
    const h2Open = next.lastIndexOf("<h2", idx);
    if (h2Open < 0) break;
    const h2Close = next.indexOf("</h2>", idx);
    if (h2Close < 0) break;

    const head = next.slice(h2Open, h2Close + "</h2>".length);
    if (!head.includes("<h2") || !head.includes(marker)) {
      idx = next.indexOf(marker, idx + marker.length);
      continue;
    }

    const innerStart = head.indexOf(">");
    if (innerStart < 0) {
      idx = next.indexOf(marker, idx + marker.length);
      continue;
    }
    const inner = head.slice(innerStart + 1, head.lastIndexOf("</h2>"));
    const innerTrim = inner.replace(/\s+/g, " ").trim();
    const shouldReplace =
      innerTrim === "FAQ" ||
      innerTrim === "よくある質問" ||
      innerTrim === "よくある質問(FAQ)" ||
      innerTrim === "よくある質問（FAQ）";

    if (!shouldReplace) {
      idx = next.indexOf(marker, idx + marker.length);
      continue;
    }

    if (innerTrim !== "よくある質問（FAQ）") {
      const replaced = `${head.slice(0, innerStart + 1)}\n            よくある質問（FAQ）\n          ${head.slice(head.lastIndexOf("</h2>"))}`;
      next = next.slice(0, h2Open) + replaced + next.slice(h2Open + head.length);
      changed = true;
      idx = next.indexOf(marker, h2Open + replaced.length);
      continue;
    }

    idx = next.indexOf(marker, idx + marker.length);
  }

  return { next, changed };
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

  let changedCount = 0;

  for (const file of files) {
    const source = await fs.readFile(file, "utf8");
    let next = normalizeFaqTocLabel(source);
    const faqHeading = normalizeFaqHeading(next);
    next = faqHeading.next;

    if (next !== source) {
      await fs.writeFile(file, next);
      changedCount += 1;
    }
  }

  process.stdout.write(JSON.stringify({ total: files.length, changedFiles: changedCount }, null, 2) + "\n");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

