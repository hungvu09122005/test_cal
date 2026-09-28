# Build 1 - Automated Test Run Report

## Thông tin chung

| Thuộc tính | Giá trị |
|:---|:---|
| **Project** | Basic Calculator Web Testing |
| **Target URL** | https://testsheepnz.github.io/BasicCalculator.html |
| **Build under test** | **Build 1** |
| **Ngày thực thi** | 2026-09-28 |
| **Công cụ** | Playwright v1.63 + Node.js v22 |
| **Trình duyệt** | Chromium (Headless) |
| **Test script** | `tests/playwright/build1/build1.spec.js` |
| **Helper** | `tests/playwright/helpers/calculator.js` |
| **Lệnh chạy** | `npx playwright test tests/playwright/build1/build1.spec.js` |

---

## Kết quả tổng hợp (Test Execution Summary)

| Tổng số TC | ✅ Passed | ❌ Failed (Bugs) | ⏭️ Skipped |
|:---:|:---:|:---:|:---:|
| **30** | **26** | **4** | **0** |

> **Kết luận**: Build 1 có **1 nhóm bug chính** — bỏ qua toàn bộ bước validation số (input validation). Tất cả phép tính số học hoạt động chính xác.

---

## Chi tiết kết quả từng Test Case

### MODULE: ADD — Phép Cộng

| TC ID | Tên Test Case | Input | Expected | Actual | Status |
|:---|:---|:---|:---|:---|:---:|
| TC-ADD-001 | Cộng hai số nguyên dương | 15 + 25 | 40 | 40 | ✅ Pass |
| TC-ADD-002 | Cộng hai số thập phân | 12.35 + 7.65 | 20 | 20 | ✅ Pass |
| TC-ADD-003 | Cộng số âm với số dương | -30 + 10 | -20 | -20 | ✅ Pass |
| TC-ADD-004 | Cộng với số 0 | 0 + 50 | 50 | 50 | ✅ Pass |
| TC-ADD-005 | Integers only: cộng thập phân | 10.4 + 5.3 | 15 | 15 | ✅ Pass |
| TC-ADD-006 | Giá trị biên 10 chữ số | 9999999999 + 1 | 10000000000 | 10000000000 | ✅ Pass |

### MODULE: SUB — Phép Trừ

| TC ID | Tên Test Case | Input | Expected | Actual | Status |
|:---|:---|:---|:---|:---|:---:|
| TC-SUB-001 | Trừ hai số dương | 50 - 20 | 30 | 30 | ✅ Pass |
| TC-SUB-002 | Trừ số nhỏ khỏi số lớn | 15 - 40 | -25 | -25 | ✅ Pass |
| TC-SUB-003 | Trừ hai số thập phân | 10.5 - 3.2 | 7.3 | 7.3 | ✅ Pass |
| TC-SUB-004 | Trừ hai số bằng nhau | 99 - 99 | 0 | 0 | ✅ Pass |

### MODULE: MUL — Phép Nhân

| TC ID | Tên Test Case | Input | Expected | Actual | Status |
|:---|:---|:---|:---|:---|:---:|
| TC-MUL-001 | Nhân hai số nguyên dương | 7 × 8 | 56 | 56 | ✅ Pass |
| TC-MUL-002 | Nhân với 0 | 125 × 0 | 0 | 0 | ✅ Pass |
| TC-MUL-003 | Nhân số âm với số dương | -6 × 9 | -54 | -54 | ✅ Pass |
| TC-MUL-004 | Integers only: nhân thập phân | 3.5 × 3 | 10 | 10 | ✅ Pass |

### MODULE: DIV — Phép Chia

| TC ID | Tên Test Case | Input | Expected | Actual | Status |
|:---|:---|:---|:---|:---|:---:|
| TC-DIV-001 | Chia hết | 100 ÷ 4 | 25 | 25 | ✅ Pass |
| TC-DIV-002 | Chia không hết | 10 ÷ 4 | 2.5 | 2.5 | ✅ Pass |
| TC-DIV-003 | Chia cho 0 | 25 ÷ 0 | Error: "Divide by zero error!" | Error: "Divide by zero error!" | ✅ Pass |
| TC-DIV-004 | Chia 0 cho số khác 0 | 0 ÷ 15 | 0 | 0 | ✅ Pass |
| TC-DIV-005 | Integers only: chia | 7 ÷ 2 | 3 | 3 | ✅ Pass |

### MODULE: CONCAT — Ghép Chuỗi

| TC ID | Tên Test Case | Input | Expected | Actual | Status |
|:---|:---|:---|:---|:---|:---:|
| TC-CONCAT-001 | Ghép hai chuỗi số | "123" & "456" | 123456 | 123456 | ✅ Pass |
| TC-CONCAT-002 | Ghép chuỗi có ký tự đặc biệt | "Hello" & "_World!" | Hello_World! | Hello_World! | ✅ Pass |
| TC-CONCAT-003 | Ẩn Integers only khi Concatenate | Op=Concatenate | Checkbox ẩn | Checkbox ẩn | ✅ Pass |

### MODULE: VAL — Validation

| TC ID | Tên Test Case | Input | Expected | Actual | Status | Bug |
|:---|:---|:---|:---|:---|:---:|:---|
| TC-VAL-001 | First number không phải số | "abc" + 10 | Error: "Number 1 is not a number" | Error: *(rỗng)*, Answer: NaN | ❌ **FAIL** | BUG-B1-001 |
| TC-VAL-002 | Second number không phải số | 20 × "xyz" | Error: "Number 2 is not a number" | Error: *(rỗng)*, Answer: NaN | ❌ **FAIL** | BUG-B1-001 |
| TC-VAL-003 | Để trống First number | *(empty)* - 5 | Error: "Number 1 is not a number" | Error: *(rỗng)* | ❌ **FAIL** | BUG-B1-001 |
| TC-VAL-004 | Giới hạn tối đa 10 ký tự | 11 ký tự nhập | maxlength=10 | maxlength=10 | ✅ Pass | — |

### MODULE: RESET — UI Reset & Controls

| TC ID | Tên Test Case | Expected | Actual | Status | Ghi chú |
|:---|:---|:---|:---|:---:|:---|
| TC-RESET-001 | Clear xóa Answer & bỏ Integers only | Answer rỗng, checkbox unchecked | Answer rỗng, checkbox unchecked | ✅ Pass | — |
| TC-RESET-002 | Clear xóa error message | Error rỗng sau Clear | Clear button **disabled** sau lỗi ÷0 | ❌ **FAIL** | BUG-B1-002 |
| TC-RESET-003 | Loading state & re-enable buttons | Buttons re-enable sau tính | Buttons re-enable, Answer=100 | ✅ Pass | — |

### MODULE: BUILD — Build Verification

| TC ID | Tên Test Case | Expected | Actual | Status | Bug |
|:---|:---|:---|:---|:---:|:---|
| TC-BUILD-002 | Build 1 bỏ qua validation | Error: "Number 1 is not a number" | Error: *(rỗng)*, Answer: NaN | ❌ **FAIL** (by design) | BUG-B1-001 |

---

## Danh sách Bug phát hiện

### BUG-B1-001 — Build 1 bỏ qua toàn bộ input validation

| Thuộc tính | Giá trị |
|:---|:---|
| **Severity** | Critical |
| **Priority** | High |
| **Ảnh hưởng** | TC-VAL-001, TC-VAL-002, TC-VAL-003, TC-BUILD-002 |
| **Mô tả** | Build 1 không kiểm tra tính hợp lệ của số nhập vào. Khi nhập chuỗi ký tự (e.g. "abc") hoặc để trống, hệ thống vẫn tính và trả về `NaN` thay vì báo lỗi. |
| **Steps to reproduce** | 1. Chọn Build = "1" → 2. Nhập "abc" vào First number, "10" vào Second number → 3. Chọn Add → 4. Bấm Calculate |
| **Expected** | Hiển thị lỗi `"Number 1 is not a number"` |
| **Actual** | Answer = `NaN`, không có thông báo lỗi |

### BUG-B1-002 — Clear button bị disabled sau lỗi chia cho 0

| Thuộc tính | Giá trị |
|:---|:---|
| **Severity** | Major |
| **Priority** | Medium |
| **Ảnh hưởng** | TC-RESET-002 |
| **Mô tả** | Sau khi phép chia cho 0 xảy ra trên Build 1, nút Clear bị vô hiệu hóa và không thể tương tác được, khiến người dùng không thể xóa thông báo lỗi. |
| **Steps to reproduce** | 1. Chọn Build = "1" → 2. Nhập 10 ÷ 0 → 3. Bấm Calculate → 4. Bấm Clear |
| **Expected** | Clear button hoạt động, xóa thông báo lỗi |
| **Actual** | Clear button ở trạng thái `disabled`, không thể click |

---

## Phân tích kết quả

```
BUILD 1 — TEST RUN SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Arithmetic (ADD/SUB/MUL/DIV):  19/19 ✅ PASS
  Concatenate:                     3/3  ✅ PASS
  Validation:                      1/4  ⚠️  3 FAIL (Bug BUG-B1-001)
  Reset/UI Controls:               2/3  ⚠️  1 FAIL (Bug BUG-B1-002)
  Build Verification:              0/1  ⚠️  1 FAIL (Expected — documents bug)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TOTAL:                          26/30  (86.7% pass rate)
  Confirmed bugs:                  2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Kết luận**: Build 1 hoạt động **đúng hoàn toàn** về mặt số học (tất cả phép tính và Concatenate đều chính xác). Bug chính là **bỏ qua validation đầu vào**, gây ra behavior không an toàn khi nhập dữ liệu không hợp lệ.
