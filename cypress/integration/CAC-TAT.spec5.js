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
    it('seleciona um arquivo da pasta fixtures', () => {
        cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json')
            .should(input => {
                expect(input[0].files[0].name).to.equal('example.json')
            })
    })

    // Exercício extra 1
    it('seleciona um arquivo simulando um drag-and-drop', () => {
        cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
            .should(input => {
                console.log(input)
                expect(input[0].files[0].name).to.equal('example.json')
            })
    })

    // Exercício extra 2
    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
        cy.fixture('example.json', { enconding: null }).as('exampleFile')
        cy.get('input[type="file"]')
            .selectFile('@exampleFile')
            .should(input => {
                console.log(input)
                expect(input[0].files[0].name).to.equal('example.json')
            })
    })
})





