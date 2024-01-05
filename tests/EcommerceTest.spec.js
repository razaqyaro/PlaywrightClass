//@ts-check
import {test, expect} from '@playwright/test';

test("Validate Login test", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("razaqyaro@gmail.com");
    await page.locator("#userPassword").fill("razzy1234$Y");
    await page.locator("[value='Login']").click();
    await page.locator(".card-body h5").first().waitFor();
    //await page.waitForLoadState('networkidle');
    const allTitles = await page.locator(".card-body h5").allTextContents();
    console.log(allTitles);
    await page.pause();
});

test("Register an account", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator(".text-reset").click();
    await page.locator("#firstName").fill("Abdul");
    await page.locator("#lastName").fill("Razak");
    await page.locator("#userEmail").fill("razaqyaro343@gmail.com");
    await page.locator("[formcontrolname='occupation']").selectOption("Student");
    await page.locator("input[value='Male']").click();
    await expect(page.locator("input[value='Male']")).toBeChecked();
    await page.locator("#userPassword").fill("Razzy1234$Y");
    await page.locator("#confirmPassword").fill("Razzy1234$Y");
    await page.locator("[type='checkbox']").click();
    await page.getByPlaceholder('enter your number').fill('5996687843');
    await page.getByRole('button', { name: 'Register' }).click();
    await page.getByRole('button', { name: 'Login' }).click();

    await page.pause();
})