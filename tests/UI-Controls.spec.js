// @ts-check
const {test, expect} = require('@playwright/test');

test("Dropdown test", async({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    await page.setViewportSize({width: 1080, height:1920 });
    const userName = page.locator("#username");
    const link = page.locator("[href*='documents-request']");
    const Userpassword = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    const dropdown =  await page.locator("select.form-control");
    await dropdown.selectOption("Teacher");
    await page.locator(".customradio").last().click();
    await page.locator("#okayBtn").click();
  //  userRadio.click();
    expect(await page.locator(".customradio").last()).toBeChecked();
    console.log(await page.locator(".customradio").last().isChecked())
    await page.locator("#terms").click();
    expect(await page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    console.log(await page.locator("#terms").isChecked());
    await expect(link).toHaveAttribute("class", "blinkingText");
  //  okayButton.click();
    await page.pause();
});


