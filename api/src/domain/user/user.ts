import { GenderType } from '../genderType';
import { LocationType } from '../locationType';
import { UserCode } from './userCode';


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
  name: string,
  email: string,
  gender: GenderType,
  age: number,
  location: LocationType,
}>;
