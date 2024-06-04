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
    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('select#product').select('YouTube').should('have.value', 'youtube')
    })

    // Exercício 1
    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('select#product').select('mentoria').should('have.value', 'mentoria')
    })
    
    // Exercício 2

    it('seleciona um produto (Blog) por seu índice', function () {
        cy.get('select#product').select(1).should('have.value', 'blog')
    })
})





