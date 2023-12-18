// @ts-check
const {test, expect} = require('@playwright/test');


// test('Browser context playwright test', async ({browser}) =>
// {

//     const context = browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise");
//     console.log(await page.title());

// });
test.only('Login test', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    console.log(await page.title());
    await page.locator('#username').fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await page.locator("#signInBtn").click();
    await page.pause();
    //await new Promise(() => {});
})

test('Page Playwright test', async ({page}) =>
{
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
    await page.pause();
    // await new Promise(() => {});
    

});