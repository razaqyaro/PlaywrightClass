import {test, expect} from '@playwright/test';

test("Playwright Special locators", async({page}) => 
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Student").check();
    await page.getByLabel("Gender").selectOption("Male");
    await page.locator("[type='date']").click()
    await page.getByPlaceholder("Password").fill("9530924");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link", {name: 'Shop'}).click();
    await page.locator("app-card").filter({hasText: 'Blackberry'}).getByRole("button").click();
    await page.pause();
})

test.only("Browser page navigations, popups and hidden elements", async ({page}) => 
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://google.com");
    // await page.goBack();
    // await page.goForward();
    await page.locator("body").waitFor();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    //await page.pause();

    page.on('dialog', dialog => dialog.accept())
    await page.locator("#confirmbtn").click();

   // page.on('dialog', dialog => dialog.accept())
    const framePage = page.frameLocator("#courses-iframe")
    await framePage.locator("li a[href*='lifetime-access']:visible").click();
    let confirmNumber = await framePage.locator(".text h2").textContent();
    console.log(confirmNumber);
    confirmNumber = confirmNumber.split(" ")[1];
    console.log(confirmNumber);

    await page.pause();
})