import config from "../config";

class MainPage {
    constructor(page){

        this.page = page
        this.cityConfirmation = page.getByRole('button', { name: 'Да' }); // Подтверждение города
        this.cityOfYekaterinburg = page.getByRole('button', { name: 'Екатеринбург' }); // город Екатеринбург
        //this.cityOfTyumen = page.getByRole('button', { name: 'Тюмень' }); //  город Тюмень
        //this.productSearchButton = page.getByRole('button', { name: 'Поиск продуктов' }); //  город Тюмень
        this.linkToTheAboutUsPage = page.getByRole('link', { name: 'О нас' }); // Ссылка на страницу "О нас"
        this.sectionWeRecommendToTry = page.locator('#category-wrap').getByText('Рекомендуем попробовать'); // Раздел 'Рекомендуем попробовать'
        this.sectionHotPizza = page.locator('#category-wrap').getByText('Горячая пицца'); // Раздел 'Горячая пицца'
        this.sectionRolls = page.locator('#category-wrap').getByText('Роллы',{ exact: true }); // Раздел 'Роллы'
        this.sectionBreakfast = page.locator('#category-wrap').getByText('Завтраки'); // Раздел 'Завтраки'
        this.sectionHotDishes = page.locator('#category-wrap').getByText('горячие блюда'); // Раздел 'горячие блюда'
        this.sectionSoups = page.locator('#category-wrap').getByText('Супы'); // Раздел 'Супы'
        this.sectionSandwiches = page.locator('#category-wrap').getByText('Сэндвичи'); // Раздел 'Сэндвичи'
        this.sectionBaking = page.locator('#category-wrap').getByText('Выпечка'); // Раздел 'Выпечка'
        this.sectionDesserts = page.locator('#category-wrap').getByText('Десерты'); // Раздел 'Десерты'
        this.sectionTea = page.locator('#category-wrap').getByText('Чай',{ exact: true }); // Раздел 'Чай'
        this.sectionCoffee = page.locator('#category-wrap').getByText('Кофе',{ exact: true }); // Раздел 'Кофе'
        this.sectionForCompany = page.locator('#category-wrap').getByText('Для компании'); // Раздел 'Для компании'
        this.sectionSmoothiesJuiceSoda = page.locator('#category-wrap').getByText('Смузи, сок и газировка'); // Раздел 'Смузи, сок и газировка'

    }

    getCity (city) {
      return this.page.getByRole('button', { name: city })
   }


    async goto() {
        await this.page.goto(config.mainUrl, { waitUntil: 'networkidle' });  // Переход на главную страницу с городом Екатеринбург
      }

      async clickProductSearchButton() //  Клик ро поиску продукта
      {
        await this.productSearchButton.click();
      }

      async clickCityConfirmation() //  Клик по подтверждению города
      {
        await this.cityConfirmation.click();
      }


    async clickLinkToTheAboutUsPage() //  Переход на страницу "О нас"
    {
      await this.linkToTheAboutUsPage.click();
    }

    async changingTheCity(from, to) {
      await this.getCity(from).click();
      await this.getCity(to).click();
   }

}



module.exports = {MainPage};