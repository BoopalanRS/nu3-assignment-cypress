/// <reference types="Cypress"/>

class AccountPage {

     //Locators
        get welcomeMessage() {return 'div[class="account d-flex"] .headline'}

     //PageActions
        verifyWelcomeMessage(){
             cy.get(this.welcomeMessage).invoke("text").then((text)=>{
               expect(text).to.include("Hallo")
             });
        }
}
export default AccountPage;