import { getEq, iso, Newtype } from 'newtype-ts';
import * as N from 'fp-ts/number';

export type UserCode = Newtype<{ readonly USER_CODE: unique symbol }, number>;

export const UserCode = {
  iso: iso<UserCode>(),
  eq: getEq<UserCode>(N.Eq),
} as const;
