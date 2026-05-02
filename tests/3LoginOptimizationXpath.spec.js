import { test, expect } from '@playwright/test';

test.only('Login with valid credentials', async ({ page }) => {
  const baseUrl = 'https://testing101.net';
  await page.goto(baseUrl);
  // Verify that the page title is as expected
  const mainHeading = page.locator('//div[@data-testid="richTextElement"]//span[normalize-space(text())="Software Testing 101"]');
  await expect(mainHeading).toBeVisible();
  // Ensure the consent dialog is visible to the user
  const consentDialog = page.locator('//div[@role="dialog" and @aria-label="This site asks for consent to use your data"]');
  await expect(consentDialog).toBeVisible();
  // Click the "Consent" button in the dialog
  const consentButton = page.locator('//button[@role="button" and @aria-label="Consent"]');
  await consentButton.click();
  // Verify that the consent dialog is no longer visible after clicking
  await expect(consentDialog).toBeHidden();
  // Wait for the page to complete loading
  await page.waitForLoadState('load');
  await page.waitForTimeout(5000);
  // Click the Login button in the header
  const headerLoginButton = page.locator('//button[@data-testid="handle-button" and .//span[normalize-space(text())="Log In"]]');
  await headerLoginButton.click();
  // Verify that the Sign Up pop-up is displayed
  const signUpDialog = page.locator('//h2[@data-testid="signUp.headline"]');
  await expect(signUpDialog).toBeVisible();
  // Click the "Already a member? Log In" button
  const alreadyMemberLoginButton = page.locator('//button[@aria-label="Already a member? Log In"]');
  await alreadyMemberLoginButton.click();
  // Verify that the Sign In pop-up is displayed
  const signInDialog = page.locator('//h2[starts-with(@id, "loginHeadline_")]');
  await expect(signInDialog).toBeVisible();
  // Enter a valid email address in the Email field: andriitest7799@gmail.com
  const emailField = page.locator('//input[@type="email" and @autocomplete="email"]');
  const validEmail = 'andriitest7799@gmail.com';
  await emailField.fill(validEmail);
  // Verify that the entered email is displayed
  await expect(emailField).toHaveValue(validEmail);
  // Enter a valid password into the Password field: Aa123_123
  const passwordField = page.locator('//input[@type="password" and @autocomplete="current-password"]');
  const validPassword = 'Aa123_123';
  await passwordField.fill(validPassword);
  // Verify that the entered Password is displayed
  await expect(passwordField).toHaveValue(validPassword);
  // Click the Login button in the Sign In pop-up
  const signInLoginButton = page.locator('//button[@data-testid="buttonElement" and @aria-label="Log In"]');
  await signInLoginButton.click();
  // Verify that Account menu is present on the Header after Login
  const accountMenuButton = page.locator('//div[@data-testid="handle-button" and @role="button" and .//span[text()="Hello"] and contains(., "andriitest7799")]');
  await expect(accountMenuButton).toBeVisible();
});
