import { getEq, iso, Newtype } from 'newtype-ts';
import * as S from 'fp-ts/string';

export type BraggingCode = Newtype<
  { readonly BRAGGING_CODE: unique symbol },
  string
>;

export const BraggingCode = {
  iso: iso<BraggingCode>(),
  eq: getEq<BraggingCode>(S.Eq),
} as const;
