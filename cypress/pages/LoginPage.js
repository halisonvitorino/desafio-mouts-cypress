class LoginPage {
  emailInput() {
    return cy.get('[data-testid="email"]');
  }

  senhaInput() {
    return cy.get('[data-testid="senha"]');
  }

  entrarButton() {
    return cy.get('[data-testid="entrar"]');
  }

  cadastrarLink() {
    return cy.get('[data-testid="cadastrar"]');
  }
}

export default new LoginPage();
