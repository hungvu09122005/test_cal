# Basic Calculator Test Suite

Bộ tài liệu và kịch bản kiểm thử cho ứng dụng Web **[Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html)** theo tiêu chuẩn kiểm thử phần mềm chuyên nghiệp.

## Cấu trúc thư mục

```text
.
├── tests/
│   ├── test-cases/
│   │   ├── add/             # Phép cộng (Addition)
│   │   │   ├── TC-ADD-001.md
│   │   │   ├── TC-ADD-002.md
│   │   │   ├── TC-ADD-003.md
│   │   │   ├── TC-ADD-004.md
│   │   │   ├── TC-ADD-005.md
│   │   │   └── TC-ADD-006.md
│   │   ├── subtract/        # Phép trừ (Subtraction)
│   │   │   ├── TC-SUB-001.md
│   │   │   ├── TC-SUB-002.md
│   │   │   ├── TC-SUB-003.md
│   │   │   └── TC-SUB-004.md
│   │   ├── multiply/        # Phép nhân (Multiplication)
│   │   │   ├── TC-MUL-001.md
│   │   │   ├── TC-MUL-002.md
│   │   │   ├── TC-MUL-003.md
│   │   │   └── TC-MUL-004.md
│   │   ├── divide/          # Phép chia (Division & Divide by zero)
│   │   │   ├── TC-DIV-001.md
│   │   │   ├── TC-DIV-002.md
│   │   │   ├── TC-DIV-003.md
│   │   │   ├── TC-DIV-004.md
│   │   │   └── TC-DIV-005.md
│   │   ├── concatenate/     # Ghép chuỗi (Concatenation)
│   │   │   ├── TC-CONCAT-001.md
│   │   │   ├── TC-CONCAT-002.md
│   │   │   └── TC-CONCAT-003.md
│   │   ├── validation/      # Kiểm tra hợp lệ dữ liệu nhập (Input Validation)
│   │   │   ├── TC-VAL-001.md
│   │   │   ├── TC-VAL-002.md
│   │   │   ├── TC-VAL-003.md
│   │   │   └── TC-VAL-004.md
│   │   ├── reset/           # Nút Clear & trạng thái giao diện UI
│   │   │   ├── TC-RESET-001.md
│   │   │   ├── TC-RESET-002.md
│   │   │   └── TC-RESET-003.md
│   │   └── build/           # Kiểm thử đa phiên bản (Builds 1 - 9)
│   │       ├── TC-BUILD-001.md
│   │       ├── TC-BUILD-002.md
│   │       ├── TC-BUILD-003.md
│   │       └── TC-BUILD-004.md
│   ├── test-runs/
│   │   ├── sprint-1-test-run.md      # Báo cáo thực thi Sprint 1 (Prototype)
│   │   └── sprint-2-regression.md    # Báo cáo kiểm thử hồi quy các Build 1-9
│   └── test-summary/
│       └── traceability-matrix.md    # Ma trận truy vết yêu cầu (RTM)
└── .github/
    └── ISSUE_TEMPLATE/
        └── bug_report.md             # Mẫu tạo Issue báo cáo lỗi GitHub
```

## Quy chuẩn mã Test Case
Định dạng: `TC-[MODULE]-[NUMBER]`
- **TC-ADD-xxx**: Module Addition (Cộng)
- **TC-SUB-xxx**: Module Subtraction (Trừ)
- **TC-MUL-xxx**: Module Multiplication (Nhân)
- **TC-DIV-xxx**: Module Division (Chia)
- **TC-CONCAT-xxx**: Module Concatenate (Ghép chuỗi)
- **TC-VAL-xxx**: Module Validation (Kiểm tra dữ liệu)
- **TC-RESET-xxx**: Module UI Reset & Controls (Xóa dữ liệu & Giao diện)
- **TC-BUILD-xxx**: Module Build Verification (Xác minh phiên bản & Phát hiện lỗi)

---

## Tự động hóa kiểm thử với Playwright (E2E Automation)

Dự án cài đặt bộ test tự động sử dụng **Playwright** và mô hình **Page Object Model (POM)**:
- **`src/pages/CalculatorPage.js`**: Đóng gói các tương tác và selector của trang Basic Calculator.
- **`tests/e2e/build-3.spec.js`**: Kiểm tra tính năng và phát hiện khiếm khuyết trên **Build 3** (*"always treats like a number"*).
- **`tests/e2e/build-7.spec.js`**: Kiểm tra tính năng và phát hiện khiếm khuyết trên **Build 7** (*"Uses answer, not number 1 as first for operation"*).

### Hướng dẫn chạy Test

```bash
# 1. Cài đặt dependencies
npm install

# 2. Chạy toàn bộ test
npm test

# 3. Chạy riêng test cho Build 3
npm run test:build3

# 4. Chạy riêng test cho Build 7
npm run test:build7

# 5. Chạy test có giao diện (Headed mode)
npm run test:headed
```

