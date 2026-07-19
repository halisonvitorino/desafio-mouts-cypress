class ProductService {
  createProduct(productData, token) {
    return cy.request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/produtos`,
      headers: {
        authorization: token,
      },
      body: productData,
    });
  }

  getProductById(productId) {
    return cy.request({
      method: "GET",
      url: `${Cypress.env("apiUrl")}/produtos/${productId}`,
    });
  }

  deleteProduct(productId, token) {
    return cy.request({
      method: "DELETE",
      url: `${Cypress.env("apiUrl")}/produtos/${productId}`,
      headers: {
        authorization: token,
      },
    });
  }
}

export default new ProductService();
