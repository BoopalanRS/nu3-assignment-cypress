/// <reference types="Cypress"/>

class LoginPage {

     //Locators
        get emailField() {return '#CustomerEmail'}
        get passwordField() {return '#CustomerPassword'}
        get btnLogin() {return ':nth-child(5) > .mb-20'}
        get acceptCookies() {return '#gdpr-confirm-all-button'}
        get invalidLoginErrorMessage() {return 'div.errors li'}

     //PageActions
     //Enter email, password 
        login(email, password){
            cy.get(this.emailField).type(email)
            cy.get(this.passwordField).type(password)
        }

        clickLoginButton(){
             cy.get(this.btnLogin).click()
        }
 
        clickAcceptCookies() {
            cy.get(this.acceptCookies) 
            .then($cookieWindow => {
             if ($cookieWindow.length > 0) {
               cy.get(this.acceptCookies) .click();
             }
           });
       }
       verifyErrorMessage(){
         cy.get(this.invalidLoginErrorMessage).invoke("text").then((text)=>{
           expect(text).to.equal("Die E-Mail-Adresse oder das Passwort ist falsch.")
         });
    }

}
export default LoginPage;