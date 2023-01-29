import { getEq, iso, Newtype } from 'newtype-ts';
import * as N from 'fp-ts/number';

export type SpendingCode = Newtype<
  { readonly SPENDING_CODE: unique symbol },
  number
>;

export const SpendingCode = {
  iso: iso<SpendingCode>(),
  eq: getEq<SpendingCode>(N.Eq),
} as const;
