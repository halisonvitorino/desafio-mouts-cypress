const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dg89hw",
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 10000,
  video: true,
  screenshotOnRunFailure: true,

  e2e: {
    baseUrl: "https://front.serverest.dev",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
