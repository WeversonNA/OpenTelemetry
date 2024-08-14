import { CreateUserHandler } from './create-user-handler/create-user.handler';
import { GetUserHandler } from './get-user-handler/get-user.handler';
import { GetUsersHandler } from './get-users-handler/get-users.handler';

export const CommandHandlers = [
  GetUserHandler,
  CreateUserHandler,
  GetUsersHandler,
];
