/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { TransferFundPage, transferFundsPage } from "../page-objects/transfer-fund"


describe('Transfer Funds test suit', ()=>{

const homepage = new HomePage();
const transferfund = new TransferFundPage();

const testdata ={
    amount : "350", 
    dropDownValue : "17118"
}

beforeEach(() => {
    homepage.navigate()
    homepage.login()
})

it('should Transfer Funds with Valid Fund', () => {
    homepage.goToTransferFundPage();
    transferfund.isNavigatedSuccessfully()
    transferfund.transferFund(testdata.amount,testdata.dropDownValue)
    transferfund.successTransferMassage(`$${testdata.amount}.00 has been transferred from account #${testdata.dropDownValue} to account #${testdata.dropDownValue},Transfer didnot get approved Successfully`)
})

it('Fields Validations', () => {
    homepage.goToTransferFundPage();
    transferfund.isNavigatedSuccessfully()
    transferfund.transferFund("",testdata.dropDownValue)
    transferfund.errorMassage("The amount cannot be empty.")
})


afterEach(() => {
    homepage.logout()
})

})