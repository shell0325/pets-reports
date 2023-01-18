import { PetCode } from '../pet/petCode';
import { UserCode } from '../user/userCode';
import { User_PetCode } from './user_petCode';

/**
 * 質問
 *
 * @property id - ペット共有ID
 * @property user_id - ユーザーID
 * @property pet_id - ペットID
 */

export type Question = Readonly<{
  id: User_PetCode;
  user_id: UserCode;
  pet_id: PetCode;
}>;
