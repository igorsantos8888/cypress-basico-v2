Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Igor')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('Igorsantos888@gmail.com')
    cy.get('#phone').type('(22) 988287168')
    cy.get('#open-text-area').type('Ótimo curso! aprendi muito.')
    cy.get('button[type="submit"]').click()
    
})


