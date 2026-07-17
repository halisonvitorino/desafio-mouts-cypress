class UserService {
  createUserOnApi(userData) {
    return cy.request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/usuarios`,
      body: userData,
    });
  }

  getUserById(userId, options = {}) {
    return cy.request({
      method: "GET",
      url: `${Cypress.env("apiUrl")}/usuarios/${userId}`,
      ...options,
    });
  }

  deleteUser(userId) {
    return cy.request({
      method: "DELETE",
      url: `${Cypress.env("apiUrl")}/usuarios/${userId}`,
    });
  }
}

export default new UserService();
