export type User = {
  username: string;
  password: string;
};

export const UserFactory = {
  standardUser(overrides?: Partial<User>): User {
    return { username: 'standard_user', password: 'secret_sauce', ...overrides };
  },
};
