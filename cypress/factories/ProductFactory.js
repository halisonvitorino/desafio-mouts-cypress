import { faker } from "@faker-js/faker";

class ProductFactory {
  createProduct() {
    const product = {
      nome: `${faker.commerce.productName()} ${faker.string.uuid()}`,
      preco: Math.floor(faker.commerce.price({ min: 10, max: 1000 })),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({ min: 1, max: 100 }),
    };
    return product;
  }
}
export default new ProductFactory();
