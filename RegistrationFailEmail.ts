import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://lesha-spr.github.io/react-validation/');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('123#');
  await page.getByLabel('I accept policy*').check();
  const a =  page.locator("form-error is-visible").textContent()
  console.log(a)
  expect(await a ==='is not a valid email.').toBeTruthy()
  await expect(page.locator('text=Submit').first()).toBeDisabled()
});