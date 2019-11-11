//  Elements
const bedroomCreatedConfirm = 'Bedroom was successfully created'
const bedroomDescription = '#description'
const floor = '#floor'
const roomNumber = '#number'
const priceDaily = '#priceDaily'
const bedroomStatus = '#bedroomStatusId'
const typeBedroom = '#typeBedroomId'
const saveButton = '#saveBtn'
const indexButton = '#j_idt51 > [href="/hotel/faces/index.xhtml"]'

//  Functions

function createBedroom(cy){
    cy.get(bedroomDescription).type('mysigt')
    cy.get(floor).type('6')
    cy.get(roomNumber).type('2')
    cy.get(priceDaily).type('200')
    cy.get(bedroomStatus).select('2')
    cy.get(typeBedroom).select('2')
    cy.get(saveButton).click()    
}

function checkCreateBedroom(cy){
    cy.contains(bedroomCreatedConfirm)
}

function goToIndex(cy) {
    cy.get(indexButton).click()   
}

//  Exports

module.exports = {
    createBedroom,
    checkCreateBedroom,
    goToIndex 
}