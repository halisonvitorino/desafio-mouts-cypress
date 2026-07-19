class LoginService {
  login(credentials) {
    return cy.request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/login`,
      body: credentials,
    });
  }
}

export default new LoginService();
