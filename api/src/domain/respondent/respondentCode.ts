import { getEq, iso, Newtype } from 'newtype-ts';
import * as S from 'fp-ts/string';

export type RespondentCode = Newtype<
  { readonly RESPONDENT_CODE: unique symbol },
  string
>;

export const RespondentCode = {
  iso: iso<RespondentCode>(),
  eq: getEq<RespondentCode>(S.Eq),
} as const;
