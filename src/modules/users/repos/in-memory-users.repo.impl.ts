import { UserRepository } from '../entities/interfaces/user-repository.interface';
import { User } from '../entities/types/user.type';

export class InMemoryUsersRepo implements UserRepository {
  private usersObject: User[] = [];
  add(user: User): Promise<User> {
    return new Promise<User>((resolve, _) => {
      this.usersObject.push(user);

      resolve(user);
    });
  }

  get(id: number) {
    const user = this.usersObject.find((user) => user.id === id);
    return user || null;
  }
}
