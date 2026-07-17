class HomePage {
  addProductToShoppingList(product) {
    cy.contains(product)
      .closest(".card")
      .within(() => {
        cy.get('[data-testid="adicionarNaLista"]').click();
      });
  }

  logoutButton() {
    return cy.get('[data-testid="logout"]');
  }

  clickLogoutButton() {
    this.logoutButton().click();
  }
}

export default new HomePage();
