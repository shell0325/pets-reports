import { getEq, iso, Newtype } from 'newtype-ts';
import * as S from 'fp-ts/string';

export type LikeCode = Newtype<{ readonly LIKE_CODE: unique symbol }, string>;

export const LikeCode = {
  iso: iso<LikeCode>(),
  eq: getEq<LikeCode>(S.Eq),
} as const;
