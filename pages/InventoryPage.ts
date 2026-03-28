import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Product } from '../factories/product.factory';

export class InventoryPage extends BasePage {
  private productCard = this.page.locator('.inventory_item');
  private productSort = this.page.locator('.product_sort_container');
  private cartCheckout = this.page.locator('.shopping_cart_link');

  constructor(page: Page) {
    super(page);
  }

  async addToCart(product: Product) {
    await this.productCard
      .filter({ hasText: product.name })
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }
  async sortBy(option: string) {
    await this.productSort.selectOption(option);
  }

  async openCart() {
    await this.cartCheckout.click();
  }
}
