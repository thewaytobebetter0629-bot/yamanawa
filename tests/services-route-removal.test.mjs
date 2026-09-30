import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("site navigation and homepage service cards lead visitors to pricing", async () => {
  const [site, servicesSection] = await Promise.all([
    source("src/lib/site.ts"),
    source("src/components/home/ServicesSection.tsx"),
  ]);

  assert.doesNotMatch(site, /"services"/);
  assert.doesNotMatch(servicesSection, /\/services/);
  assert.match(servicesSection, /\/pricing/);
});
