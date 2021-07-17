import { CreateUser } from '../../entities/interfaces/user.interface';
import { UserRepository } from '../../entities/interfaces/user-repository.interface';
import { User } from '../../entities/types/user.type';

export class CreateUserUseCase implements CreateUser {
  protected userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  createUser(user: User): Promise<User> {
    return this.userRepository.add(user);
  }
}
