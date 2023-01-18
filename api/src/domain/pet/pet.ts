import { GenderType } from '@prisma/client';
import { PetCode } from './petCode';

/**
 * ペット
 *
 * @property id - ペットID
 * @property name - ペットの名前
 * @property picture - ペットの写真
 * @property kinds - ペットの種類
 * @property gender - ペットの性別
 * @property birthday - ペットの誕生日
 * @property color - 色
 * @property welcome_family - 家族に迎えた日
 * @property memo - メモ
 */

export type Pet = Readonly<{
  id: PetCode;
  name: string;
  picture: string | null;
  kinds: string;
  gender: GenderType;
  birthday: Date;
  color: string;
  welcome_family: Date;
  memo: string;
}>;
