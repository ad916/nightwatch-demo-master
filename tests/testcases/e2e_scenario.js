@@ -0,0 +1,95 @@
var automationIdList = {
    search_button : "//*[@id='top']/div[3]/div/div/div/div/div[3]/form/div/div[3]/button",
    select_first_item : "//*[@id='tile-container']/div[1]/a/img",
    add_item_to_cart : "button[id=WMItemAddToCartBtn]",
    signin_email : "input[id=CartExistAccntEmail]",
    signin_password : "input[id=CartExistAccntPswd",
    signin_button : "button[id=CartExistAccntSignInBtn]",
    cart_itemCount : "//*[@id='spa-layout']/div/div/div[1]/div/h3/span",
    cart_itemID : "select[id=CartItemInfo]",
    cart_checkoutButton : "a[id=CartChkOutBtn]",
    checkout_cont_address : "button[id=COAC1ShpOptContBtn]",
    checkout_cont_shipping : "button[id=COAC2ShpAddrContBtn]",
    checkout_submitOrder : "button[id=COAC3PayReviewOrderBtn]",
    cart_removeItem : "button[id=CartRemItemBtn]"

};

module.exports = {
    'Open Walmart HomePage' : function gotoHomepage (client) {
        client
            //Navigate
            .url('http://www.walmart.com')
            .waitForElementPresent('body', 3000);

    },
    'Search for TV' : function searchForProduct(client) {
        client
            //Search for item by giving value in reusable method below. def of method : tests/custom_commands/search_item.js
            .search_item("TV")
            //.search_item("Socks")
            //.search_item("iPhone")

            .useXpath()
            .click(automationIdList.search_button)
           // .pause(5000)
            .waitForElementPresent(automationIdList.select_first_item,3000)
    },
    'Select item for search result & Add to cart' : function selectItemCheckout(client) {
        client
            .useXpath()
            .click(automationIdList.select_first_item)
            //.pause(5000)

            .useCSS()
            .waitForElementPresent(automationIdList.add_item_to_cart,3000)
            .click(automationIdList.add_item_to_cart)
    },

    'Goto Checkout & login with credentials' : function signinToCheckout(client) {
        client
            //I was having issues with clicking on cart button to go to checkout page.so using deeplink atm.
            .url('https://www.walmart.com/checkout/#checkout/sign-in')
           // .pause(5000)
            .waitForElementPresent(automationIdList.signin_email,3000)
            .setValue(automationIdList.signin_email, 'mobilet1234@gmail.com')
            .setValue(automationIdList.signin_password, 'root1234')
            .click(automationIdList.signin_button)

            .useCss()
            .verify.attributeEquals(automationIdList.cart_itemID, 'data-us-item-id', '25059351')
            .click(automationIdList.cart_checkoutButton)
    },

    'Finish Checkout' : function checkoutSignedinUser (client) {
        client
            .url('https://www.walmart.com/checkout/')
            //.pause(5000)
            .waitForElementPresent(automationIdList.checkout_cont_address)
            .click(automationIdList.checkout_cont_address)
           // .pause(3000)
            .waitForElementPresent(automationIdList.checkout_cont_shipping)
            .click(automationIdList.checkout_cont_shipping)
            //.pause(3000)
            .waitForElementPresent(automationIdList.checkout_submitOrder)
            //Verifying I am on payment page. Since you can only click on below button if you are on payment
            .click(automationIdList.checkout_submitOrder)

    },

    'Remove item From Cart'  : function removeItemFromCart (client) {
        client
            .url('https://www.walmart.com/cart/')
            .waitForElementPresent(automationIdList.cart_removeItem,3000)
            .click(automationIdList.cart_removeItem)
            //.pause(2000)
            .waitForElementPresent(automationIdList.cart_itemCount)
    },

    'Logout from site'  : function logout(client){
        client
            .useXpath()
            .assert.containsText(automationIdList.cart_itemCount, '0 items')
            .url('walmart.com/account/logout')
    }
}; 
