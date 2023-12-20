
const {test, expect} = require('@playwright/test');

test("Child window handle", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    const link = page.locator("[href*='documents-request']");
    
   const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            link.click(),
        ]
    )
    
    const text = await newPage.locator(".red").textContent();
    console.log(text);
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);
    const userName = domain.split(".")[0];
    await page.locator("#username").fill(userName);
    await page.pause();
});


