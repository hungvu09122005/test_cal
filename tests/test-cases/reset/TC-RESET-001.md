# TC-RESET-001: Xóa kết quả Answer và uncheck checkbox Integers only khi bấm Clear

## Requirement ID
FR-CALC-08

## Module / Test type / Technique
Reset / Functional / State Transition Testing

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Đã thực hiện một phép tính thành công có kết quả trong Answer và checkbox Integers only đang được tích chọn

## Test data
| Trạng thái Answer | Đang có giá trị |
| Trạng thái Integers only | Đang checked |

## Test steps
1. Thực hiện phép tính cộng: First number = 8.5, Second number = 1.5, tích chọn "Integers only", bấm "Calculate"
2. Kiểm tra Answer đang hiển thị "10" và checkbox "Integers only" đang chọn
3. Bấm nút "Clear"

## Expected result
- Trường "Answer" được xóa trống (rỗng).
- Checkbox "Integers only" tự động chuyển về trạng thái bỏ chọn (unchecked).

## Status / Related bugs
Not Run / None
