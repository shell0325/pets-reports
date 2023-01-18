import { getEq, iso, Newtype } from 'newtype-ts';
import * as S from 'fp-ts/string';

export type CareCode = Newtype<{ readonly CARE_CODE: unique symbol }, string>;

export const CareCode = {
  iso: iso<CareCode>(),
  eq: getEq<CareCode>(S.Eq),
} as const;
