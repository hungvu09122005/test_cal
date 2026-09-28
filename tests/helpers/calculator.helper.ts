import { Page } from '@playwright/test';

/** Build number under test for this run. Override by editing this constant per test run. */
export const TARGET_BUILD = process.env.TARGET_BUILD || '6';

export type Operation = 'Add' | 'Subtract' | 'Multiply' | 'Divide' | 'Concatenate';

/**
 * Page object encapsulating the Basic Calculator page interactions.
 * Selectors are based on the real data-testid attributes of the page.
 */
export class CalculatorPage {
  constructor(private page: Page) {}

  readonly buildSelect = () => this.page.locator('[data-testid="selectBuild"]');
  readonly firstNumber = () => this.page.locator('[data-testid="number1Field"]');
  readonly secondNumber = () => this.page.locator('[data-testid="number2Field"]');
  readonly operationSelect = () => this.page.locator('[data-testid="selectOperationDropdown"]');
  readonly calculateButton = () => this.page.locator('[data-testid="calculateButton"]');
  readonly answerField = () => this.page.locator('[data-testid="numberAnswerField"]');
  readonly integerCheckbox = () => this.page.locator('[data-testid="integerSelect"]');
  readonly clearButton = () => this.page.locator('[data-testid="clearButton"]');
  readonly errorMessage = () => this.page.locator('#errorMsgField');

  async goto(): Promise<void> {
    // Note: an empty string resolves to baseURL itself; a leading '/' would
    // instead resolve to the origin root (which doesn't exist on this site).
    await this.page.goto('');
  }

  async selectBuild(build: string): Promise<void> {
    await this.buildSelect().selectOption({ label: build });
  }

  async enterFirstNumber(value: string): Promise<void> {
    await this.firstNumber().fill(value);
  }

  async enterSecondNumber(value: string): Promise<void> {
    await this.secondNumber().fill(value);
  }

  async selectOperation(operation: Operation): Promise<void> {
    await this.operationSelect().selectOption({ label: operation });
  }

  async checkIntegersOnly(): Promise<void> {
    await this.integerCheckbox().check();
  }

  async clickCalculate(): Promise<void> {
    await this.calculateButton().click();
    // calculate() disables the button, shows a loading form, then re-enables it
    // after a random 0-1000ms delay (see unlockCalculate() in page script).
    await this.page.waitForFunction(() => {
      const btn = document.getElementById('calculateButton') as HTMLInputElement | null;
      return !!btn && !btn.disabled;
    });
  }

  async calculate(first: string, second: string, operation: Operation): Promise<void> {
    await this.enterFirstNumber(first);
    await this.enterSecondNumber(second);
    await this.selectOperation(operation);
    await this.clickCalculate();
  }

  async clickClear(): Promise<void> {
    await this.clearButton().click();
  }

  async getAnswer(): Promise<string> {
    return await this.answerField().inputValue();
  }

  async getErrorMessage(): Promise<string> {
    return ((await this.errorMessage().textContent()) ?? '').trim();
  }
}
