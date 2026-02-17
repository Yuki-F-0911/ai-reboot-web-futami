import fs from "node:fs/promises";
import path from "node:path";

const DEFAULT_IGNORES = new Set(["node_modules", ".next", ".git", "dist", "out", "coverage"]);

function parseArgs(argv) {
  const args = { out: null, all: false, roots: ["app", "components"] };
  for (let i = 2; i < argv.length; i += 1) {
    if (argv[i] === "--out") {
      args.out = argv[i + 1] ?? null;
      i += 1;
      continue;
    }
    if (argv[i] === "--all") {
      args.all = true;
      args.roots = null;
      continue;
    }
    if (argv[i] === "--roots") {
      const raw = argv[i + 1] ?? "";
      args.roots = raw
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      i += 1;
    }
  }
  return args;
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

async function* walkFiles(dir, { ignores }) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      if (ignores.has(entry.name)) continue;
    }
    if (ignores.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkFiles(fullPath, { ignores });
      continue;
    }
    if (entry.isFile()) yield fullPath;
  }
}

function isTextLikeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return [".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".md", ".mdx", ".json", ".yml", ".yaml"].includes(ext);
}

function toRepoRel(repoRoot, filePath) {
  return path.relative(repoRoot, filePath).replaceAll(path.sep, "/");
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

  const invalid = [];

  const blogHrefRe = /\/academy\/blog\/([a-z0-9-]+)/g;
  const blogAbsRe = /https?:\/\/ai-reboot\.io\/academy\/blog\/([a-z0-9-]+)/g;

  const scanRoots = args.roots ? args.roots.map((r) => path.join(repoRoot, r)) : [repoRoot];
  for (const scanRoot of scanRoots) {
    for await (const filePath of walkFiles(scanRoot, { ignores: DEFAULT_IGNORES })) {
    if (!isTextLikeFile(filePath)) continue;
    const source = await fs.readFile(filePath, "utf8");

    for (const re of [blogHrefRe, blogAbsRe]) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(source)) !== null) {
        const target = m[1];
        if (!slugSet.has(target)) {
          invalid.push({ file: toRepoRel(repoRoot, filePath), target });
        }
      }
    }
  }
  }

  const lines = [];
  lines.push(`Valid slugs: ${slugs.length}`);
  lines.push(`Scan scope: ${args.all ? "repo-root" : (args.roots ?? []).join(",")}`);
  lines.push(`Invalid references: ${invalid.length}`);
  lines.push("");
  for (const item of invalid.sort((a, b) => (a.file + a.target).localeCompare(b.file + b.target))) {
    lines.push(`${item.file}\t${item.target}`);
  }
  const out = `${lines.join("\n")}\n`;

  if (args.out) {
    const outPath = path.isAbsolute(args.out) ? args.out : path.join(repoRoot, args.out);
    await ensureParentDir(outPath);
    await fs.writeFile(outPath, out);
  } else {
    process.stdout.write(out);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
