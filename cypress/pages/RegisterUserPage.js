class RegisterUserPage {
  nameInput() {
    return cy.get('[data-testid="nome"]');
  }

  emailInput() {
    return cy.get('[data-testid="email"]');
  }

  passwordInput() {
    return cy.get('[data-testid="password"]');
  }

  administradorCheckbox() {
    return cy.get('[data-testid="checkbox"]');
  }

  signUpButton() {
    return cy.get('[data-testid="cadastrar"]');
  }

  fillName(name) {
    this.nameInput().type(name);
  }

  fillEmail(email) {
    this.emailInput().type(email);
  }

  fillPassword(password) {
    this.passwordInput().type(password);
  }

  clickSignUpButton() {
    this.signUpButton().click();
  }

  signUp(userData) {
    this.fillName(userData.nome);
    this.fillEmail(userData.email);
    this.fillPassword(userData.password);
    this.clickSignUpButton();
  }
}

export default new RegisterUserPage();
