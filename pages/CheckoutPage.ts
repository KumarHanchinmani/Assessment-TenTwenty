import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly confirmationHeading: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByPlaceholder(/first name/i);
    this.lastNameInput = page.getByPlaceholder(/last name/i);
    this.postalCodeInput = page.getByPlaceholder(/zip\/postal code/i);
    this.continueButton = page.getByRole('button', { name: /continue/i });
    this.finishButton = page.getByRole('button', { name: /finish/i });
    this.confirmationHeading = page.getByRole('heading', { name: /thank you for your order/i });
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async fillCustomerInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueToOverview(): Promise<void> {
    await this.continueButton.click();
  }

  async finishOrder(): Promise<void> {
    await this.finishButton.click();
  }

  async verifyOrderConfirmation(): Promise<void> {
    await expect(this.confirmationHeading).toBeVisible();
  }
}