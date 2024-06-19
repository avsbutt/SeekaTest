const CheckoutFunction = require ("../Locators/Checkout.json") 

export class CheckoutClass{
    Checkouturl(){
        cy.url().should('include', 'checkout/checkout');
    }
    Firstname(FirstName){
        cy.xpath(CheckoutFunction.CheckoutLocators.FirstName).type(FirstName)
    }
    Lastname(LastName){
        cy.xpath(CheckoutFunction.CheckoutLocators.LastName).type(LastName)
    }
    Email(Email){
        cy.xpath(CheckoutFunction.CheckoutLocators.Email).type(Email)
    }
    Telephone(Telephone){
        cy.xpath(CheckoutFunction.CheckoutLocators.Telephone).type(Telephone)
    }
    Password(Password){
        cy.xpath(CheckoutFunction.CheckoutLocators.Password).type(Password)
    }
    PasswrodConfirm(PasswordConfirm){
        cy.xpath(CheckoutFunction.CheckoutLocators.PasswordConfirm).type(PasswordConfirm)
    }
    Address1(Address1){
        cy.xpath(CheckoutFunction.CheckoutLocators.Address1).type(Address1)
    }
    City(City){
        cy.xpath(CheckoutFunction.CheckoutLocators.City).type(City)
    }
    PostalCode(PostalCode){
        cy.xpath(CheckoutFunction.CheckoutLocators.PostalCode).type(PostalCode)
    }
    Country(){
        cy.xpath(CheckoutFunction.CheckoutLocators.Country).select('Pakistan')
        cy.xpath(CheckoutFunction.CheckoutLocators.Country).should('contain', 'Pakistan')

    }
    RegionState(){
        cy.xpath(CheckoutFunction.CheckoutLocators.RegionState).select('Punjab')
        cy.xpath(CheckoutFunction.CheckoutLocators.RegionState).should('contain', 'Punjab')
    }
    PricacyPolicy(){
        cy.xpath(CheckoutFunction.CheckoutLocators.PrivacyPolicy).click()
    }
    TermsAndCondition(){
        cy.xpath(CheckoutFunction.CheckoutLocators.TermsAndCondition).click()
    }
    ContinueBtn(){
        cy.xpath(CheckoutFunction.CheckoutLocators.ContinueBtn).click()
    }

    ConfirmOrderBtn(){
        cy.xpath(CheckoutFunction.CheckoutLocators.ConfirmOrderBtn).click()
    }
    OrderPlacedtxt(){
        cy.xpath(CheckoutFunction.CheckoutLocators.OrderPlacedtxt).should('exist');
    }
    ConfirmOrderurl(){
        cy.url().should('include', 'checkout/confirm');
    }
    OrderSuccessurl(){
        cy.url().should('include', 'checkout/success');
    }
}