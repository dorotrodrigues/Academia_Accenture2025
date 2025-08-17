import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'


And('o usuário clica no botão {string}', (nomeBtn) => {
   
    if (nomeBtn === 'editar') {
        cy.clicarEdit()
    } else if (nomeBtn === 'excluir') {
        cy.clicarExcluir()
    }

})

And('é aberto um modal para alteração de registro', () => {
     cy.validarTelaCampos()
})


When('o usuário altera o campo nome', () => {
   cy.alterarNome()
})


And('o usuário clica no botão Submit para salvar a alteração', () => {
    cy.submeterFormulario()
})


Then('o nome do usuario deve ser atualizado na tabela', () => {
    cy.validarCampoNomeFormulario()
})