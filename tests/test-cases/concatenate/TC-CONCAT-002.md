# TC-CONCAT-002: Ghép chuỗi chứa chữ cái và ký tự đặc biệt

## Requirement ID
FR-CALC-05

## Module / Test type / Technique
Concatenate / Functional / Equivalence Partitioning

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| First number | Hello |
| Second number | _World! |
| Operation | Concatenate |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Nhập "Hello" vào trường "First number"
4. Nhập "_World!" vào trường "Second number"
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
- Hệ thống không kiểm tra tính hợp lệ số (cho phép nhập chữ cái và ký tự đặc biệt).
- Trường Answer hiển thị giá trị chuỗi "Hello_World!".
- Không có thông báo lỗi xuất hiện.

## Status / Related bugs
Not Run / None
