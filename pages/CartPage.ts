import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.getByRole('button', { name: /checkout/i });
    this.continueShoppingButton = page.getByRole('button', { name: /continue shopping/i });
  }

  async expectItemVisible(productName: string): Promise<void> {
    await expect(this.cartItems.filter({ hasText: productName })).toBeVisible();
  }

  async removeItem(productName: string): Promise<void> {
    const item = this.cartItems.filter({ hasText: productName });
    await item.getByRole('button', { name: /remove/i }).click();
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }

  async expectEmpty(): Promise<void> {
    await expect(this.cartItems).toHaveCount(0);
  }
}