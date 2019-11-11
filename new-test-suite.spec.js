import * as loginPg from './pages/index'
import * as dashBoardPg from './pages/dashboard'
import * as clientPg from './pages/client'
import * as userPg from './pages/user'
import * as bedroomPg from './pages/bedroom'
import * as billPg from './pages/bill'



describe('Test suite', function(){

    
    beforeEach(() => {
        cy.log('enter page and login')
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')

        loginPg.checkLoginPageLabel(cy)
        loginPg.performLogin(cy)
        dashBoardPg.checkDashBoardLabelOnTop(cy)

    
    })

    it('testAddClient', function() {

        //dashboard
        dashBoardPg.goToClient(cy)

        //client
        clientPg.createClient(cy)
        clientPg.checkCreateClient(cy)
      
        //logut
        dashBoardPg.logout(cy)

        loginPg.checkLoginPageLabel(cy)
    })

    it('testAddUser', function() {
        //dashboard
        dashBoardPg.goToUser(cy)

        //user
        userPg.createUser(cy)

        userPg.checkCreateUser(cy)

        //logout
        dashBoardPg.logout(cy)

        loginPg.checkLoginPageLabel(cy)
    })

    it('login wrong cridentials', function() {

        //logout
        dashBoardPg.logout(cy)

        //index
        loginPg.wrongCridentials(cy)

        loginPg.checkLoginPageLabel(cy)
                
    })

    it('create new bedroom', function() {

        //dashboard
        dashBoardPg.goToBedroom(cy)

        //bedroom
        bedroomPg.createBedroom(cy)
        bedroomPg.checkCreateBedroom(cy)
        
        //gotoindex
        bedroomPg.goToIndex(cy)
        //logout
        dashBoardPg.logout(cy)
        
    })

    it('create new bill', function() {

        //dashboard
        dashBoardPg.goToBill(cy)
        
        //bill
        billPg.createBill(cy)

        billPg.checkCreatedBill(cy)

        //gotoindex (reuse of code)
        bedroomPg.goToIndex(cy)
        
        //logout
        dashBoardPg.logout(cy)
    })
})