//  Elements
const titleIndexPage = 'Hotel Accomodation - login page'
const userNameTxtField = '#login'
const userPasswordTxtField = '#senha'
const loginSubmitButton = '#loginBtn'

//  Functions
function performLogin(cy){
    cy.get(userNameTxtField).type('marc')
    cy.get(userPasswordTxtField).type('1010')
    cy.get(loginSubmitButton).click()
}

function checkLoginPageLabel(cy){
    cy.title().should('eq',titleIndexPage)
}

function wrongCridentials(cy) {
    cy.get(userNameTxtField).type('marc')
    cy.get(userPasswordTxtField).type('1111')
    cy.get(loginSubmitButton).click()
}
   
//  Exports
module.exports = {
    performLogin,
    checkLoginPageLabel,
    wrongCridentials
}