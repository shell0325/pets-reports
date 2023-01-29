import { User } from './user';

export const USER_REPOSITORY_PROVIDE = 'USER_REPOSITORY_PROVIDE';

export interface IUserRepository {
  findUser(email: string): Promise<User>;
  save(user: User): Promise<User>;
}
