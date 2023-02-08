import { expect, test } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('http://lesha-spr.github.io/react-validation/');
  await page.getByPlaceholder('Lastname').click();
  await page.getByPlaceholder('Lastname').fill('로보');
  //Fill last name
  await page.getByPlaceholder('Firstname').click();
  await page.getByPlaceholder('Firstname').fill('김베어');
  //fill first name
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('bear@gmail.com');
  //fill email
  await page.getByRole('combobox', { name: 'City*' }).selectOption('3');
  //fill dropbox
  await page.getByPlaceholder('Password', { exact: true }).click();
  await page.getByPlaceholder('Password', { exact: true }).fill('1004Qa%^&');
  //fill password
  await page.getByPlaceholder('Confirm password').click();
  await page.getByPlaceholder('Confirm password').fill('1004Qa%^&');
  //fill confirmpassword
  await page.getByLabel('I accept policy*').check();
  await page.locator('form').filter({ hasText: 'RegistrationValidate allFirstname*Lastname*Email*City*Choose your cityLondonKyiv' }).getByRole('button', { name: 'Submit' }).click();

});

