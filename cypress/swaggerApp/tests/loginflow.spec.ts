import { swaggerPage } from "../pages/SwaggerPage";

describe("Swagger API Docs", () => {
  beforeEach(() => {
    swaggerPage.open();
  });

  it("should display the login API", () => {
    swaggerPage.verifyLoginApiExists();
  });
});
