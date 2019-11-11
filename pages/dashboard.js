// Elements

const dashboardLabelOnTop = 'Hotel Accommodadion'
const dbList = ':nth-child(4) > .panel > a > .panel-footer > .pull-left'
const dbListClient = '.btn-primary'
const dbListUser = ':nth-child(7) > a'
const findLogout = '.fa-caret-down'
const logout1 = '.dropdown-menu > li > a'
const bedroom = ':nth-child(3) > a'
const bill = ':nth-child(4) > a'


// Functions

function checkDashBoardLabelOnTop(cy){
    cy.contains(dashboardLabelOnTop)
}

function logout(cy){
    cy.get(findLogout).click()
    cy.get(logout1).click()
}

function goToClient(cy) {
    cy.get(dbList).click()
    cy.get(dbListClient).click()
}

function goToUser(cy){
    cy.get(dbListUser).click()
    cy.get(dbListClient).click()
}

function goToBedroom(cy) {
    cy.get(bedroom).click()
    cy.get(dbListClient).click()
    
}

function goToBill(cy){
    cy.get(bill).click()
    cy.get(dbListClient).click()
}

// Exports

module.exports = {
    checkDashBoardLabelOnTop,
    logout,
    goToClient,
    goToUser,
    goToBedroom,
    goToBill
}