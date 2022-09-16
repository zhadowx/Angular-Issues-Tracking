import { test } from '@playwright/test';

test('add new issue', async ({ page }) => {
  // Go to http://localhost:4200/
  await page.goto('http://localhost:4200/');

  // Click text=Add new issue
  await page.locator('.btn', { hasText: 'Add new issue' }).click();
  // Click #clr-form-control-1
  await page.locator('#clr-form-control-1').click();
  // Fill #clr-form-control-1
  await page.locator('#clr-form-control-1').fill('Prueba');
  // Click textarea
  await page.locator('textarea').click();
  // Fill textarea
  await page.locator('textarea').fill('Descripcion de prueba');
  // Click text=High
  await page.locator('text=High').click();
  // Select Documentation
  await page.locator('select').selectOption('Documentation');
  // Click text=Create
  await page.locator('text=Create').click();
});
