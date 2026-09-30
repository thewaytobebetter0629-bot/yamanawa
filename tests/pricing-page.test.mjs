import assert from 'node:assert/strict';
import test from 'node:test';
const base = process.env.SITE_TEST_URL;
test('engagement pages serve scoped fees, maintenance boundaries and a contact path in both languages', {skip: !base}, async () => {
  for (const [path, labels] of [
    ['/pricing', ['需求診斷與原型', '工作流與 App 建置', '維護與持續優化', '第三方訂閱', '驗收標準']],
    ['/en/pricing', ['Discovery &amp; prototype', 'Workflow &amp; app implementation', 'Care &amp; continuous improvement', 'acceptance criteria']],
  ]) {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 200);
    const html = await response.text();
    for (const label of labels) assert.ok(html.includes(label), `${path}: ${label}`);
    assert.ok(html.includes('href="' + (path.startsWith('/en') ? '/en/contact' : '/contact') + '"'));
    assert.ok(!html.includes('NT$600'), 'old website-only care price must not apply to app and automation care');
  }
});
