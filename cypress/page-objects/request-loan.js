/// <reference types="cypress" />
import '../object-repo/object-repo';
import { object } from '../object-repo/object-repo';

export class RequestLoanPage{

    isNavigatedSuccessfully(){
        cy.xpath(object.TITLE_HEADER).should('contain.text','Apply for a Loan')
    }

    applyLoan(amount , downPaymnet , value){
        cy.xpath(object.FROMACCOUNT_DROPDOWN).select(value)
        cy.xpath(object.AMOUNT_FIELD).type(amount)
        cy.xpath(object.DOWNPAYMENT_FIELD).type(downPaymnet)
        cy.xpath(object.APPLY_BUTTON).click()
    }

    successTransferMassage(){
        return cy.xpath(object.APPROVED_MSG).should('have.text',"Congratulations, your loan has been approved.")
    }

    errorMassage(expectedtext){
        return cy.xpath(oObject.ERROR_MSG).should('have.text',expectedtext)
    }

    getLoanstatus(expectedtext){
        return cy.xpath(object.LOAN_STATUS_MSG).should('have.text',expectedtext);
    }

    getinsuficintFundError(){
        return cy.xpath(object.INSUFICIENT_FUND_MSG).should('have.text',"We cannot grant a loan in that amount with your available funds.")
    }
    

}