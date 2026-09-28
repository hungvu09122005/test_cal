# Sprint 2 Regression Test Run - Build Variations (Builds 1 - 9)

## Overview
- **Project**: Basic Calculator Web Testing
- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html
- **Builds Under Test**: Builds 1 to 9 (Defect Identification)
- **Execution Date**: 2026-09-28
- **Tester**: QA Team
- **Environment**: Chrome / macOS

## Regression & Defect Verification Matrix

| Test Case ID | Target Build | Bug Description Expected | Actual Behavior | Result | Bug Ticket |
|:---|:---:|:---|:---|:---:|:---:|
| **TC-BUILD-001** | Prototype (0) | Chạy chuẩn xác mọi tính năng | Tất cả tính năng hoạt động chính xác | Pass | None |
| **TC-BUILD-002** | Build 1 | Bỏ qua kiểm tra số hợp lệ (non-number check) | Cho phép chuỗi ký tự chữ tính toán, Answer = NaN | Defect Found | BUG-CALC-001 |
| **TC-BUILD-003** | Build 2 | Đảo ngược phép Add và Concatenate | Chọn Add thì ghép chuỗi, chọn Concatenate thì cộng số | Defect Found | BUG-CALC-002 |
| **TC-BUILD-004** | Build 3 | Luôn xử lý dạng số kể cả khi chọn Concatenate | Không cho phép ghép chuỗi tự do dạng text | Defect Found | BUG-CALC-003 |
| **TC-BUILD-005** | Build 4 | Luôn khóa chế độ Integers only (không tắt được) | Checkbox Integers only bị tick và disabled vĩnh viễn | Defect Found | BUG-CALC-004 |
| **TC-BUILD-006** | Build 5 | Nút Clear bị vô hiệu hóa | Nút Clear luôn ở trạng thái disabled | Defect Found | BUG-CALC-005 |
| **TC-BUILD-007** | Build 6 | Không bắt lỗi chia cho 0 | Phép chia cho 0 trả về Infinity thay vì báo lỗi | Defect Found | BUG-CALC-006 |
| **TC-BUILD-008** | Build 7 | Dùng Answer cũ làm toán hạng 1 thay vì First number | Kết quả phép tính lấy Answer cũ làm số thứ nhất | Defect Found | BUG-CALC-007 |
| **TC-BUILD-009** | Build 8 | Đảo ngược vị trí số thứ nhất và số thứ hai | num1 và num2 bị hoán đổi (ảnh hưởng phép trừ, chia) | Defect Found | BUG-CALC-008 |
| **TC-BUILD-010** | Build 9 | Ẩn mất trường First number/Calculate | Form bị biến mất các phần tử quan trọng | Defect Found | BUG-CALC-009 |

## Summary
- **Total Builds Tested**: 10 (Prototype + Builds 1-9)
- **Prototype Status**: Healthy (100% Passed)
- **Defects Discovered**: 9 deliberate bugs identified across Builds 1-9 as designed.
