describe('Login Scenario', () => {

})

it('TC 09 - Login Success', () => {
  cy.fixture("dataUsers").then((users) => {
    const datauser = users[0];
    cy.Login(datauser.email, datauser.password)
    cy.url().should('eq', 'https://demowebshop.tricentis.com/')
    cy.contains(datauser.email)
  })
})

it('TC 10 - Login failed due password invalid', () => {
  cy.fixture("dataUsers").then((users) => {
    const datauser = users[0];
    cy.Login(datauser.email, "Mira321")
    cy.get('div.validation-summary-errors').should('be.visible')
  })
})

it('TC 11 - Login failed due username invalid', () => {
  cy.fixture("dataUsers").then((users) => {
   const datauser = users[0];
   cy.Login("mirandafox@google.co", datauser.password)
    cy.get('div.validation-summary-errors').should('be.visible')
 })
})

it('TC 12 - Login failed due all field leave blank', () => {
  cy.visit('/')
  cy.get('a.ico-login').click()
  cy.get('input.button-1.login-button').click()
  cy.get('div.validation-summary-errors').should('be.visible')
})
