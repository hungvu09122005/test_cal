// tests/scripts/build-5.spec.js
// Toàn bộ Test Cases cho BUILD 5 (Bao phủ đầy đủ các module và khiếm khuyết nút Clear)
// Target Web: https://testsheepnz.github.io/BasicCalculator.html

const { test, expect } = require('@playwright/test');
const {
  openCalculator,
  calculate,
  getAnswer,
  getError,
  clickClear,
  SELECTORS,
} = require('./helpers/calculator');

test.describe('BUILD 5 - Toàn bộ Test Cases theo Module', () => {

  test.beforeEach(async ({ page }) => {
    // Mở ứng dụng và chọn Build 5
    await openCalculator(page, '5');
  });

  // ==========================================
  // MODULE: ADDITION (PHÉP CỘNG)
  // ==========================================
  test.describe('Module Addition (Phép Cộng)', () => {
    test('TC-ADD-001 | Cộng hai số nguyên dương hợp lệ (15 + 25 = 40)', async ({ page }) => {
      await calculate(page, { first: '15', second: '25', operation: 'Add' });
      expect(await getAnswer(page)).toBe('40');
      expect(await getError(page)).toBe('');
    });

    test('TC-ADD-002 | Cộng hai số thực (thập phân) hợp lệ (12.35 + 7.65 = 20)', async ({ page }) => {
      await calculate(page, { first: '12.35', second: '7.65', operation: 'Add' });
      expect(await getAnswer(page)).toBe('20');
      expect(await getError(page)).toBe('');
    });

    test('TC-ADD-003 | Cộng số nguyên âm với số nguyên dương (-30 + 10 = -20)', async ({ page }) => {
      await calculate(page, { first: '-30', second: '10', operation: 'Add' });
      expect(await getAnswer(page)).toBe('-20');
      expect(await getError(page)).toBe('');
    });

    test('TC-ADD-004 | Cộng với số 0 (0 + 50 = 50)', async ({ page }) => {
      await calculate(page, { first: '0', second: '50', operation: 'Add' });
      expect(await getAnswer(page)).toBe('50');
      expect(await getError(page)).toBe('');
    });

    test('TC-ADD-005 | Cộng hai số thập phân với tùy chọn Integers only (10.4 + 5.3 = 15)', async ({ page }) => {
      await calculate(page, { first: '10.4', second: '5.3', operation: 'Add', integerOnly: true });
      expect(await getAnswer(page)).toBe('15');
      expect(await getError(page)).toBe('');
    });

    test('TC-ADD-006 | Cộng giá trị biên 10 chữ số (9999999999 + 1 = 10000000000)', async ({ page }) => {
      await calculate(page, { first: '9999999999', second: '1', operation: 'Add' });
      expect(await getAnswer(page)).toBe('10000000000');
      expect(await getError(page)).toBe('');
    });
  });

  // ==========================================
  // MODULE: SUBTRACTION (PHÉP TRỪ)
  // ==========================================
  test.describe('Module Subtraction (Phép Trừ)', () => {
    test('TC-SUB-001 | Trừ hai số nguyên dương cho kết quả dương (50 - 20 = 30)', async ({ page }) => {
      await calculate(page, { first: '50', second: '20', operation: 'Subtract' });
      expect(await getAnswer(page)).toBe('30');
      expect(await getError(page)).toBe('');
    });

    test('TC-SUB-002 | Trừ số nhỏ cho số lớn cho kết quả âm (15 - 40 = -25)', async ({ page }) => {
      await calculate(page, { first: '15', second: '40', operation: 'Subtract' });
      expect(await getAnswer(page)).toBe('-25');
      expect(await getError(page)).toBe('');
    });

    test('TC-SUB-003 | Trừ hai số thập phân (10.5 - 3.2 = 7.3)', async ({ page }) => {
      await calculate(page, { first: '10.5', second: '3.2', operation: 'Subtract' });
      expect(await getAnswer(page)).toBe('7.3');
      expect(await getError(page)).toBe('');
    });

    test('TC-SUB-004 | Trừ hai số bằng nhau cho kết quả bằng 0 (99 - 99 = 0)', async ({ page }) => {
      await calculate(page, { first: '99', second: '99', operation: 'Subtract' });
      expect(await getAnswer(page)).toBe('0');
      expect(await getError(page)).toBe('');
    });
  });

  // ==========================================
  // MODULE: MULTIPLICATION (PHÉP NHÂN)
  // ==========================================
  test.describe('Module Multiplication (Phép Nhân)', () => {
    test('TC-MUL-001 | Nhân hai số nguyên dương (7 * 8 = 56)', async ({ page }) => {
      await calculate(page, { first: '7', second: '8', operation: 'Multiply' });
      expect(await getAnswer(page)).toBe('56');
      expect(await getError(page)).toBe('');
    });

    test('TC-MUL-002 | Nhân một số với 0 (125 * 0 = 0)', async ({ page }) => {
      await calculate(page, { first: '125', second: '0', operation: 'Multiply' });
      expect(await getAnswer(page)).toBe('0');
      expect(await getError(page)).toBe('');
    });

    test('TC-MUL-003 | Nhân số âm với số dương (-6 * 9 = -54)', async ({ page }) => {
      await calculate(page, { first: '-6', second: '9', operation: 'Multiply' });
      expect(await getAnswer(page)).toBe('-54');
      expect(await getError(page)).toBe('');
    });

    test('TC-MUL-004 | Nhân số thập phân với tùy chọn Integers only (3.5 * 3 = 10)', async ({ page }) => {
      await calculate(page, { first: '3.5', second: '3', operation: 'Multiply', integerOnly: true });
      expect(await getAnswer(page)).toBe('10');
      expect(await getError(page)).toBe('');
    });
  });

  // ==========================================
  // MODULE: DIVISION (PHÉP CHIA)
  // ==========================================
  test.describe('Module Division (Phép Chia)', () => {
    test('TC-DIV-001 | Chia hết hai số nguyên dương (100 / 4 = 25)', async ({ page }) => {
      await calculate(page, { first: '100', second: '4', operation: 'Divide' });
      expect(await getAnswer(page)).toBe('25');
      expect(await getError(page)).toBe('');
    });

    test('TC-DIV-002 | Chia không hết cho kết quả số thập phân (10 / 4 = 2.5)', async ({ page }) => {
      await calculate(page, { first: '10', second: '4', operation: 'Divide' });
      expect(await getAnswer(page)).toBe('2.5');
      expect(await getError(page)).toBe('');
    });

    test('TC-DIV-003 | Chia cho 0 hiển thị thông báo lỗi (25 / 0)', async ({ page }) => {
      await calculate(page, { first: '25', second: '0', operation: 'Divide' });
      expect(await getError(page)).toBe('Divide by zero error!');
    });

    test('TC-DIV-004 | Chia số 0 cho một số khác 0 (0 / 15 = 0)', async ({ page }) => {
      await calculate(page, { first: '0', second: '15', operation: 'Divide' });
      expect(await getAnswer(page)).toBe('0');
      expect(await getError(page)).toBe('');
    });

    test('TC-DIV-005 | Chia với tùy chọn Integers only (7 / 2 = 3)', async ({ page }) => {
      await calculate(page, { first: '7', second: '2', operation: 'Divide', integerOnly: true });
      expect(await getAnswer(page)).toBe('3');
      expect(await getError(page)).toBe('');
    });
  });

  // ==========================================
  // MODULE: CONCATENATE (GHÉP CHUỖI)
  // ==========================================
  test.describe('Module Concatenate (Ghép Chuỗi)', () => {
    test('TC-CONCAT-001 | Ghép hai chuỗi số nguyên ("123" + "456" = "123456")', async ({ page }) => {
      await calculate(page, { first: '123', second: '456', operation: 'Concatenate' });
      expect(await getAnswer(page)).toBe('123456');
      expect(await getError(page)).toBe('');
    });

    test('TC-CONCAT-002 | Ghép chuỗi chứa chữ cái và ký tự đặc biệt ("Hello" + "_World!" = "Hello_World!")', async ({ page }) => {
      await calculate(page, { first: 'Hello', second: '_World!', operation: 'Concatenate' });
      expect(await getAnswer(page)).toBe('Hello_World!');
      expect(await getError(page)).toBe('');
    });

    test('TC-CONCAT-003 | Kiểm tra ẩn tùy chọn Integers only khi chọn Concatenate', async ({ page }) => {
      await page.selectOption(SELECTORS.operationSelect, { label: 'Concatenate' });
      const integerCheckbox = page.locator(SELECTORS.integerOnly);
      await expect(integerCheckbox).toBeHidden();
    });
  });

  // ==========================================
  // MODULE: VALIDATION (KIỂM TRA DỮ LIỆU NHẬP)
  // ==========================================
  test.describe('Module Validation (Kiểm tra dữ liệu nhập)', () => {
    test('TC-VAL-001 | Báo lỗi khi First number không phải là số ("abc")', async ({ page }) => {
      await calculate(page, { first: 'abc', second: '10', operation: 'Add' });
      expect(await getError(page)).toBe('Number 1 is not a number');
    });

    test('TC-VAL-002 | Báo lỗi khi Second number không phải là số ("xyz")', async ({ page }) => {
      await calculate(page, { first: '20', second: 'xyz', operation: 'Multiply' });
      expect(await getError(page)).toBe('Number 2 is not a number');
    });

    test('TC-VAL-003 | Báo lỗi khi để trống trường First number trong phép tính số học', async ({ page }) => {
      await calculate(page, { first: '', second: '5', operation: 'Subtract' });
      expect(await getError(page)).toBe('Number 1 is not a number');
    });

    test('TC-VAL-004 | Kiểm tra giới hạn tối đa 10 ký tự của trường nhập liệu (maxlength=10)', async ({ page }) => {
      const maxLen1 = await page.locator(SELECTORS.firstNumber).getAttribute('maxlength');
      const maxLen2 = await page.locator(SELECTORS.secondNumber).getAttribute('maxlength');
      expect(maxLen1).toBe('10');
      expect(maxLen2).toBe('10');
    });
  });

  // ==========================================
  // MODULE: RESET & BUILD 5 DEFECT (BUG-CALC-005)
  // ==========================================
  test.describe('Module Reset & Khiếm khuyết Build 5 (BUG-CALC-005)', () => {
    test('TC-RESET-001 | [Defect BUG-CALC-005] Xác minh nút Clear bị disabled khi chọn Build 5, sau đó xóa kết quả', async ({ page }) => {
      const clearBtn = page.locator(SELECTORS.clearBtn);
      // Phát hiện khiếm khuyết: Nút Clear bị disabled ngay khi mở Build 5
      await expect(clearBtn).toBeDisabled();
      console.log('Build 5 Verified: Nút Clear ban đầu bị vô hiệu hóa (disabled).');

      // Thực hiện tính toán đúng dữ liệu TC-RESET-001: 8.5 + 1.5, Integers only
      await calculate(page, { first: '8.5', second: '1.5', operation: 'Add', integerOnly: true });
      expect(await getAnswer(page)).toBe('10');

      // Thao tác xóa kết quả và bỏ chọn checkbox
      await clickClear(page);
      expect(await getAnswer(page)).toBe('');
      expect(await page.locator(SELECTORS.integerOnly).isChecked()).toBe(false);
    });

    test('TC-RESET-002 | Xóa thông báo lỗi khi bấm nút Clear', async ({ page }) => {
      // Đúng dữ liệu đặc tả TC-RESET-002: First = 10, Second = 0, Operation = Divide
      await calculate(page, { first: '10', second: '0', operation: 'Divide' });
      expect(await getError(page)).toBe('Divide by zero error!');

      // Theo quy trình: Bấm Clear để xóa thông báo lỗi (sẽ phát hiện lỗi AUT nếu nút Clear bị khóa)
      await expect(page.locator(SELECTORS.clearBtn)).toBeEnabled();
      await clickClear(page);
      expect(await getError(page)).toBe('');
    });

    test('TC-RESET-003 | Kiểm tra trạng thái UI trong quá trình tính toán', async ({ page }) => {
      await page.fill(SELECTORS.firstNumber, '50');
      await page.fill(SELECTORS.secondNumber, '50');
      await page.selectOption(SELECTORS.operationSelect, { label: 'Add' });
      
      await page.click(SELECTORS.calculateBtn);
      await page.waitForTimeout(1200);
      expect(await getAnswer(page)).toBe('100');
    });
  });

});
