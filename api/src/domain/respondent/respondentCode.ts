import { getEq, iso, Newtype } from 'newtype-ts';
import * as N from 'fp-ts/number';

export type RespondentCode = Newtype<
  { readonly RESPONDENT_CODE: unique symbol },
  number
>;

export const RespondentCode = {
  iso: iso<RespondentCode>(),
  eq: getEq<RespondentCode>(N.Eq),
} as const;
