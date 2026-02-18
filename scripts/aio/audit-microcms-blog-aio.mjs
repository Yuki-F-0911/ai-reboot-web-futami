import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { URL } from "node:url";

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function parseArgs(argv) {
  const date = todayIso();
  const args = {
    outTsv: `reports/aio/microcms-blog-aio-audit.${date}.tsv`,
    outMd: `reports/aio/microcms-blog-aio-audit.${date}.md`,
    endpoint: "news",
    stdout: false,
  };

  for (let i = 2; i < argv.length; i += 1) {
    const value = argv[i];
    if (value === "--out-tsv") {
      args.outTsv = argv[i + 1] ?? args.outTsv;
      i += 1;
      continue;
    }
    if (value === "--out-md") {
      args.outMd = argv[i + 1] ?? args.outMd;
      i += 1;
      continue;
    }
    if (value === "--endpoint") {
      args.endpoint = argv[i + 1] ?? args.endpoint;
      i += 1;
      continue;
    }
    if (value === "--stdout") {
      args.stdout = true;
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

function normalizeServiceDomain(input) {
  const raw = String(input ?? "").trim();
  if (!raw) return "";

  const strippedProtocol = raw.replace(/^https?:\/\//, "");
  const noPath = strippedProtocol.split("/")[0] ?? strippedProtocol;
  const noHostSuffix = noPath.replace(/\.microcms\.io$/i, "");
  return noHostSuffix;
}

function toPlainText(input) {
  return String(input ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/!\[[^\]]*]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[`*_>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeCategoryValues(category) {
  if (!category) return [];
  if (Array.isArray(category)) return category.map((v) => String(v).trim()).filter(Boolean);
  return [String(category).trim()].filter(Boolean);
}

const BLOG_CATEGORY_EN = new Set(["featured", "ai-trends", "case-study", "tutorial", "prompts", "tools"]);
const BLOG_CATEGORY_JA = new Set(["注目記事", "AIトレンド", "活用事例", "チュートリアル", "プロンプト集", "ツール紹介"]);

function isBlogCategory(category) {
  const values = normalizeCategoryValues(category);
  return values.some((v) => BLOG_CATEGORY_EN.has(v) || BLOG_CATEGORY_JA.has(v));
}

function countMarkdownHeadings(markdown) {
  const s = String(markdown ?? "");
  const h2 = s.match(/^##\s+.+$/gm)?.length ?? 0;
  const h3 = s.match(/^###\s+.+$/gm)?.length ?? 0;
  return { h2, h3 };
}

function countHtmlHeadings(html) {
  const s = String(html ?? "");
  const h2 = s.match(/<h2\b/gi)?.length ?? 0;
  const h3 = s.match(/<h3\b/gi)?.length ?? 0;
  return { h2, h3 };
}

function extractFaqItemsFromMarkdown(markdown) {
  const md = String(markdown ?? "");
  if (!md) return [];

  const lines = md.split("\n");
  const faqHeadingRegex = /^#{2,6}\s*(faq|ｆａｑ|よくある質問|よくあるご質問)(\s|$)/i;

  let startIndex = -1;
  let startHeadingLevel = 0;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!faqHeadingRegex.test(line)) continue;

    const m = line.match(/^(#{2,6})\s+/);
    startHeadingLevel = m?.[1]?.length ?? 2;
    startIndex = i + 1;
    break;
  }

  if (startIndex < 0) return [];

  let endIndex = lines.length;
  for (let i = startIndex; i < lines.length; i += 1) {
    const line = lines[i].trim();
    const headingMatch = line.match(/^(#{1,6})\s+/);
    if (!headingMatch) continue;
    const level = headingMatch[1].length;
    if (level <= startHeadingLevel) {
      endIndex = i;
      break;
    }
  }

  const sectionLines = lines.slice(startIndex, endIndex);
  const sectionText = sectionLines.join("\n").trim();
  if (!sectionText) return [];

  const items = [];
  let currentQuestion = null;
  let currentAnswerLines = [];

  const flush = () => {
    if (!currentQuestion) return;
    const question = toPlainText(currentQuestion);
    const answer = toPlainText(currentAnswerLines.join("\n"));
    if (!question || !answer) {
      currentQuestion = null;
      currentAnswerLines = [];
      return;
    }
    items.push({ question, answer });
    currentQuestion = null;
    currentAnswerLines = [];
  };

  const questionHeadingRegex =
    /^#{3,6}\s*(?:q(?:\d+)?[.：:]?\s*)?(.+)\s*$|^[-*]?\s*\*\*\s*q(?:\d+)?[.：:]?\s*(.+?)\s*\*\*\s*$/i;
  const questionLineRegex = /^[-*]?\s*(?:q(?:\d+)?[.：:]|\*\*q(?:\d+)?[.：:]\*\*)\s*(.+)\s*$/i;
  const answerLineRegex = /^[-*]?\s*(?:a[.：:]|\*\*a[.：:]\*\*)\s*(.+)\s*$/i;

  for (const rawLine of sectionLines) {
    const line = rawLine.trim();
    if (!line) {
      if (currentQuestion) currentAnswerLines.push("");
      continue;
    }

    const headingMatch = line.match(questionHeadingRegex);
    if (headingMatch) {
      flush();
      currentQuestion = (headingMatch[1] ?? headingMatch[2] ?? "").trim();
      continue;
    }

    const questionMatch = line.match(questionLineRegex);
    if (questionMatch) {
      flush();
      currentQuestion = questionMatch[1].trim();
      continue;
    }

    const answerMatch = line.match(answerLineRegex);
    if (answerMatch) {
      if (!currentQuestion) continue;
      currentAnswerLines.push(answerMatch[1].trim());
      continue;
    }

    if (currentQuestion) currentAnswerLines.push(line);
  }

  flush();

  return items.filter((item) => item.question.length >= 4 && item.answer.length >= 10);
}

function hasSummaryEndFromMarkdown(markdown) {
  const md = String(markdown ?? "");
  if (!md) return false;
  const headings = [...md.matchAll(/^##\s+(.+)$/gm)].map((m) => (m?.[1] ?? "").trim()).filter(Boolean);
  const tail = headings.slice(-3).join(" ");
  return /(まとめ|要点整理|結論|おわりに|まとめと次の一手)/.test(tail);
}

function hasSummaryEndFromHtml(html) {
  const s = String(html ?? "");
  if (!s) return false;
  const headings = [...s.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/gis)]
    .map((m) => toPlainText(m?.[1] ?? ""))
    .filter(Boolean);
  const tail = headings.slice(-3).join(" ");
  return /(まとめ|要点整理|結論|おわりに|まとめと次の一手)/.test(tail);
}

function hasCta(content) {
  const s = String(content ?? "");
  if (!s) return false;
  return /(\/contact\b|\/academy\b|\/corporate\b|\/briefing\b)/.test(s);
}

function staleSignals(content) {
  const s = toPlainText(content);
  const years = new Set();
  for (const m of s.matchAll(/\b(20\d{2})\b/g)) {
    const year = Number(m[1]);
    if (Number.isFinite(year)) years.add(year);
  }

  const currentYear = new Date().getFullYear();
  const staleYears = [...years].filter((y) => y <= currentYear - 2).sort((a, b) => a - b);

  const keywordHits = [];
  if (/(価格|料金|月額|年額|税込|税抜|¥|円|USD|ドル)/.test(s)) keywordHits.push("pricing");
  if (/(旧称|以前は|改称|サービス終了|提供終了|廃止)/.test(s)) keywordHits.push("renamed_or_ended");
  if (/(202[0-5]年版|最新版|最新(情報|版)|本日|今月|今年)/.test(s)) keywordHits.push("time_sensitive");

  return {
    staleYears,
    keywordHits: [...new Set(keywordHits)],
  };
}

function scoreArticle(signals) {
  const introScore = signals.hasDescription
    ? signals.descriptionLength >= 80
      ? 25
      : signals.descriptionLength >= 40
        ? 15
        : 8
    : 0;

  const headingsScore =
    signals.h2Count >= 3 && signals.h3Count >= 2 ? 25 : signals.h2Count >= 2 ? 15 : signals.h2Count >= 1 ? 8 : 0;

  const faqScore = signals.faqItemCount >= 2 ? 20 : 0;
  const summaryScore = signals.hasSummaryEnd ? 20 : 0;
  const ctaScore = signals.hasCta ? 10 : 0;

  const total = introScore + headingsScore + faqScore + summaryScore + ctaScore;
  return { introScore, headingsScore, faqScore, summaryScore, ctaScore, total };
}

function priorityScore(signals) {
  let p = 0;
  if (signals.staleYears.length > 0) p += 30;
  if (signals.keywordHits.length > 0) p += 10;
  if (!signals.hasDescription) p += 10;
  if (signals.h2Count < 2) p += 15;
  if (signals.faqItemCount < 2) p += 15;
  if (!signals.hasSummaryEnd) p += 15;
  if (!signals.hasCta) p += 10;
  if (signals.ageDays >= 730) p += 20;
  else if (signals.ageDays >= 365) p += 10;
  return p;
}

async function microCmsFetchJson(url, apiKey) {
  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`microCMS fetch failed: ${res.status} ${res.statusText} (${url})\n${text.slice(0, 500)}`);
  }
  return res.json();
}

async function fetchAllContents({ serviceDomain, apiKey, endpoint }) {
  const normalizedServiceDomain = normalizeServiceDomain(serviceDomain);
  if (!normalizedServiceDomain) throw new Error("MICROCMS_SERVICE_DOMAIN is empty");
  if (!apiKey) throw new Error("MICROCMS_API_KEY is empty");

  const baseUrl = `https://${normalizedServiceDomain}.microcms.io/api/v1/${endpoint}`;
  const fields = [
    "id",
    "title",
    "createdAt",
    "updatedAt",
    "publishedAt",
    "revisedAt",
    "category",
    "description",
    "content",
    "md-content",
    "thumbnail",
    "tags",
  ].join(",");

  const limit = 100;
  let offset = 0;
  let totalCount = 0;
  const contents = [];

  while (true) {
    const u = new URL(baseUrl);
    u.searchParams.set("limit", String(limit));
    u.searchParams.set("offset", String(offset));
    u.searchParams.set("orders", "-publishedAt");
    u.searchParams.set("fields", fields);

    const data = await microCmsFetchJson(u.toString(), apiKey);
    const pageContents = Array.isArray(data?.contents) ? data.contents : [];
    totalCount = Number(data?.totalCount ?? totalCount) || totalCount;

    contents.push(...pageContents);
    offset += pageContents.length;

    if (pageContents.length === 0) break;
    if (totalCount && offset >= totalCount) break;
    if (!totalCount && pageContents.length < limit) break;
  }

  return { contents, totalCount };
}

function daysBetween(isoString, nowMs) {
  const d = new Date(isoString);
  const t = d.getTime();
  if (!Number.isFinite(t)) return null;
  const diffDays = Math.floor((nowMs - t) / (1000 * 60 * 60 * 24));
  return Number.isFinite(diffDays) ? diffDays : null;
}

async function main() {
  const args = parseArgs(process.argv);

  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  if (!serviceDomain || !apiKey) {
    const message = [
      "microCMS audit skipped: required env vars are missing.",
      `- MICROCMS_SERVICE_DOMAIN: ${serviceDomain ? "set" : "missing"}`,
      `- MICROCMS_API_KEY: ${apiKey ? `set (length: ${apiKey.length})` : "missing"}`,
      "",
      "Set env vars and rerun:",
      "- MICROCMS_SERVICE_DOMAIN=... MICROCMS_API_KEY=... node scripts/aio/audit-microcms-blog-aio.mjs",
      "",
    ].join("\n");

    if (args.stdout) {
      process.stdout.write(message);
      return;
    }

    await ensureParentDir(args.outMd);
    await fs.writeFile(args.outMd, message, "utf8");
    return;
  }

  const nowMs = Date.now();
  const { contents } = await fetchAllContents({ serviceDomain, apiKey, endpoint: args.endpoint });

  const blogArticles = contents.filter((a) => isBlogCategory(a?.category));

  const rows = blogArticles.map((article) => {
    const title = String(article?.title ?? "");
    const id = String(article?.id ?? "");
    const publishedAt = String(article?.publishedAt ?? "");
    const revisedAt = String(article?.revisedAt ?? article?.updatedAt ?? "");
    const category = normalizeCategoryValues(article?.category).join(", ");
    const tags = Array.isArray(article?.tags) ? article.tags.map((t) => String(t)).filter(Boolean) : [];
    const description = String(article?.description ?? "");

    const md = String(article?.["md-content"] ?? "");
    const html = String(article?.content ?? "");
    const mainContent = md || html || "";

    const headingCounts = md ? countMarkdownHeadings(md) : countHtmlHeadings(html);
    const faqItems = md ? extractFaqItemsFromMarkdown(md) : [];
    const hasSummaryEnd = md ? hasSummaryEndFromMarkdown(md) : hasSummaryEndFromHtml(html);

    const ageDays = daysBetween(revisedAt || publishedAt, nowMs) ?? 0;
    const { staleYears, keywordHits } = staleSignals([title, description, mainContent].join("\n"));

    const signals = {
      id,
      title,
      publishedAt,
      revisedAt,
      category,
      tagsCount: tags.length,
      hasDescription: Boolean(description),
      descriptionLength: description.length,
      h2Count: headingCounts.h2,
      h3Count: headingCounts.h3,
      faqItemCount: faqItems.length,
      hasSummaryEnd,
      hasCta: hasCta(mainContent),
      staleYears,
      keywordHits,
      ageDays,
    };

    const score = scoreArticle(signals);
    const priority = priorityScore({ ...signals, scoreTotal: score.total });

    return { signals, score, priority };
  });

  rows.sort((a, b) => b.priority - a.priority || a.score.total - b.score.total || b.signals.ageDays - a.signals.ageDays);

  const tsvHeader = [
    "priority",
    "score_total",
    "id",
    "title",
    "publishedAt",
    "revisedAt",
    "age_days",
    "category",
    "tags_count",
    "has_description",
    "h2",
    "h3",
    "faq_items",
    "has_summary_end",
    "has_cta",
    "stale_years",
    "stale_keywords",
  ].join("\t");

  const tsvLines = rows.map(({ signals, score, priority }) =>
    [
      priority,
      score.total,
      signals.id,
      signals.title,
      signals.publishedAt,
      signals.revisedAt,
      signals.ageDays,
      signals.category,
      signals.tagsCount,
      signals.hasDescription ? 1 : 0,
      signals.h2Count,
      signals.h3Count,
      signals.faqItemCount,
      signals.hasSummaryEnd ? 1 : 0,
      signals.hasCta ? 1 : 0,
      signals.staleYears.join(","),
      signals.keywordHits.join(","),
    ]
      .map(tsvEscape)
      .join("\t")
  );

  const mdLines = [];
  mdLines.push(`# microCMS /blog AIO構造監査（${todayIso()}）`);
  mdLines.push("");
  mdLines.push(`- 対象: microCMS \`${args.endpoint}\` エンドポイント内の「ブログカテゴリー」記事`);
  mdLines.push(`- ブログ記事数: **${rows.length}**`);
  mdLines.push(`- 生成日時: ${new Date().toISOString()}`);
  mdLines.push("");
  mdLines.push("## 優先度付きリスト（上位20件）");
  mdLines.push("");
  mdLines.push("| 優先度 | 総合スコア | 記事 | 公開日 | 更新日 | 経過(日) | 不足/注意 |");
  mdLines.push("|---:|---:|---|---|---|---:|---|");
  for (const { signals, score, priority } of rows.slice(0, 20)) {
    const lacks = [];
    if (!signals.hasDescription) lacks.push("導入");
    if (signals.h2Count < 2) lacks.push("見出し");
    if (signals.faqItemCount < 2) lacks.push("FAQ");
    if (!signals.hasSummaryEnd) lacks.push("まとめ");
    if (!signals.hasCta) lacks.push("CTA");
    if (signals.staleYears.length > 0) lacks.push(`古い年(${signals.staleYears.join(",")})`);
    if (signals.keywordHits.length > 0) lacks.push(`要確認(${signals.keywordHits.join(",")})`);

    const title = signals.title || signals.id;
    mdLines.push(
      `| ${priority} | ${score.total} | ${title} (\`/blog/${signals.id}\`) | ${signals.publishedAt.slice(0, 10)} | ${signals.revisedAt.slice(0, 10)} | ${signals.ageDays} | ${lacks.join(" / ")} |`
    );
  }
  mdLines.push("");
  mdLines.push("## TSV");
  mdLines.push("");
  mdLines.push(`- \`${args.outTsv}\` を参照（列: priority, score_total, id, ...）`);
  mdLines.push("");

  const tsvOut = `${tsvHeader}\n${tsvLines.join("\n")}\n`;
  const mdOut = `${mdLines.join("\n")}\n`;

  if (args.stdout) {
    process.stdout.write(tsvOut);
    return;
  }

  await ensureParentDir(args.outTsv);
  await ensureParentDir(args.outMd);
  await Promise.all([fs.writeFile(args.outTsv, tsvOut, "utf8"), fs.writeFile(args.outMd, mdOut, "utf8")]);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

