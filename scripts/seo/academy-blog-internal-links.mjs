import fs from "node:fs/promises";
import path from "node:path";

function parseArgs(argv) {
  const args = { out: null, format: "tsv" };
  for (let i = 2; i < argv.length; i += 1) {
    const value = argv[i];
    if (value === "--out") {
      args.out = argv[i + 1] ?? null;
      i += 1;
      continue;
    }
    if (value === "--json") {
      args.format = "json";
      continue;
    }
    if (value === "--tsv") {
      args.format = "tsv";
      continue;
    }
  }
  return args;
}

function tsvEscape(value) {
  const s = String(value ?? "");
  return s.replaceAll("\t", " ").replaceAll("\n", " ").replaceAll("\r", " ");
}

function extractPageTitle(routeSource) {
  const m = routeSource.match(/const\s+pageTitle\s*=\s*["']([^"']+)["'];/);
  return m?.[1] ?? "";
}

function extractComponentImport(routeSource) {
  const m = routeSource.match(
    /import\s+\w+\s+from\s+["']@\/components\/academyLanding\/blog\/([^"']+)["'];/,
  );
  if (!m) return null;
  return `components/academyLanding/blog/${m[1]}.tsx`;
}

function extractAcademyBlogHrefs(componentSource) {
  const hrefs = [];

  const patterns = [
    /\bhref\s*=\s*["'](\/academy\/blog\/[a-z0-9-]+)["']/gi,
    /\bhref\s*=\s*\{\s*["'](\/academy\/blog\/[a-z0-9-]+)["']\s*\}/gi,
  ];

  for (const re of patterns) {
    let m;
    while ((m = re.exec(componentSource)) !== null) {
      hrefs.push(m[1]);
    }
  }

  return hrefs;
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

async function ensureParentDir(filePath) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
}

async function main() {
  const args = parseArgs(process.argv);
  const repoRoot = process.cwd();

  const slugs = await listAcademyBlogSlugs(repoRoot);
  const slugSet = new Set(slugs);

  const rows = [];

  for (const slug of slugs) {
    const routePath = path.join(repoRoot, "app", "academy", "blog", slug, "page.tsx");
    const routeSource = await fs.readFile(routePath, "utf8");
    const title = extractPageTitle(routeSource);

    const componentRelPath = extractComponentImport(routeSource);
    if (!componentRelPath) {
      throw new Error(`Failed to find component import for slug "${slug}" in ${routePath}`);
    }

    const componentPath = path.join(repoRoot, componentRelPath);
    const componentSource = await fs.readFile(componentPath, "utf8");

    const hrefs = extractAcademyBlogHrefs(componentSource);
    const uniqueHrefs = Array.from(new Set(hrefs)).sort((a, b) => a.localeCompare(b));

    const broken = uniqueHrefs
      .map((href) => href.replace(/^\/academy\/blog\//, ""))
      .filter((targetSlug) => !slugSet.has(targetSlug));

    rows.push({
      slug,
      title,
      component: componentRelPath,
      internalHrefs: uniqueHrefs,
      brokenTargets: broken,
    });
  }

  if (args.format === "json") {
    const out = JSON.stringify({ slugs, rows }, null, 2);
    if (args.out) {
      const outPath = path.isAbsolute(args.out) ? args.out : path.join(repoRoot, args.out);
      await ensureParentDir(outPath);
      await fs.writeFile(outPath, out);
    } else {
      process.stdout.write(out);
    }
    return;
  }

  const header = [
    "slug",
    "title",
    "component_file",
    "internal_links_count",
    "internal_links",
    "broken_links",
  ].join("\t");

  const lines = [header];
  for (const row of rows) {
    lines.push(
      [
        row.slug,
        row.title,
        row.component,
        row.internalHrefs.length,
        row.internalHrefs.join(" "),
        row.brokenTargets.join(" "),
      ]
        .map(tsvEscape)
        .join("\t"),
    );
  }

  const tsv = `${lines.join("\n")}\n`;
  if (args.out) {
    const outPath = path.isAbsolute(args.out) ? args.out : path.join(repoRoot, args.out);
    await ensureParentDir(outPath);
    await fs.writeFile(outPath, tsv);
  } else {
    process.stdout.write(tsv);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
