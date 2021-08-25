/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"

describe('login test suit', ()=>{

const homepage = new HomePage();

// const correctDataProvider = {
// set1 : [ "test" , "testpass" , "First Scenario with Valid Username and Password"] ,
// set2 : ["test1" , "test1" , "Second Scenario with Valid Username and Password"]
// }

// const wrongDataProvider = {
// set1 : [" " , " " , "Scenario with Empty Username and Password"] ,
// set2 : ["!@#" , "!@#" , "Scenario with Special Characters for Username and Password"] ,
// set3 : ["test" , "FailData" , "Scenario with valid Username and Invalid Password"],
// set4 : ["FailData" , "FailData" , "Scenario with Invalid Username and valid Password"]
// }


beforeEach(() => {
    homepage.navigate()
})

it('should login with valid data', () => {
    homepage.login()
    homepage.isWelcomeDisplayed()
})

})