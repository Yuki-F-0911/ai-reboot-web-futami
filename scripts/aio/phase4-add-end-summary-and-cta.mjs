import fs from "node:fs/promises";
import path from "node:path";
import ts from "typescript";
import { execSync } from "node:child_process";

function normalizeText(text) {
  return String(text ?? "")
    .replace(/\s+/g, " ")
    .replace(/\u00a0/g, " ")
    .trim();
}

function getJsxTagName(node) {
  if (!node) return "";
  const tag = node.tagName;
  if (!tag) return "";
  if (ts.isIdentifier(tag)) return tag.text;
  if (ts.isPropertyAccessExpression(tag)) return `${tag.expression.getText()}.${tag.name.getText()}`;
  if (ts.isJsxMemberExpression(tag)) return `${tag.expression.getText()}.${tag.name.getText()}`;
  return tag.getText();
}

function getAttributeString(openingElement, attrName) {
  const props = openingElement.attributes?.properties ?? [];
  for (const prop of props) {
    if (!ts.isJsxAttribute(prop)) continue;
    if (prop.name.text !== attrName) continue;
    const init = prop.initializer;
    if (!init) return "";
    if (ts.isStringLiteral(init)) return init.text;
    if (ts.isJsxExpression(init)) {
      const expr = init.expression;
      if (!expr) return "";
      if (ts.isStringLiteral(expr) || ts.isNoSubstitutionTemplateLiteral(expr)) return expr.text;
    }
    return "";
  }
  return "";
}

function jsxChildrenText(children) {
  let out = "";
  for (const child of children ?? []) {
    if (ts.isJsxText(child)) {
      out += child.getText();
      continue;
    }
    if (ts.isJsxExpression(child)) {
      const expr = child.expression;
      if (!expr) continue;
      if (ts.isStringLiteral(expr) || ts.isNoSubstitutionTemplateLiteral(expr)) {
        out += expr.text;
        continue;
      }
      continue;
    }
    if (ts.isJsxElement(child)) {
      out += jsxChildrenText(child.children);
      continue;
    }
  }
  return normalizeText(out);
}

function findConclusionSectionNode(sourceFile) {
  let conclusionH2 = null;

  function visit(node) {
    if (ts.isJsxElement(node)) {
      const tag = getJsxTagName(node.openingElement);
      if (tag === "h2" && getAttributeString(node.openingElement, "id") === "conclusion") {
        conclusionH2 = node;
        return;
      }
      for (const child of node.children) visit(child);
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  if (!conclusionH2) return null;

  let sectionNode = conclusionH2;
  while (sectionNode && sectionNode.parent) {
    if (ts.isJsxElement(sectionNode)) {
      const tag = getJsxTagName(sectionNode.openingElement);
      if (tag === "motion.section" || tag === "section") return sectionNode;
    }
    sectionNode = sectionNode.parent;
  }
  return null;
}

function extractSummaryBulletsFromConclusion(componentSource, fileName) {
  const sourceFile = ts.createSourceFile(fileName, componentSource, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const sectionNode = findConclusionSectionNode(sourceFile);
  if (!sectionNode) return [];

  const liTexts = [];
  const pTexts = [];

  function collect(node) {
    if (ts.isJsxElement(node)) {
      const tag = getJsxTagName(node.openingElement);
      if (tag === "li") {
        const text = jsxChildrenText(node.children);
        if (text && text.length >= 10) liTexts.push(text);
      }
      if (tag === "p") {
        const text = jsxChildrenText(node.children);
        if (text && text.length >= 20) pTexts.push(text);
      }
      for (const child of node.children) collect(child);
    }
  }

  collect(sectionNode);

  if (liTexts.length >= 3) return liTexts.slice(0, 5);

  const merged = normalizeText(pTexts.join(" "));
  if (!merged) return [];
  const sentences = merged
    .replace(/^結論[:：]\s*/u, "")
    .split("。")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 5);
  return sentences.map((s) => `${s}。`);
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

function buildCtaSection() {
  return [
    "",
    "        <motion.section",
    "          className=\"mt-14 border-t border-gray-300 pt-10\"",
    "          initial=\"hidden\"",
    "          whileInView=\"visible\"",
    "          viewport={{ once: true, amount: 0.2 }}",
    "          variants={sectionReveal}",
    "          transition={{ duration: 0.5, ease: \"easeOut\" }}",
    "        >",
    "          <h2 id=\"cta\" className=\"scroll-mt-28 text-2xl font-bold text-gray-900\">",
    "            次のアクション",
    "          </h2>",
    "          <p className=\"mt-5 text-base font-medium leading-8 text-gray-900\">",
    "            AI活用を最短で前に進めたい方へ。無料セミナーやアカデミーの全体像から、次の一歩を選べます。",
    "          </p>",
    "          <div className=\"mt-7 flex flex-col gap-3 sm:flex-row\">",
    "            <Link",
    "              href=\"/academy/seminars\"",
    "              className=\"inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white\"",
    "            >",
    "              無料セミナーを見る",
    "            </Link>",
    "            <Link",
    "              href=\"/academy\"",
    "              className=\"inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900\"",
    "            >",
    "              アカデミーTOPへ",
    "            </Link>",
    "          </div>",
    "        </motion.section>",
    "",
  ].join("\n");
}

function insertBeforeIndex(source, index, insert) {
  return source.slice(0, index) + insert + source.slice(index);
}

function findCtaSectionInsertIndex(source) {
  const h2Index = source.indexOf('<h2 id="cta"');
  if (h2Index < 0) return -1;
  const sectionOpen = source.lastIndexOf("<motion.section", h2Index);
  if (sectionOpen >= 0) return sectionOpen;
  const plainSectionOpen = source.lastIndexOf("<section", h2Index);
  return plainSectionOpen;
}

function ensureCtaId(source) {
  if (source.includes('id="cta"')) return { next: source, changed: false };
  // Promote known CTA-ish ids to "cta"
  const candidates = ["next-career-step", "next-step", "academy-cta", "learn-more", "next-actions"];
  for (const id of candidates) {
    if (source.includes(`id="${id}"`)) {
      return { next: source.replaceAll(`id="${id}"`, 'id="cta"'), changed: true };
    }
  }
  return { next: source, changed: false };
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
  const skipped = [];

  for (const file of files) {
    const source = await fs.readFile(file, "utf8");
    let next = source;

    // Ensure CTA section exists or at least has id="cta".
    const ctaPromoted = ensureCtaId(next);
    next = ctaPromoted.next;

    const hasSummary = next.includes('id="summary"');
    const hasCta = next.includes('id="cta"');

    const bullets = extractSummaryBulletsFromConclusion(next, path.basename(file));
    const summarySection = bullets.length >= 3 ? buildSummarySection(bullets) : "";

    if (!hasSummary && summarySection) {
      const insertAt = findCtaSectionInsertIndex(next);
      if (insertAt >= 0) {
        next = insertBeforeIndex(next, insertAt, summarySection);
      } else {
        const articleClose = next.lastIndexOf("</article>");
        if (articleClose >= 0) next = insertBeforeIndex(next, articleClose, summarySection);
      }
    }

    if (!hasCta) {
      const ctaSection = buildCtaSection();
      const articleClose = next.lastIndexOf("</article>");
      if (articleClose >= 0) {
        next = insertBeforeIndex(next, articleClose, ctaSection);
      } else {
        skipped.push({ file, reason: "no-article-close" });
      }
    }

    if (next !== source) {
      await fs.writeFile(file, next);
      changedFiles += 1;
    }
  }

  process.stdout.write(JSON.stringify({ total: files.length, changedFiles, skipped }, null, 2) + "\n");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

