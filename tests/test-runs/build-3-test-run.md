# Báo cáo Thực thi Kiểm thử: Build 3 (Test Run Report - Build 3)

## 1. Thông tin chung (Overview)
- **Tên dự án**: Basic Calculator Web Testing
- **URL kiểm thử**: https://testsheepnz.github.io/BasicCalculator.html
- **Phiên bản (Build under test)**: **Build 3** (*"always treats like a number"*)
- **Công cụ kiểm thử (Test Automation Tool)**: Playwright (v1.63.0) + Google Chrome Channel
- **Thời gian thực thi**: 2026-09-28
- **Người thực hiện**: QA Automation Team
- **File kịch bản thực thi**: `tests/e2e/build-3.spec.js`

---

## 2. Thống kê kết quả kiểm thử (Execution Summary)

| Tổng số Test Case | Passed (Đạt) | Failed (Không đạt) | Blocked / Skipped | Tỷ lệ Đạt (Pass Rate) |
|:---:|:---:|:---:|:---:|:---:|
| **29** | **26** | **3** | **0** | **89.66%** |

---

## 3. Bảng kết quả chi tiết từng Test Case (Detailed Test Results)

| Test Case ID | Tên Test Case | Dữ liệu kiểm thử | Kết quả mong đợi (Expected) | Kết quả thực tế (Actual) | Trạng thái | Đánh giá / Bug liên quan |
|:---|:---|:---|:---|:---|:---:|:---|
| **TC-ADD-001** | Cộng hai số nguyên dương hợp lệ | `num1=15`, `num2=25`, `Add` | Answer = `40` | Answer = `40` | **PASSED** | Hoạt động chính xác |
| **TC-ADD-002** | Cộng hai số thực thập phân | `num1=12.35`, `num2=7.65`, `Add` | Answer = `20` | Answer = `20` | **PASSED** | Hoạt động chính xác |
| **TC-ADD-003** | Cộng số âm với số dương | `num1=-30`, `num2=10`, `Add` | Answer = `-20` | Answer = `-20` | **PASSED** | Hoạt động chính xác |
| **TC-ADD-004** | Cộng với số 0 | `num1=0`, `num2=50`, `Add` | Answer = `50` | Answer = `50` | **PASSED** | Hoạt động chính xác |
| **TC-ADD-005** | Cộng với tùy chọn Integers only | `num1=10.4`, `num2=5.3`, `Add`, IntOnly | Answer = `15` | Answer = `15` | **PASSED** | Làm tròn chính xác |
| **TC-ADD-006** | Cộng biên giới hạn 10 chữ số | `num1=9999999999`, `num2=1`, `Add` | Answer = `10000000000` | Answer = `10000000000` | **PASSED** | Không tràn số |
| **TC-SUB-001** | Trừ hai số nguyên dương | `num1=50`, `num2=20`, `Subtract` | Answer = `30` | Answer = `30` | **PASSED** | Hoạt động chính xác |
| **TC-SUB-002** | Trừ số nhỏ cho số lớn | `num1=15`, `num2=40`, `Subtract` | Answer = `-25` | Answer = `-25` | **PASSED** | Hoạt động chính xác |
| **TC-SUB-003** | Trừ hai số thập phân | `num1=10.5`, `num2=3.2`, `Subtract` | Answer = `7.3` | Answer = `7.3` | **PASSED** | Hoạt động chính xác |
| **TC-SUB-004** | Trừ hai số bằng nhau | `num1=99`, `num2=99`, `Subtract` | Answer = `0` | Answer = `0` | **PASSED** | Hoạt động chính xác |
| **TC-MUL-001** | Nhân hai số nguyên dương | `num1=7`, `num2=8`, `Multiply` | Answer = `56` | Answer = `56` | **PASSED** | Hoạt động chính xác |
| **TC-MUL-002** | Nhân một số với 0 | `num1=125`, `num2=0`, `Multiply` | Answer = `0` | Answer = `0` | **PASSED** | Hoạt động chính xác |
| **TC-MUL-003** | Nhân số âm với số dương | `num1=-6`, `num2=9`, `Multiply` | Answer = `-54` | Answer = `-54` | **PASSED** | Hoạt động chính xác |
| **TC-MUL-004** | Nhân với tùy chọn Integers only | `num1=3.5`, `num2=3`, `Multiply`, IntOnly | Answer = `10` | Answer = `10` | **PASSED** | Làm tròn chính xác |
| **TC-DIV-001** | Chia hết hai số nguyên dương | `num1=100`, `num2=4`, `Divide` | Answer = `25` | Answer = `25` | **PASSED** | Hoạt động chính xác |
| **TC-DIV-002** | Chia không hết tạo số thập phân | `num1=10`, `num2=4`, `Divide` | Answer = `2.5` | Answer = `2.5` | **PASSED** | Hoạt động chính xác |
| **TC-DIV-003** | Chia cho số 0 báo lỗi | `num1=25`, `num2=0`, `Divide` | Báo lỗi `Divide by zero error!` | Báo lỗi `Divide by zero error!` | **PASSED** | Bắt lỗi chia 0 chính xác |
| **TC-DIV-004** | Chia số 0 cho số khác | `num1=0`, `num2=15`, `Divide` | Answer = `0` | Answer = `0` | **PASSED** | Hoạt động chính xác |
| **TC-DIV-005** | Chia với tùy chọn Integers only | `num1=7`, `num2=2`, `Divide`, IntOnly | Answer = `3` | Answer = `3` | **PASSED** | Làm tròn chính xác |
| **TC-CONCAT-001** | Ghép hai chuỗi số nguyên | `num1="123"`, `num2="456"`, `Concatenate` | Answer = `"123456"` | Answer = `"123456"` | **PASSED** | Ghép số thành công |
| **TC-CONCAT-002** | Ghép chuỗi chứa chữ cái | `num1="Hello"`, `num2="_World!"`, `Concatenate` | Answer = `"Hello_World!"` | Báo lỗi `Number 1 is not a number` | ❌ **FAILED** | **BUG Build 3**: Luôn ép kiểu kiểm tra số cho mọi phép tính |
| **TC-CONCAT-003** | Ẩn Integers only khi chọn Concatenate | Chọn `Operation = Concatenate` | Checkbox `Integers only` bị ẩn và disabled | Checkbox vẫn `visible` và `enabled` | ❌ **FAILED** | **BUG Build 3**: Không ẩn điều khiển số khi chọn ghép chuỗi |
| **TC-VAL-001** | Báo lỗi khi First number là chữ | `num1="abc"`, `num2=10`, `Add` | Báo lỗi `Number 1 is not a number` | Báo lỗi `Number 1 is not a number` | **PASSED** | Bắt lỗi hợp lệ |
| **TC-VAL-002** | Báo lỗi khi Second number là chữ | `num1=20`, `num2="xyz"`, `Multiply` | Báo lỗi `Number 2 is not a number` | Báo lỗi `Number 2 is not a number` | **PASSED** | Bắt lỗi hợp lệ |
| **TC-VAL-003** | Báo lỗi khi để trống First number | `num1=""`, `num2=5`, `Subtract` | Báo lỗi `Number 1 is not a number` | Không báo lỗi, tự tính ra `-5` | ❌ **FAILED** | **BUG Ứng dụng**: `isNaN("")` trả về `false`, không kiểm tra trường rỗng |
| **TC-VAL-004** | Giới hạn tối đa 10 ký tự | `num1=12345678901`, `num2=12345678901` | Chỉ nhận 10 ký tự `1234567890` | Đã cắt còn 10 ký tự | **PASSED** | Chặn độ dài hợp lệ |
| **TC-RESET-001** | Clear xóa Answer & reset Integers only | Bấm `Clear` sau khi tính toán | Answer rỗng, checkbox uncheck | Answer rỗng, checkbox uncheck | **PASSED** | Reset giao diện đúng |
| **TC-RESET-002** | Clear xóa thông báo lỗi | Bấm `Clear` khi đang có thông báo lỗi | Vùng thông báo lỗi bị xóa rỗng | Vùng thông báo lỗi bị xóa rỗng | **PASSED** | Xóa lỗi đúng |
| **TC-RESET-003** | Nút vô hiệu hóa trong khi tính | Bấm `Calculate`, quan sát trạng thái | Nút bị disabled khi tính, enabled lại sau | Trạng thái hiển thị đúng | **PASSED** | Chặn double click đúng |

---

## 4. Phân tích nguyên nhân khiếm khuyết (Defect Analysis - Root Cause)

### 🔴 Defect 1: Build 3 không cho phép ghép chuỗi chữ cái (`TC-CONCAT-002`)
- **Mã nguồn lỗi**:
  ```javascript
  function setIfMathematical() {
    var selection = document.getElementById('selectOperationDropdown').value;
    if (selectedBuild != 3) {
      isNumber = (selection != 4);
    } else {
      isNumber = true; // BUG: Trên Build 3 luôn gán isNumber = true!
    }
  }
  ```
- **Hậu quả**: Khi người dùng chọn *Concatenate* (selection = 4), biến `isNumber` vẫn là `true`, dẫn đến hàm `calculate()` kiểm tra `isNaN("Hello")` và báo lỗi *"Number 1 is not a number"*.

### 🔴 Defect 2: Checkbox "Integers only" không bị ẩn khi chọn Concatenate (`TC-CONCAT-003`)
- **Hậu quả**: Do `isNumber` luôn là `true`, hàm `setFieldStatus()` không kích hoạt nhánh ẩn và vô hiệu hóa checkbox `Integers only`. Người dùng vẫn có thể tích chọn làm tròn số nguyên ngay cả khi đang muốn ghép chuỗi.

### 🔴 Defect 3: Thiếu kiểm tra chuỗi rỗng (`TC-VAL-003`)
- **Hậu quả**: JavaScript xem `isNaN("") === false` và chuyển chuỗi rỗng thành số `0`. Hệ thống không bắt lỗi thiếu dữ liệu đầu vào mà tự động tính toán sai lệch so với yêu cầu.
