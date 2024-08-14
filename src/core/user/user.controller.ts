import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { GetUserCommand } from './command/get-user-command/get-user.command';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserCommnand } from './command/create-user-command/create-user.command';
import { GetUsersCommand } from './command/get-users-command/get-users.command';

@Controller('users')
export class UserController {
  constructor(private readonly commandBus: CommandBus) {}

  @Get()
  getUsers() {
    return this.commandBus.execute(new GetUsersCommand());
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.commandBus.execute(new GetUserCommand(id));
  }

  @Post()
  createUser(@Body() input: CreateUserDto) {
    return this.commandBus.execute(new CreateUserCommnand(input));
  }
}
