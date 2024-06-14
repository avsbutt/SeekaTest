import { AddtoCartClass } from "../Pages/AddtoCartPage";

const AddToCartForm = new AddtoCartClass();

describe("Add To Cart an Apple Product", ()=>{


    it("TC01: User can Add an item to Cart", ()=>{
        cy.viewport(1280, 800)
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        AddToCartForm.ShopCatagory()
        AddToCartForm.PhoneAndTablets()
        AddToCartForm.Apple()
        AddToCartForm.InStock()
        // AddToCartForm.iPodShuffle()
        AddToCartForm.iPodNano()
        // AddToCartForm.iMac()
        AddToCartForm.Checkout()
        AddToCartForm.CheckoutSideBar()
    })
  

})