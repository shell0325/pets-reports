import {
  Inject,
  Injectable,
  NotFoundException,
  Provider,
} from '@nestjs/common';
import {
  IUserRepository,
  USER_REPOSITORY_PROVIDE,
} from '~/domain/user/userRepository';
import { CreateUserInputDto } from '~/usecase/commands/createUserUseCase/createUserUseCase';
import {
  IUserQueryService,
  USER_QUERY_SERVICE_PROVIDE,
} from '~/usecase/queries/userQueryService';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UserQueryService implements IUserQueryService {
  constructor(
    @Inject(USER_REPOSITORY_PROVIDE)
    private readonly userRepository: IUserRepository,
  ) {}

  /**
   * ユーザー重複確認
   * @param user ユーザー検索情報
   * @returns null
   */
  async registerUser(user: CreateUserInputDto | null): Promise<null> {
    const userData = await this.userRepository.findUser(user.email);
    if (userData) {
      throw new NotFoundException('作成済みのユーザーです');
    }
    return null;
  }

  /**
   * パスワードのハッシュ化
   * @param password パスワード
   * @returns ハッシュ化されたパスワード
   */
  async passwordHash(password: string): Promise<string> {
    const salt: string = await bcrypt.genSaltSync(8);

    const result = await bcrypt.hashSync(password, salt);

    return result;
  }
}

export const UserQueryServiceProvider: Provider = {
  provide: USER_QUERY_SERVICE_PROVIDE,
  useClass: UserQueryService,
};
