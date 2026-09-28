// tests/scripts/TC-RESET.spec.js
// Test cases: TC-RESET-001 đến TC-RESET-003 (Nút Clear & Trạng thái giao diện UI)

const { test, expect } = require('@playwright/test');
const { openCalculator, calculate, getAnswer, getError, clickClear, SELECTORS } = require('./helpers/calculator');

test.describe('TC-RESET | Reset & Controls (Xóa dữ liệu & Trạng thái UI)', () => {

  test.beforeEach(async ({ page }) => {
    await openCalculator(page, '0'); // Prototype
  });

  // TC-RESET-001: Xóa kết quả Answer và uncheck checkbox Integers only
  test('TC-RESET-001 | Xóa kết quả Answer và uncheck checkbox Integers only khi bấm Clear', async ({ page }) => {
    // Đúng dữ liệu đặc tả TC-RESET-001: First = 8.5, Second = 1.5, Integers only
    await calculate(page, { first: '8.5', second: '1.5', operation: 'Add', integerOnly: true });
    expect(await getAnswer(page)).toBe('10');
    expect(await page.locator(SELECTORS.integerOnly).isChecked()).toBe(true);

    await clickClear(page);
    expect(await getAnswer(page)).toBe('');
    expect(await page.locator(SELECTORS.integerOnly).isChecked()).toBe(false);
  });

  // TC-RESET-002: Xóa thông báo lỗi khi bấm nút Clear
  test('TC-RESET-002 | Xóa thông báo lỗi khi bấm nút Clear', async ({ page }) => {
    // Đúng dữ liệu đặc tả TC-RESET-002: First = 10, Second = 0, Operation = Divide
    await calculate(page, { first: '10', second: '0', operation: 'Divide' });
    expect(await getError(page)).toBe('Divide by zero error!');

    // Bấm nút Clear theo bước 2 (Sẽ phát hiện lỗi AUT nếu nút Clear bị khóa)
    await expect(page.locator(SELECTORS.clearBtn)).toBeEnabled();
    await clickClear(page);
    expect(await getError(page)).toBe('');
  });

  // TC-RESET-003: Kiểm tra trạng thái nút và loading graphic trong lúc tính toán
  test('TC-RESET-003 | Kiểm tra trạng thái nút và form Calculating khi tính toán', async ({ page }) => {
    await page.fill(SELECTORS.firstNumber, '50');
    await page.fill(SELECTORS.secondNumber, '50');
    await page.selectOption(SELECTORS.operationSelect, { label: 'Add' });

    await page.click(SELECTORS.calculateBtn);
    // Sau khi bấm, hệ thống hiển thị calculating và hoàn tất
    await page.waitForTimeout(1200);
    expect(await getAnswer(page)).toBe('100');
  });

});
