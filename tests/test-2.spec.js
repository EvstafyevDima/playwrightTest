import { test, expect } from '@playwright/test';
const {MainPage} = require('../framework/pageObject/main')
const {Search} = require('../framework/pageObject/search')
import config from "../framework/config";
const {AboutUs} = require('../framework/pageObject/aboutUs')


test('Поиск категорий на странице', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.goto();

  const categories = [
    'Горячая пицца',
    'Постные блюда',
    'Рекомендуем попробовать',
    'Новинки',
    'Постные блюда',
    'Роллы',
    'Завтраки',
    'Горячие блюда',
    'Супы',
    'Сэндвичи',
    'Салаты',
    'Выпечка'
  ];  

  for (const categoryName of categories) {
    await expect(mainPage.getCategory(categoryName)).toBeVisible()
  }
});

test.only('Переход на страницу о нас', async ({ page }) => {
  const mainPage = new MainPage(page);
  const aboutUs = new AboutUs(page);

  await mainPage.goto();
  await mainPage.clickLinkToTheAboutUsPage()

  await page.waitForTimeout(2000)

  await expect(page).toHaveURL(config.usPage);
  await expect(aboutUs.aboutUsTitle).toBeVisible()
});

test('Клик по найденому товару', async ({ page }) => {
  const mainPage = new MainPage(page);
  const search = new Search(page);

  await mainPage.goto();
  await mainPage.clickProductSearchButton()
  await search.searchProduct("курица гриль")
  await search.clickTheNameOfTheFoundProduct("курица гриль")

  expect(await search.PhotoOfTheFoundProduct.screenshot()).toMatchSnapshot(['foundProduct2.png'], {
    maxDiffPixels: 100});
});


test('Поиск товара', async ({ page }) => {
  const mainPage = new MainPage(page);
  const search = new Search(page);

  await mainPage.goto();
  await mainPage.clickProductSearchButton()
  await search.searchProduct("курица гриль")

 await expect(page).toHaveURL(config.search);
 await expect(search.getCity("курица гриль")).toHaveCount(1)
});


test('Смена города', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.goto();
  //await mainPage.getCity()
  await mainPage.changingTheCity('Екатеринбург', 'Тюмень')
  //await mainPage.changingTheCity()

  await expect(mainPage.getCity('Тюмень')).toHaveCount(1)
  await expect(mainPage.getCity('Екатеринбург')).toHaveCount(0)
});