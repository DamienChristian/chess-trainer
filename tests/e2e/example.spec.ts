import { test, expect } from '@playwright/test';

test('homepage has correct title', async ({ page }) => {
  await page.goto('/');

  // Expect the page to have a title or heading
  await expect(page).toHaveTitle(/Chess Trainer/i);
});

test('can navigate to home page', async ({ page }) => {
  await page.goto('/');

  // Page should load successfully
  await expect(page.locator('body')).toBeVisible();
});
