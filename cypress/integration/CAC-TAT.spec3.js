// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


// 👨‍🏫 O bloco describe define a suíte de testes, e o bloco it, define um caso de teste.
/// <reference types="Cypress" />



describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    // Exercício
    it('marca o tipo de atendimento "Feedback"', function() {
        cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')
    })

    // Exercício extra
    it('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]').should('have.length', 3)
            .each(($radio) => {
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            })
    })
})





