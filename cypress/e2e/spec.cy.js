describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000') // visit the app's URL
  })

  it('should add and delete a task', () => {
    const taskName = 'Do homework' // set the name of the task to add

    cy.get('.new-task input') // find the input field for task name
      .type(taskName) // enter the task name

    cy.get('.new-task button[type="submit"]') // find the submit button
      .click() // click the submit button

    cy.get('.tasks li') // find the list item for the added task
      .should('have.length', 1) // check that there is one task in the list
      .and('contain.text', taskName) // check that the task name is correct

    cy.get('.tasks li button') // find the delete button for the task
      .click() // click the delete button

    cy.get('.tasks li') // find the list item for the deleted task
      .should('not.exist') // check that the task is no longer in the list
  })
})


