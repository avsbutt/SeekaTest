import { AddtoCartClass } from "../Pages/AddtoCartPage";
import { CheckoutClass } from "../Pages/CheckoutPage";

const AddToCartTest = new AddtoCartClass();
const CheckoutTest = new CheckoutClass();
const CheckoutData = require('../fixtures/CheckoutData.json');

describe("Add To Cart an Apple Product", ()=>{


    it("TC01: User can Add an item to Cart", ()=>{

        cy.visit('https://ecommerce-playground.lambdatest.io/')
        AddToCartTest.ShopCatagory()
        AddToCartTest.PhoneAndTablets()
        AddToCartTest.Apple()
        AddToCartTest.InStock()
        //AddToCartForm.iPodShuffle()
        //AddToCartForm.iMac()
        AddToCartTest.iPodNano()
        AddToCartTest.Checkout()
        AddToCartTest.CheckoutSideBar()

        CheckoutTest.Checkouturl()  //VERIFY THE CHECKOUT PAGE URL
        CheckoutTest.Firstname(CheckoutData.FirstName)
        CheckoutTest.Lastname(CheckoutData.LastName)
        CheckoutTest.Email(CheckoutData.Email)
        CheckoutTest.Telephone(CheckoutData.Telephone)
        CheckoutTest.Password(CheckoutData.Password)
        CheckoutTest.PasswrodConfirm(CheckoutData.PasswordConfirm)
        CheckoutTest.Address1(CheckoutData.Address)
        CheckoutTest.City(CheckoutData.City)
        CheckoutTest.Country()
        CheckoutTest.RegionState()
        CheckoutTest.PricacyPolicy()
        CheckoutTest.TermsAndCondition()
        CheckoutTest.ContinueBtn()
        CheckoutTest.ConfirmOrderurl()   //VERIFY THE CONFIRM ORDER PAGE URL
        CheckoutTest.ConfirmOrderBtn()
        CheckoutTest.OrderSuccessurl()  //VERIFY THE ORDER SUCCESS PAGE URL
        CheckoutTest.OrderPlacedtxt()
    })
  

})