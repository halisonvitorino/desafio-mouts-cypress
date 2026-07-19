import userFactory from "../../factories/UserFactory.js";
import productFactory from "../../factories/ProductFactory.js";

import userService from "../../services/UserService.js";
import productService from "../../services/ProductService.js";
import loginService from "../../services/LoginService.js";

describe("Products API", () => {
  it("should create a new product with admin authorization successfully", () => {
    const productData = productFactory.createProduct();
    const userAdminData = userFactory.createUser({ administrador: "true" });

    userService.createUserOnApi(userAdminData).then((createUserResponse) => {
      expect(createUserResponse.status).to.eq(201);
      const userAdminId = createUserResponse.body._id;
      const credentials = {
        email: userAdminData.email,
        password: userAdminData.password,
      };

      loginService.login(credentials).then((loginResponse) => {
        expect(loginResponse.status).to.eq(200);
        const token = loginResponse.body.authorization;

        productService.createProduct(productData, token).then((createProductResponse) => {
          expect(createProductResponse.status).to.eq(201);

          const productId = createProductResponse.body._id;

          productService.getProductById(productId).then((getProductResponse) => {
            expect(getProductResponse.body).to.deep.include({
              nome: productData.nome,
              preco: productData.preco,
              descricao: productData.descricao,
              quantidade: productData.quantidade,
              _id: productId,
            });
          });

          productService.deleteProduct(productId, token).then((deleteProductRespose) => {
            expect(deleteProductRespose.status).to.eq(200);
          });
        });

        userService.deleteUser(userAdminId).then((deleteResponse) => {
          expect(deleteResponse.status).to.eq(200);
        });
      });
    });
  });
});
