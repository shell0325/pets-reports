import { getEq, iso, Newtype } from 'newtype-ts';
import * as S from 'fp-ts/string';

export type SpendingCode = Newtype<
  { readonly SPENDING_CODE: unique symbol },
  string
>;

export const SpendingCode = {
  iso: iso<SpendingCode>(),
  eq: getEq<SpendingCode>(S.Eq),
} as const;
