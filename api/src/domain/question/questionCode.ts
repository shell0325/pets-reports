import { getEq, iso, Newtype } from 'newtype-ts';
import * as N from 'fp-ts/number';

export type QuestionCode = Newtype<
  { readonly QUESTION_CODE: unique symbol },
  number
>;

export const QuestionCode = {
  iso: iso<QuestionCode>(),
  eq: getEq<QuestionCode>(N.Eq),
} as const;
