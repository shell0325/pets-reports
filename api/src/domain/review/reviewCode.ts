import { getEq, iso, Newtype } from 'newtype-ts';
import * as S from 'fp-ts/string';

export type ReviewCode = Newtype<
  { readonly REVIEW_CODE: unique symbol },
  string
>;

export const ReviewCode = {
  iso: iso<ReviewCode>(),
  eq: getEq<ReviewCode>(S.Eq),
} as const;
