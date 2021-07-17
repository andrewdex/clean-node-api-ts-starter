import { userRepository } from '../../repos';
import { CreateUserController } from './create-user.controller';
import { CreateUserUseCase } from './create-user.usecase';

const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
