import userFactory from "../../factories/UserFactory.js";
import userService from "../../services/UserService.js";
import loginService from "../../services/LoginService.js";

describe("Login API", () => {
  it("should authenticate a new user successfully", () => {
    const userData = userFactory.createUser({
      administrador: "true",
    });

    userService.createUserOnApi(userData).then((createResponse) => {
      expect(createResponse.status).to.eq(201);
      expect(createResponse.body.message).to.eq(
        "Cadastro realizado com sucesso",
      );
      expect(createResponse.body).to.have.property("_id");
      expect(createResponse.body._id).to.be.a("string");
      expect(createResponse.body._id).not.to.be.empty;

      const userId = createResponse.body._id;

      const credentials = {
        email: userData.email,
        password: userData.password,
      };

      cy.wait(2000); // Espera 2 segundos antes da próxima requisição

      loginService.login(credentials).then((loginResponse) => {
        expect(loginResponse.status).to.eq(200);
        expect(loginResponse.body.message).to.eq("Login realizado com sucesso");
        expect(loginResponse.body).to.have.property("authorization");
        expect(loginResponse.body.authorization).to.be.a("string").and.not.be
          .empty;
      });

      cy.wait(2000); // Espera 2 segundos antes da próxima requisição

      userService.deleteUser(userId).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(200);
        expect(deleteResponse.body.message).to.eq(
          "Registro excluído com sucesso",
        );
      });

      cy.wait(2000); // Espera 2 segundos antes da próxima requisição

      userService
        .getUserById(userId, { failOnStatusCode: false })
        .then((getResponse) => {
          expect(getResponse.status).to.eq(400);
          expect(getResponse.body.message).to.eq("Usuário não encontrado");
        });
    });
  });
});
