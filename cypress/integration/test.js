const { createYield } = require("typescript")

describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('http://localhost:3001')
      cy.get('#test').contains('Test')
    })
  })