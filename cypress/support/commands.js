Cypress.Commands.add('Registration', (firstName, lastName, email, password, confirmPassword) => {
    cy.visit('/')
    cy.get('a.ico-register').click()
    cy.url().should('include', "/register")
    cy.get('input#gender-female').check()
    cy.get('input#FirstName.text-box.single-line').type(firstName)
    cy.get('input#LastName.text-box.single-line').type(lastName)
    cy.get('input#Email.text-box.single-line').type(email)
    cy.get('input#Password.text-box.single-line.password').type(password)
    cy.get('input#ConfirmPassword.text-box.single-line.password').type(confirmPassword)
    cy.get('input#register-button.button-1.register-next-step-button').click()
})


Cypress.Commands.add('Login', (email, password) => {
    cy.visit('/')
    cy.get('a.ico-login').click()
    cy.url().should('include', '/login')
    cy.get('input#Email.email').type(email)
    cy.get('input#Password.password').type(password)
    cy.get('input.button-1.login-button').click()
})