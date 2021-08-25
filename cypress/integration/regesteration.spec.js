/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { RegesterationPage } from "../page-objects/regesteration-page"


describe('login test suit', ()=>{

const homepage = new HomePage();
const regesteration = new RegesterationPage()

const randomNum = Math.floor(Math.random() * 10);
    


const validTestdata = { 
    firstName : `Aautomated_User ${randomNum}`,
    lastName :  `Aautomated_User ${randomNum}` ,
    address :   `Aautomated_Address ${randomNum}`,
    city :      `Aautomated_City ${randomNum}`,
    state :     `Aautomated_State ${randomNum}`,
    zipcode :     `${randomNum}`,
    phone :     `${randomNum}`,
    ssn :     `${randomNum}`,
    userNAme :  `Aautomated_Username  ${randomNum}`,
    password :  `Aautomated_Password  ${randomNum}`}

//onject of arrays    
const invalidData = {
test1  :      [`Aautomated_User ${randomNum}`, " " ,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,"Last name is required."],
test2 :      [`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`," ",`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,"Address is required."],
test3 :      [`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`," ",`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,"City is required."],
test4 :      [`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`," ",`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,"State is required."],
test5 :      [`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`," ",`Aautomated_User ${randomNum}`,"Username is required."],
test6 :      [`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`,`Aautomated_User ${randomNum}`," ","Password is required."]
}    


beforeEach(() => {
    homepage.navigate()
})

it('should Register with valid data', () => {
    homepage.goToRegisteratiobPage()
    regesteration.isNavigatedSuccessfully()
    regesteration.regesterUserData(validTestdata.firstName,validTestdata.lastName,validTestdata.address,validTestdata.city,validTestdata.state,validTestdata.zipcode,validTestdata.phone,validTestdata.ssn,validTestdata.userNAme,validTestdata.password)

})

it.only('shouldnot Register with Invalid data', () => {
    for(let obj in invalidData){
        let key = invalidData[obj];
        homepage.goToRegisteratiobPage()
        regesteration.isNavigatedSuccessfully()
        regesteration.regesterUserData(key.at(0),key.at(1),key.at(2),key.at(3),'Zip','phone','ssn',key.at(4),key.at(5),key.at(6))
        //regesteration.errorMassage('This username already exists.')
        regesteration.errorMassage(key.at(7))
        homepage.goToRequestLoanPage
    }
})

})