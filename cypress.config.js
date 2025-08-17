const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    watchForFileChanges: false, 
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'http://demoqa.com/webtables',

    env: {

      usuarioCadastrar:{
        email: "dorot_academia_01@gmail.com"
      },
      usuarioAtualizar: {
        email: "kierra@example.com",
        nome: "Dórot",
      },
      usuarioExcluir: {
        email: "cierra@example.com"
      }

    },

    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
    },
  },
});