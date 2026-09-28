---
name: Bug report
about: Tạo báo cáo lỗi phát hiện trong quá trình kiểm thử Basic Calculator
title: '[BUG]: Build 1 - Bỏ qua kiểm tra dữ liệu đầu vào, hiển thị NaN thay vì thông báo lỗi'
labels: 'bug'
assignees: ''
---

## Mô tả lỗi (Bug Description)
Build 1 **bỏ qua toàn bộ bước kiểm tra tính hợp lệ của dữ liệu số đầu vào**. Khi người dùng nhập chuỗi ký tự không phải số (ví dụ: `"abc"`, `"xyz"`) hoặc để trống trường nhập liệu trong các phép tính số học (Add, Subtract, Multiply, Divide), hệ thống vẫn thực hiện tính toán và trả về `NaN` trong ô Answer thay vì hiển thị thông báo lỗi hợp lệ. Hành vi này vi phạm yêu cầu FR-CALC-07 và không nhất quán với Prototype.

## Mã Test Case liên quan (Related Test Case ID)
- TC-VAL-001 — Báo lỗi khi First number không phải là số
- TC-VAL-002 — Báo lỗi khi Second number không phải là số
- TC-VAL-003 — Báo lỗi khi để trống trường First number
- TC-BUILD-002 — Phát hiện khiếm khuyết không kiểm tra số hợp lệ trên Build 1

## Build Version
- [ ] Prototype (0)
- [x] **Build 1** ← BUG tồn tại ở đây
- [ ] Build 2
- [ ] Build 3
- [ ] Build 4
- [ ] Build 5
- [ ] Build 6
- [ ] Build 7
- [ ] Build 8
- [ ] Build 9

## Các bước tái hiện (Steps to Reproduce)

**Trường hợp 1: First number không phải số**
1. Mở trang https://testsheepnz.github.io/BasicCalculator.html
2. Chọn Build `1`
3. Nhập giá trị First number: `abc`
4. Nhập giá trị Second number: `10`
5. Chọn Operation: `Add`
6. Bấm `Calculate`

**Trường hợp 2: Second number không phải số**
1. Mở trang https://testsheepnz.github.io/BasicCalculator.html
2. Chọn Build `1`
3. Nhập giá trị First number: `20`
4. Nhập giá trị Second number: `xyz`
5. Chọn Operation: `Multiply`
6. Bấm `Calculate`

**Trường hợp 3: Để trống First number**
1. Mở trang https://testsheepnz.github.io/BasicCalculator.html
2. Chọn Build `1`
3. Để trống trường First number *(không nhập gì)*
4. Nhập giá trị Second number: `5`
5. Chọn Operation: `Subtract`
6. Bấm `Calculate`

## Kết quả thực tế (Actual Result)
- Trường **Answer** hiển thị `NaN` (Not a Number).
- **Không có thông báo lỗi** nào xuất hiện tại vùng `#errorMsgField`.
- Hệ thống không chặn phép tính dù dữ liệu đầu vào không hợp lệ.

> Confirmed bởi Playwright automation log:
> ```
> [Build 1 Bug Report]
>   Error message: ""
>   Answer field: "NaN"
> ⚠️ BUG CONFIRMED: Build 1 bỏ qua validation, hiển thị NaN thay vì báo lỗi
> ```

## Kết quả mong đợi (Expected Result)
Theo đặc tả FR-CALC-07 và hành vi của **Prototype**:
- Nếu First number không phải số → hiển thị lỗi: **`"Number 1 is not a number"`**
- Nếu Second number không phải số → hiển thị lỗi: **`"Number 2 is not a number"`**
- Phép tính **không được thực hiện** khi dữ liệu đầu vào không hợp lệ.
- Ô Answer **không được hiển thị `NaN`**.

## Ảnh chụp màn hình / Bằng chứng (Screenshots / Logs)

Playwright automated test — log xác nhận:

```
TC-VAL-001: FAIL
  Expected: "Number 1 is not a number"
  Received: ""  (error message rỗng, Answer = NaN)

TC-VAL-002: FAIL
  Expected: "Number 2 is not a number"
  Received: ""  (error message rỗng, Answer = NaN)

TC-VAL-003: FAIL
  Expected: "Number 1 is not a number"
  Received: ""  (error message rỗng khi để trống)

TC-BUILD-002: FAIL — BUG CONFIRMED
```

Test script: `tests/playwright/build1/build1.spec.js`
Helper: `tests/playwright/helpers/calculator.js`

## Mức độ nghiêm trọng (Severity / Priority)
- **Severity**: Critical
- **Priority**: High

> **Lý do Critical**: Dữ liệu không hợp lệ (`NaN`) được trả về mà không có cảnh báo, có thể gây hiểu lầm cho người dùng và vi phạm nguyên tắc fail-safe của hệ thống. Ảnh hưởng toàn bộ các phép toán số học trên Build 1.
