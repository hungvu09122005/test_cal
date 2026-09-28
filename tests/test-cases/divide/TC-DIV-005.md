# TC-DIV-005: Chia với tùy chọn Integers only

## Requirement ID
FR-CALC-04, FR-CALC-06

## Module / Test type / Technique
Division / Functional / Equivalence Partitioning

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| First number | 7 |
| Second number | 2 |
| Operation | Divide |
| Integers only | Checked |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Nhập "7" vào trường "First number"
4. Nhập "2" vào trường "Second number"
5. Chọn Operation là "Divide"
6. Tích chọn checkbox "Integers only"
7. Bấm nút "Calculate"

## Expected result
- Phép tính 7 / 2 = 3.5 được lấy phần nguyên thành "3" trong trường Answer.
- Không có thông báo lỗi.

## Status / Related bugs
Not Run / None
