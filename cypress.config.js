const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,

  e2e: {
    
    baseUrl: "https://demowebshop.tricentis.com/",
    browser: "chrome",
    viewportWidth: 1280,
    viewportHeight: 720

  },

    setupNodeEvents(on, config) {
    },
    defaultCommandTimeout: 5000
  },
);
