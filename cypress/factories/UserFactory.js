class UserFactory {
  createUser() {
    const timestamp = Date.now();
    return {
      nome: `User ${timestamp}`,
      email: `mail${timestamp}@mouts.com`,
      password: `123456`,
      administrador: "false",
    };
  }
}
export default new UserFactory();
