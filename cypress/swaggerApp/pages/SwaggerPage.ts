export class SwaggerPage {
  open() {
    cy.visit("https://bookcart.azurewebsites.net/swagger");
  }

  verifyLoginApiExists() {
    cy.contains("/api/Login").should("exist");
  }
}

export const swaggerPage = new SwaggerPage();
