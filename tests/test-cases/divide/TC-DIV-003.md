# TC-DIV-003: Chia cho 0 hiển thị thông báo lỗi

## Requirement ID
FR-CALC-04

## Module / Test type / Technique
Division / Functional / Boundary Value Analysis / Error Guessing

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| First number | 25 |
| Second number | 0 |
| Operation | Divide |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Nhập "25" vào trường "First number"
4. Nhập "0" vào trường "Second number"
5. Chọn Operation là "Divide"
6. Bấm nút "Calculate"

## Expected result
- Xuất hiện thông báo lỗi màu đỏ tại vùng lỗi: "Divide by zero error!".
- Không hiển thị giá trị kết quả trong trường Answer hoặc giữ nguyên trạng thái cũ.

## Status / Related bugs
Not Run / None
