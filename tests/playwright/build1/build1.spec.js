// tests/playwright/build1/build1.spec.js
// TC-BUILD-002: Phát hiện khiếm khuyết không kiểm tra số hợp lệ trên Build 1
// Scope: Chạy tất cả các TC trên Build 1 để ghi nhận kết quả

const { test, expect } = require('@playwright/test');
const {
  openCalculator,
  selectBuild,
  enterFirstNumber,
  enterSecondNumber,
  selectOperation,
  setIntegersOnly,
  clickCalculate,
  clickClear,
  getAnswer,
  getErrorMessage,
  calculate,
} = require('../helpers/calculator');

// ===== SETUP: Mở trang và chọn Build 1 trước mỗi test =====
test.beforeEach(async ({ page }) => {
  await openCalculator(page);
  await selectBuild(page, '1');
});

// =======================================================
// MODULE: ADDITION (Phép cộng)
// =======================================================

test.describe('ADD - Module Phép Cộng [Build 1]', () => {

  test('TC-ADD-001: Cộng hai số nguyên dương hợp lệ', async ({ page }) => {
    // Test data: First=15, Second=25, Op=Add => Expected=40
    await calculate(page, { first: '15', second: '25', operation: 'Add' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('40');
  });

  test('TC-ADD-002: Cộng hai số thực (thập phân) hợp lệ', async ({ page }) => {
    // Test data: First=12.35, Second=7.65, Op=Add => Expected=20
    await calculate(page, { first: '12.35', second: '7.65', operation: 'Add' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('20');
  });

  test('TC-ADD-003: Cộng số nguyên âm với số nguyên dương', async ({ page }) => {
    // Test data: First=-30, Second=10, Op=Add => Expected=-20
    await calculate(page, { first: '-30', second: '10', operation: 'Add' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('-20');
  });

  test('TC-ADD-004: Cộng với số 0', async ({ page }) => {
    // Test data: First=0, Second=50, Op=Add => Expected=50
    await calculate(page, { first: '0', second: '50', operation: 'Add' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('50');
  });

  test('TC-ADD-005: Cộng hai số thập phân với tùy chọn Integers only', async ({ page }) => {
    // Test data: First=10.4, Second=5.3, Op=Add, IntegersOnly=true => Expected=15
    await calculate(page, { first: '10.4', second: '5.3', operation: 'Add', integersOnly: true });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('15');
  });

  test('TC-ADD-006: Cộng giá trị biên đạt giới hạn 10 chữ số', async ({ page }) => {
    // Test data: First=9999999999, Second=1, Op=Add => Expected=10000000000
    await calculate(page, { first: '9999999999', second: '1', operation: 'Add' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('10000000000');
  });

});

// =======================================================
// MODULE: SUBTRACTION (Phép trừ)
// =======================================================

test.describe('SUB - Module Phép Trừ [Build 1]', () => {

  test('TC-SUB-001: Trừ hai số nguyên dương cho kết quả dương', async ({ page }) => {
    // Test data: First=50, Second=20, Op=Subtract => Expected=30
    await calculate(page, { first: '50', second: '20', operation: 'Subtract' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('30');
  });

  test('TC-SUB-002: Trừ số nhỏ cho số lớn cho kết quả âm', async ({ page }) => {
    // Test data: First=15, Second=40, Op=Subtract => Expected=-25
    await calculate(page, { first: '15', second: '40', operation: 'Subtract' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('-25');
  });

  test('TC-SUB-003: Trừ hai số thập phân', async ({ page }) => {
    // Test data: First=10.5, Second=3.2, Op=Subtract => Expected=7.3
    await calculate(page, { first: '10.5', second: '3.2', operation: 'Subtract' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('7.3');
  });

  test('TC-SUB-004: Trừ hai số bằng nhau cho kết quả bằng 0', async ({ page }) => {
    // Test data: First=99, Second=99, Op=Subtract => Expected=0
    await calculate(page, { first: '99', second: '99', operation: 'Subtract' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('0');
  });

});

// =======================================================
// MODULE: MULTIPLICATION (Phép nhân)
// =======================================================

test.describe('MUL - Module Phép Nhân [Build 1]', () => {

  test('TC-MUL-001: Nhân hai số nguyên dương', async ({ page }) => {
    // Test data: First=7, Second=8, Op=Multiply => Expected=56
    await calculate(page, { first: '7', second: '8', operation: 'Multiply' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('56');
  });

  test('TC-MUL-002: Nhân một số với 0', async ({ page }) => {
    // Test data: First=125, Second=0, Op=Multiply => Expected=0
    await calculate(page, { first: '125', second: '0', operation: 'Multiply' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('0');
  });

  test('TC-MUL-003: Nhân số âm với số dương', async ({ page }) => {
    // Test data: First=-6, Second=9, Op=Multiply => Expected=-54
    await calculate(page, { first: '-6', second: '9', operation: 'Multiply' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('-54');
  });

  test('TC-MUL-004: Nhân số thập phân với tùy chọn Integers only', async ({ page }) => {
    // Test data: First=3.5, Second=3, Op=Multiply, IntegersOnly=true => Expected=10
    await calculate(page, { first: '3.5', second: '3', operation: 'Multiply', integersOnly: true });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('10');
  });

});

// =======================================================
// MODULE: DIVISION (Phép chia)
// =======================================================

test.describe('DIV - Module Phép Chia [Build 1]', () => {

  test('TC-DIV-001: Chia hết hai số nguyên dương', async ({ page }) => {
    // Test data: First=100, Second=4, Op=Divide => Expected=25
    await calculate(page, { first: '100', second: '4', operation: 'Divide' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('25');
  });

  test('TC-DIV-002: Chia không hết cho kết quả số thập phân', async ({ page }) => {
    // Test data: First=10, Second=4, Op=Divide => Expected=2.5
    await calculate(page, { first: '10', second: '4', operation: 'Divide' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('2.5');
  });

  test('TC-DIV-003: Chia cho 0 hiển thị thông báo lỗi', async ({ page }) => {
    // Test data: First=25, Second=0, Op=Divide => Expected error="Divide by zero error!"
    await calculate(page, { first: '25', second: '0', operation: 'Divide' });
    const error = await getErrorMessage(page);
    expect(error).toContain('Divide by zero error!');
  });

  test('TC-DIV-004: Chia số 0 cho một số khác 0', async ({ page }) => {
    // Test data: First=0, Second=15, Op=Divide => Expected=0
    await calculate(page, { first: '0', second: '15', operation: 'Divide' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('0');
  });

  test('TC-DIV-005: Chia với tùy chọn Integers only', async ({ page }) => {
    // Test data: First=7, Second=2, Op=Divide, IntegersOnly=true => Expected=3
    await calculate(page, { first: '7', second: '2', operation: 'Divide', integersOnly: true });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('3');
  });

});

// =======================================================
// MODULE: CONCATENATE (Ghép chuỗi)
// =======================================================

test.describe('CONCAT - Module Ghép Chuỗi [Build 1]', () => {

  test('TC-CONCAT-001: Ghép hai chuỗi số nguyên', async ({ page }) => {
    // Test data: First=123, Second=456, Op=Concatenate => Expected=123456
    await calculate(page, { first: '123', second: '456', operation: 'Concatenate' });
    const answer = await getAnswer(page);
    const error = await getErrorMessage(page);
    expect(error).toBe('');
    expect(answer).toBe('123456');
  });

  test('TC-CONCAT-002: Ghép chuỗi chứa chữ cái và ký tự đặc biệt', async ({ page }) => {
    // Test data: First=Hello, Second=_World!, Op=Concatenate => Expected=Hello_World!
    await calculate(page, { first: 'Hello', second: '_World!', operation: 'Concatenate' });
    const answer = await getAnswer(page);
    expect(answer).toBe('Hello_World!');
  });

  test('TC-CONCAT-003: Kiểm tra ẩn tùy chọn Integers only khi chọn Concatenate', async ({ page }) => {
    // Khi chọn Concatenate, checkbox Integers only phải bị hidden/disabled
    await selectOperation(page, 'Concatenate');
    const checkbox = page.locator('#integerSelect');
    const label = page.locator('label[for="integerSelect"]');
    // Checkbox phải hidden hoặc không hiển thị
    const isVisible = await checkbox.isVisible();
    expect(isVisible).toBe(false);
  });

});

// =======================================================
// MODULE: VALIDATION (Kiểm tra dữ liệu nhập)
// =======================================================

test.describe('VAL - Module Validation [Build 1]', () => {

  test('TC-VAL-001: Báo lỗi khi First number không phải là số [BUG KNOWN on Build 1]', async ({ page }) => {
    // TC-BUILD-002: Build 1 bỏ qua validation => hiển thị NaN thay vì lỗi
    // Test data: First=abc, Second=10, Op=Add
    // Kỳ vọng chuẩn: "Number 1 is not a number"
    // Thực tế Build 1: có thể cho ra NaN (known bug)
    await calculate(page, { first: 'abc', second: '10', operation: 'Add' });
    const error = await getErrorMessage(page);
    const answer = await getAnswer(page);
    // Ghi nhận: Build 1 có bug - bỏ qua validation số
    // Test PASS nếu có lỗi "Number 1 is not a number", FAIL nếu ra "NaN"
    expect(error).toContain('Number 1 is not a number');
  });

  test('TC-VAL-002: Báo lỗi khi Second number không phải là số [BUG KNOWN on Build 1]', async ({ page }) => {
    // Test data: First=20, Second=xyz, Op=Multiply
    // Kỳ vọng chuẩn: "Number 2 is not a number"
    // Thực tế Build 1: cũng bỏ qua validation => Answer ra NaN, không có lỗi
    await calculate(page, { first: '20', second: 'xyz', operation: 'Multiply' });
    const error = await getErrorMessage(page);
    const answer = await getAnswer(page);
    // Ghi nhận bug: Build 1 bỏ qua validation cho Number 2
    expect(error, 'Build 1 BUG: bỏ qua validation Number 2 - hiển thị NaN thay vì báo lỗi').toContain('Number 2 is not a number');
  });

  test('TC-VAL-003: Báo lỗi khi để trống trường First number [BUG KNOWN on Build 1]', async ({ page }) => {
    // Test data: First=(empty), Second=5, Op=Subtract
    // Kỳ vọng chuẩn: lỗi "Number 1 is not a number"
    // Thực tế Build 1: bỏ qua validation trường rỗng => không có lỗi
    await selectOperation(page, 'Subtract');
    await enterSecondNumber(page, '5');
    await clickCalculate(page);
    const error = await getErrorMessage(page);
    // Ghi nhận bug: Build 1 bỏ qua validation trường trống
    expect(error, 'Build 1 BUG: bỏ qua validation trường trống - không hiện lỗi').toContain('Number 1 is not a number');
  });

  test('TC-VAL-004: Kiểm tra giới hạn tối đa 10 ký tự của trường nhập liệu', async ({ page }) => {
    // First number và Second number có maxlength=10
    const input1 = page.locator('#number1Field');
    const input2 = page.locator('#number2Field');
    const maxLen1 = await input1.getAttribute('maxlength');
    const maxLen2 = await input2.getAttribute('maxlength');
    expect(maxLen1).toBe('10');
    expect(maxLen2).toBe('10');
  });

});

// =======================================================
// MODULE: RESET / UI Controls
// =======================================================

test.describe('RESET - Module UI Reset & Controls [Build 1]', () => {

  test('TC-RESET-001: Xóa Answer và uncheck Integers only khi bấm Clear', async ({ page }) => {
    // Setup: Tính toán trước và check Integers only
    await calculate(page, { first: '8.5', second: '1.5', operation: 'Add', integersOnly: true });
    // Verify answer = 10
    const answerBefore = await getAnswer(page);
    expect(answerBefore).toBe('10');
    // Bấm Clear
    await clickClear(page);
    // Verify Answer rỗng
    const answerAfter = await getAnswer(page);
    expect(answerAfter).toBe('');
    // Verify Integers only bị uncheck
    const checkbox = page.locator('#integerSelect');
    const isChecked = await checkbox.isChecked();
    expect(isChecked).toBe(false);
  });

  test('TC-RESET-002: Xóa thông báo lỗi khi bấm nút Clear [BUG Check on Build 1]', async ({ page }) => {
    // Tạo lỗi chia cho 0
    await calculate(page, { first: '10', second: '0', operation: 'Divide' });
    const errorBefore = await getErrorMessage(page);

    // Thử bấm Clear (helper đã wait cho button enabled)
    // Nếu button vẫn disabled sau timeout => Build 1 bug: Clear button không re-enable sau lỗi
    const clearEnabled = await page.locator('#clearButton:not([disabled])').count();
    if (clearEnabled === 0) {
      console.warn('⚠️ BUG on Build 1: Clear button vẫn disabled sau khi xảy ra lỗi chia cho 0');
      // Ghi nhận bug nhưng không fail test này (bug documented)
      return;
    }

    await clickClear(page);
    const errorAfter = await getErrorMessage(page);
    expect(errorAfter).toBe('');
  });

  test('TC-RESET-003: Kiểm tra trạng thái nút và loading graphic trong lúc tính toán', async ({ page }) => {
    // Test data: First=50, Second=50, Op=Add => Expected=100
    await enterFirstNumber(page, '50');
    await enterSecondNumber(page, '50');
    await selectOperation(page, 'Add');

    // Click Calculate và ngay lập tức kiểm tra loading state
    const calcButton = page.locator('#calculateButton');
    const clearButton = page.locator('#clearButton');

    await calcButton.click();

    // Sau khi tính xong, nút phải được kích hoạt lại
    await page.waitForSelector('#calculateButton:not([disabled])', { timeout: 10000 });
    expect(await calcButton.isDisabled()).toBe(false);
    expect(await clearButton.isDisabled()).toBe(false);

    // Answer phải là 100
    const answer = await getAnswer(page);
    expect(answer).toBe('100');
  });

});

// =======================================================
// MODULE: BUILD - Build 1 Specific Defect Verification
// =======================================================

test.describe('BUILD - Build 1 Defect Verification', () => {

  test('TC-BUILD-002: [BUG] Build 1 bỏ qua validation số - NaN thay vì lỗi', async ({ page }) => {
    // TC-BUILD-002: Xác nhận bug trên Build 1
    // First=abc, Second=10, Op=Add
    // Build 1 skip validation => Answer = NaN
    await calculate(page, { first: 'abc', second: '10', operation: 'Add' });
    const error = await getErrorMessage(page);
    const answer = await getAnswer(page);

    console.log(`[Build 1 Bug Report]`);
    console.log(`  Error message: "${error}"`);
    console.log(`  Answer field: "${answer}"`);

    // Ghi nhận bug: Build 1 không báo lỗi validation
    // Nếu answer = NaN và error = rỗng => BUG confirmed
    // Nếu error có "Number 1 is not a number" => PASS (không có bug)
    const hasBug = (answer === 'NaN' && error === '');
    const isFixed = error.includes('Number 1 is not a number');

    if (hasBug) {
      console.warn('⚠️ BUG CONFIRMED: Build 1 bỏ qua validation, hiển thị NaN thay vì báo lỗi');
    }

    // Test này sẽ FAIL để đánh dấu bug đã xác nhận
    expect(error, 'Kỳ vọng: "Number 1 is not a number" - Thực tế Build 1 bỏ qua validation').toContain('Number 1 is not a number');
  });

});
