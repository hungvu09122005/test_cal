import { test, expect } from '@playwright/test';
import { CalculatorPage, TARGET_BUILD } from '../helpers/calculator.helper';

test.describe(`TC-DIV: Division Tests (Build ${TARGET_BUILD})`, () => {
  let calc: CalculatorPage;

  test.beforeEach(async ({ page }) => {
    calc = new CalculatorPage(page);
    await calc.goto();
    await calc.selectBuild(TARGET_BUILD);
  });

  test('TC-DIV-001: Divide evenly (100 / 4 = 25)', async () => {
    await calc.calculate('100', '4', 'Divide');
    expect(await calc.getAnswer()).toBe('25');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-DIV-002: Divide with decimal result (10 / 4 = 2.5)', async () => {
    await calc.calculate('10', '4', 'Divide');
    expect(await calc.getAnswer()).toBe('2.5');
    expect(await calc.getErrorMessage()).toBe('');
  });

  // Known defect on Build 6: divide-by-zero check is bypassed (selectedBuild == 6),
  // so the app returns "Infinity" instead of the expected error. See TC-BUILD-004 / BUG-CALC-006.
  test('TC-DIV-003: Divide by zero shows error message (25 / 0)', async () => {
    await calc.calculate('25', '0', 'Divide');
    expect(await calc.getErrorMessage()).toBe('Divide by zero error!');
  });

  test('TC-DIV-004: Divide zero by non-zero (0 / 15 = 0)', async () => {
    await calc.calculate('0', '15', 'Divide');
    expect(await calc.getAnswer()).toBe('0');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-DIV-005: Divide with Integers only (7 / 2 -> 3)', async () => {
    await calc.enterFirstNumber('7');
    await calc.enterSecondNumber('2');
    await calc.selectOperation('Divide');
    await calc.checkIntegersOnly();
    await calc.clickCalculate();
    expect(await calc.getAnswer()).toBe('3');
    expect(await calc.getErrorMessage()).toBe('');
  });
});
