// @ts-check
const {test, expect} = require('@playwright/test');

const name = "rahulshettyacademy";
const password = "learning";
test.only('Login test', async ({page}) => {
    const userName = page.locator("#username");
    const Userpassword = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    console.log(await page.title());
    await userName.fill(name);
    await Userpassword.fill(password);
    await page.locator("#terms").check();
    await expect(page.locator("#terms")).toBeChecked();
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toHaveText("Incorrect username/password.");
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");

    // console.log(await page.title());
    // await expect(page).toHaveTitle("Google");
    // await page.pause();
    // // await new Promise(() => {});
    

});