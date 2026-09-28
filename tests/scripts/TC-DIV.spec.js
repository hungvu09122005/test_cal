// tests/scripts/TC-DIV.spec.js
// Test cases: TC-DIV-001 đến TC-DIV-005 (Phép Chia - Division)

const { test, expect } = require('@playwright/test');
const { openCalculator, calculate, getAnswer, getError } = require('./helpers/calculator');

test.describe('TC-DIV | Division (Phép Chia)', () => {

  test.beforeEach(async ({ page }) => {
    await openCalculator(page, '0'); // Prototype
  });

  // TC-DIV-001: Chia hết hai số nguyên dương
  test('TC-DIV-001 | Chia hết hai số nguyên dương (100 / 4 = 25)', async ({ page }) => {
    await calculate(page, { first: '100', second: '4', operation: 'Divide' });
    expect(await getAnswer(page)).toBe('25');
    expect(await getError(page)).toBe('');
  });

  // TC-DIV-002: Chia không hết cho kết quả số thập phân
  test('TC-DIV-002 | Chia không hết cho kết quả số thập phân (10 / 4 = 2.5)', async ({ page }) => {
    await calculate(page, { first: '10', second: '4', operation: 'Divide' });
    expect(await getAnswer(page)).toBe('2.5');
    expect(await getError(page)).toBe('');
  });

  // TC-DIV-003: Chia cho 0 hiển thị thông báo lỗi
  test('TC-DIV-003 | Chia cho 0 hiển thị thông báo lỗi (25 / 0)', async ({ page }) => {
    await calculate(page, { first: '25', second: '0', operation: 'Divide' });
    expect(await getError(page)).toBe('Divide by zero error!');
  });

  // TC-DIV-004: Chia số 0 cho một số khác 0
  test('TC-DIV-004 | Chia số 0 cho một số khác 0 (0 / 15 = 0)', async ({ page }) => {
    await calculate(page, { first: '0', second: '15', operation: 'Divide' });
    expect(await getAnswer(page)).toBe('0');
    expect(await getError(page)).toBe('');
  });

  // TC-DIV-005: Chia với tùy chọn Integers only
  test('TC-DIV-005 | Chia với tùy chọn Integers only (7 / 2 = 3)', async ({ page }) => {
    await calculate(page, { first: '7', second: '2', operation: 'Divide', integerOnly: true });
    expect(await getAnswer(page)).toBe('3');
    expect(await getError(page)).toBe('');
  });

});
