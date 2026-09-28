# TC-CONCAT-003: Kiểm tra ẩn tùy chọn Integers only khi chọn Concatenate

## Requirement ID
FR-CALC-05, FR-CALC-06

## Module / Test type / Technique
Concatenate / UI & Functional / State Transition Testing

## Preconditions
- Trình duyệt đã mở trang https://testsheepnz.github.io/BasicCalculator.html
- Trường Build đang chọn "Prototype"

## Test data
| Operation | Concatenate |

## Test steps
1. Mở trang Basic Calculator
2. Quan sát checkbox "Integers only" khi Operation đang là "Add" (hiển thị bình thường)
3. Chuyển chọn Operation sang "Concatenate"

## Expected result
- Checkbox "Integers only" và nhãn "Integers only" bị ẩn (hidden = true) và vô hiệu hóa (disabled = true).
- Nếu checkbox trước đó đang được chọn, hệ thống tự động bỏ chọn (checked = false).

## Status / Related bugs
Not Run / None
