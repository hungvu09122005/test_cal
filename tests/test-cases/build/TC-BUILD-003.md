# TC-BUILD-003: Phát hiện khiếm khuyết đảo ngược phép cộng và ghép chuỗi trên Build 2

## Requirement ID
FR-CALC-09, FR-CALC-01, FR-CALC-05

## Module / Test type / Technique
Build / Regression & Defect Detection / Equivalence Partitioning

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html

## Test data
| Build | 2 |
| First number | 10 |
| Second number | 20 |
| Operation | Add |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "2"
3. Nhập "10" vào First number và "20" vào Second number
4. Chọn Operation "Add"
5. Bấm "Calculate"

## Expected result
- **Kỳ vọng chuẩn**: Phép cộng (Add) phải ra kết quả số học là "30".
- **Thực tế kiểm tra Build 2**: Build 2 hoán đổi logic giữa Add và Concatenate, dẫn tới phép Add cho ra kết quả ghép chuỗi "1020". Xác định được bug trên Build 2.

## Status / Related bugs
Not Run / None
