import { UserCode } from "../user/userCode";
import { RegisterUserPet, UserPet } from "./userpet";

export const USER_PET_REPOSITORY_PROVIDE = 'USER_PET_REPOSITORY_PROVIDE';

export interface IUserPetRepository {
  save(userPet: RegisterUserPet): Promise<UserPet>;
  findUserPetByUser(userId: UserCode): Promise<UserPet[] | null>;
}
