---
name: Bug report
about: Tạo báo cáo lỗi phát hiện trong quá trình kiểm thử Basic Calculator
title: '[BUG]: Build 6 - Divide by zero khong hien thi thong bao loi'
labels: 'bug'
assignees: ''
---

## Mô tả lỗi (Bug Description)
Trên Build 6, phép chia (Divide) không còn kiểm tra điều kiện số chia (Second number) bằng 0.
Thay vì hiển thị thông báo lỗi "Divide by zero error!" như các Build khác, ứng dụng thực hiện phép
chia và trả về `Infinity` trong trường Answer, không có bất kỳ thông báo lỗi nào.

## Mã Test Case liên quan (Related Test Case ID)
TC-DIV-003, TC-BUILD-004

## Build Version
- [ ] Prototype (0)
- [ ] Build 1
- [ ] Build 2
- [ ] Build 3
- [ ] Build 4
- [ ] Build 5
- [x] Build 6
- [ ] Build 7
- [ ] Build 8
- [ ] Build 9

## Các bước tái hiện (Steps to Reproduce)
1. Mở trang https://testsheepnz.github.io/BasicCalculator.html
2. Chọn Build `6`
3. Nhập giá trị First number: `25` (hoặc `50`)
4. Nhập giá trị Second number: `0`
5. Chọn Operation: `Divide`
6. Bấm `Calculate`

## Kết quả thực tế (Actual Result)
Answer hiển thị `Infinity`. Trường thông báo lỗi (`#errorMsgField`) rỗng — không có cảnh báo nào được hiển thị.

## Kết quả mong đợi (Expected Result)
Hệ thống phải chặn phép chia cho 0 và hiển thị thông báo lỗi `"Divide by zero error!"` trong `#errorMsgField`,
đồng thời không cập nhật trường Answer (giống hành vi ở các Build khác, ví dụ Prototype/Build 0).

## Ảnh chụp màn hình / Bằng chứng (Screenshots / Logs)
- Automated test: `tests/e2e/divide.spec.ts` → `TC-DIV-003` (FAIL - xác nhận lỗi bằng assertion theo spec)
- Automated test: `tests/e2e/build.spec.ts` → `TC-BUILD-004` (PASS - xác nhận lỗi bằng assertion theo hành vi thực tế)
- Screenshot khi test fail: `test-results/divide-TC-DIV-Division-Tes-94ab4-o-shows-error-message-25-0--chromium/test-failed-1.png`
- Test run report: `tests/test-runs/build-6-test-run.md`

## Mức độ nghiêm trọng (Severity / Priority)
- Severity: Major
- Priority: High
