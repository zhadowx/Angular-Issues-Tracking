import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost:4200/
  await page.goto('http://localhost:4200/');

  // Click text=Add new issue
  await page.locator('text=Add new issue').click();

  // Click #clr-form-control-1
  await page.locator('#clr-form-control-1').click();

  // Press F12
  await page.locator('#clr-form-control-1').press('F12');

  // Fill #clr-form-control-1
  await page.locator('#clr-form-control-1').fill('a');

  // Click textarea
  await page.locator('textarea').click();

  // Fill textarea
  await page.locator('textarea').fill('a');

  // Click text=Low
  await page.locator('text=Low').click();

  // Click text=TitleDescriptionPriorityLowHighTypeFeatureBugDocumentationCreateCancel
  await page.locator('text=TitleDescriptionPriorityLowHighTypeFeatureBugDocumentationCreateCancel').click();

  // Select Feature
  await page.locator('select').selectOption('Feature');

  // Click text=Create
  await page.locator('text=Create').click();

});