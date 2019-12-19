describe('The Login Page test', function() {
    const email = "test@test.com"
    const password = "ThisIs@T3st"
    const sign_in_button = '#header > div.nav > div > div > nav > div.header_user_info > a'

    before( function () {
        cy.visit('https://marksandspicy.com');
    });

    it('Should display an error message after login failure', function() {
        cy.get(sign_in_button).click()
        // we should be redirected to login page
        cy.url().should('include', '/login')
        cy.get('#email').type(email)
        .should('have.value', email)
        cy.get('#passwd').type(password)
        .should('have.value', password)
        cy.get('#SubmitLogin').click()
    
        // wait for the server to respond, then test for the error
        cy.wait(500)
        // Assert if 'error' is visible
        .get('div.alert').should('be.visible');
    })

    it('Validation tooltip', function() {
        cy.get(sign_in_button).click()
        cy.get('#email').type('test{enter}');

        // UI should reflect this after validation tooltip appears in DOM
        cy.get('body').should('contain', "missing an '@'")
    })

    it('Validation should appear in the input box when the fields are blank', function() {
        cy.get(sign_in_button).click()
        cy.get('#email').type(' ')
        cy.get('#passwd').type(' ')
        cy.get('#login_form > h3').click()
        cy.get('div.form-group.form-error').should('be.visible');
    })
  })