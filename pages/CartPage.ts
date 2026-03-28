import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Product } from '../factories/product.factory';

export class CartPage extends BasePage {
  private continueShoppingButton = this.page.locator('[data-test="continue-shopping"]');
  private checkoutButton = this.page.locator('[data-test="checkout"]');
  private itemQuantity = this.page.locator('.cart_quantity');

  constructor(page: Page) {
    super(page);
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async removeItem(product: Product) {
    await this.page
      .locator('.cart_item')
      .filter({ hasText: product.name })
      .locator('[data-test^="remove-"]')
      .click();
  }

  async getCartItemCount(): Promise<number | null> {
    const text = await this.itemQuantity.textContent();
    return parseInt(text ?? '0');
  }

  async expectItemInCart(product: Product): Promise<string | null> {
    return this.page
      .locator('.cart_item')
      .filter({ hasText: product.name })
      .locator('.inventory_item_name')
      .textContent();
  }

  async getItemPrice(product: Product): Promise<string | null> {
    return this.page
      .locator('.cart_item')
      .filter({ hasText: product.name })
      .locator('.inventory_item_price')
      .textContent();
  }
}
