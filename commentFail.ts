import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://lesha-spr.github.io/react-validation/');

  await page.locator('form').filter({ hasText: 'Leave a commentCommentSubmit' }).getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('text=Submit').first()).toBeDisabled()
});