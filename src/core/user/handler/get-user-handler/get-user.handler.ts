import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUserResponse } from 'src/core/user/response/get-user.response';
import { Repository } from 'typeorm';
import { GetUserCommand } from '../../command/get-user-command/get-user.command';
import { NotFoundException } from '@nestjs/common';
import { UserEntity } from '../../entities/user.entity';

@CommandHandler(GetUserCommand)
export class GetUserHandler
  implements ICommandHandler<GetUserCommand, GetUserResponse>
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute(command: GetUserCommand): Promise<GetUserResponse> {
    const result = await this.userRepository
      .findOneByOrFail({ id: command.id })
      .catch(() => {
        throw new NotFoundException('Usuário não encontrado.');
      });

    return result;
  }
}
