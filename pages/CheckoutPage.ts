import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CheckoutData } from '../factories/checkout.factory';

export class CheckoutPage extends BasePage {
  private readonly firstName = this.page.getByPlaceholder('First Name');
  private readonly lastName = this.page.getByPlaceholder('Last Name');
  private readonly zipCode = this.page.getByPlaceholder('Zip/Postal Code');
  private readonly cancelButton = this.page.locator('[data-test="cancel"]');
  private readonly continueButton = this.page.locator('[data-test="continue"]');

  constructor(page: Page) {
    super(page);
  }

  async fillForm(data: CheckoutData) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.zipCode.fill(data.zipCode);
  }

  async continue() {
    await this.continueButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }
}
