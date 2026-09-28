import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';
import { BUILDS } from '../builds';

for (const build of BUILDS) {
  test.describe(`Build ${build} - Validation`, () => {
    test(`TC-VAL-001: Error when First number is not a number [build ${build}]`, async ({ page }) => {
      const calc = new CalculatorPage(page);
      await calc.open(build);
      await calc.calc('abc', '10', 'Add');
      await expect(calc.errorMsg).toHaveText('Number 1 is not a number');
      await expect(calc.calculateButton).toBeEnabled();
      await expect(calc.clearButton).toBeEnabled();
    });

    test(`TC-VAL-002: Error when Second number is not a number [build ${build}]`, async ({ page }) => {
      const calc = new CalculatorPage(page);
      await calc.open(build);
      await calc.calc('20', 'xyz', 'Multiply');
      await expect(calc.errorMsg).toHaveText('Number 2 is not a number');
      await expect(calc.answer).toHaveValue('');
    });

    test(`TC-VAL-003: Error when First number is empty [build ${build}]`, async ({ page }) => {
      const calc = new CalculatorPage(page);
      await calc.open(build);
      await calc.calc('', '5', 'Subtract');
      await expect(calc.errorMsg).toHaveText('Number 1 is not a number');
      await expect(calc.answer).toHaveValue('');
    });

    test(`TC-VAL-004: Input fields limited to 10 characters [build ${build}]`, async ({ page }) => {
      const calc = new CalculatorPage(page);
      await calc.open(build);
      await expect(calc.number1).toHaveAttribute('maxlength', '10');
      await expect(calc.number2).toHaveAttribute('maxlength', '10');
      await calc.number1.pressSequentially('12345678901');
      await calc.number2.pressSequentially('12345678901');
      await expect(calc.number1).toHaveValue('1234567890');
      await expect(calc.number2).toHaveValue('1234567890');
    });
  });
}
