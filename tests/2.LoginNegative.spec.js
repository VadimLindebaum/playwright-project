import { test, expect } from '@playwright/test';

test('1. Login with an empty Login Form field', async ({ page }) => {
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
  // Click the Login button without filling any fields
  await page.getByRole('dialog', { name: 'Log In' }).getByRole('button', { name: 'Log In' }).click();
  // Verify that the Email error message is displayed
  await expect(page.getByRole('dialog', { name: 'Log In' }).getByText('Email cannot be blank')).toBeVisible();
  // Verify that the Password error message is displayed
  await expect(page.getByRole('dialog', { name: 'Log In' }).getByText('Make sure you enter a password.')).toBeVisible();
});

test('2. Login with an empty Email field', async ({ page }) => {
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
  // Enter a password but leave Email field empty
  await page.getByRole('textbox', { name: 'Password' }).fill('Aa123_123');
  // Click the Login button
  await page.getByRole('dialog', { name: 'Log In' }).getByRole('button', { name: 'Log In' }).click();
  // Verify that the Email error message is displayed
  await expect(page.getByRole('dialog', { name: 'Log In' }).getByText('Email cannot be blank')).toBeVisible();
});

test('3. Login with an empty Password field', async ({ page }) => {
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
  // Enter an email but leave Password field empty
  await page.getByRole('textbox', { name: 'Email' }).fill('andriitest7799@gmail.com');
  // Click the Login button
  await page.getByRole('dialog', { name: 'Log In' }).getByRole('button', { name: 'Log In' }).click();
  // Verify that the Password error message is displayed
  await expect(page.getByRole('dialog', { name: 'Log In' }).getByText('Make sure you enter a password.')).toBeVisible();
});

test('4. Login with the Invalid format of the Email', async ({ page }) => {
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
  // Enter an invalid email format
  await page.getByRole('textbox', { name: 'Email' }).fill('invalidemail');
  // Enter a password
  await page.getByRole('textbox', { name: 'Password' }).fill('Aa123_123');
  // Click the Login button
  await page.getByRole('dialog', { name: 'Log In' }).getByRole('button', { name: 'Log In' }).click();
  // Verify that the invalid email format error message is displayed
  await expect(page.getByRole('dialog', { name: 'Log In' }).getByText('Double check your email and try again.')).toBeVisible();
});

test('5. Login with the incorrect password', async ({ page }) => {
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
  // Enter a valid email address
  await page.getByRole('textbox', { name: 'Email' }).fill('andriitest7799@gmail.com');
  // Enter an incorrect password
  await page.getByRole('textbox', { name: 'Password' }).fill('wrongpassword');
  // Click the Login button
  await page.getByRole('dialog', { name: 'Log In' }).getByRole('button', { name: 'Log In' }).click();
  // Wait for the error message to appear
  await page.waitForTimeout(2000);
  // Verify that the incorrect password error message is displayed
  await expect(page.getByRole('dialog', { name: 'Log In' }).getByText('Wrong email or password')).toBeVisible();
});

test('6. Login with a non-existent user email', async ({ page }) => {
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
  // Enter a non-existent email address
  await page.getByRole('textbox', { name: 'Email' }).fill('nonexistent@example.com');
  // Enter a password
  await page.getByRole('textbox', { name: 'Password' }).fill('test123');
  // Click the Login button
  await page.getByRole('dialog', { name: 'Log In' }).getByRole('button', { name: 'Log In' }).click();
  // Wait for the error message to appear
  await page.waitForTimeout(2000);
  // Verify that the non-existent email error message is displayed
  await expect(page.getByRole('dialog', { name: 'Log In' }).getByText("This email doesn't match any account. Try again.")).toBeVisible();
});
