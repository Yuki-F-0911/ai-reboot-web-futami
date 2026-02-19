import fs from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

function parseArgs(argv) {
  const args = { out: "reports/aio/academy-blog-aio-audit.2026-02-18.tsv" };
  for (let i = 2; i < argv.length; i += 1) {
    const value = argv[i];
    if (value === "--out") {
      args.out = argv[i + 1] ?? args.out;
      i += 1;
      continue;
    }
    if (value === "--stdout") {
      args.out = null;
      continue;
    }
  }
  return args;
}

function tsvEscape(value) {
  const s = String(value ?? "");
  return s.replaceAll("\t", " ").replaceAll("\n", " ").replaceAll("\r", " ");
}

async function ensureParentDir(filePath) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
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

function extractConstString(source, constName) {
  const re = new RegExp(`const\\s+${constName}\\s*=\\s*["']([^"']+)["'];`);
  const m = source.match(re);
  return m?.[1] ?? "";
}

function extractComponentImport(routeSource) {
  const m = routeSource.match(
    /import\s+\w+\s+from\s+["']@\/components\/academyLanding\/blog\/([^"']+)["'];/,
  );
  if (!m) return null;
  return `components/academyLanding/blog/${m[1]}.tsx`;
}

function hasFaqStructuredData(routeSource) {
  return /\bFAQStructuredData\b/.test(routeSource);
}

function countFaqItems(routeSource) {
  const m = routeSource.match(/const\s+faqItems\s*=\s*\[((?:.|\n)*?)\]\s+as\s+const\s*;/m);
  if (!m) return 0;
  const block = m[1];
  const questions = block.match(/\bquestion\s*:/g);
  return questions?.length ?? 0;
}

function toPlainText(s) {
  return String(s ?? "")
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
    if (ts.isJsxSelfClosingElement(child)) {
      continue;
    }
  }
  return toPlainText(out);
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

function collectComponentSignals(componentSource, fileName = "component.tsx") {
  const sourceFile = ts.createSourceFile(
    fileName,
    componentSource,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

  const headings = [];
  let h2Count = 0;
  let h3Count = 0;
  let listLikeCount = 0;
  let tableCount = 0;
  let imageCount = 0;
  let missingAltCount = 0;

  let introText = "";

  const textPieces = [];
  const allowedPropNames = new Set([
    "title",
    "body",
    "description",
    "hint",
    "label",
    "question",
    "answer",
    "name",
    "text",
  ]);

  function visit(node) {
    if (ts.isJsxElement(node)) {
      const tagName = getJsxTagName(node.openingElement);
      if (tagName === "h2") h2Count += 1;
      if (tagName === "h3") h3Count += 1;
      if (tagName === "ul" || tagName === "ol") listLikeCount += 1;
      if (tagName === "table") tableCount += 1;

      if (tagName === "Image" || tagName === "img") {
        imageCount += 1;
        const alt = getAttributeString(node.openingElement, "alt");
        if (!alt) missingAltCount += 1;
      }

      if (tagName === "h2" || tagName === "h3") {
        const text = jsxChildrenText(node.children);
        const id = getAttributeString(node.openingElement, "id");
        headings.push({ level: tagName, id, text });
      }

      if (!introText && (tagName === "motion.header" || tagName === "header")) {
        const firstP = node.children.find(
          (child) =>
            ts.isJsxElement(child) &&
            getJsxTagName(child.openingElement) === "p" &&
            jsxChildrenText(child.children).length > 30,
        );
        if (firstP && ts.isJsxElement(firstP)) {
          introText = jsxChildrenText(firstP.children);
        }
      }

      for (const child of node.children) visit(child);
    } else if (ts.isJsxSelfClosingElement(node)) {
      const tagName = getJsxTagName(node);
      if (tagName === "Image" || tagName === "img") {
        imageCount += 1;
        const alt = getAttributeString(node, "alt");
        if (!alt) missingAltCount += 1;
      }
    } else if (ts.isJsxText(node)) {
      const text = toPlainText(node.getText());
      if (text && text.length >= 2) textPieces.push(text);
    } else if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      // Try to avoid counting non-content strings (className, ids, URLs) by
      // requiring the string to live under a known "content-like" property name.
      const parent = node.parent;
      if (ts.isPropertyAssignment(parent)) {
        const key = parent.name;
        const keyName = ts.isIdentifier(key) ? key.text : ts.isStringLiteral(key) ? key.text : "";
        if (allowedPropNames.has(keyName)) {
          const text = toPlainText(node.text);
          if (text && text.length >= 2) textPieces.push(text);
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  const combinedText = toPlainText(textPieces.join(" "));
  const charCount = combinedText.replace(/\s+/g, "").length;

  const normalizedIntro = toPlainText(introText);
  const introFirst100 = normalizedIntro.slice(0, 100);

  const hasConclusionTop = headings.some(
    (h) => h.level === "h2" && (h.id === "conclusion" || /要点まとめ/.test(h.text)),
  );
  const hasFaqSection = headings.some(
    (h) => h.level === "h2" && (h.id === "faq" || /(FAQ|よくある質問|Q&A)/i.test(h.text)),
  );
  const hasCtaSection = headings.some((h) => h.level === "h2" && h.id === "cta");

  const endHeadings = headings.filter((h) => h.level === "h2").slice(-3);
  const hasSummaryEnd = endHeadings.some((h) => /(まとめ|要点整理|結論|おわりに)/.test(h.text));

  return {
    charCount,
    h2Count,
    h3Count,
    listOrTable: listLikeCount + tableCount,
    introFirst100,
    hasConclusionTop,
    hasFaqSection,
    hasSummaryEnd,
    hasCtaSection,
    imageCount,
    missingAltCount,
    headings,
  };
}

function scoreIntro(introFirst100) {
  const s = introFirst100 ?? "";
  if (!s) return 0;
  const hasToha = /とは/.test(s.slice(0, 60));
  const hasDesu = /です/.test(s.slice(0, 60));
  if (hasToha && hasDesu) return 2;
  if (hasDesu || hasToha) return 1;
  return 0;
}

function scoreCharCount(charCount) {
  if (charCount >= 3000) return 2;
  if (charCount >= 2000) return 1;
  return 0;
}

function scoreHeading(h2Count) {
  if (h2Count >= 3) return 2;
  if (h2Count === 2) return 1;
  return 0;
}

function scorePresence(value, goodThreshold = 1) {
  return value >= goodThreshold ? 2 : 0;
}

function scoreImages(imageCount, missingAltCount) {
  if (imageCount <= 0) return 0;
  if (missingAltCount > 0) return 1;
  return 2;
}

function toPriority(totalScore, introScore, charCount, h2Count, faqCount, hasSummaryEnd) {
  if (introScore <= 1) return "P1";
  if (totalScore <= 9) return "P1";
  if (charCount < 3000 || h2Count < 3) return "P2";
  if (faqCount < 3 || !hasSummaryEnd) return "P2";
  return "P3";
}

async function main() {
  const args = parseArgs(process.argv);
  const repoRoot = process.cwd();

  const slugs = await listAcademyBlogSlugs(repoRoot);
  const rows = [];

  for (const slug of slugs) {
    const routeRel = path.join("app", "academy", "blog", slug, "page.tsx");
    const routePath = path.join(repoRoot, routeRel);
    const routeSource = await fs.readFile(routePath, "utf8");

    const componentRel = extractComponentImport(routeSource);
    if (!componentRel) {
      throw new Error(`Failed to find component import for slug "${slug}" in ${routeRel}`);
    }
    const componentPath = path.join(repoRoot, componentRel);
    const componentSource = await fs.readFile(componentPath, "utf8");

    const pageTitle = extractConstString(routeSource, "pageTitle");
    const publishedTime = extractConstString(routeSource, "publishedTime");
    const modifiedTime = extractConstString(routeSource, "modifiedTime");
    const faqCount = countFaqItems(routeSource);
    const hasFaqSd = hasFaqStructuredData(routeSource);

    const signals = collectComponentSignals(componentSource, componentRel);

    const charScore = scoreCharCount(signals.charCount);
    const headingScore = scoreHeading(signals.h2Count);
    const listTableScore = scorePresence(signals.listOrTable, 1);
    const introScore = scoreIntro(signals.introFirst100);
    const faqScore = faqCount >= 3 ? 2 : faqCount >= 1 ? 1 : 0;
    const summaryScore = signals.hasSummaryEnd ? 2 : 0;
    const ctaScore = signals.hasCtaSection ? 2 : 0;
    const imageScore = scoreImages(signals.imageCount, signals.missingAltCount);

    const totalScore =
      charScore +
      headingScore +
      listTableScore +
      introScore +
      faqScore +
      summaryScore +
      ctaScore +
      imageScore;

    const priority = toPriority(
      totalScore,
      introScore,
      signals.charCount,
      signals.h2Count,
      faqCount,
      signals.hasSummaryEnd,
    );

    const notes = [
      signals.hasConclusionTop ? "" : "no-top-conclusion",
      signals.hasFaqSection ? "" : "no-faq-section",
      signals.hasSummaryEnd ? "" : "no-end-summary",
      signals.hasCtaSection ? "" : "no-cta",
    ]
      .filter(Boolean)
      .join(" ");

    rows.push({
      slug,
      pageTitle,
      routeFile: routeRel,
      componentFile: componentRel,
      chars: signals.charCount,
      h2: signals.h2Count,
      h3: signals.h3Count,
      listOrTable: signals.listOrTable,
      introFirst100: signals.introFirst100,
      publishedTime,
      modifiedTime,
      faqCount,
      hasFaqSd: hasFaqSd ? "yes" : "no",
      hasSummaryEnd: signals.hasSummaryEnd ? "yes" : "no",
      hasCta: signals.hasCtaSection ? "yes" : "no",
      images: signals.imageCount,
      missingAlt: signals.missingAltCount,
      score: totalScore,
      priority,
      notes,
    });
  }

  rows.sort((a, b) => {
    const p = (x) => (x === "P1" ? 0 : x === "P2" ? 1 : 2);
    const pd = p(a.priority) - p(b.priority);
    if (pd !== 0) return pd;
    return a.score - b.score;
  });

  const header = [
    "priority",
    "score_16",
    "slug",
    "title",
    "chars",
    "h2_count",
    "h3_count",
    "list_or_table_count",
    "intro_first_100_chars",
    "faq_count",
    "has_faq_structured_data",
    "has_end_summary",
    "has_cta_section",
    "image_count",
    "missing_alt_count",
    "publishedTime",
    "modifiedTime",
    "route_file",
    "component_file",
    "notes",
  ].join("\t");

  const lines = [header];
  for (const row of rows) {
    lines.push(
      [
        row.priority,
        row.score,
        row.slug,
        row.pageTitle,
        row.chars,
        row.h2,
        row.h3,
        row.listOrTable,
        row.introFirst100,
        row.faqCount,
        row.hasFaqSd,
        row.hasSummaryEnd,
        row.hasCta,
        row.images,
        row.missingAlt,
        row.publishedTime,
        row.modifiedTime,
        row.routeFile,
        row.componentFile,
        row.notes,
      ]
        .map(tsvEscape)
        .join("\t"),
    );
  }

  const tsv = `${lines.join("\n")}\n`;
  if (!args.out) {
    process.stdout.write(tsv);
    return;
  }

  const outPath = path.isAbsolute(args.out) ? args.out : path.join(repoRoot, args.out);
  await ensureParentDir(outPath);
  await fs.writeFile(outPath, tsv);
  process.stdout.write(`${args.out}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

