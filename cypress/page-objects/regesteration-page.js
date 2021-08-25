/// <reference types="cypress" />
import '../object-repo/object-repo';
import { object } from '../object-repo/object-repo';

export class RegesterationPage{


    regesterUserData( firstName, lastName, address, city, state, zipcode, phone , ssn, userNAme, password){
        cy.xpath(object.FIRSTNAME_FIELD,).type(firstName)
        cy.xpath(object.LASTNAME_FIELD).type(lastName)
        cy.xpath(object.ADDRESS_FIELD).type(address)
        cy.xpath(object.CITY_FIELD).type(city)
        cy.xpath(object.STATE_FIELD).type(state)
        cy.xpath(object.ZIPCODE_FIELD).type(zipcode)
        cy.xpath(object.PHONE_FIELD).type(phone)
        cy.xpath(object.SSN_FIELD).type(ssn)
        cy.xpath(object.USERNAME_FIELD).type(userNAme)
        cy.xpath(object.PASSWORD_FIELD).type(password)
        cy.xpath(object.CONFIRMPASSWORD_FIELD).type(password)

        cy.xpath(object.REGISTER_BUTTON).click()

    }

    isNavigatedSuccessfully(){
        cy.xpath(object.TITLE_HEADER).should('have.text','Signing up is easy!')
    }


    errorMassage(expectedtext){
        cy.xpath(object.Error_MSG).should('have.text',expectedtext)
    }
}