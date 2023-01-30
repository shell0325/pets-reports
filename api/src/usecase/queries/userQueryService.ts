import { User } from '~/domain/user/user';
import {
  CreateUserInputDto,
  CreateUserOutputDto,
} from '../commands/createUserUseCase/createUserUseCase';

export const USER_QUERY_SERVICE_PROVIDE = 'USER_QUERY_SERVICE_PROVIDE';

export interface IUserQueryService {
  registerUser(user: CreateUserInputDto): Promise<CreateUserOutputDto>;
  passwordHash(password: string): Promise<string>;
  findUser(email:string):Promise<User>
}
