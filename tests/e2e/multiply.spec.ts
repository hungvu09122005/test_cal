import { test, expect } from '@playwright/test';
import { CalculatorPage, TARGET_BUILD } from '../helpers/calculator.helper';

test.describe(`TC-MUL: Multiplication Tests (Build ${TARGET_BUILD})`, () => {
  let calc: CalculatorPage;

  test.beforeEach(async ({ page }) => {
    calc = new CalculatorPage(page);
    await calc.goto();
    await calc.selectBuild(TARGET_BUILD);
  });

  test('TC-MUL-001: Multiply two positive integers (7 * 8 = 56)', async () => {
    await calc.calculate('7', '8', 'Multiply');
    expect(await calc.getAnswer()).toBe('56');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-MUL-002: Multiply by zero (125 * 0 = 0)', async () => {
    await calc.calculate('125', '0', 'Multiply');
    expect(await calc.getAnswer()).toBe('0');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-MUL-003: Multiply negative by positive (-6 * 9 = -54)', async () => {
    await calc.calculate('-6', '9', 'Multiply');
    expect(await calc.getAnswer()).toBe('-54');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-MUL-004: Multiply decimals with Integers only (3.5 * 3 -> 10)', async () => {
    await calc.enterFirstNumber('3.5');
    await calc.enterSecondNumber('3');
    await calc.selectOperation('Multiply');
    await calc.checkIntegersOnly();
    await calc.clickCalculate();
    expect(await calc.getAnswer()).toBe('10');
    expect(await calc.getErrorMessage()).toBe('');
  });
});
