import assert from 'node:assert/strict';
import test from 'node:test';
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
let helpers;
try {
    helpers = await server.ssrLoadModule('/src/lib/newsBadges.ts');
} finally {
    await server.close();
}
const { getNewsBadgeDate, getActiveNewsBadges, hasPinBadge } = helpers;

test('both badge types support optional inclusive start and end dates', () => {
    for (const type of ['pin', 'wgs']) {
        const badges = [{ type, startDate: '2026-11-10', endDate: '2026-11-14' }];
        assert.deepEqual(getActiveNewsBadges(badges, '2026-11-09'), []);
        assert.deepEqual(getActiveNewsBadges(badges, '2026-11-10'), badges);
        assert.deepEqual(getActiveNewsBadges(badges, '2026-11-14'), badges);
        assert.deepEqual(getActiveNewsBadges(badges, '2026-11-15'), []);
        assert.deepEqual(getActiveNewsBadges([{ type }], '2026-11-10'), [{ type }]);
        assert.equal(getActiveNewsBadges([{ type, endDate: '2026-11-14' }], '2026-11-10').length, 1);
        assert.equal(getActiveNewsBadges([{ type, startDate: '2026-11-10' }], '2026-11-15').length, 1);
        assert.equal(getActiveNewsBadges([{ type, startDate: '2026-11-15', endDate: '2026-11-10' }], '2026-11-12').length, 0);
    }
    assert.deepEqual(getActiveNewsBadges(undefined, '2026-11-10'), []);
});

test('badge dates use Berlin midnight in winter and summer', () => {
    assert.equal(getNewsBadgeDate(new Date('2026-11-14T22:59:59Z')), '2026-11-14');
    assert.equal(getNewsBadgeDate(new Date('2026-11-14T23:00:00Z')), '2026-11-15');
    assert.equal(getNewsBadgeDate(new Date('2026-06-14T21:59:59Z')), '2026-06-14');
    assert.equal(getNewsBadgeDate(new Date('2026-06-14T22:00:00Z')), '2026-06-15');
});

test('only active pin badges promote cards, preserving order within groups', () => {
    const cards = [
        { id: 'newest', badges: [] },
        { id: 'pin', badges: [{ type: 'pin', endDate: '2026-11-14' }] },
        { id: 'wgs', badges: [{ type: 'wgs' }] },
        { id: 'older-pin', badges: [{ type: 'pin' }] },
    ];
    const order = (today) => cards
        .map(({ id, badges }) => ({ id, badges: getActiveNewsBadges(badges, today) }))
        .sort((left, right) => Number(hasPinBadge(right.badges)) - Number(hasPinBadge(left.badges)))
        .map(({ id }) => id);
    assert.deepEqual(order('2026-11-14'), ['pin', 'older-pin', 'newest', 'wgs']);
    assert.deepEqual(order('2026-11-15'), ['older-pin', 'newest', 'pin', 'wgs']);
    assert.deepEqual(cards.map(({ id }) => id), ['newest', 'pin', 'wgs', 'older-pin']);
});
