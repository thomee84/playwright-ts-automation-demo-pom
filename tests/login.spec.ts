import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UserFactory } from '../factories/user.factory';

test('Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = UserFactory.standardUser();

  await loginPage.navigate('/');
  await loginPage.login(user);

  await expect(page).toHaveURL(/inventory/);
});
