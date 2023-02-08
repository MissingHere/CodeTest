import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://lesha-spr.github.io/react-validation/');
  await page.getByPlaceholder('Firstname').click();
  await page.getByPlaceholder('Firstname').fill('Random');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('random@naver.com');
  await page.getByRole('combobox', { name: 'City*' }).selectOption('3');
  await page.getByPlaceholder('Password', { exact: true }).click();
  await page.getByPlaceholder('Password', { exact: true }).fill('1234');
  await page.getByPlaceholder('Confirm password').click();
  await page.getByPlaceholder('Confirm password').fill('1234');
  await page.getByLabel('I accept policy*').check();
  await page.locator('form').filter({ hasText: 'RegistrationValidate allFirstname*Lastname*Email*City*Choose your cityLondonKyiv' }).getByRole('button', { name: 'Submit' }).click();
  const content = await page.innerText(".form-error is-visible")
  console.log(content)
  expect(content.includes("Required")).toBeTruthy()
  const contentColor = await page.locator(".form-error is-visible").evaluate((ele)=>{return window.getComputedStyle(ele).getPropertyValue("color")})
  expect(contentColor==="#ec5840")
  const contentColor2 = await page.locator(".is-invalid-input undefined").evaluate((ele)=>{return window.getComputedStyle(ele).getPropertyValue("background-color")})
  expect(contentColor2 ==="rgba(236, 88, 64, 0.1)")
  await expect(page.locator('text=Submit').first()).toBeDisabled()



});