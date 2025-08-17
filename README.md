# Desafio de Cypress - Academia QA Accenture 2025
**Candidata:** Dórot Conceição Laureano de Vasconcelos Barbosa Rodrigues

## 1. Introdução 

Este repositório contém a resolução do desafio da Academia QA proposto pela Accenture. Para desenvolver esse projeto, utilizei o Cypress, contendo testes de Front-End (E2E), validações, escrita de feature em formato Gherkin e dados sensíveis tratados.

## 2. Tecnologias utilizadas

* **BDD:** Cucumber
* **Framework de Teste:** Cypress v10.9.0
* **Bibliotecas:** Faker e Cypress Xpath
* **Gerenciador de pacotes:** NPM
* **Padrão de Projeto:** Page Object Model (POM)
* **Linguagem:** JavaScript

 
## 3. Estrutura do Projeto

O projeto foi organizado através do padrão **Page Object Model (POM)** para garantir um código limpo, de fácil manutenção e que possa ser reutilizado.

*´cypress/e2e´* : Contém os arquivos .feature escritos em Gherkin.

*´cypress/fixtures´* : Arquivos JSON com massa de dados de teste.

*´cypress/support/pages´* : Implementação do Page Object Model (POM) para organizar ações de páginas.

*´cypress/support/step-definitions´* : Contém os steps que ligam os cenários .feature com o código Cypress.

*´cypress/support/commands.js´* : Comandos customizados do Cypress.

*´cypress/videos´* : Gravações de execução dos testes.

*´cypress.config.js´* : Arquivo de configuração do Cypress.

## 4. Como Executar o Projeto

**Pré-requisitos:**
* Node.js instalado
* NPM (geralmente instalado com o Node.js)

**Passos para execução:**

1.  Clone este repositório para a sua máquina local:
    ```bash
    git clone https://github.com/dorotrodrigues/Academia_Accenture2025.git
    ```

2.  Navegue até a pasta do projeto:
    ```bash
    cd Academia_Accenture2025
    ```

3.  Instale todas as dependências do projeto:
    ```bash
    npm install
    ```

4.  Abra a interface do Cypress para executar os testes:
    ```bash
    npx cypress open
    ```
