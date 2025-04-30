export class WishlistPage {
  visit() {
    cy.visit("/wishlist");
  }

  getWishlistTable() {
    return cy.get("table[mat-table]");
  }

  getBookRowByTitle(title: string) {
    return cy.contains("td.mat-column-title", title).parents("tr");
  }

  removeFromWishlistByTitle(title: string) {
    this.getBookRowByTitle(title).find("td.mat-column-wishlist button").click();
  }

  addToCartByTitle(title: string) {
    this.getBookRowByTitle(title).find("td.mat-column-cart button").click();
  }

  clearWishlist() {
    cy.contains("button", "Clear Wishlist").click();
  }
}
export const wishlistPage = new WishlistPage();
