import assert from 'node:assert/strict';
import test from 'node:test';
const base=process.env.SITE_TEST_URL;
test('restored services and market pages are reachable and distinguish proposals from delivered cases', {skip:!base}, async()=>{
  for(const prefix of ['', '/en']) {
    for(const path of ['/services','/insights','/about','/contact','/work']) {
      const response=await fetch(new URL(prefix+path,base));
      assert.equal(response.status,200,prefix+path);
      const html=await response.text();
      assert.ok(html.includes('href="'+prefix+'/services"'));
      if(path==='/services') assert.ok(html.includes(prefix ? 'not delivered case studies' : '並非已交付案例'));
      if(path==='/insights') assert.ok(html.includes('https://www.sme.gov.tw/article-tw-2877-13892'));
      if(path==='/work') assert.ok(html.includes('/video/yamanawa-home-demo.mp4'));
    }
  }
  const sitemap=await (await fetch(new URL('/sitemap.xml',base))).text();
  assert.ok(sitemap.includes('https://yamanawa.vercel.app/services'));
  assert.ok(sitemap.includes('https://yamanawa.vercel.app/en/insights'));
  assert.ok(!sitemap.includes('yamanawa.studio'));
});
