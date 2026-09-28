import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';
import { BUILDS } from '../builds';

for (const build of BUILDS) {
  test.describe(`Build ${build} - Reset & UI state`, () => {
    test(`TC-RESET-001: Clear empties Answer and unchecks Integers only [build ${build}]`, async ({ page }) => {
      const calc = new CalculatorPage(page);
      await calc.open(build);
      await calc.calc('8.5', '1.5', 'Add', { integersOnly: true });
      await expect(calc.answer).toHaveValue('10');
      await expect(calc.integersOnly).toBeChecked();
      await calc.clear();
      await expect(calc.answer).toHaveValue('');
      await expect(calc.integersOnly).not.toBeChecked();
    });

    test(`TC-RESET-002: Clear removes error message [build ${build}]`, async ({ page }) => {
      const calc = new CalculatorPage(page);
      await calc.open(build);
      await calc.calc('10', '0', 'Divide');
      await expect(calc.errorMsg).toHaveText('Divide by zero error!');
      await calc.clear();
      await expect(calc.errorMsg).toHaveText('');
    });

    test(`TC-RESET-003: Buttons locked and loading shown while calculating [build ${build}]`, async ({ page }) => {
      const calc = new CalculatorPage(page);
      await calc.open(build);
      await calc.enterNumbers('50', '50');
      await calc.selectOperation('Add');
      // Snapshot UI state synchronously right after calculate() runs (unlock is delayed 0-1000ms at random)
      const during = await page.evaluate(() => {
        (window as any).calculate();
        const el = (id: string) => document.getElementById(id) as HTMLInputElement;
        return {
          calcDisabled: el('calculateButton').disabled,
          clearDisabled: el('clearButton').disabled,
          calculatingHidden: el('calculatingForm').hidden,
          answerHidden: el('answerForm').hidden,
        };
      });
      expect(during).toEqual({ calcDisabled: true, clearDisabled: true, calculatingHidden: false, answerHidden: true });
      await expect(page.getByTestId('processingGraphic').locator('img[src*="waiting.gif"]')).toHaveCount(1);

      await expect(calc.answerForm).toBeVisible({ timeout: 3_000 });
      await expect(calc.calculatingForm).toBeHidden();
      await expect(calc.answer).toHaveValue('100');
      await expect(calc.calculateButton).toBeEnabled();
      await expect(calc.clearButton).toBeEnabled();
    });
  });
}
