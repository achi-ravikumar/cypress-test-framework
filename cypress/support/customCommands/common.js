
Cypress.Commands.add('homePage', () => {
    // cy.exec('npm cache clear --force')s
    cy.visit('/')
 
})

Cypress.Commands.add('login', (username, password) => {
    cy.get("#user-name").type(username)
    cy.get("#password").type(password)
    cy.get("#login-button").click()
})
