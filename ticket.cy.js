/// <reference types='cypress'/>

const { timeout } = require("async")

describe('gold', () => {
    beforeEach(() => {
        cy.visit('https://easystepin-uat.meepaisa.com/')
        cy.viewport(1920, 1080)
    })

    it ('should the load page', ()=>{
        cy.url().should('include', 'easystepin-uat.meepaisa.com')

        cy.get('#email').type("taruni.gundraju@easystepin.com")
        cy.get('#password').type("Step@12345")

        cy.xpath('/html/body/div[1]/div/div/div[1]/div/form/button').click()

        cy.get('a[href="/ticket-management/"]').click()
        cy.wait(20000);
        cy.xpath('/html/body/div[1]/div[1]/div[2]/main/div/div/div/div[1]/button').click()      //cretae ticket
        cy.get('#Ticket_Subject').type('Delivery')      //title
        cy.xpath('/html/body/div[1]/div[1]/div[2]/main/div/div/div/form/div[1]/div/div[2]/div/div/div').click()
        cy.contains('Delivery').click()

        cy.get('#Description').type('Testing purpose')

        cy.xpath('/html/body/div/div[1]/div[2]/main/div/div/div/form/div[2]/button[1]').click()     //cancel
        cy.xpath('/html/body/div/div[1]/div[2]/main/div/div/div/form/div[2]/button[2]').click()     //Raise button

        cy.xpath('/html/body/div/div[1]/div[2]/main/div/div/div/div[2]/div[1]/table/tbody/tr[1]/td[2]').click()     //ticket link
        cy.xpath('/html/body/div/div[1]/div[2]/main/div/div[3]/button').click()     //Back
        cy.xpath('/html/body/div/div[1]/div[2]/main/div/div/div/div[2]/div[1]/table/tbody/tr[1]/td[1]/span/input').click()      //checkbox
    })



})