import { CommandHandlers } from 'src/core/user/handler/handlers';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [...CommandHandlers],
})
export class UserModule {}
