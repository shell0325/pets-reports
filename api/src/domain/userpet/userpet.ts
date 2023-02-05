import { PetCode } from '../pet/petCode';
import { UserCode } from '../user/userCode';
import { UserPetCode } from './userpetCode';
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
  id: UserPetCode;
  userId: UserCode;
  petId: PetCode;
  createdAt: Date;
  updatedAt: Date;
}>;

export type RegisterUserPet = Readonly<{
  userId: UserCode;
  petId: PetCode;
}>;

export const UserPet = {
  eq: Eq.contramap<UserPetCode, UserPet>((userPet) => userPet.id)(
    UserPetCode.eq,
  ),
  register(input: Pet, userId: UserCode) {
    const { id, ...omitInput } = input;
    return {
      petId: id,
      userId,
    };
  },
};
