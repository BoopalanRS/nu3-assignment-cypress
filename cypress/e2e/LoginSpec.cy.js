import AccountPage from '../support/pages/AccountPage';
import LoginPage from '../support/pages/LoginPage';

beforeEach(function () {
	cy.visit('https://www.nu3.de/account/login');
	cy.fixture('data').as('data')
});

describe('Login test cases', function(){

 //To access all the methods from pages
    const loginPage = new LoginPage()
    const accountPage = new AccountPage()

     it('Login with valid credentials and verify successful login', function(){
            loginPage.clickAcceptCookies()
            loginPage.login(this.data.validEmail, this.data.validPassword)
            loginPage.clickLoginButton()
            accountPage.verifyWelcomeMessage()
            })

     it('Login with invalid credentials and verify error message', function(){
             loginPage.clickAcceptCookies()
             loginPage.login(this.data.invalidEmail, this.data.invalidPassword)
             loginPage.clickLoginButton()
             loginPage.verifyErrorMessage()
            })

     it('Login with empty values and verify error message', function(){
             loginPage.clickAcceptCookies()
             loginPage.clickLoginButton()
            })

})