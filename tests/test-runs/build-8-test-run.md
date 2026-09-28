# Báo cáo thực thi kiểm thử (Test Run) - Build 8

## Thông tin đợt kiểm thử (Overview)
- **Dự án**: Basic Calculator Web Testing
- **URL ứng dụng**: https://testsheepnz.github.io/BasicCalculator.html
- **Phiên bản kiểm thử**: Build 8
- **Ngày thực thi**: 2026-09-28
- **Người kiểm thử**: QA Team (Hùng)
- **Môi trường**: Chrome / Playwright Automation & Manual Verification

---

## Bảng kết quả thực thi (Test Run Execution Matrix)

> **Quy định**: Khi `Result = Fail` hoặc `Blocked` ➔ bắt buộc phải có `Related Bug` hoặc lý do rõ ràng.

| Test Case ID | Module | Tester | Result | Related Bug | Note |
|:---|:---|:---:|:---:|:---:|:---|
| **TC-ADD-001** | Addition | Hùng | Pass | | 15 + 25 = 40 (Bảo toàn do tính chất giao hoán a + b = b + a) |
| **TC-ADD-002** | Addition | Hùng | Pass | | 12.35 + 7.65 = 20 (Giao hoán bảo toàn) |
| **TC-ADD-003** | Addition | Hùng | Pass | | -30 + 10 = -20 (Giao hoán bảo toàn) |
| **TC-ADD-004** | Addition | Hùng | Pass | | 0 + 50 = 50 (Giao hoán bảo toàn) |
| **TC-ADD-005** | Addition | Hùng | Pass | | 10.4 + 5.3 = 15 (Giao hoán bảo toàn) |
| **TC-ADD-006** | Addition | Hùng | Pass | | 9999999999 + 1 = 10000000000 (Giao hoán bảo toàn) |
| **TC-SUB-001** | Subtraction | Hùng | Fail | #BUG-CALC-008 | 50 - 20 bị hoán đổi thành 20 - 50 = -30 |
| **TC-SUB-002** | Subtraction | Hùng | Fail | #BUG-CALC-008 | 15 - 40 bị hoán đổi thành 40 - 15 = 25 |
| **TC-SUB-003** | Subtraction | Hùng | Fail | #BUG-CALC-008 | 10.5 - 3.2 bị hoán đổi thành 3.2 - 10.5 = -7.3 |
| **TC-SUB-004** | Subtraction | Hùng | Pass | | 99 - 99 = 0 (Trùng hợp đúng do hai số bằng nhau) |
| **TC-MUL-001** | Multiplication | Hùng | Pass | | 7 * 8 = 56 (Bảo toàn do tính chất giao hoán a * b = b * a) |
| **TC-MUL-002** | Multiplication | Hùng | Pass | | 125 * 0 = 0 (Giao hoán bảo toàn) |
| **TC-MUL-003** | Multiplication | Hùng | Pass | | -6 * 9 = -54 (Giao hoán bảo toàn) |
| **TC-MUL-004** | Multiplication | Hùng | Pass | | 3.5 * 3 = 10 (Giao hoán bảo toàn) |
| **TC-DIV-001** | Division | Hùng | Fail | #BUG-CALC-008 | 100 / 4 bị hoán đổi thành 4 / 100 = 0.04 |
| **TC-DIV-002** | Division | Hùng | Fail | #BUG-CALC-008 | 10 / 4 bị hoán đổi thành 4 / 10 = 0.4 |
| **TC-DIV-003** | Division | Hùng | Fail | #BUG-CALC-008 | 25 / 0 bị hoán đổi thành 0 / 25 = 0, không bắt được lỗi chia cho 0 |
| **TC-DIV-004** | Division | Hùng | Fail | #BUG-CALC-008 | 0 / 15 bị hoán đổi thành 15 / 0 gây ra Divide by zero error sai |
| **TC-DIV-005** | Division | Hùng | Fail | #BUG-CALC-008 | 7 / 2 (Integers only) bị hoán đổi thành 2 / 7 = 0 |
| **TC-CONCAT-001** | Concatenate | Hùng | Fail | #BUG-CALC-008 | '123' + '456' bị ghép ngược thứ tự thành '456123' |
| **TC-CONCAT-002** | Concatenate | Hùng | Fail | #BUG-CALC-008 | 'Hello' + '_World!' bị ghép ngược thành '_World!Hello' |
| **TC-CONCAT-003** | Concatenate | Hùng | Pass | | Checkbox Integers only bị ẩn đúng quy định |
| **TC-VAL-001** | Validation | Hùng | Fail | #BUG-CALC-008 | Nhập 'abc' ở First number nhưng báo lỗi 'Number 2 is not a number' |
| **TC-VAL-002** | Validation | Hùng | Fail | #BUG-CALC-008 | Nhập 'xyz' ở Second number nhưng báo lỗi 'Number 1 is not a number' |
| **TC-VAL-003** | Validation | Hùng | Fail | #BUG-CALC-VAL | Để trống First number hệ thống tính ra 5 mà không validate lỗi |
| **TC-VAL-004** | Validation | Hùng | Pass | | Giới hạn tối đa 10 ký tự (maxlength=10) hoạt động đúng |
| **TC-RESET-001** | Reset | Hùng | Pass | | Nút Clear hoạt động bình thường trên Build 8, xóa kết quả Answer |
| **TC-RESET-002** | Reset | Hùng | Fail | #BUG-CALC-008 | 10 / 0 bị hoán đổi thành 0 / 10 = 0 nên không tạo ra lỗi chia 0 để test xóa lỗi |
| **TC-RESET-003** | Reset | Hùng | Pass | | Trạng thái Calculating... và disabled nút trong lúc tính hoạt động đúng |
| **TC-BUILD-008** | Build | Hùng | Pass | #BUG-CALC-008 | Xác nhận lỗi hoán vị toàn bộ 2 toán hạng First và Second (Defect Confirmed) |

---

## Thống kê trạng thái kiểm thử Build 8 (Summary)
- **Tổng số test cases**: 30 (29 module + 1 build verification)
- **Pass**: 15 (50%)
- **Fail**: 15 (50%)
- **Blocked**: 0
- **Nguyên nhân chính**: Khiếm khuyết nghiêm trọng `#BUG-CALC-008` (hoán đổi vị trí First number và Second number) làm hỏng tất cả các phép toán không giao hoán (Trừ, Chia, Ghép chuỗi và Báo sai vị trí lỗi Validation).
