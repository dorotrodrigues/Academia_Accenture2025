import { faker } from '@faker-js/faker'
import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'


Given('que o usuário está na página web tables', () => {
    cy.visit('/')
    cy.validarTelaRegistro()
})

And('o usuário clica no botão Add para adicionar um novo registro', () => {
   cy.exibirFormulário()
})

And('é aberto um modal para cadastro de registro', () => {
     cy.validarTelaCampos()
})


When('o usuário preenche todos os campos solicitados com os valores válidos', () => {
   cy.preencherCamposCadastro()
})


And('o usuário clica no botão Submit para salvar o registro', () => {
    cy.submeterFormulario()
})


Then('os dados do usuário aparecem na lista com sucesso', () => {
    cy.validarCampoEmailFormulario()
})