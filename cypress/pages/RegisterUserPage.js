class RegisterUserPage {
  logoutButton() {
    return cy.get('[data-testid="logout"]');
  }

  clickLogoutButton() {
    this.loginButton().click();
  }
}

export default new RegisterUserPage();
