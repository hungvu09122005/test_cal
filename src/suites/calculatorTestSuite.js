// @ts-check
const { test, expect } = require('@playwright/test');
const { CalculatorPage } = require('../pages/CalculatorPage');

/**
 * Executes the complete suite of 29 test cases against a specified build of Basic Calculator.
 * @param {string} buildId - Build identifier: '0' (Prototype), '3', '7', etc.
 * @param {string} buildName - Human-readable build name
 */
function runCalculatorTestSuite(buildId, buildName) {
  test.describe(`Full Test Suite - ${buildName} (Build ${buildId})`, () => {
    let calc;

    test.beforeEach(async ({ page }) => {
      calc = new CalculatorPage(page);
      await calc.goto();
      await calc.selectBuild(buildId);
    });

    // ==========================================
    // 1. ADDITION MODULE (TC-ADD-001 -> TC-ADD-006)
    // ==========================================
    test.describe('Addition Module', () => {
      test('TC-ADD-001: Cộng hai số nguyên dương hợp lệ (15 + 25 = 40)', async () => {
        await calc.enterNumber1('15');
        await calc.enterNumber2('25');
        await calc.selectOperation('Add');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('40');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-ADD-002: Cộng hai số thực thập phân hợp lệ (12.35 + 7.65 = 20)', async () => {
        await calc.enterNumber1('12.35');
        await calc.enterNumber2('7.65');
        await calc.selectOperation('Add');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('20');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-ADD-003: Cộng số nguyên âm với số nguyên dương (-30 + 10 = -20)', async () => {
        await calc.enterNumber1('-30');
        await calc.enterNumber2('10');
        await calc.selectOperation('Add');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('-20');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-ADD-004: Cộng với số 0 (0 + 50 = 50)', async () => {
        await calc.enterNumber1('0');
        await calc.enterNumber2('50');
        await calc.selectOperation('Add');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('50');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-ADD-005: Cộng hai số thập phân với tùy chọn Integers only (10.4 + 5.3 -> 15)', async () => {
        await calc.enterNumber1('10.4');
        await calc.enterNumber2('5.3');
        await calc.selectOperation('Add');
        await calc.toggleIntegersOnly(true);
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('15');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-ADD-006: Cộng giá trị biên đạt giới hạn 10 chữ số (9999999999 + 1 = 10000000000)', async () => {
        await calc.enterNumber1('9999999999');
        await calc.enterNumber2('1');
        await calc.selectOperation('Add');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('10000000000');
        expect(await calc.getErrorMessage()).toBe('');
      });
    });

    // ==========================================
    // 2. SUBTRACTION MODULE (TC-SUB-001 -> TC-SUB-004)
    // ==========================================
    test.describe('Subtraction Module', () => {
      test('TC-SUB-001: Trừ hai số nguyên dương cho kết quả dương (50 - 20 = 30)', async () => {
        await calc.enterNumber1('50');
        await calc.enterNumber2('20');
        await calc.selectOperation('Subtract');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('30');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-SUB-002: Trừ số nhỏ cho số lớn cho kết quả âm (15 - 40 = -25)', async () => {
        await calc.enterNumber1('15');
        await calc.enterNumber2('40');
        await calc.selectOperation('Subtract');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('-25');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-SUB-003: Trừ hai số thập phân (10.5 - 3.2 = 7.3)', async () => {
        await calc.enterNumber1('10.5');
        await calc.enterNumber2('3.2');
        await calc.selectOperation('Subtract');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('7.3');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-SUB-004: Trừ hai số bằng nhau cho kết quả bằng 0 (99 - 99 = 0)', async () => {
        await calc.enterNumber1('99');
        await calc.enterNumber2('99');
        await calc.selectOperation('Subtract');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('0');
        expect(await calc.getErrorMessage()).toBe('');
      });
    });

    // ==========================================
    // 3. MULTIPLICATION MODULE (TC-MUL-001 -> TC-MUL-004)
    // ==========================================
    test.describe('Multiplication Module', () => {
      test('TC-MUL-001: Nhân hai số nguyên dương (7 * 8 = 56)', async () => {
        await calc.enterNumber1('7');
        await calc.enterNumber2('8');
        await calc.selectOperation('Multiply');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('56');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-MUL-002: Nhân một số với 0 (125 * 0 = 0)', async () => {
        await calc.enterNumber1('125');
        await calc.enterNumber2('0');
        await calc.selectOperation('Multiply');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('0');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-MUL-003: Nhân số âm với số dương (-6 * 9 = -54)', async () => {
        await calc.enterNumber1('-6');
        await calc.enterNumber2('9');
        await calc.selectOperation('Multiply');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('-54');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-MUL-004: Nhân số thập phân với tùy chọn Integers only (3.5 * 3 -> 10)', async () => {
        await calc.enterNumber1('3.5');
        await calc.enterNumber2('3');
        await calc.selectOperation('Multiply');
        await calc.toggleIntegersOnly(true);
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('10');
        expect(await calc.getErrorMessage()).toBe('');
      });
    });

    // ==========================================
    // 4. DIVISION MODULE (TC-DIV-001 -> TC-DIV-005)
    // ==========================================
    test.describe('Division Module', () => {
      test('TC-DIV-001: Chia hết hai số nguyên dương (100 / 4 = 25)', async () => {
        await calc.enterNumber1('100');
        await calc.enterNumber2('4');
        await calc.selectOperation('Divide');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('25');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-DIV-002: Chia không hết cho kết quả số thập phân (10 / 4 = 2.5)', async () => {
        await calc.enterNumber1('10');
        await calc.enterNumber2('4');
        await calc.selectOperation('Divide');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('2.5');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-DIV-003: Chia cho 0 hiển thị thông báo lỗi', async () => {
        await calc.enterNumber1('25');
        await calc.enterNumber2('0');
        await calc.selectOperation('Divide');
        await calc.clickCalculate();

        expect(await calc.getErrorMessage()).toBe('Divide by zero error!');
      });

      test('TC-DIV-004: Chia số 0 cho một số khác 0 (0 / 15 = 0)', async () => {
        await calc.enterNumber1('0');
        await calc.enterNumber2('15');
        await calc.selectOperation('Divide');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('0');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-DIV-005: Chia với tùy chọn Integers only (7 / 2 -> 3)', async () => {
        await calc.enterNumber1('7');
        await calc.enterNumber2('2');
        await calc.selectOperation('Divide');
        await calc.toggleIntegersOnly(true);
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('3');
        expect(await calc.getErrorMessage()).toBe('');
      });
    });

    // ==========================================
    // 5. CONCATENATE MODULE (TC-CONCAT-001 -> TC-CONCAT-003)
    // ==========================================
    test.describe('Concatenate Module', () => {
      test('TC-CONCAT-001: Ghép hai chuỗi số nguyên ("123" + "456" = "123456")', async () => {
        await calc.enterNumber1('123');
        await calc.enterNumber2('456');
        await calc.selectOperation('Concatenate');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('123456');
        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-CONCAT-002: Ghép chuỗi chứa chữ cái và ký tự đặc biệt ("Hello" + "_World!" = "Hello_World!")', async () => {
        await calc.enterNumber1('Hello');
        await calc.enterNumber2('_World!');
        await calc.selectOperation('Concatenate');
        await calc.clickCalculate();

        expect(await calc.getErrorMessage()).toBe('');
        expect(await calc.getAnswer()).toBe('Hello_World!');
      });

      test('TC-CONCAT-003: Kiểm tra ẩn và vô hiệu hóa tùy chọn Integers only khi chọn Concatenate', async () => {
        await calc.selectOperation('Concatenate');

        await expect(calc.integersOnlyCheckbox).toBeHidden();
        await expect(calc.integersOnlyCheckbox).toBeDisabled();
      });
    });

    // ==========================================
    // 6. VALIDATION MODULE (TC-VAL-001 -> TC-VAL-004)
    // ==========================================
    test.describe('Validation Module', () => {
      test('TC-VAL-001: Báo lỗi khi First number không phải là số ("abc" + 10)', async () => {
        await calc.enterNumber1('abc');
        await calc.enterNumber2('10');
        await calc.selectOperation('Add');
        await calc.clickCalculate();

        expect(await calc.getErrorMessage()).toBe('Number 1 is not a number');
      });

      test('TC-VAL-002: Báo lỗi khi Second number không phải là số (20 * "xyz")', async () => {
        await calc.enterNumber1('20');
        await calc.enterNumber2('xyz');
        await calc.selectOperation('Multiply');
        await calc.clickCalculate();

        expect(await calc.getErrorMessage()).toBe('Number 2 is not a number');
      });

      test('TC-VAL-003: Báo lỗi khi để trống trường First number ("", 5, Subtract)', async () => {
        await calc.enterNumber1('');
        await calc.enterNumber2('5');
        await calc.selectOperation('Subtract');
        await calc.clickCalculate();

        // Theo yêu cầu kiểm thử FR-CALC-07: Trường số để trống trong phép tính số học phải báo lỗi
        expect(await calc.getErrorMessage()).toBe('Number 1 is not a number');
      });

      test('TC-VAL-004: Kiểm tra giới hạn tối đa 10 ký tự của trường nhập liệu', async () => {
        await calc.enterNumber1('12345678901');
        await calc.enterNumber2('12345678901');

        expect(await calc.number1Input.inputValue()).toBe('1234567890');
        expect(await calc.number2Input.inputValue()).toBe('1234567890');
      });
    });

    // ==========================================
    // 7. RESET & CONTROLS MODULE (TC-RESET-001 -> TC-RESET-003)
    // ==========================================
    test.describe('Reset & UI Controls Module', () => {
      test('TC-RESET-001: Xóa kết quả Answer và uncheck checkbox Integers only khi bấm Clear', async () => {
        await calc.enterNumber1('8.5');
        await calc.enterNumber2('1.5');
        await calc.selectOperation('Add');
        await calc.toggleIntegersOnly(true);
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('10');
        expect(await calc.integersOnlyCheckbox.isChecked()).toBe(true);

        await calc.clickClear();

        expect(await calc.getAnswer()).toBe('');
        expect(await calc.integersOnlyCheckbox.isChecked()).toBe(false);
      });

      test('TC-RESET-002: Xóa thông báo lỗi khi bấm nút Clear', async () => {
        await calc.enterNumber1('abc');
        await calc.enterNumber2('10');
        await calc.selectOperation('Add');
        await calc.clickCalculate();

        expect(await calc.getErrorMessage()).toBe('Number 1 is not a number');

        await calc.clickClear();

        expect(await calc.getErrorMessage()).toBe('');
      });

      test('TC-RESET-003: Kiểm tra nút và trạng thái giao diện trong lúc tính toán', async () => {
        await calc.enterNumber1('50');
        await calc.enterNumber2('50');
        await calc.selectOperation('Add');
        await calc.clickCalculate();

        expect(await calc.getAnswer()).toBe('100');
        await expect(calc.calculateButton).toBeEnabled();
        await expect(calc.clearButton).toBeEnabled();
      });
    });
  });
}

module.exports = { runCalculatorTestSuite };
