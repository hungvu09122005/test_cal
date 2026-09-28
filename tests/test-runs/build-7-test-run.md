# Báo cáo Thực thi Kiểm thử: Build 7 (Test Run Report - Build 7)

## 1. Thông tin chung (Overview)
- **Tên dự án**: Basic Calculator Web Testing
- **URL kiểm thử**: https://testsheepnz.github.io/BasicCalculator.html
- **Phiên bản (Build under test)**: **Build 7** (*"Uses answer, not number 1 as first for operation"*)
- **Công cụ kiểm thử (Test Automation Tool)**: Playwright (v1.63.0) + Google Chrome Channel
- **Thời gian thực thi**: 2026-09-28
- **Người thực hiện**: QA Automation Team
- **File kịch bản thực thi**: `tests/e2e/build-7.spec.js`

---

## 2. Thống kê kết quả kiểm thử (Execution Summary)

| Tổng số Test Case | Passed (Đạt) | Failed (Không đạt) | Blocked / Skipped | Tỷ lệ Đạt (Pass Rate) |
|:---:|:---:|:---:|:---:|:---:|
| **29** | **7** | **22** | **0** | **24.14%** |

---

## 3. Bảng kết quả chi tiết từng Test Case (Detailed Test Results)

| Test Case ID | Tên Test Case | Dữ liệu kiểm thử | Kết quả mong đợi (Expected) | Kết quả thực tế (Actual) | Trạng thái | Đánh giá / Bug liên quan |
|:---|:---|:---|:---|:---|:---:|:---|
| **TC-ADD-001** | Cộng hai số nguyên dương hợp lệ | `num1=15`, `num2=25`, `Add` | Answer = `40` | Answer = `25` | ❌ **FAILED** | **BUG Build 7**: `num1` bị thay bằng `""` (= 0), ra `0 + 25 = 25` |
| **TC-ADD-002** | Cộng hai số thực thập phân | `num1=12.35`, `num2=7.65`, `Add` | Answer = `20` | Answer = `7.65` | ❌ **FAILED** | **BUG Build 7**: Lấy `0 + 7.65 = 7.65` |
| **TC-ADD-003** | Cộng số âm với số dương | `num1=-30`, `num2=10`, `Add` | Answer = `-20` | Answer = `10` | ❌ **FAILED** | **BUG Build 7**: Lấy `0 + 10 = 10` |
| **TC-ADD-004** | Cộng với số 0 | `num1=0`, `num2=50`, `Add` | Answer = `50` | Answer = `50` | **PASSED** | May mắn PASS do `num1 = 0` trùng với `answer` rỗng |
| **TC-ADD-005** | Cộng với tùy chọn Integers only | `num1=10.4`, `num2=5.3`, `Add`, IntOnly | Answer = `15` | Answer = `5` | ❌ **FAILED** | **BUG Build 7**: Lấy `0 + 5.3 -> 5` |
| **TC-ADD-006** | Cộng biên giới hạn 10 chữ số | `num1=9999999999`, `num2=1`, `Add` | Answer = `10000000000` | Answer = `1` | ❌ **FAILED** | **BUG Build 7**: Lấy `0 + 1 = 1` |
| **TC-SUB-001** | Trừ hai số nguyên dương | `num1=50`, `num2=20`, `Subtract` | Answer = `30` | Answer = `-20` | ❌ **FAILED** | **BUG Build 7**: Lấy `0 - 20 = -20` |
| **TC-SUB-002** | Trừ số nhỏ cho số lớn | `num1=15`, `num2=40`, `Subtract` | Answer = `-25` | Answer = `-40` | ❌ **FAILED** | **BUG Build 7**: Lấy `0 - 40 = -40` |
| **TC-SUB-003** | Trừ hai số thập phân | `num1=10.5`, `num2=3.2`, `Subtract` | Answer = `7.3` | Answer = `-3.2` | ❌ **FAILED** | **BUG Build 7**: Lấy `0 - 3.2 = -3.2` |
| **TC-SUB-004** | Trừ hai số bằng nhau | `num1=99`, `num2=99`, `Subtract` | Answer = `0` | Answer = `-99` | ❌ **FAILED** | **BUG Build 7**: Lấy `0 - 99 = -99` |
| **TC-MUL-001** | Nhân hai số nguyên dương | `num1=7`, `num2=8`, `Multiply` | Answer = `56` | Answer = `0` | ❌ **FAILED** | **BUG Build 7**: Lấy `0 * 8 = 0` |
| **TC-MUL-002** | Nhân một số với 0 | `num1=125`, `num2=0`, `Multiply` | Answer = `0` | Answer = `0` | **PASSED** | May mắn PASS do `0 * 0 = 0` |
| **TC-MUL-003** | Nhân số âm với số dương | `num1=-6`, `num2=9`, `Multiply` | Answer = `-54` | Answer = `0` | ❌ **FAILED** | **BUG Build 7**: Lấy `0 * 9 = 0` |
| **TC-MUL-004** | Nhân với tùy chọn Integers only | `num1=3.5`, `num2=3`, `Multiply`, IntOnly | Answer = `10` | Answer = `0` | ❌ **FAILED** | **BUG Build 7**: Lấy `0 * 3 = 0` |
| **TC-DIV-001** | Chia hết hai số nguyên dương | `num1=100`, `num2=4`, `Divide` | Answer = `25` | Answer = `0` | ❌ **FAILED** | **BUG Build 7**: Lấy `0 / 4 = 0` |
| **TC-DIV-002** | Chia không hết tạo số thập phân | `num1=10`, `num2=4`, `Divide` | Answer = `2.5` | Answer = `0` | ❌ **FAILED** | **BUG Build 7**: Lấy `0 / 4 = 0` |
| **TC-DIV-003** | Chia cho số 0 báo lỗi | `num1=25`, `num2=0`, `Divide` | Báo lỗi `Divide by zero error!` | Báo lỗi `Divide by zero error!` | **PASSED** | Điều kiện chia 0 kiểm tra `num2 = 0` nên PASS |
| **TC-DIV-004** | Chia số 0 cho số khác | `num1=0`, `num2=15`, `Divide` | Answer = `0` | Answer = `0` | **PASSED** | May mắn PASS do `0 / 15 = 0` |
| **TC-DIV-005** | Chia với tùy chọn Integers only | `num1=7`, `num2=2`, `Divide`, IntOnly | Answer = `3` | Answer = `0` | ❌ **FAILED** | **BUG Build 7**: Lấy `0 / 2 = 0` |
| **TC-CONCAT-001** | Ghép hai chuỗi số nguyên | `num1="123"`, `num2="456"`, `Concatenate` | Answer = `"123456"` | Answer = `"456"` | ❌ **FAILED** | **BUG Build 7**: Chuỗi `""` + `"456"` = `"456"` |
| **TC-CONCAT-002** | Ghép chuỗi chứa chữ cái | `num1="Hello"`, `num2="_World!"`, `Concatenate` | Answer = `"Hello_World!"` | Answer = `"_World!"` | ❌ **FAILED** | **BUG Build 7**: Chuỗi `""` + `"_World!"` = `"_World!"` |
| **TC-CONCAT-003** | Ẩn Integers only khi chọn Concatenate | Chọn `Operation = Concatenate` | Checkbox `Integers only` bị ẩn và disabled | Checkbox bị ẩn và disabled | **PASSED** | Giao diện hoạt động đúng |
| **TC-VAL-001** | Báo lỗi khi First number là chữ | `num1="abc"`, `num2=10`, `Add` | Báo lỗi `Number 1 is not a number` | Không báo lỗi, tính ra `10` | ❌ **FAILED** | **BUG Build 7**: `num1` bị thay bằng `""` trước khi kiểm tra `isNaN` |
| **TC-VAL-002** | Báo lỗi khi Second number là chữ | `num1=20`, `num2="xyz"`, `Multiply` | Báo lỗi `Number 2 is not a number` | Báo lỗi `Number 2 is not a number` | **PASSED** | `num2` không bị ghi đè, bắt lỗi đúng |
| **TC-VAL-003** | Báo lỗi khi để trống First number | `num1=""`, `num2=5`, `Subtract` | Báo lỗi `Number 1 is not a number` | Không báo lỗi, tính ra `-5` | ❌ **FAILED** | Lỗi thiếu kiểm tra rỗng |
| **TC-VAL-004** | Giới hạn tối đa 10 ký tự | `num1=12345678901`, `num2=12345678901` | Chỉ nhận 10 ký tự `1234567890` | Đã cắt còn 10 ký tự | **PASSED** | Thuộc tính DOM đúng |
| **TC-RESET-001** | Clear xóa Answer & reset Integers only | Bấm `Clear` sau khi tính toán | Answer rỗng, checkbox uncheck | Phép tính trước fail do kết quả sai | ❌ **FAILED** | Sai lệch chuỗi trạng thái |
| **TC-RESET-002** | Clear xóa thông báo lỗi | Bấm `Clear` khi có lỗi | Vùng thông báo lỗi bị xóa rỗng | Lỗi không xuất hiện do `num1` bị ghi đè | ❌ **FAILED** | Hệ thống không sinh lỗi để kiểm tra clear |
| **TC-RESET-003** | Nút vô hiệu hóa trong khi tính | Bấm `Calculate`, quan sát trạng thái | Nút bị disabled khi tính, enabled lại sau | Kết quả Answer trả về `50` thay vì `100` | ❌ **FAILED** | Kết quả tính sai làm fail assertion |

---

## 4. Phân tích nguyên nhân khiếm khuyết (Defect Analysis - Root Cause)

### 🔴 Lỗi Nghiêm Trọng (Critical Bug) của Build 7: Ghi đè First number bằng Answer cũ
- **Mã nguồn lỗi**:
  ```javascript
  var num1 = document.getElementById('number1Field').value;
  var num2 = document.getElementById('number2Field').value;

  if (selectedBuild == 7) {
    num1 = answer; // BUG: Ép num1 bằng giá trị của biến answer!
  }
  ```
- **Hậu quả**:
  1. Khi vừa mở trang, `answer` ban đầu là chuỗi rỗng `""`. Mọi giá trị người dùng nhập vào ô `First number` đều bị hủy bỏ và thay thế bằng `""` (được ép kiểu thành `0`). Dẫn đến:
     - `15 + 25` trở thành `0 + 25 = 25`.
     - `50 - 20` trở thành `0 - 20 = -20`.
     - `7 * 8` trở thành `0 * 8 = 0`.
     - `100 / 4` trở thành `0 / 4 = 0`.
     - `"Hello" + "_World!"` trở thành `"" + "_World!" = "_World!"`.
  2. Khi nhập chữ cái vào `First number` (`"abc"`), hệ thống cũng thay thế bằng `""` trước bước kiểm tra `isNaN(num1)`, khiến chức năng kiểm tra hợp lệ (`TC-VAL-001`) bị vô hiệu hóa hoàn toàn.
  3. Chỉ có các test case mà toán hạng `First number` vốn là `0` hoặc kiểm tra trên `Second number` (`TC-ADD-004`, `TC-MUL-002`, `TC-DIV-003`, `TC-DIV-004`, `TC-VAL-002`, `TC-VAL-004`) mới PASS.
