//  Elements
const billCreatedContains = 'Bill was successfully created'
const billStatus = '#billStatusId'
const reservationId = '#hotelReservationId'
const saveButton = '#saveBtn'

//  Functions

function createBill(cy){
    cy.get(billStatus).select('1')
    cy.get(reservationId).select('3')
    cy.get(saveButton).click()     
}

function checkCreatedBill(cy){
    cy.contains(billCreatedContains)
}

//  Exports

module.exports = {
    createBill,
    checkCreatedBill
}