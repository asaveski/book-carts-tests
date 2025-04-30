export class RegisterPage {
  visit() {
    cy.visit("/");
    cy.contains("button", "Login").click();
    cy.contains("button", "Register").click();
  }

  fillFirstName(firstName: string) {
    cy.get('input[formcontrolname="firstName"]').type(firstName);
  }

  fillLastName(lastName: string) {
    cy.get('input[formcontrolname="lastName"]').type(lastName);
  }

  fillUsername(username: string) {
    cy.get('input[formcontrolname="userName"]').type(username);
  }

  fillPassword(password: string) {
    cy.get('input[formcontrolname="password"]').type(password);
  }

  fillConfirmPassword(confirmPassword: string) {
    cy.get('input[formcontrolname="confirmPassword"]').type(confirmPassword);
  }

  selectGender(gender: "Male" | "Female") {
    cy.get(`mat-radio-button[value="${gender}"] input`).check({ force: true });
  }

  submit() {
    cy.contains("button", "Register").click();
  }

  register(
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ) {
    this.visit();
    this.fillFirstName(firstName);
    this.fillLastName(lastName);
    this.fillUsername(username);
    this.fillPassword(password);
    this.fillConfirmPassword(password);
    this.selectGender("Male");
    this.submit();
  }
}

export const registerPage = new RegisterPage();
