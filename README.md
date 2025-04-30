- Implemented Cypress monorepo structure with separate test apps for BookCart and Swagger
- Added POMs: MainPage, WishlistPage, CartPage, CheckoutPage, and Login/Register
- Created fixture files for user, books, and shipping details
- Developed full end-to-end test flow:
  1. Login (with fallback register)
  2. Add books to wishlist
  3. Verify wishlist badge count
  4. Move book from wishlist to cart
  5. Verify cart and wishlist badge counts
  6. Complete checkout with shipping details
- Added Swagger test to verify login API presence
- Ensured all selectors work with Angular Material structure
- Improved selectors and click handling to avoid duplicate/unreliable actions
- Added `test:book` and `test:swagger` npm scripts for isolated runs

All code uses TypeScript, is fully typed, and follows Cypress best practices.
