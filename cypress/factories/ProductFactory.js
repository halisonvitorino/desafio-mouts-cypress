class ProductFactory {
  createProduct() {
    const uniqueId = "${Date.now()}";
    const price = Cypress._.random(10, 1000);
    const quantity = Cypress._.random(1, 100);

    const product = {
      nome: uniqueId,
      preco: price,
      descricao: "Automation Product",
      quantidade: quantity,
    };
    return product;
  }
}
export default new ProductFactory();
