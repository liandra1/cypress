//  Elements
const userCreatedConfirm = 'User was successfully created'
const userLogin = '#login'
const userPw = '#password'
const retypingPassword = '#retypingPassword'
const clientId = '#clientId'
const userStatusId = '#userStatusId'
const typeUser = '#typeUser'
const saveUser = '.btn-primary'

//  Functions

function createUser(cy){
    cy.get(typeUser).select('2')
    cy.get(userLogin).type('test'+ Math.floor((Math.random() * 10) + 1))
    cy.get(userPw).type('1010')
    cy.get(retypingPassword).type('1010')
    cy.get(clientId).select('7')
    cy.get(userStatusId).select('1')
    cy.get(saveUser).click()    
}

function checkCreateUser(cy){
    cy.contains(userCreatedConfirm)
}

//  Exports

module.exports = {
    createUser,
    checkCreateUser
}


        

        