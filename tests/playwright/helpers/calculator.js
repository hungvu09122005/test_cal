// helpers/calculator.js
// Shared helper functions for Basic Calculator tests
// Selectors verified by Playwright DOM inspection on 2026-09-28

const URL = 'https://testsheepnz.github.io/BasicCalculator.html';

// Operation value mapping (value attribute trong <select id="selectOperationDropdown">)
// Confirmed by DOM inspection: Add=0, Subtract=1, Multiply=2, Divide=3, Concatenate=4
const OPERATION_VALUES = {
  'Add':         '0',
  'Subtract':    '1',
  'Multiply':    '2',
  'Divide':      '3',
  'Concatenate': '4',
};

/**
 * Mở trang Basic Calculator
 * @param {import('@playwright/test').Page} page
 */
async function openCalculator(page) {
  await page.goto(URL);
  await page.waitForLoadState('domcontentloaded');
  await page.waitForSelector('#selectBuild', { timeout: 15000 });
}

/**
 * Chọn Build  ('0'=Prototype, '1'-'9'=Build 1-9)
 * @param {import('@playwright/test').Page} page
 * @param {string|number} build
 */
async function selectBuild(page, build) {
  await page.selectOption('#selectBuild', { value: String(build) });
}

/**
 * Nhập First Number
 * @param {import('@playwright/test').Page} page
 * @param {string|number} value
 */
async function enterFirstNumber(page, value) {
  await page.fill('#number1Field', String(value));
}

/**
 * Nhập Second Number
 * @param {import('@playwright/test').Page} page
 * @param {string|number} value
 */
async function enterSecondNumber(page, value) {
  await page.fill('#number2Field', String(value));
}

/**
 * Chọn Operation
 * @param {import('@playwright/test').Page} page
 * @param {string} operation - 'Add','Subtract','Multiply','Divide','Concatenate'
 */
async function selectOperation(page, operation) {
  const value = OPERATION_VALUES[operation];
  if (!value) throw new Error(`Unknown operation: ${operation}. Valid: ${Object.keys(OPERATION_VALUES).join(', ')}`);
  await page.selectOption('#selectOperationDropdown', { value });
}

/**
 * Tích/bỏ tích checkbox Integers only
 * @param {import('@playwright/test').Page} page
 * @param {boolean} check
 */
async function setIntegersOnly(page, check) {
  const checkbox = page.locator('#integerSelect');
  const isChecked = await checkbox.isChecked();
  if (check && !isChecked) await checkbox.check();
  if (!check && isChecked) await checkbox.uncheck();
}

/**
 * Bấm nút Calculate và chờ kết quả (loading xong)
 * @param {import('@playwright/test').Page} page
 */
async function clickCalculate(page) {
  await page.click('#calculateButton');
  // Chờ Calculate button được re-enable (tính toán hoàn tất)
  await page.waitForSelector('#calculateButton:not([disabled])', { timeout: 10000 })
    .catch(() => {});
  // Đảm bảo DOM đã cập nhật
  await page.waitForTimeout(300);
}

/**
 * Bấm nút Clear
 * @param {import('@playwright/test').Page} page
 */
async function clickClear(page) {
  // Chờ Clear button được enable trước khi click (tránh lỗi disabled)
  await page.waitForSelector('#clearButton:not([disabled])', { timeout: 10000 })
    .catch(() => {});
  await page.click('#clearButton');
  await page.waitForTimeout(200);
}

/**
 * Lấy giá trị Answer
 * @param {import('@playwright/test').Page} page
 * @returns {Promise<string>}
 */
async function getAnswer(page) {
  return await page.inputValue('#numberAnswerField');
}

/**
 * Lấy thông báo lỗi từ #errorMsgField (là <label>)
 * @param {import('@playwright/test').Page} page
 * @returns {Promise<string>}
 */
async function getErrorMessage(page) {
  const text = await page.locator('#errorMsgField').textContent();
  return (text || '').trim();
}

/**
 * Thực hiện tính toán đầy đủ
 * @param {import('@playwright/test').Page} page
 * @param {{ build?: string|number, first: string|number, second: string|number, operation: string, integersOnly?: boolean }} opts
 */
async function calculate(page, { build, first, second, operation, integersOnly = false }) {
  if (build !== undefined) await selectBuild(page, build);
  await enterFirstNumber(page, first);
  await enterSecondNumber(page, second);
  await selectOperation(page, operation);
  if (integersOnly) await setIntegersOnly(page, true);
  await clickCalculate(page);
}

module.exports = {
  URL,
  OPERATION_VALUES,
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
};
