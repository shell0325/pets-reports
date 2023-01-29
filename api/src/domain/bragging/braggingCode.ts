import { getEq, iso, Newtype } from 'newtype-ts';
import * as N from 'fp-ts/number';

export type BraggingCode = Newtype<
  { readonly BRAGGING_CODE: unique symbol },
  number
>;

export const BraggingCode = {
  iso: iso<BraggingCode>(),
  eq: getEq<BraggingCode>(N.Eq),
} as const;
