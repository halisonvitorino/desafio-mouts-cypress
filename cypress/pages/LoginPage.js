class LoginPage {
  emailInput() {
    return cy.get('[data-testid="email"]');
  }
  passwordInput() {
    return cy.get('[data-testid="senha"]');
  }
  loginButton() {
    return cy.get('[data-testid="entrar"]');
  }
  signUpLink() {
    return cy.get('[data-testid="cadastrar"]');
  }
  fillEmail(email) {
    this.emailInput().type(email);
  }
  fillPassword(password) {
    this.passwordInput().type(password);
  }
  clickLoginButton() {
    this.loginButton().click();
  }
  clickSignUpLink() {
    this.signUpLink().click();
  }
  login(userData) {
    this.fillEmail(userData.email);
    this.fillPassword(userData.password);
    this.clickLoginButton();
  }
}
export default new LoginPage();
