class HomePage {
  productCards() {
    return cy.get(".card");
  }

  addProductToShoppingList() {
    return cy
      .get(".card")
      .filter(":has([data-testid='adicionarNaLista'])")
      .first()
      .then(($card) => {
        const productName = $card.find("h5").text().trim();

        return cy
          .wrap($card)
          .find('[data-testid="adicionarNaLista"]')
          .click()
          .then(() => productName);
      });
  }

  //addProductToShoppingList(product) {
  //cy.contains(product)
  //.closest(".card")
  //.within(() => {
  //cy.get('[data-testid="adicionarNaLista"]').click();
  //});
  //}

  logoutButton() {
    return cy.get('[data-testid="logout"]');
  }

  clickLogoutButton() {
    this.logoutButton().click();
  }
}

export default new HomePage();
