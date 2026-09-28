// tests/scripts/TC-VAL.spec.js
// Test cases: TC-VAL-001 đến TC-VAL-004 (Kiểm tra dữ liệu nhập - Input Validation)

const { test, expect } = require('@playwright/test');
const { openCalculator, calculate, getError, SELECTORS } = require('./helpers/calculator');

test.describe('TC-VAL | Validation (Kiểm tra dữ liệu nhập)', () => {

  test.beforeEach(async ({ page }) => {
    await openCalculator(page, '0'); // Prototype
  });

  // TC-VAL-001: Báo lỗi khi First number không phải là số trong phép tính số học
  test('TC-VAL-001 | Báo lỗi khi First number không phải là số ("abc")', async ({ page }) => {
    await calculate(page, { first: 'abc', second: '10', operation: 'Add' });
    expect(await getError(page)).toBe('Number 1 is not a number');
  });

  // TC-VAL-002: Báo lỗi khi Second number không phải là số trong phép tính số học
  test('TC-VAL-002 | Báo lỗi khi Second number không phải là số ("xyz")', async ({ page }) => {
    await calculate(page, { first: '20', second: 'xyz', operation: 'Multiply' });
    expect(await getError(page)).toBe('Number 2 is not a number');
  });

  // TC-VAL-003: Báo lỗi khi để trống trường First number trong phép tính số học
  test('TC-VAL-003 | Báo lỗi khi để trống trường First number trong phép tính số học', async ({ page }) => {
    await calculate(page, { first: '', second: '5', operation: 'Subtract' });
    expect(await getError(page)).toBe('Number 1 is not a number');
  });

  // TC-VAL-004: Kiểm tra giới hạn tối đa 10 ký tự của trường nhập liệu (maxlength=10)
  test('TC-VAL-004 | Kiểm tra giới hạn tối đa 10 ký tự của trường nhập liệu (maxlength=10)', async ({ page }) => {
    const maxLen1 = await page.locator(SELECTORS.firstNumber).getAttribute('maxlength');
    const maxLen2 = await page.locator(SELECTORS.secondNumber).getAttribute('maxlength');
    expect(maxLen1).toBe('10');
    expect(maxLen2).toBe('10');
  });

});
