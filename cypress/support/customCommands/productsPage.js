

Cypress.Commands.add('validate_products_page_displayed', () => {
    cy.contains('Products')
})


Cypress.Commands.add('get_product_btn_with_highest_price', () => {
    const pricesList = []

    cy.get('#inventory_container .inventory_item')
        .each((item, index) => {
            const pricetext = item.find('.inventory_item_price').text().replace('$', '')
            pricesList.push({ price: parseFloat(pricetext), cart: item.find('.btn_small.btn_inventory') })
        })
        .then(() => {
            const sortedPrices = pricesList.sort((a, b) => b.price > a.price ? 1 : -1)
            return sortedPrices[0].cart
        }) 
})

Cypress.Commands.add('products_add_to_cart_highest_price', () => {
    cy.get_product_btn_with_highest_price()
    .then((cartBtn) => {
        cartBtn.click()
    })
})

Cypress.Commands.add('validate_highest_prices_in_cart', () => {
    const pricesList = []

    cy.get_product_btn_with_highest_price()
    .then((cartBtn) => {
        return cartBtn.text()
    })
    .should('equal', 'Remove') 
})