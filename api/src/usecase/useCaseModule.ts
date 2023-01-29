import { Module } from '@nestjs/common';
import { AdaptorRdbmsModule } from '~/adaptor/secondary/rdbms/adaptorRdbmsModule';
import { PrismaService } from '~/adaptor/secondary/rdbms/prisma/prismaService';
import { UserQueryService } from '~/adaptor/secondary/rdbms/userQueryService';
import { UserRepository } from '~/adaptor/secondary/rdbms/userRepository';
import { USER_REPOSITORY_PROVIDE } from '~/domain/user/userRepository';
import { CreateUserInteractor } from './commands/createUserUseCase/createUserInteractor';
import { CREATE_USER_USE_CASE_PROVIDER } from './commands/createUserUseCase/createUserUseCase';
import { USER_QUERY_SERVICE_PROVIDE } from './queries/userQueryService';

@Module({
  imports: [AdaptorRdbmsModule],
  providers: [
    CreateUserInteractor,
    {
      provide: USER_REPOSITORY_PROVIDE,
      useClass: UserRepository,
    },
    {
      provide: CREATE_USER_USE_CASE_PROVIDER,
      useClass: CreateUserInteractor,
    },
    {
      provide: USER_QUERY_SERVICE_PROVIDE,
      useClass: UserQueryService,
    },
    Object,
    PrismaService,
  ],
})
export class UseCaseModule {}
