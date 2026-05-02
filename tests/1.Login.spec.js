import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://testing101.net');
  // Verify that the page title is as expected
  await expect(page).toHaveTitle('Testing 101 | Software Testing 101');
  // Ensure the consent dialog is visible to the user
  await expect(page.getByRole('dialog', { name: 'This site asks for consent to use your data' })).toBeVisible();
  // Click the "Consent" button in the dialog
  await page.getByRole('button', { name: 'Consent' }).click();
  // Verify that the consent dialog is no longer visible after clicking
  await expect(page.getByRole('dialog', { name: 'This site asks for consent to use your data' })).toBeHidden();
  // Wait for the page to complete loading
  await page.waitForLoadState('load');
  await page.waitForTimeout(5000);
  // Click the Login button in the header
  await page.getByRole('button', { name: 'Log In' }).click();
  // Verify that the Sign Up pop-up is displayed
  await expect(page.getByRole('dialog', { name: 'Sign Up' })).toBeVisible();
  // Click the "Already a member? Log In" button
  await page.getByRole('button', { name: 'Already a member? Log In' }).click();
  // Verify that the Sign In pop-up is displayed
  await expect(page.getByRole('dialog', { name: 'Log In' })).toBeVisible();
  // Enter a valid email address in the Email field: andriitest7799@gmail.com
  await page.getByRole('textbox', { name: 'Email' }).fill('andriitest7799@gmail.com');
  // Verify that the entered email is displayed
  await expect(page.getByRole('textbox', { name: 'Email' })).toHaveValue('andriitest7799@gmail.com');
  // Enter a valid password into the Password field: Aa123_123
  await page.getByRole('textbox', { name: 'Password' }).fill('Aa123_123');
  // Verify that the entered Password is displayed
  await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('Aa123_123');
  // Click the Login button in the Sign In pop-up
  await page.getByRole('dialog', { name: 'Log In' }).getByRole('button', { name: 'Log In' }).click();
  // Verify that Account menu is present on the Header after Login
  await expect(page.getByRole('button', { name: 'andriitest7799 account' })).toBeVisible();
});
