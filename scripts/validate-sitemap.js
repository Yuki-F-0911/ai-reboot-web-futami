#!/usr/bin/env node

const SITEMAP_URL = process.env.SITEMAP_URL ?? "http://localhost:3000/sitemap.xml";
const BLOG_MIN_COUNT = 200;
const GLOSSARY_MIN_COUNT = 50;

async function main() {
  const response = await fetch(SITEMAP_URL);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} (${SITEMAP_URL})`);
  }

  const xml = await response.text();
  const blogCount = (xml.match(/<loc>https:\/\/ai-reboot\.io\/academy\/blog\/[^<]+<\/loc>/g) || []).length;
  const glossaryCount = (xml.match(/<loc>https:\/\/ai-reboot\.io\/glossary\/[^<]+<\/loc>/g) || []).length;

  console.log(`sitemap: ${SITEMAP_URL}`);
  console.log(`academy/blog URL count: ${blogCount}`);
  console.log(`glossary URL count: ${glossaryCount}`);

  if (blogCount < BLOG_MIN_COUNT) {
    console.error(`ERROR: academy/blog URL count is too low (${blogCount} < ${BLOG_MIN_COUNT})`);
    process.exit(1);
  }

  if (glossaryCount < GLOSSARY_MIN_COUNT) {
    console.error(`ERROR: glossary URL count is too low (${glossaryCount} < ${GLOSSARY_MIN_COUNT})`);
    process.exit(1);
  }

  console.log("OK: sitemap validation passed");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
