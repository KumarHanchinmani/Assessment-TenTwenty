# Playwright E2E Automation Assessment

## Overview

This project demonstrates end-to-end test automation using **Playwright, TypeScript, and the Page Object Model (POM)**.

The test covers a complete e-commerce purchase journey on [SauceDemo](https://www.saucedemo.com/).

### Automated Scenario

**Login → Select Product → Add to Cart → Checkout → Verify Order Confirmation**

The test verifies that a user can log in, add the selected product to the cart, complete the checkout process, and see the order confirmation.

## Tech Stack

- Playwright Test
- TypeScript
- Node.js and npm
- Page Object Model (POM)
- Git and GitHub

## Project Structure

```text
QA-Assesement/
├── fixtures/
│   └── testFixtures.ts
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/
│   └── order-e2e.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Prerequisites

Install the following before running the tests:

- Node.js
- npm
- Git (optional, for version control)

Check your installation:

```bash
node --version
npm --version
```

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/KumarHanchinmani/Assessment-TenTwenty.git
cd Assessment-TenTwenty
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install the required browser

```bash
npx playwright install chromium
```

### 4. Configure environment variables

Create a `.env` file in the project root:

```dotenv
BASE_URL=https://www.saucedemo.com
TEST_USERNAME=your_test_username
TEST_PASSWORD=your_test_password
```

Replace the placeholder credentials with the test credentials provided for the assessment.

The Playwright configuration must load environment variables using `import 'dotenv/config';` or an equivalent configuration.

**Security:** Do not commit `.env` or expose credentials in source code.

## Running the Tests

Run the end-to-end test:

```bash
npx playwright test tests/order-e2e.spec.ts
```

Run the test with a visible browser:

```bash
npx playwright test tests/order-e2e.spec.ts --headed
```

Run all tests:

```bash
npx playwright test
```

View the HTML report:

```bash
npx playwright show-report
```

If the default report port is occupied, use another port:

```bash
npx playwright show-report --port 9324
```

## Test Flow and Assertions

The test performs the following steps:

1. Opens the application login page.
2. Logs in using configured test credentials.
3. Verifies successful navigation to the products page.
4. Adds the selected product to the cart.
5. Opens the cart and verifies the selected product.
6. Proceeds to checkout and enters customer information.
7. Continues to the checkout overview.
8. Finishes the order.
9. Verifies that the order confirmation is displayed.

## Framework Design

### Page Object Model

Page objects encapsulate page-specific locators and reusable actions. This separates test logic from UI implementation and improves maintainability.

### Custom Fixtures

The custom Playwright fixture initializes and provides the page objects to tests, avoiding repeated object creation in each test.

### Assertions and Synchronization

Playwright web-first assertions and automatic waiting are used to reduce timing-related issues. Fixed delays are avoided.

### Configuration

The Playwright configuration centralizes settings such as the base URL, browser, test directory, and HTML reporter.

## AI Assistance and Human Review

AI assisted with test scenario design, POM structure, locator suggestions, code drafting, troubleshooting, and documentation.

Human review and execution were used to identify and correct configuration issues, including missing environment variables, an incorrect base URL, and the need to navigate from checkout information to the checkout overview before clicking Finish.

Generated code and locators require validation against the actual application. The final test should be rerun after changes to confirm that it still passes.

## Limitations and Risks

- The automated test covers one successful purchase journey.
- It does not cover the full range of negative checkout scenarios.
- It verifies the UI confirmation, not backend order persistence or payment processing.
- The test depends on valid credentials and application availability.
- Cross-browser, accessibility, performance, and security testing are outside this test's scope.

## Test Execution Status

The end-to-end test was executed locally and passed during development. Rerun the commands above to validate the current repository version and environment.

## Repository

[GitHub Repository – Assessment-TenTwenty](https://github.com/KumarHanchinmani/Assessment-TenTwenty)
