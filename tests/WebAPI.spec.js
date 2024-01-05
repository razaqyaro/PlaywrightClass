import {test, expect, request} from '@playwright/test';

const loginPayload = {
    userEmail: "razaqyaro@gmail.com",
    userPassword: "razzy1234$Y"
}
let token;
test.beforeAll(async () => 
{
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data : loginPayload
    })
    expect((loginResponse).ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token =  loginResponseJson.token;
    console.log(token)
});
test("Hi", async ({page}) => {

});

test.only("Login with API call", async ({page}) => 
{
    
//     await page.goto("https://rahulshettyacademy.com/client");
//     await page.locator("#userEmail").fill("razaqyaro@gmail.com");
//     await page.locator("#userPassword").fill("razzy1234$Y");
//     await page.locator("[value='Login']").click();
//    // await page.locator(".card-body h5").first().waitFor();
//     await page.waitForLoadState('networkidle');
page.addInitScript(value => {
    window.localStorage.setItem('token', value)
}, token);
    const userEmail = "";
    const productName = "Zara Coat 3";
    await page.goto("https://rahulshettyacademy.com/client/");
    const products = page.locator(".card-body");
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
   //await page.locator("li[class='items even ng-star-inserted']").waitFor();
   const bool = await page.locator("h3:has-text('Zara Coat 3')").isVisible();
   expect(bool).toBeTruthy();
   console.log(bool);
   await page.getByRole('button', { name: 'Checkout❯' }).click();
   await page.locator("[placeholder='Select Country']").pressSequentially("Gha");
   const dropdown =  page.locator(".ta-results")
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for(let i = 0; i < optionsCount; i++)
   {
    let text = await dropdown.locator("button").nth(i).textContent();
    if(text.trim() == "Ghana")
    {
        await dropdown.locator("button").nth(i).click();
        break;
    }
   }
   expect(page.locator(".mt-5 [type='text']").first()).toHaveText(userEmail);
   const mailOnPage = await page.locator(".mt-5 [type='text']").first().textContent();
   console.log(mailOnPage);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order.");
   const orderIdText = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderIdText)
   const orderIdString = orderIdText.replace(/^\s*\|\s*|\s*\|\s*$/g, '');
   console.log(orderIdString);
   await page.locator("[routerlink='/dashboard/myorders']").first().click();
   await page.locator("tbody").waitFor();
   const rows =  page.locator("tbody tr");
   
   for(let i = 0; i < await rows.count(); i++)
   {
    const rowOrderID = await rows.nth(i).locator("th").textContent();
    if(orderIdString.includes(rowOrderID))
    {
        await rows.nth(i).locator("button").first().click()
        break;
    }

   }
  const orderDetails = await page.locator(".col-text").textContent();
  console.log(orderDetails)
  expect(orderIdString.includes(orderDetails)).toBeTruthy();

});