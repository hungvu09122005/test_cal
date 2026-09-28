// tests/scripts/TC-ADD.spec.js
// Test cases: TC-ADD-001 đến TC-ADD-006 (Phép Cộng - Addition)

const { test, expect } = require('@playwright/test');
const { openCalculator, calculate, getAnswer, SELECTORS } = require('./helpers/calculator');

test.describe('TC-ADD | Addition (Phép Cộng)', () => {

  // TC-ADD-001: Cộng hai số nguyên dương hợp lệ
  test('TC-ADD-001 | Cộng hai số nguyên dương hợp lệ (15 + 25 = 40)', async ({ page }) => {
    await openCalculator(page, '0'); // Prototype
    await calculate(page, { first: '15', second: '25', operation: 'Add' });

    const answer = await getAnswer(page);
    expect(answer).toBe('40');

    const error = await page.locator(SELECTORS.errorMsg).textContent();
    expect(error?.trim()).toBe('');
  });

  // TC-ADD-002: Cộng hai số thực (thập phân) hợp lệ
  test('TC-ADD-002 | Cộng hai số thập phân (12.35 + 7.65 = 20)', async ({ page }) => {
    await openCalculator(page, '0');
    await calculate(page, { first: '12.35', second: '7.65', operation: 'Add' });

    const answer = await getAnswer(page);
    expect(answer).toBe('20');

    const error = await page.locator(SELECTORS.errorMsg).textContent();
    expect(error?.trim()).toBe('');
  });

  // TC-ADD-003: Cộng số nguyên âm với số nguyên dương
  test('TC-ADD-003 | Cộng số âm và số dương (-30 + 10 = -20)', async ({ page }) => {
    await openCalculator(page, '0');
    await calculate(page, { first: '-30', second: '10', operation: 'Add' });

    const answer = await getAnswer(page);
    expect(answer).toBe('-20');

    const error = await page.locator(SELECTORS.errorMsg).textContent();
    expect(error?.trim()).toBe('');
  });

  // TC-ADD-004: Cộng với số 0
  test('TC-ADD-004 | Cộng với số 0 (0 + 50 = 50)', async ({ page }) => {
    await openCalculator(page, '0');
    await calculate(page, { first: '0', second: '50', operation: 'Add' });

    const answer = await getAnswer(page);
    expect(answer).toBe('50');

    const error = await page.locator(SELECTORS.errorMsg).textContent();
    expect(error?.trim()).toBe('');
  });

  // TC-ADD-005: Cộng hai số thập phân với tùy chọn Integers only
  test('TC-ADD-005 | Cộng thập phân với Integers only (10.4 + 5.3 = 15 khi tích Integers only)', async ({ page }) => {
    await openCalculator(page, '0');
    await calculate(page, { first: '10.4', second: '5.3', operation: 'Add', integerOnly: true });

    const answer = await getAnswer(page);
    expect(answer).toBe('15');

    const error = await page.locator(SELECTORS.errorMsg).textContent();
    expect(error?.trim()).toBe('');
  });

  // TC-ADD-006: Cộng giá trị biên đạt giới hạn 10 chữ số
  test('TC-ADD-006 | Cộng giá trị biên 10 chữ số (9999999999 + 1 = 10000000000)', async ({ page }) => {
    await openCalculator(page, '0');
    await calculate(page, { first: '9999999999', second: '1', operation: 'Add' });

    const answer = await getAnswer(page);
    expect(answer).toBe('10000000000');

    const error = await page.locator(SELECTORS.errorMsg).textContent();
    expect(error?.trim()).toBe('');
  });

});
