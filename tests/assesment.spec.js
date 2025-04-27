import { test, expect } from '@playwright/test';

test('Assesment', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  await page.getByRole("link", {name : " Signup / Login"}).click()

  await page.getByRole("textbox", { name : "Name"}).fill("asa")
  await page.locator('form', { hasText: 'Signup' }).getByPlaceholder('Email Address').fill("roy@gmail.com")

//   await page.getByRole("textbox", {name: "Email Address"}).fill("roy@gmail.com")
  await page.getByRole("button", { name : "Signup"}).click()

  await page.getByText("Mr.").click();
  await page.getByRole("textbox", { name : "Password "}).fill("qwer123")
  await page.getByRole("combobox").first().selectOption( { index : 12 } );
  await page.getByRole("combobox").nth(1).selectOption( { index : 12 } );
  await page.getByRole("combobox").nth(2).selectOption( { index : 20 } );

  await page.getByText("Sign up for our newsletter!").click();
  await page.getByText("Receive special offers from our partners!").click();

  await page.getByRole("textbox", { name : "First name *"}).fill("vokti")
  await page.getByRole("textbox", { name : "Last name *"}).fill("roy")
  await page.getByRole("textbox", { name : "(Street address, P.O. Box, Company name, etc.)"}).fill("Dhaka")
  await page.getByRole("combobox").first(0).selectOption( { index : 2 } );

  await page.getByRole("textbox", { name : "State *"}).fill("roy")
  await page.getByRole("textbox", { name : "City * Zipcode *"}).fill("roy")
  await page.getByRole("textbox", { name : "Mobile Number *"}).fill("roy")
  
 
  await page.pause();
});