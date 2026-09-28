# TC-BUILD-005: Phát hiện khiếm khuyết nút Clear bị vô hiệu hóa trên Build 5

## Requirement ID
FR-CALC-09, FR-CALC-08

## Module / Test type / Technique
Build / Regression & Defect Detection / State Transition Testing

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html

## Test data
| Build | 5 |
| First number | 20 |
| Second number | 30 |
| Operation | Add |

## Test steps
1. Mở trang Basic Calculator.
2. Tại trường Build, chọn "5".
3. Quan sát ngay trạng thái của nút "Clear".
4. Nhập First number = 20, Second number = 30, chọn Operation = "Add", bấm "Calculate".
5. Kiểm tra kết quả hiển thị tại Answer.
6. Thử thao tác với nút "Clear" để xóa dữ liệu.

## Expected result
- **Kỳ vọng chuẩn**: Nút "Clear" phải luôn ở trạng thái sẵn sàng (disabled = false) để người dùng có thể xóa kết quả hoặc đặt lại trạng thái form.
- **Thực tế kiểm tra Build 5**: Nút "Clear" bị vô hiệu hóa (disabled = true) ngay khi chọn Build 5, ngăn người dùng thao tác xóa form. Xác định được lỗi **BUG-CALC-005**.

## Status / Related bugs
Pass (Defect Confirmed) / BUG-CALC-005
