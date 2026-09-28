// @ts-check
const { runCalculatorTestSuite } = require('../../src/suites/calculatorTestSuite');

/**
 * Execute all 29 functional test cases against BUILD 7:
 * Characteristic / Defect: "Uses answer, not number 1 as first for operation"
 * - In Build 7, num1 is replaced with answer (which is initially "" = 0).
 * - Operations where num1 is expected to be non-zero will fail.
 * - This exposes the defects across arithmetic and concatenation operations.
 */
runCalculatorTestSuite('7', 'Build 7');
