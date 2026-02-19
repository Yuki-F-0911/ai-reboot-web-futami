import fs from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

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

function extractConclusionLeadSentence(componentSource, fileName = "component.tsx") {
  const sourceFile = ts.createSourceFile(
    fileName,
    componentSource,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

  let conclusionHeadingNode = null;

  function visit(node) {
    if (ts.isJsxElement(node)) {
      const tag = getJsxTagName(node.openingElement);
      if (tag === "h2" && getAttributeString(node.openingElement, "id") === "conclusion") {
        conclusionHeadingNode = node;
        return;
      }
      for (const child of node.children) visit(child);
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  if (!conclusionHeadingNode) return "";

  // Climb to the section node that wraps the conclusion.
  let sectionNode = conclusionHeadingNode;
  while (sectionNode && sectionNode.parent) {
    if (ts.isJsxElement(sectionNode)) {
      const tag = getJsxTagName(sectionNode.openingElement);
      if (tag === "motion.section" || tag === "section") break;
    }
    sectionNode = sectionNode.parent;
  }

  if (!sectionNode || !ts.isJsxElement(sectionNode)) return "";

  // Prefer a "結論:" sentence if present, otherwise use the first <li> or <p>.
  const candidates = [];

  function collect(node) {
    if (ts.isJsxElement(node)) {
      const tag = getJsxTagName(node.openingElement);
      if (tag === "p" || tag === "li") {
        const text = jsxChildrenText(node.children);
        if (text && text.length >= 20) candidates.push(text);
      }
      for (const child of node.children) collect(child);
    }
  }

  collect(sectionNode);
  if (candidates.length === 0) return "";

  const preferred = candidates.find((t) => /結論[:：]/.test(t)) ?? candidates[0];
  const cleaned = preferred.replace(/^結論[:：]\s*/u, "").trim();
  const sentence = cleaned.split("。").map((p) => p.trim()).filter(Boolean)[0];
  if (!sentence) return "";
  return `${sentence}。`;
}

function splitSentences(text) {
  return normalizeText(text)
    .split("。")
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `${p}。`);
}

function rewriteIntroInnerWithLead(innerRaw, leadSentence) {
  const raw = String(innerRaw ?? "");
  if (!raw || raw.includes("<")) return { nextInner: raw, changed: false };
  const lead = normalizeText(leadSentence);
  if (!lead) return { nextInner: raw, changed: false };

  const existing = splitSentences(raw);
  const rest = existing.filter((s) => normalizeText(s) !== normalizeText(lead)).slice(0, 2);

  const articleScope =
    rest.find((s) => /^(この記事|本記事|このガイド|このページ)では/.test(normalizeText(s))) ?? rest[0] ?? "";
  const third = rest.find((s) => s !== articleScope) ?? "";

  const rebuiltParts = [lead, articleScope, third].filter(Boolean);
  const rebuilt = rebuiltParts.join("\n            ");
  return { nextInner: rebuilt, changed: normalizeText(rebuilt) !== normalizeText(raw) };
}

function updateIntroParagraph(componentSource, leadSentence) {
  const openTag =
    '<p className="mt-6 text-base leading-8 text-gray-700">';
  const closeTag = "</p>";
  const startIndex = componentSource.indexOf(openTag);
  if (startIndex < 0) return { next: componentSource, changed: false };
  const innerStart = startIndex + openTag.length;
  const endIndex = componentSource.indexOf(closeTag, innerStart);
  if (endIndex < 0) return { next: componentSource, changed: false };

  const inner = componentSource.slice(innerStart, endIndex);
  const rewritten = rewriteIntroInnerWithLead(inner, leadSentence);
  if (!rewritten.changed) return { next: componentSource, changed: false };

  const next =
    componentSource.slice(0, innerStart) +
    "\n            " +
    rewritten.nextInner +
    "\n          " +
    componentSource.slice(endIndex);
  return { next, changed: true };
}

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

async function main() {
  const repoRoot = process.cwd();
  const slugs = await listAcademyBlogSlugs(repoRoot);

  const changed = [];
  const skipped = [];

  for (const slug of slugs) {
    const routePath = path.join(repoRoot, "app", "academy", "blog", slug, "page.tsx");
    const routeSource = await fs.readFile(routePath, "utf8");
    const componentRel = extractComponentImport(routeSource);
    if (!componentRel) {
      skipped.push({ slug, reason: "no-component-import" });
      continue;
    }

    const componentPath = path.join(repoRoot, componentRel);
    const componentSource = await fs.readFile(componentPath, "utf8");
    const lead = extractConclusionLeadSentence(componentSource, componentRel);
    if (!lead) {
      skipped.push({ slug, reason: "no-conclusion-lead" });
      continue;
    }

    const updated = updateIntroParagraph(componentSource, lead);
    if (!updated.changed) {
      skipped.push({ slug, reason: "no-change" });
      continue;
    }

    await fs.writeFile(componentPath, updated.next);
    changed.push({ slug, componentRel });
  }

  process.stdout.write(
    JSON.stringify(
      { total: slugs.length, changed: changed.length, skipped: skipped.length, skippedReasons: skipped.reduce((acc, s) => { acc[s.reason] = (acc[s.reason] ?? 0) + 1; return acc; }, {}) },
      null,
      2,
    ) + "\n",
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

