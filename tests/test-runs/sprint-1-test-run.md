# Sprint 1 Test Run - Basic Calculator (Prototype Build)

## Overview
- **Project**: Basic Calculator Web Testing
- **Target URL**: https://testsheepnz.github.io/BasicCalculator.html
- **Build Under Test**: Prototype (Build 0)
- **Execution Date**: 2026-09-28
- **Tester**: QA Team
- **Environment**: Chrome / macOS

## Test Execution Summary

| Test Case ID | Test Case Title | Module | Status | Notes |
|:---|:---|:---|:---:|:---|
| **TC-ADD-001** | Cộng hai số nguyên dương hợp lệ | Addition | Passed | 15 + 25 = 40 |
| **TC-ADD-002** | Cộng hai số thực (thập phân) hợp lệ | Addition | Passed | 12.35 + 7.65 = 20 |
| **TC-ADD-003** | Cộng số nguyên âm với số nguyên dương | Addition | Passed | -30 + 10 = -20 |
| **TC-ADD-004** | Cộng với số 0 | Addition | Passed | 0 + 50 = 50 |
| **TC-ADD-005** | Cộng hai số thập phân với tùy chọn Integers only | Addition | Passed | 10.4 + 5.3 -> 15 |
| **TC-ADD-006** | Cộng giá trị biên đạt giới hạn 10 chữ số | Addition | Passed | 9999999999 + 1 = 10000000000 |
| **TC-SUB-001** | Trừ hai số nguyên dương cho kết quả dương | Subtraction | Passed | 50 - 20 = 30 |
| **TC-SUB-002** | Trừ số nhỏ cho số lớn cho kết quả âm | Subtraction | Passed | 15 - 40 = -25 |
| **TC-SUB-003** | Trừ hai số thập phân | Subtraction | Passed | 10.5 - 3.2 = 7.3 |
| **TC-SUB-004** | Trừ hai số bằng nhau cho kết quả bằng 0 | Subtraction | Passed | 99 - 99 = 0 |
| **TC-MUL-001** | Nhân hai số nguyên dương | Multiplication | Passed | 7 * 8 = 56 |
| **TC-MUL-002** | Nhân một số với 0 | Multiplication | Passed | 125 * 0 = 0 |
| **TC-MUL-003** | Nhân số âm với số dương | Multiplication | Passed | -6 * 9 = -54 |
| **TC-MUL-004** | Nhân số thập phân với tùy chọn Integers only | Multiplication | Passed | 3.5 * 3 -> 10 |
| **TC-DIV-001** | Chia hết hai số nguyên dương | Division | Passed | 100 / 4 = 25 |
| **TC-DIV-002** | Chia không hết cho kết quả số thập phân | Division | Passed | 10 / 4 = 2.5 |
| **TC-DIV-003** | Chia cho 0 hiển thị thông báo lỗi | Division | Passed | Báo lỗi 'Divide by zero error!' |
| **TC-DIV-004** | Chia số 0 cho một số khác 0 | Division | Passed | 0 / 15 = 0 |
| **TC-DIV-005** | Chia với tùy chọn Integers only | Division | Passed | 7 / 2 -> 3 |
| **TC-CONCAT-001** | Ghép hai chuỗi số nguyên | Concatenate | Passed | '123' + '456' -> '123456' |
| **TC-CONCAT-002** | Ghép chuỗi chứa chữ cái và ký tự đặc biệt | Concatenate | Passed | 'Hello' + '_World!' -> 'Hello_World!' |
| **TC-CONCAT-003** | Kiểm tra ẩn tùy chọn Integers only khi chọn Concatenate | Concatenate | Passed | Checkbox ẩn và disabled |
| **TC-VAL-001** | Báo lỗi khi First number không phải là số | Validation | Passed | Báo lỗi 'Number 1 is not a number' |
| **TC-VAL-002** | Báo lỗi khi Second number không phải là số | Validation | Passed | Báo lỗi 'Number 2 is not a number' |
| **TC-VAL-003** | Báo lỗi khi để trống trường First number | Validation | Passed | Báo lỗi 'Number 1 is not a number' |
| **TC-VAL-004** | Kiểm tra giới hạn tối đa 10 ký tự của trường nhập liệu | Validation | Passed | maxlength=10 chặn ký tự thứ 11 |
| **TC-RESET-001** | Xóa kết quả Answer và uncheck checkbox Integers only | Reset | Passed | Answer rỗng, checkbox uncheck |
| **TC-RESET-002** | Xóa thông báo lỗi khi bấm nút Clear | Reset | Passed | Xóa errorMsgField |
| **TC-RESET-003** | Kiểm tra trạng thái nút và loading graphic trong lúc tính toán | Reset | Passed | Disabled nút, hiển thị calculatingForm |

## Statistics
- **Total Test Cases**: 29
- **Passed**: 29
- **Failed**: 0
- **Blocked / Not Run**: 0
- **Pass Rate**: 100%
