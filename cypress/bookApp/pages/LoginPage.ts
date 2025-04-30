export class LoginPage {
  visit() {
    cy.visit("/");
  }

  clickLoginMenu() {
    cy.contains("button", "Login").click();
  }

  fillUsername(username: string) {
    cy.get('input[formcontrolname="username"]').type(username);
  }

  fillPassword(password: string) {
    cy.get('input[formcontrolname="password"]').type(password);
  }

  submitLoginForm() {
    cy.get("mat-card-actions").find("button").contains("Login").click();
  }

  login(username: string, password: string) {
    this.visit();
    this.clickLoginMenu();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submitLoginForm();
  }
}

export const loginPage = new LoginPage();
