class UserFactory {
  createUser(overrrides = {}) {
    const timestamp = Date.now();

    const defaultUser = {
      nome: `Mouts ${timestamp}`,
      email: `mail${timestamp}@mouts.com`,
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
