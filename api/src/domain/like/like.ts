import { PetCode } from '../pet/petCode';
import { UserCode } from '../user/userCode';
import { LikeCode } from './likeCode';

/**
 * いいね
 *
 * @property id - いいねID
 * @property likeUserId - いいねしたユーザーID
 * @property petId - いいね対象のペットID
 */

export type Like = Readonly<{
  id: LikeCode;
  likeUserId: UserCode;
  petId: PetCode;
}>;
