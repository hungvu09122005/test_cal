// tests/scripts/TC-MUL.spec.js
// Test cases: TC-MUL-001 đến TC-MUL-004 (Phép Nhân - Multiplication)

const { test, expect } = require('@playwright/test');
const { openCalculator, calculate, getAnswer, SELECTORS } = require('./helpers/calculator');

test.describe('TC-MUL | Multiplication (Phép Nhân)', () => {

  // TC-MUL-001: Nhân hai số nguyên dương
  test('TC-MUL-001 | Nhân hai số nguyên dương (7 * 8 = 56)', async ({ page }) => {
    await openCalculator(page, '0');
    await calculate(page, { first: '7', second: '8', operation: 'Multiply' });

    const answer = await getAnswer(page);
    expect(answer).toBe('56');

    const error = await page.locator(SELECTORS.errorMsg).textContent();
    expect(error?.trim()).toBe('');
  });

  // TC-MUL-002: Nhân một số với 0
  test('TC-MUL-002 | Nhân với số 0 (125 * 0 = 0)', async ({ page }) => {
    await openCalculator(page, '0');
    await calculate(page, { first: '125', second: '0', operation: 'Multiply' });

    const answer = await getAnswer(page);
    expect(answer).toBe('0');

    const error = await page.locator(SELECTORS.errorMsg).textContent();
    expect(error?.trim()).toBe('');
  });

  // TC-MUL-003: Nhân số âm với số dương
  test('TC-MUL-003 | Nhân số âm với số dương (-6 * 9 = -54)', async ({ page }) => {
    await openCalculator(page, '0');
    await calculate(page, { first: '-6', second: '9', operation: 'Multiply' });

    const answer = await getAnswer(page);
    expect(answer).toBe('-54');

    const error = await page.locator(SELECTORS.errorMsg).textContent();
    expect(error?.trim()).toBe('');
  });

  // TC-MUL-004: Nhân số thập phân với tùy chọn Integers only
  test('TC-MUL-004 | Nhân thập phân với Integers only (3.5 * 3 = 10 khi tích Integers only)', async ({ page }) => {
    await openCalculator(page, '0');
    await calculate(page, { first: '3.5', second: '3', operation: 'Multiply', integerOnly: true });

    const answer = await getAnswer(page);
    expect(answer).toBe('10');

    const error = await page.locator(SELECTORS.errorMsg).textContent();
    expect(error?.trim()).toBe('');
  });

});
