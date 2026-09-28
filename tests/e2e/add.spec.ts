import { test, expect } from '@playwright/test';
import { CalculatorPage, TARGET_BUILD } from '../helpers/calculator.helper';

test.describe(`TC-ADD: Addition Tests (Build ${TARGET_BUILD})`, () => {
  let calc: CalculatorPage;

  test.beforeEach(async ({ page }) => {
    calc = new CalculatorPage(page);
    await calc.goto();
    await calc.selectBuild(TARGET_BUILD);
  });

  test('TC-ADD-001: Add two positive integers (15 + 25 = 40)', async () => {
    await calc.calculate('15', '25', 'Add');
    expect(await calc.getAnswer()).toBe('40');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-ADD-002: Add two decimal numbers (12.35 + 7.65 = 20)', async () => {
    await calc.calculate('12.35', '7.65', 'Add');
    expect(await calc.getAnswer()).toBe('20');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-ADD-003: Add negative and positive number (-30 + 10 = -20)', async () => {
    await calc.calculate('-30', '10', 'Add');
    expect(await calc.getAnswer()).toBe('-20');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-ADD-004: Add with zero (0 + 50 = 50)', async () => {
    await calc.calculate('0', '50', 'Add');
    expect(await calc.getAnswer()).toBe('50');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-ADD-005: Add decimals with Integers only (10.4 + 5.3 -> 15)', async () => {
    await calc.enterFirstNumber('10.4');
    await calc.enterSecondNumber('5.3');
    await calc.selectOperation('Add');
    await calc.checkIntegersOnly();
    await calc.clickCalculate();
    expect(await calc.getAnswer()).toBe('15');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-ADD-006: Add at 10-digit boundary (9999999999 + 1 = 10000000000)', async () => {
    await calc.calculate('9999999999', '1', 'Add');
    expect(await calc.getAnswer()).toBe('10000000000');
  });
});
