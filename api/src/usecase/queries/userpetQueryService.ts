import { UserCode } from '~/domain/user/userCode';
import { UserPet } from '~/domain/userpet/userpet';

export const USER_PET_QUERY_SERVICE_PROVIDE = 'USER_PET_QUERY_SERVICE_PROVIDE';

export interface IUserPetQueryService {
  findUserPet(userId: UserCode): Promise<UserPet[] | null>;
}
