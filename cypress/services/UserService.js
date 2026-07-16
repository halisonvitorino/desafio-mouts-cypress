class UserService {
  createUser(user) {
    return cy.request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/usuarios`,
      body: user,
    });
  }
}

export default new UserService();
