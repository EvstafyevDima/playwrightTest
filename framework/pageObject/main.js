import config from "../config";

class MainPage {
    constructor(page){

        this.page = page
        this.cityConfirmation = page.getByRole('button', { name: 'Да' }); // Подтверждение города
        this.cityOfYekaterinburg = page.getByRole('button', { name: 'Екатеринбург' }); // город Екатеринбург
        this.linkToTheAboutUsPage = page.getByRole('link', { name: 'О нас' }); // Ссылка на страницу "О нас"
        this.productSearchButton = page.getByRole('button', { name: 'Открыть поиск' })
        this.toggleNavbar = page.locator('#header').getByRole('button').first()


    }

    getCategory(category){
      return this.page.locator("//div[@class='category-settings']").getByText(category) // Метод возвращает категории

    }

    getCity (city) {
      return this.page.getByRole('button', { name: city })
   }


    async goto() 
      {
        await this.page.goto(config.mainUrl, { waitUntil: 'networkidle' });  // Переход на главную страницу с городом Екатеринбург
        await this.cityConfirmation.click(); //Клик по подтверждению города
      }

    async clickProductSearchButton() //  Клик по поиску продукта
      {
       await this.productSearchButton.click();
      }

    async clickLinkToTheAboutUsPage() //  Переход на страницу "О нас"
    {
      await this.toggleNavbar.click();
      await this.linkToTheAboutUsPage.click();
    }

    async changingTheCity(from, to) {
      await this.getCity(from).click();
      await this.getCity(to).click();
   }

}



module.exports = {MainPage};