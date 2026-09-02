import { existsSync } from "node:fs";
import { resolve } from "node:path";

const appDir = resolve(".next/server/app");
const routes = [
  "page.js",
  "services/page.js",
  "workloads/page.js",
  "about/page.js",
  "faq/page.js",
  "compliance/page.js",
  "contact/page.js",
  "legal/privacy/page.js",
  "legal/cookies/page.js",
  "legal/terms/page.js",
];

const missing = routes.filter((route) => !existsSync(resolve(appDir, route)));

if (missing.length > 0) {
  console.error("Missing built routes:");
  for (const route of missing) console.error(`  ${route}`);
  process.exit(1);
}

console.log(`Checked ${routes.length} production routes.`);
