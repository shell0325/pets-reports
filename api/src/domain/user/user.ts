import { GenderType } from '../genderType';
import { LocationType } from '../locationType';
import { UserCode } from './userCode';
import * as Eq from 'fp-ts/Eq';
import { CreateUserInputDto } from '~/usecase/commands/createUserUseCase/createUserUseCase';

/**
 * ユーザー
 *
 * @property id - ユーザID
 * @property name - 氏名
 * @property email - メールアドレス
 * @property gender - 性別
 * @property age - 年齢
 * @property location - 所在地
 */

export type User = Readonly<{
  id: UserCode;
  name: string;
  email: string;
  password: string;
  gender: GenderType | null;
  age: number | null;
  location: LocationType | null;
}>;

export type CreateUserOutputDto = {
  name: string;
  email: string;
  password: string;
  gender: GenderType | null;
  age: number | null;
  location: LocationType | null;
};

export const User = {
  eq: Eq.contramap<UserCode, User>((user) => user.id)(UserCode.eq),
  create(input: CreateUserInputDto) {
    const { name, email, password, ...omitInput } = input;
    return {
      name: name,
      email: email,
      password: password,
      ...omitInput,
    };
  },
};
