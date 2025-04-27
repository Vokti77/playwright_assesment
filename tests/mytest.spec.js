import { test, expect } from '@playwright/test';

test('Daily Finance', async ({ page }) => {
  await page.goto('https://dailyfinance.roadtocareer.net/');

  await page.getByRole("link", {name : "Register"}).click()

  await page.getByRole("textbox", { name : "First Name"}).fill("Roy")
  await page.getByRole("textbox", {name: "Last Name"}).fill("boy")
  await page.getByRole("textbox", {name: "Email"}).fill("roy@gmail.com")
  await page.getByRole("textbox", {name: "Password"}).fill("roy1234")
  await page.getByRole("textbox", {name: "Phone Number"}).fill("8889771234")
  await page.getByRole("textbox", {name: "Address"}).fill("Dhaka")

  
  await page.check('input[value="Male"]')
  await page.check('input[type="checkbox"]');


  await page.getByRole("button", {name: "REGISTER"}).click()

  
  
  
  await page.pause();
});