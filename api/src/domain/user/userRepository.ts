import { updateUserInputDto } from '~/usecase/commands/updateUserUseCase/updateUserUseCase';
import { CreateUserOutputDto, User } from './user';
import { UserCode } from './userCode';

export const USER_REPOSITORY_PROVIDE = 'USER_REPOSITORY_PROVIDE';

export interface IUserRepository {
  findUser(email: string): Promise<CreateUserOutputDto | null>;
  save(user: User): Promise<User>;
  updateUser(input: updateUserInputDto): Promise<User>;
  findUserById(id: UserCode): Promise<CreateUserOutputDto | null>;
}
