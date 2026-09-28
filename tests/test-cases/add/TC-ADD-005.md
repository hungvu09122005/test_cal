# TC-ADD-005: Cộng hai số thập phân với tùy chọn Integers only

## Requirement ID
FR-CALC-01, FR-CALC-06

## Module / Test type / Technique
Addition / Functional / Equivalence Partitioning

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| First number | 10.4 |
| Second number | 5.3 |
| Operation | Add |
| Integers only | Checked |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Nhập "10.4" vào trường "First number"
4. Nhập "5.3" vào trường "Second number"
5. Chọn Operation là "Add"
6. Tích chọn checkbox "Integers only"
7. Bấm nút "Calculate"

## Expected result
- Phép tính 10.4 + 5.3 = 15.7 được làm tròn/cắt phần nguyên thành "15" trong trường Answer.
- Không có thông báo lỗi.

## Status / Related bugs
Not Run / None
