const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://feastables.com',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // Node Event: Log to terminal for CI/CD debugging
      on('task', {
        log(message) {
          console.log(`[Cypress Log]: ${message}`);
          return null;
        },
      });
    },
  },
});