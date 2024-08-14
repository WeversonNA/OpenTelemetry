import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './core/user/user.module';
import { Options } from './database/data-source/data-source.options';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...Options,
        serviceName: 'postgres',
      }),
    }),
    UserModule,
  ],
})
export class AppModule {}
