require('cypress-xpath')


 Cypress.Commands.add('clicarExcluir', () => {  
    cy.xpath('//*[text()="' + Cypress.env('usuarioExcluir').email + '"]/..//div[@class="action-buttons"]/span[@title="Delete"]').click()
})

 Cypress.Commands.add('validarExclusao', () => {  
    cy.get('.rt-tr-group').find('.rt-td').contains(Cypress.env('usuarioExcluir').email).should('not.exist')
})