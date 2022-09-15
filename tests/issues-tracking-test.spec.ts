import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Go to http://localhost:4200/
  await page.goto('http://localhost:4200/');

  // Click text=Add new issue
  await page.locator('text=Add new issue').click();
  await expect(page.locator('h3')).toHaveText('Report an issue');

  // Click #clr-form-control-1
  await page.locator('#clr-form-control-1').click();

  // Fill #clr-form-control-1
  await page.locator('#clr-form-control-1').fill('Add new feature example');

  // Press Tab
  await page.locator('#clr-form-control-1').press('Tab');

  // Fill textarea
  await page.locator('textarea').fill('Example of adding new feature');

  // Click text=Low
  await page.locator('text=Low').click();

  // Select Feature
  await page.locator('select').selectOption('Feature');

  // Click text=Create
  await page.locator('text=Create').click();

  // Click #clr-dg-row11 div[role="gridcell"]
  await page.locator('#clr-dg-row11 div[role="gridcell"]').click();

  // Click text=Resolve
  await page.locator('text=Resolve').click();

  // Click text=Yes, continue
  await page.locator('text=Yes, continue').click();

  // Click text=Add new issue
  await page.locator('text=Add new issue').click();

  // Click text=Create
  await page.locator('text=Create').click();

  // Click text=Cancel
  await page.locator('text=Cancel').click();
});
