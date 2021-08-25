/// <reference types="cypress" />
import '../object-repo/object-repo';
import { object } from '../object-repo/object-repo';

export class HomePage{

    navigate() {
        cy.visit(Cypress.env("BASEURL"))
      }

    login(){
        cy.xpath(object.LOGIN_USERNAME_FIELD).type(Cypress.env("USERNAME"))
        cy.xpath(object.LOGIN_PASSWORD_FIELD).type(Cypress.env("PASSWORD"))
        cy.xpath(object.LOGIN_BUTTON).click()
    }
    
    logout(){
        cy.xpath(object.LOGOUT_BUTTON).click()
    }

    goToRegisteratiobPage() {
        cy.xpath(object.REGESTERATION_BUTTON).click({force : true})
    }

    goToTransferFundPage() {
        cy.xpath(object.TRANSFERFUNDS_BUTTON).click()
    }

    goToRequestLoanPage() {
        cy.xpath(object.REQUESTLOAN_BUTTON).click()
    }

    accountHeaderDisplayed(){
      return  cy.xpath(object.ACCOUNT_HEADER).getText;
    }

    errorMsgDisplayed(){
        return cy.xpath(object.ERROR_MSG).getText();
    }

    isWelcomeDisplayed(){
        cy.xpath(object.WELCOME_HEADER).should('contain.text',"Welcome");
    }

    isCustomerLoginDisplayed(){
        return cy.xpath(object.CUSTOMERLOGIN_HEADER).should('contain.text',"Welcome");
    }
    

}