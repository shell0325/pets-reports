import { PetCode } from '../pet/petCode';
import { CareCode } from './careCode';

/**
 * お世話
 *
 * @property id - お世話ID
 * @property name - お世話名
 * @property content - お世話の内容
 * @property time - お世話の時間
 * @property memo - メモ
 * @property pet_id - ペットID
 */

export type Care = Readonly<{
  id: CareCode;
  name: string;
  content: string;
  time: Date;
  memo: string | null;
  pet_id: PetCode;
}>;
