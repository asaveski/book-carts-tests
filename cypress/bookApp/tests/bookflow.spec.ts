import { loginPage } from "../pages/LoginPage";
import { registerPage } from "../pages/RegisterPage";
import { mainPage } from "../pages/MainPage";
import { wishlistPage } from "../pages/WishListPage";
import { cartPage } from "../pages/CartPage";
import { checkOutPage } from "../pages/CheckOutPage";

import user from "../fixtures/user.json";
import book from "../fixtures/book.json";
import shippingDetails from "../fixtures/shippingDetails.json";

describe("BookCart Flow", () => {
  beforeEach(() => {
    cy.session(
      user.username,
      () => {
        loginPage.login(user.username, user.password);

        // If login fails, register and retry login

        cy.get("body").then(($body) => {
          if (
            $body
              .text()
              .includes("Login Failed. Username or Password is incorrect.")
          ) {
            cy.log("User not found — registering...");
            registerPage.register(
              user.firstName,
              user.lastName,
              user.username,
              user.password
            );
            loginPage.login(user.username, user.password); // Retry
          }
        });
      },
      {
        validate() {
          cy.visit("https://bookcart.azurewebsites.net/");
          cy.contains(user.username); // confirms login

          // Ensure books exist
          (book.wishlistBooks as string[]).forEach((book: string) => {
            cy.contains(book);
          });
        },
      }
    );
  });

  it("completes the book buying flow", () => {
    cy.visit("https://bookcart.azurewebsites.net/");
    cy.contains(user.username);

    // 1. Add 2 books to wishlist
    book.wishlistBooks.forEach((title) => {
      mainPage.addToWishlist(title);
      cy.wait(1000); // Wait for the wishlist to update
    });

    // 2. Go to the wishlist
    mainPage.goToWishlist();

    // 3. Move 1 book to cart, remove from wishlist
    wishlistPage.getBookRowByTitle(book.buyBook).within(() => {
      wishlistPage.addToCartByTitle(book.buyBook);
      wishlistPage.removeFromWishlistByTitle(book.buyBook);
    });

    // 4. Go to cart
    mainPage.goToCart();

    // 5. Proceed to checkout
    cartPage.checkout();

    // 6. Fill and submit shipping form
    checkOutPage.fillShippingForm(shippingDetails);
    checkOutPage.placeOrder();

    // Confirmation step (optional)
    cy.contains(book.buyBook).should("exist");
  });
});
