// @ts-check
const {test, expect} = require('@playwright/test');

test("Find Products and shop", async ({page}) =>
 {
    const productName = "I Phone";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("razaqyaro@gmail.com");
    await page.locator("#userPassword").fill("razzy1234$Y");
    await page.locator("[value='Login']").click();
    await page.locator(".card-body h5").first().waitFor();
    //await page.waitForLoadState('networkidle');
    const allTitles = await page.locator(".card-body h5").allTextContents();
    console.log(allTitles);
   const countOfItems = await products.count();
   for(let i = 0; i < countOfItems; i++)
   {
       const foundItems = await products.nth(i).locator("h5").textContent();
       if(foundItems == productName)
       {
       // await products.nth(i).locator("[class='fa fa-shopping-cart']").click();
        await page.locator('button:nth-child(4)').first().click();
        break;
       }
   }
   await page.locator("[routerlink='/dashboard/cart']").click();
   await page.getByRole('button', { name: 'Checkout❯' }).click();
   await page.pause();
});