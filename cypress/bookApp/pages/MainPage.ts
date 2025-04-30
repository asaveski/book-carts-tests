export class MainPage {
  visit() {
    cy.visit("/");
  }

  getBookCardByTitle(title: string) {
    return cy.contains(".card-title strong", title).parents("mat-card");
  }

  addToWishlist(title: string) {
    this.getBookCardByTitle(title)
      .find(".favourite .material-icons")
      .should(($icon) => {
        // Ensure the button is not already active
        expect($icon).not.to.have.class("active");
      })
      .click(); // Click the button only if the assertion passes
  }

  addToCart(title: string) {
    this.getBookCardByTitle(title)
      .find('button:contains("Add to Cart")')
      .click();
  }

  verifyWishlistBadgeCount(expectedCount: number) {
    cy.get('mat-icon:contains("favorite")')
      .find(".mat-badge-content")
      .should("have.text", `${expectedCount}`);
  }

  verifyCartBadgeCount(expectedCount: number) {
    cy.get('mat-icon:contains("shopping_cart")')
      .find(".mat-badge-content")
      .should("have.text", `${expectedCount}`);
  }

  goToWishlist() {
    cy.get("button .mat-badge").contains("favorite").click({ force: true });
  }

  goToCart() {
    cy.get("button .mat-badge")
      .contains("shopping_cart")
      .click({ force: true });
  }
}
export const mainPage = new MainPage();
