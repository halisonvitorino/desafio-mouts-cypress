const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 10000,
  video: false,
  screenshotOnRunFailure: true,
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    charts: true,
    reportPageTitle: "ServeRest Cypress Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly: true,
  },

  e2e: {
    baseUrl: "https://front.serverest.dev",

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
  },

  env: {
    apiUrl: "https://serverest.dev",
  },
});
