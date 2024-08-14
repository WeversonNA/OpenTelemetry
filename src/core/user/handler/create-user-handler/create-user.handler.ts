import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommnand } from '../../command/create-user-command/create-user.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserResponse } from '../../response/create-user.response';
import { UserEntity } from '../../entities/user.entity';

@CommandHandler(CreateUserCommnand)
export class CreateUserHandler
  implements ICommandHandler<CreateUserCommnand, CreateUserResponse>
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute(command: CreateUserCommnand): Promise<UserEntity> {
    const result = await this.userRepository.save(command.model);

    return result;
  }
}
