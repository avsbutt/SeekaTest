const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: "https",
    setupNodeEvents(on, config) {
      // implement node event listeners here


            // testomat.io reporter plugin:
            require('@testomatio/reporter/lib/adapter/cypress-plugin')(on, config);
    },

    fixturesFolder: 'cypress/e2e/fixtures',
    tsc: 'cypress/support/commands.ts',

   
    video: true,
    videosFolder: 'cypress/e2e/videos',
    screenshotsFolder: 'cypress/e2e/screenshots',
    pageLoadTimeout:60000 ,
    screenshots: true,
    
    viewportWidth: 1280,
    viewportHeight: 800,
  
    

    screenshotOnRunFailure: true,
    reporter: 'mocha-allure-reporter',
    reporterOptions: {
      targetDir: 'allure-results',
      "viewportWidth":1280
    

    }
  },
});
