# Test Run - Basic Calculator (Build 4)

- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html
- **Build Under Test**: 4
- **Execution Date**: 2026-09-28
- **Tester**: Automation (Playwright)
- **Environment**: Google Chrome (Playwright, channel "chrome") / Windows
- **Automation**: `tests/e2e/specs/*.spec.ts`, run with `npx cross-env BUILDS=4 playwright test`
- **Oracle**: expected results from `tests/test-cases`. A Fail means the build does not match the spec.

## Test Run Results

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|:---|:---:|:---:|:---:|:---:|:---|
| TC-ADD-001 | Addition | Automation (Playwright) | Pass |  |  |
| TC-ADD-002 | Addition | Automation (Playwright) | Pass |  |  |
| TC-ADD-003 | Addition | Automation (Playwright) | Pass |  |  |
| TC-ADD-004 | Addition | Automation (Playwright) | Pass |  |  |
| TC-ADD-005 | Addition | Automation (Playwright) | Pass |  |  |
| TC-ADD-006 | Addition | Automation (Playwright) | Pass |  |  |
| TC-BUILD-001 | Build | Automation (Playwright) | Pass |  |  |
| TC-BUILD-003 | Build | Automation (Playwright) | Not Run |  | TC-BUILD-003 targets build 2 only |
| TC-CONCAT-001 | Concatenate | Automation (Playwright) | Pass |  |  |
| TC-CONCAT-002 | Concatenate | Automation (Playwright) | Pass |  |  |
| TC-CONCAT-003 | Concatenate | Automation (Playwright) | Fail | BUG-CALC-004 | Integers only should be user-selectable for Add: Expected: enabled, Received: disabled |
| TC-DIV-001 | Division | Automation (Playwright) | Pass |  |  |
| TC-DIV-002 | Division | Automation (Playwright) | Fail | BUG-CALC-004 | Expected: "2.5", Received: "2" |
| TC-DIV-003 | Division | Automation (Playwright) | Pass |  |  |
| TC-DIV-004 | Division | Automation (Playwright) | Pass |  |  |
| TC-DIV-005 | Division | Automation (Playwright) | Pass |  |  |
| TC-MUL-001 | Multiplication | Automation (Playwright) | Pass |  |  |
| TC-MUL-002 | Multiplication | Automation (Playwright) | Pass |  |  |
| TC-MUL-003 | Multiplication | Automation (Playwright) | Pass |  |  |
| TC-MUL-004 | Multiplication | Automation (Playwright) | Pass |  |  |
| TC-RESET-001 | Reset | Automation (Playwright) | Pass |  |  |
| TC-RESET-002 | Reset | Automation (Playwright) | Fail | BUG-CALC-010 | Clear button should be enabled: Expected: enabled, Received: disabled |
| TC-RESET-003 | Reset | Automation (Playwright) | Pass |  |  |
| TC-SUB-001 | Subtraction | Automation (Playwright) | Pass |  |  |
| TC-SUB-002 | Subtraction | Automation (Playwright) | Pass |  |  |
| TC-SUB-003 | Subtraction | Automation (Playwright) | Fail | BUG-CALC-004 | Expected: "7.3", Received: "7" |
| TC-SUB-004 | Subtraction | Automation (Playwright) | Pass |  |  |
| TC-VAL-001 | Validation | Automation (Playwright) | Pass |  |  |
| TC-VAL-002 | Validation | Automation (Playwright) | Pass |  |  |
| TC-VAL-003 | Validation | Automation (Playwright) | Fail | BUG-CALC-011 | Expected: "Number 1 is not a number", Received: "" |
| TC-VAL-004 | Validation | Automation (Playwright) | Pass |  |  |

> Rule: when Result = Fail or Blocked, the row must have a Related Bug or a clear reason in Note.

## Test Run Status

| Pass | Fail | Blocked | Not Run | Total | Pass Rate (executed) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 25 | 5 | 0 | 1 | 31 | 83.3% |

## Related Bugs

| Bug ID | Title | Test Cases | Root Cause |
|:---|:---|:---|:---|
| BUG-CALC-004 | "Integers only" locked on for numeric operations | TC-CONCAT-003, TC-DIV-002, TC-SUB-003 | `setFieldStatus()` for `selectedBuild == 4` forces `integerSelect.checked = true` and `disabled = true`; decimal results are truncated and the user cannot toggle the checkbox. |
| BUG-CALC-010 | Calculate/Clear stay disabled after "Divide by zero error!" | TC-RESET-002 | The divide-by-zero branch `return`s without calling `unlockCalculate()`. Reproduces on the Prototype (build 0) too. |
| BUG-CALC-011 | Empty First number accepted as 0 | TC-VAL-003 | `isNaN("")` is `false`, so an empty field is treated as 0 (Answer = -5, no error). Reproduces on the Prototype (build 0) too. |
