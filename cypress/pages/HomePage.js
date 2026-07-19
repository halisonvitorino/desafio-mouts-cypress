class HomePage {
  productCards() {
    return cy.get(".card");
  }

  addProductToShoppingList() {
    // 1. Iniciamos e retornamos a corrente principal do Cypress
    return cy
      .get(".card")
      .filter(":has([data-testid='adicionarNaLista'])")
      .first()
      .then(($card) => {
        // 2. Capturamos o texto do elemento síncronamente via jQuery
        const productName = $card.find("h5").text().trim();

        // 3. Executamos a ação de clique de forma isolada (evitando o encadeamento inseguro)
        cy.wrap($card).find('[data-testid="adicionarNaLista"]').click();

        // 4. Abrimos uma nova linha de comando independente para retornar o valor desejado
        return cy.then(() => productName);
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
