# TC-VAL-001: Báo lỗi khi First number không phải là số trong phép tính số học

## Requirement ID
FR-CALC-07

## Module / Test type / Technique
Validation / Negative Testing / Error Guessing

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| First number | abc |
| Second number | 10 |
| Operation | Add |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Nhập chuỗi ký tự chữ "abc" vào trường "First number"
4. Nhập "10" vào trường "Second number"
5. Chọn Operation là "Add"
6. Bấm nút "Calculate"

## Expected result
- Hiển thị thông báo lỗi màu đỏ: "Number 1 is not a number".
- Nút Calculate và Clear được mở khóa trở lại sau khi thông báo lỗi.

## Status / Related bugs
Not Run / None
