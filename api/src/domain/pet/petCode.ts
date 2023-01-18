import { getEq, iso, Newtype } from 'newtype-ts';
import * as S from 'fp-ts/string';

export type PetCode = Newtype<{ readonly PET_CODE: unique symbol }, string>;

export const PetCode = {
  iso: iso<PetCode>(),
  eq: getEq<PetCode>(S.Eq),
} as const;
