* commit 287380092c6c66685c6313fb060a60093b05e906
| Author: LCHLong <lechihoanglong7@gmail.com>
| Date:   Mon Sep 28 20:19:02 2026 +0700
| 
|     docs: reorganize student audit reports, critiques, and commit logs into the reports directory
| 
|  {23120268 => reports}/ai-audit-report-23120268.md |    0
|  reports/ai-audit-report-23120294.md               | 1623 +++++++++++++++++++
|  .../ai-critique-23120268.md                       |    0
|  reports/ai-critique-23120294.md                   |    4 +
|  {23120268 => reports}/git-commit-log-23120268.md  |    0
|  reports/git-commit-log-2312094.md                 |  359 ++++
|  6 files changed, 1986 insertions(+)
| 
* commit 03d1693a317396d3eeda88aa6fa29db9362c6855
| Author: hungvu09122005 <144297096+hungvu09122005@users.noreply.github.com>
| Date:   Mon Sep 28 17:57:44 2026 +0700
| 
|     Update issue templates
|     
|     Update issue templates
| 
|  .../ISSUE_TEMPLATE/BUG-B1-001-validation-skip.md  | 103 --------------------
|  .../BUG-B1-002-clear-button-disabled.md           |   6 +-
|  .github/ISSUE_TEMPLATE/BUG-CALC-006.md            |  33 -------
|  3 files changed, 4 insertions(+), 138 deletions(-)
| 
* commit cd06684785e4fbcd070305bbbb381380d3e443cb
| Author: hungvu09122005 <vuhung09122005@gmail.com>
| Date:   Mon Sep 28 17:45:45 2026 +0700
| 
|     docs: add AI audit report and git commit log, and update README
| 
|  23120268/ai-audit-report-23120268.md | 847 +++++++++++++++++++++++++++++++++
|  23120268/ai-critique-23120268.md     |   3 +
|  23120268/git-commit-log-23120268.md  | 332 +++++++++++++
|  3 files changed, 1182 insertions(+)
| 
* commit 32a884079c796e31a993fba3c4450d49fad11128
| Author: LCHLong <lechihoanglong7@gmail.com>
| Date:   Mon Sep 28 17:02:05 2026 +0700
| 
|     docs: update test run reports and add bug report summary
| 
|  reports/BUG-REPORT-SUMMARY.md                     | 441 ++++++++++++++++++++
|  ...-automated-test-run.md => build-1-test-run.md} |   0
|  ...-automated-test-run.md => build-2-test-run.md} |   0
|  ...-automated-test-run.md => build-4-test-run.md} |   0
|  tests/test-runs/sprint-1-test-run.md              |  51 ---
|  tests/test-runs/sprint-2-regression.md            |  29 --
|  6 files changed, 441 insertions(+), 80 deletions(-)
|   
*   commit 3cd750e6c44475bed3fc5b083c68aa6f43688198
|\  Merge: 3977a91 d38b6e9
| | Author: nhUit296 <chanelhynvuigames@gmail.com>
| | Date:   Mon Sep 28 16:13:42 2026 +0700
| | 
| |     Merge pull request #12 from hungvu09122005/feat/playwright-automation-build-6
| |     
| |     Feat/playwright automation build 6
| |   
| *   commit d38b6e9a423233120105010212175382a28e1942
| |\  Merge: 9169193 3977a91
| |/  Author: nhUit296 <chanelhynvuigames@gmail.com>
|/|   Date:   Mon Sep 28 16:13:25 2026 +0700
| |   
| |       Merge branch 'main' into feat/playwright-automation-build-6
| |   
* |   commit 3977a913229b8553e19efc4e40cac29dabdbb342
|\ \  Merge: 8b0e4b7 7e992f5
| | | Author: hungvu09122005 <144297096+hungvu09122005@users.noreply.github.com>
| | | Date:   Mon Sep 28 16:08:09 2026 +0700
| | | 
| | |     Merge pull request #11 from hungvu09122005/feat/build_5_8
| | |     
| | |     test: add Playwright test suite, helper utilities, and test case docu…
| | |   
| * |   commit 7e992f5cae64a7ef542e7ab1db4be0d1f0448a31
| |\ \  Merge: 7800001 8b0e4b7
| |/ /  Author: hungvu09122005 <144297096+hungvu09122005@users.noreply.github.com>
|/| |   Date:   Mon Sep 28 16:07:58 2026 +0700
| | |   
| | |       Merge branch 'main' into feat/build_5_8
| | |   
* | |   commit 8b0e4b72b71cce17dcd4a88703bc225661dd8024
|\ \ \  Merge: 5c199a9 cea67bc
| | | | Author: Dragon <147335529+LCHLong@users.noreply.github.com>
| | | | Date:   Mon Sep 28 16:05:46 2026 +0700
| | | | 
| | | |     Merge pull request #10 from hungvu09122005/feat/playwright-automation-build-2-4
| | | |     
| | | |     test: add Playwright automation and test runs for builds 2 and 4
| | | |   
| * | |   commit cea67bcfe2734945f90ddd831b86047d3010792f
| |\ \ \  Merge: 4a45d4b 5c199a9
| |/ / /  Author: Dragon <147335529+LCHLong@users.noreply.github.com>
|/| | |   Date:   Mon Sep 28 16:05:37 2026 +0700
| | | |   
| | | |       Merge branch 'main' into feat/playwright-automation-build-2-4
| | | | 
| * | | commit 4a45d4b85e62dc910ec7f051f937b1d3106f7a27
| | | | Author: hcmus-phat <23120317@student.hcmus.edu.vn>
| | | | Date:   Mon Sep 28 15:37:15 2026 +0700
| | | | 
| | | |     test: add Playwright automation and test runs for builds 2 and 4
| | | |     
| | | |     - Data-driven Playwright specs (Chrome) covering the ADD, SUB, MUL, DIV,
| | | |       CONCAT, VAL, RESET and BUILD test cases, parameterised by BUILDS env
| | | |     - CalculatorPage page object
| | | |     - scripts/generate-test-run.js builds per-build test run reports in the
| | | |       team template format (Test Case ID, Module, Tester, Result, Related Bug, Note)
| | | |     - Test run results for build 2 (16 pass / 15 fail) and build 4
| | | |       (25 pass / 5 fail / 1 not run); defects filed as #2, #3, #4, #5
| | | |     
| | | |     Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
| | | | 
| | | |  .gitignore                                    |   3 +
| | | |  package-lock.json                             | 157 ++++++++++++++++++
| | | |  package.json                                  |  17 ++
| | | |  playwright.config.ts                          |  22 +++
| | | |  scripts/generate-test-run.js                  | 116 +++++++++++++
| | | |  tests/e2e/builds.ts                           |   2 +
| | | |  tests/e2e/pages/CalculatorPage.ts             |  80 +++++++++
| | | |  tests/e2e/specs/arithmetic.spec.ts            |  63 +++++++
| | | |  tests/e2e/specs/build.spec.ts                 |  28 ++++
| | | |  tests/e2e/specs/reset.spec.ts                 |  53 ++++++
| | | |  tests/e2e/specs/validation.spec.ts            |  43 +++++
| | | |  tests/test-runs/build-2-automated-test-run.md |  61 +++++++
| | | |  tests/test-runs/build-4-automated-test-run.md |  61 +++++++
| | | |  13 files changed, 706 insertions(+)
| | | | 
| | * | commit 7800001c9d8b8ca93fe65e518520f71914d4e44f
| | | | Author: hungvu09122005 <vuhung09122005@gmail.com>
| | | | Date:   Mon Sep 28 16:04:52 2026 +0700
| | | | 
| | | |     test: add Playwright test suite, helper utilities, and test case documentation for calculator application
| | | | 
| | | |  .gitignore                             |   4 +
| | | |  README.md                              |  52 ++++-
| | | |  package-lock.json                      |  58 ++++++
| | | |  package.json                           |  32 ++++
| | | |  playwright.config.js                   |  32 ++++
| | | |  tests/scripts/TC-ADD.spec.js           |  81 ++++++++
| | | |  tests/scripts/TC-CONCAT.spec.js        |  34 ++++
| | | |  tests/scripts/TC-DIV.spec.js           |  47 +++++
| | | |  tests/scripts/TC-MUL.spec.js           |  57 ++++++
| | | |  tests/scripts/TC-RESET.spec.js         |  49 +++++
| | | |  tests/scripts/TC-SUB.spec.js           |  57 ++++++
| | | |  tests/scripts/TC-VAL.spec.js           |  39 ++++
| | | |  tests/scripts/build-5.spec.js          | 247 ++++++++++++++++++++++++
| | | |  tests/scripts/build-8.spec.js          | 251 +++++++++++++++++++++++++
| | | |  tests/scripts/helpers/calculator.js    | 112 +++++++++++
| | | |  tests/test-cases/build/TC-BUILD-005.md |  31 +++
| | | |  tests/test-cases/build/TC-BUILD-008.md |  45 +++++
| | | |  tests/test-runs/build-5-test-run.md    |  60 ++++++
| | | |  tests/test-runs/build-8-test-run.md    |  57 ++++++
| | | |  tests/test-runs/sprint-1-test-run.md   |   1 +
| | | |  20 files changed, 1345 insertions(+), 1 deletion(-)
| | | |   
| | | *   commit 916919366c290a4eb93d0466f63ca70a65e21f1e
| | | |\  Merge: 18fd39f 5c199a9
| |_|_|/  Author: nhUit296 <n.thach2965@gmail.com>
|/| | |   Date:   Mon Sep 28 16:08:41 2026 +0700
| | | |   
| | | |       Merge branch 'main' into feat/playwright-automation-build-6
| | | |       
| | | |       # Conflicts:
| | | |       #       .gitignore
| | | |       #       package-lock.json
| | | |       #       package.json
| | | |   
* | | |   commit 5c199a9a81f4bb9784d45be9e62ca15dd2870c4f
|\ \ \ \  Merge: ed5dfd7 d9f0d4d
| | | | | Author: Dragon <147335529+LCHLong@users.noreply.github.com>
| | | | | Date:   Mon Sep 28 16:02:26 2026 +0700
| | | | | 
| | | | |     Merge pull request #9 from hungvu09122005/feat/playwright-build-3-7-tests
| | | | |     
| | | | |     feat(automation): add Playwright test suites and test run reports for Build 3 and Build 7
| | | | |   
| * | | |   commit d9f0d4d2f52d6231d6f2fff528b77b970967ae32
| |\ \ \ \  Merge: 80f0e0d ed5dfd7
| |/ / / /  Author: Dragon <147335529+LCHLong@users.noreply.github.com>
|/| | | |   Date:   Mon Sep 28 16:02:12 2026 +0700
| | | | |   
| | | | |       Merge branch 'main' into feat/playwright-build-3-7-tests
| | | | |   
* | | | |   commit ed5dfd71eefd7ff05a4392dd2d065f0213a0799d
|\ \ \ \ \  Merge: bad3cae 83a1460
| |_|_|/ /  Author: nhatlank23 <lann99194@gmail.com>
|/| | | |   Date:   Mon Sep 28 15:54:42 2026 +0700
| | | | |   
| | | | |       Merge pull request #8 from hungvu09122005/feat/built_1_NL
| | | | |       
| | | | |       feat(build1): add Playwright automation test suite and test run report
| | | | | 
| | * | | commit 80f0e0d60e1cf863eeac92936bb9f06b1b9f66e0
| |/ / /  Author: LCHLong <lechihoanglong7@gmail.com>
|/| | |   Date:   Mon Sep 28 15:57:17 2026 +0700
| | | |   
| | | |       feat(automation): add Playwright test suites and test run reports for Build 3 and Build 7
| | | |   
| | | |    .gitignore                          |   4 +
| | | |    README.md                           |  29 +++
| | | |    package-lock.json                   |  61 +++++
| | | |    package.json                        |  32 +++
| | | |    playwright.config.js                |  30 +++
| | | |    src/pages/CalculatorPage.js         | 110 ++++++++
| | | |    src/suites/calculatorTestSuite.js   | 352 ++++++++++++++++++++++++++
| | | |    tests/e2e/build-0-prototype.spec.js |   8 +
| | | |    tests/e2e/build-3.spec.js           |  11 +
| | | |    tests/e2e/build-7.spec.js           |  11 +
| | | |    tests/test-runs/build-3-test-run.md |  78 ++++++
| | | |    tests/test-runs/build-7-test-run.md |  78 ++++++
| | | |    12 files changed, 804 insertions(+)
| | | | 
| | | * commit 18fd39fe8afb5b190cf57e7d1cd720f4cf04bb12
| | | | Author: nhUit296 <n.thach2965@gmail.com>
| | | | Date:   Mon Sep 28 16:04:44 2026 +0700
| | | | 
| | | |     refactor: move BUG-CALC-006 report to .github/ISSUE_TEMPLATE, align with new bug report format
| | | | 
| | | |  .github/ISSUE_TEMPLATE/BUG-CALC-006.md | 33 ++++++++++++++++
| | | |  tests/bug-reports/BUG-CALC-006.md      | 52 --------------------------
| | | |  tests/test-runs/build-6-test-run.md    |  2 +-
| | | |  3 files changed, 34 insertions(+), 53 deletions(-)
| | | | 
| | | * commit 43d25cf71d6e249d9c9bdf5748acc96cffb0b0d5
| | | | Author: nhUit296 <n.thach2965@gmail.com>
| | | | Date:   Mon Sep 28 15:57:46 2026 +0700
| | | | 
| | | |     feat: Playwright automation for Build 6 (add/subtract/multiply/divide/concatenate/validation/reset/build), test run report and bug report for BUG-CALC-006
| | | | 
| | | |  .gitignore                          | 12 ++++
| | | |  package-lock.json                   | 61 ++++++++++++++++++++
| | | |  package.json                        | 22 ++++++++
| | | |  playwright.config.ts                | 29 ++++++++++
| | | |  tests/bug-reports/BUG-CALC-006.md   | 52 +++++++++++++++++
| | | |  tests/e2e/add.spec.ts               | 51 +++++++++++++++++
| | | |  tests/e2e/build.spec.ts             | 50 +++++++++++++++++
| | | |  tests/e2e/concatenate.spec.ts       | 34 +++++++++++
| | | |  tests/e2e/divide.spec.ts            | 47 ++++++++++++++++
| | | |  tests/e2e/multiply.spec.ts          | 40 +++++++++++++
| | | |  tests/e2e/reset.spec.ts             | 62 ++++++++++++++++++++
| | | |  tests/e2e/subtract.spec.ts          | 36 ++++++++++++
| | | |  tests/e2e/validation.spec.ts        | 44 +++++++++++++++
| | | |  tests/helpers/calculator.helper.ts  | 79 ++++++++++++++++++++++++++
| | | |  tests/test-runs/build-6-test-run.md | 87 +++++++++++++++++++++++++++++
| | | |  15 files changed, 706 insertions(+)
| | | | 
| | | * commit bb480e87b0b805df72c899a1d3936646eea6bb7d
| | |/  Author: hungvu09122005 <144297096+hungvu09122005@users.noreply.github.com>
| | |   Date:   Mon Sep 28 15:01:52 2026 +0700
| | |   
| | |       Update issue templates
| | |   
| | |    .github/ISSUE_TEMPLATE/bug_report.md | 55 ++++++++--------------------
| | |    1 file changed, 16 insertions(+), 39 deletions(-)
| | |   
| | | * commit a38dde5c7544c4d4e2ec41c64744a98607c9c436
| | |/  Author: 23120289 <lann99194@gmail.com>
| |/|   Date:   Mon Sep 28 15:33:12 2026 +0700
| | |   
| | |        add prompt history for built 1
| | |   
| | |    prompt-tracking-log.md | 140 +++++++++++++++++++++++++++++++++++++++++
| | |    1 file changed, 140 insertions(+)
| | | 
| * | commit 83a146063d24cb42651701e02b856f0e01f8695e
|/ /  Author: 23120289 <lann99194@gmail.com>
| |   Date:   Mon Sep 28 15:23:41 2026 +0700
| |   
| |       feat(build1): add Playwright automation test suite and test run report
| |       
| |       - Add playwright.config.js: Playwright config targeting Basic Calculator (Chromium)
| |       - Add package.json + package-lock.json: npm project with @playwright/test v1.63
| |       - Add .gitignore: exclude node_modules, test-results, playwright cache
| |       - Add tests/playwright/helpers/calculator.js: shared helper with verified DOM selectors
| |         (#selectBuild, #number1Field, #number2Field, #selectOperationDropdown,
| |          #calculateButton, #clearButton, #numberAnswerField, #integerSelect, #errorMsgField)
| |       - Add tests/playwright/build1/build1.spec.js: 30 automated test cases for Build 1
| |         covering modules: ADD (6), SUB (4), MUL (4), DIV (5), CONCAT (3), VAL (4), RESET (3), BUILD (1)
| |       
| |       Test Run Results (Build 1):
| |         - 26 PASSED / 4 FAILED
| |         - All arithmetic and concatenate operations: PASS
| |         - 4 FAIL = known bugs confirmed by automation
| |       
| |       - Add tests/test-runs/build1-automated-test-run.md: detailed test run report
| |       - Add .github/ISSUE_TEMPLATE/BUG-B1-001-validation-skip.md: bug report
| |           BUG-B1-001 [Critical]: Build 1 skips input validation, returns NaN
| |           Affects: TC-VAL-001, TC-VAL-002, TC-VAL-003, TC-BUILD-002
| |       - Add .github/ISSUE_TEMPLATE/BUG-B1-002-clear-button-disabled.md: bug report
| |           BUG-B1-002 [Major]: Clear button stays disabled after divide-by-zero error
| |           Affects: TC-RESET-002
| |       
| |       Refs: TC-BUILD-002, FR-CALC-07, FR-CALC-08
| |   
| |    .../BUG-B1-001-validation-skip.md               | 103 +++++
| |    .../BUG-B1-002-clear-button-disabled.md         |  84 ++++
| |    .gitignore                                      |  15 +
| |    package-lock.json                               |  61 +++
| |    package.json                                    |  30 ++
| |    playwright.config.js                            |  34 ++
| |    tests/playwright/build1/build1.spec.js          | 413 ++++++++++++++++++
| |    tests/playwright/helpers/calculator.js          | 149 +++++++
| |    tests/test-runs/build1-automated-test-run.md    | 147 +++++++
| |    9 files changed, 1036 insertions(+)
| | 
* | commit bad3caeb860e1fc4aafb763ffdaa539fcec4fd4d
|\| Merge: dbd1824 2d16bdc
| | Author: LCHLong <lechihoanglong7@gmail.com>
| | Date:   Mon Sep 28 14:35:30 2026 +0700
| | 
| |     Merge branch 'feat/basic-calculator-testcases' into main
| | 
| * commit 2d16bdc9884db4d8c1ceeaea975f00f41e1f5c23
|   Author: LCHLong <lechihoanglong7@gmail.com>
|   Date:   Mon Sep 28 14:25:36 2026 +0700
|   
|       feat: add test cases and test documentation for Basic Calculator
|   
|    .github/ISSUE_TEMPLATE/bug_report.md          | 46 +++++++++++++++
|    README.md                                     | 71 +++++++++++++++++++++++
|    tests/test-cases/add/TC-ADD-001.md            | 31 ++++++++++
|    tests/test-cases/add/TC-ADD-002.md            | 31 ++++++++++
|    tests/test-cases/add/TC-ADD-003.md            | 31 ++++++++++
|    tests/test-cases/add/TC-ADD-004.md            | 31 ++++++++++
|    tests/test-cases/add/TC-ADD-005.md            | 33 +++++++++++
|    tests/test-cases/add/TC-ADD-006.md            | 31 ++++++++++
|    tests/test-cases/build/TC-BUILD-001.md        | 32 ++++++++++
|    tests/test-cases/build/TC-BUILD-002.md        | 29 +++++++++
|    tests/test-cases/build/TC-BUILD-003.md        | 30 ++++++++++
|    tests/test-cases/build/TC-BUILD-004.md        | 30 ++++++++++
|    tests/test-cases/concatenate/TC-CONCAT-001.md | 32 ++++++++++
|    tests/test-cases/concatenate/TC-CONCAT-002.md | 32 ++++++++++
|    tests/test-cases/concatenate/TC-CONCAT-003.md | 26 +++++++++
|    tests/test-cases/divide/TC-DIV-001.md         | 31 ++++++++++
|    tests/test-cases/divide/TC-DIV-002.md         | 31 ++++++++++
|    tests/test-cases/divide/TC-DIV-003.md         | 31 ++++++++++
|    tests/test-cases/divide/TC-DIV-004.md         | 31 ++++++++++
|    tests/test-cases/divide/TC-DIV-005.md         | 33 +++++++++++
|    tests/test-cases/multiply/TC-MUL-001.md       | 31 ++++++++++
|    tests/test-cases/multiply/TC-MUL-002.md       | 31 ++++++++++
|    tests/test-cases/multiply/TC-MUL-003.md       | 31 ++++++++++
|    tests/test-cases/multiply/TC-MUL-004.md       | 33 +++++++++++
|    tests/test-cases/reset/TC-RESET-001.md        | 27 +++++++++
|    tests/test-cases/reset/TC-RESET-002.md        | 26 +++++++++
|    tests/test-cases/reset/TC-RESET-003.md        | 31 ++++++++++
|    tests/test-cases/subtract/TC-SUB-001.md       | 31 ++++++++++
|    tests/test-cases/subtract/TC-SUB-002.md       | 31 ++++++++++
|    tests/test-cases/subtract/TC-SUB-003.md       | 31 ++++++++++
|    tests/test-cases/subtract/TC-SUB-004.md       | 31 ++++++++++
|    tests/test-cases/validation/TC-VAL-001.md     | 31 ++++++++++
|    tests/test-cases/validation/TC-VAL-002.md     | 31 ++++++++++
|    tests/test-cases/validation/TC-VAL-003.md     | 31 ++++++++++
|    tests/test-cases/validation/TC-VAL-004.md     | 26 +++++++++
|    tests/test-runs/sprint-1-test-run.md          | 50 ++++++++++++++++
|    tests/test-runs/sprint-2-regression.md        | 29 +++++++++
|    tests/test-summary/traceability-matrix.md     | 13 +++++
|    38 files changed, 1218 insertions(+)
| 
* commit dbd182424effec96e1762b4eedd0e26ec185054a
  Author: hungvu09122005 <vuhung09122005@gmail.com>
  Date:   Mon Sep 28 14:30:20 2026 +0700
  
      init
  
   tests/test-summary/traceability-matrix.md | 0
   1 file changed, 0 insertions(+), 0 deletions(-)
