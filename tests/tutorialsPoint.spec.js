import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { generateRandomNumber } from "../Utils/utils.js"

test( 'Registration Form Automation' , async ( {page} ) => { 

    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");

    await page.getByPlaceholder("First Name").fill(faker.person.firstName());
    await page.getByPlaceholder("name@example.com").fill(faker.internet.email());
    await page.locator("#gender").click();
    await page.getByRole( "textbox" , { name : "Mobile(10 Digits):" } )
                           .fill( "018" + generateRandomNumber(1000000,9999999) );

    await page.locator("#dob"). fill( "2002-02-18" );

    await page.getByText("Sports").click();

    await page.getByRole( "button", { name : "Picture: State and City" } )
                        .setInputFiles("./resources/profileImage.jpeg");
    
    
    await page.getByRole("combobox").first().selectOption("Uttar Pradesh");
    await page.getByRole("combobox").last().selectOption( { value : "Agra" } );
    //await page.getByRole("combobox").last().selectOption( { index : 2 } );
   
      await page.pause()







})