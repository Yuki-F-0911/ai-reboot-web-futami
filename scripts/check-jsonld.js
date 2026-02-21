#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const PROJECT_ROOT = process.cwd();
const BLOG_DIR = path.join(PROJECT_ROOT, "app", "academy", "blog");

function listBlogPages() {
  if (!fs.existsSync(BLOG_DIR)) {
    throw new Error(`Blog directory not found: ${BLOG_DIR}`);
  }

  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({
      slug: entry.name,
      filePath: path.join(BLOG_DIR, entry.name, "page.tsx"),
    }))
    .filter((entry) => fs.existsSync(entry.filePath))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

function extractJsxProps(source, componentName) {
  const selfClosingPattern = new RegExp(
    `<${componentName}\\b([\\s\\S]*?)\\/\\s*>`,
    "m"
  );
  const selfClosingMatch = selfClosingPattern.exec(source);
  if (selfClosingMatch) {
    return selfClosingMatch[1];
  }

  const pairPattern = new RegExp(
    `<${componentName}\\b([\\s\\S]*?)>([\\s\\S]*?)<\\/${componentName}>`,
    "m"
  );
  const pairMatch = pairPattern.exec(source);
  if (pairMatch) {
    return pairMatch[1];
  }

  return null;
}

function hasProp(propsText, propName) {
  const pattern = new RegExp(`\\b${propName}\\s*=`);
  return pattern.test(propsText);
}

function extractStringPropValue(propsText, propName) {
  const doubleQuoted = new RegExp(`\\b${propName}\\s*=\\s*"([^"]*)"`, "m");
  const singleQuoted = new RegExp(`\\b${propName}\\s*=\\s*'([^']*)'`, "m");

  const doubleMatch = doubleQuoted.exec(propsText);
  if (doubleMatch) {
    return doubleMatch[1];
  }

  const singleMatch = singleQuoted.exec(propsText);
  if (singleMatch) {
    return singleMatch[1];
  }

  return null;
}

function extractFaqItemsExpression(faqPropsText) {
  const itemsMatch = /\bitems\s*=\s*\{([\s\S]*?)\}/m.exec(faqPropsText);
  return itemsMatch ? itemsMatch[1].trim() : null;
}

function parseItemsExpression(expression) {
  const spreadIdentifier = /^\[\s*\.\.\.([A-Za-z_$][\w$]*)\s*\]$/.exec(
    expression
  );
  if (spreadIdentifier) {
    return { type: "identifier", value: spreadIdentifier[1] };
  }

  const plainIdentifier = /^([A-Za-z_$][\w$]*)$/.exec(expression);
  if (plainIdentifier) {
    return { type: "identifier", value: plainIdentifier[1] };
  }

  if (expression.startsWith("[")) {
    return { type: "arrayLiteral", value: expression };
  }

  return { type: "unknown", value: expression };
}

function extractConstArrayText(source, variableName) {
  const pattern = new RegExp(
    `(?:const|let|var)\\s+${variableName}\\s*=\\s*\\[([\\s\\S]*?)\\]\\s*(?:as\\s+const\\s*)?;`,
    "m"
  );
  const match = pattern.exec(source);
  if (!match) {
    return null;
  }
  return `[${match[1]}]`;
}

function countQuestionAnswerPairs(arrayText) {
  const objectMatches = arrayText.match(/\{[\s\S]*?\}/g) || [];
  let pairCount = 0;

  for (const objectText of objectMatches) {
    if (/\bquestion\s*:/.test(objectText) && /\banswer\s*:/.test(objectText)) {
      pairCount += 1;
    }
  }

  return pairCount;
}

function validateFaq(source, errors) {
  const faqPropsText = extractJsxProps(source, "FAQStructuredData");
  if (!faqPropsText) {
    errors.push('FAQPage JSON-LD 未検出（`@type: "FAQPage"` がない）');
    return;
  }

  const itemsExpression = extractFaqItemsExpression(faqPropsText);
  if (!itemsExpression) {
    errors.push("FAQPage の mainEntity 生成元（items）が未指定");
    return;
  }

  const parsedItemsExpression = parseItemsExpression(itemsExpression);
  let questionAnswerPairCount = 0;

  if (parsedItemsExpression.type === "identifier") {
    const arrayText = extractConstArrayText(source, parsedItemsExpression.value);
    if (!arrayText) {
      errors.push(
        `FAQPage の items 参照先 \`${parsedItemsExpression.value}\` を配列として解析できない`
      );
      return;
    }
    questionAnswerPairCount = countQuestionAnswerPairs(arrayText);
  } else if (parsedItemsExpression.type === "arrayLiteral") {
    questionAnswerPairCount = countQuestionAnswerPairs(parsedItemsExpression.value);
  } else {
    errors.push(`FAQPage の items 式を静的解析できない: ${itemsExpression}`);
    return;
  }

  if (questionAnswerPairCount < 1) {
    errors.push("FAQPage の mainEntity に Question/Answer が1件もない");
  }
}

function validateArticle(source, errors) {
  const articlePropsText = extractJsxProps(source, "ArticleStructuredData");
  if (!articlePropsText) {
    errors.push('Article JSON-LD 未検出（`@type: "Article"` がない）');
    return;
  }

  const articleType = extractStringPropValue(articlePropsText, "articleType") || "Article";
  if (articleType !== "Article") {
    errors.push(`Article JSON-LD の @type が "Article" ではない（現在: "${articleType}"）`);
  }

  if (!hasProp(articlePropsText, "title")) {
    errors.push("Article JSON-LD の headline 生成元（title）が未指定");
  }

  if (!hasProp(articlePropsText, "publishedTime")) {
    errors.push("Article JSON-LD の datePublished 生成元（publishedTime）が未指定");
  }

  const authorNameValue = extractStringPropValue(articlePropsText, "authorName");
  if (authorNameValue !== null && authorNameValue.trim() === "") {
    errors.push("Article JSON-LD の author が空文字");
  }
}

function validateBreadcrumb(source, notes) {
  const breadcrumbPropsText = extractJsxProps(source, "BreadcrumbStructuredData");
  if (!breadcrumbPropsText) {
    notes.push('BreadcrumbList（任意チェック）未検出（`@type: "BreadcrumbList"` なし）');
  }
}

function run() {
  const blogPages = listBlogPages();
  if (blogPages.length === 0) {
    console.log("対象ページが見つかりませんでした。");
    process.exitCode = 1;
    return;
  }

  let okCount = 0;
  let failCount = 0;

  for (const page of blogPages) {
    const source = fs.readFileSync(page.filePath, "utf8");
    const errors = [];
    const notes = [];

    validateFaq(source, errors);
    validateArticle(source, errors);
    validateBreadcrumb(source, notes);

    if (errors.length > 0) {
      failCount += 1;
      console.log(`❌ ${page.slug}: ${errors.join(" / ")}`);
      continue;
    }

    okCount += 1;
    if (notes.length > 0) {
      console.log(`✅ ${page.slug}: OK (${notes.join(" / ")})`);
    } else {
      console.log(`✅ ${page.slug}: OK`);
    }
  }

  const totalCount = blogPages.length;
  console.log(`\nSummary: ${okCount} / ${totalCount} OK`);

  if (failCount > 0) {
    process.exitCode = 1;
  }
}

try {
  run();
} catch (error) {
  console.error(`❌ check-jsonld 実行失敗: ${error.message}`);
  process.exitCode = 1;
}
