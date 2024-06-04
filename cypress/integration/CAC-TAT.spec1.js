// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


// 👨‍🏫 O bloco describe define a suíte de testes, e o bloco it, define um caso de teste.
/// <reference types="Cypress" />



describe('Central de Atendimento ao Cliente TT', function () {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('Verifica o titlo da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('Preenche os campos obrigatórios e envia o formulário', function () {
        cy.get('#firstName').type('Igor')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('Igorsantos888@gmail.com')
        cy.get('#phone').type('(22) 988287168')
        cy.get('#open-text-area').type('Ótimo curso! aprendi muito.')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })

    // Exercício extra 1
    it('Exercio 1', function () {
        const longText = 'Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.Ótimo curso! aprendi muito.'
        cy.get('#firstName').type('Igor')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('Igorsantos888@gmail.com')
        cy.get('#phone').type('(22) 988287168')
        cy.get('#open-text-area').type(longText, {
            delay: 0
        })
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })

    // Exercício extra 2
    it('Exercicio 2 (exibe mensagem de erro ao submeter o formulário com um email com formatação inválida)', function () {
        cy.get('#firstName').type('Igor')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('igorsantos*gmail.com')
        cy.get('#open-text-area').type('Ótimo curso! aprendi muito.')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    // Exercício extra 3
    it('Exercicio 3 (Campo telefone só aceita números)', function() {
        cy.get('#firstName').type('Igor')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('igorsantos@gmail.com')
        cy.get('#phone').type('abcdefg').should('have.value', '')
        cy.get('#open-text-area').type('Ótimo curso! aprendi muito.')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })

    // Exercício extra 4
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName').type('Igor')
        cy.get('#lastName').type('Santos')
        cy.get('#email').type('igorsantos@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Ótimo curso! aprendi muito.')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    // Exercício extra 5
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
        cy.get('#firstName').type('Igor').should('have.value', 'Igor')
        cy.get('#lastName').type('Santos').should('have.value', 'Santos')
        cy.get('#email').type('igorsantos@gmail.com').should('have.value', 'igorsantos@gmail.com')
        cy.get('#phone').type('22988287168').should('have.value', '22988287168')
        cy.get('#open-text-area').type('Ótimo curso! aprendi muito.')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.get('#firstName').clear().should('have.value', '')
        cy.get('#lastName').clear().should('have.value', '')
        cy.get('#email').clear().should('have.value', '')
        cy.get('#phone').clear().should('have.value', '')
        cy.get('#open-text-area').clear().should('have.value', '')
    })

    // Exercício extra 6
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    // Exercício extra 7
    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })

    // Exercício extra 8
    it('Cy.Contains', function () {
        cy.get('#firstName').type('Igor').should('have.value', 'Igor')
        cy.get('#lastName').type('Santos').should('have.value', 'Santos')
        cy.get('#email').type('igorsantos@gmail.com').should('have.value', 'igorsantos@gmail.com')
        cy.get('#phone').type('22988287168').should('have.value', '22988287168')
        cy.get('#open-text-area').type('Ótimo curso! aprendi muito.')
        cy.contains('button[type="submit"]', 'Enviar').click()
        cy.get('.success').should('be.visible')
    })    
})





