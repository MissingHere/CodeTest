import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://lesha-spr.github.io/react-validation/');
  await page.getByPlaceholder('username').click();
  await page.getByPlaceholder('username').fill('김베어');
  await page.getByPlaceholder('Leave your comment...').click();
  await page.getByPlaceholder('Leave your comment...').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Leave your comment...').fill('Hello ! how are you ? 안녕하세요 1234');
  await page.locator('form').filter({ hasText: 'Leave a commentHello ! how are you ? 안녕하세요 1234Submit' }).getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('text=Submit').first()).toBeEnabled()
});