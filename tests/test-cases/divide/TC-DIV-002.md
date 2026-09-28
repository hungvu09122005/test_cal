# TC-DIV-002: Chia không hết cho kết quả số thập phân

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Division / Functional / Equivalence Partitioning

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| First number | 10 |
| Second number | 4 |
| Operation | Divide |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Nhập "10" vào trường "First number"
4. Nhập "4" vào trường "Second number"
5. Chọn Operation là "Divide"
6. Bấm nút "Calculate"

## Expected result
- Trường Answer hiển thị giá trị "2.5".
- Không có thông báo lỗi.

## Status / Related bugs
Not Run / None
