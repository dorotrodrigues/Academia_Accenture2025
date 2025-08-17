require('cypress-xpath')

const INPUT_FIRST_NAME = '#firstName'

 Cypress.Commands.add('clicarEdit', () => {  
    cy.xpath('//*[text()="' + Cypress.env('usuarioAtualizar').email + '"]/..//div[@class="action-buttons"]/span[@title="Edit"]').click()
})

Cypress.Commands.add('alterarNome', () => {
    cy.get(INPUT_FIRST_NAME).clear().type(Cypress.env('usuarioAtualizar').nome)
})

 Cypress.Commands.add('validarCampoNomeFormulario', () => {  
    cy.get('.rt-tr-group').find('.rt-td').contains(Cypress.env('usuarioAtualizar').nome).should('be.visible')
})