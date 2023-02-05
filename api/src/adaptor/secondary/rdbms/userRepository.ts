import { Injectable, NotFoundException, Provider } from '@nestjs/common';
import { PUser } from '@prisma/client';
import { User } from '~/domain/user/user';
import { UserCode } from '~/domain/user/userCode';
import {
  IUserRepository,
  USER_REPOSITORY_PROVIDE,
} from '~/domain/user/userRepository';
import {
  CreateUserInputDto,
  CreateUserOutputDto,
} from '~/usecase/commands/createUserUseCase/createUserUseCase';
import { updateUserInputDto } from '~/usecase/commands/updateUserUseCase/updateUserUseCase';
import { PrismaService } from './prisma/prismaService';

export const convertUserToUser = (pUser: PUser): User => {
  const { id, gender, location, age, ...omitPUser } = pUser;
  return {
    id: UserCode.iso.wrap(id),
    gender: gender || null,
    location: location || null,
    age: age || null,
    ...omitPUser,
  };
};

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * ユーザー登録
   * @param user ユーザー登録に必要な情報
   * @returns 作成したユーザー情報
   */
  async save(user: CreateUserInputDto): Promise<User> {
    if (!user) {
      throw new NotFoundException('ユーザー情報を入力してください。');
    }
    const pUser = await this.prisma.pUser.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
    return convertUserToUser(pUser);
  }

  /**
   * ユーザー検索
   * @param email メールアドレス
   * @returns null || 検索したユーザー情報
   */
  async findUser(email: string): Promise<CreateUserOutputDto | null> {
    if (!email) {
      throw new NotFoundException('emailを入力してください。');
    }

    const user = await this.prisma.pUser.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return null;
    } else {
      return convertUserToUser(user);
    }
  }

  async updateUser(input: updateUserInputDto): Promise<User> {
    const updateUser = await this.prisma.pUser.update({
      where: {
        id: UserCode.iso.unwrap(input.id),
      },
      data: {
        name: input.name,
        gender: input.gender,
        age: input.age,
        location: input.location,
      },
    });
    return convertUserToUser(updateUser);
  }
}

export const UserRepositoryProvider: Provider = {
  provide: USER_REPOSITORY_PROVIDE,
  useClass: UserRepository,
};
