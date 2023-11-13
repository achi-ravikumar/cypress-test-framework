describe('Base test', () => {


    it('home page', () => {

        cy.homePage()
        .login("standard_user","secret_sauce")
        .validate_products_page_displayed()
        .products_add_to_cart_highest_price()
        .validate_highest_prices_in_cart()
    })


})