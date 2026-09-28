# TC-BUILD-002: Phát hiện khiếm khuyết không kiểm tra số hợp lệ trên Build 1

## Requirement ID
FR-CALC-09, FR-CALC-07

## Module / Test type / Technique
Build / Regression & Defect Detection / Error Guessing

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html

## Test data
| Build | 1 |
| First number | abc |
| Second number | 10 |
| Operation | Add |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "1"
3. Nhập "abc" vào First number và "10" vào Second number
4. Chọn Operation "Add" và bấm "Calculate"

## Expected result
- **Kỳ vọng chuẩn**: Hệ thống phải chặn và báo lỗi "Number 1 is not a number".
- **Thực tế kiểm tra Build 1**: Build 1 bỏ qua bước kiểm tra số (selectedBuild != 1 bị vi phạm), dẫn đến Answer hiển thị "NaN" thay vì thông báo lỗi hợp lệ. Xác định được bug trên Build 1.

## Status / Related bugs
Not Run / None
