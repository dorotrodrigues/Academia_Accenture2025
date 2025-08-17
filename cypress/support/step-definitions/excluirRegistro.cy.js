import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'




Then('o registro deve ser removido da tabela', () => {
    cy.validarExclusao()
})