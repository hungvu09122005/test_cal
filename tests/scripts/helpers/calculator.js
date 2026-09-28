// tests/scripts/helpers/calculator.js
// Page Object Model & Helpers cho trang Basic Calculator

const URL = 'https://testsheepnz.github.io/BasicCalculator.html';

const SELECTORS = {
  buildSelect:     '#selectBuild',
  firstNumber:     '#number1Field',
  secondNumber:    '#number2Field',
  operationSelect: '#selectOperationDropdown',
  integerOnly:     '#integerSelect',
  integerOnlyLabel:'#intSelectionLabel',
  calculateBtn:    '#calculateButton',
  clearBtn:        '#clearButton',
  answerField:     '#numberAnswerField',
  errorMsg:        '#errorMsgField',
  calculatingForm: '#calculatingForm',
  answerForm:      '#answerForm',
};

/**
 * Mở trang Calculator và chọn Build
 * @param {import('@playwright/test').Page} page
 * @param {string} build - '0'=Prototype, '5'=Build 5, '8'=Build 8...
 */
async function openCalculator(page, build = '0') {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 20000 });
      break;
    } catch (err) {
      if (attempt === 3) throw err;
      await page.waitForTimeout(1000);
    }
  }
  if (build !== undefined) {
    await page.selectOption(SELECTORS.buildSelect, build);
  }
}

/**
 * Thực hiện phép tính trên giao diện
 * @param {import('@playwright/test').Page} page
 * @param {object} opts
 * @param {string} [opts.first]
 * @param {string} [opts.second]
 * @param {string} opts.operation - 'Add'|'Subtract'|'Multiply'|'Divide'|'Concatenate'
 * @param {boolean} [opts.integerOnly]
 */
async function calculate(page, { first, second, operation, integerOnly = false }) {
  if (first !== undefined) {
    await page.fill(SELECTORS.firstNumber, first);
  }
  if (second !== undefined) {
    await page.fill(SELECTORS.secondNumber, second);
  }
  if (operation) {
    await page.selectOption(SELECTORS.operationSelect, { label: operation });
  }

  const integerCheckbox = page.locator(SELECTORS.integerOnly);
  const isVisible = await integerCheckbox.isVisible();
  if (isVisible) {
    const isChecked = await integerCheckbox.isChecked();
    if (integerOnly && !isChecked) {
      await integerCheckbox.check();
    } else if (!integerOnly && isChecked) {
      await integerCheckbox.uncheck();
    }
  }

  await page.click(SELECTORS.calculateBtn);

  // Trang web dùng setTimeout ngẫu nhiên từ 0 đến 1000ms để hiển thị kết quả.
  // Đợi 1200ms để đảm bảo kết quả hoặc lỗi đã được render hoàn tất.
  await page.waitForTimeout(1200);
}

/**
 * Lấy giá trị Answer
 * @param {import('@playwright/test').Page} page
 */
async function getAnswer(page) {
  return page.locator(SELECTORS.answerField).inputValue();
}

/**
 * Lấy thông báo lỗi
 * @param {import('@playwright/test').Page} page
 */
async function getError(page) {
  const text = await page.locator(SELECTORS.errorMsg).textContent();
  return (text || '').trim();
}

/**
 * Bấm nút Clear
 * @param {import('@playwright/test').Page} page
 */
async function clickClear(page) {
  await page.click(SELECTORS.clearBtn);
}

module.exports = {
  URL,
  SELECTORS,
  openCalculator,
  calculate,
  getAnswer,
  getError,
  clickClear,
};
