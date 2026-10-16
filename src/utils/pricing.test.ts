import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateFurnitureQuote } from './pricing.ts';

test('calculates custom bed frame with router slot and king size', () => {
  const quote = calculateFurnitureQuote({
    furnitureType: 'bed_frame',
    sizePreset: 'king_7x7',
    woodGrade: 'premium_teak',
    finishType: 'natural_satin',
    includeRouterSlot: true,
  });

  assert.ok(quote.estimatedMinLKR > 145000);
  assert.ok(quote.estimatedMaxLKR > quote.estimatedMinLKR);
  assert.ok(quote.featuresSummary.some(f => f.includes('Router Slot')));
  assert.ok(quote.whatsAppMessage.includes('94767574239'));
});

test('applies budget-friendly teak discount multiplier', () => {
  const premium = calculateFurnitureQuote({
    furnitureType: 'glass_table',
    sizePreset: 'compact_coffee',
    woodGrade: 'premium_teak',
    finishType: 'gloss_lacquer',
    includeGlassTop: true,
  });

  const budget = calculateFurnitureQuote({
    furnitureType: 'glass_table',
    sizePreset: 'compact_coffee',
    woodGrade: 'hybrid_budget_teak',
    finishType: 'gloss_lacquer',
    includeGlassTop: true,
  });

  assert.ok(budget.estimatedMinLKR < premium.estimatedMinLKR);
  assert.equal(budget.woodGradeLabel, 'Budget-Optimized Teak & Hardwood Blend');
});

test('handles custom dimensions calculation correctly', () => {
  const custom = calculateFurnitureQuote({
    furnitureType: 'bed_frame',
    sizePreset: 'custom',
    customDimensions: { lengthFt: 8, widthFt: 7 },
    woodGrade: 'seasoned_teak',
    finishType: 'antique_honey',
  });

  assert.ok(custom.featuresSummary.some(f => f.includes('8x7 ft')));
  assert.ok(custom.estimatedMinLKR > 0);
});
