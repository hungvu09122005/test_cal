// Builds one markdown test-run report per build from Playwright's JSON results.
// Usage: node scripts/generate-test-run.js [results.json] [outDir]
const fs = require('fs');
const path = require('path');

const resultsFile = process.argv[2] || 'test-results/results.json';
const outDir = process.argv[3] || 'tests/test-runs';
const results = JSON.parse(fs.readFileSync(resultsFile, 'utf8'));

const TESTER = 'Automation (Playwright)';
const MODULES = {
  ADD: 'Addition', SUB: 'Subtraction', MUL: 'Multiplication', DIV: 'Division',
  CONCAT: 'Concatenate', VAL: 'Validation', RESET: 'Reset', BUILD: 'Build',
};
const RESULT = { expected: 'Pass', unexpected: 'Fail', flaky: 'Fail', skipped: 'Not Run', interrupted: 'Blocked', timedOut: 'Blocked' };

// Known defects. `builds` lists the builds where the bug applies; `cases` the test cases it makes fail.
const BUGS = [
  {
    id: 'BUG-CALC-002', builds: ['2'], title: 'Add and Concatenate are swapped',
    cases: ['TC-ADD-001', 'TC-ADD-002', 'TC-ADD-003', 'TC-ADD-004', 'TC-ADD-005', 'TC-ADD-006', 'TC-CONCAT-001', 'TC-CONCAT-002',
      'TC-BUILD-001', 'TC-BUILD-003', 'TC-RESET-001', 'TC-RESET-003', 'TC-VAL-001'],
    cause: '`selectedBuild == 2` maps operation 0 -> 4 and 4 -> 0: Add concatenates strings ("15"+"25" -> "1525") and skips number validation; Concatenate runs number validation + arithmetic addition.',
  },
  {
    id: 'BUG-CALC-004', builds: ['4'], title: '"Integers only" locked on for numeric operations',
    cases: ['TC-SUB-003', 'TC-DIV-002', 'TC-CONCAT-003'],
    cause: '`setFieldStatus()` for `selectedBuild == 4` forces `integerSelect.checked = true` and `disabled = true`; decimal results are truncated and the user cannot toggle the checkbox.',
  },
  {
    id: 'BUG-CALC-010', builds: ['*'], title: 'Calculate/Clear stay disabled after "Divide by zero error!"',
    cases: ['TC-RESET-002'],
    cause: 'The divide-by-zero branch `return`s without calling `unlockCalculate()`. Reproduces on the Prototype (build 0) too.',
  },
  {
    id: 'BUG-CALC-011', builds: ['*'], title: 'Empty First number accepted as 0',
    cases: ['TC-VAL-003'],
    cause: '`isNaN("")` is `false`, so an empty field is treated as 0 (Answer = -5, no error). Reproduces on the Prototype (build 0) too.',
  },
];
const bugsFor = (build) => BUGS.filter((b) => b.builds.includes('*') || b.builds.includes(build));

const stripAnsi = (s) => s.replace(/\x1b\[[0-9;]*m/g, '');
const shortError = (msg) => {
  const lines = stripAnsi(msg || '').split('\n').map((l) => l.trim());
  const exp = lines.find((l) => l.startsWith('Expected'));
  const rec = lines.find((l) => l.startsWith('Received'));
  const custom = lines[0].startsWith('Error: ') && !lines[0].includes('expect(') ? lines[0].slice(7) + ': ' : '';
  return exp && rec ? `${custom}${exp}, ${rec}` : lines[0];
};

const rows = [];
const walk = (suite) => {
  (suite.suites || []).forEach(walk);
  for (const spec of suite.specs || []) {
    const m = spec.title.match(/^(TC-([A-Z]+)-\d+): (.*) \[build (\w+)\]$/);
    if (!m) continue;
    for (const t of spec.tests) {
      const res = t.results[t.results.length - 1] || { errors: [] };
      const result = RESULT[t.status] || 'Blocked';
      const build = m[4];
      const bugs = result === 'Pass' ? [] : bugsFor(build).filter((b) => b.cases.includes(m[1])).map((b) => b.id);
      let note = '';
      if (result === 'Not Run') note = t.annotations.find((a) => a.type === 'skip')?.description || 'Not in scope';
      else if (result !== 'Pass') {
        note = res.errors.map((e) => shortError(e.message)).join('<br>');
        if (!bugs.length) note = `Unmapped failure - triage needed. ${note}`;
      }
      rows.push({ id: m[1], module: MODULES[m[2]] || m[2], title: m[3], build, result, bugs: bugs.join(', '), note });
    }
  }
};
results.suites.forEach(walk);

const date = new Date(results.stats.startTime).toISOString().slice(0, 10);
const esc = (s) => s.replace(/\|/g, '\\|');
for (const build of [...new Set(rows.map((r) => r.build))]) {
  const list = rows.filter((r) => r.build === build).sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }));
  const count = (s) => list.filter((r) => r.result === s).length;
  const executed = count('Pass') + count('Fail');
  const bugs = bugsFor(build).filter((b) => list.some((r) => r.bugs.includes(b.id)));

  const md = `# Test Run - Basic Calculator (Build ${build})

- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html
- **Build Under Test**: ${build}
- **Execution Date**: ${date}
- **Tester**: ${TESTER}
- **Environment**: Google Chrome (Playwright, channel "chrome") / Windows
- **Automation**: \`tests/e2e/specs/*.spec.ts\`, run with \`npx cross-env BUILDS=${build} playwright test\`
- **Oracle**: expected results from \`tests/test-cases\`. A Fail means the build does not match the spec.

## Test Run Results

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|:---|:---:|:---:|:---:|:---:|:---|
${list.map((r) => `| ${r.id} | ${r.module} | ${TESTER} | ${r.result} | ${r.bugs} | ${esc(r.note)} |`).join('\n')}

> Rule: when Result = Fail or Blocked, the row must have a Related Bug or a clear reason in Note.

## Test Run Status

| Pass | Fail | Blocked | Not Run | Total | Pass Rate (executed) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| ${count('Pass')} | ${count('Fail')} | ${count('Blocked')} | ${count('Not Run')} | ${list.length} | ${executed ? ((count('Pass') / executed) * 100).toFixed(1) : 0}% |

## Related Bugs

| Bug ID | Title | Test Cases | Root Cause |
|:---|:---|:---|:---|
${bugs.map((b) => `| ${b.id} | ${b.title} | ${list.filter((r) => r.bugs.includes(b.id)).map((r) => r.id).join(', ')} | ${esc(b.cause)} |`).join('\n')}
`;
  const file = path.join(outDir, `build-${build}-automated-test-run.md`);
  fs.writeFileSync(file, md);
  console.log(`Wrote ${file}: ${count('Pass')} pass, ${count('Fail')} fail, ${count('Blocked')} blocked, ${count('Not Run')} not run`);
}
