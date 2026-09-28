// @ts-check
const { expect } = require('@playwright/test');

/**
 * Page Object for TestSheep Basic Calculator
 * URL: https://testsheepnz.github.io/BasicCalculator.html
 */
class CalculatorPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.selectBuildDropdown = page.locator('#selectBuild');
    this.number1Input = page.locator('#number1Field');
    this.number2Input = page.locator('#number2Field');
    this.operationDropdown = page.locator('#selectOperationDropdown');
    this.calculateButton = page.locator('#calculateButton');
    this.clearButton = page.locator('#clearButton');
    this.answerInput = page.locator('#numberAnswerField');
    this.integersOnlyCheckbox = page.locator('#integerSelect');
    this.integersOnlyLabel = page.locator('#intSelectionLabel');
    this.errorMessage = page.locator('#errorMsgField');
    this.calculatingForm = page.locator('#calculatingForm');
    this.answerForm = page.locator('#answerForm');
  }

  async goto() {
    await this.page.goto('/BasicCalculator.html');
    await expect(this.calculateButton).toBeVisible();
  }

  /**
   * Select build: '0' (Prototype), '1', '2', '3', ..., '9'
   * @param {string} build
   */
  async selectBuild(build) {
    await this.selectBuildDropdown.selectOption(build);
  }

  /**
   * @param {string} val
   */
  async enterNumber1(val) {
    await this.number1Input.fill(val);
  }

  /**
   * @param {string} val
   */
  async enterNumber2(val) {
    await this.number2Input.fill(val);
  }

  /**
   * Operation mapping:
   * '0' | 'Add'
   * '1' | 'Subtract'
   * '2' | 'Multiply'
   * '3' | 'Divide'
   * '4' | 'Concatenate'
   * @param {'0'|'1'|'2'|'3'|'4'|string} op
   */
  async selectOperation(op) {
    const opMap = {
      Add: '0',
      Subtract: '1',
      Multiply: '2',
      Divide: '3',
      Concatenate: '4',
    };
    const value = opMap[op] || op;
    await this.operationDropdown.selectOption(value);
  }

  async toggleIntegersOnly(check = true) {
    const isChecked = await this.integersOnlyCheckbox.isChecked();
    if (check !== isChecked) {
      await this.integersOnlyCheckbox.setChecked(check);
    }
  }

  async clickCalculate() {
    await this.calculateButton.click();
    // The website does not call unlockCalculate() on divide-by-zero, keeping buttons disabled.
    // We wait until calculatingForm is hidden or error is shown or calculateButton is re-enabled.
    await this.page.waitForFunction(() => {
      const calcForm = document.getElementById('calculatingForm');
      const err = document.getElementById('errorMsgField');
      const btn = document.getElementById('calculateButton');
      return (calcForm && calcForm.hidden) || (err && err.textContent.trim().length > 0) || (btn && !btn.disabled);
    }, { timeout: 6000 }).catch(() => {});
  }

  async clickClear() {
    await this.clearButton.click();
  }

  async getAnswer() {
    return await this.answerInput.inputValue();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}

module.exports = { CalculatorPage };
