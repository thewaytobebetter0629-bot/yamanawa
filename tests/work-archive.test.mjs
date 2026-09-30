import assert from 'node:assert/strict';
import test from 'node:test';
import { projects } from '../src/data/projects.ts';
test('archive has stable unique identifiers and numbered URLs', () => {
  assert.deepEqual(projects.slice(0, 3).map(p => p.code), ['YMW-001', 'YMW-002', 'YMW-003']);
  assert.equal(new Set(projects.map(p => p.code)).size, projects.length);
  assert.equal(new Set(projects.map(p => p.slug)).size, projects.length);
  for (const p of projects) {
    assert.ok(p.slug.startsWith(p.code.toLowerCase() + '-'));
    assert.ok(p.categoryLabel['zh-TW'] && p.categoryLabel.en);
    assert.ok(p.cover && p.coverAlt['zh-TW'] && p.coverAlt.en);
  }
});
