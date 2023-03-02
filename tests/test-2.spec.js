import { test, expect } from '@playwright/test';
import { before } from 'node:test';
const {MainPage} = require('../framework/pageObject/main')
const {Search} = require('../framework/pageObject/search')
import config from "../framework/config";


test('Поиск категорий на странице', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.goto();
  await mainPage.clickCityConfirmation()

  await expect(mainPage.sectionWeRecommendToTry).toBeVisible();
  await expect(mainPage.sectionHotPizza).toBeVisible();
  await expect(mainPage.sectionRolls).toBeVisible();
  await expect(mainPage.sectionBreakfast).toBeVisible();
  await expect(mainPage.sectionHotDishes).toBeVisible();
  await expect(mainPage.sectionSoups).toBeVisible();
  await expect(mainPage.sectionSandwiches).toBeVisible();
  await expect(mainPage.sectionBaking).toBeVisible();
  await expect(mainPage.sectionDesserts).toBeVisible();
  await expect(mainPage.sectionTea).toBeVisible();
  await expect(mainPage.sectionCoffee).toBeVisible();
  await expect(mainPage.sectionForCompany).toBeVisible();
  await expect(mainPage.sectionSmoothiesJuiceSoda).toBeVisible();;
});

test('Переход на страницу о нас', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.goto();
  await mainPage.clickCityConfirmation()
  await mainPage.clickLinkToTheAboutUsPage()

  await page.waitForTimeout(2000)

  await expect(page).toHaveURL(config.usPage);
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot(['usPage.png'], {
    maxDiffPixels: 100});
});

test('Клик по найденому товару', async ({ page }) => {
  const mainPage = new MainPage(page);
  const search = new Search(page);

  await mainPage.goto();
  await mainPage.clickCityConfirmation()
  await mainPage.clickProductSearchButton()
  await search.searchProduct()
  await search.clickTheNameOfTheFoundProduct()

  expect(await search.PhotoOfTheFoundProduct.screenshot()).toMatchSnapshot(['foundProduct.png'], {
    maxDiffPixels: 100});
});


test('Поиск товара', async ({ page }) => {
  const mainPage = new MainPage(page);
  const search = new Search(page);

  await mainPage.goto();
  await mainPage.clickCityConfirmation()
  await mainPage.clickProductSearchButton()
  await search.searchProduct()

 await expect(page).toHaveURL(config.search);
  await expect(search.theNameOfTheFoundProduct).toHaveCount(1)
});


test('Смена города', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.goto();
  await mainPage.clickCityConfirmation()
  //await mainPage.getCity()
  await mainPage.changingTheCity('Екатеринбург', 'Тюмень')
  //await mainPage.changingTheCity()

  await expect(mainPage.getCity('Тюмень')).toHaveCount(1)
  await expect(mainPage.getCity('Екатеринбург')).toHaveCount(0)
});