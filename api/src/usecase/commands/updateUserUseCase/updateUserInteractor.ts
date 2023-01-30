import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '~/domain/user/user';
import {
  IUserRepository,
  USER_REPOSITORY_PROVIDE,
} from '~/domain/user/userRepository';
import {
  IUserQueryService,
  USER_QUERY_SERVICE_PROVIDE,
} from '~/usecase/queries/userQueryService';
import {
  updateUserInputDto,
  updateUserOutputDto,
  UpdateUserUseCase,
} from './updateUserUseCase';

@Injectable()
export class UpdateUserInteractor implements UpdateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY_PROVIDE)
    private readonly userRepository: IUserRepository,
    @Inject(USER_QUERY_SERVICE_PROVIDE)
    private readonly userQueryService: IUserQueryService,
  ) {}

  async run(input: updateUserInputDto): Promise<updateUserOutputDto> {
    if (!input) {
      throw new NotFoundException('ユーザー情報を入力してください。');
    }

    const user = await this.userQueryService.findUser(input.email)
    if (!user) {
      throw new NotFoundException('ユーザーが見つかりません');
    }

    const updateUser = await this.userRepository.updateUser(input);

    return User.update(updateUser);
  }
}
