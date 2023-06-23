describe('App',() => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/curiositymugs/basket')
    })

    it('Loads the app', () => {
        const basket = cy.get('p')
        basket.should('contain','0')
    })

} )