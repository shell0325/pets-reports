import { PetCode } from '../pet/petCode';
import { UserCode } from '../user/userCode';
import { BraggingCode } from './braggingCode';
import * as Eq from 'fp-ts/Eq';

/**
 * 自慢
 *
 * @property id - 自慢ID
 * @property title - タイトル
 * @property content - 自慢内容
 * @property picture - 写真
 * @property userId - 投稿者ID
 * @property petId - ペット
 */

export type Bragging = Readonly<{
  id: BraggingCode;
  title: string;
  content: string;
  picture: string | null;
  userId: UserCode;
  petId: PetCode;
  createdAt: Date;
  updatedAt: Date;
}>;

export const Bragging = {
  eq: Eq.contramap<BraggingCode, Bragging>((bragging) => bragging.id)(
    BraggingCode.eq,
  ),
  register(input: Bragging) {
    const { id, petId, userId, ...omitInput } = input;
    return {
      id: BraggingCode.iso.unwrap(id),
      petId: PetCode.iso.unwrap(petId),
      userId: UserCode.iso.unwrap(userId),
      ...omitInput,
    };
  },
};
