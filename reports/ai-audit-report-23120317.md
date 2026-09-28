# AI Audit Report - 23120317

Tôi sử dụng các công cụ AI cho những tác vụ sau:

- **Công cụ AI**: Claude Code (CLI, mô hình Claude Opus 5.5 - `claude-opus-5-5`), chạy trên Windows 11, thư mục `C:\Users\HP\Desktop\Test_calculator`.
- **Ngày**: 28/09/2026. Giờ theo múi giờ Việt Nam (UTC+7). Mốc chính xác lấy từ git reflog (clone 14:42, commit 15:37) và GitHub (issue #2-#5 tạo lúc 15:14); các mốc còn lại là ước lượng theo thứ tự tương tác.

---

## Lần 1 - Viết script và chạy test run trên Build 2, 4

- **Công cụ AI**: Claude Code (Claude Opus 5.5)
- **Ngày và giờ**: 28/09/2026, khoảng 14:45 - 15:00
- **Câu lệnh (prompt)**:
  > use the test cases to write test scripts and run test runs for this calculator app https://testsheepnz.github.io/BasicCalculator.html, run on build 2 and 4 only, use playwright and chrome
- **Kết quả do AI tạo ra**:
  - Đọc 33 test case trong `tests/test-cases`, đọc mã nguồn trang Basic Calculator để hiểu lỗi cố ý của từng build.
  - Cài `@playwright/test`, tạo `playwright.config.ts` (Google Chrome, `channel: 'chrome'`), page object `tests/e2e/pages/CalculatorPage.ts`, 4 file spec (`arithmetic`, `validation`, `reset`, `build`) chạy theo biến `BUILDS=2,4`.
  - Tạo `scripts/generate-test-run.js` sinh báo cáo test run từ kết quả JSON của Playwright.
  - Lần chạy đầu bị mất mạng (`ERR_INTERNET_DISCONNECTED`), AI chạy lại. Kết quả: Build 2 có 16 Pass / 15 Fail; Build 4 có 25 Pass / 5 Fail / 1 skip.
  - Chạy thêm trên Prototype làm baseline, phát hiện TC-RESET-002 và TC-VAL-003 cũng fail trên Prototype (trái với `sprint-1-test-run.md`).
  - Sinh `tests/test-runs/build-2-automated-test-run.md` và `build-4-automated-test-run.md`.

## Lần 2 - Sửa báo cáo test run theo template

- **Công cụ AI**: Claude Code (Claude Opus 5.5)
- **Ngày và giờ**: 28/09/2026, khoảng 15:00 - 15:05
- **Câu lệnh (prompt)**: (kèm ảnh chụp template "Test Run: ghi nhận kết quả execute test case")
  > template for test run edit accoording to template
- **Kết quả do AI tạo ra**:
  - Viết lại generator để báo cáo có các cột Test Case ID / Module / Tester / Result / Related Bug / Note, trạng thái Pass / Fail / Blocked / Not Run, bảng thống kê và bảng Related Bugs.
  - Gắn mỗi dòng Fail với mã lỗi: BUG-CALC-002, BUG-CALC-004 (dùng lại từ `sprint-2-regression.md`) và BUG-CALC-010, BUG-CALC-011 (AI tự đặt).

## Lần 3 - Tạo GitHub issue

- **Công cụ AI**: Claude Code (Claude Opus 5.5)
- **Ngày và giờ**: 28/09/2026, khoảng 15:05 - 15:14
- **Câu lệnh (prompt)**:
  > create github issues in hungvu09122005/test_cal: Bug report

  và câu lệnh đăng nhập: `! "C:\Program Files\GitHub CLI\gh.exe" auth login --web --git-protocol https`
- **Kết quả do AI tạo ra**:
  - Soạn 4 issue bằng tiếng Việt theo `.github/ISSUE_TEMPLATE/bug_report.md`.
  - Cài GitHub CLI bằng winget (theo lựa chọn của tôi), hướng dẫn đăng nhập bằng device code.
  - Tạo issue #2 (Build 2 hoán đổi Add/Concatenate), #3 (Build 4 khóa Integers only), #4 (Calculate/Clear bị khóa sau lỗi chia cho 0), #5 (để trống First number không báo lỗi), gắn nhãn `bug`, lúc 15:14.

## Lần 4 - Hỏi vì sao chỉ có 2 issue

- **Công cụ AI**: Claude Code (Claude Opus 5.5)
- **Ngày và giờ**: 28/09/2026, khoảng 15:15 - 15:25
- **Câu lệnh (prompt)**:
  > why only 2 issues ?
- **Kết quả do AI tạo ra**: Kiểm tra repo, xác nhận có đủ 4 issue (#2-#5); giải thích là issue được tạo theo lỗi gốc chứ không theo từng test run fail, và đề nghị tạo thêm nếu cần.

## Lần 5 - Hỏi vì sao chỉ có 4 issue cho nhiều test run fail

- **Công cụ AI**: Claude Code (Claude Opus 5.5)
- **Ngày và giờ**: 28/09/2026, khoảng 15:25 - 15:35
- **Câu lệnh (prompt)**:
  > i see a lot of failed test runs in build 2 and 4, why only 4 issues ?
- **Kết quả do AI tạo ra**: Bảng ánh xạ 20 test run fail vào 4 lỗi gốc (#2: 13, #3: 3, #4: 2, #5: 2), giải thích thông lệ "một issue cho mỗi lỗi" và đề nghị tạo 16 issue bổ sung đánh dấu duplicate nếu môn học yêu cầu.

## Lần 6 - Commit và push lên nhánh mới

- **Công cụ AI**: Claude Code (Claude Opus 5.5)
- **Ngày và giờ**: 28/09/2026, 15:37
- **Câu lệnh (prompt)**:
  > commit necessary files and push to remote, use a new branch
- **Kết quả do AI tạo ra**: Tạo nhánh `feat/playwright-automation-build-2-4`, commit `4a45d4b` gồm 13 file (script, cấu hình, báo cáo test run; loại trừ `node_modules`, `test-results`, `playwright-report`), push lên `origin`.

## Lần 7 - Viết các báo cáo nộp bài

- **Công cụ AI**: Claude Code (Claude Opus 5.5)
- **Ngày và giờ**: 28/09/2026, sau 20:21
- **Câu lệnh (prompt)**: Yêu cầu tạo `ai-audit-report-mssv.md`, `ai-critique-mssv.md` (200-300 từ) và `git-commit-log-mssv.md` (dùng `git log --graph --all --stat`), ghi vào thư mục `reports`, MSSV 23120317.
- **Kết quả do AI tạo ra**: Ba file trong thư mục `reports/`: báo cáo này, `ai-critique-23120317.md` và `git-commit-log-23120317.md`.
