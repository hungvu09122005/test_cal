import { test, expect } from '@playwright/test';
import { CalculatorPage, TARGET_BUILD } from '../helpers/calculator.helper';

test.describe(`TC-SUB: Subtraction Tests (Build ${TARGET_BUILD})`, () => {
  let calc: CalculatorPage;

  test.beforeEach(async ({ page }) => {
    calc = new CalculatorPage(page);
    await calc.goto();
    await calc.selectBuild(TARGET_BUILD);
  });

  test('TC-SUB-001: Subtract positive integers (50 - 20 = 30)', async () => {
    await calc.calculate('50', '20', 'Subtract');
    expect(await calc.getAnswer()).toBe('30');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-SUB-002: Subtract small from large -> negative (15 - 40 = -25)', async () => {
    await calc.calculate('15', '40', 'Subtract');
    expect(await calc.getAnswer()).toBe('-25');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-SUB-003: Subtract two decimals (10.5 - 3.2 = 7.3)', async () => {
    await calc.calculate('10.5', '3.2', 'Subtract');
    expect(await calc.getAnswer()).toBe('7.3');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-SUB-004: Subtract equal numbers -> zero (99 - 99 = 0)', async () => {
    await calc.calculate('99', '99', 'Subtract');
    expect(await calc.getAnswer()).toBe('0');
    expect(await calc.getErrorMessage()).toBe('');
  });
});
