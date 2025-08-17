import { faker } from '@faker-js/faker'

const LBL_WEBTABLES = '.text-center'
const BTN_ADD = '#addNewRecordButton'
const INPUT_FIRST_NAME = '#firstName'
const INPUT_LAST_NAME = '#lastName'
const INPUT_EMAIL = '#userEmail'
const INPUT_AGE = '#age'
const INPUT_SALARY = '#salary'
const INPUT_DEPARTMENT = '#department'
const BTN_SUBMIT = '#submit'
const LBL_REGISTRATIONFORM = '#registration-form-modal'


Cypress.Commands.add('validarTelaRegistro', () => {
    cy.get(LBL_WEBTABLES).should('be.visible').and('have.text', 'Web Tables')
})

Cypress.Commands.add('exibirFormulário', ()=>{
    cy.get(BTN_ADD).click()
})

 Cypress.Commands.add('validarTelaCampos', () => {
    cy.get(LBL_REGISTRATIONFORM).should('be.visible').and('have.text', 'Registration Form')
})

Cypress.Commands.add('preencherCamposCadastro', () => {

    cy.get(INPUT_FIRST_NAME).should('be.visible').type(faker.person.firstName())
    cy.get(INPUT_LAST_NAME).should('be.visible').type(faker.person.lastName());
    cy.get(INPUT_EMAIL).should('be.visible').type(Cypress.env('usuarioCadastrar').email, { log: false });
    cy.get(INPUT_AGE).should('be.visible').type(faker.number.int({min:18, max:70}).toString())
    cy.get(INPUT_SALARY).should('be.visible').type(faker.number.int({min:1000, max:100000}).toString())
    cy.get(INPUT_DEPARTMENT).should('be.visible').type(faker.commerce.department())
})

Cypress.Commands.add('submeterFormulario', ()=>{
    cy.get(BTN_SUBMIT).click()
})

 Cypress.Commands.add('validarCampoEmailFormulario', () => {  
    cy.get('.rt-tr-group').find('.rt-td').contains(Cypress.env('usuarioCadastrar').email).should('be.visible')
})
