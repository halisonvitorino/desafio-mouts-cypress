import userFactory from "../../factories/UserFactory.js";
import loginPage from "../../pages/LoginPage.js";
import homePage from "../../pages/HomePage.js";
import userService from "../../services/UserService.js";
import productListPage from "../../pages/ShoppingListPage.js";

describe("Shopping List", () => {
  let userData;
  const productName = "lixa";

  beforeEach(() => {
    userData = userFactory.createUser({
      administrador: "false",
    });
    userService.createUserOnApi(userData).then((response) => {
      expect(response.status).to.eq(201);
    });
    cy.visit("/");
    loginPage.login(userData);
  });

  it("should add a product to shopping list", () => {
    homePage.addProductToShoppingList(productName);
    cy.url().should("include", "/minhaListaDeProdutos");
    productListPage.pageTitle().should("be.visible");
    productListPage.shouldDisplayProduct(productName);
    productListPage.shouldDisplayQuantity(1);
  });
});
