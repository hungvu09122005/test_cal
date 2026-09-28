# TC-RESET-003: Kiểm tra trạng thái nút và loading graphic trong lúc tính toán

## Requirement ID
FR-CALC-08

## Module / Test type / Technique
Reset / UI & Functional / State Transition Testing

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html

## Test data
| First number | 50 |
| Second number | 50 |
| Operation | Add |

## Test steps
1. Nhập "50" vào First number và "50" vào Second number
2. Bấm nút "Calculate" và quan sát giao diện ngay lập tức

## Expected result
- Trong khoảng thời gian hệ thống xử lý tính toán:
  - Nút "Calculate" bị vô hiệu hóa (disabled = true).
  - Nút "Clear" bị vô hiệu hóa (disabled = true).
  - Khối biểu mẫu Answer tạm thời ẩn đi và hiển thị form "Calculating ..." cùng ảnh động waiting.gif.
- Sau khi tính toán xong:
  - Form kết quả Answer xuất hiện trở lại với giá trị "100".
  - Nút "Calculate" và "Clear" được kích hoạt lại (disabled = false).

## Status / Related bugs
Not Run / None
