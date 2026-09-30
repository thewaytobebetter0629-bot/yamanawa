import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("contact page contains the project form and Gmail delivery endpoint", async () => {
  const [form, route] = await Promise.all([
    source("src/components/ContactForm.tsx"),
    source("src/app/api/contact/route.ts"),
  ]);

  for (const field of ["name", "contactMethod", "services", "projectBrief", "budget", "timeline", "references"]) {
    assert.match(form, new RegExp(field));
  }
  assert.match(route, /GMAIL_APP_PASSWORD/);
  assert.match(route, /smtp\.gmail\.com/);
});
