import { getEq, iso, Newtype } from 'newtype-ts';
import * as N from 'fp-ts/number';

export type ReviewCode = Newtype<
  { readonly REVIEW_CODE: unique symbol },
  number
>;

export const ReviewCode = {
  iso: iso<ReviewCode>(),
  eq: getEq<ReviewCode>(N.Eq),
} as const;
