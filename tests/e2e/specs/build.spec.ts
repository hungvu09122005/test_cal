import { test, expect } from '@playwright/test';
import { CalculatorPage, type Operation } from '../pages/CalculatorPage';
import { BUILDS } from '../builds';

// TC-BUILD-002 (build 1) and TC-BUILD-004 (build 6) target builds outside this run's scope.
for (const build of BUILDS) {
  test.describe(`Build ${build} - Build verification`, () => {
    test(`TC-BUILD-001: Smoke - all operations with 10 and 2 [build ${build}]`, async ({ page }) => {
      const calc = new CalculatorPage(page);
      await calc.open(build);
      const expected: [Operation, string][] = [
        ['Add', '12'], ['Subtract', '8'], ['Multiply', '20'], ['Divide', '5'], ['Concatenate', '102'],
      ];
      for (const [op, value] of expected) {
        await calc.calc('10', '2', op);
        await expect.soft(calc.answer, `${op}: 10 and 2`).toHaveValue(value);
      }
    });

    test(`TC-BUILD-003: Add returns arithmetic sum, not concatenation [build ${build}]`, async ({ page }) => {
      test.skip(build !== '2', 'TC-BUILD-003 targets build 2 only');
      const calc = new CalculatorPage(page);
      await calc.open(build);
      await calc.calc('10', '20', 'Add');
      await calc.expectAnswer('30');
    });
  });
}
