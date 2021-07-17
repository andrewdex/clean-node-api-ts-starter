import { GetUser } from '../../entities/interfaces/user.interface';
import { UserRepository } from '../../entities/interfaces/user-repository.interface';

export class GetUserUseCase implements GetUser {
  protected userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  getUser(userId: number) {
    const user = this.userRepository.get(userId);

    console.log('Gotcha', user);

    return user;
  }
}
