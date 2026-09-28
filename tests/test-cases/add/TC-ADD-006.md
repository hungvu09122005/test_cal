# TC-ADD-006: Cộng giá trị biên đạt giới hạn 10 chữ số

## Requirement ID
FR-CALC-01, FR-CALC-07

## Module / Test type / Technique
Addition / Functional / Boundary Value Analysis

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| First number | 9999999999 |
| Second number | 1 |
| Operation | Add |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Nhập "9999999999" (10 chữ số) vào trường "First number"
4. Nhập "1" vào trường "Second number"
5. Chọn Operation là "Add"
6. Bấm nút "Calculate"

## Expected result
- Trường Answer hiển thị kết quả chính xác "10000000000".
- Không phát sinh lỗi tràn số ngoài mong muốn.

## Status / Related bugs
Not Run / None
