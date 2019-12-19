const sign_in_button = '#header > div.nav > div > div > nav > div.header_user_info > a'
const contimueButton = '#BtnCreationSubmit'

const email = "myEmail@gmail.com"
const password = "Pass123"
const lastname = 'Black'
const name = 'Jack'
const phone = '14045885858'

describe('The Registration Page test', function() {

    beforeEach( function () {
        cy.visit('https://marksandspicy.com');
        
    });

    it('City field should not be disabled after the ZIP-code is enterted', function () {
        fillRegistrationForm ()
        cy.get('#ville')
         // Assert if City field is undisabled after I entered the zip code
        .should('not.be.disabled')
    });

    it('Should successfuly registre', function () {
        fillRegistrationForm ()
        // Chek that "Contunue button" is not disabled and click on it 
        cy.get(contimueButton).should('not.be.disabled').click()


        // Assert if the URL have changed from "create-account" after successful registration
        cy.url().should('not.eq', 'https://marksandspicy.com/create-account.html');
        
        
    });

function fillRegistrationForm () {
    cy.get(sign_in_button).click()
    cy.get('#SubmitCreate > span').click()
    // we should be redirected to correct page
    cy.url().should('include', '/create-account')
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
    }

  })