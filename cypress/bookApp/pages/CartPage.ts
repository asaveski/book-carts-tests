// cypress/pages/CartPage.ts
export class CartPage {
  visit() {
    cy.visit("/cart");
  }

  getCartTable() {
    return cy.get("table[mat-table]");
  }

  getBookRowByTitle(title: string) {
    return cy.contains("td.mat-column-title", title).parents("tr");
  }

  removeFromCartByTitle(title: string) {
    this.getBookRowByTitle(title)
      .find("td.mat-column-action button mat-icon")
      .contains("delete")
      .click();
  }

  increaseQuantityByTitle(title: string) {
    this.getBookRowByTitle(title)
      .find("td.mat-column-quantity button mat-icon")
      .contains("add_circle")
      .click();
  }

  getCartTotal() {
    return cy.contains("strong", "Cart Total:").next("strong");
  }

  clearCart() {
    cy.contains("button", "Clear cart").click();
  }

  checkout() {
    cy.contains("button", "CheckOut").click();
  }
}
export const cartPage = new CartPage();
