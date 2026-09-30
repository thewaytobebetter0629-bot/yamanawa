import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const proxyPath = new URL("../src/proxy.ts", import.meta.url);

test("locale proxy excludes API routes", async () => {
  const proxy = await readFile(proxyPath, "utf8");
  assert.match(proxy, /api\//);
});
