describe('Basket', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/curiositymugs/basket')
    }) 

    it('Should have 0 items', () => {
        const basketItems = cy.get('ul > li > span')
        // const commentListItems = cy.get('ul > li')
        basketItems.should('have.length', 0)
        // one line would be 
        // cy.get('#comment-list > li').should('have.length', 2)

    })

    // it('Should be able teo add a comment', () => {
    //     cy.get('#name-input').type('John Jackson')
    //     cy.get('#comment-input').type('This is a test')
    //     cy.get('#comment-form').submit()
    //     cy.get('#comment-list > li').should('have.length', 3)
    // })
})