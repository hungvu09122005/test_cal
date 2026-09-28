// tests/scripts/build-8.spec.js
// Toàn bộ Test Cases cho BUILD 8 (Bao phủ đầy đủ các module và phát hiện khiếm khuyết hoán vị số)
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

test.describe('BUILD 8 - Toàn bộ Test Cases theo Module & Kiểm thử khiếm khuyết', () => {

  test.beforeEach(async ({ page }) => {
    // Mở ứng dụng và chọn Build 8
    await openCalculator(page, '8');
  });

  // ==========================================
  // MODULE: ADDITION (PHÉP CỘNG)
  // Kết quả vẫn bảo toàn do tính chất giao hoán: a + b = b + a
  // ==========================================
  test.describe('Module Addition (Phép Cộng - Giao hoán bảo toàn)', () => {
    test('TC-ADD-001 | Cộng hai số nguyên dương hợp lệ (15 + 25 = 40)', async ({ page }) => {
      await calculate(page, { first: '15', second: '25', operation: 'Add' });
      expect(await getAnswer(page)).toBe('40');
      expect(await getError(page)).toBe('');
    });

    test('TC-ADD-002 | Cộng hai số thực hợp lệ (12.35 + 7.65 = 20)', async ({ page }) => {
      await calculate(page, { first: '12.35', second: '7.65', operation: 'Add' });
      expect(await getAnswer(page)).toBe('20');
      expect(await getError(page)).toBe('');
    });

    test('TC-ADD-003 | Cộng số âm và số dương (-30 + 10 = -20)', async ({ page }) => {
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
  // MODULE: MULTIPLICATION (PHÉP NHÂN)
  // Kết quả vẫn bảo toàn do tính chất giao hoán: a * b = b * a
  // ==========================================
  test.describe('Module Multiplication (Phép Nhân - Giao hoán bảo toàn)', () => {
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
  // MODULE: SUBTRACTION (PHÉP TRỪ - XÁC MINH KHIẾM KHUYẾT HOÁN VỊ)
  // Kỳ vọng thực tế trên Build 8: Tính num2 - num1 thay vì num1 - num2
  // ==========================================
  test.describe('Module Subtraction (Phép Trừ - Lỗi hoán vị BUG-CALC-008)', () => {
    test('TC-SUB-001 | [Defect] 50 - 20 bị tính thành 20 - 50 = -30', async ({ page }) => {
      await calculate(page, { first: '50', second: '20', operation: 'Subtract' });
      const answer = await getAnswer(page);
      expect(answer).toBe('-30');
      console.log(`Build 8 Defect: 50 - 20 bị tính ngược thành ${answer}`);
    });

    test('TC-SUB-002 | [Defect] 15 - 40 bị tính thành 40 - 15 = 25', async ({ page }) => {
      await calculate(page, { first: '15', second: '40', operation: 'Subtract' });
      const answer = await getAnswer(page);
      expect(answer).toBe('25');
      console.log(`Build 8 Defect: 15 - 40 bị tính ngược thành ${answer}`);
    });

    test('TC-SUB-003 | [Defect] 10.5 - 3.2 bị tính thành 3.2 - 10.5 = -7.3', async ({ page }) => {
      await calculate(page, { first: '10.5', second: '3.2', operation: 'Subtract' });
      const answer = await getAnswer(page);
      expect(answer).toBe('-7.3');
    });

    test('TC-SUB-004 | Trừ hai số bằng nhau cho kết quả bằng 0 (99 - 99 = 0)', async ({ page }) => {
      await calculate(page, { first: '99', second: '99', operation: 'Subtract' });
      expect(await getAnswer(page)).toBe('0');
    });
  });

  // ==========================================
  // MODULE: DIVISION (PHÉP CHIA - XÁC MINH KHIẾM KHUYẾT HOÁN VỊ)
  // Kỳ vọng thực tế trên Build 8: Tính num2 / num1 thay vì num1 / num2
  // ==========================================
  test.describe('Module Division (Phép Chia - Lỗi hoán vị BUG-CALC-008)', () => {
    test('TC-DIV-001 | [Defect] 100 / 4 bị tính thành 4 / 100 = 0.04', async ({ page }) => {
      await calculate(page, { first: '100', second: '4', operation: 'Divide' });
      expect(await getAnswer(page)).toBe('0.04');
    });

    test('TC-DIV-002 | [Defect] 10 / 4 bị tính thành 4 / 10 = 0.4', async ({ page }) => {
      await calculate(page, { first: '10', second: '4', operation: 'Divide' });
      expect(await getAnswer(page)).toBe('0.4');
    });

    test('TC-DIV-003 | [Defect] 25 / 0 bị đảo thành 0 / 25 = 0 (Không báo Divide by zero error)', async ({ page }) => {
      await calculate(page, { first: '25', second: '0', operation: 'Divide' });
      expect(await getAnswer(page)).toBe('0');
      expect(await getError(page)).toBe('');
      console.log('Build 8 Defect: Chia 25 cho 0 không báo lỗi do bị đảo thành 0 / 25 = 0');
    });

    test('TC-DIV-004 | [Defect] 0 / 15 bị đảo thành 15 / 0 gây ra Divide by zero error', async ({ page }) => {
      await calculate(page, { first: '0', second: '15', operation: 'Divide' });
      expect(await getError(page)).toBe('Divide by zero error!');
      console.log('Build 8 Defect: Chia 0 cho 15 bị báo lỗi do bị đảo thành 15 / 0');
    });

    test('TC-DIV-005 | [Defect] 7 / 2 với Integers only bị đảo thành 2 / 7 = 0', async ({ page }) => {
      await calculate(page, { first: '7', second: '2', operation: 'Divide', integerOnly: true });
      expect(await getAnswer(page)).toBe('0');
    });
  });

  // ==========================================
  // MODULE: CONCATENATE (GHÉP CHUỖI - XÁC MINH GHÉP NGƯỢC)
  // Kỳ vọng thực tế trên Build 8: Ghép num2 + num1
  // ==========================================
  test.describe('Module Concatenate (Ghép Chuỗi - Lỗi đảo thứ tự BUG-CALC-008)', () => {
    test('TC-CONCAT-001 | [Defect] Ghép số bị ngược: "123" + "456" thành "456123"', async ({ page }) => {
      await calculate(page, { first: '123', second: '456', operation: 'Concatenate' });
      expect(await getAnswer(page)).toBe('456123');
    });

    test('TC-CONCAT-002 | [Defect] Ghép chữ bị ngược: "Hello" + "_World!" thành "_World!Hello"', async ({ page }) => {
      await calculate(page, { first: 'Hello', second: '_World!', operation: 'Concatenate' });
      expect(await getAnswer(page)).toBe('_World!Hello');
    });

    test('TC-CONCAT-003 | Kiểm tra ẩn tùy chọn Integers only khi chọn Concatenate', async ({ page }) => {
      await page.selectOption(SELECTORS.operationSelect, { label: 'Concatenate' });
      const integerCheckbox = page.locator(SELECTORS.integerOnly);
      await expect(integerCheckbox).toBeHidden();
    });
  });

  // ==========================================
  // MODULE: VALIDATION (KIỂM TRA DỮ LIỆU - LỖI BÁO NGƯỢC SỐ)
  // ==========================================
  test.describe('Module Validation (Kiểm tra dữ liệu - Lỗi báo sai vị trí)', () => {
    test('TC-VAL-001 | [Defect] First="abc" nhưng hệ thống báo "Number 2 is not a number"', async ({ page }) => {
      await calculate(page, { first: 'abc', second: '10', operation: 'Add' });
      expect(await getError(page)).toBe('Number 2 is not a number');
    });

    test('TC-VAL-002 | [Defect] Second="xyz" nhưng hệ thống báo "Number 1 is not a number"', async ({ page }) => {
      await calculate(page, { first: '20', second: 'xyz', operation: 'Multiply' });
      expect(await getError(page)).toBe('Number 1 is not a number');
    });

    test('TC-VAL-003 | Báo lỗi khi để trống trường First number trong phép tính số học', async ({ page }) => {
      // Đúng dữ liệu đặc tả TC-VAL-003: First=(để trống), Second=5, Operation=Subtract
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
  // MODULE: RESET & CONTROLS (TRẠNG THÁI NÚT VÀ GIAO DIỆN)
  // Build 8 nút Clear vẫn hoạt động bình thường (không bị lỗi như Build 5)
  // ==========================================
  test.describe('Module Reset & UI Controls trên Build 8', () => {
    test('TC-RESET-001 | Nút Clear hoạt động bình thường, xóa Answer và bỏ chọn Integers only', async ({ page }) => {
      const clearBtn = page.locator(SELECTORS.clearBtn);
      // Trên Build 8, nút Clear không bị disabled
      await expect(clearBtn).toBeEnabled();

      // Thực hiện tính toán đúng dữ liệu TC-RESET-001: 8.5 + 1.5, Integers only
      await calculate(page, { first: '8.5', second: '1.5', operation: 'Add', integerOnly: true });
      expect(await getAnswer(page)).toBe('10');

      // Bấm Clear
      await clickClear(page);
      expect(await getAnswer(page)).toBe('');
      expect(await page.locator(SELECTORS.integerOnly).isChecked()).toBe(false);
    });

    test('TC-RESET-002 | Xóa thông báo lỗi khi bấm nút Clear', async ({ page }) => {
      // Đúng dữ liệu đặc tả TC-RESET-002: First = 10, Second = 0, Operation = Divide
      await calculate(page, { first: '10', second: '0', operation: 'Divide' });
      expect(await getError(page)).toBe('Divide by zero error!');

      // Theo quy trình: Bấm Clear để xóa thông báo lỗi
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
