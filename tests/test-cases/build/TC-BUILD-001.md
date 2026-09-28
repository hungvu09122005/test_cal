# TC-BUILD-001: Kiểm tra tính đúng đắn trên phiên bản Prototype

## Requirement ID
FR-CALC-09

## Module / Test type / Technique
Build / Smoke & Functional / Equivalence Partitioning

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html

## Test data
| Build | Prototype (0) |
| First number | 10 |
| Second number | 2 |
| Operations | Add, Subtract, Multiply, Divide, Concatenate |

## Test steps
1. Mở trang Basic Calculator
2. Chọn Build là "Prototype"
3. Lần lượt thực hiện các phép toán với First number = 10 và Second number = 2:
   - Add -> Answer = 12
   - Subtract -> Answer = 8
   - Multiply -> Answer = 20
   - Divide -> Answer = 5
   - Concatenate -> Answer = 102

## Expected result
- Tất cả các phép toán trên bản Prototype đều cho kết quả chính xác, các validation và nút Clear hoạt động hoàn hảo.

## Status / Related bugs
Not Run / None
