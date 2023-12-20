import { test, expect } from '@playwright/test';

test('Abdul testing the code generating', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'How to install Playwright' }).click({
    button: 'right'
  });
  await page.getByRole('link', { name: 'How to install Playwright' }).click();
  await page.getByRole('tab', { name: 'yarn' }).click();
  await page.getByRole('tab', { name: 'pnpm' }).click();
  await page.getByLabel('Switch between dark and light').click();
  await page.getByLabel('Switch between dark and light').click();
  await page.getByRole('link', { name: 'Docs' }).click();
});

/**
 * If ID is present 
 * css -> tagName#id (or) #id
 * 
 * If class attribute is present
 * css -> tagName.class (or) .class
 * 
 * Write css based on any Attribute
 * css -> [attribute='value']
 * 
 * Write css with transversing from Parent to child
 * css -> parentTagName >> childTagName
 * 
 * If needs to write the locator based on text
 * text = ''
 */