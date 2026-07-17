class ShoppingListPage {
  pageTitle() {
    return cy.contains("h1", "Lista de Compras");
  }

  productName(productName) {
    return cy.contains(
      '[data-testid="shopping-cart-product-name"]',
      productName,
    );
  }

  shouldDisplayProduct(productName) {
    this.productName(productName).should("be.visible");
  }

  shouldDisplayQuantity(quantity) {
    cy.get('[data-testid="shopping-cart-product-quantity"]').should(
      "contain.text",
      String(quantity),
    );
  }
}

export default new ShoppingListPage();
