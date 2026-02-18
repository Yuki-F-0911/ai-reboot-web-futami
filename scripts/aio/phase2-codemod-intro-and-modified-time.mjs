import fs from "node:fs/promises";
import path from "node:path";

const TARGET_MODIFIED_TIME = "2026-02-18T18:00:00+09:00";

async function listAcademyBlogSlugs(repoRoot) {
  const baseDir = path.join(repoRoot, "app", "academy", "blog");
  const entries = await fs.readdir(baseDir, { withFileTypes: true });

  return entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((name) => !name.startsWith("_"))
    .filter((name) => !/^\[.*\]$/.test(name))
    .filter((name) => !/^\(.*\)$/.test(name))
    .filter((name) => !["temp", "debug"].includes(name))
    .sort((a, b) => a.localeCompare(b));
}

function extractComponentImport(routeSource) {
  const m = routeSource.match(
    /import\s+\w+\s+from\s+["']@\/components\/academyLanding\/blog\/([^"']+)["'];/,
  );
  if (!m) return null;
  return `components/academyLanding/blog/${m[1]}.tsx`;
}

function updateModifiedTime(routeSource) {
  const re = /const\s+modifiedTime\s*=\s*["']([^"']+)["'];/;
  const m = routeSource.match(re);
  if (!m) return { next: routeSource, changed: false };
  if (m[1] === TARGET_MODIFIED_TIME) return { next: routeSource, changed: false };
  return {
    next: routeSource.replace(re, `const modifiedTime = "${TARGET_MODIFIED_TIME}";`),
    changed: true,
  };
}

function normalizeText(text) {
  return String(text ?? "")
    .replace(/\s+/g, " ")
    .replace(/\u00a0/g, " ")
    .trim();
}

function maybeTohaize(firstSentence) {
  const s = firstSentence ?? "";
  const head = s.slice(0, 40);
  if (/とは/.test(head)) return s;
  // Replace the first "は" after a short subject into "とは、" (handles "は、" and "は「...」")
  const m = s.match(/^(.{1,20}?)は(、|(?=「)|(?=（))/);
  if (!m) return s;
  const subject = m[1];
  // Avoid weird conversions like "この記事は、" etc.
  if (/^(この記事|本記事|ここ|それ|これ|私|筆者)/.test(subject)) return s;
  if (m[2] === "、") return s.replace(/^(.{1,20}?)は、/, "$1とは、");
  return s.replace(/^(.{1,20}?)は/, "$1とは、");
}

function rewriteIntroParagraphInner(innerRaw) {
  const raw = String(innerRaw ?? "");
  if (raw.includes("<")) return { nextInner: raw, changed: false, reason: "contains-nested-jsx" };

  const text = normalizeText(raw);
  if (!text) return { nextInner: raw, changed: false, reason: "empty" };

  const conclusionIndex = text.search(/結論[:：]/);
  if (conclusionIndex < 0) {
    // If the first sentence already looks like a definition, try to "とは" it.
    const parts = text.split("。").map((p) => p.trim()).filter(Boolean);
    if (parts.length === 0) return { nextInner: raw, changed: false, reason: "no-sentences" };
    const first = maybeTohaize(`${parts[0]}。`);
    if (first === `${parts[0]}。`) return { nextInner: raw, changed: false, reason: "no-conclusion" };
    const rebuilt = [first, ...parts.slice(1).map((p) => `${p}。`)].join("\n            ");
    return { nextInner: rebuilt, changed: true, reason: "tohaized-first" };
  }

  const after = text.slice(conclusionIndex);
  const end = after.indexOf("。");
  if (end < 0) return { nextInner: raw, changed: false, reason: "conclusion-no-period" };

  const conclusionRaw = after.slice(0, end + 1);
  const conclusion = maybeTohaize(conclusionRaw.replace(/^結論[:：]\s*/u, "").trim());

  const rest = normalizeText((text.slice(0, conclusionIndex) + " " + after.slice(end + 1)).trim());
  const restParts = rest
    .split("。")
    .map((p) => p.trim())
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => `${p}。`);

  const rebuiltParts = [conclusion, ...restParts].filter(Boolean);
  const rebuilt = rebuiltParts.join("\n            ");
  return { nextInner: rebuilt, changed: true, reason: "moved-conclusion-first" };
}

function updateIntroParagraph(componentSource) {
  const openTag =
    '<p className="mt-6 text-base leading-8 text-gray-700">';
  const closeTag = "</p>";
  const startIndex = componentSource.indexOf(openTag);
  if (startIndex < 0) return { next: componentSource, changed: false, reason: "no-intro-p" };
  const innerStart = startIndex + openTag.length;
  const endIndex = componentSource.indexOf(closeTag, innerStart);
  if (endIndex < 0) return { next: componentSource, changed: false, reason: "no-closing-p" };

  const inner = componentSource.slice(innerStart, endIndex);
  const rewritten = rewriteIntroParagraphInner(inner);
  if (!rewritten.changed) return { next: componentSource, changed: false, reason: rewritten.reason };

  const next =
    componentSource.slice(0, innerStart) +
    "\n            " +
    rewritten.nextInner +
    "\n          " +
    componentSource.slice(endIndex);

  return { next, changed: true, reason: rewritten.reason };
}

async function main() {
  const repoRoot = process.cwd();
  const slugs = await listAcademyBlogSlugs(repoRoot);

  const results = [];

  for (const slug of slugs) {
    const routeRel = path.join("app", "academy", "blog", slug, "page.tsx");
    const routePath = path.join(repoRoot, routeRel);
    const routeSource = await fs.readFile(routePath, "utf8");
    const routeUpdate = updateModifiedTime(routeSource);

    const componentRel = extractComponentImport(routeSource);
    if (!componentRel) {
      results.push({ slug, routeRel, componentRel: "", routeChanged: false, introChanged: false, reason: "no-component-import" });
      continue;
    }

    const componentPath = path.join(repoRoot, componentRel);
    const componentSource = await fs.readFile(componentPath, "utf8");
    const introUpdate = updateIntroParagraph(componentSource);

    if (routeUpdate.changed) {
      await fs.writeFile(routePath, routeUpdate.next);
    }
    if (introUpdate.changed) {
      await fs.writeFile(componentPath, introUpdate.next);
    }

    results.push({
      slug,
      routeRel,
      componentRel,
      routeChanged: routeUpdate.changed,
      introChanged: introUpdate.changed,
      reason: introUpdate.reason,
    });
  }

  const changed = results.filter((r) => r.routeChanged || r.introChanged);
  const skipped = results.filter((r) => !r.routeChanged && !r.introChanged);

  process.stdout.write(
    JSON.stringify(
      {
        targetModifiedTime: TARGET_MODIFIED_TIME,
        total: results.length,
        changed: changed.length,
        skipped: skipped.length,
        skippedReasons: skipped.reduce((acc, r) => {
          acc[r.reason] = (acc[r.reason] ?? 0) + 1;
          return acc;
        }, {}),
      },
      null,
      2,
    ) + "\n",
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
