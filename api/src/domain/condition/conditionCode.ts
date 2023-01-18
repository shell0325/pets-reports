import { getEq, iso, Newtype } from 'newtype-ts';
import * as S from 'fp-ts/string';

export type ConditionCode = Newtype<
  { readonly CONDITION_CODE: unique symbol },
  string
>;

export const ConditionCode = {
  iso: iso<ConditionCode>(),
  eq: getEq<ConditionCode>(S.Eq),
} as const;
