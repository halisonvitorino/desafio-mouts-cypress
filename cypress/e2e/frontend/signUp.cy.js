import userFactory from "../../factories/UserFactory.js";
import loginPage from "../../pages/LoginPage.js";
import registerUserPage from "../../pages/RegisterUserPage.js";

describe("Sign up", () => {
  let userData;

  beforeEach(() => {
    userData = userFactory.createUser({
      administrador: "false",
    });
    cy.visit("/");
  });

  it("should sign up a new user successfully", () => {
    loginPage.clickSignUpLink();
    registerUserPage.signUp(userData);
    cy.url().should("include", "/home");
    cy.contains("Serverest Store").should("be.visible");
    cy.contains("Logout").should("be.visible");
  });
});
