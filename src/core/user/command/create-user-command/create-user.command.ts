import { CreateUserDto } from 'src/core/user/dto/create-user.dto';

export class CreateUserCommnand {
  constructor(public model: CreateUserDto) {}
}
