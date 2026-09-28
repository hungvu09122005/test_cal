// tests/scripts/TC-SUB.spec.js
// Test cases: TC-SUB-001 đến TC-SUB-004 (Phép Trừ - Subtraction)

const { test, expect } = require('@playwright/test');
const { openCalculator, calculate, getAnswer, SELECTORS } = require('./helpers/calculator');

test.describe('TC-SUB | Subtraction (Phép Trừ)', () => {

  // TC-SUB-001: Trừ hai số nguyên dương cho kết quả dương
  test('TC-SUB-001 | Trừ hai số nguyên dương (50 - 20 = 30)', async ({ page }) => {
    await openCalculator(page, '0');
    await calculate(page, { first: '50', second: '20', operation: 'Subtract' });

    const answer = await getAnswer(page);
    expect(answer).toBe('30');

    const error = await page.locator(SELECTORS.errorMsg).textContent();
    expect(error?.trim()).toBe('');
  });

  // TC-SUB-002: Trừ số nhỏ cho số lớn cho kết quả âm
  test('TC-SUB-002 | Trừ ra kết quả âm (15 - 40 = -25)', async ({ page }) => {
    await openCalculator(page, '0');
    await calculate(page, { first: '15', second: '40', operation: 'Subtract' });

    const answer = await getAnswer(page);
    expect(answer).toBe('-25');

    const error = await page.locator(SELECTORS.errorMsg).textContent();
    expect(error?.trim()).toBe('');
  });

  // TC-SUB-003: Trừ hai số thập phân
  test('TC-SUB-003 | Trừ hai số thập phân (10.5 - 3.2 = 7.3)', async ({ page }) => {
    await openCalculator(page, '0');
    await calculate(page, { first: '10.5', second: '3.2', operation: 'Subtract' });

    const answer = await getAnswer(page);
    expect(answer).toBe('7.3');

    const error = await page.locator(SELECTORS.errorMsg).textContent();
    expect(error?.trim()).toBe('');
  });

  // TC-SUB-004: Trừ hai số bằng nhau cho kết quả bằng 0
  test('TC-SUB-004 | Trừ hai số bằng nhau (99 - 99 = 0)', async ({ page }) => {
    await openCalculator(page, '0');
    await calculate(page, { first: '99', second: '99', operation: 'Subtract' });

    const answer = await getAnswer(page);
    expect(answer).toBe('0');

    const error = await page.locator(SELECTORS.errorMsg).textContent();
    expect(error?.trim()).toBe('');
  });

});
