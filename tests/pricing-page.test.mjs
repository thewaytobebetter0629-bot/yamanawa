import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pagePath = new URL("../src/app/[locale]/pricing/page.tsx", import.meta.url);

test("pricing page presents the four current service packages and contact CTA", async () => {
  const page = await readFile(pagePath, "utf8");

  for (const expectedText of [
    "產品商業影像",
    "產品動畫",
    "產品情境動畫",
    "品牌網站設計與建置",
    "NT\\$25,000",
    "NT\\$600",
    "初步視覺規劃",
    "填寫合作表單",
  ]) {
    assert.match(page, new RegExp(expectedText));
  }

  assert.doesNotMatch(page, /<ComingSoon/);
});
