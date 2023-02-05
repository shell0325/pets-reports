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
import { PetController } from './pet/petControllet';
import { REGISTER_PET_USE_CASE_PROVIDER } from '~/usecase/commands/registerPetUseCase/registerPetUseCase';
import { RegisterPetInteractor } from '~/usecase/commands/registerPetUseCase/registerPetInteractor';
import { PetRepository } from '~/adaptor/secondary/rdbms/petRepository';
import { PET_REPOSITORY_PROVIDE } from '~/domain/pet/petRepository';
import { PET_QUERY_SERVICE_PROVIDE } from '~/usecase/queries/petQueryService';
import { PetQueryService } from '~/adaptor/secondary/rdbms/petQueryService';
import { USER_PET_REPOSITORY_PROVIDE } from '~/domain/userpet/userpetRepository';
import { UserPetRepository } from '~/adaptor/secondary/rdbms/userpetRepository';
import { USER_PET_QUERY_SERVICE_PROVIDE } from '~/usecase/queries/userpetQueryService';
import { UserPetQueryService } from '~/adaptor/secondary/rdbms/userpetQueryService';
import { ConditionController } from './condition/conditionController';
import { REGISTER_CONDITION_USE_CASE_PROVIDER } from '~/usecase/commands/registerConditionUseCase/registerConditionUseCase';
import { RegisterConditionInteractor } from '~/usecase/commands/registerConditionUseCase/registerConditionInteractor';
import { CONDITION_REPOSITORY_PROVIDE } from '~/domain/condition/conditionRepository';
import { ConditionRepository } from '~/adaptor/secondary/rdbms/conditionRepository';
import { CONDITION_QUERY_SERVICE_PROVIDE } from '~/usecase/queries/conditionQueryService';
import { ConditionQueryService } from '~/adaptor/secondary/rdbms/conditionQueryService';

@Module({
  imports: [UseCaseModule],
  controllers: [UserController, PetController, ConditionController],
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
    {
      provide: REGISTER_PET_USE_CASE_PROVIDER,
      useClass: RegisterPetInteractor,
    },
    {
      provide: PET_REPOSITORY_PROVIDE,
      useClass: PetRepository,
    },
    {
      provide: PET_QUERY_SERVICE_PROVIDE,
      useClass: PetQueryService,
    },
    {
      provide: USER_PET_REPOSITORY_PROVIDE,
      useClass: UserPetRepository,
    },
    {
      provide: USER_PET_QUERY_SERVICE_PROVIDE,
      useClass: UserPetQueryService,
    },
    {
      provide: CONDITION_REPOSITORY_PROVIDE,
      useClass: ConditionRepository,
    },
    {
      provide: CONDITION_QUERY_SERVICE_PROVIDE,
      useClass: ConditionQueryService,
    },
    {
      provide: REGISTER_CONDITION_USE_CASE_PROVIDER,
      useClass: RegisterConditionInteractor,
    },
    Object,
    PrismaService,
  ],
})
export class AdaptorApiModule {}
