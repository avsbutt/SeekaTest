const AddtoCartFunction = require("../Locators/AddToCart.json")

export class AddtoCartClass{
    ShopCatagory(){
        cy.xpath(AddtoCartFunction.AddToCartLocators.ShopCatagory).click()
        cy.wait(300)
    }
  
    PhoneAndTablets(){
        cy.xpath(AddtoCartFunction.AddToCartLocators.PhoneAndTablets).click()
        cy.wait(300)
    }
    Apple(){
        cy.get(AddtoCartFunction.AddToCartLocators.AppleLoc).click()
        cy.wait(300)
    }
    InStock(){
        cy.get(AddtoCartFunction.AddToCartLocators.InStock).scrollIntoView().click()
        cy.wait(800)
    }
    // iPodShuffle(){
    //     cy.wait(900)
    //     cy.xpath(AddtoCartFunction.AddToCartLocators.iPodShuffle).scrollIntoView()
    //     cy.xpath(AddtoCartFunction.AddToCartLocators.iPodShuffle).should('be.visible')
    //     cy.xpath(AddtoCartFunction.AddToCartLocators.iPodShuffle).scrollIntoView()
    //     cy.xpath(AddtoCartFunction.AddToCartLocators.iPodShuffle).realHover()
    //     cy.wait(900)
    //     cy.xpath(AddtoCartFunction.AddToCartLocators.CartButton).should('be.visible').click({ force: true });
    // }
    iPodNano(){
        cy.xpath(AddtoCartFunction.AddToCartLocators.iPodNano).should('be.visible')
        cy.xpath(AddtoCartFunction.AddToCartLocators.iPodNano).realHover()
        cy.wait(900)
        cy.xpath(AddtoCartFunction.AddToCartLocators.CartButton).should('be.visible').click({ force: true });
    }
    // iMac(){
    //     cy.xpath(AddtoCartFunction.AddToCartLocators.iMac).should('be.visible')
    //     cy.xpath(AddtoCartFunction.AddToCartLocators.iMac).realHover()
    //     cy.wait(900)
    //     cy.xpath(AddtoCartFunction.AddToCartLocators.CartButton).should('be.visible').click({ force: true });
    // }
    Checkout(){
        cy.scrollTo('top')
        cy.get(AddtoCartFunction.AddToCartLocators.Checkout).click()
    }
    CheckoutSideBar(){
        cy.xpath(AddtoCartFunction.AddToCartLocators.CheckoutSideBar).click()
    }
   
}