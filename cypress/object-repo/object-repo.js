export const object = {
    // This is HomePage Elements Section
    REGESTERATION_BUTTON : ".//a[contains(text(),'Register')]",
    LOGIN_USERNAME_FIELD : ".//input[@name='username']",
    LOGIN_PASSWORD_FIELD : ".//input[@name='password']",
    LOGIN_BUTTON : ".//input[@value='Log In']",
    LOGOUT_BUTTON : ".//a[contains(text(),'Log Out')]",
    TRANSFERFUNDS_BUTTON : ".//a[contains(text(),'Transfer Funds')]",
    REQUESTLOAN_BUTTON : ".//a[contains(text(),'Request Loan')]",
    ACCOUNT_HEADER : ".//h1[@class='title']",
    WELCOME_HEADER : ".//p[@class='smallText']",
    CUSTOMERLOGIN_HEADER : ".//div[@id='leftPanel']/h2",
    ERROR_MSG : ".//p[@class='error']",

    // This is RequestLoan Elements Section
    APPROVED_MSG : "(.//div[@ng-if='loanResponse.approved']/p)[1]",
    AMOUNT_FIELD : ".//input[@id='amount']",
    DOWNPAYMENT_FIELD : ".//input[@id='downPayment']",
    FROMACCOUNT_DROPDOWN : ".//select[@id='fromAccountId']",
    TITLE_HEADER : ".//h1[@class='title']",
    APPLY_BUTTON : ".//input[@type='submit']",
    ERROR_MSG : ".//p[@class='error']",
    LOAN_STATUS_MSG : ".//td[@id='loanStatus']",
    INSUFICIENT_FUND_MSG : ".//p[@class='error ng-scope']",

    // This is Transfer Funds Elements Section
    APPROVED_MSG : "(.//div[@ng-if='loanResponse.approved']/p)[1]",
    AMOUNT_FIELD : ".//input[@id='amount']",
    DOWNPAYMENT_FIELD : ".//input[@id='downPayment']",
    FROMACCOUNT_DROPDOWN : ".//select[@id='fromAccountId']",
    TITLE_HEADER : ".//h1[@class='title']",
    APPLY_BUTTON : ".//input[@type='submit']",
    ERROR_MSG : ".//p[@class='error']",
    LOAN_STATUS_MSG : ".//td[@id='loanStatus']",
    INSUFICIENT_FUND_MSG : ".//p[@class='error ng-scope']",

    // This is Regesteration Elements Section
    FIRSTNAME_FIELD : ".//input[@id='customer.firstName']",
    LASTNAME_FIELD : ".//input[@id='customer.lastName']",
    ADDRESS_FIELD : ".//input[@id='customer.address.street']",
    CITY_FIELD : ".//input[@id='customer.address.city']",
    STATE_FIELD : ".//input[@id='customer.address.state']",
    ZIPCODE_FIELD : ".//input[@id='customer.address.zipCode']",
    PHONE_FIELD : ".//input[@id='customer.phoneNumber']",
    SSN_FIELD : ".//input[@id='customer.ssn']",
    USERNAME_FIELD : ".//input[@id='customer.username']",
    PASSWORD_FIELD : ".//input[@id='customer.password']",
    CONFIRMPASSWORD_FIELD : ".//input[@id='repeatedPassword']",
    REGISTER_BUTTON  : ".//input[@value='Register']",
    TITLE_HEADER : ".//h1[@class='title']",
    Error_MSG : ".//span[@class='error']",
  }