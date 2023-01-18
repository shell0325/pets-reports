import { getEq, iso, Newtype } from 'newtype-ts';
import * as S from 'fp-ts/string';

export type QuestionCode = Newtype<
  { readonly QUESTION_CODE: unique symbol },
  string
>;

export const QuestionCode = {
  iso: iso<QuestionCode>(),
  eq: getEq<QuestionCode>(S.Eq),
} as const;
