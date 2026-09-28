---
name: Bug report
about: Tạo báo cáo lỗi phát hiện trong quá trình kiểm thử Basic Calculator
title: '[BUG]: Build 1 - Nút Clear bị vô hiệu hóa (disabled) sau khi xảy ra lỗi chia cho 0'
labels: 'bug'
assignees: ''
---

## Mô tả lỗi (Bug Description)
Trên Build 1, sau khi thực hiện phép chia cho 0 và hệ thống hiển thị thông báo lỗi `"Divide by zero error!"`, **nút Clear bị khóa ở trạng thái `disabled`** và không thể tương tác được. Người dùng không có cách nào để xóa thông báo lỗi hoặc reset giao diện mà không reload lại trang. Hành vi này vi phạm yêu cầu FR-CALC-08.

## Mã Test Case liên quan (Related Test Case ID)
- TC-RESET-002 — Xóa thông báo lỗi khi bấm nút Clear
- TC-DIV-003 — Chia cho 0 hiển thị thông báo lỗi (liên quan gián tiếp)

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
1. Mở trang https://testsheepnz.github.io/BasicCalculator.html
2. Chọn Build `1`
3. Nhập giá trị First number: `10`
4. Nhập giá trị Second number: `0`
5. Chọn Operation: `Divide`
6. Bấm `Calculate`
7. Quan sát thông báo lỗi `"Divide by zero error!"` xuất hiện
8. Bấm nút **`Clear`**

## Kết quả thực tế (Actual Result)
- Sau bước 6: Thông báo lỗi `"Divide by zero error!"` xuất hiện đúng ✅
- Sau bước 8: **Nút Clear không phản hồi** — bị khóa ở trạng thái `disabled`:
  ```html
  <input disabled type="button" value="Clear" id="clearButton" .../>
  ```
- Thông báo lỗi **không bị xóa**, giao diện bị "đóng băng".

> Confirmed bởi Playwright automation log:
> ```
> TimeoutError: page.click: Timeout 10000ms exceeded.
>   - locator resolved to <input disabled type="button" value="Clear" id="clearButton" .../>
>   - element is not enabled
> ```

## Kết quả mong đợi (Expected Result)
Theo đặc tả FR-CALC-08 và hành vi của **Prototype**:
- Sau khi phép tính hoàn tất (dù lỗi hay thành công), nút **Clear phải được re-enable** (không còn `disabled`).
- Khi bấm Clear: thông báo lỗi tại `#errorMsgField` phải được **xóa hoàn toàn** (trở thành chuỗi rỗng).
- Người dùng có thể thực hiện phép tính mới sau đó.

## Ảnh chụp màn hình / Bằng chứng (Screenshots / Logs)

Playwright automated test — log xác nhận:

```
TC-RESET-002: FAIL
  TimeoutError: page.click: Timeout 10000ms exceeded.
  Cause: #clearButton is disabled after divide-by-zero error on Build 1

  HTML state of button:
  <input disabled type="button" value="Clear" id="clearButton"
         onclick="clearAnswer()" class="btn btn-secondary"
         data-testid="clearButton"/>
```

**So sánh với Prototype (Build 0):**
- Prototype: Clear button được re-enable sau lỗi ÷0 → hoạt động bình thường ✅
- Build 1: Clear button vẫn `disabled` sau lỗi ÷0 → người dùng bị kẹt ❌

Test script: `tests/playwright/build1/build1.spec.js` (TC-RESET-002)

## Mức độ nghiêm trọng (Severity / Priority)
- **Severity**: Major
- **Priority**: Medium

> **Lý do Major**: Lỗi này không làm crash hệ thống nhưng **chặn hoàn toàn luồng thao tác của người dùng** sau khi chia cho 0 — người dùng buộc phải reload trang để tiếp tục sử dụng. Kết hợp với BUG-B1-001 (validation skip), trải nghiệm Build 1 bị ảnh hưởng nghiêm trọng.
