import { test, expect } from '@playwright/test';
import { CalculatorPage, type Operation } from '../pages/CalculatorPage';
import { BUILDS } from '../builds';

type Case = { id: string; title: string; n1: string; n2: string; op: Operation; integersOnly?: boolean; expected: string };

// Expected results come straight from tests/test-cases/{add,subtract,multiply,divide,concatenate}
const CASES: Case[] = [
  { id: 'TC-ADD-001', title: 'Add two positive integers', n1: '15', n2: '25', op: 'Add', expected: '40' },
  { id: 'TC-ADD-002', title: 'Add two decimals', n1: '12.35', n2: '7.65', op: 'Add', expected: '20' },
  { id: 'TC-ADD-003', title: 'Add negative and positive integer', n1: '-30', n2: '10', op: 'Add', expected: '-20' },
  { id: 'TC-ADD-004', title: 'Add with zero', n1: '0', n2: '50', op: 'Add', expected: '50' },
  { id: 'TC-ADD-005', title: 'Add decimals with Integers only', n1: '10.4', n2: '5.3', op: 'Add', integersOnly: true, expected: '15' },
  { id: 'TC-ADD-006', title: 'Add at 10-digit boundary', n1: '9999999999', n2: '1', op: 'Add', expected: '10000000000' },
  { id: 'TC-SUB-001', title: 'Subtract giving positive result', n1: '50', n2: '20', op: 'Subtract', expected: '30' },
  { id: 'TC-SUB-002', title: 'Subtract giving negative result', n1: '15', n2: '40', op: 'Subtract', expected: '-25' },
  { id: 'TC-SUB-003', title: 'Subtract two decimals', n1: '10.5', n2: '3.2', op: 'Subtract', expected: '7.3' },
  { id: 'TC-SUB-004', title: 'Subtract equal numbers', n1: '99', n2: '99', op: 'Subtract', expected: '0' },
  { id: 'TC-MUL-001', title: 'Multiply two positive integers', n1: '7', n2: '8', op: 'Multiply', expected: '56' },
  { id: 'TC-MUL-002', title: 'Multiply by zero', n1: '125', n2: '0', op: 'Multiply', expected: '0' },
  { id: 'TC-MUL-003', title: 'Multiply negative by positive', n1: '-6', n2: '9', op: 'Multiply', expected: '-54' },
  { id: 'TC-MUL-004', title: 'Multiply decimal with Integers only', n1: '3.5', n2: '3', op: 'Multiply', integersOnly: true, expected: '10' },
  { id: 'TC-DIV-001', title: 'Divide evenly', n1: '100', n2: '4', op: 'Divide', expected: '25' },
  { id: 'TC-DIV-002', title: 'Divide giving decimal', n1: '10', n2: '4', op: 'Divide', expected: '2.5' },
  { id: 'TC-DIV-004', title: 'Divide zero by non-zero', n1: '0', n2: '15', op: 'Divide', expected: '0' },
  { id: 'TC-DIV-005', title: 'Divide with Integers only', n1: '7', n2: '2', op: 'Divide', integersOnly: true, expected: '3' },
  { id: 'TC-CONCAT-001', title: 'Concatenate two integer strings', n1: '123', n2: '456', op: 'Concatenate', expected: '123456' },
  { id: 'TC-CONCAT-002', title: 'Concatenate letters and special chars', n1: 'Hello', n2: '_World!', op: 'Concatenate', expected: 'Hello_World!' },
];

for (const build of BUILDS) {
  test.describe(`Build ${build} - Arithmetic`, () => {
    for (const c of CASES) {
      test(`${c.id}: ${c.title} [build ${build}]`, async ({ page }) => {
        const calc = new CalculatorPage(page);
        await calc.open(build);
        await calc.calc(c.n1, c.n2, c.op, { integersOnly: c.integersOnly });
        await calc.expectAnswer(c.expected);
      });
    }

    test(`TC-DIV-003: Divide by zero shows error [build ${build}]`, async ({ page }) => {
      const calc = new CalculatorPage(page);
      await calc.open(build);
      await calc.calc('25', '0', 'Divide');
      await expect(calc.errorMsg).toHaveText('Divide by zero error!');
      await expect(calc.answer).toHaveValue('');
    });

    test(`TC-CONCAT-003: Integers only hidden when Concatenate selected [build ${build}]`, async ({ page }) => {
      const calc = new CalculatorPage(page);
      await calc.open(build);
      await expect(calc.integersOnly).toBeVisible();
      await expect(calc.integersOnly, 'Integers only should be user-selectable for Add').toBeEnabled();
      await calc.checkIntegersOnly();
      await calc.selectOperation('Concatenate');
      await expect(calc.integersOnly).toBeHidden();
      await expect(calc.integersOnlyLabel).toBeHidden();
      await expect(calc.integersOnly).toBeDisabled();
      await expect(calc.integersOnly).not.toBeChecked();
    });
  });
}
