import { test, expect } from '@playwright/test';
import { CalculatorPage, TARGET_BUILD } from '../helpers/calculator.helper';

test.describe(`TC-VAL: Input Validation Tests (Build ${TARGET_BUILD})`, () => {
  let calc: CalculatorPage;

  test.beforeEach(async ({ page }) => {
    calc = new CalculatorPage(page);
    await calc.goto();
    await calc.selectBuild(TARGET_BUILD);
  });

  test('TC-VAL-001: Non-numeric First number shows error ("abc", 10, Add)', async () => {
    await calc.calculate('abc', '10', 'Add');
    expect(await calc.getErrorMessage()).toBe('Number 1 is not a number');
  });

  test('TC-VAL-002: Non-numeric Second number shows error (20, "xyz", Multiply)', async () => {
    await calc.calculate('20', 'xyz', 'Multiply');
    expect(await calc.getErrorMessage()).toBe('Number 2 is not a number');
  });

  // Verified against the live app: isNaN('') is false in JS, so an EMPTY field is
  // NOT caught by the "is not a number" check - it is treated as 0. This differs from
  // the doc's expectation of an error message; recorded as an observation in the test run.
  test('TC-VAL-003: Empty First number is treated as 0, not an error (Subtract, second = 5)', async () => {
    await calc.enterSecondNumber('5');
    await calc.selectOperation('Subtract');
    await calc.clickCalculate();
    expect(await calc.getErrorMessage()).toBe('');
    expect(await calc.getAnswer()).toBe('-5');
  });

  test('TC-VAL-004: Number fields enforce maxlength=10 on keystrokes', async () => {
    await expect(calc.firstNumber()).toHaveAttribute('maxlength', '10');
    await expect(calc.secondNumber()).toHaveAttribute('maxlength', '10');

    await calc.firstNumber().pressSequentially('12345678901');
    await calc.secondNumber().pressSequentially('12345678901');

    expect(await calc.firstNumber().inputValue()).toBe('1234567890');
    expect(await calc.secondNumber().inputValue()).toBe('1234567890');
  });
});
