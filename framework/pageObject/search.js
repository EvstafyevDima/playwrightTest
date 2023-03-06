import config from "../config";

class Search {
    constructor(page){

        this.page = page
        this.productSearchBar = page.getByPlaceholder('Искать в Жизньмарт') // Строка с поиском
        this.PhotoOfTheFoundProduct = page.getByRole('img', { name: 'курица гриль' }).nth(1) // Фото найденного товара "Индейка с фитнеса"

        


    }

    async goto() {
        await this.page.goto(config.search, { waitUntil: 'networkidle' });  // Страница поиска товара
      }

      async searchProduct(fillProduct) //  Клик по кнопке добавления показателя
      {
        await this.productSearchBar.click();
        await this.productSearchBar.fill(fillProduct);
      }

      async clickTheNameOfTheFoundProduct(nameProduct) //  Клик по товару "Индейка с фитнеса"
      {
        await this.page.waitForTimeout(1000)
        return this.page.getByText(nameProduct).nth(1).click()
        //await this.getCity(nameProduct).click();
      }

      getCity (nameProduct) 
      {
        return this.page.getByText(nameProduct)
     }
}

module.exports = {Search};
