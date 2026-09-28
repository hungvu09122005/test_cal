# BÁO CÁO TỔNG HỢP KIỂM THỬ VÀ BUG REPORTS (BUILDS 1 - 8)
*Dự án:* Basic Calculator Automation Testing  
*Hệ thống:* [Basic Calculator (Test Sheep NZ)](https://testsheepnz.github.io/BasicCalculator.html)  
*GitHub Repository (Nơi lưu Bug Issues):* [https://github.com/hungvu09122005/test_cal](https://github.com/hungvu09122005/test_cal) (`https://github.com/hungvu09122005/test_cal.git`)  
*Trang quản lý Bug Issues:* [GitHub Issues Tracker](https://github.com/hungvu09122005/test_cal/issues)  
*Ngày thực hiện:* 28/09/2026  
*Phạm vi:* 29 Test Cases x 8 Builds (Build 1 đến Build 8 và Prototype)  

---

## MỤC LỤC
1. [Bảng Ma Trận Tổng Hợp 29 Test Case vs Các Build](#1-bảng-ma-trận-tổng-hợp-29-test-case-vs-các-build)
2. [Thống Kê Tỷ Lệ Pass / Fail Theo Từng Build](#2-thống-kê-tỷ-lệ-pass--fail-theo-từng-build)
3. [Phân Tích Chi Tiết Nguyên Nhân Lỗi Theo Build](#3-phân-tích-chi-tiết-nguyên-nhân-lỗi-theo-build)
4. [Danh Sách Chi Tiết Các Bug Report Theo Chuẩn](#4-danh-sách-chi-tiết-các-bug-report-theo-chuẩn)
   - [BUG-001: Build 1 - Không validate dữ liệu dạng text](#bug-001-build-1---không-validate-dữ-liệu-dạng-text)
   - [BUG-002: Build 2 - Đảo ngược chức năng giữa Phép Cộng và Ghép Chuỗi](#bug-002-build-2---đảo-ngược-chức-năng-giữa-phép-cộng-và-ghép-chuỗi)
   - [BUG-003: Build 3 - Luôn ép kiểm tra dữ liệu là số, chặn ghép chuỗi chữ](#bug-003-build-3---luôn-ép-kiểm-tra-dữ-liệu-là-số-chặn-ghép-chuỗi-chữ)
   - [BUG-004: Build 4 - Checkbox Integers only bị khóa cứng luôn chọn true](#bug-004-build-4---checkbox-integers-only-bị-khóa-cứng-luôn-chọn-true)
   - [BUG-005: Build 5 - Nút Clear bị vô hiệu hóa vĩnh viễn](#bug-005-build-5---nút-clear-bị-vô-hiệu-hóa-vĩnh-viễn)
   - [BUG-006: Build 6 - Phép chia cho 0 trả về Infinity thay vì hiển thị lỗi](#bug-006-build-6---phép-chia-cho-0-trả-về-infinity-thay-vì-hiển-thị-lỗi)
   - [BUG-007: Build 7 - Giá trị First number bị ghi đè bởi Answer](#bug-007-build-7---giá-trị-first-number-bị-ghi-đè-bởi-answer)
   - [BUG-008: Build 8 - Đảo ngược thứ tự 2 toán tử First number và Second number](#bug-008-build-8---đảo-ngược-thứ-tự-2-toán-tử-first-number-và-second-number)
   - [BUG-009: All Builds - Để trống First number vẫn được tính toán coi như số 0](#bug-009-all-builds---để-trống-first-number-vẫn-được-tính-toán-coi-như-số-0)

---

## 1. BẢNG MA TRẬN TỔNG HỢP 29 TEST CASE VS CÁC BUILD

Ký hiệu:
- **PASS**: Test case vượt qua thành công.
- **FAIL (X)**: Test case thất bại do ảnh hưởng của Bug mã số X.

| STT | Mã Test Case | Mô tả Test Case | Build 1 | Build 2 | Build 3 | Build 4 | Build 5 | Build 6 | Build 7 | Build 8 | Prototype |
|:---:|:---|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | **TC-ADD-001** | Cộng 2 số dương (15 + 25 = 40) | PASS | **FAIL (2)** | PASS | PASS | PASS | PASS | **FAIL (7)** | PASS | PASS |
| 2 | **TC-ADD-002** | Cộng 2 số thập phân (12.35 + 7.65 = 20) | PASS | **FAIL (2)** | PASS | **FAIL (4)** | PASS | PASS | **FAIL (7)** | PASS | PASS |
| 3 | **TC-ADD-003** | Cộng số âm với dương (-30 + 10 = -20) | PASS | **FAIL (2)** | PASS | PASS | PASS | PASS | **FAIL (7)** | PASS | PASS |
| 4 | **TC-ADD-004** | Cộng với số 0 (0 + 50 = 50) | PASS | **FAIL (2)** | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| 5 | **TC-ADD-005** | Cộng với Integers only (10.4 + 5.3 -> 15) | PASS | **FAIL (2)** | PASS | PASS | PASS | PASS | **FAIL (7)** | PASS | PASS |
| 6 | **TC-ADD-006** | Cộng biên 10 chữ số (9999999999 + 1) | PASS | **FAIL (2)** | PASS | PASS | PASS | PASS | **FAIL (7)** | PASS | PASS |
| 7 | **TC-SUB-001** | Trừ 2 số dương (50 - 20 = 30) | PASS | PASS | PASS | PASS | PASS | PASS | **FAIL (7)** | **FAIL (8)** | PASS |
| 8 | **TC-SUB-002** | Trừ số nhỏ cho số lớn (15 - 40 = -25) | PASS | PASS | PASS | PASS | PASS | PASS | **FAIL (7)** | **FAIL (8)** | PASS |
| 9 | **TC-SUB-003** | Trừ 2 số thập phân (10.5 - 3.2 = 7.3) | PASS | PASS | PASS | **FAIL (4)** | PASS | PASS | **FAIL (7)** | **FAIL (8)** | PASS |
| 10 | **TC-SUB-004** | Trừ 2 số bằng nhau (99 - 99 = 0) | PASS | PASS | PASS | PASS | PASS | PASS | **FAIL (7)** | PASS | PASS |
| 11 | **TC-MUL-001** | Nhân 2 số dương (7 * 8 = 56) | PASS | PASS | PASS | PASS | PASS | PASS | **FAIL (7)** | PASS | PASS |
| 12 | **TC-MUL-002** | Nhân với số 0 (125 * 0 = 0) | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| 13 | **TC-MUL-003** | Nhân số âm với dương (-6 * 9 = -54) | PASS | PASS | PASS | PASS | PASS | PASS | **FAIL (7)** | PASS | PASS |
| 14 | **TC-MUL-004** | Nhân với Integers only (3.5 * 3 -> 10) | PASS | PASS | PASS | PASS | PASS | PASS | **FAIL (7)** | PASS | PASS |
| 15 | **TC-DIV-001** | Chia hết (100 / 4 = 25) | PASS | PASS | PASS | PASS | PASS | PASS | **FAIL (7)** | **FAIL (8)** | PASS |
| 16 | **TC-DIV-002** | Chia không hết (10 / 4 = 2.5) | PASS | PASS | PASS | **FAIL (4)** | PASS | PASS | **FAIL (7)** | **FAIL (8)** | PASS |
| 17 | **TC-DIV-003** | Báo lỗi khi chia cho 0 | PASS | PASS | PASS | PASS | PASS | **FAIL (6)** | PASS | **FAIL (8)** | PASS |
| 18 | **TC-DIV-004** | Chia 0 cho số khác (0 / 15 = 0) | PASS | PASS | PASS | PASS | PASS | PASS | PASS | **FAIL (8)** | PASS |
| 19 | **TC-DIV-005** | Chia với Integers only (7 / 2 -> 3) | PASS | PASS | PASS | PASS | PASS | PASS | **FAIL (7)** | **FAIL (8)** | PASS |
| 20 | **TC-CONCAT-001** | Ghép số ("123" + "456" = "123456") | PASS | **FAIL (2)** | PASS | PASS | PASS | PASS | **FAIL (7)** | **FAIL (8)** | PASS |
| 21 | **TC-CONCAT-002** | Ghép chuỗi chữ ("Hello" + "_World!") | PASS | **FAIL (2)** | **FAIL (3)** | PASS | PASS | PASS | **FAIL (7)** | **FAIL (8)** | PASS |
| 22 | **TC-CONCAT-003** | Tự ẩn checkbox Integers khi chọn Concat | PASS | PASS | **FAIL (3)** | **FAIL (4)** | PASS | PASS | PASS | PASS | PASS |
| 23 | **TC-VAL-001** | Báo lỗi khi First number là chữ | **FAIL (1)** | PASS | PASS | PASS | PASS | PASS | **FAIL (7)** | **FAIL (8)** | PASS |
| 24 | **TC-VAL-002** | Báo lỗi khi Second number là chữ | **FAIL (1)** | PASS | PASS | PASS | PASS | PASS | PASS | **FAIL (8)** | PASS |
| 25 | **TC-VAL-003** | Báo lỗi khi để trống First number | **FAIL (9)** | **FAIL (9)** | **FAIL (9)** | **FAIL (9)** | **FAIL (9)** | **FAIL (9)** | **FAIL (9)** | **FAIL (9)** | **FAIL (9)** |
| 26 | **TC-VAL-004** | Giới hạn tối đa 10 ký tự | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| 27 | **TC-RESET-001** | Clear xóa ô Answer & bỏ chọn checkbox | PASS | PASS | PASS | PASS | **FAIL (5)** | PASS | **FAIL (7)** | PASS | PASS |
| 28 | **TC-RESET-002** | Clear xóa thông báo lỗi | PASS | PASS | PASS | PASS | **FAIL (5)** | PASS | **FAIL (7)** | **FAIL (8)** | PASS |
| 29 | **TC-RESET-003** | Disable nút trong lúc tính toán | PASS | PASS | PASS | PASS | **FAIL (5)** | PASS | **FAIL (7)** | PASS | PASS |

---

## 2. THỐNG KÊ TỶ LỆ PASS / FAIL THEO TỪNG BUILD

| STT | Phiên bản (Build) | Tổng số Test Cases | Số lượng PASS | Số lượng FAIL | Tỷ lệ PASS (%) |
|:---:|:---|:---:|:---:|:---:|:---:|
| 1 | **Prototype (Chuẩn)** | 29 | 28 | 1 *(BUG-009)* | 96.55% |
| 2 | **Build 1** | 29 | 26 | 3 *(BUG-001, BUG-009)* | 89.66% |
| 3 | **Build 2** | 29 | 20 | 9 *(BUG-002, BUG-009)* | 68.97% |
| 4 | **Build 3** | 29 | 26 | 3 *(BUG-003, BUG-009)* | 89.66% |
| 5 | **Build 4** | 29 | 24 | 5 *(BUG-004, BUG-009)* | 82.76% |
| 6 | **Build 5** | 29 | 25 | 4 *(BUG-005, BUG-009)* | 86.21% |
| 7 | **Build 6** | 29 | 27 | 2 *(BUG-006, BUG-009)* | 93.10% |
| 8 | **Build 7** | 29 | 8 | 21 *(BUG-007, BUG-009)* | 27.59% |
| 9 | **Build 8** | 29 | 15 | 14 *(BUG-008, BUG-009)* | 51.72% |

---

## 3. PHÂN TÍCH CHI TIẾT NGUYÊN NHÂN LỖI THEO BUILD

- **Build 1 (Bug BUG-001):** Hệ thống không thực hiện xác thực (validation) kiểu dữ liệu số khi người dùng nhập chuỗi ký tự chữ vào `number1Field` hoặc `number2Field`. Phép toán JavaScript chuyển đổi chuỗi thành `NaN` và in ra kết quả thay vì báo lỗi.
- **Build 2 (Bug BUG-002):** Logic xử lý phép toán bị tráo đổi ngược giữa `Add` (Phép cộng) và `Concatenate` (Ghép chuỗi). Khi chọn `Add`, ứng dụng thực hiện phép nối chuỗi; khi chọn `Concatenate`, ứng dụng thực hiện phép cộng số học.
- **Build 3 (Bug BUG-003):** Ứng dụng luôn áp đặt logic kiểm tra `isNumber = true` cho cả thao tác `Concatenate`. Do đó, nếu nhập chuỗi chữ để nối thì bị báo lỗi không hợp lệ; đồng thời checkbox `intOnlyStep` không được tự động ẩn đi.
- **Build 4 (Bug BUG-004):** Checkbox `intOnlyStep` bị thiết lập thuộc tính `checked = true` và `disabled = true` vĩnh viễn trong mã nguồn. Mọi kết quả phép tính đều bị làm tròn thành số nguyên, làm sai lệch các phép tính số thực.
- **Build 5 (Bug BUG-005):** Nút `clearButton` bị khóa (`disabled = true`) ngay từ khi tải trang hoặc sau khi nhấn Calculate, khiến người dùng không thể xóa dữ liệu và reset trạng thái ứng dụng.
- **Build 6 (Bug BUG-006):** Thiếu khối điều kiện kiểm tra mẫu số bằng `0` trước khi thực hiện phép chia. Thư viện JavaScript trả về giá trị `Infinity` thay vì ném ra thông báo lỗi nghiệp vụ *"Divide by zero!"*.
- **Build 7 (Bug BUG-007):** Lỗi logic gán biến trong mã nguồn: `number1 = document.getElementById("numberAnswerField").value`. Vì ban đầu ô Answer trống rỗng (tương đương `""` hay `0`), First Number luôn bị ghi đè bằng `0`, làm sai lệch toàn bộ các phép tính.
- **Build 8 (Bug BUG-008):** Hai tham số đầu vào bị tráo đổi vị trí cho nhau: `firstNumber` được truyền thành số thứ 2 và `secondNumber` được truyền thành số thứ 1. Dẫn đến sai kết quả ở các phép toán không có tính chất giao hoán (Trừ, Chia, Nối chuỗi, Báo lỗi chia cho 0).
- **Lỗi hệ thống chung (All Builds - Bug BUG-009):** Biểu thức kiểm tra rỗng không phân biệt được chuỗi rỗng `""` và số `0` (`isNaN("") === false` trong JavaScript). Khi để trống `First number`, hệ thống tự ép kiểu về `0` và tiếp tục tính toán thay vì hiển thị thông báo lỗi bắt buộc nhập.

---

## 4. DANH SÁCH CHI TIẾT CÁC BUG REPORT THEO CHUẨN

---

### BUG-001: Build 1 - Không validate dữ liệu dạng text

Title: [BUG][Validation] Hệ thống không kiểm tra tính hợp lệ kiểu số và hiển thị NaN khi nhập chữ

## Found by Test Case
TC-VAL-001, TC-VAL-002

## Requirement liên quan
FR-CALC-05, FR-CALC-06

## Severity / Priority
Major / P2

## Environment
- **Browser:** Chromium 140.0.7339.185 (Playwright Headless/Headed)
- **OS:** macOS Darwin 24.3.0 (arm64)
- **URL:** `https://testsheepnz.github.io/BasicCalculator.html`
- **Build:** Build 1

## Steps to reproduce
1. Truy cập trang web `https://testsheepnz.github.io/BasicCalculator.html`.
2. Chọn Build `1` tại danh sách chọn phiên bản.
3. Nhập giá trị chữ `abc` vào ô First number và `10` vào ô Second number.
4. Chọn Operation là `Add`.
5. Bấm nút `Calculate`.

## Expected result
Hệ thống phát hiện dữ liệu nhập vào không phải là số hợp lệ, không thực hiện phép tính và hiển thị thông báo lỗi (ví dụ: *"Only integers and decimals are allowed"*).

## Actual result
Hệ thống không hiển thị thông báo lỗi, thực hiện ép kiểu sai và hiển thị kết quả là `NaN` tại ô Answer.

## Evidence
- **Console Log / DOM:** Ô `#numberAnswerField` chứa giá trị `NaN`, phần tử `#errorMsgField` trống.
- **Screenshot:** `test-results/calculatorTestSuite-BUILD-1-TC-VAL-001-Báo-lỗi-khi-First-number-là-chữ-chromium/test-failed-1.png`

---

### BUG-002: Build 2 - Đảo ngược chức năng giữa Phép Cộng và Ghép Chuỗi

Title: [BUG][Operation] Chức năng Phép cộng (Add) và Ghép chuỗi (Concatenate) bị tráo đổi logic ngược nhau

## Found by Test Case
TC-ADD-001, TC-ADD-002, TC-ADD-003, TC-ADD-004, TC-ADD-005, TC-ADD-006, TC-CONCAT-001, TC-CONCAT-002

## Requirement liên quan
FR-CALC-01, FR-CALC-04

## Severity / Priority
Critical / P1

## Environment
- **Browser:** Chromium 140.0.7339.185
- **OS:** macOS Darwin 24.3.0 (arm64)
- **URL:** `https://testsheepnz.github.io/BasicCalculator.html`
- **Build:** Build 2

## Steps to reproduce
1. Truy cập trang web `https://testsheepnz.github.io/BasicCalculator.html`.
2. Chọn Build `2`.
3. Nhập `15` vào ô First number và `25` vào ô Second number.
4. Chọn Operation là `Add` rồi bấm `Calculate`.
5. Đổi Operation sang `Concatenate` rồi bấm `Calculate`.

## Expected result
- Khi chọn `Add`: Kết quả tại ô Answer là `40` (15 + 25 = 40).
- Khi chọn `Concatenate`: Kết quả tại ô Answer là `1525`.

## Actual result
- Khi chọn `Add`: Kết quả trả về `1525` (logic nối chuỗi).
- Khi chọn `Concatenate`: Kết quả trả về `40` (logic cộng số học).

## Evidence
- **Console Log / DOM:** `selectOperationDropdown.value = 0` trả về `"1525"`, `selectOperationDropdown.value = 4` trả về `"40"`.
- **Screenshot:** `test-results/calculatorTestSuite-BUILD-2-TC-ADD-001-Cộng-hai-số-dương-chromium/test-failed-1.png`

---

### BUG-003: Build 3 - Luôn ép kiểm tra dữ liệu là số, chặn ghép chuỗi chữ

Title: [BUG][Concatenate] Chức năng Ghép chuỗi luôn ép buộc kiểm tra kiểu số khiến không thể ghép chuỗi chữ

## Found by Test Case
TC-CONCAT-002, TC-CONCAT-003

## Requirement liên quan
FR-CALC-04

## Severity / Priority
Major / P2

## Environment
- **Browser:** Chromium 140.0.7339.185
- **OS:** macOS Darwin 24.3.0 (arm64)
- **URL:** `https://testsheepnz.github.io/BasicCalculator.html`
- **Build:** Build 3

## Steps to reproduce
1. Truy cập trang web `https://testsheepnz.github.io/BasicCalculator.html`.
2. Chọn Build `3`.
3. Chọn Operation là `Concatenate`.
4. Nhập `Hello` vào ô First number và `_World!` vào ô Second number.
5. Bấm nút `Calculate`.

## Expected result
- Checkbox `Integers only` tự động ẩn hoặc bị vô hiệu hóa khi chọn Concatenate.
- Hệ thống nối hai chuỗi và hiển thị kết quả `Hello_World!` tại ô Answer.

## Actual result
- Checkbox `Integers only` vẫn hiển thị bình thường.
- Hệ thống báo lỗi không hợp lệ ở trường nhập liệu do áp dụng bộ kiểm tra số `isNumber` cho thao tác nối chuỗi chữ.

## Evidence
- **Console Log / DOM:** Báo lỗi xác thực chuỗi nhập vào; kết quả tại ô Answer không được cập nhật.
- **Screenshot:** `test-results/calculatorTestSuite-BUILD-3-TC-CONCAT-002-Ghép-chuỗi-chữ-chromium/test-failed-1.png`

---

### BUG-004: Build 4 - Checkbox Integers only bị khóa cứng luôn chọn true

Title: [BUG][IntegersOnly] Tùy chọn Integers only bị khóa cứng và luôn làm tròn kết quả thành số nguyên

## Found by Test Case
TC-ADD-002, TC-SUB-003, TC-DIV-002, TC-CONCAT-003

## Requirement liên quan
FR-CALC-07

## Severity / Priority
Major / P2

## Environment
- **Browser:** Chromium 140.0.7339.185
- **OS:** macOS Darwin 24.3.0 (arm64)
- **URL:** `https://testsheepnz.github.io/BasicCalculator.html`
- **Build:** Build 4

## Steps to reproduce
1. Truy cập trang web `https://testsheepnz.github.io/BasicCalculator.html`.
2. Chọn Build `4`.
3. Quan sát trạng thái checkbox `Integers only`.
4. Nhập First number `10.5`, Second number `3.2`, chọn Operation `Subtract`.
5. Bấm nút `Calculate`.

## Expected result
Người dùng có thể bỏ chọn checkbox `Integers only`. Kết quả phép trừ hiển thị chính xác số thập phân `7.3`.

## Actual result
Checkbox `Integers only` có thuộc tính `disabled="true"` và `checked="true"`. Người dùng không thể bỏ chọn; kết quả bị làm tròn nguyên thành `7`.

## Evidence
- **DOM Attribute:** `<input type="checkbox" id="intOnlyStep" checked disabled>`
- **Screenshot:** `test-results/calculatorTestSuite-BUILD-4-TC-SUB-003-Trừ-hai-số-thập-phân-chromium/test-failed-1.png`

---

### BUG-005: Build 5 - Nút Clear bị vô hiệu hóa vĩnh viễn

Title: [BUG][Clear] Nút Clear luôn ở trạng thái disabled khiến người dùng không thể đặt lại máy tính

## Found by Test Case
TC-RESET-001, TC-RESET-002, TC-RESET-003

## Requirement liên quan
FR-CALC-08

## Severity / Priority
Major / P2

## Environment
- **Browser:** Chromium 140.0.7339.185
- **OS:** macOS Darwin 24.3.0 (arm64)
- **URL:** `https://testsheepnz.github.io/BasicCalculator.html`
- **Build:** Build 5

## Steps to reproduce
1. Truy cập trang web `https://testsheepnz.github.io/BasicCalculator.html`.
2. Chọn Build `5`.
3. Nhập hai số bất kỳ và nhấn `Calculate`.
4. Cố gắng nhấn nút `Clear` để xóa kết quả và đặt lại trạng thái ban đầu.

## Expected result
Nút `Clear` ở trạng thái active (enabled). Khi bấm nút, ô Answer được xóa rỗng và thông báo lỗi được dọn dẹp.

## Actual result
Nút `Clear` bị thiết lập thuộc tính `disabled = true` vĩnh viễn, người dùng hoàn toàn không thể tương tác hoặc click vào nút Clear.

## Evidence
- **DOM Attribute:** `<input type="button" id="clearButton" value="Clear" disabled>`
- **Screenshot:** `test-results/calculatorTestSuite-BUILD-5-TC-RESET-001-Clear-xóa-Answer-reset-checkbox-chromium/test-failed-1.png`

---

### BUG-006: Build 6 - Phép chia cho 0 trả về Infinity thay vì hiển thị lỗi

Title: [BUG][Divide] Hệ thống hiển thị Infinity khi thực hiện phép chia cho 0 thay vì thông báo lỗi

## Found by Test Case
TC-DIV-003

## Requirement liên quan
FR-CALC-03, FR-CALC-06

## Severity / Priority
Major / P2

## Environment
- **Browser:** Chromium 140.0.7339.185
- **OS:** macOS Darwin 24.3.0 (arm64)
- **URL:** `https://testsheepnz.github.io/BasicCalculator.html`
- **Build:** Build 6

## Steps to reproduce
1. Truy cập trang web `https://testsheepnz.github.io/BasicCalculator.html`.
2. Chọn Build `6`.
3. Nhập First number là `50`, Second number là `0`.
4. Chọn Operation là `Divide`.
5. Bấm `Calculate`.

## Expected result
Hệ thống phát hiện phép chia cho 0 không hợp lệ và hiển thị thông báo lỗi *"Divide by zero!"* trên giao diện.

## Actual result
Hệ thống không hiển thị thông báo lỗi, ô Answer xuất hiện chuỗi giá trị `Infinity`.

## Evidence
- **Console Log / DOM:** `#errorMsgField` trống; `#numberAnswerField` nhận giá trị `"Infinity"`.
- **Screenshot:** `test-results/calculatorTestSuite-BUILD-6-TC-DIV-003-Chia-cho-0-báo-lỗi-chromium/test-failed-1.png`

---

### BUG-007: Build 7 - Giá trị First number bị ghi đè bởi Answer

Title: [BUG][Logic] First number luôn bị lấy từ ô Answer (mặc định bằng 0) làm sai lệch toàn bộ phép tính

## Found by Test Case
TC-ADD-001, TC-ADD-002, TC-ADD-003, TC-ADD-005, TC-ADD-006, TC-SUB-001, TC-SUB-002, TC-SUB-003, TC-SUB-004, TC-MUL-001, TC-MUL-003, TC-MUL-004, TC-DIV-001, TC-DIV-002, TC-DIV-005, TC-CONCAT-001, TC-CONCAT-002, TC-VAL-001, TC-RESET-001, TC-RESET-002, TC-RESET-003

## Requirement liên quan
FR-CALC-01, FR-CALC-02, FR-CALC-03, FR-CALC-04

## Severity / Priority
Blocker / P0

## Environment
- **Browser:** Chromium 140.0.7339.185
- **OS:** macOS Darwin 24.3.0 (arm64)
- **URL:** `https://testsheepnz.github.io/BasicCalculator.html`
- **Build:** Build 7

## Steps to reproduce
1. Truy cập trang web `https://testsheepnz.github.io/BasicCalculator.html`.
2. Chọn Build `7`.
3. Nhập First number là `15` và Second number là `25`.
4. Chọn Operation là `Add`.
5. Bấm `Calculate`.

## Expected result
Hệ thống cộng `15 + 25` và xuất ra kết quả `40`.

## Actual result
Hệ thống lấy giá trị từ ô Answer (đang rỗng = `0`) thay cho First number, tính `0 + 25` và xuất ra kết quả là `25`.

## Evidence
- **Source Code Logic:** `var number1 = document.getElementById("numberAnswerField").value;`
- **Screenshot:** `test-results/calculatorTestSuite-BUILD-7-TC-ADD-001-Cộng-hai-số-dương-chromium/test-failed-1.png`

---

### BUG-008: Build 8 - Đảo ngược thứ tự 2 toán tử First number và Second number

Title: [BUG][Logic] Thứ tự của hai toán hạng First number và Second number bị đảo ngược khi tính toán

## Found by Test Case
TC-SUB-001, TC-SUB-002, TC-SUB-003, TC-DIV-001, TC-DIV-002, TC-DIV-003, TC-DIV-004, TC-DIV-005, TC-CONCAT-001, TC-CONCAT-002, TC-VAL-001, TC-VAL-002, TC-RESET-002

## Requirement liên quan
FR-CALC-02, FR-CALC-03, FR-CALC-04

## Severity / Priority
Critical / P1

## Environment
- **Browser:** Chromium 140.0.7339.185
- **OS:** macOS Darwin 24.3.0 (arm64)
- **URL:** `https://testsheepnz.github.io/BasicCalculator.html`
- **Build:** Build 8

## Steps to reproduce
1. Truy cập trang web `https://testsheepnz.github.io/BasicCalculator.html`.
2. Chọn Build `8`.
3. Nhập First number là `50` và Second number là `20`.
4. Chọn Operation là `Subtract`.
5. Bấm `Calculate`.

## Expected result
Phép tính thực hiện là `50 - 20`, kết quả tại ô Answer là `30`.

## Actual result
Phép tính bị đảo ngược thành `20 - 50`, kết quả tại ô Answer là `-30`. (Tương tự `100 / 4` thành `4 / 100 = 0.04`).

## Evidence
- **Console Log / DOM:** `50 - 20` xuất ra `-30`; `100 / 4` xuất ra `0.04`.
- **Screenshot:** `test-results/calculatorTestSuite-BUILD-8-TC-SUB-001-Trừ-hai-số-dương-chromium/test-failed-1.png`

---

### BUG-009: All Builds - Để trống First number vẫn được tính toán coi như số 0

Title: [BUG][Validation] Hệ thống không bắt lỗi để trống First number mà tự ép kiểu về số 0 để tính toán

## Found by Test Case
TC-VAL-003

## Requirement liên quan
FR-CALC-05

## Severity / Priority
Minor / P3

## Environment
- **Browser:** Chromium 140.0.7339.185
- **OS:** macOS Darwin 24.3.0 (arm64)
- **URL:** `https://testsheepnz.github.io/BasicCalculator.html`
- **Build:** Tất cả các Build (Prototype, Build 1 - Build 8)

## Steps to reproduce
1. Truy cập trang web `https://testsheepnz.github.io/BasicCalculator.html`.
2. Chọn bất kỳ phiên bản nào (Prototype hoặc Build 1 - Build 8).
3. Để trống ô First number (`""`).
4. Nhập Second number là `20`.
5. Chọn Operation là `Add` rồi bấm `Calculate`.

## Expected result
Hệ thống hiển thị thông báo lỗi yêu cầu người dùng phải nhập đầy đủ giá trị vào First number.

## Actual result
Hệ thống không hiển thị thông báo lỗi, tự động ép kiểu chuỗi rỗng `""` thành số `0`, tính toán `0 + 20` và hiển thị kết quả `20`.

## Evidence
- **Root Cause:** Hàm kiểm tra trong JavaScript dùng `isNaN(val)` (trong đó `isNaN("") === false` và `Number("") === 0`), không kiểm tra chuỗi rỗng `val.trim() === ""`.
- **Screenshot:** `test-results/calculatorTestSuite-BUILD-8-TC-VAL-003-Báo-lỗi-khi-để-trống-First-number-chromium/test-failed-1.png`
