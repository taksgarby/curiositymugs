describe('Basket', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/curiositymugs/basket')
    }) 

    it('Should have 0 items', () => {
        const basketItems = cy.get('ul > li > span')
        basketItems.should('have.length', 0)

    })

    it('Should be able to add an item', () => {
        cy.visit('http://localhost:3000/curiositymugs')
        cy.get('.btn').first().click()
        const basketInfo = cy.get('.basketinfo')
        basketInfo.should('have.length', 1)
    })
})