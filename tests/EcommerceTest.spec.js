// @ts-check
const {test, expect} = require('@playwright/test');

test.only("Validate Login test", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.locator(".card-body h5").first().waitFor();
    //await page.waitForLoadState('networkidle');
    const allTitles = await page.locator(".card-body h5").allTextContents();
    console.log(allTitles);
    await page.pause();
});