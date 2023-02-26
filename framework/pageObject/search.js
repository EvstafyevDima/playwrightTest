import config from "../config";

class Search {
    constructor(page){

        this.page = page
        this.productSearchBar = page.getByPlaceholder('Искать в Жизньмарт') // Строка с поиском
        this.theNameOfTheFoundProduct = page.getByText('Индейка с фитнеса') // Наименование товара "Индейка с фитнеса"
        this.PhotoOfTheFoundProduct = page.getByRole('img', { name: 'Индейка с фитнеса' }).nth(2) // Фото найденного товара "Индейка с фитнеса"

        


    }

    async goto() {
        await this.page.goto(config.search, { waitUntil: 'networkidle' });  // Страница поиска товара
      }

      async searchProduct() //  Клик по кнопке добавления показателя
      {
        await this.productSearchBar.click();
        await this.productSearchBar.fill('Индейка с фитнеса');
      }

      async clickTheNameOfTheFoundProduct() //  Клик по товару "Индейка с фитнеса"
      {
        await this.theNameOfTheFoundProduct.click();
      }

}

module.exports = {Search};
