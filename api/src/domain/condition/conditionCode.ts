import { getEq, iso, Newtype } from 'newtype-ts';
import * as N from 'fp-ts/number';

export type ConditionCode = Newtype<
  { readonly CONDITION_CODE: unique symbol },
  number
>;

export const ConditionCode = {
  iso: iso<ConditionCode>(),
  eq: getEq<ConditionCode>(N.Eq),
} as const;
