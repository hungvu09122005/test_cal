# TC-BUILD-008: Phát hiện khiếm khuyết hoán vị số thứ nhất và số thứ hai trên Build 8

## Requirement ID
FR-CALC-09, FR-CALC-02, FR-CALC-04, FR-CALC-05, FR-CALC-07

## Module / Test type / Technique
Build / Regression & Defect Detection / Equivalence Partitioning & Error Guessing

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html

## Test data
| Build | 8 |
| Phép trừ | First = 50, Second = 20 |
| Phép chia | First = 100, Second = 4 |
| Phép chia cho 0 | First = 0, Second = 15 |
| Ghép chuỗi | First = Hello, Second = World |
| Validation | First = abc, Second = 10 |

## Test steps
1. Mở trang Basic Calculator, chọn Build là "8".
2. Thực hiện phép trừ: First = 50, Second = 20 -> Bấm Calculate.
3. Thực hiện phép chia: First = 100, Second = 4 -> Bấm Calculate.
4. Thực hiện phép chia: First = 0, Second = 15 -> Bấm Calculate.
5. Thực hiện ghép chuỗi: First = Hello, Second = World -> Bấm Calculate.
6. Thực hiện kiểm tra lỗi: First = abc, Second = 10 -> Bấm Calculate.

## Expected result
- **Kỳ vọng chuẩn**:
  - Trừ: 50 - 20 = 30.
  - Chia: 100 / 4 = 25.
  - Chia: 0 / 15 = 0 (không có lỗi).
  - Ghép chuỗi: "HelloWorld".
  - Validation: Báo lỗi "Number 1 is not a number".
- **Thực tế kiểm tra Build 8**:
  - Build 8 hoán đổi vị trí của `num1` và `num2` trước khi xử lý:
    - Trừ: Bị tính thành 20 - 50 = `-30`.
    - Chia: Bị tính thành 4 / 100 = `0.04`.
    - Chia cho 0: Bị tính thành 15 / 0 -> Báo lỗi `Divide by zero error!`.
    - Ghép chuỗi: Bị ghép thành `WorldHello`.
    - Validation: Báo lỗi `Number 2 is not a number`.
  - Xác định được lỗi nghiêm trọng **BUG-CALC-008**.

## Status / Related bugs
Pass (Defect Confirmed) / BUG-CALC-008
