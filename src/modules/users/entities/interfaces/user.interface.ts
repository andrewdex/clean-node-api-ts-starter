import { User } from '../types/user.type';

export interface CreateUser {
  createUser(user: User): Promise<User>;
}

export interface GetUser {
  getUser(userId: number): User | null;
}
