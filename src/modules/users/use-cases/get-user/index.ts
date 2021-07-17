import { userRepository } from '../../repos';
import { GetUserController } from './get-user.controller';
import { GetUserUseCase } from './get-user.usecase';

const getUserUseCase = new GetUserUseCase(userRepository);
const getUserController = new GetUserController(getUserUseCase);

export { getUserUseCase, getUserController };
