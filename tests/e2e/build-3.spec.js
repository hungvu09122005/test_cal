// @ts-check
const { runCalculatorTestSuite } = require('../../src/suites/calculatorTestSuite');

/**
 * Execute all 29 functional test cases against BUILD 3:
 * Characteristic / Defect: "always treats like a number"
 * - In Build 3, mathematical operations pass normally.
 * - Concatenate fails when strings are input ("Number 1 is not a number").
 * - Integers only option is NOT hidden when Concatenate is selected.
 */
runCalculatorTestSuite('3', 'Build 3');
