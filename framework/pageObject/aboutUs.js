class AboutUs {
    constructor(page){

        this.page = page
        this.aboutUsTitle = page.getByRole('heading', { name: 'Жизньмарт, давайте знакомиться' })

        


    }

}

module.exports = {AboutUs};