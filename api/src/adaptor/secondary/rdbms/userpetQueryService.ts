import { Inject, Injectable, Provider } from '@nestjs/common';
import { UserCode } from '~/domain/user/userCode';
import { UserPet } from '~/domain/userpet/userpet';
import {
  IUserPetRepository,
  USER_PET_REPOSITORY_PROVIDE,
} from '~/domain/userpet/userpetRepository';
import {
  IUserPetQueryService,
  USER_PET_QUERY_SERVICE_PROVIDE,
} from '~/usecase/queries/userpetQueryService';

@Injectable()
export class UserPetQueryService implements IUserPetQueryService {
  constructor(
    @Inject(USER_PET_REPOSITORY_PROVIDE)
    private readonly userPetRepository: IUserPetRepository,
  ) {}

  /**
   * ペットとユーザーの検索
   * @param userId ユーザーID
   * @returns ペットとユーザー一覧
   */
  async findUserPet(userId: UserCode): Promise<UserPet[] | null> {
    const userPet = await this.userPetRepository.findUserPetByUser(userId);
    if (!userPet) {
      return null;
    }
    return userPet;
  }
}

export const UserQueryServiceProvider: Provider = {
  provide: USER_PET_QUERY_SERVICE_PROVIDE,
  useClass: UserPetQueryService,
};
