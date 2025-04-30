import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://bookcart.azurewebsites.net",
    specPattern: [
      "cypress/bookApp/tests/**/*.ts",
      "cypress/swaggerApp/tests/**/*.ts",
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
