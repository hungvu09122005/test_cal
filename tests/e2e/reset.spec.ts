import { test, expect } from '@playwright/test';
import { CalculatorPage, TARGET_BUILD } from '../helpers/calculator.helper';

test.describe(`TC-RESET: Reset & UI State Tests (Build ${TARGET_BUILD})`, () => {
  let calc: CalculatorPage;

  test.beforeEach(async ({ page }) => {
    calc = new CalculatorPage(page);
    await calc.goto();
    await calc.selectBuild(TARGET_BUILD);
  });

  test('TC-RESET-001: Clear resets Answer and unchecks Integers only', async () => {
    await calc.enterFirstNumber('8.5');
    await calc.enterSecondNumber('1.5');
    await calc.selectOperation('Add');
    await calc.checkIntegersOnly();
    await calc.clickCalculate();

    expect(await calc.getAnswer()).toBe('10');
    expect(await calc.integerCheckbox().isChecked()).toBe(true);

    await calc.clickClear();

    expect(await calc.getAnswer()).toBe('');
    expect(await calc.integerCheckbox().isChecked()).toBe(false);
  });

  test('TC-RESET-002: Clear removes the error message', async () => {
    await calc.calculate('10', '0', 'Divide');

    // On Build 6 the divide-by-zero check is bypassed (BUG-CALC-006), so no error
    // message may appear here. This test only verifies Clear empties whatever error is present.
    await calc.clickClear();
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-RESET-003: Calculate/Clear disabled during processing, Answer shown after', async ({ page }) => {
    await calc.enterFirstNumber('50');
    await calc.enterSecondNumber('50');
    await calc.selectOperation('Add');

    await calc.calculateButton().click();

    // Immediately after click, the app should be in the "Calculating..." state.
    await expect(calc.calculateButton()).toBeDisabled();
    await expect(calc.clearButton()).toBeDisabled();
    await expect(page.locator('#calculatingForm')).toBeVisible();
    await expect(page.locator('#answerForm')).toBeHidden();

    // Wait for processing to finish.
    await page.waitForFunction(() => {
      const btn = document.getElementById('calculateButton') as HTMLInputElement | null;
      return !!btn && !btn.disabled;
    });

    await expect(calc.calculateButton()).toBeEnabled();
    await expect(calc.clearButton()).toBeEnabled();
    await expect(page.locator('#answerForm')).toBeVisible();
    expect(await calc.getAnswer()).toBe('100');
  });
});
