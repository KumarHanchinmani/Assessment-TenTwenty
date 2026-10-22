import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly productCards: Locator;
  readonly sortControl: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCards = page.locator('.inventory_item');
    this.sortControl = page.locator('[data-test="product-sort-container"]');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page.getByText('Products', { exact: true })).toBeVisible();
    await expect(this.productCards.first()).toBeVisible();
  }

  async sortBy(value: 'az' | 'za' | 'lohi' | 'hilo'): Promise<void> {
    await this.sortControl.selectOption(value);
  }

  async addProductToCart(productName: string): Promise<void> {
    const product = this.productCards.filter({ hasText: productName });
    await expect(product).toBeVisible();
    await product.getByRole('button', { name: /add to cart/i }).click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }

  async expectCartCount(count: number): Promise<void> {
    if (count === 0) {
      await expect(this.cartBadge).toHaveCount(0);
    } else {
      await expect(this.cartBadge).toHaveText(String(count));
    }
  }
}