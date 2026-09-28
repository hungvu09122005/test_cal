# TC-SUB-004: Trừ hai số bằng nhau cho kết quả bằng 0

## Requirement ID
FR-CALC-02

## Module / Test type / Technique
Subtraction / Functional / Boundary Value Analysis

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| First number | 99 |
| Second number | 99 |
| Operation | Subtract |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Nhập "99" vào trường "First number"
4. Nhập "99" vào trường "Second number"
5. Chọn Operation là "Subtract"
6. Bấm nút "Calculate"

## Expected result
- Trường Answer hiển thị giá trị "0".
- Không có thông báo lỗi.

## Status / Related bugs
Not Run / None
