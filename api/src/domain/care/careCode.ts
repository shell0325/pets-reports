import { getEq, iso, Newtype } from 'newtype-ts';
import * as N from 'fp-ts/number';

export type CareCode = Newtype<{ readonly CARE_CODE: unique symbol }, number>;

export const CareCode = {
  iso: iso<CareCode>(),
  eq: getEq<CareCode>(N.Eq),
} as const;
