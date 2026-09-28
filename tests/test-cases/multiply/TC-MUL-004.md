# TC-MUL-004: Nhân số thập phân với tùy chọn Integers only

## Requirement ID
FR-CALC-03, FR-CALC-06

## Module / Test type / Technique
Multiplication / Functional / Equivalence Partitioning

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| First number | 3.5 |
| Second number | 3 |
| Operation | Multiply |
| Integers only | Checked |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Nhập "3.5" vào trường "First number"
4. Nhập "3" vào trường "Second number"
5. Chọn Operation là "Multiply"
6. Tích chọn checkbox "Integers only"
7. Bấm nút "Calculate"

## Expected result
- Phép tính 3.5 * 3 = 10.5 được làm tròn thành số nguyên "10" trong trường Answer.
- Không có thông báo lỗi.

## Status / Related bugs
Not Run / None
