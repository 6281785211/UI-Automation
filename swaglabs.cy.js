/// <reference types='cypress'/>


describe ('practice', ()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/v1/")
        cy.viewport(1980, 1080)
    })

    it ('should load the page', ()=>{
        cy.url().should('include', 'saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')

        cy.get('#login-button').click()

        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[1]/a/img').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div/div/button').click()     //add to cart
        cy.xpath('/html/body/div/div[2]/div[1]/div[2]').click()     //cart
        cy.xpath('/html/body/div/div[2]/div[3]/div/div[2]/a[2]').click()

        cy.get('#first-name').type('Rakesh')
        cy.get('#last-name').type('Sirasanambeti')
        cy.get('#postal-code').type('524121')
        cy.xpath('/html/body/div/div[2]/div[3]/div/form/div[2]/input').click()
        cy.xpath('/html/body/div/div[2]/div[3]/div/div[2]/div[8]/a[2]').click()

        cy.xpath('/html/body/div/div[1]/div/div[3]/div').click()        //menu
        cy.get('#inventory_sidebar_link').click()       //all products
        // cy.get('#logout_sidebar_link').click()
        cy.get('#logout_sidebar_link').click({ force: true });

    })
})