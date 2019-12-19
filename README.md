# test-assigment-accessability-test-scenarios
Brief testing of the Registration and Login pages using Cypress.io
## Installation
it is considerate that you have Cypress.io installed
## Usage
Open Cypres:  $npx cypress open
## To execute
Execute: login_page.js, registration_page.js
## About:

## First file login_page.js includes 3 first tests from the assigment:
1. 'Should display an error message after login failure'
Goes to the login page and enters the username as test@test.com and
password as ThisIs@T3st. Validates if there is an error displayed.

2. 'Validation tooltip'
Goes to the login page and enters username as test and check if the
validation tooltip appears. 
!!! NOTE: Checking the "HTML5 form validaton" here is completelly useless.
Also, it is almost impossible to validate this step since this "tooltip" is not custom and is not a part of DOM. 
I purposely added "cy.get('body').should('contain', "missing an '@'")" which allways will lead to failure of the test to show this.

!!! Actually I come up with the idea of taking a screenshot when the validation tooltip appears, and then comparing the inner colors 
and lines of the screenshots part where there is a tool tip, but it is even difficult to explain not worth the effort

3. 'Validation should appear in the input box when both email and password fields are blank'
Goes to the login page and leaves the username and password field blank 
and checks if the validation appears in the input box.

## Second file registration_page.js includes 4th test from the assigment:
4. 'City field should not be disabled after the ZIP-code is enterted'
Goes to the registration page and fills the information, checks if the city
populates when you enter the pin code 
As I found on the page, there is no "PIN code" but there is a "ZIP code" which expectedly has to populate the "city" field
So I'm validating if the "City" field is not disabled after we pass the ZIP code 

'Should successfuly registre'
Filling the form again and before clicking on the button "Continue" I verify if it's not disable and then click 
To check if the registration was successful is also barely possible since release notes are missing here
And I don't certainly know what state is expected after we click onto "Continue", as there might be houndreds 
of possible scenarios...
So the only scenario I'm validating here is that URL should not remain the same, although this also doesn't give any clear indications 
whether the registration was successful. 
The only 100% scenario here is to get HTML of the whole page as a String before and after 
and compare them by using :

        // let htmlBefore, htmlAfter
        // get HTML as String before
        cy.get('body').should((body) => {
            htmlBefore = body.get(0).innerHTML
        })

        // Chek that "Contunue button" is not disabled and click on it 
        cy.get(contimueButton).should('not.be.disabled').click()

        // get HTML as String before
        cy.get('body').should((body) => {
            htmlAfter = body.get(0).innerHTML
        })

        // check if the NTML has changed after we clock on "Continue"
        expect(htmlBefore).to.eq(htmlAfter)
Here innerHTM didn't work out for me using Cypress, but it would perfectly work if I decided to use Selenium WEBDriver instead. 
