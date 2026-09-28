# TC-BUILD-004: Phát hiện khiếm khuyết không kiểm tra chia cho 0 trên Build 6

## Requirement ID
FR-CALC-09, FR-CALC-04

## Module / Test type / Technique
Build / Regression & Defect Detection / Boundary Value Analysis

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html

## Test data
| Build | 6 |
| First number | 50 |
| Second number | 0 |
| Operation | Divide |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "6"
3. Nhập "50" vào First number và "0" vào Second number
4. Chọn Operation "Divide"
5. Bấm "Calculate"

## Expected result
- **Kỳ vọng chuẩn**: Phải báo lỗi "Divide by zero error!".
- **Thực tế kiểm tra Build 6**: Build 6 không kiểm tra điều kiện chia cho 0 (bỏ qua điều kiện kiểm tra), dẫn đến kết quả trả về là "Infinity" thay vì báo lỗi. Xác định được bug trên Build 6.

## Status / Related bugs
Not Run / None
