import { test, expect } from '@playwright/test';
import { CalculatorPage, TARGET_BUILD } from '../helpers/calculator.helper';

test.describe(`TC-CONCAT: Concatenation Tests (Build ${TARGET_BUILD})`, () => {
  let calc: CalculatorPage;

  test.beforeEach(async ({ page }) => {
    calc = new CalculatorPage(page);
    await calc.goto();
    await calc.selectBuild(TARGET_BUILD);
  });

  test('TC-CONCAT-001: Concatenate two integer strings (123 & 456 -> "123456")', async () => {
    await calc.calculate('123', '456', 'Concatenate');
    expect(await calc.getAnswer()).toBe('123456');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-CONCAT-002: Concatenate letters and special characters ("Hello" & "_World!")', async () => {
    await calc.calculate('Hello', '_World!', 'Concatenate');
    expect(await calc.getAnswer()).toBe('Hello_World!');
    expect(await calc.getErrorMessage()).toBe('');
  });

  test('TC-CONCAT-003: Integers only checkbox hidden when Concatenate selected', async () => {
    await calc.selectOperation('Add');
    await expect(calc.integerCheckbox()).toBeVisible();

    await calc.selectOperation('Concatenate');
    await expect(calc.integerCheckbox()).toBeHidden();
    await expect(calc.integerCheckbox()).toBeDisabled();
    expect(await calc.integerCheckbox().isChecked()).toBe(false);
  });
});
