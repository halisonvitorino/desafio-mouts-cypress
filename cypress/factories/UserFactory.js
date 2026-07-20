import { faker } from "@faker-js/faker";

class UserFactory {
  createUser(overrides = {}) {
    const defaultUser = {
      nome: faker.person.fullName(),
      email: "test_" + faker.internet.email().toLowerCase(),
      password: faker.internet.password({ length: 6 }),
      administrador: "false",
    };
    return {
      ...defaultUser,
      ...overrides,
    };
  }
}
export default new UserFactory();
