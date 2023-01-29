import { Module } from '@nestjs/common';
import { PrismaService } from '~/adaptor/secondary/rdbms/prisma/prismaService';
import { UserQueryServiceProvider } from '~/adaptor/secondary/rdbms/userQueryService';
import { UserRepositoryProvider } from '~/adaptor/secondary/rdbms/userRepository';
import { CreateUserInteractor } from '~/usecase/commands/createUserUseCase/createUserInteractor';
import { CREATE_USER_USE_CASE_PROVIDER } from '~/usecase/commands/createUserUseCase/createUserUseCase';
import { UseCaseModule } from '~/usecase/useCaseModule';
import { UserController } from './user/userController';

@Module({
  controllers: [UserController],
  providers: [
    UserQueryServiceProvider,
    {
      provide: CREATE_USER_USE_CASE_PROVIDER,
      useClass: CreateUserInteractor,
    },
    UserRepositoryProvider,
    Object,
    PrismaService,
  ],
  imports: [UseCaseModule],
})
export class AdaptorApiModule {}
