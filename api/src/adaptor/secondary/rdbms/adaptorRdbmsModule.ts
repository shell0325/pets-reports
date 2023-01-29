import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prismaModule';
import {  UserRepositoryProvider } from './userRepository';

@Module({
  imports: [PrismaModule],
  providers: [
    UserRepositoryProvider,
  ],
  exports: [UserRepositoryProvider],
})
export class AdaptorRdbmsModule {}
