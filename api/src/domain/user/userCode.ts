import { getEq, iso, Newtype } from 'newtype-ts';
import * as S from 'fp-ts/string';

export type UserCode = Newtype<{ readonly USER_CODE: unique symbol }, string>;

export const UserCode = {
  iso: iso<UserCode>(),
  eq: getEq<UserCode>(S.Eq),
} as const;
