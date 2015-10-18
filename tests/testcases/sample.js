
module.exports = {
    'Open Walmart HomePage' : function gotoHomepage (client) {
        client
            //Navigate
            .url('http://www.walmart.com')
            .waitForElementPresent('body', 1000);

    },
    'Search for TV' : function searchForProduct(client) {
        client
            //Search for item by giving value in reusable method below. def of method : tests/custom_commands/search_item.js
            .search_item("TV")
            //.search_item("Socks")
            //.search_item("iPhone")

            .useXpath()
            .click('//*[@id="top"]/div[3]/div/div/div/div/div[3]/form/div/div[3]/button')
            .pause(5000)
    },
    'Select item for search result & Add to cart' : function selectItemCheckout(client) {
        client
            .click('//*[@id="tile-container"]/div[1]/a/img')
            .pause(5000)

            .useCss()
            .click('button[id=WMItemAddToCartBtn]')
            .pause(5000)
    },

    'Goto Checkout & login with credentials' : function signinToCheckout(client) {
        client
            //I was having issues with clicking on cart button to go to checkout page.so using deeplink atm.
            .url('https://www.walmart.com/checkout/#checkout/sign-in')
            .pause(5000)

            .setValue('input[id=CartExistAccntEmail]', 'mobilet1234@gmail.com')
            .setValue('input[id=CartExistAccntPswd', 'root1234')

            .click('button[id=CartExistAccntSignInBtn]')
            .pause(5000)
    },

    'Validate item is present in cart' : function verifyItemInCart (client) {
        client
            .useXpath()
            .assert.containsText('//*[@id="spa-layout"]/div/div/div[1]/div/h3/span', '1 items')

            .useCss()
            .verify.attributeEquals('#CartItemInfo', 'data-us-item-id', '25059351')
            .click('a[id=CartChkOutBtn]')
    },

    'Finish Checkout' : function checkoutSignedinUser (client) {
        client
            .url('https://www.walmart.com/checkout/')
            .pause(5000)
            .click('button[id=COAC1ShpOptContBtn]')
            .pause(3000)
            .click('button[id=COAC2ShpAddrContBtn]')
            .pause(3000)
            //Verifying I am on payment page. Since you can only click on below button if you are on payment
            .click('button[id=COAC3PayReviewOrderBtn]')

    },

    'Remove item From Cart'  : function removeItemFromCart (client) {
        client
            .url('https://www.walmart.com/cart/')
            .click('button[id=CartRemItemBtn]')
            .pause(2000)
    },

    'Logout from site'  : function logout(client){
        client
            .useXpath()
            .assert.containsText('//*[@id="spa-layout"]/div/div/div[1]/div/h3/span', '0 items')
            .url('walmart.com/account/logout')
    }
};