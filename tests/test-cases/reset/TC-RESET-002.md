# TC-RESET-002: Xóa thông báo lỗi khi bấm nút Clear

## Requirement ID
FR-CALC-08

## Module / Test type / Technique
Reset / Functional / State Transition Testing

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Đang có thông báo lỗi hiển thị trên màn hình (ví dụ lỗi chia cho 0)

## Test data
| First number | 10 |
| Second number | 0 |
| Operation | Divide |

## Test steps
1. Nhập "10" vào First number, "0" vào Second number, chọn "Divide", bấm "Calculate" để làm xuất hiện lỗi "Divide by zero error!"
2. Bấm nút "Clear"

## Expected result
- Thông báo lỗi tại vùng thông báo bị xóa hoàn toàn (trở thành chuỗi rỗng).

## Status / Related bugs
Not Run / None
