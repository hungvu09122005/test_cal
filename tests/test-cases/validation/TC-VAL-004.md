# TC-VAL-004: Kiểm tra giới hạn tối đa 10 ký tự của trường nhập liệu

## Requirement ID
FR-CALC-07

## Module / Test type / Technique
Validation / Functional / Boundary Value Analysis

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| Chuỗi nhập 11 ký tự | 12345678901 |

## Test steps
1. Mở trang Basic Calculator
2. Nhập chuỗi gồm 11 ký tự số "12345678901" vào trường "First number"
3. Nhập chuỗi gồm 11 ký tự số "12345678901" vào trường "Second number"

## Expected result
- Cả hai trường đều có thuộc tính maxlength="10".
- Người dùng chỉ có thể nhập tối đa 10 ký tự ("1234567890"), ký tự thứ 11 bị chặn không cho nhập tiếp.

## Status / Related bugs
Not Run / None
