class UserFactory {
  createUser(overrrides = {}) {
    const uniqueId = Date.now();

    const defaultUser = {
      nome: `Mouts ${uniqueId}`,
      email: `mail${uniqueId}@mouts.com`,
      password: `123456`,
      administrador: "false",
    };
    return {
      ...defaultUser,
      ...overrrides,
    };
  }
}
export default new UserFactory();
