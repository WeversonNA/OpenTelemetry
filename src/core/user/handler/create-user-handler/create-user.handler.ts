import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommnand } from '../../command/create-user-command/create-user.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserResponse } from '../../response/create-user.response';
import { UserEntity } from '../../entities/user.entity';
import { trace, context } from '@opentelemetry/api';

@CommandHandler(CreateUserCommnand)
export class CreateUserHandler
  implements ICommandHandler<CreateUserCommnand, CreateUserResponse>
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute(command: CreateUserCommnand): Promise<UserEntity> {
    const span = trace.getSpan(context.active());
    span?.setAttribute(
      'create-user-handler:execute',
      JSON.stringify(command?.model),
    );
    const result = await this.userRepository.save(command.model);

    span?.setAttribute('create-user-handler:result', JSON.stringify(result));
    return result;
  }
}
