# TC-VAL-002: Báo lỗi khi Second number không phải là số trong phép tính số học

## Requirement ID
FR-CALC-07

## Module / Test type / Technique
Validation / Negative Testing / Error Guessing

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| First number | 20 |
| Second number | xyz |
| Operation | Multiply |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Nhập "20" vào trường "First number"
4. Nhập chuỗi ký tự chữ "xyz" vào trường "Second number"
5. Chọn Operation là "Multiply"
6. Bấm nút "Calculate"

## Expected result
- Hiển thị thông báo lỗi màu đỏ: "Number 2 is not a number".
- Không thực hiện tính toán.

## Status / Related bugs
Not Run / None
