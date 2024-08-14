import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetUsersCommand } from '../../command/get-users-command/get-users.command';
import { GetUserResponse } from '../../response/get-user.response';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';

@CommandHandler(GetUsersCommand)
export class GetUsersHandler
  implements ICommandHandler<GetUsersCommand, GetUserResponse[]>
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute(): Promise<GetUserResponse[]> {
    const result = await this.userRepository.find();

    return result;
  }
}
