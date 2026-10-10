export interface User {
  id: string;
  username: string;
  email: string;
}

export const createUser = (user: User): User => {
  return { id: Date.now().toString(), ...user };
};