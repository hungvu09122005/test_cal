# Requirements Traceability Matrix (RTM) - Basic Calculator

| Requirement ID | Requirement Description | Test Case IDs | Module | Test Type | Coverage Status |
|:---|:---|:---|:---|:---|:---:|
| **FR-CALC-01** | Thực hiện phép cộng hai số (hỗ trợ số nguyên, số thực, số âm, số 0) | TC-ADD-001, TC-ADD-002, TC-ADD-003, TC-ADD-004, TC-ADD-005, TC-ADD-006 | Addition | Functional / BVA / EP | Covered |
| **FR-CALC-02** | Thực hiện phép trừ hai số (hỗ trợ kết quả âm, số thực, trừ với 0) | TC-SUB-001, TC-SUB-002, TC-SUB-003, TC-SUB-004 | Subtraction | Functional / BVA / EP | Covered |
| **FR-CALC-03** | Thực hiện phép nhân hai số (hỗ trợ nhân với 0, số âm, số thực) | TC-MUL-001, TC-MUL-002, TC-MUL-003, TC-MUL-004 | Multiplication | Functional / BVA / EP | Covered |
| **FR-CALC-04** | Thực hiện phép chia hai số và hiển thị lỗi 'Divide by zero error!' khi chia cho 0 | TC-DIV-001, TC-DIV-002, TC-DIV-003, TC-DIV-004, TC-DIV-005 | Division | Functional / Error Guessing / BVA | Covered |
| **FR-CALC-05** | Thực hiện phép ghép chuỗi hai giá trị đầu vào mà không kiểm tra định dạng số | TC-CONCAT-001, TC-CONCAT-002, TC-CONCAT-003 | Concatenate | Functional / UI / State Transition | Covered |
| **FR-CALC-06** | Hỗ trợ tùy chọn 'Integers only' để làm tròn/lấy phần nguyên kết quả tính toán | TC-ADD-005, TC-MUL-004, TC-DIV-005, TC-CONCAT-003 | Calculation Options | Functional / State Transition | Covered |
| **FR-CALC-07** | Kiểm tra dữ liệu đầu vào: hiển thị lỗi khi nhập chữ trong phép tính số học, giới hạn 10 ký tự | TC-VAL-001, TC-VAL-002, TC-VAL-003, TC-VAL-004, TC-ADD-006 | Validation | Negative / BVA / Error Guessing | Covered |
| **FR-CALC-08** | Nút 'Clear' xóa kết quả, reset trạng thái checkbox và xóa thông báo lỗi | TC-RESET-001, TC-RESET-002, TC-RESET-003 | Reset & Controls | Functional / UI / State Transition | Covered |
| **FR-CALC-09** | Cho phép lựa chọn phiên bản (Build Prototype và Builds 1 - 9) để kiểm thử hồi quy | TC-BUILD-001, TC-BUILD-002, TC-BUILD-003, TC-BUILD-004 | Build Selection | Regression / Defect Detection | Covered |
