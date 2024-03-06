import { test, expect } from '@playwright/test';

test('register User', async ({ page }) => {
  //Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');

  //Verify that home page is visible successfully
  await expect(page).toHaveTitle('Automation Exercise');

  //Click on 'Signup / Login' button
  await page.locator('//a[@href="/login"]').click();

  //Verify 'New User Signup!' is visible
  await expect(page.locator("//h2[text()='New User Signup!']")).toBeVisible();

  //Enter name and email address
  await page.locator("//input[@placeholder='Name']").fill('NgocDao');
  await page.locator('//input[@data-qa="signup-email"]').fill('Daothingoc999@gmail.com');

  //Click 'Signup' button
  await page.locator('//button[@data-qa="signup-button"]').click();

  //Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(page.locator("//b[text()='Enter Account Information']")).toBeVisible();

  //Fill details: Title, Name, Email, Password, Date of birth
  await page.locator('//input[@id="id_gender2"]').click();
  await page.locator('//input[@id="password"]').fill('Ngoc12345@');

  //Select checkbox 'Sign up for our newsletter!'
  await page.locator('//input[@name="newsletter"]').click();

  //Select checkbox 'Receive special offers from our partners!'
  await page.locator('//input[@name="optin"]');

  //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  await page.locator('//input[@id="first_name"]').fill('Dao');
  await page.locator('//input[@id="last_name"]').fill('Ngoc');
  await page.locator('//input[@id="company"]').fill('Zinna');
  await page.locator('//input[@id="address1"]').fill('Ha Noi');
  await page.locator('//input[@id="address2"]').fill('Ba Dinh');
  await page.locator('//select[@id="country"]').click();
  await page.locator('//option[@value="Canada"]').click();
  await page.locator('//input[@id="state"]').fill('Area');
  await page.locator('//input[@id="city"]').fill('Ottwa');
  await page.locator('//input[@id="zipcode"]').fill('K1A0B1');
  await page.locator('//input[@id="mobile_number"]').fill('0972565720');

  //Click 'Create Account button'
  await page.locator('//button[contains(text(),"Create Account")]').click();

  //Verify that 'ACCOUNT CREATED!' is visible
    await expect(page.locator('//b[@xpath="1"]')).toHaveText('Account Created');

  //Click 'Continue' button
  await page.locator("//a[contains(text(),'Continue')]").click();

  //Verify that 'Logged in as username' is visible
  await expect(page.locator('//body[1]/header[1]/div[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[10]/a[1]')).toBeVisible;

  //Click 'Delete Account' button
  await page.locator('//a[text()=" Delete Account"]').click();

  //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(page.locator('//b[@xpath="1"]')).toHaveText('ACCOUNT DELETED!');
})

