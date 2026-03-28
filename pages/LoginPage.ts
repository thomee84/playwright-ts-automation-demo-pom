import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { User } from '../factories/user.factory';

export class LoginPage extends BasePage {
  private usernameInput = this.page.getByPlaceholder('Username');
  private passwordInput = this.page.getByPlaceholder('Password');
  private loginButton = this.page.getByRole('button', { name: 'Login' });
  private errorMessage = this.page.locator('[data-test="error"]');

  constructor(page: Page) {
    super(page);
  }

  async login(user: User) {
    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}
