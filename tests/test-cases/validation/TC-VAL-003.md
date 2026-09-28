# TC-VAL-003: Báo lỗi khi để trống trường First number trong phép tính số học

## Requirement ID
FR-CALC-07

## Module / Test type / Technique
Validation / Negative Testing / Boundary Value Analysis

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| First number | (Để trống) |
| Second number | 5 |
| Operation | Subtract |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Để trống trường "First number"
4. Nhập "5" vào trường "Second number"
5. Chọn Operation là "Subtract"
6. Bấm nút "Calculate"

## Expected result
- Phép tính số học không thực hiện được khi thiếu toán hạng 1.
- Hiển thị thông báo lỗi "Number 1 is not a number" (hoặc xử lý theo quy định validation của hệ thống).

## Status / Related bugs
Not Run / None
