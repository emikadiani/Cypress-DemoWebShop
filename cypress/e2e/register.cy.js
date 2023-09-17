describe('Account registration trough register menu', () => {
 
})

it('TC 01 - Success Registration', () => {
  cy.fixture("dataUsers").then((users) => {
  const datauser = users;
    cy.Registration(datauser.firstName, datauser.lastName, datauser.email, datauser.password, datauser.confirmPassword)
    cy.url().should('eq', 'https://demowebshop.tricentis.com/registerresult/1')
    cy.contains('Your registration completed')
   })
})

it('TC 02 - Registration failed due first name field leave blank', () => {
  cy.fixture("dataUsers").then((users) => {
  const datauser = users;
  cy.Registration(" ", datauser.lastName, datauser.email, datauser.password, datauser.confirmPassword)
  cy.get('span.field-validation-error').should('be.visible')
  cy.contains('First name is required')
  })
})

it('TC 03 - Registration failed due last name field leave blank', () => {
  cy.fixture("dataUsers").then((users) => {
    const datauser = users;
    cy.Registration(datauser.firstName, " ", datauser.email, datauser.password, datauser.confirmPassword)
    cy.get('span.field-validation-error').should('be.visible')
    cy.contains('Last name is required')
  })
})

it('TC04 - Registration failed due wrong email', () => {
  cy.fixture("dataUsers").then((users) => {
    const datauser = users;
    cy.Registration(datauser.firstName, datauser.lastName, datauser.wrongEmail, datauser.password, datauser.confirmPassword)
    cy.get('span.field-validation-error').should('be.visible')
    cy.contains('Wrong email')
  })
})

it('TC 05 - Registration failed due password only contain three characters', () => {
  cy.fixture("dataUsers").then((users) => {
    const datauser = users;
    cy.Registration(datauser.firstName, datauser.lastName, datauser.wrongEmail, datauser.lessPassword, datauser.lessPassword)
    cy.get('span.field-validation-error').should('be.visible')
    cy.contains('The password should have at least 6 characters')
  })
})

it('TC 06 - Registration failed due confirm password doesnt match', () => {
  cy.fixture("dataUsers").then((users) => {
    const datauser = users;
    cy.Registration(datauser.firstName, datauser.lastName, datauser.email, datauser.password, datauser.wrongPassword)
    cy.get('span.field-validation-error').should('be.visible')
    cy.contains('The password and confirmation password do not match')
  })
})

it('TC 07 - Registration failed due to all field are blank', () => {
  cy.visit('/')
  cy.get('a.ico-register').click()
  cy.url().should('include', '/register')
  cy.get('input#register-button.button-1.register-next-step-button').click()
  cy.get('span.field-validation-error').should('be.visible')
  cy.contains('First name is required')
  cy.contains('Last name is required')
  cy.contains('Email is required')
  cy.contains('Password is required')
})

it('TC 08 - Registration failed due email already exist', () => {
  cy.fixture("dataUsers").then((users) => {
    const datauser = users;
    cy.Registration(datauser.firstName, datauser.lastName, datauser.email, datauser.password, datauser.confirmPassword)
    cy.get('div.validation-summary-errors').should('be.visible')
    cy.contains('The specified email already exist')
  })
})