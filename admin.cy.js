/// <reference types='cypress'/>
describe ('admin', ()=>{
    it ('class', ()=>{
        cy.visit("https://sa-uat.meepaisa.com/")
        cy.get('[name="Email_Id').type('rakesh.sirasanambeti@easystepin.com')
        cy.get('[id="password').type('Family#143')

        cy.xpath('/html/body/div/div[1]/div/div/div/main/div[2]/div/form/button/span[1]/span').click()

        cy.xpath('/html/body/div/div[1]/header/div[1]/button[3]').click()   //menu button

        cy.get('a[href="/app/esi-main-centre"]').click()

        cy.get('a[href="/app/category-management"]').click()

        cy.get('a[href="/app/esi-main-centre"]', {timeout: 10000}).click()

        cy.xpath('/html/body/div/div[1]/header/div[1]/button[3]').click()           //menu button
        cy.get('a[href="/app/partner-main-page"]').click()                      //partner main center
        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[2]/div/div[1]/div/div[1]/div/a/img').click()        //partner mana..
        // cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[3]/div/div[1]/div[1]/table/tbody/tr/td[8]/span/button').click()     //yes
        // cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[3]/div/div[1]/div[1]/table/tbody/tr/td[1]/span/span[1]/input').click()      //checkbox
        cy.get('a[href="/app/partner-main-page"]').click()              //go back
        // cy.get('a[href="/app/pending-partners"]').click()                   //pending partners
        // cy.get('a[href="/app/partner-management"]').click()                 //go back
        // cy.get('a[href="/app/add-partner"]').click()
        // cy.get('a[href="/app/partner-management"]').click()     //go back


        cy.xpath('/html/body/div/div[1]/header/div[1]/button[3]').click()
        cy.get('a[href="/app/user-main-centre"]').click()

        // cy.get('a[href="/app/missing-cashback"]').click()

        // cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[3]/div/div[1]/div[1]/table/tbody/tr[1]/td[6]/button[2]').click()    //missing cashback
        // cy.xpath('/html/body/div/div[1]/div/div/div/div/div/form/div/div[3]/button').click()            //save
        // cy.get('a[href="/app/user-main-centre"]').click()       //go back

        cy.xpath('/html/body/div/div[1]/header/div[1]/button[3]').click()       //menu
        cy.get('[href="/app/order-management"]').click()        //order mana..
        cy.get('a[href="/app/offers-visitor"]').click()

        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[3]/div/div[1]/div[1]/table/tbody/tr[1]/td[7]/button[1]').click()        //edit
        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/form/div/div[3]/button').click()                    //save

        cy.get('a[href="/app/order-management"]').click()

        cy.xpath('/html/body/div/div[1]/header/div[1]/button[3]').click()  //menu
        cy.get('a[href="/app/pos-order-management"]').click()

        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[2]/div/button').click()     //create
        cy.xpath('/html/body/div[2]/div[3]/div/h2/button').click()                          //close

        cy.get('a[href="/app/reports/dashboard"]').click()

        cy.xpath('/html/body/div/div[1]/header/div[1]/button[3]').click()       //menu
        cy.get('a[href="/app/barcode-management"]').click()
        cy.get('a[href="/app/reports/dashboard"]').click()      //go back

        cy.xpath('/html/body/div/div[1]/header/div[1]/button[3]').click()       //menu
        cy.get('a[href="/app/promotion-management"]').click()

        cy.get('a[href="/app/popup-management"]').click()       //pop-up mana..
        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[3]/div/div[1]/div[1]/table/tbody/tr[1]/td[7]/button[1]').click()        //edit
        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/form/div/div[3]/button').click()        //save

        cy.get('a[href="/app/promotion-management"]').click()

        cy.xpath('/html/body/div/div[1]/header/div[1]/button[3]').click()       //menu
        cy.get('a[href="/app/content-management"]').click()

        cy.get('a[href="/app/contents-management"]').click()

        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[3]/div/div[1]/div[1]/table/tbody/tr[1]/td[7]/button[1]').click()        //edit
        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/form/div/div[3]/button').click()        //save
        cy.get('a[href="/app/content-management"]').click()     //go back

        cy.xpath('/html/body/div/div[1]/header/div[1]/button[3]').click()       //menu
        cy.get('a[href="/app/settings-management"]').click()

        cy.get('a[href="/app/setting"]').click()
        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[3]/div/div[1]/div[1]/table/tbody/tr[1]/td[7]/button[1]').click()        //edit
        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/form/div/div[3]/button').click()

        cy.get('a[href="/app/settings-management"]').click()        //menu

//-----------------------------

        cy.xpath('/html/body/div/div[1]/header/div[1]/button[3]').click()       //menu
        cy.get('a[href="/app/globalcoupon-main-centre"]').click()

        cy.get('a[href="/app/global-coupon-management"]').click()

        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[3]/div/div[1]/div[1]/table/tbody/tr[1]/td[8]/button[1]').click()        //eye icon
        cy.get('a[href="/app/global-coupon-management"]').click()       //go back
        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[3]/div/div[1]/div[1]/table/tbody/tr[1]/td[7]/button').click()       //coupon history

        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[3]/div/div[1]/div[1]/table/tbody/tr[1]/td[6]/button').click()       //eye icon
        cy.get('a[href="/app/global-coupon-history"]').click()      //go back
        cy.get('a[href="/app/global-coupon-management"]').click()       //go back
        cy.get('a[href="/app/globalcoupon-main-centre"]').click()       //go back

        //--------------------------------------
        cy.xpath('/html/body/div/div[1]/header/div[1]/button[3]').click()
        cy.get('a[href="/app/delivery-management"]').click()
        cy.get('a[href="/app/delivery/dashboard"]').click()

        cy.get('a[href="/app/delivery-management"]').click()        //go back

        //--------------------------
        cy.xpath('/html/body/div/div[1]/header/div[1]/button[3]').click()
        cy.get('a[href="/app/corporate-management"]').click()
        cy.get('a[href="/app/corporate-gifting-management"]').click()

        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[3]/div/div[1]/div[1]/table/tbody/tr[1]/td[7]/div').click()      //gold gifting history
        cy.get('a[href="/app/corporate-gifting-management"]').click()       //go back
        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[3]/div/div[1]/div[1]/table/tbody/tr[2]/td[7]/div').click()      //bronze gifting hist..
        cy.get('a[href="/app/corporate-gifting-management"]').click()       //go back
        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[3]/div/div[1]/div[1]/table/tbody/tr[3]/td[7]/div').click()      //free.. gifting his..
        cy.get('a[href="/app/corporate-gifting-management"]').click()       //go back
        cy.get('a[href="/app/corporate-management"]').click()               //go back

        //-----------

        cy.xpath('/html/body/div/div[1]/header/div[1]/button[3]').click()
        cy.get('a[href="/app/meepaisa-fashion-hub"]').click()
        cy.get('a[href="/app/meepaisa-zone-theme-products"]').click()

        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/div[3]/div/div[1]/div[1]/table/tbody/tr[1]/td[6]/button[1]').click()        //zone products edit
        cy.xpath('/html/body/div/div[1]/div/div/div/div/div/form/div/div[3]/button').click()        //save

        cy.get('a[href="/app/meepaisa-fashion-hub"]').click()




        
    })
})