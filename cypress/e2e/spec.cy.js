describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('localhost:3000') 
  })

  it('should add a task', () => {
    const taskName = 'Do homework'

    cy.get('.new-expense__control #title')
      .type(taskName)

    cy.get('.new-expense__actions button')
      .click()

    cy.get('.task')
      .should('have.length', 1)

    cy.get('#title')
      .invoke('text')
      .then((text) => {
        expect(text).to.match(/^\s*Do homework\s*$/)
      })
  })
})

