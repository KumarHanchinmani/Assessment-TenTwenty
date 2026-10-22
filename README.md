# Playwright + TypeScript POM Framework

A starter Page Object Model framework for a browser-based e-commerce application. The sample locators currently match the common SauceDemo page structure; update them if you use a different application.

## Requirements
- Node.js LTS
- npm
- VS Code or another editor
- Authorized access to your test environment

## Install
```bash
npm install
npx playwright install chromium
```

## Configure
1. Copy `.env.example` to `.env`.
2. Set `BASE_URL` to your test environment URL.
3. Set `TEST_USERNAME` and `TEST_PASSWORD` for authenticated scenarios.
4. Do not commit `.env` or credentials. `.env` is excluded by `.gitignore`.

## Run
```bash
npm test
npm run test:headed
npm run test:debug
npm run report
npm run typecheck
```

## Structure
```text
pages/
  LoginPage.ts
  ProductsPage.ts
  CartPage.ts
  CheckoutPage.ts
fixtures/
  testFixtures.ts
tests/
  login.spec.ts
  cart.spec.ts
playwright.config.ts
```

## POM principles
- Page classes contain locators and page-level actions.
- Test specs describe scenarios and assertions.
- Use Playwright's built-in `page` and `context` fixtures.
- Prefer accessible locators when available; stable test IDs are also good.
- Avoid fixed sleeps; use auto-waiting and web-first assertions.
- Keep credentials in environment variables, not source code.

## Notes
- The login and cart tests use environment variables and skip authenticated scenarios when credentials are not configured.
- `.env.example` contains placeholders only.
- Update product names, locators, and expected messages to match the target app.
- The invalid-login test is a sample and should be run against the intended test environment.
- Run `npm run typecheck` and execute the tests locally before treating the framework as validated.

## Debugging
```bash
npx playwright test tests/login.spec.ts
npx playwright test -g "invalid credentials"
npm run report
```
