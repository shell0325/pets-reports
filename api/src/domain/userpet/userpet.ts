import { PetCode } from '../pet/petCode';
import { UserCode } from '../user/userCode';
import { User_PetCode } from './userpetCode';
import * as Eq from 'fp-ts/Eq';
import { Pet } from '../pet/pet';

/**
 * 質問
 *
 * @property id - ペット共有ID
 * @property userId - ユーザーID
 * @property petId - ペットID
 */

export type UserPet = Readonly<{
  id: User_PetCode;
  userId: UserCode;
  petId: PetCode;
}>;

export type RegisterUserPet = Readonly<{
  userId: UserCode;
  petId: PetCode;
}>;

export const UserPet = {
  eq: Eq.contramap<User_PetCode, UserPet>((userPet) => userPet.id)(
    User_PetCode.eq,
  ),
  register(input: Pet, userId: UserCode) {
    const { id, ...omitInput } = input;
    return {
      petId: id,
      userId,
    };
  },
};
