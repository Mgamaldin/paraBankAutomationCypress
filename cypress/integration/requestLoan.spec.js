/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { RequestLoanPage } from "../page-objects/request-loan"


describe('login test suit', ()=>{

const homepage = new HomePage();
const requestloan = new RequestLoanPage();

const testdata ={
    amount : "300" , 
    dropDownValue : "14676", 
    downpaymentValue : "30",
    amountInsuficient : "12345000", 
    downpaymentInsuficient : "1235",
}

beforeEach(() => {
    homepage.navigate()
    homepage.login()
})

it('should request Loan with Valid Fund', () => {
    homepage.goToRequestLoanPage()
    requestloan.isNavigatedSuccessfully()
    requestloan.applyLoan(testdata.amount,testdata.downpaymentValue,testdata.dropDownValue)
    requestloan.getLoanstatus("Approved")
    requestloan.successTransferMassage()
})

it('shouldnot request Loan with InValid Fund', () => {
    homepage.goToRequestLoanPage()
    requestloan.isNavigatedSuccessfully()
    requestloan.applyLoan(testdata.amountInsuficient,testdata.downpaymentInsuficient,testdata.dropDownValue)
    requestloan.getLoanstatus("Denied")
    requestloan.getinsuficintFundError()
})

it('Fields Validations' , ()=>{
    homepage.goToRequestLoanPage()
    requestloan.isNavigatedSuccessfully()
    requestloan.applyLoan(" ","",testdata.dropDownValue)
    requestloan.errorMassage("An internal error has occurred and has been logged.")

    homepage.goToRequestLoanPage()
    requestloan.isNavigatedSuccessfully()
    requestloan.applyLoan(testdata.amount," ",testdata.dropDownValue)
    requestloan.errorMassage("An internal error has occurred and has been logged.")

    homepage.goToRequestLoanPage()
    requestloan.isNavigatedSuccessfully()
    requestloan.applyLoan(" ",testdata.downpaymentValue,testdata.dropDownValue)
    requestloan.errorMassage("An internal error has occurred and has been logged.")

})

afterEach(() => {
    homepage.logout()
})

})