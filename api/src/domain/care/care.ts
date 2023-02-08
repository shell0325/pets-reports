import { PetCode } from '../pet/petCode';
import { CareCode } from './careCode';
import { CareType } from './careType';
import * as Eq from 'fp-ts/Eq';

/**
 * お世話
 *
 * @property id - お世話ID
 * @property name - お世話名
 * @property content - お世話の内容
 * @property time - お世話の時間
 * @property memo - メモ
 * @property petId - ペットID
 */

export type Care = Readonly<{
  id: CareCode;
  name: CareType;
  content: string;
  time: Date;
  memo: string | null;
  petId: PetCode;
  createdAt: Date;
  updatedAt: Date;
}>;

export type CareValidate = Readonly<{
  id: CareCode;
  name: CareType;
  content: string;
  time: Date;
  memo: string | null;
  petId: PetCode;
}>;

export const Care = {
  eq: Eq.contramap<CareCode, Care>((condition) => condition.id)(
    CareCode.eq,
  ),
  register(input: Care) {
    const { id, petId, ...omitInput } = input;
    return {
      id: CareCode.iso.unwrap(id),
      petId: PetCode.iso.unwrap(petId),
      ...omitInput,
    };
  },
};
