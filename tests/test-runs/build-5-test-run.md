# Báo cáo thực thi kiểm thử (Test Run) - Build 5

## Thông tin đợt kiểm thử (Overview)
- **Dự án**: Basic Calculator Web Testing
- **URL ứng dụng**: https://testsheepnz.github.io/BasicCalculator.html
- **Phiên bản kiểm thử**: Build 5
- **Ngày thực thi**: 2026-09-28
- **Người kiểm thử**: QA Team (Hùng)
- **Môi trường**: Chrome / Playwright Automation & Manual Verification

---

## Bảng kết quả thực thi (Test Run Execution Matrix)

> **Quy định**: Khi `Result = Fail` hoặc `Blocked` ➔ bắt buộc phải có `Related Bug` hoặc lý do rõ ràng.

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|:---|:---|:---:|:---:|:---:|:---|
| **TC-ADD-001** | Addition | Hùng | Pass | | Cộng hai số nguyên dương (15 + 25 = 40) chính xác |
| **TC-ADD-002** | Addition | Hùng | Pass | | Cộng hai số thập phân (12.35 + 7.65 = 20) chính xác |
| **TC-ADD-003** | Addition | Hùng | Pass | | Cộng số âm và số dương (-30 + 10 = -20) chính xác |
| **TC-ADD-004** | Addition | Hùng | Pass | | Cộng với số 0 (0 + 50 = 50) chính xác |
| **TC-ADD-005** | Addition | Hùng | Pass | | Cộng với Integers only (10.4 + 5.3 = 15) chính xác |
| **TC-ADD-006** | Addition | Hùng | Pass | | Cộng giá trị biên 10 chữ số chính xác |
| **TC-SUB-001** | Subtraction | Hùng | Pass | | Trừ hai số nguyên dương (50 - 20 = 30) chính xác |
| **TC-SUB-002** | Subtraction | Hùng | Pass | | Trừ cho kết quả âm (15 - 40 = -25) chính xác |
| **TC-SUB-003** | Subtraction | Hùng | Pass | | Trừ hai số thập phân (10.5 - 3.2 = 7.3) chính xác |
| **TC-SUB-004** | Subtraction | Hùng | Pass | | Trừ hai số bằng nhau (99 - 99 = 0) chính xác |
| **TC-MUL-001** | Multiplication | Hùng | Pass | | Nhân hai số nguyên dương (7 * 8 = 56) chính xác |
| **TC-MUL-002** | Multiplication | Hùng | Pass | | Nhân với số 0 (125 * 0 = 0) chính xác |
| **TC-MUL-003** | Multiplication | Hùng | Pass | | Nhân số âm với số dương (-6 * 9 = -54) chính xác |
| **TC-MUL-004** | Multiplication | Hùng | Pass | | Nhân thập phân với Integers only (3.5 * 3 = 10) chính xác |
| **TC-DIV-001** | Division | Hùng | Pass | | Chia hết hai số nguyên dương (100 / 4 = 25) chính xác |
| **TC-DIV-002** | Division | Hùng | Pass | | Chia ra số thập phân (10 / 4 = 2.5) chính xác |
| **TC-DIV-003** | Division | Hùng | Pass | | Chia cho 0 hiển thị 'Divide by zero error!' chính xác |
| **TC-DIV-004** | Division | Hùng | Pass | | Chia số 0 cho số khác (0 / 15 = 0) chính xác |
| **TC-DIV-005** | Division | Hùng | Pass | | Chia với Integers only (7 / 2 = 3) chính xác |
| **TC-CONCAT-001** | Concatenate | Hùng | Pass | | Ghép chuỗi số ('123' + '456' = '123456') chính xác |
| **TC-CONCAT-002** | Concatenate | Hùng | Pass | | Ghép chuỗi ký tự ('Hello' + '_World!') chính xác |
| **TC-CONCAT-003** | Concatenate | Hùng | Pass | | Checkbox Integers only bị ẩn đúng quy định |
| **TC-VAL-001** | Validation | Hùng | Pass | | Báo lỗi khi First number là chữ ('Number 1 is not a number') |
| **TC-VAL-002** | Validation | Hùng | Pass | | Báo lỗi khi Second number là chữ ('Number 2 is not a number') |
| **TC-VAL-003** | Validation | Hùng | Fail | #BUG-CALC-VAL | Để trống First number hệ thống không báo lỗi mà tự tính 0 - 5 = -5 |
| **TC-VAL-004** | Validation | Hùng | Pass | | Giới hạn tối đa 10 ký tự (maxlength=10) hoạt động đúng |
| **TC-RESET-001** | Reset | Hùng | Blocked | #BUG-CALC-005 | Nút Clear bị vô hiệu hóa (disabled) ngay khi chọn Build 5, chặn thao tác xóa dữ liệu ban đầu |
| **TC-RESET-002** | Reset | Hùng | Fail | #BUG-CALC-RESET | Sau phép chia cho 0, nút Clear bị khóa vĩnh viễn (disabled), không bấm được để xóa thông báo lỗi |
| **TC-RESET-003** | Reset | Hùng | Pass | | Trạng thái Calculating... và disabled nút trong lúc tính hoạt động đúng |
| **TC-BUILD-005** | Build | Hùng | Pass | #BUG-CALC-005 | Xác nhận khiếm khuyết nút Clear bị vô hiệu hóa (Defect Confirmed) |

---

## Thống kê trạng thái kiểm thử Build 5 (Summary)
- **Tổng số test cases**: 30 (29 module + 1 build verification)
- **Pass**: 27 (90%)
- **Fail**: 2 (6.7%) — `TC-VAL-003`, `TC-RESET-002`
- **Blocked**: 1 (3.3%) — `TC-RESET-001`
- **Các khiếm khuyết ghi nhận**:
  1. `#BUG-CALC-005`: Nút Clear bị disabled ngay khi chọn Build 5.
  2. `#BUG-CALC-RESET`: Nút Clear bị khóa vĩnh viễn sau lỗi chia cho 0.
  3. `#BUG-CALC-VAL`: Không kiểm tra hợp lệ khi trường dữ liệu bị để trống.
