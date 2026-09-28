# BÁO CÁO KIỂM TOÁN SỬ DỤNG CÔNG CỤ AI (AI AUDIT REPORT)

- **Họ và tên sinh viên / MSSV:** 23120312
- **Môn học:** Kiểm thử Phần mềm (Software Testing)
- **Dự án:** Basic Calculator Testing (Build 6 - Playwright Automation)
- **Hệ thống kiểm thử:** [Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html)
- **Repository:** [hungvu09122005/test_cal](https://github.com/hungvu09122005/test_cal)

---

## 1. TUYÊN BỐ SỬ DỤNG CÔNG CỤ AI

> **"Tôi sử dụng các công cụ AI cho những tác vụ sau:"**
>
> 1. **Đọc và phân tích tài liệu đề bài (README):** Trích xuất yêu cầu để xây dựng test scripts tự động cho Build 6.
> 2. **Phát triển kịch bản kiểm thử tự động (Playwright/TypeScript):** Viết cấu hình `playwright.config.ts`, helper `calculator.helper.ts` và các file spec cho Add/Subtract/Multiply/Divide/Concatenate/Validation/Reset/Build.
> 3. **Thực thi test và ghi nhận kết quả:** Chạy bộ 33 test case của Build 6, ghi nhận 32 Pass / 1 Fail (BUG-CALC-006), tạo file test-run và bug report.
> 4. **Dọn dẹp repository cho bài nộp:** Xóa các artifact tự sinh (node_modules, test-results, playwright-report...) và tạo `.gitignore`.
> 5. **Quản lý Git/GitHub:** Tạo nhánh, commit, push, và xử lý xung đột (merge conflict) nhiều lần khi đồng bộ với nhánh `main` do các thành viên khác trong nhóm cùng cập nhật song song.
> 6. **Rà soát bài nộp:** Đối chiếu nội dung thư mục `reports/` với yêu cầu bài nộp và liệt kê các phần còn thiếu.

---

## 2. BẢNG TỔNG HỢP CÁC LẦN TƯƠNG TÁC AI

| Lần tương tác | Thời gian (GMT+7) | Tên công cụ AI | Tóm tắt tác vụ / Prompt |
|:---:|:---|:---|:---|
| **#1** | 2026-09-28 14:56:04 | GitHub Copilot Chat (Claude Sonnet 5) | Đọc README, tạo test scripts từ Testcase bằng Playwright, tạo test Runs, thực thi TCs (Build 1 - nháp ban đầu) |
| **#2** | 2026-09-28 15:24:56 | GitHub Copilot Chat (Claude Sonnet 5) | Đọc README, tạo test scripts/test Runs, thực thi TCs cho Build 6 |
| **#3** | 2026-09-28 15:29:04 | GitHub Copilot Chat (Claude Sonnet 5) | (Thông báo hệ thống) Terminal báo lỗi `page.goto` timeout khi chạy test |
| **#4** | 2026-09-28 15:41:39 | GitHub Copilot Chat (Claude Sonnet 5) | Làm rõ phạm vi: chỉ thiết kế testcase + run testcase + bug report, không fix bug của ứng dụng |
| **#5** | 2026-09-28 15:55:14 | GitHub Copilot Chat (Claude Sonnet 5) | Xóa các file không cần thiết (dư thừa) cho bài nộp |
| **#6** | 2026-09-28 15:58:09 | GitHub Copilot Chat (Claude Sonnet 5) | Tạo nhánh mới, commit + push lên GitHub để merge thủ công vào main |
| **#7** | 2026-09-28 16:04:04 | GitHub Copilot Chat (Claude Sonnet 5) | Di chuyển bug report vào `.github/ISSUE_TEMPLATE` và viết lại theo format chuẩn |
| **#8** | 2026-09-28 16:04:58 | GitHub Copilot Chat (Claude Sonnet 5) | Commit + push thay đổi lên GitHub |
| **#9** | 2026-09-28 16:10:47 | GitHub Copilot Chat (Claude Sonnet 5) | Vừa merge `main` vào `feat/playwright-automation-build-6`, bị conflict, nhờ fix |
| **#10** | 2026-09-28 16:10:56 | GitHub Copilot Chat (Claude Sonnet 5) | (Thông báo hệ thống) Terminal báo lỗi timeout khi smoke-test lại sau merge |
| **#11** | 2026-09-28 16:13:56 | GitHub Copilot Chat (Claude Sonnet 5) | Vừa merge tiếp `main` vào nhánh, lại bị conflict, nhờ xử lý tiếp |
| **#12** | 2026-09-28 20:28:56 | GitHub Copilot Chat (Claude Sonnet 5) | (Paste) `git checkout main` báo lỗi vì còn merge dang dở chưa resolve |
| **#13** | 2026-09-28 20:29:35 | GitHub Copilot Chat (Claude Sonnet 5) | Chỉ muốn đổi qua nhánh main |
| **#14** | 2026-09-28 20:36:09 | GitHub Copilot Chat (Claude Sonnet 5) | Gửi ảnh yêu cầu bài nộp, hỏi cần bổ sung phần nào |
| **#15** | 2026-09-28 20:38:18 | GitHub Copilot Chat (Claude Sonnet 5) | Lặp lại yêu cầu trên, chỉ muốn AI trả lời, không chỉnh sửa file |
| **#16** | 2026-09-28 (hiện tại) | GitHub Copilot Chat (Claude Sonnet 5) | Cung cấp MSSV 23120312, nhờ AI hoàn thành phần report của mình |

---

## 3. CHI TIẾT TỪNG LẦN TƯƠNG TÁC

### TƯƠNG TÁC #1
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 14:56:04 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
```text
Hãy đọc file readme này để lấy thông tin. Tôi đang thực hiện tạo test scripts từ
Testcase (hỗ trợ test tự động) sử dụng playwright. Sau đó tạo test Runs và thực
thi các TCs để ghi nhận kết quả. Thực hiện với Builts 1
```
- **Kết quả do AI tạo ra:** AI bắt đầu đọc README.md để lấy bối cảnh dự án (đây là bản nháp đầu, số Build được chỉnh lại ngay ở tương tác kế tiếp).

---

### TƯƠNG TÁC #2
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 15:24:56 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
```text
Hãy đọc file readme này để lấy thông tin. Tôi đang thực hiện tạo test scripts từ
Testcase (hỗ trợ test tự động) sử dụng playwright. Sau đó tạo test Runs và thực
thi các TCs để ghi nhận kết quả. Thực hiện với Builts 6
```
- **Kết quả do AI tạo ra:** AI đọc README, thiết lập `playwright.config.ts` (dùng `channel: 'chrome'` để chạy qua Chrome đã cài sẵn do mạng công ty chặn tải browser binary của Playwright, `workers: 1` + `retries: 1` để tránh timeout do proxy), viết helper `calculator.helper.ts` và các file spec cho 8 nhóm chức năng (Add, Subtract, Multiply, Divide, Concatenate, Validation, Reset, Build), sau đó chạy nền bộ 33 test case của Build 6.

---

### TƯƠNG TÁC #3
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 15:29:04 (GMT+7)
- **Câu lệnh (Prompt) của bạn:** *(Thông báo hệ thống - terminal báo lỗi `page.goto: Test timeout of 30000ms exceeded` tại `calculator.helper.ts:26`)*
- **Kết quả do AI tạo ra:** AI phát hiện lỗi nằm ở chính script test (gọi `page.goto('/')` sai, thay vì gọi baseURL rỗng), sửa lại hàm `goto()` trong helper, và chạy lại bộ test.

---

### TƯƠNG TÁC #4
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 15:41:39 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
```text
tôi chỉ làm là thiết kế testcase + run testcase + bugreport
Bạn hãy đọc các docs để hiểu đề bài chứ ko có fix bug hay gì cả
```
- **Kết quả do AI tạo ra:** AI xác nhận lại phạm vi công việc (chỉ thiết kế/thực thi testcase và báo cáo lỗi, không được sửa lỗi thật của ứng dụng đang kiểm thử), hoàn tất test run Build 6 với kết quả 32/33 Pass — 1 Fail đúng như thiết kế, xác nhận `BUG-CALC-006` (Build 6 không kiểm tra chia cho 0) là lỗi thật của ứng dụng và giữ nguyên không sửa, chỉ ghi vào bug report.

---

### TƯƠNG TÁC #5
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 15:55:14 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
```text
bạn hãy xóa đi những file không cần thiết (dư thừa) cho bài nộp
```
- **Kết quả do AI tạo ra:** AI xóa `node_modules/`, `test-results/`, `playwright-report/`, `test-run-output.txt` (đều là artifact tự sinh lại được), và tạo file `.gitignore` để tránh commit nhầm các artifact này về sau.

---

### TƯƠNG TÁC #6
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 15:58:09 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
```text
tạo 1 nhánh mới và coomit + push lên github để tôi có thể tự merge vào nhánh main
manually
```
- **Kết quả do AI tạo ra:** AI tạo nhánh `feat/playwright-automation-build-6`, commit toàn bộ code automation + report, và push lên GitHub, sẵn sàng để merge thủ công.

---

### TƯƠNG TÁC #7
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 16:04:04 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
```text
bạn hãy đưa file bug report này vào thư mục .github\ISSUE_TEMPLATE và viết lại
file này dựa trên format được định nghĩa trong .github/ISSUE_TEMPLATE/bug_report.md
```
- **Kết quả do AI tạo ra:** AI di chuyển bug report `BUG-CALC-006` vào `.github/ISSUE_TEMPLATE/`, viết lại nội dung theo đúng format chuẩn (Mô tả lỗi/Môi trường/Steps to reproduce/Actual result/Expected result/Evidence), xóa file cũ và cập nhật link tham chiếu chéo trong test-run.

---

### TƯƠNG TÁC #8
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 16:04:58 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
```text
commit + push lên github
```
- **Kết quả do AI tạo ra:** AI commit và push thay đổi lên nhánh `feat/playwright-automation-build-6`.

---

### TƯƠNG TÁC #9
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 16:10:47 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
```text
tôi vừa merge main vào feat/playwright-automation-build-6 và có conflict => fix
giúp tôi
```
- **Kết quả do AI tạo ra:** AI resolve xung đột trong `.gitignore`, `package.json`, `package-lock.json` (gộp toàn bộ script/metadata từ cả 2 nhánh, sửa luôn lỗi cú pháp JSON có sẵn từ `main`), phát hiện và sửa lỗi cú pháp trong `playwright.config.js` do `main` mang sang, commit merge và push lên GitHub. AI cũng từ chối một lời nhắc cài đặt gói `playwright` không cần thiết qua `npx` để tránh tải thêm phụ thuộc ngoài ý muốn.

---

### TƯƠNG TÁC #10
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 16:10:56 (GMT+7)
- **Câu lệnh (Prompt) của bạn:** *(Thông báo hệ thống - terminal trả về danh sách test fail/timeout sau khi cài lại dependency)*
- **Kết quả do AI tạo ra:** AI chạy smoke test để xác nhận bộ test Build 6 vẫn chạy đúng sau merge (32/33 Pass, chỉ Fail đúng 1 case đã biết là `BUG-CALC-006`).

---

### TƯƠNG TÁC #11
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 16:13:56 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
```text
tôi vừa merge tiếp main vào feat/playwright-automation-build-6, handle conflict
giúp tôi
```
- **Kết quả do AI tạo ra:** AI kiểm tra `git status`, phát hiện conflict mới trong `.gitignore` và `playwright.config.ts` (do `main` vừa nhận thêm code Build 2/4/5/8 từ đồng nghiệp khác kèm một `playwright.config.ts` cạnh tranh khác), đọc nội dung conflict để chuẩn bị resolve.

---

### TƯƠNG TÁC #12
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 20:28:56 (GMT+7)
- **Câu lệnh (Prompt) của bạn:** *(Paste terminal)* `git checkout main` báo lỗi `.gitignore: needs merge`, `playwright.config.ts: needs merge` vì còn merge dang dở chưa resolve.
- **Kết quả do AI tạo ra:** AI kiểm tra lại trạng thái Git hiện tại trước khi thao tác tiếp, vì có thay đổi từ bên ngoài (người dùng đã tự thao tác thêm ở terminal khác).

---

### TƯƠNG TÁC #13
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 20:29:35 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
```text
tôi chỉ muốn đổi qua nhánh main
```
- **Kết quả do AI tạo ra:** AI hủy an toàn merge dở dang bằng `git merge --abort` (không mất commit nào vì merge chưa được commit), sau đó `git checkout main` thành công, working tree sạch.

---

### TƯƠNG TÁC #14
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 20:36:09 (GMT+7)
- **Câu lệnh (Prompt) của bạn:** *(Gửi kèm ảnh chụp yêu cầu bài nộp)* "Đây là yêu cầu bài nộp, bạn hãy xem thử tôi cần bổ sung phần nào để hoàn thành"
- **Kết quả do AI tạo ra:** AI đọc thư mục `reports/` hiện có, đối chiếu với yêu cầu trong ảnh (ai-audit-report/ai-critique/git-commit-log theo MSSV), và bắt đầu kiểm tra từng file.

---

### TƯƠNG TÁC #15
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 20:38:18 (GMT+7)
- **Câu lệnh (Prompt) của bạn:**
```text
Đây là yêu cầu bài nộp, bạn hãy xem thử tôi cần bổ sung phần nào để hoàn thành,
chỉ trả lời thôi
```
- **Kết quả do AI tạo ra:** AI liệt kê checklist các phần cần bổ sung: (1) lỗi đặt tên file `git-commit-log-2312094.md` thiếu 1 số; (2) thiếu bộ report cho một số MSSV khác trong nhóm (dựa trên các tác giả commit trong `git log --all`); (3) file git-commit-log hiện có đã cũ, cần chạy lại trước khi nộp; (4) xác nhận các file `ai-audit-report`/`ai-critique` hiện có đã đạt định dạng và số từ yêu cầu; (5) chưa có file `MaNhom.zip` để nộp. AI không chỉnh sửa file nào theo đúng yêu cầu.

---

### TƯƠNG TÁC #16
- **Tên công cụ AI:** GitHub Copilot Chat (Claude Sonnet 5)
- **Ngày và giờ:** 2026-09-28 (hiện tại, GMT+7)
- **Câu lệnh (Prompt) của bạn:**
```text
Hiện tại mã số sinh viên của tôi là 23120312, và bạn có thể giúp tôi hoàn thành
phần của mình không
```
- **Kết quả do AI tạo ra:** AI xác nhận MSSV `23120312` khớp với identity Git `nhUit296 <n.thach2965@gmail.com>` (qua `git config user.name/user.email`), truy vấn lịch sử phiên làm việc thực tế (session store) để lấy đúng prompt và mốc thời gian của từng lần tương tác, tạo 3 file theo đúng yêu cầu bài nộp: `reports/ai-audit-report-23120312.md` (báo cáo này), `reports/ai-critique-23120312.md`, và `reports/git-commit-log-23120312.md` (kết quả thật của lệnh `git log --graph --all --stat`).
