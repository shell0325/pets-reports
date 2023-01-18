import { getEq, iso, Newtype } from 'newtype-ts';
import * as S from 'fp-ts/string';

export type User_PetCode = Newtype<{ readonly USER_PET_CODE: unique symbol }, string>;

export const User_PetCode = {
  iso: iso<User_PetCode>(),
  eq: getEq<User_PetCode>(S.Eq),
} as const;
