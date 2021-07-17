import { InMemoryUsersRepo } from './in-memory-users.repo.impl';

const userRepository = new InMemoryUsersRepo();

export { userRepository };
