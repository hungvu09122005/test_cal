import { test, expect } from '@playwright/test';
import { CalculatorPage, TARGET_BUILD } from '../helpers/calculator.helper';

test.describe(`TC-BUILD: Build Verification Tests (Build ${TARGET_BUILD})`, () => {
  let calc: CalculatorPage;

  test.beforeEach(async ({ page }) => {
    calc = new CalculatorPage(page);
    await calc.goto();
    await calc.selectBuild(TARGET_BUILD);
  });

  test('TC-BUILD-004: Divide-by-zero check bypassed on Build 6 (defect confirmation - BUG-CALC-006)', async () => {
    await calc.calculate('50', '0', 'Divide');

    // Documents the CONFIRMED defect: Build 6 skips the num2==0 guard, so it
    // computes 50/0 -> "Infinity" instead of showing "Divide by zero error!".
    expect(await calc.getAnswer()).toBe('Infinity');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('Build 6 smoke test: Add/Subtract/Multiply/Concatenate unaffected', async () => {
    const cases: Array<{ op: 'Add' | 'Subtract' | 'Multiply' | 'Concatenate'; expected: string }> = [
      { op: 'Add', expected: '12' },
      { op: 'Subtract', expected: '8' },
      { op: 'Multiply', expected: '20' },
      { op: 'Concatenate', expected: '102' },
    ];

    for (const { op, expected } of cases) {
      await calc.calculate('10', '2', op);
      expect(await calc.getAnswer()).toBe(expected);
      expect(await calc.getErrorMessage()).toBe('');
      await calc.clickClear();
    }
  });

  test('Build 6 regression: normal divide (non-zero divisor) still works', async () => {
    await calc.calculate('20', '4', 'Divide');
    expect(await calc.getAnswer()).toBe('5');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('Build 6 regression: Clear button remains enabled (unlike Build 5)', async () => {
    await expect(calc.clearButton()).toBeEnabled();
    await calc.calculate('1', '1', 'Add');
    await calc.clickClear();
    expect(await calc.getAnswer()).toBe('');
  });
});
