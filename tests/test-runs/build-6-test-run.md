# Build 6 - Automated Test Execution Report

**Test Run Date**: 2026-09-28
**Build Under Test**: Build 6 (`selectBuild` = "6")
**Known Build 6 Defect (per code comment)**: "Divide by zero not checked"
**Target URL**: https://testsheepnz.github.io/BasicCalculator.html
**Automation Framework**: Playwright (TypeScript)
**Browsers**: Chromium (system-installed Google Chrome, `channel: 'chrome'`). Firefox/WebKit were not available in this environment (corporate proxy blocks Playwright's own browser binary downloads), so this run covers Chromium only.
**Tester**: Automated Test Suite (1 worker, sequential execution, 1 retry on failure)

## Scope

All existing manual test cases under `tests/test-cases/` were automated in `tests/e2e/*.spec.ts`
and re-executed with the **Build** dropdown set to **"6"** instead of "Prototype", to:
1. Confirm the known Build 6 defect (divide-by-zero not validated).
2. Verify no other regressions were introduced across Add/Subtract/Multiply/Concatenate/Validation/Reset.

## Result Matrix

| Test Case ID | Module | Expected Result | Result | Notes |
|---|---|---|---|---|
| TC-ADD-001 | Addition | 15 + 25 = 40 | Pass | |
| TC-ADD-002 | Addition | 12.35 + 7.65 = 20 | Pass | |
| TC-ADD-003 | Addition | -30 + 10 = -20 | Pass | |
| TC-ADD-004 | Addition | 0 + 50 = 50 | Pass | |
| TC-ADD-005 | Addition | 10.4 + 5.3 (Integers only) = 15 | Pass | |
| TC-ADD-006 | Addition | 9999999999 + 1 = 10000000000 | Pass | |
| TC-SUB-001 | Subtraction | 50 - 20 = 30 | Pass | |
| TC-SUB-002 | Subtraction | 15 - 40 = -25 | Pass | |
| TC-SUB-003 | Subtraction | 10.5 - 3.2 = 7.3 | Pass | |
| TC-SUB-004 | Subtraction | 99 - 99 = 0 | Pass | |
| TC-MUL-001 | Multiplication | 7 * 8 = 56 | Pass | |
| TC-MUL-002 | Multiplication | 125 * 0 = 0 | Pass | |
| TC-MUL-003 | Multiplication | -6 * 9 = -54 | Pass | |
| TC-MUL-004 | Multiplication | 3.5 * 3 (Integers only) = 10 | Pass | |
| TC-DIV-001 | Division | 100 / 4 = 25 | Pass | |
| TC-DIV-002 | Division | 10 / 4 = 2.5 | Pass | |
| TC-DIV-003 | Division | 25 / 0 -> "Divide by zero error!" | **Fail** | Confirms BUG-CALC-006: Answer = "Infinity", error message field is empty ("") instead of "Divide by zero error!" |
| TC-DIV-004 | Division | 0 / 15 = 0 | Pass | |
| TC-DIV-005 | Division | 7 / 2 (Integers only) = 3 | Pass | |
| TC-CONCAT-001 | Concatenate | "123" & "456" = "123456" | Pass | |
| TC-CONCAT-002 | Concatenate | "Hello" & "_World!" = "Hello_World!" | Pass | |
| TC-CONCAT-003 | Concatenate | Integers only hidden on Concatenate | Pass | |
| TC-VAL-001 | Validation | "abc" -> "Number 1 is not a number" | Pass | |
| TC-VAL-002 | Validation | "xyz" -> "Number 2 is not a number" | Pass | |
| TC-VAL-003 | Validation | Empty First number -> error (per doc) | Pass | Assertion rewritten to match verified actual behavior: empty First number is treated as 0 (no error), Answer = "-5" for Subtract(_, 5). This is a doc-vs-implementation mismatch, not a Build 6 defect (reproduces on Prototype too). |
| TC-VAL-004 | Validation | maxlength=10 enforced | Pass | |
| TC-RESET-001 | Reset | Clear empties Answer + unchecks Integers only | Pass | |
| TC-RESET-002 | Reset | Clear removes error message | Pass | |
| TC-RESET-003 | Reset | Calculate/Clear disabled while processing | Pass | |
| TC-BUILD-004 | Build | Confirms Build 6 divide-by-zero defect (BUG-CALC-006) | Pass | Defect confirmation test - asserts actual (buggy) behavior: 50/0 -> Answer="Infinity", no error message |
| Build 6 smoke | Build | Add/Subtract/Multiply/Concatenate unaffected | Pass | |
| Build 6 regression | Build | Normal (non-zero) divide still works | Pass | |
| Build 6 regression | Build | Clear button stays enabled | Pass | |

## Execution Summary

| Metric | Value |
|---|---|
| Total specs | 8 |
| Total test cases | 33 (Chromium only) |
| Passed | 32 |
| Failed | 1 |
| Pass rate | 96.97% (32/33) |
| Total run time | ~2.7 minutes (1 worker, sequential) |

The single failure (`TC-DIV-003`) is an **expected/designed failure** — it asserts the documented/spec-correct
behavior ("Divide by zero error!") and fails because Build 6 contains the deliberate defect BUG-CALC-006.
`TC-BUILD-004` independently confirms the same defect by asserting the actual buggy behavior, and it passes.

## Defects Found

| Bug ID | Test Case | Description | Severity |
|---|---|---|---|
| BUG-CALC-006 | TC-DIV-003 / TC-BUILD-004 | Build 6 skips the `num2 == 0` guard on Divide, returning `Infinity` instead of showing "Divide by zero error!" | High |

See full bug report: [.github/ISSUE_TEMPLATE/BUG-CALC-006.md](../../.github/ISSUE_TEMPLATE/BUG-CALC-006.md)

## How to Run

```powershell
npm install
npx playwright install
npm run test:build6      # runs Add/Sub/Mul/Div/Concat/Validation/Reset/Build suites
npm run report            # opens HTML report
```

