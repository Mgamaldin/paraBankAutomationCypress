/// <reference types="cypress" />
import '../object-repo/object-repo';
import { object } from '../object-repo/object-repo';

export class TransferFundPage{

// sleep (time) {
// return new Promise((resolve) => setTimeout(resolve, time));
// }    

isNavigatedSuccessfully(){
    cy.xpath(object.TITLE_HEADER).should('contain.text','Transfer Funds')
}

transferFund(amount,value){
        cy.xpath(object.AMOUNT_FIELD).type(amount)
        cy.xpath(object.FROMACCOUNT_DROPDOWN).select(value)
        cy.xpath(object.TOACCOUNT_DROPDOWN).select(value)
        cy.xpath(object.TRANSFER_BUTTON).click()
}

successTransferMassage(expectedtext){
    return cy.xpath(object.TRANSFER_SUCCESSMSG).should('have.text',expectedtext);
}

errorMassage(expectedtext){
    return cy.xpath(object.ERROR_AMOUNT_MSG).should('have.text',expectedtext)
}

}