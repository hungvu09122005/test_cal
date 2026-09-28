---
title: "[BUG]: Build 6 - Divide by zero khong hien thi thong bao loi"
labels: ["type: bug", "status: new"]
---

## Mô tả lỗi
Trên Build 6, phép chia (Divide) không còn kiểm tra điều kiện số chia (Second number) bằng 0.
Thay vì hiển thị thông báo lỗi "Divide by zero error!" như các Build khác, ứng dụng thực hiện phép
chia và trả về `Infinity` trong trường Answer, không có bất kỳ thông báo lỗi nào.

## Môi trường
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: 6
- Trình duyệt: Chromium (Google Chrome), qua Playwright automation
- Ngày phát hiện: 2026-09-28

## Steps to reproduce
1. Mở trang https://testsheepnz.github.io/BasicCalculator.html, chọn Build `6`
2. Nhập First number = `25` (hoặc `50`), Second number = `0`
3. Chọn Operation = `Divide`, bấm `Calculate`

## Actual result
Answer hiển thị `Infinity`. Trường thông báo lỗi (`#errorMsgField`) rỗng — không có cảnh báo nào được hiển thị.

## Expected result
Hệ thống phải chặn phép chia cho 0 và hiển thị thông báo lỗi `"Divide by zero error!"` trong `#errorMsgField`,
đồng thời không cập nhật trường Answer (giống hành vi ở các Build khác không có defect này, ví dụ Prototype/Build 0).

## Evidence
- Test case liên quan: `TC-DIV-003` (FAIL - xác nhận lỗi bằng assertion theo spec), `TC-BUILD-004` (PASS - xác nhận lỗi bằng assertion theo hành vi thực tế)
- Test script: `tests/e2e/divide.spec.ts`, `tests/e2e/build.spec.ts`
- Test run report: `tests/test-runs/build-6-test-run.md`
- Severity: Major | Priority: High
