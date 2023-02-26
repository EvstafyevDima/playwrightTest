import { test, expect } from '@playwright/test';

let name = 'Дима1';
let email = 'wdwq@gmail.com';
let page;


test('submittingForm', async ({page}) => {
  
  let nameReturn = page.locator('text=' + 'Name:Дима');

  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill(name);
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill(email);
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('ааа');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('ыаыа');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(nameReturn).toBeVisible();
  await expect(page.getByText('Email:wdwq@gmail.com')).toBeVisible();
  await expect(page.getByText('Current Address :ааа')).toBeVisible();
  await expect(page.getByText('Permananet Address :ыаыа')).toBeVisible();

  expect(await page.screenshot({fullPage: true})).toMatchSnapshot(['createEmptyMetric.png'], {
    maxDiffPixels: 10});
});

test('Invalid email', async ({page}) => {
  
  let nameReturn = page.locator('text=' + 'Name:Дима');

 await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill(name);
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill("456");
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('ааа');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('ыаыа');
  await page.getByRole('button', { name: 'Submit' }).click();

  /*const btn = page.locator("#userEmail")
  const color = await btn.evaluate((ele)=>{
    return window.getComputedStyle(ele).getPropertyValue("border")

  })
  console.log(color)
  expect(color).toBe("1px solid rgb(222, 143, 147)")*/

  await expect(nameReturn).toHaveCount(0)
  await expect(page.getByText('Email:wdwq@gmail.com')).toHaveCount(0)
  await expect(page.getByText('Current Address :ааа')).toHaveCount(0)
  await expect(page.getByText('Permananet Address :ыаыа')).toHaveCount(0)

  expect(await page.screenshot({fullPage: true})).toMatchSnapshot(['invalidEmail.png'], {
    maxDiffPixels: 10});
});

test('Refresh the page After receiving the result', async ({page}) => {
  
  let nameReturn = page.locator('text=' + 'Name:Дима');

  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill(name);
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill(email);
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('ааа');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('ыаыа');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.reload();

  await expect(nameReturn).toHaveCount(0)
  await expect(page.getByText('Email:wdwq@gmail.com')).toHaveCount(0)
  await expect(page.getByText('Current Address :ааа')).toHaveCount(0)
  await expect(page.getByText('Permananet Address :ыаыа')).toHaveCount(0)
});

test('Updating the information in the submission form', async ({page}) => {
  
  let nameReturn = page.locator('text=' + 'Name:Дима');

  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill(name);
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill(email);
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('ааа');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('ыаыа');
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.locator('#permanentAddress-wrapper #permanentAddress').click();
  await page.locator('#permanentAddress-wrapper #permanentAddress').fill('ыаыццццца');
  await page.getByRole('button', { name: 'Submit' }).click();


  await expect(nameReturn).toBeVisible();
  await expect(page.getByText('Email:wdwq@gmail.com')).toBeVisible();
  await expect(page.getByText('Current Address :ааа')).toBeVisible();
  await expect(page.getByText('Permananet Address :ыаыццццца')).toBeVisible();

  await expect(page.getByText('Permananet Address :ыаыа')).toHaveCount(0)
});



test('submittingForm and click element', async ({page}) => {
  
  let nameReturn = page.locator('text=' + 'Name:Дима');

  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill(name);
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill(email);
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('ааа');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('ыаыа');
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.locator('span').filter({ hasText: 'Elements' }).locator('svg').nth(1).click();

  await expect(nameReturn).toBeVisible();
  await expect(page.getByText('Email:wdwq@gmail.com')).toBeVisible();
  await expect(page.getByText('Current Address :ааа')).toBeVisible();
  await expect(page.getByText('Permananet Address :ыаыа')).toBeVisible();
  await page.waitForTimeout(200)

  expect(await page.screenshot({fullPage: true})).toMatchSnapshot(['closingAnElement.png'], {
    maxDiffPixels: 10});
});