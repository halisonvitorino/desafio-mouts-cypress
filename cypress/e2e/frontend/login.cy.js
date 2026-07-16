import userFactory from "../../factories/UserFactory.js";
import userService from "../../services/UserService.js";
import loginPage from "../../pages/LoginPage.js";

describe("Login", () => {
  let userData;

  beforeEach(() => {
    userData = userFactory.createUser();
    userService.createUser(userData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");
      expect(response.body).to.have.property("_id");
    });
    cy.visit("/");
  });

  // Como um usuário recém-cadastrado, via API, quero fazer login para acessar o sistema com sucesso.
  it("should log in successfully with valid credentials", () => {
    loginPage.login(userData);
    cy.url().should("include", "/home");
    cy.contains("Serverest Store").should("be.visible");
    cy.contains("Logout").should("be.visible");
  });
});
