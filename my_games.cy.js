/// <reference types='cypress'/>

const { timeout } = require("async")

describe('gold', () => {
    beforeEach(() => {
        cy.visit('https://easystepin-uat.meepaisa.com/')
        cy.viewport(1920, 1080)
    })

    it('should load the page', () => {
        cy.url().should('include', 'easystepin-uat.meepaisa.com')

        cy.get('#email').type("rakesh.sirasanambeti@easystepin.com")
        cy.get('#password').type("Rakesh@123")

        cy.xpath('/html/body/div[1]/div/div/div[1]/div/form/button').click()

        cy.get('a[href="/games/"]').click()

        cy.wait(2000);

        
        cy.xpath('/html/body/div[1]/div[1]/div[2]/main/div/div/div[2]/div[2]/div[2]/div/div').click()

        cy.xpath('/html/body/div[4]/div[3]/ul/li[2]').click()       //online
        
    })


})