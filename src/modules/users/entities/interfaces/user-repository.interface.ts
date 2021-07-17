import { User } from '../types/user.type';

export interface UserRepository {
  add(user: User): Promise<User>;
  get(id: number): User | null;
}
