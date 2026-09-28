import { expect, type Locator, type Page } from '@playwright/test';

export type Operation = 'Add' | 'Subtract' | 'Multiply' | 'Divide' | 'Concatenate';

export class CalculatorPage {
  readonly build: Locator;
  readonly number1: Locator;
  readonly number2: Locator;
  readonly operation: Locator;
  readonly calculateButton: Locator;
  readonly clearButton: Locator;
  readonly answer: Locator;
  readonly integersOnly: Locator;
  readonly integersOnlyLabel: Locator;
  readonly errorMsg: Locator;
  readonly calculatingForm: Locator;
  readonly answerForm: Locator;

  constructor(readonly page: Page) {
    this.build = page.getByTestId('selectBuild');
    this.number1 = page.getByTestId('number1Field');
    this.number2 = page.getByTestId('number2Field');
    this.operation = page.getByTestId('selectOperationDropdown');
    this.calculateButton = page.getByTestId('calculateButton');
    this.clearButton = page.getByTestId('clearButton');
    this.answer = page.getByTestId('numberAnswerField');
    this.integersOnly = page.getByTestId('integerSelect');
    this.integersOnlyLabel = page.locator('#intSelectionLabel');
    this.errorMsg = page.getByTestId('errorMsgField');
    this.calculatingForm = page.locator('#calculatingForm');
    this.answerForm = page.locator('#answerForm');
  }

  async open(build: string) {
    await this.page.goto('/BasicCalculator.html');
    await this.build.selectOption(build);
  }

  async enterNumbers(first: string, second: string) {
    await this.number1.fill(first);
    await this.number2.fill(second);
  }

  async selectOperation(op: Operation) {
    await this.operation.selectOption({ label: op });
  }

  /** Ticks "Integers only". Fails if the checkbox cannot be ticked by the user. */
  async checkIntegersOnly() {
    if (await this.integersOnly.isChecked()) return; // already ticked (e.g. forced by the build)
    await this.integersOnly.check({ timeout: 3_000 });
  }

  /** Clicks Calculate and waits until the calculation finishes (answer shown) or an error is raised. */
  async calculate() {
    await this.calculateButton.click();
    await this.page.waitForFunction(() => {
      const err = document.getElementById('errorMsgField')!.innerHTML;
      const calculating = !(document.getElementById('calculatingForm') as HTMLFormElement).hidden;
      return err !== '' || !calculating;
    });
  }

  async calc(first: string, second: string, op: Operation, opts: { integersOnly?: boolean } = {}) {
    await this.enterNumbers(first, second);
    await this.selectOperation(op);
    if (opts.integersOnly) await this.checkIntegersOnly();
    await this.calculate();
  }

  async expectAnswer(value: string) {
    await expect(this.answer).toHaveValue(value);
    await expect(this.errorMsg).toHaveText('');
  }

  async clear() {
    await expect(this.clearButton, 'Clear button should be enabled').toBeEnabled({ timeout: 3_000 });
    await this.clearButton.click();
  }
}
