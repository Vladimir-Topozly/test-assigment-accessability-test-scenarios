// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('fillRegistrationForm', (email, password, lastname, name, phone) => {
    get('#header > div.nav > div > div > nav > div.header_user_info > a').click()
    cy.get('#SubmitCreate > span').click()
    cy.url().should('eq', 'https://marksandspicy.com/create-account.html');
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#password2').type(password)
    cy.get('div > span:nth-child(3) > label.lbl_checkbox').click()
    cy.get('#nom').type(lastname)
    cy.get('#prenom').type(name)
    cy.get('#dateJour').type('10')
    cy.get('#dateMois').type('10')
    cy.get('#dateAnnee').type('1991')
    cy.get('#adresse').type('1 Lengsington Ave.')
    cy.get('#adresseDetail').type('10')
    cy.get('#adresseDetail2').type('11')
    cy.get('#codePostal').type('90002')
    cy.get('#lieuDit').type('California')
    cy.get('#telephonePortable').type(phone)
    cy.get('#telephoneFixe').type(phone)
    cy.get('#telephoneFixe').type(phone)
})