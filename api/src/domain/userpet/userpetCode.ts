import { getEq, iso, Newtype } from 'newtype-ts';
import * as N from 'fp-ts/number';

export type UserPetCode = Newtype<{ readonly USER_PET_CODE: unique symbol }, number>;

export const UserPetCode = {
  iso: iso<UserPetCode>(),
  eq: getEq<UserPetCode>(N.Eq),
} as const;
