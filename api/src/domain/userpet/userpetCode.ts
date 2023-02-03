import { getEq, iso, Newtype } from 'newtype-ts';
import * as N from 'fp-ts/number';

export type User_PetCode = Newtype<{ readonly USER_PET_CODE: unique symbol }, number>;

export const User_PetCode = {
  iso: iso<User_PetCode>(),
  eq: getEq<User_PetCode>(N.Eq),
} as const;
