import { getEq, iso, Newtype } from 'newtype-ts';
import * as N from 'fp-ts/number';

export type LikeCode = Newtype<{ readonly LIKE_CODE: unique symbol }, number>;

export const LikeCode = {
  iso: iso<LikeCode>(),
  eq: getEq<LikeCode>(N.Eq),
} as const;
