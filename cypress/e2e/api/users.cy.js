import userFactory from "../../factories/UserFactory.js";
import userService from "../../services/UserService.js";

describe("Users API", () => {
  it("should create a new user successfully", () => {
    const userData = userFactory.createUser();

    userService.createUserOnApi(userData).then((createResponse) => {
      expect(createResponse.status).to.eq(201);
      expect(createResponse.body.message).to.eq("Cadastro realizado com sucesso");
      expect(createResponse.body).to.have.property("_id");
      expect(createResponse.body._id).to.be.a("string");
      expect(createResponse.body._id).not.to.be.empty;

      const userId = createResponse.body._id;

      userService.getUserById(userId).then((getResponse) => {
        expect(getResponse.status).to.eq(200);
        expect(getResponse.body).to.deep.include({
          nome: userData.nome,
          email: userData.email,
          password: userData.password,
          administrador: userData.administrador,
          _id: userId,
        });
      });

      userService.deleteUser(userId).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(200);
        expect(deleteResponse.body.message).to.eq("Registro excluído com sucesso");
      });

      userService.getUserById(userId, { failOnStatusCode: false }).then((getResponse) => {
        expect(getResponse.status).to.eq(400);
        expect(getResponse.body.message).to.eq("Usuário não encontrado");
      });
    });
  });
});
