# Test Run - Basic Calculator (Build 2)

- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html
- **Build Under Test**: 2
- **Execution Date**: 2026-09-28
- **Tester**: Automation (Playwright)
- **Environment**: Google Chrome (Playwright, channel "chrome") / Windows
- **Automation**: `tests/e2e/specs/*.spec.ts`, run with `npx cross-env BUILDS=2 playwright test`
- **Oracle**: expected results from `tests/test-cases`. A Fail means the build does not match the spec.

## Test Run Results

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|:---|:---:|:---:|:---:|:---:|:---|
| TC-ADD-001 | Addition | Automation (Playwright) | Fail | BUG-CALC-002 | Expected: "40", Received: "1525" |
| TC-ADD-002 | Addition | Automation (Playwright) | Fail | BUG-CALC-002 | Expected: "20", Received: "12.357.65" |
| TC-ADD-003 | Addition | Automation (Playwright) | Fail | BUG-CALC-002 | Expected: "-20", Received: "-3010" |
| TC-ADD-004 | Addition | Automation (Playwright) | Fail | BUG-CALC-002 | Expected: "50", Received: "050" |
| TC-ADD-005 | Addition | Automation (Playwright) | Fail | BUG-CALC-002 | Expected: "15", Received: "10" |
| TC-ADD-006 | Addition | Automation (Playwright) | Fail | BUG-CALC-002 | Expected: "10000000000", Received: "99999999991" |
| TC-BUILD-001 | Build | Automation (Playwright) | Fail | BUG-CALC-002 | Add: 10 and 2: Expected: "12", Received: "102"<br>Concatenate: 10 and 2: Expected: "102", Received: "12" |
| TC-BUILD-003 | Build | Automation (Playwright) | Fail | BUG-CALC-002 | Expected: "30", Received: "1020" |
| TC-CONCAT-001 | Concatenate | Automation (Playwright) | Fail | BUG-CALC-002 | Expected: "123456", Received: "579" |
| TC-CONCAT-002 | Concatenate | Automation (Playwright) | Fail | BUG-CALC-002 | Expected: "Hello_World!", Received: "" |
| TC-CONCAT-003 | Concatenate | Automation (Playwright) | Pass |  |  |
| TC-DIV-001 | Division | Automation (Playwright) | Pass |  |  |
| TC-DIV-002 | Division | Automation (Playwright) | Pass |  |  |
| TC-DIV-003 | Division | Automation (Playwright) | Pass |  |  |
| TC-DIV-004 | Division | Automation (Playwright) | Pass |  |  |
| TC-DIV-005 | Division | Automation (Playwright) | Pass |  |  |
| TC-MUL-001 | Multiplication | Automation (Playwright) | Pass |  |  |
| TC-MUL-002 | Multiplication | Automation (Playwright) | Pass |  |  |
| TC-MUL-003 | Multiplication | Automation (Playwright) | Pass |  |  |
| TC-MUL-004 | Multiplication | Automation (Playwright) | Pass |  |  |
| TC-RESET-001 | Reset | Automation (Playwright) | Fail | BUG-CALC-002 | Expected: "10", Received: "8" |
| TC-RESET-002 | Reset | Automation (Playwright) | Fail | BUG-CALC-010 | Clear button should be enabled: Expected: enabled, Received: disabled |
| TC-RESET-003 | Reset | Automation (Playwright) | Fail | BUG-CALC-002 | Expected: "100", Received: "5050" |
| TC-SUB-001 | Subtraction | Automation (Playwright) | Pass |  |  |
| TC-SUB-002 | Subtraction | Automation (Playwright) | Pass |  |  |
| TC-SUB-003 | Subtraction | Automation (Playwright) | Pass |  |  |
| TC-SUB-004 | Subtraction | Automation (Playwright) | Pass |  |  |
| TC-VAL-001 | Validation | Automation (Playwright) | Fail | BUG-CALC-002 | Expected: "Number 1 is not a number", Received: "" |
| TC-VAL-002 | Validation | Automation (Playwright) | Pass |  |  |
| TC-VAL-003 | Validation | Automation (Playwright) | Fail | BUG-CALC-011 | Expected: "Number 1 is not a number", Received: "" |
| TC-VAL-004 | Validation | Automation (Playwright) | Pass |  |  |

> Rule: when Result = Fail or Blocked, the row must have a Related Bug or a clear reason in Note.

## Test Run Status

| Pass | Fail | Blocked | Not Run | Total | Pass Rate (executed) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 16 | 15 | 0 | 0 | 31 | 51.6% |

## Related Bugs

| Bug ID | Title | Test Cases | Root Cause |
|:---|:---|:---|:---|
| BUG-CALC-002 | Add and Concatenate are swapped | TC-ADD-001, TC-ADD-002, TC-ADD-003, TC-ADD-004, TC-ADD-005, TC-ADD-006, TC-BUILD-001, TC-BUILD-003, TC-CONCAT-001, TC-CONCAT-002, TC-RESET-001, TC-RESET-003, TC-VAL-001 | `selectedBuild == 2` maps operation 0 -> 4 and 4 -> 0: Add concatenates strings ("15"+"25" -> "1525") and skips number validation; Concatenate runs number validation + arithmetic addition. |
| BUG-CALC-010 | Calculate/Clear stay disabled after "Divide by zero error!" | TC-RESET-002 | The divide-by-zero branch `return`s without calling `unlockCalculate()`. Reproduces on the Prototype (build 0) too. |
| BUG-CALC-011 | Empty First number accepted as 0 | TC-VAL-003 | `isNaN("")` is `false`, so an empty field is treated as 0 (Answer = -5, no error). Reproduces on the Prototype (build 0) too. |
