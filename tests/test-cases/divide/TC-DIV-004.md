# TC-DIV-004: Chia số 0 cho một số khác 0

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Division / Functional / Boundary Value Analysis

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| First number | 0 |
| Second number | 15 |
| Operation | Divide |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Nhập "0" vào trường "First number"
4. Nhập "15" vào trường "Second number"
5. Chọn Operation là "Divide"
6. Bấm nút "Calculate"

## Expected result
- Trường Answer hiển thị giá trị "0".
- Không có thông báo lỗi.

## Status / Related bugs
Not Run / None
