import {
  Inject,
  Injectable,
  NotFoundException,
  Provider,
} from '@nestjs/common';
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
  CreateUserInputDto,
  CreateUserOutputDto,
  CreateUserUseCase,
  CREATE_USER_USE_CASE_PROVIDER,
} from './createUserUseCase';

@Injectable()
export class CreateUserInteractor implements CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY_PROVIDE)
    private readonly userRepository: IUserRepository,
    @Inject(USER_QUERY_SERVICE_PROVIDE)
    private readonly userService: IUserQueryService,
  ) {}

  /**
   * ユーザー登録
   * @param input ユーザー作成情報 || null
   * @returns 登録したユーザー情報
   */
  async run(input: CreateUserInputDto | null): Promise<CreateUserOutputDto> {
    if (!input) {
      throw new NotFoundException('ユーザー情報を入力してください。');
    }
    const { name, email, password, ...omitInput } = input;
    const hashPassword = await this.userService.passwordHash(input.password);

    const createUser = User.create({
      name,
      email,
      password: hashPassword,
      ...omitInput,
    });

    const userData = await this.userService.registerUser(createUser);

    if (userData) {
      throw new NotFoundException('エラーです');
    }

    const user = await this.userRepository.save(createUser);

    return user;
  }
}

export const CreateUserInteractorProvider: Provider = {
  provide: CREATE_USER_USE_CASE_PROVIDER,
  useClass: CreateUserInteractor,
};
