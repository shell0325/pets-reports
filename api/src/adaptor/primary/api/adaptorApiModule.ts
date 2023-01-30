import { Module } from '@nestjs/common';
import { PrismaService } from '~/adaptor/secondary/rdbms/prisma/prismaService';
import { UserQueryService } from '~/adaptor/secondary/rdbms/userQueryService';
import { UserRepository } from '~/adaptor/secondary/rdbms/userRepository';
import { CreateUserInteractor } from '~/usecase/commands/createUserUseCase/createUserInteractor';
import { CREATE_USER_USE_CASE_PROVIDER } from '~/usecase/commands/createUserUseCase/createUserUseCase';
import { UseCaseModule } from '~/usecase/useCaseModule';
import { UserController } from './user/userController';
import { USER_REPOSITORY_PROVIDE } from '~/domain/user/userRepository';
import { USER_QUERY_SERVICE_PROVIDE } from '~/usecase/queries/userQueryService';
import { UpdateUserInteractor } from '~/usecase/commands/updateUserUseCase/updateUserInteractor';
import { UPDATE_USER_USE_CASE_PROVIDER } from '~/usecase/commands/updateUserUseCase/updateUserUseCase';

@Module({
  imports: [UseCaseModule],
  controllers: [UserController],
  providers: [
    {
      provide: CREATE_USER_USE_CASE_PROVIDER,
      useClass: CreateUserInteractor,
    },
    {
      provide: USER_REPOSITORY_PROVIDE,
      useClass: UserRepository,
    },
    {
      provide: USER_QUERY_SERVICE_PROVIDE,
      useClass: UserQueryService,
    },
    {
      provide: UPDATE_USER_USE_CASE_PROVIDER,
      useClass: UpdateUserInteractor,
    },
    Object,
    PrismaService,
  ],
})
export class AdaptorApiModule {}
