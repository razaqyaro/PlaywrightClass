// @ts-check
const {test, expect} = require('@playwright/test');


test.only('Login test', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    console.log(await page.title());
    await page.locator('#username').fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await page.locator("#terms").check();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toHaveText("Incorrect username/password.");
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");

    // console.log(await page.title());
    // await expect(page).toHaveTitle("Google");
    // await page.pause();
    // // await new Promise(() => {});
    

});