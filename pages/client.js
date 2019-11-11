//  Elements
const clientCreatedConfirm = 'Client was successfully created'
const nameClient = '#name'
const email = '#email'
const socialSecurityNumber = '#socialSecurityNumber'
const saveClient = '.btn-primary'

//  Functions

function createClient(cy){
    cy.get(nameClient).type(Math.floor((Math.random() * 10) + 1) +'Snorre Sturlason')
    cy.get(email).type(Math.floor((Math.random() * 10) + 1)+'snorre@snorres.se')
    cy.get(socialSecurityNumber).type(Math.floor((Math.random() * 10000) + 1))
    cy.get('[type="radio"]').check('M')
    cy.get(saveClient).click()
}

function checkCreateClient(cy){
    cy.contains(clientCreatedConfirm)
}

//  Exports

module.exports = {
    createClient,
    checkCreateClient
}