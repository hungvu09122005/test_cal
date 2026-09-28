# TC-ADD-004: Cộng với số 0

## Requirement ID
FR-CALC-01

## Module / Test type / Technique
Addition / Functional / Boundary Value Analysis

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| First number | 0 |
| Second number | 50 |
| Operation | Add |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Nhập "0" vào trường "First number"
4. Nhập "50" vào trường "Second number"
5. Chọn Operation là "Add"
6. Bấm nút "Calculate"

## Expected result
- Trường Answer hiển thị giá trị "50".
- Không có thông báo lỗi.

## Status / Related bugs
Not Run / None
