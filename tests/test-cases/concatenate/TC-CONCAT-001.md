# TC-CONCAT-001: Ghép hai chuỗi số nguyên

## Requirement ID
FR-CALC-05

## Module / Test type / Technique
Concatenate / Functional / Equivalence Partitioning

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| First number | 123 |
| Second number | 456 |
| Operation | Concatenate |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Nhập "123" vào trường "First number"
4. Nhập "456" vào trường "Second number"
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
- Trường Answer hiển thị giá trị chuỗi nối liền: "123456".
- Không thực hiện phép cộng số học 579.
- Không có thông báo lỗi.

## Status / Related bugs
Not Run / None
