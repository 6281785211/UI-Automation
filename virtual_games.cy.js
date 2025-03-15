/// <reference types='cypress'/>

const { timeout } = require("async")

describe('gold', () => {
    beforeEach(() => {
        cy.visit('https://easystepin-uat.meepaisa.com/')
        cy.viewport(1920, 1080)
    })

    it('should load the page', () => {
        cy.url().should('include', 'easystepin-uat.meepaisa.com')

        cy.get('#email').type("taruni.gundraju@easystepin.com")
        cy.get('#password').type("Step@12345")

        cy.xpath('/html/body/div[1]/div/div/div[1]/div/form/button').click()

        cy.get('a[href="/games/"]').click()

        cy.wait(2000);


        //-------------virtual games------------from admin--------//
        cy.xpath('/html/body/div/div[1]/div[2]/main/div/div/div[2]/div[3]/div/div[1]').click()

        cy.xpath('/html/body/div/div[1]/div[2]/main/div[2]/div/div[2]/div[6]/button').click()
        cy.xpath('/html/body/div/div[1]/div[2]/main/form/div[1]/div[2]/div[1]/label[2]/span[1]/input').click()

        cy.xpath('/html/body/div/div[1]/div[2]/main/form/div[1]/div[2]/div[2]/div/div/div/button').click()
        cy.contains('Management').click()
        cy.contains('R&D Team').click()
        cy.xpath('/html/body/div/div[1]/div[2]/main/form/div[1]/div[2]/div[2]/div/div/div[3]/button[2]').click()
        cy.xpath('/html/body/div/div[1]/div[2]/main/form/div[1]/div[4]/label/span[1]/input').click()

        cy.xpath('/html/body/div/div[1]/div[2]/main/form/div[1]/div[5]/div/div[1]/div[1]/div/div/div').click()
        cy.xpath('/html/body/div[2]/div[3]/ul/li[2]').click()

        cy.xpath('/html/body/div/div[1]/div[2]/main/form/div[1]/div[5]/div/div[1]/div[3]/button').click()       //AI

        cy.xpath('/html/body/div/div[1]/div[2]/main/form/div[2]/div[2]/div[1]/div/div').click()
        cy.xpath('/html/body/div[2]/div[3]/ul/li[2]').click()       //medium

        cy.xpath('/html/body/div/div[1]/div[2]/main/form/div[2]/div[2]/div[2]/div/div/div/input').type('00,10')

        cy.xpath('/html/body/div/div[1]/div[2]/main/form/div[3]/button[2]').click()     //save button

        

    })


})