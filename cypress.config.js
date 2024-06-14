const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: "https",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    fixturesFolder: 'cypress/e2e/fixtures',
    tsc: 'cypress/support/commands.ts',

   
    video: true,
    videosFolder: 'cypress/e2e/videos',
    screenshotsFolder: 'cypress/e2e/screenshots',
    pageLoadTimeout:30000 ,
    screenshots: true,
  
    

    screenshotOnRunFailure: true,
    reporter: 'mocha-allure-reporter',
    reporterOptions: {
      targetDir: 'allure-results'
    

    }
  },
});
