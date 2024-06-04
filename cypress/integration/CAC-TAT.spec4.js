// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


// 👨‍🏫 O bloco describe define a suíte de testes, e o bloco it, define um caso de teste.
/// <reference types="Cypress" />



describe('Checkboxes', function () {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    // exercicio
    it.only('marca ambos checkboxes, depois desmarca o último', () => {
        cy.get('#check input[type="checkbox"]')
            .check()
            .should('be.checked')
            .last()
            .uncheck()
            .should('not.be.checked')

    })

    // exercicio 2
    it.only('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('#firstName').type('Igor').should('have.value', 'Igor')
        cy.get('#lastName').type('Santos').should('have.value', 'Santos')
        cy.get('#email').type('igorsantos@gmail.com').should('have.value', 'igorsantos@gmail.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('Ótimo curso! aprendi muito.')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
})





