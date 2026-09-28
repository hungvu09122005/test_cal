// tests/scripts/TC-CONCAT.spec.js
// Test cases: TC-CONCAT-001 đến TC-CONCAT-003 (Ghép Chuỗi - Concatenate)

const { test, expect } = require('@playwright/test');
const { openCalculator, calculate, getAnswer, getError, SELECTORS } = require('./helpers/calculator');

test.describe('TC-CONCAT | Concatenate (Ghép Chuỗi)', () => {

  test.beforeEach(async ({ page }) => {
    await openCalculator(page, '0'); // Prototype
  });

  // TC-CONCAT-001: Ghép hai chuỗi số nguyên
  test('TC-CONCAT-001 | Ghép hai chuỗi số nguyên ("123" + "456" = "123456")', async ({ page }) => {
    await calculate(page, { first: '123', second: '456', operation: 'Concatenate' });
    expect(await getAnswer(page)).toBe('123456');
    expect(await getError(page)).toBe('');
  });

  // TC-CONCAT-002: Ghép chuỗi chứa chữ cái và ký tự đặc biệt
  test('TC-CONCAT-002 | Ghép chuỗi chứa chữ cái và ký tự đặc biệt ("Hello" + "_World!" = "Hello_World!")', async ({ page }) => {
    await calculate(page, { first: 'Hello', second: '_World!', operation: 'Concatenate' });
    expect(await getAnswer(page)).toBe('Hello_World!');
    expect(await getError(page)).toBe('');
  });

  // TC-CONCAT-003: Kiểm tra ẩn tùy chọn Integers only khi chọn Concatenate
  test('TC-CONCAT-003 | Kiểm tra ẩn tùy chọn Integers only khi chọn Concatenate', async ({ page }) => {
    await page.selectOption(SELECTORS.operationSelect, { label: 'Concatenate' });
    const integerCheckbox = page.locator(SELECTORS.integerOnly);
    await expect(integerCheckbox).toBeHidden();
  });

});
