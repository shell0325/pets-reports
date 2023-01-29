import { getEq, iso, Newtype } from 'newtype-ts';
import * as N from 'fp-ts/number';

export type PetCode = Newtype<{ readonly PET_CODE: unique symbol }, number>;

export const PetCode = {
  iso: iso<PetCode>(),
  eq: getEq<PetCode>(N.Eq),
} as const;
