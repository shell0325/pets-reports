/**
 * 自慢
 *
 * @property id - 自慢ID
 * @property title - タイトル
 * @property content - 自慢内容
 * @property picture - 写真
 * @property contributorID - 投稿者ID
 * @property petId - ペット
 */

import { PetCode } from '../pet/petCode';
import { UserCode } from '../user/userCode';
import { BraggingCode } from './braggingCode';

export type Bragging = Readonly<{
  id: BraggingCode;
  title: string;
  content: string;
  picture: string | null;
  contributor_id: UserCode;
  petId: PetCode;
  createdAt: Date;
  updatedAt: Date;
}>;
